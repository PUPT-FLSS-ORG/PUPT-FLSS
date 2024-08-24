<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('curricula_program', function (Blueprint $table) {
            $table->increments('curricula_program_id');
            $table->integer('curriculum_id')->unsigned()->nullable();
            $table->integer('program_id')->unsigned()->nullable();

            $table->foreign('curriculum_id')->references('curriculum_id')->on('curricula')->onDelete('cascade');
            $table->foreign('program_id')->references('program_id')->on('programs')->onDelete('cascade');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('curricula_program');
    }
};