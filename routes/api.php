<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DataPostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/data', function () {
    return response()->json([], 200);
});
Route::post('/disease-data', [DataPostController::class, 'storeDisease']);
// Route::post('/growth-data', [DataPostController::class, 'storeGrowth']);
// Route::post('/tool-data', [DataPostController::class, 'storeTool']);
// Route::post('/weather-data', [DataPostController::class, 'storeWeather']);

