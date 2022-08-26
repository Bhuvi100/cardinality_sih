<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('scrapped_grievances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('module_id')->constrained('modules')->cascadeOnDelete();
            $table->string('subject');
            $table->text('description');
            $table->json('other_data')->nullable();
            $table->timestamp('resolved_at')->nullable();
            $table->foreignId('resolved_by')->nullable()->constrained('users');
            $table->text('solution')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('scrapped_grievances');
    }
};
