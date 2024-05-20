<?php

namespace Database\Seeders;

use App\Models\Disease;
use Illuminate\Database\Seeder;

class DiseaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Disease::create([
            'disease_id'=> 'GSK-001',
            'latitude'  => '-7.273288',
            'longitude' => '112.578240',
            'image'     => '2024-05-20-DJI_0084.JPG',
        ]);
        
    }
}
