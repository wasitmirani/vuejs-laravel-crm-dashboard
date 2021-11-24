<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\service\ServiceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->prefix('admin')->group(function () {



    Route::prefix('management')->group(function () {
        Route::resource('user', UserController::class);
        Route::post('remove-all/users',[UserController::class,'removeAllUsers']);
        Route::resource('role', RoleController::class);
        Route::post('remove-all/roles',[UserController::class,'removeAllRoles']);
        Route::resource('permission', PermissionController::class);
        Route::post('/remove-all/permissions',[PermissionController::class,'removeAllPermissions']);
    });
});
