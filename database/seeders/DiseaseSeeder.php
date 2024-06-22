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
            'disease_name' => 'GSK-001',
            'latitude'  => '-7.273288',
            'longitude' => '112.578240',
            'healthy_area' => '342614',
            'total_area' => '984828',
            'healthy_percentage' => '34.78922207735767',
            'health_status' => '1',
            'crop_image' => '',
        ]);
    }
}
