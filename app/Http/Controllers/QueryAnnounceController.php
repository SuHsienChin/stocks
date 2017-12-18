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
            'Announce' => '請重視風險控管,避免虧損擴大,請嚴設停損　　　　　　　　　　　　　　　　　　　　　　設定新增版面功能 有A.B版面可選擇 "',
        ];
        return response()->json($arr);
    }
}
