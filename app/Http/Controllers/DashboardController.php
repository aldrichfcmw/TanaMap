<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Models\Disease;
use App\Models\Growth;
use App\Models\Tool;
use App\Models\Weather;
use App\Models\WeatherData;


class DashboardController extends Controller
{
    public function index()
    {
        // dd(auth()->user()->getRoleNames());
        $title  = 'Dashboard';
        $page   = 'Overview';
        $subpage = '';
        $dataDisease   =  Disease::limit(5)->get();
        $dataGrowth   =  Growth::limit(5)->get();
        $dataTool   =  Tool::limit(5)->get();
        $dataWeather   =  weather::limit(5)->get();
        return view('dashboard.index', compact('title', 'page', 'subpage', 'dataDisease', 'dataGrowth', 'dataTool', 'dataWeather'));
    }

    public function disease()
    {
        $title  = 'Farmer';
        $page   = 'Disease';
        $subpage = '';
        $data   =  Disease::get();
        return view('admin.disease', compact('title', 'page', 'subpage', 'data'));
    }

    public function growth()
    {
        $title  = 'Farmer';
        $page   = 'Growth';
        $subpage = '';
        $data   =  Growth::get();
        return view('admin.growth', compact('title', 'page', 'subpage', 'data'));
    }

    public function tool()
    {
        $title  = 'Farmer';
        $page   = 'Tool';
        $subpage = '';
        $data = Tool::get();
        return view('admin.tool', compact('title', 'page', 'subpage', 'data'));
    }

    public function weather()
    {
        $title  = 'Farmer';
        $page   = 'Weather';
        $subpage = '';
        $data   =  Weather::get();
        return view('admin.weather', compact('title', 'page', 'subpage', 'data'));
    }

    public function weatherData()
    {
        $title  = 'Farmer';
        $page   = 'Weather';
        $subpage = 'Data';
        $data   =  WeatherData::get();
        return view('admin.weather', compact('title', 'page', 'subpage', 'data'));
    }

    public function weatherPredict()
    {
        $title  = 'Farmer';
        $page   = 'Weather';
        $subpage = 'Prediction';
        $data   =  Weather::get();
        return view('admin.weather', compact('title', 'page', 'subpage', 'data'));
    }

    public function dataEdit($type, $uname)
    {
        if ($type == 'disease') {
            $data = Disease::where('disease_name', $uname)->first();
            $title  = 'Farmer';
            $page   = 'Disease';
            $subpage = 'Edit Data';
            return view('dashboard.data-edit-disease', compact('title', 'page', 'subpage', 'data'));
        } elseif ($type == 'tool') {
            $data = Tool::where('tool_name', $uname)->first();
            $title  = 'Farmer';
            $page   = 'Tool';
            $subpage = 'Edit Data';
            return view('dashboard.data-edit-disease', compact('title', 'page', 'subpage', 'data'));
        }
    }
    public function dataUpdate(Request $request, $type, $uname)
    {
        if ($type == 'disease') {
            $validator = Validator::make($request->all(), [
                'disease_name' => 'required|string',
                'latitude' => 'required|numeric',
                'longitude' => 'required|numeric',
                'healthy_area' => 'required|integer',
                'total_area' => 'required|integer',
                'healthy_percentage' => 'required|numeric',
                'health_status' => 'required|integer',
                'image_file' => 'nullable|file|mimes:jpg,jpeg,png'
            ]);
            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }
            if ($request->image_file != null) {
                $file = $request->file('image_file');
                $originalFilename = $file->getClientOriginalName();

                $new_filename = $request->image;
                $path = $file->storeAs('images/disease', $new_filename, 'public');
            }
            $data = [
                'disease_name' => $request->disease_name,
                'latitude' =>  $request->latitude,
                'longitude' => $request->longitude,
                'healthy_area' =>  $request->healthy_area,
                'total_area' =>  $request->total_area,
                'healthy_percentage' =>  $request->healthy_percentage,
                'health_status' =>  $request->health_status,
                'image' =>  $request->image,
            ];
            // User::whereUsername($uname)->update($data);
            Disease::whereDisease_name($uname)->update($data);
            return redirect()->route($type)->with('success', 'Data ' . $type . ' berhasil diubah');
            // dd($request->all());
        }
        // dd($request->all());
    }
    public function dataDelete($type, $uname, Request $request)
    {
        if ($type == 'disease') {
            if ($uname == 'all') {
                Disease::truncate();
                $files = Storage::disk('public')->allFiles('images/disease');
                Storage::disk('public')->delete($files);
                return redirect()->route($type)->with('success', 'Semua data ' . $type . ' berhasil dihapus');
            } else {
                $data = Disease::whereDisease_name($uname);
                if (!$data) {
                    return redirect()->route($type)->with('error', 'Data ' . $type . 'gagal dihapus');
                }
                $data->delete();
                if (Storage::disk('public')->exists('images/disease/' . $request->image)) {
                    Storage::disk('public')->delete('images/disease/' . $request->image);
                }
                return redirect()->route($type)->with('success', 'Data ' . $type . ' berhasil dihapus');
            }
        }
        if ($type == 'tool') {
            if ($uname == 'all') {
                Tool::truncate();
                $files = Storage::disk('public')->allFiles('images/tool');
                Storage::disk('public')->delete($files);
                return redirect()->route($type)->with('success', 'Semua data ' . $type . ' berhasil dihapus');
            } else {
                $data = Tool::whereTool_name($uname);
                // dd($request->all());
                if (!$data) {
                    return redirect()->route($type)->with('error', 'Data ' . $type . 'gagal diubah');
                }
                $data->delete();
                if (Storage::disk('public')->exists('images/tool/' . $request->image)) {
                    Storage::disk('public')->delete('images/tool/' . $request->image);
                }
                return redirect()->route($type)->with('success', 'Data ' . $type . ' berhasil diubah');
            }
        }
        if ($type == 'growth') {
            if ($uname == 'all') {
                growth::truncate();
                return redirect()->route($type)->with('success', 'Semua data ' . $type . ' berhasil dihapus');
            } else {
                $data = growth::whereGrowth_name($uname);
                if (!$data) {
                    return redirect()->route($type)->with('error', 'Data ' . $type . 'gagal dihapus');
                }
                $data->delete();
                return redirect()->route($type)->with('success', 'Data ' . $type . ' berhasil dihapus');
            }
        }
        if ($type == 'weather') {
            if ($uname == 'all') {
                weather::truncate();
                return redirect()->route($type)->with('success', 'Semua data ' . $type . ' berhasil dihapus');
            } else {
                $data = weather::whereWeather_name($uname);
                if (!$data) {
                    return redirect()->route($type)->with('error', 'Data ' . $type . 'gagal dihapus');
                }
                $data->delete();
                return redirect()->route($type)->with('success', 'Data ' . $type . ' berhasil dihapus');
            }
        }
        if ($type == 'weather.data') {
            if ($uname == 'all') {
                weatherData::truncate();
                return redirect()->route($type)->with('success', 'Semua data ' . $type . ' berhasil dihapus');
            } else {
                $data = weatherData::whereWeather_name($uname);
                if (!$data) {
                    return redirect()->route('weather.data')->with('error', 'Data gagal dihapus');
                }
                $data->delete();
                return redirect()->route('weather.data')->with('success', 'Data berhasil dihapus');
            }
        }
    }
}
