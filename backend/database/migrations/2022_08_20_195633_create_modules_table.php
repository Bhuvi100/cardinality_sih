<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('modules', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->string('image');
            $table->json('fields');
            $table->json('rules');
            $table->json('css');
            $table->json('classes');
            $table->boolean('for_institute')->default(false);
            $table->boolean('institute_specific')->default(false);
            $table->foreignId('added_by')->constrained('users');
            $table->boolean('is_hidden')->default(false);
            $table->timestamps();
        });

        (new \Database\Seeders\BaseModulesSeeder)->run();
    }

    public function down()
    {
        Schema::dropIfExists('modules');
    }
};
