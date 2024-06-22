<?php

namespace App\Http\Controllers;

use App\Models\Disease;
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


        // // Simpan gambar
        // if ($request->hasFile('image')) {
        //     $image = $request->file('image');
        //     $imageName = time() . '.' . $image->getClientOriginalExtension();
        //     $image->move(public_path('images'), $imageName);
        //     $diseaseData->image = $imageName;
        // }

        // return response()->json(['message' => 'Data berhasil disimpan'], 200);
    }

    public function storeData(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'key1' => 'required|string',
            'key2' => 'required|string',
            // Tambahkan aturan validasi sesuai kebutuhan Anda
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = [
            'key1'     => $request->key1,
            'key2'  => $request->key2,
        ];

        return response()->json(['message' => 'Data stored successfully']);
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
