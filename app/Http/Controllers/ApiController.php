<?php

namespace App\Http\Controllers;

use App\Models\Disease;
use App\Models\Weather;
use App\Models\Growth;
use App\Models\Tool;
use Carbon\Carbon;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
// use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ApiController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }

    public function storeData(Request $request)
    {
        // $validator = Validator::make($request->all(), [
        //     'key1' => 'required|string',
        //     'key2' => 'required|string',
        //     // Tambahkan aturan validasi sesuai kebutuhan Anda
        // ]);

        // if ($validator->fails()) {
        //     return response()->json(['errors' => $validator->errors()], 422);
        // }

        // $data = [
        //     'key1'     => $request->key1,
        //     'key2'  => $request->key2,
        // ];

        return response()->json(['message' => 'Data stored successfully']);
    }

    public function storeDisease(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'crop_image' => 'required|file|mimes:jpg,jpeg,png',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'healthy_area' => 'required|integer',
            'total_area' => 'required|integer',
            'healthy_percentage' => 'required|numeric',
            'health_status' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $latitude = $request->latitude;
        $longitude = $request->longitude;


        if ($this->isInGresik($latitude, $longitude)) {
            $disease_name_prefix = 'GSK'; // Gresik
        } elseif ($this->isInSidoarjo($latitude, $longitude)) {
            $disease_name_prefix = 'SDA'; // Sidoarjo
        } elseif ($this->isInYogyakarta($latitude, $longitude)) {
            $disease_name_prefix = 'YK'; //Yogyakarta
        } else {
            return response()->json(['error' => 'Lokasi tidak valid'], 422);
        }

        $disease_name = Disease::generateName($disease_name_prefix);

        $currentDateTime = Carbon::now();
        $timestamp = $currentDateTime->format('Y-m-d-His');

        $file = $request->file('crop_image');
        $originalFilename = $file->getClientOriginalName();

        $new_filename = $timestamp . '_' . $originalFilename;
        $path = $file->storeAs('images/disease', $new_filename, 'public');

        $data = [
            'disease_name' => $disease_name,
            'latitude' =>  $request->latitude,
            'longitude' => $request->longitude,
            'healthy_area' =>  $request->healthy_area,
            'total_area' =>  $request->total_area,
            'healthy_percentage' =>  $request->healthy_percentage,
            'health_status' =>  $request->health_status,
            'image' =>  $new_filename,
        ];
        Disease::create($data);

        return response()->json(['message' => 'Data berhasil disimpan'], 200);
    }

    public function storeTool(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'image' => 'required|file|mimes:jpg,jpeg,png',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'land_area' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $latitude = $request->latitude;
        $longitude = $request->longitude;

        if ($this->isInGresik($latitude, $longitude)) {
            $name_prefix = 'GSK'; // Gresik
        } elseif ($this->isInSidoarjo($latitude, $longitude)) {
            $name_prefix = 'SDA'; // Sidoarjo
        } elseif ($this->isInYogyakarta($latitude, $longitude)) {
            $name_prefix = 'YK'; //Yogyakarta
        } else {
            return response()->json(['error' => 'Lokasi tidak valid'], 422);
        }

        $tool_name = Tool::generateName($name_prefix);

        $currentDateTime = Carbon::now();
        $timestamp = $currentDateTime->format('Y-m-d-His');

        $file = $request->file('image');
        $originalFilename = $file->getClientOriginalName();

        $new_filename = $timestamp . '_' . $originalFilename;
        $path = $file->storeAs('images/tool', $new_filename, 'public');

        $data = [
            'tool_name' => $tool_name,
            'land_area' =>  $request->land_area,
            'latitude' =>  $request->latitude,
            'longitude' => $request->longitude,
            'image' =>  $new_filename,
        ];
        Tool::create($data);

        return response()->json(['message' => 'Data berhasil disimpan'], 200);
    }

    public function storeWeather(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'type' => 'required|string|max:8',
            'time' => 'required',
            'description' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $name_prefix = "Data";
        $weather_name = Weather::generateName($name_prefix);

        $data = [
            'weather_name' => $weather_name,
            'type' =>  $request->type,
            'time' => $request->time,
            'description' =>  $request->description,
        ];
        Weather::create($data);

        return response()->json(['message' => 'Data berhasil disimpan'], 200);
    }

    public function storeGrowth(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'color' => 'required|string|max:7',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $latitude = $request->latitude;
        $longitude = $request->longitude;

        if ($this->isInGresik($latitude, $longitude)) {
            $name_prefix = 'GSK'; // Gresik
        } elseif ($this->isInSidoarjo($latitude, $longitude)) {
            $name_prefix = 'SDA'; // Sidoarjo
        } elseif ($this->isInYogyakarta($latitude, $longitude)) {
            $name_prefix = 'YK'; //Yogyakarta
        } else {
            return response()->json(['error' => 'Lokasi tidak valid'], 422);
        }

        $growth_name = Growth::generateName($name_prefix);


        $data = [
            'growth_name' => $growth_name,
            'color' => $request->color,
            'latitude' =>  $request->latitude,
            'longitude' => $request->longitude,
        ];
        Growth::create($data);

        return response()->json(['message' => 'Data berhasil disimpan'], 200);
    }


    private function isInGresik($latitude, $longitude)
    {
        // Definisikan batas koordinat untuk Gresik
        $northBoundary = -7.246194;
        $southBoundary = -7.400000;
        $eastBoundary = 112.708333;
        $westBoundary = 112.500000;

        // Periksa apakah koordinat berada dalam batas
        if (
            $latitude <= $northBoundary && $latitude >= $southBoundary &&
            $longitude <= $eastBoundary && $longitude >= $westBoundary
        ) {
            return true;
        } else {
            return false;
        }
    }

    private function isInSidoarjo($latitude, $longitude)
    {
        // Definisikan batas koordinat untuk Sidoarjo
        $northBoundary = -7.291416;
        $southBoundary = -7.559444;
        $eastBoundary = 112.850000;
        $westBoundary = 112.533333;

        // Periksa apakah koordinat berada dalam batas
        if (
            $latitude <= $northBoundary && $latitude >= $southBoundary &&
            $longitude <= $eastBoundary && $longitude >= $westBoundary
        ) {
            return true;
        } else {
            return false;
        }
    }

    private function isInYogyakarta($latitude, $longitude)
    {
        // Definisikan batas koordinat untuk Jogja
        $northBoundary = -7.748917;
        $southBoundary = -7.836944;
        $eastBoundary = 110.450000;
        $westBoundary = 110.323333;

        // Periksa apakah koordinat berada dalam batas
        if (
            $latitude <= $northBoundary && $latitude >= $southBoundary &&
            $longitude <= $eastBoundary && $longitude >= $westBoundary
        ) {
            return true;
        } else {
            return false;
        }
    }
}
