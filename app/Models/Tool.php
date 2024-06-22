<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    use HasFactory;

    protected $fillable = [
        'tool_name',
        'land_area',
        'latitude',
        'longitude',
        'image'
    ];

    public static function generateName($prefix)
    {
        $lastRecord = self::where('tool_name', 'like', $prefix . '-%')
            ->orderBy('tool_name', 'desc')
            ->first();

        if ($lastRecord) {
            $lastNumber = (int) substr($lastRecord->tool_name, strlen($prefix) + 1);
            $newNumber = $lastNumber + 1;
        } else {
            $newNumber = 1;
        }

        return $prefix . '-' . str_pad($newNumber, 3, '0', STR_PAD_LEFT);
    }
}
