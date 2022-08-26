<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('bot_grievances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('module_id')->constrained('modules')->cascadeOnDelete();
            $table->string('user_id');
            $table->string('subject');
            $table->text('description');
            $table->json('other_data');
            $table->text('textarea_1');
            $table->text('textarea_2');
            $table->text('textarea_3');
            $table->text('textarea_4');
            $table->unsignedInteger('suggested_priority')->nullable();
            $table->unsignedInteger('possible_duplicate_id')->nullable();
            $table->boolean('is_complete')->default(false);
            $table->timestamp('resolved_at');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('bot_grievances');
    }
};
