<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;


class DashboardController extends Controller
{
    public function index(){
        $title  = 'Dashboard';
        $page   = 'Overview';
        return view('dashboard.index',compact('title','page'));
    }

    public function user(){
        $title  = 'Dashboard';
        $page   = 'User';
        $data   =  User::get();
        return view('dashboard.user',compact('title','page','data'));
    }
    
    public function user_add(){
        $title  = 'Dashboard';
        $page   = 'Add User';
        return view('dashboard.add-user',compact('title','page'));
    }

    public function storeUser(Request $request){
        // dd($request->all());
        $data =[
            'name'     => $request->name,
            'username'  => $request->username,
            'email'     => $request->email,
            'password'  => Hash::make($request->password),
        ];
        Session::flash('message', 'Akun berhasil dibuat');
        // dd($data);
        User::create($data);
        return redirect()->route('user');
    }
}
