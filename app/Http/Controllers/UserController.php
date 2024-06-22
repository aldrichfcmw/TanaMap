<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    // public function user()
    // {
    //     $title  = 'Dashboard';
    //     $page   = 'List Users';
    //     $data   =  User::get();
    //     return view('dashboard.user', compact('title', 'page', 'data'));
    // }

    public function userList()
    {
        $title  = 'User';
        $page   = 'List Users';
        $subpage   = '';
        $data   =  User::get();
        return view('dashboard.user-list', compact('title', 'page', 'subpage', 'data'));
    }

    public function userAdd()
    {
        $title  = 'User';
        $page   = 'Add User';
        $subpage   = '';
        return view('dashboard.user-add', compact('title', 'page', 'subpage'));
    }

    public function storeUser(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'name'      => 'required|max:255|min:3',
            'username'  => 'required|unique:users,username|max:255',
            'email'     => 'required|email|unique:users,email',
            'password'  => 'required|min:6',
        ]);

        if ($validator->fails()) {
            // Jika validasi gagal, kembali ke halaman sebelumnya dengan input lama dan pesan kesalahan
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $data = [
            'name'     => $request->name,
            'username'  => $request->username,
            'email'     => $request->email,
            'password'  => Hash::make($request->password),
        ];
        User::create($data);
        return redirect()->route('user')->with('success', 'Akun berhasil dibuat');
    }

    public function userEdit(Request $request, $uname)
    {
        $data = User::where('username', $uname)->first();
        // dd($data);
        $title  = 'Users';
        $page   = 'Edit Users';
        $subpage = '';
        return view('dashboard.user-edit', compact('title', 'page', 'subpage', 'data'));
    }

    public function userUpdate(Request $request, $uname)
    {
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
        $data = [
            'name'     => $request->name,
            'username'  => $request->username,
            'email'     => $request->email,
        ];
        if ($request->password) $data['password']  = Hash::make($request->password);

        // dd($data);
        User::whereUsername($uname)->update($data);
        return redirect()->route('user')->with('success', 'Akun berhasil diubah');
    }

    public function userDelete(Request $request, $uname)
    {
        $data = User::whereUsername($uname);
        if ($data) {
            $data->delete();
        }

        return redirect()->route('user')->with('success', 'Akun berhasil dihapus');
    }

    public function accountView()
    {
        $title  = 'User';
        $page   = 'View';
        $subpage   = 'Account';
        $data = Auth::user();
        $role = $data->roles->first()->name;
        // dd($data);
        return view('dashboard.account-view', compact('title', 'page', 'subpage', 'data', 'role'));
    }

    public function accountSecurity()
    {
        $title  = 'User';
        $page   = 'View';
        $subpage   = 'Security';
        $data = Auth::user();
        $role = $data->roles->first()->name;
        // dd($data);
        return view('dashboard.account-security', compact('title', 'page', 'subpage', 'data', 'role'));
    }

    public function accountToken()
    {
        $title  = 'User';
        $page   = 'View';
        $subpage   = 'Token';
        $data = Auth::user();
        $role = $data->roles->first()->name;
        return view('dashboard.account-token', compact('title', 'page', 'subpage', 'data', 'role'));
    }
    public function accountTokenUpdate(Request $request)
    {

        $user = Auth::user();
        $user->tokens()->delete();
        $createToken = $user->createToken('api-token-' . $user->name)->plainTextToken;
        $token = substr($createToken, 3); // Menghapus 3 karakter pertama
        $data = [
            'token_api'     => $token,
        ];
        User::whereUsername($user->username)->update($data);
        return redirect()->route('account.token')->with('success', 'Success generate token');
        // dd($token);
    }
}
