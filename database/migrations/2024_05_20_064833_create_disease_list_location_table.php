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
        Schema::create('table_disease', function (Blueprint $table) {
            $table->id();
            $table->string('disease_name');
            $table->decimal('latitude', 10, 7);
            $table->decimal('longitude', 10, 7);
            $table->bigInteger('healthy_area');
            $table->bigInteger('total_area');
            $table->decimal('healthy_percentage', 10, 7);
            $table->bigInteger('health_status');
            $table->string('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('disease_table');
    }
};