<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\User;

class UserController extends Controller
{
    public function login(Request $request){
        $user = Auth::attempt(['email' => request('email'), 'password' => request('password')]);
        if(!$user){
            return response()->json('Account does not exist', 402);
        }
        $user = Auth::user();
        return response()->json($user, 200);
    }
    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'first_name' => ['string', 'max:255'],
            'last_name' => ['string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        $user = User::create([
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
            'api_token' => Str::random(60),
        ]);

        return response()->json(compact('user', 'token'), 201);
    }
    public function logout(Request $request) {
        Auth::logout();
      }
}
