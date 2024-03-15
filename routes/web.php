<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/',[HomeController::class,'index']) -> name('home');

Route::get('/signin',[AuthController::class,'signin']) -> name('signin');
Route::post('/auth-signin',[AuthController::class,'auth_signin']) -> name('auth-signin');
Route::get('/signout',[AuthController::class,'signout']);
Route::get('/signup',[AuthController::class,'signup']) -> name('signup');

Route::get('/dashboard',[DashboardController::class,'index']) -> name('dashboard');