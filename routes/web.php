<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PetaniController;
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
Route::get('/coba',[HomeController::class,'coba']) -> name('coba');

Route::get('/signin',[AuthController::class,'signin']) -> name('signin');
Route::post('/signin/auth',[AuthController::class,'signinAuth']) -> name('auth.signin');
Route::get('/signout',[AuthController::class,'signout']) -> name('auth.signout');;
Route::get('/signup',[AuthController::class,'signup']) -> name('signup');
Route::post('/signup/auth',[AuthController::class,'storeUser']) -> name('auth.signup');


Route::group(['prefix' => '/', 'middleware' => ['auth','role:admin'], 'as' => ''],function(){
    Route::get('/dashboard',[DashboardController::class,'index']) -> name('dashboard');
    Route::get('/user',[DashboardController::class,'user']) -> name('user');
    Route::get('/user/add',[DashboardController::class,'userAdd']) -> name('user.add');
    Route::post('/user/add/create',[DashboardController::class,'storeUser']) -> name('user.create');
    Route::get('/user/edit/{username}',[DashboardController::class,'userEdit']) -> name('user.edit');
    Route::put('/user/update/{username}',[DashboardController::class,'userUpdate']) -> name('user.update');
    Route::delete('/user/delete/{username}',[DashboardController::class,'userDelete']) -> name('user.delete');
    Route::delete('/maps',[DashboardController::class,'maps']) -> name('maps');
    
    /* 
        Middleware dengan laravel gate
        'middleware' => ['auth','can:{permission:farmer}']
        'middleware' => ['auth','role:{permission:farmer}']
        ->middleware('can:{permission:view hptdash}');
        ->middleware(['role:admin|writer']);
    */
});

Route::group(['prefix'=> '/petani','middleware'=> ['auth','role:admin|guest|farmer hpt|farmer growth|farmer tool|farmer weather'], 'as'=> ''],function(){
    Route::get('/dashboard',[PetaniController::class,'index'])  -> name('tani.dash')    ->middleware(['permission:admin|guest']);
    Route::get('/disease',[PetaniController::class,'disease'])  -> name('tani.disease') ->middleware(['permission:admin|view hpt|guest']);
    Route::get('/growth',[PetaniController::class,'growth'])    -> name('tani.growth')  ->middleware(['permission:admin|view growth|guest']);
    Route::get('/tool',[PetaniController::class,'tool'])        -> name('tani.tool')    ->middleware(['permission:admin|view tool|guest']);
    Route::get('/weather',[PetaniController::class,'weather'])  -> name('tani.weather') ->middleware(['permission:admin|view weather|guest']);
});
