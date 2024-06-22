<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

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
// Route::get('/data', function () {
//     return response()->json([''], 200);
// });
Route::middleware('auth:sanctum')->post('/store-data', [ApiController::class, 'storeData']);
Route::middleware(['auth:sanctum', 'role:admin|farmer hpt'])->post('/disease-data', [ApiController::class, 'storeDisease']);
Route::middleware(['auth:sanctum', 'role:admin|farmer growth'])->post('/growth-data', [ApiController::class, 'storeGrowth']);
Route::middleware(['auth:sanctum', 'role:admin|farmer tool'])->post('/tool-data', [ApiController::class, 'storeTool']);
Route::middleware(['auth:sanctum', 'role:admin|farmer weather'])->post('/weather-data', [ApiController::class, 'storeWeather']);
