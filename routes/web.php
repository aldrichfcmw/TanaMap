<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PetaniController;
use App\Http\Controllers\UserController;
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

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/signin', [AuthController::class, 'signin'])->name('signin');
Route::post('/signin/auth', [AuthController::class, 'signinAuth'])->name('auth.signin');
Route::get('/signout', [AuthController::class, 'signout'])->name('auth.signout');;
Route::get('/signup', [AuthController::class, 'signup'])->name('signup');
Route::post('/signup/auth', [AuthController::class, 'storeUser'])->name('auth.signup');


Route::group(['prefix' => '/', 'middleware' => ['auth', 'role:admin'], 'as' => ''], function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/disease', [DashboardController::class, 'disease'])->name('disease');
    Route::get('/growth', [DashboardController::class, 'growth'])->name('growth');
    Route::get('/tool', [DashboardController::class, 'tool'])->name('tool');
    Route::get('/weather', [DashboardController::class, 'weather'])->name('weather');
    Route::delete('/maps', [DashboardController::class, 'maps'])->name('maps');

    Route::get('/data/edit/{type}/{uname}', [DashboardController::class, 'dataEdit'])->name('data.edit');
    Route::put('/data/update/{type}/{uname}', [DashboardController::class, 'dataUpdate'])->name('data.update');
    Route::delete('/data/delete/{type}/{uname}', [DashboardController::class, 'dataDelete'])->name('data.delete');

    // Route::get('/users', [UserController::class, 'user'])->name('user');
    Route::get('/users/list', [UserController::class, 'userList'])->name('user.list');
    Route::get('/users/add', [UserController::class, 'userAdd'])->name('user.add');
    Route::post('/users/add/create', [UserController::class, 'storeUser'])->name('user.create');
    Route::get('/users/edit/{username}', [UserController::class, 'userEdit'])->name('user.edit');
    Route::put('/users/update/{username}', [UserController::class, 'userUpdate'])->name('user.update');
    Route::delete('/users/delete/{username}', [UserController::class, 'userDelete'])->name('user.delete');

    Route::get('/account/profile', [UserController::class, 'accountView'])->name('account.view');
    Route::put('/account/profile/update/{username}', [UserController::class, 'accountUpdate'])->name('account.update');
    Route::get('/account/security', [UserController::class, 'accountSecurity'])->name('account.security');
    Route::put('/account/security/update/{username}', [UserController::class, 'accountSecurityUpdate'])->name('account.securityupdate');
    Route::get('/account/token', [UserController::class, 'accountToken'])->name('account.token');
    Route::put('/account/token/update', [UserController::class, 'accountTokenUpdate'])->name('account.tokenupdate');
    /* 
        Middleware dengan laravel gate
        'middleware' => ['auth','can:{permission:farmer}']
        'middleware' => ['auth','role:{permission:farmer}']
        ->middleware('can:{permission:view hptdash}');
        ->middleware(['role:admin|writer']);
    */
});

Route::group(['prefix' => '/farmer', 'middleware' => ['auth', 'role:admin|guest|farmer hpt|farmer growth|farmer tool|farmer weather'], 'as' => ''], function () {
    Route::get('/dashboard', [PetaniController::class, 'index'])->name('tani.dash');
    Route::get('/disease', [PetaniController::class, 'disease'])->name('tani.disease');
    Route::get('/growth', [PetaniController::class, 'growth'])->name('tani.growth');
    Route::get('/tool', [PetaniController::class, 'tool'])->name('tani.tool');
    Route::get('/weather', [PetaniController::class, 'weather'])->name('tani.weather');
});
