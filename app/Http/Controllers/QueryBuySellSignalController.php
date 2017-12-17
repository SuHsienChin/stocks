<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QueryBuySellSignalController extends Controller
{
    //
    public function getData()
    {
        $arr = [
            'Code' => 1,
            'ErrorMsg' => '',
            'BSArray' => [],
        ];

        return response()->json($arr);
    }
}
