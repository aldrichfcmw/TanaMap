<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PetaniController extends Controller
{
    //
    public function index(){
        $title  = 'Dashboard';
        $page   = 'Overview';
        return view('farmer.index',compact('title','page'));
    }

    public function maps(){
        $title  = 'Maps';
        $page   = 'HPT';
        return view('farmer.maps',compact('title','page'));
    }

    public function tool(){
        $title  = 'Dashboard';
        $page   = 'Tool';
        return view('maps.index',compact('title','page'));
    }

    public function growth(){
        $title  = 'Dashboard';
        $page   = 'Growth';
        return view('maps.index',compact('title','page'));
    }

    public function weather(){
        $title  = 'Dashboard';
        $page   = 'Weather';
        return view('farmer.weather',compact('title','page'));
    }
}
