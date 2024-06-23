<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Growth extends Model
{
    use HasFactory;

    protected $table = 'table_growth';

    protected $fillable = [
        'growth_name',
        'color',
        'latitude',
        'longitude',
    ];

    public static function generateName($prefix)
    {
        $lastRecord = self::where('growth_name', 'like', $prefix . '-%')
            ->orderBy('growth_name', 'desc')
            ->first();

        if ($lastRecord) {
            $lastNumber = (int) substr($lastRecord->growth_name, strlen($prefix) + 1);
            $newNumber = $lastNumber + 1;
        } else {
            $newNumber = 1;
        }

        return $prefix . '-' . str_pad($newNumber, 3, '0', STR_PAD_LEFT);
    }
}
