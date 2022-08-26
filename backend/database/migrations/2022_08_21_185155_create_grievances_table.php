<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('grievances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('module_id')->constrained('modules')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('subject');
            $table->text('description');
            $table->json('other_data')->nullable();
            $table->text('textarea_1')->nullable();
            $table->text('textarea_2')->nullable();
            $table->text('textarea_3')->nullable();
            $table->text('textarea_4')->nullable();
            $table->unsignedInteger('suggested_priority')->nullable();
            $table->unsignedInteger('possible_duplicate_id')->nullable();
            $table->timestamp('resolved_at')->nullable();;
            $table->foreignId('resolved_by')->nullable()->constrained('users');
            $table->text('solution')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('grievances');
    }
};
