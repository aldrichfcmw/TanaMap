<?php

namespace App\Http\Controllers;

use App\Models\Disease;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;

class DataPostController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }

    public function storeDisease(Request $request)
    {
        // $request->validate([
        //     'disease_id' => 'required',
        //     'latitude' => 'required',
        //     'longitude' => 'required',
        //     'image' => 'required|image|mimes:jpeg,png,jpg,JPG,PNG|max:2048',
        // ]);

        // // Mengambil lokasi dari request
        // $latitude = $request->latitude;
        // $longitude = $request->longitude;

        // // Menentukan disease_id berdasarkan lokasi
        // $disease_id = $request->disease_id;
        // if ($this->isInGresik($latitude, $longitude)) {
        //     $disease_id = 'GSK'; // Gresik
        // } elseif ($this->isInSidoarjo($latitude, $longitude)) {
        //     $disease_id = 'SDA'; // Sidoarjo
        // }

        // // Menyimpan data
        // $diseaseData = new Disease;
        // $diseaseData->disease_id = $disease_id;
        // $diseaseData->latitude = $latitude;
        // $diseaseData->longitude = $longitude;

        // // Simpan gambar
        // if ($request->hasFile('image')) {
        //     $image = $request->file('image');
        //     $imageName = time() . '.' . $image->getClientOriginalExtension();
        //     $image->move(public_path('images'), $imageName);
        //     $diseaseData->image = $imageName;
        // }

        // $diseaseData->save();
        

        return response()->json(['message' => 'Data berhasil disimpan'], 200);
    }

    // Fungsi untuk mengecek apakah lokasi berada di Gresik
    private function isInGresik($latitude, $longitude)
    {
        // Batas koordinat Gresik (contoh, sesuaikan dengan batas wilayah sebenarnya)
        $gresikBoundaries = [
            'min_lat' => -7.192,
            'max_lat' => -7.075,
            'min_lng' => 112.561,
            'max_lng' => 112.798,
        ];

        // Periksa apakah koordinat berada di dalam batas Gresik
        if ($latitude >= $gresikBoundaries['min_lat'] && $latitude <= $gresikBoundaries['max_lat'] &&
            $longitude >= $gresikBoundaries['min_lng'] && $longitude <= $gresikBoundaries['max_lng']) {
            return true;
        }

        return false;
    }

    // Fungsi untuk mengecek apakah lokasi berada di Sidoarjo
    private function isInSidoarjo($latitude, $longitude)
    {
        // Batas koordinat Sidoarjo (contoh, sesuaikan dengan batas wilayah sebenarnya)
        $sidoarjoBoundaries = [
            'min_lat' => -7.508,
            'max_lat' => -7.371,
            'min_lng' => 112.637,
            'max_lng' => 112.807,
        ];

        // Periksa apakah koordinat berada di dalam batas Sidoarjo
        if ($latitude >= $sidoarjoBoundaries['min_lat'] && $latitude <= $sidoarjoBoundaries['max_lat'] &&
            $longitude >= $sidoarjoBoundaries['min_lng'] && $longitude <= $sidoarjoBoundaries['max_lng']) {
            return true;
        }

        return false;
    }

    private function isInYogyakarta($latitude, $longitude)
    {
        // Batas koordinat Yogyakarta
        $yogyakartaBoundaries = [
            'min_lat' => -7.952,
            'max_lat' => -7.725,
            'min_lng' => 110.212,
            'max_lng' => 110.530,
        ];

        // Periksa apakah koordinat berada di dalam batas Yogyakarta
        if ($latitude >= $yogyakartaBoundaries['min_lat'] && $latitude <= $yogyakartaBoundaries['max_lat'] &&
            $longitude >= $yogyakartaBoundaries['min_lng'] && $longitude <= $yogyakartaBoundaries['max_lng']) {
            return true;
        }

        return false;
    }


}
