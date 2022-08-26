<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [\App\Http\Controllers\AuthController::class, 'register']);
Route::post('login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::get('/email/verify/{id}/{hash}', [\App\Http\Controllers\AuthController::class, 'verifyEmail'])
    ->middleware(['signed'])->name('verification.verify');
Route::post('/auth/send_reset', [\App\Http\Controllers\AuthController::class, 'sendPasswordResetMail']);
Route::get('/auth/reset/{token}', [\App\Http\Controllers\AuthController::class, 'redirectPasswordReset'])
    ->name('password.reset');
Route::post('/auth/reset', [\App\Http\Controllers\AuthController::class, 'handlePasswordReset']);

Route::get('/colleges/{state}/{query}', function ($state, $query) {
    return response()->json(['data' => \App\Models\College::getColleges($state, $query)]);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('modules/{module}', [\App\Http\Controllers\ModulesController::class, 'show']);

