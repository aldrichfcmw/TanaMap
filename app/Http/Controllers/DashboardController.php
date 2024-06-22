<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use App\Models\Disease;
use App\Models\Growth;
use App\Models\Tool;
use App\Models\Weather;


class DashboardController extends Controller
{
    public function index()
    {
        // dd(auth()->user()->getRoleNames());
        $title  = 'Dashboard';
        $page   = 'Overview';
        $subpage = '';
        return view('dashboard.index', compact('title', 'page', 'subpage'));
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
        return view('admin.growth', compact('title', 'page', 'subpage'));
    }

    public function tool()
    {
        $title  = 'Farmer';
        $page   = 'Tool';
        $subpage = '';
        return view('admin.tool', compact('title', 'page', 'subpage'));
    }

    public function weather()
    {
        $title  = 'Farmer';
        $page   = 'Weather';
        $subpage = '';
        return view('admin.weather', compact('title', 'page', 'subpage'));
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
    public function dataDelete($type, $uname)
    {
        if ($type == 'disease') {
            $data = Disease::whereDisease_name($uname);
            if (!$data) {
                return redirect()->route($type)->with('error', 'Data ' . $type . 'gagal diubah');
            }
            $data->delete();
            if (Storage::disk('public')->exists('images/disease/' . $data->image)) {
                Storage::disk('public')->delete('images/disease/' . $data->image);
            }
            return redirect()->route($type)->with('success', 'Data ' . $type . ' berhasil diubah');
        }
    }
}
