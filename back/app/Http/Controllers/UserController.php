<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    public function register(Request $request)
{
    $validated = $request->validate([
        'firstname' => 'required|string',
        'lastname' => 'required|string',
        'email' => 'required|email|unique:users',
        'username' => 'required|string|unique:users',
        'password' => 'required',
    ]);

    $user = User::create([
        'firstname' => $validated['firstname'],
        'lastname' => $validated['lastname'],
        'email' => $validated['email'],
        'username' => $validated['username'],
        'password' => Hash::make($validated['password']),
    ]);

    return response()->json(['message' => 'User created successfully'], 201);
}
    public function login(Request $request)
    {
        $user = User::where('username', $request->username)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        return $user->createToken('react-token')->plainTextToken;
    }
    public function logout (Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }
}
