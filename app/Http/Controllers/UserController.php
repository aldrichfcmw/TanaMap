<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function user(){
        $title  = 'Dashboard';
        $page   = 'User';
        $subpage= 'List User';
        $data   =  User::get();
        return view('dashboard.user',compact('title','page','subpage','data'));
    }
    
    public function userAdd(){
        $title  = 'Dashboard';
        $page   = 'User';
        $subpage= 'Add User';
        return view('dashboard.user-add',compact('title','page','subpage'));
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
        User::create($data);
        return redirect()->route('user')->with('success','Akun berhasil dibuat');
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

        // dd($data);
        User::whereUsername($uname)->update($data);
        return redirect()->route('user')->with('success','Akun berhasil diubah');
        
    }

    public function userDelete(Request $request,$uname){
        $data = User::whereUsername($uname);
        if($data){
            $data -> delete();
        }

        return redirect()->route('user')->with('success','Akun berhasil dihapus');
    }
}
