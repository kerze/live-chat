<?php

use Illuminate\Http\Request;

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
    Route::post('login', 'UserController@login');
    Route::post('register', 'UserController@register');
    Route::get('logout', 'UserController@logout');
    Route::get('entries', 'EntriesController@index');
    Route::post('entry/add', 'EntriesController@store');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
