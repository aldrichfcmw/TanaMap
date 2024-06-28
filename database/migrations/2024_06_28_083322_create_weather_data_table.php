<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('table_weather_data', function (Blueprint $table) {
            $table->id();
            $table->string('weather_name');
            $table->bigInteger('temp');
            $table->bigInteger('hum');
            $table->double('press');
            $table->bigInteger('uv');
            $table->double('rainfall');
            $table->double('windspeed');
            $table->string('winddir');
            $table->double('latitude');
            $table->double('longitude');
            $table->timestamp('time')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('weather_data');
    }
};
