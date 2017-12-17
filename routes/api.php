<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/** 公佈事項 */
Route::post('/query_announce','QueryAnnounceController@getData');

Route::post('/query_rule','QueryRuleController@getData');

Route::post('/query_member_and_commoditylist','QueryMemberAndCommodityListController@getData');

Route::post('/query_alarmlist','QueryAlarmListController@getData');

Route::post('/query_buysell_signal','QueryBuySellSignalController@getData');

Route::post('/query_orderlist','QueryOrderListController@getData');

Route::post('/query_moneylist','QueryMoneyListController@getData');

Route::post('/query_usersavedata','QueryUserSaveDataController@getData');

