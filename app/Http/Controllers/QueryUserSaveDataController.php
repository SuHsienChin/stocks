<?php
/*
|---------------------
| 取得 使用者-自定商品-顯示或隱藏欄位
|---------------------
*/
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QueryUserSaveDataController extends Controller
{
    //
    public function getData()
    {
        $arr = [
            'Code' => 1,
            'ErrorMsg' => '',
            'UserSaveData' => [
                'UscommodityOff' => '[["EXF","[台灣期貨交易所] 電子期"],["FXF","[台灣期貨交易所] 金融期"],["TSLQ","[台灣期貨交易所] 加權指"],["HSI","[香港交易所] 恆生期"],["E7","[芝加哥商品交易所] 歐元期"],["NK225","[日本交易所集團] 日經期"],["FDAX","[歐洲期貨交易所] 德指期"],["NQ","[芝加哥商品交易所] 那斯達"],["SI","[紐約商品期貨交易所] 白銀期"],["CN","[新加坡交易所] 中國期"],["CIF","[中國金融期貨交易所] 滬深期"]]',
                'UscommodityOn' => '[["TXF","[台灣期貨交易所] 台指期"],["TXFAF","[台灣期貨交易所] 台盤後"],["GC","[紐約商品期貨交易所] 黃金期"],["CL","[紐約商品期貨交易所] 輕油期"],["YM","[芝加哥期貨交易所] 道瓊期"]]',
                'UstypeOff' => '[["mini_chart","走勢"],["five-ratio","內外盤比"],["total_qty","總量"],["highest_price","最高價"],["lowest_price","最低價"],["yesterday_last_price","昨收算"],["newest_time","時間"],["open_price","開盤價"],["up_down_ratio","漲跌幅%"],["status","狀態"]]',
                'UstypeOn' => '[["product_name","商品名稱"],["stock","倉位"],["newest_price","成交價"],["bp_price","買進價"],["sp_price","賣出價"],["up_down","漲跌"],["yesterday_close_price","昨結盤"],["force_close","強平"],["final_date","最後交易日"],["k_bun","K棒"],["no_new","禁新"]]',
            ],
        ];

        return response()->json($arr);
    }
}
