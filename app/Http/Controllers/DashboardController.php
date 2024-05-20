<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Disease;


class DashboardController extends Controller
{
    public function index(){
        // dd(auth()->user()->getRoleNames());
        $title  = 'Dashboard';
        $page   = 'Overview';
        return view('dashboard.index',compact('title','page'));
        // if(Auth()->user()->can('farmer')){
        //     $title  = 'Dashboard';
        //     $page   = 'Overview';
        //     return view('dashboard.index',compact('title','page'));
        // }
        // return abort(403);
    }

    public function hpt(){
        $title  = 'Farmer';
        $page   = 'HPT';
        $data   =  Disease::get();
        return view('admin.hpt',compact('title','page','data'));
    }

    public function growth(){
        $title  = 'Farmer';
        $page   = 'Growth';
        return view('admin.growth',compact('title','page'));
    }

    public function tool(){
        $title  = 'Farmer';
        $page   = 'Tool';
        return view('admin.tool',compact('title','page'));
    }

    public function weather(){
        $title  = 'Farmer';
        $page   = 'Weather';
        return view('admin.weather',compact('title','page'));
    }

    
}
