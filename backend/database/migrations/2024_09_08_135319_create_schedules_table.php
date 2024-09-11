<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id('schedule_id');
            $table->unsignedBigInteger('section_course_id');
            $table->enum('day', ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
            $table->time('start_time');
            $table->time('end_time');
            $table->unsignedBigInteger('faculty_id');
            $table->unsignedBigInteger('room_id');
            $table->timestamps();

            $table->foreign('section_course_id')
                  ->references('section_course_id')->on('section_courses')
                  ->onDelete('cascade');
                  
            $table->foreign('faculty_id')
                  ->references('id')->on('faculty')
                  ->onDelete('cascade');
                  
            $table->foreign('room_id')
                  ->references('room_id')->on('rooms')
                  ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('schedules');
    }
};