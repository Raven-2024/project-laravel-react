<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PatientController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/add-patient', [PatientController::class, 'store']);
Route::get('/fetch-patient', [PatientController::class, 'show']);
Route::get('/view-patient', [PatientController::class, 'viewPatient']);
Route::get('/patient-edit/{id}', [PatientController::class, 'edit']);
Route::put('/patient-update/{id}', [PatientController::class, 'update']);
Route::put('/patient-delete/{id}', [PatientController::class, 'delete']);
Route::get('/patient-search', [PatientController::class, 'search']);

// Auth Routes (Updated to use correct UserController)
Route::post('/register-user', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

Route::middleware('auth:sanctum')->post('/logout', function (Request $request) {
    $request->user()->currentAccessToken()->delete();
    return response()->json(['message' => 'Logged out']);
});