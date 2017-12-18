<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QueryOrderListController extends Controller
{
    //
    public function getData()
    {
        $arr = [
            'Code' => 1,
            'ErrorMsg' => '',
            'OrderArray' => [],
            'CoveredArray' => [],
            'UncoveredArray' => [],
            'CommodityArray' => [],
            'OrderSum' => 0,
            'UnCoverBuySum' => 0,
            'UnCoverSellSum' => 0,

        ];

        return response()->json($arr);
    }
}
