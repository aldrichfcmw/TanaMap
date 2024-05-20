<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Disease extends Model
{

    protected $table = 'disease_table';


    protected $fillable = [
        'disease_id',
        'latitude',
        'longitude',
        'image',
    ];
}