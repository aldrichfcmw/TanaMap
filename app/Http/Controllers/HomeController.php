<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        $title = 'TanaMap';
        return view('home',compact('title'));
    }
    public function coba(){
        $title = 'TanaMap';
        $page = 'coba';
        return view('template.template-maps',compact('title','page'));
    }
}
