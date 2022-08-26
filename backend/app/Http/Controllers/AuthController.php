<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required','email'],
            'password' => ['required'],
        ]);

        if (!User::where('email', $request->email)->exists()) {
            return response()->json([
                'status' => 'failed',
                'errors' => ['email' => 'Email does not exist'],
            ],422);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('LaravelSanctumAuth')->plainTextToken;

            return response()->json([
                'status' => 'success',
                'token' => $token,
                'user' => new UserResource($user)
            ]);
        }

        return response()->json([
            'status' => 'failed',
            'errors' => ['email' => 'Password does not match'],
        ], 422);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        if (User::where('email', $request->email)->exists()) {
            return response()->json([
                'errors' => ['email' => ['Email already exists, please login to continue']]
            ],422);
        }

        $input = $request->all();

        $input['password'] = Hash::make($input['password']);
        $input['role']  = $input['role'] === 'institute' ? 'institute' : 'user';

        $user = User::forceCreate($request->only(['name',
                'email']) + ['role' => $input['role'], 'password' => $input['password']]);

        if ($input['role'] === 'institute') {
            $input['verification_document'] = $request->file('verification_document')->store('verification_documents');

            $user->institute()->create($request->only([ 'institute_code',
                    'institute_name',
                    'state',
                    'mobile'] ) + ['verification_document' => $input['verification_document']]);
        } else {
            $user->public_user()->create($request->only([ 'institute_name',
                'state',
                'mobile',
                'role']));
        }

        $user->sendEmailVerificationNotification();
        $token = $user->createToken('LaravelSanctumAuth')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'token' => $token,
            'user' => $user
        ]);
    }

    public function sendVerificationEmail(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();

        return response()->json([
            'status' => 'success'
        ]);
    }

    public function verifyEmail(Request $request)
    {
        $user = User::findOrFail($request->route('id'));

        if (! hash_equals((string) $request->route('id'),
            (string) $user->getKey())) {
            return response('Unauthorized', 401);
        }

        if (! hash_equals((string) $request->route('hash'),
            sha1($user->getEmailForVerification()))) {
            return response('Unauthorized', 401);
        }

        if (! $user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();

            event(new Verified($user));
        }

        return redirect()->away(env('FRONTEND_DOMAIN') . '/dashboard');
    }

    public function sendPasswordResetMail(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::RESET_LINK_SENT
            ? response()->json(['status' => 'success'])
            : response()->json(['status' => 'failed','errors' => ['email' => $status]]);
    }

    public function redirectPasswordReset(string $token)
    {
        return redirect()->away(env('FRONTEND_DOMAIN') . '/reset/' . $token);
    }

    public function handlePasswordReset(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        return $status === Password::PASSWORD_RESET
            ? response()->json(['status' => 'success'])
            : response()->json(['status' => 'failed','errors' => ['email' => $status]]);
    }
}
