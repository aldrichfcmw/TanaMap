<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WeatherData extends Model
{
    use HasFactory;

    protected $table = 'table_weather_data';

    protected $fillable = [
        'weather_name',
        'temp',
        'hum',
        'press',
        'uv',
        'rainfall',
        'windspeed',
        'winddir',
        'latitude',
        'longitude',
        'time'
    ];

    public static function generateName($prefix)
    {
        $lastRecord = self::where('weather_name', 'like', $prefix . '-%')
            ->orderBy('weather_name', 'desc')
            ->first();

        if ($lastRecord) {
            $lastNumber = (int) substr($lastRecord->weather_name, strlen($prefix) + 1);
            $newNumber = $lastNumber + 1;
        } else {
            $newNumber = 1;
        }

        return $prefix . '-' . str_pad($newNumber, 3, '0', STR_PAD_LEFT);
    }
}
