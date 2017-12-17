<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QueryAlarmListController extends Controller
{
    //
    public function getData()
    {
        $arr = [
            "Code" => 1,
            "ErrorMsg" => "",
            "AlarmArray" => [],
            "AlarmCount" => 0,
        ];
        return response()->json($arr);
    }
}
