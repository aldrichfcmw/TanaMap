<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Disease;
use App\Models\Growth;
use App\Models\Tool;
use App\Models\Weather;
use App\Models\WeatherData;

class PetaniController extends Controller
{
    //
    public function index()
    {
        $title  = 'Dashboard';
        $page   = 'Overview';
        return view('farmer.index', compact('title', 'page'));
    }

    public function disease()
    {
        $title  = 'Dashboard';
        $page   = 'HPT';
        $data   = Disease::get();
        $avgLat = $data->avg('latitude');
        $avgLong = $data->avg('longitude');
        return view('farmer.disease', compact('title', 'page', 'data', 'avgLat', 'avgLong'));
    }

    public function tool()
    {
        $title  = 'Dashboard';
        $page   = 'Tool';
        $data   = Tool::get();
        $avgLat = $data->avg('latitude');
        $avgLong = $data->avg('longitude');
        return view('farmer.tool', compact('title', 'page', 'data', 'avgLat', 'avgLong'));
    }

    public function growth()
    {
        $title  = 'Dashboard';
        $page   = 'Growth';
        $data   = Growth::get();
        $avgLat = $data->avg('latitude');
        $avgLong = $data->avg('longitude');
        return view('farmer.growth', compact('title', 'page', 'data', 'avgLat', 'avgLong'));
    }

    public function weather()
    {
        $title  = 'Dashboard';
        $page   = 'Weather';
        $data   = WeatherData::orderBy('id', 'DESC')->get()->first();
        $hari   = Weather::where('type', 'harian')->orderBy('id', 'DESC')->limit(6)->get();
        $jam    = Weather::where('type', 'jam')->orderBy('id', 'DESC')->limit(6)->get();
        return view('farmer.weather', compact('title', 'page', 'hari', 'jam', 'data'));
    }
}
