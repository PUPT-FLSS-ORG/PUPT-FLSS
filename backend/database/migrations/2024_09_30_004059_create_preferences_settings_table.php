<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePreferencesSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   
        Schema::create('preferences_settings', function (Blueprint $table) {
            $table->increments('preferences_settings_id');
            $table->unsignedBigInteger('faculty_id')->nullable();
            $table->tinyInteger('is_enabled')->default(1)->comment('1 for enabled, 0 for disabled');
            $table->timestamps();

            $table->foreign('faculty_id')
                  ->references('id')->on('faculty')
                  ->onDelete('cascade')
                  ->onUpdate('cascade');

            $table->unique(['faculty_id'], 'unique_faculty_setting');
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('preferences_settings');
    }
}