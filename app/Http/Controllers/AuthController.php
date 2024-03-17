<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //
    public function signin(){
        $title = 'Sign';
        $page   = 'In';
        return view('auth.signin',compact('title','page'));
    }
    public function signup(){
        $title = 'Sign';
        $page   = 'Up';
        return view('auth.signup',compact('title','page'));
    }
    public function signout(){
        Auth::logout();
        return redirect()->route('signin')->with('Succes','Akun telah terlogout');
    }

    public function auth_signin(Request $request){
        dd($request->all());
        // $data = [
        //     'email'     => $request -> email,
        //     'password'  => $request -> password,
        // ];

        // if(Auth::attemp($data)){
        //     return redirect()->route('dashboard');
        // } else {
        //     return redirect()->route('signin')->with('Error','Email atau Password Salah');
        // };
    }
}