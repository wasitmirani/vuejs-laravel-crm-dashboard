<?php

namespace App\Http\Controllers\backend\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(Request $request){
        dd(auth()->user());
        return view('backend.pages.index');
    }
    public function unauthorized(Request $request){

        return view('backend.pages.unauthorized');
    }
}
