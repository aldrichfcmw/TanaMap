<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use PhpParser\Builder\Function_;
use PhpParser\Node\Expr\FuncCall;

class DashboardController extends Controller
{
    public function index(){
        $title  = 'Dashboard';
        $page   = 'Overview';
        $data   =  User::get();
        return view('dashboard.index',compact('title','page','data'));
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

    public function create(Request $request){
        // dd($request->all());
        $data =[
            'name'     => $request->formValidationFirstName .' '. $request->formValidationLastName,
            'username'  => $request->formValidationUsername,
            'email'     => $request->formValidationEmail,
            'password'  => Hash::make($request->formValidationPass),
        ];
        dd($data);
    }
}
