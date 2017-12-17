<?php
/*
|---------------------
| 取得公佈事項
|---------------------
*/
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QueryAnnounceController extends Controller
{
    //
    public function getData()
    {
        $arr = [
            'Code' => 1,
            'ErrorMsg' => '',
            'Announce' => '',
        ];
        return response()->json($arr);
    }
}
