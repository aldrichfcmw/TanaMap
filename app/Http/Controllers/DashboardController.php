<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;


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
    
    public function userAdd(){
        $title  = 'Dashboard';
        $page   = 'Add User';
        return view('dashboard.user-add',compact('title','page'));
    }

    public function storeUser(Request $request){
        // dd($request->all());
        $validator = Validator::make($request->all(),[
            'name'      => 'required|max:255|min:3',
            'username'  => 'required|unique:users,username|max:255',
            'email'     => 'required|email|unique:users,email',
            'password'  => 'required|min:6',
        ]);

        if ($validator->fails()) {
            // Jika validasi gagal, kembali ke halaman sebelumnya dengan input lama dan pesan kesalahan
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $data =[
            'name'     => $request->name,
            'username'  => $request->username,
            'email'     => $request->email,
            'password'  => Hash::make($request->password),
        ];
        Session::flash('success', 'Akun berhasil dibuat');
        // dd($data);
        User::create($data);
        return redirect()->route('user');
    }

    public function userEdit(Request $request,$uname){
        $data = User::where('username',$uname)->first();
        // dd($data);
        $title  = 'Dashboard';
        $page   = 'Edit User';
        return view('dashboard.user-edit',compact('title','page','data'));
    }

    public function userUpdate(Request $request,$uname){
        // $data = User::where('username',$uname)->first();

        $validator = Validator::make($request->all(), [
            'name'      => 'required|min:3',
            'username'  => 'required|',
            'email'     => 'required|email',
            'password'  => 'nullable|min:6',
        ]);

        if ($validator->fails()) {
            // Jika validasi gagal, kembali ke halaman sebelumnya dengan input lama dan pesan kesalahan
            return redirect()->back()->withErrors($validator)->withInput();
        }
        // dd($request->all());
        $data =[
            'name'     => $request->name,
            'username'  => $request->username,
            'email'     => $request->email,
        ];
        if($request->password) $data['password']  = Hash::make($request->password);

        Session::flash('success', 'Akun berhasil diubah');
        // dd($data);
        User::whereUsername($uname)->update($data);
        return redirect()->route('user');
        
    }

    public function userDelete(Request $request,$uname){
        $data = User::whereUsername($uname);
        // dd($data);
        if($data){
            $data -> delete();
            Session::flash('success', 'Akun berhasil dihapus');
        }

        return redirect()->route('user');
    }
}
