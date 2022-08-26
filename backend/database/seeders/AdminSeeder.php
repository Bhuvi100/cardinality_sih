<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@aicte-india.org',
            'password' => \Hash::make('12345678'),
            'role' => 'admin',
            'email_verified_at' => now(),
        ]);
    }
}
