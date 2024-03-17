<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

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

    public function signinAuth(Request $request){
        $validator = Validator::make($request->all(), [
            'email'     => 'required|email',
            'password'  => 'required|min:6',
        ]);

        if ($validator->fails()) {
            // Jika validasi gagal, kembali ke halaman sebelumnya dengan input lama dan pesan kesalahan
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $data = [
            'email'     => $request -> email,
            'password'  => $request -> password,
        ];

        if(Auth::attempt($data)){
            return redirect()->route('dashboard');
        } else {
            return redirect()->route('signin')->with('error','Email atau Password Salah');
        };
    }
}
