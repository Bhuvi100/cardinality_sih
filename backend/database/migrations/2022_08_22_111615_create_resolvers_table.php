<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('resolvers', function (Blueprint $table) {
            $table->id();
            $table->string('mobile');
            $table->string('alternate_email')->nullable();
            $table->string('alternate_mobile')->nullable();
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('resolvers');
    }
};
