<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disease extends Model
{
    use HasFactory;

    protected $table = 'table_disease';


    protected $fillable = [
        'disease_name',
        'latitude',
        'longitude',
        'healthy_area',
        'total_area',
        'healthy_percentage',
        'health_status',
        'image',
    ];

    public static function generateName($prefix)
    {
        $lastRecord = self::where('disease_name', 'like', $prefix . '-%')
            ->orderBy('disease_name', 'desc')
            ->first();

        if ($lastRecord) {
            $lastNumber = (int) substr($lastRecord->disease_name, strlen($prefix) + 1);
            $newNumber = $lastNumber + 1;
        } else {
            $newNumber = 1;
        }

        return $prefix . '-' . str_pad($newNumber, 3, '0', STR_PAD_LEFT);
    }
}
