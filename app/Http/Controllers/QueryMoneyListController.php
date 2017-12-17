<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QueryMoneyListController extends Controller
{
    //
    public function getData()
    {
        $arr = [
            'Code' => 1,
            'ErrorMsg' => '',
            'MoneyArray' => [[
                'Date' => '2017/12/15',
                'Limitpoint' => '10000',
                'RemainingMoney' => '63350',
                'TodayMoney' => '12450',
                'TotalSubmit' => '10',
                'TouchPoint' => '50000',
                'Uppay' => 13350,
                'Withholding' => '0',
            ]],
            'StartDate' => '',
            'EndDate' => '2017-12-17',
        ];

        return response()->json($arr);
    }
}
