<!-- index.blade.php -->
@extends('layout.masterPage')

@section('title', 'index')

@section('style')
    @parent
    <style>
        div {
            text-align: center;
        }
    </style>
@endsection

@section('content')
    <div class="stop-banner hide">
        <div style="position: relative; left: 65px; top: 170px; font-size: 3em;">
            <span class="stop-text red">過帳清盤中...請稍候</span>
            <span class="stop-text green hide">過帳清盤中...請稍候</span>
        </div>
    </div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-left">
                    <li><a href="#" onclick="tra.API.Loginout();"><img src="image/icon-menu-logout.gif" width="25" style="margin: 5px 0 0 2px"><br>登出</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="image/icon-menu-category.gif" width="25" style="margin: 5px 0 0 15px"><br>商品分類</a>
                        <ul class="dropdown-menu exchange-menu"><li exchange_id="TW"><a href="#">台灣期貨交易所</a></li><li exchange_id="HKEX"><a href="#">香港交易所</a></li><li exchange_id="CME"><a href="#">芝加哥商品交易所</a></li><li exchange_id="JPX"><a href="#">日本交易所集團</a></li><li exchange_id="EURX"><a href="#">歐洲期貨交易所</a></li><li exchange_id="CBOT"><a href="#">芝加哥期貨交易所</a></li><li exchange_id="NYMEX"><a href="#">紐約商品期貨交易所</a></li><li exchange_id="SGX"><a href="#">新加坡交易所</a></li><li exchange_id="CFFE"><a href="#">中國金融期貨交易所</a></li><li exchange_id="all"><a href="#">所有交易所</a></li></ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="image/icon-menu-view.gif" width="25" style="margin: 5px 0 0 2px"><br>檢視</a>
                        <ul class="dropdown-menu">
                            <li><a href="#" data-toggle="modal" data-target="#userinfo_modal">會員資訊</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#user_history_modal">帳戶歷史</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#user_charge_modal">儲值紀錄查詢</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#user_action_modal">使用者動作記錄</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="image/icon-menu-setting.gif" width="25" style="margin: 5px 0 0 2px"><br>設定</a>
                        <ul class="dropdown-menu">
                            <li><a href="#" data-toggle="modal" data-target="#chpwd_modal">變更密碼</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#custom_web_modal">版面選擇</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#custom_item_modal">自定商品</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="image/icon-menu-help.gif" width="25" style="margin: 5px 0 0 2px"><br>說明</a>
                        <ul class="dropdown-menu">
                            <li><a href="#" data-toggle="modal" data-target="#rule_modal">規則說明</a></li>
                        </ul>
                    </li>
                    <!--<li class="dropdown tslq-detail" style="display:none;">
                        <a href="#" class="dropdown-toggle buysellsignal-icon" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="image/icon-menu-buysell.png" width="25" style="margin: 5px 0 0 15px"><img src="image/icon-menu-buysell-red.png" width="25" style="margin: 5px 0 0 15px" class="hide"><br />台指訊號</a>
                        <ul class="dropdown-menu buysellsignal-menu" style="max-height: 90px; width:220px;overflow-y: scroll;">
                            <li><a href="#" data-toggle="modal" data-target="#test">test</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#test1">test1</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#test2">test2</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#test3">test3</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#test4">test4</a></li>
                        </ul>
                    </li>-->
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" style="padding: 10px 5px 0;"><div style="height: 30px;" class="icon-member-status"><img src="image/mobile/icon-normal.gif" height="50">BAA1330</div></a></li>
                    <li><a href="#">信用額度 <span class="user-touch-point">50,000</span><br>帳戶餘額 <span class="user-money hide">53,000</span><span class="user-money-float">53,000</span></a></li>
                    <li><a href="#">浮動損益 <span class="float-money">0</span><br>今日損益 <span class="userinfo-todaymoney">0</span></a></li>
                    <li class="dropdown" style="width: 65px;">
                        <a href="#" class="dropdown-toggle alarm-icon" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="padding-bottom: 10px;">
                            <img src="image/icon-alarm.gif" height="40">
                            <img src="image/icon-alarm-on.gif" height="40" class="hide" style="display: none;">
                        </a>
                        <ul class="dropdown-menu alarm-menu"></ul>
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right tslq-detail" style="display:none;">
                    <li><a href="#"><b class="red">大盤委買</b> <span class="tslq-want-buy"><b class="red">1274萬張 541萬筆 2.35</b></span><br><b class="green">大盤委賣</b> <span class="tslq-want-sell"><b class="green">948萬張 574萬筆 1.65</b></span></a></li>
                </ul>

                <ul class="nav navbar-nav navbar-right tslq-detail" style="display:none; margin-right:-20px;">
                    <li><a href="#">大盤成交 <span class="tslq-point"><b>657萬張 110萬筆 5.92</b></span><br>台指價差 <span class="tslq-point-diff"><b class="red">21</b></span><span class="tslq-money"><b> 成交量 1375.14億 </b></span></a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container-fluid" style="padding: 0; height: 100%;">
        <div class="container-left col-md-2" style="padding: 0px; height: 100%; width: 5.4463%;">
            <div class="dragbar-vertical"></div>
            <div class="web-cotent-b-chart-container web-cotent-b" style="display: none; width: 294px;">

            </div>
            <div class="dragbar-chart web-cotent-b" style="display: none; width: 294px;"></div>
            <div class="price-detail" style="height: 333px; width: 294px;">
                <div class="price-tabs ui-tabs ui-widget ui-widget-content ui-corner-all">
                    <div style="height: 40px; background-color: black">
                        <div class="float-left" style="font-size: 15px; color: white; padding: 10px 10px 0 10px;"><span class="current-item-name">台指期</span></div>
                        <ul class="float-left ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" style="margin-top: 7px;" role="tablist">
                            <li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="price-detail-block" aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true"><a href="#price-detail-block" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-1">報價明細</a> &nbsp;
                                <div class="price-detail-option float-right">
                                    <div class="float-left" style="display:none;margin: 3px 3px 0 0">
                                        <input type="checkbox" name="auto_scroll_price">
                                    </div>
                                    <div class="float-left" style="display:none;color: white; font-size: 13px; margin-top: 5px;">置底</div>
                                    <div class="float-left" style="margin-top: 2px;">
                                        <button class="btn btn-primary btn-new-mini" style="margin-left: 5px; padding: 0 4px;" data-toggle="modal" data-target="#price_detail_modal">查</button>
                                    </div>
                                </div>
                            </li>
                            <li class="ui-state-default ui-corner-top" role="tab" tabindex="-1" aria-controls="five-step-block" aria-labelledby="ui-id-2" aria-selected="false" aria-expanded="false"><a href="#five-step-block" onclick="" class="ui-tabs-anchor" role="presentation" tabindex="-1" id="ui-id-2">上下五檔</a></li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div id="five-step-block" class="price-block ui-tabs-panel ui-widget-content ui-corner-bottom" aria-labelledby="ui-id-2" role="tabpanel" style="height: 293px; display: none;" aria-hidden="true">

                        <div style="top:0;position:absolute;height:100%;width:100%;">
                            <table class="five-step-table" style="margin-top:-10px;">
                                <tbody><tr style="background-color: #121823; height:40px;">
                                    <th width="33%">委多
                                    </th><th width="33%">市價
                                    </th><th width="33%">委空
                                    </th></tr>
                                </tbody></table>
                        </div>

                        <div style="top:23px;position:absolute;height:7px;width:100%;display:none;" class="main-five-flow">
                            <div class="main-five-red float-left red-bg" style="width:50%; height: 100%; margin: 0; padding: 0;"></div>
                            <div class="main-five-green float-left green-bg" style="width:50%; height: 100%; margin: -1px 0 0 0; padding: 0;"></div>
                            <div class="clearfix"></div>
                        </div>

                    </div>
                    <div class="clearfix"></div>
                    <div id="price-detail-block" class="price-block ui-tabs-panel ui-widget-content ui-corner-bottom" aria-labelledby="ui-id-1" role="tabpanel" style="height: 293px;" aria-hidden="false">
                        <table class="price-detail-table full-width-table">
                            <thead>
                            <tr style="border-bottom: 1px solid black;">
                                <th style="border-right: 1px solid black;">時間</th>
                                <th style="border-right: 1px solid black;">量</th>
                                <th>價格</th>
                            </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="dragbar-price" style="width: 294px;"></div>
            <div class="order-block" style="height: 60%; width: 294px;">
                <div class="order-container">
                    <form class="form-inline">
                        商品 <select name="order_item_list" class=""><option value="TXF">台指期12</option>
                            <option value="TXFAF">台盤後12</option>
                            <option value="EXF">電子期12</option>
                            <option value="FXF">金融期12</option>
                            <option value="TSLQ">加權指01</option>
                            <option value="HSI">恆生期12</option>
                            <option value="E7">歐元期12</option>
                            <option value="NK225">日經期03</option>
                            <option value="FDAX">德指期12</option>
                            <option value="YM">道瓊期12</option>
                            <option value="NQ">那斯達12</option>
                            <option value="CL">輕油期01</option>
                            <option value="GC">黃金期02</option>
                            <option value="SI">白銀期03</option>
                            <option value="CN">中國期12</option>
                            <option value="CIF">滬深期12</option></select>
                        <div class="checkbox float-right">
                            <label>
                                <input type="checkbox" name="order_without_comfirm"> 下單不確認
                            </label>
                        </div>
                        <div class="order-form-separate"></div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="use_stock_price" class="use-stock-price" checked="true"> <span class="use-lighting-label">閃電</span>
                            </label>
                        </div>
                        <div class="checkbox" style="margin-left: 5px;">
                            <label>
                                <input type="checkbox" name="use_limit_price" class="use-limit-price"> 限價
                            </label>
                        </div>
                        <div class="checkbox" style="margin-left: 5px;">
                            <label>
                                <input type="checkbox" name="use_close_price" class="use-close-price"> 收盤價
                            </label>
                        </div>
                        <div class="checkbox float-right">
                            <label>
                                <input type="checkbox" name="cover_all_on_close"> 收盤全平
                            </label>
                        </div>
                        <div class="order-form-separate"></div>
                        <table width="100%" class="submit-enable">
                            <tbody><tr>
                                <td width="50%">
                                    <div class="float-left use-price-div" style="display: none;">
                                        限價 <img src="image/mobile/icon-add2.gif" width="20" style="vertical-align: middle" onclick="updateInput($('input[name=use_price]'), 'add');">
                                    </div>
                                    <div class="float-left use-price-div" style="display: none;">
                                        <input type="text" name="use_price" style="width: 55px; text-align: center;" class="use-price" value="0">
                                    </div>
                                    <div class="float-left use-price-div" style="display: none;">
                                        <img src="image/mobile/icon-sub2.gif" width="20" style="vertical-align: middle" onclick="updateInput($('input[name=use_price]'), 'sub');">
                                    </div>
                                </td>
                                <td width="50%">
                                    <div class="float-right">
                                        <img src="image/mobile/icon-sub2.gif" width="20" style="vertical-align: middle" onclick="updateInput($('input[name=use_quantity]'), 'sub');">
                                    </div>
                                    <div class="float-right">
                                        <input type="text" name="use_quantity" style="width: 40px; text-align: center;" value="1">
                                    </div>
                                    <div class="float-right" style="margin-left: 5px;">
                                        口數
                                        <img src="image/mobile/icon-add2.gif" width="20" style="vertical-align: middle" onclick="updateInput($('input[name=use_quantity]'), 'add');">
                                    </div>
                                    <div class="clearfix"></div>
                                </td>
                            </tr>
                            <tr>
                                <td width="50%">
                                    <div class="order-form-separate"></div>
                                    <div class="float-left">
                                        停損 <img src="image/mobile/icon-add.gif" width="20" style="vertical-align: middle" onclick="updateInput($('input[name=use_stop_loss_point]'), 'add');">
                                    </div>
                                    <div class="float-left">
                                        <input type="text" name="use_stop_loss_point" style="width: 40px; text-align: center;" value="0">
                                    </div>
                                    <div class="float-left">
                                        <img src="image/mobile/icon-sub.gif" width="20" style="vertical-align: middle" onclick="updateInput($('input[name=use_stop_loss_point]'), 'sub');">
                                    </div>
                                </td>
                                <td width="50%">
                                    <div class="order-form-separate"></div>
                                    <div class="float-right">
                                        <img src="image/mobile/icon-sub.gif" width="20" style="vertical-align: middle" onclick="updateInput($('input[name=use_take_profit_point]'), 'sub');">
                                    </div>
                                    <div class="float-right">
                                        <input type="text" name="use_take_profit_point" style="width: 40px; text-align: center;" value="0">
                                    </div>
                                    <div class="float-right" style="margin-left: 5px;">
                                        停利
                                        <img src="image/mobile/icon-add.gif" width="20" style="vertical-align: middle" onclick="updateInput($('input[name=use_take_profit_point]'), 'add');">
                                    </div>
                                    <div class="clearfix"></div>
                                </td>
                            </tr>
                            <tr>
                                <td width="50%" style="padding: 0 8px 0 0;">
                                    <div class="order-form-separate"></div>
                                    <button type="button" class="btn btn-danger red-bg submit-order-buy" style="padding: 6px 24px; width: 100%; border-radius: 0;">多單</button>
                                </td>
                                <td width="50%" style="padding: 0 0 0 8px;">
                                    <div class="order-form-separate"></div>
                                    <button type="button" class="btn btn-success green-bg submit-order-sell" style="padding: 6px 24px; width: 100%; border-radius: 0;">空單</button><br>
                                </td>
                            </tr>
                            <tr>
                                <td width="100%" colspan="2">
                                    <div class="order-form-separate"></div>
                                    <button type="button" class="btn submit-order-cover" style="padding: 6px 24px; width: 100%; border-radius: 0;">全平</button>
                                </td>
                            </tr>
                            </tbody></table>
                    </form>
                </div>
            </div>
        </div>
        <!--current_chart="trend" data-toggle="modal" data-target="#chnew_modal "-->
        <div class="container-right col-md-10" style="padding: 0px; height: 100%; width: 623px;">
            <div class="item-block" style="height: 60%;">
                <div class="chart-panel hide" style="top:60px; position: absolute; width: 100%;">
                    <div class="chart-button-panel">
                        <button class="close-chart-panel float-left">返回</button>
                        <button class="switch-chart-button float-left klineview" style="margin-left: 10px;" current_chart="trend" data-toggle="modal" data-target="#chnew_modal">切換到K線圖</button>
                        <button class="switch-chart-button float-left chartview hide" style="margin-left: 10px;" onclick="tra.Chart.Control.switchChart();">切換到走勢圖</button>
                        <button class="set-chart-ten-button switch-chart-button float-left klineview" style="margin-left: 10px;">十</button>
                        <div class="tech-index-panel float-left hide" style="margin-top: 3px; color: white;">
                            <button class="set-k-button float-left" min="7200" k_day="2" ko_day="2" k="minone" style="margin: -3px 0 0 10px; color: black;">1分</button>
                            <button class="set-k-button float-left" min="86400" k_day="9" ko_day="3" k="minfive" style="margin: -3px 0 0 10px; color: black;">5分</button>
                            <button class="set-k-button float-left" min="518400" k_day="19" ko_day="5" k="minten" style="margin: -3px 0 0 10px; color: black;">10分</button>
                            <button class="set-k-button float-left" min="818400" k_day="28" ko_day="7" k="minfifteen" style="margin: -3px 0 0 10px; color: black;">15分</button>
                            <button class="set-k-button float-left" min="1296000" k_day="60" ko_day="14" k="minthirty" style="margin: -3px 0 0 10px; color: black;">30分</button>
                            <button class="set-k-button float-left" min="15552000" k_day="18" ko_day="18" k="day" style="margin: -3px 0 0 10px; color: black;">日線</button>
                            <button class="set-k-button float-left" min="204984000" k_day="20" ko_day="20" k="month" style="margin: -3px 0 0 10px; color: black;">月線</button>
                            <button data-toggle="modal" data-target="#tech_item_modal" class="float-left" style="margin: -3px 0 0 10px; color: black;">技術分析</button>
                            <button class="set-tech-ten-button float-left" style="margin: -3px 0 0 10px; color: black;">十</button>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="chart-container" style="min-width: 310px; width: 100%; height: 414px;"></div>
                </div>
                <table class="item-table full-width-table">
                    <thead style="background-color: #2F3437;"><tr>





















                        <th class="up_down_ratio" order="-1" style="display: none;">漲跌幅%</th><th class="status" order="-1" style="display: none;">狀態</th><th class="newest_time" order="-1" style="display: none;">時間</th><th class="mini_chart" style="min-width: 120px; width: 120px; display: none;" order="-1">走勢</th><th class="five-ratio" order="-1" style="display: none;">內外盤比</th><th class="yesterday_last_price hide" order="-1" style="display: none;">昨收盤</th><th class="open_price" order="-1" style="display: none;">開盤價</th><th class="lowest_price hide" order="-1" style="display: none;">最低價</th><th class="highest_price hide" order="-1" style="display: none;">最高價</th><th class="total_qty hide" order="-1" style="display: none;">總量</th><th class="product_name" order="0">商品名稱</th><th class="stock" style="min-width: 45px; width: 45px;" order="1">倉位</th><th class="newest_price" order="2">成交價</th><th class="bp_price hide" order="3" style="display: table-cell;">買進價</th><th class="sp_price hide" order="4" style="display: table-cell;">賣出價</th><th class="up_down" order="5">漲跌</th><th class="yesterday_close_price" order="6">昨結算</th><th class="no_new" style="min-width: 140px; width: 140px;" order="7">禁新</th><th class="force_close" style="min-width: 140px; width: 140px;" order="8">強平</th><th class="final_date" order="9">最後交易日</th><th class="k_bun" style="min-width: 33px; width: 33px;" order="10">K棒</th></tr></thead>
                    <tbody style="height: 455px;">














                    <tr class="item-FDAX" bg_color="#121823" exchange_id="EURX" title="德指期商品代碼: FDAX(12月) 15:00~05:00" order="-1" style="display: none;">





















                        <td class="up_down_ratio red" order="-1" style="display: none;"><span class="red">0.55%</span></td><td class="status" order="-1" style="display: none;">開盤</td><td class="newest_time" order="-1" style="display: none;">00:57:22</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 55.94202898550724%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 44.05797101449275%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">13000</td><td class="open_price red" order="-1" style="display: none;">13041</td><td class="lowest_price hide green" order="-1" style="display: none;">12986</td><td class="highest_price hide red" order="-1" style="display: none;">13085</td><td class="total_qty hide" order="-1" style="display: none;">173484</td><td class="product_name" order="0">德指期12</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price red" order="2" style="border-color: rgb(0, 0, 0);"><span class="red">13070</span></td><td class="bp_price red hide" order="3" style="display: table-cell;">13065</td><td class="sp_price red hide" order="4" style="display: table-cell;">13066</td><td class="up_down red" order="5"><span class="red">71</span></td><td class="yesterday_close_price" order="6">12999</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">12349</span> / <span class="red">13649</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">12089</span> / <span class="red">13909</span></td><td class="final_date" order="9">20171214</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 23.43%; width: 50%; left: 25%; top: 22.12%; background: rgb(255, 0, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(255, 0, 0);"></div>
                        </td></tr><tr class="item-CIF" bg_color="#0f0f0f" exchange_id="CFFE" title="滬深期商品代碼: CIF(12月) 09:30~15:00" order="-1" style="display: none;">





















                        <td class="up_down_ratio green" order="-1" style="display: none;">-0.97%</td><td class="status" order="-1" style="display: none;">收盤</td><td class="newest_time" order="-1" style="display: none;">14:59:58</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"></td><td class="yesterday_last_price hide" order="-1" style="display: none;">39880</td><td class="open_price green" order="-1" style="display: none;">39560</td><td class="lowest_price hide green" order="-1" style="display: none;">39392</td><td class="highest_price hide red" order="-1" style="display: none;">40098</td><td class="total_qty hide" order="-1" style="display: none;">16052</td><td class="product_name" order="0">滬深期12</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price green" order="2">39500</td><td class="bp_price #ccc hide" order="3" style="display: table-cell;">0</td><td class="sp_price #ccc hide" order="4" style="display: table-cell;">0</td><td class="up_down green" order="5">-385</td><td class="yesterday_close_price" order="6">39885</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">37890</span> / <span class="red">41880</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">37093</span> / <span class="red">42677</span></td><td class="final_date" order="9">20171214</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 6.8%; width: 50%; left: 25%; top: 70.96%; background: rgb(0, 255, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(0, 255, 0);"></div>
                        </td></tr><tr class="item-EXF" bg_color="#121823" exchange_id="TW" title="電子期商品代碼: EXF(12月) 08:45~13:45" order="-1" style="display: none;">





















                        <td class="up_down_ratio green" order="-1" style="display: none;">-0.02%</td><td class="status" order="-1" style="display: none;">收盤</td><td class="newest_time" order="-1" style="display: none;">13:44:57</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 56.52173913043478%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 43.47826086956522%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">43370</td><td class="open_price red" order="-1" style="display: none;">43480</td><td class="lowest_price hide green" order="-1" style="display: none;">43145</td><td class="highest_price hide red" order="-1" style="display: none;">43695</td><td class="total_qty hide" order="-1" style="display: none;">6666</td><td class="product_name" order="0">電子期12</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price green" order="2">43360</td><td class="bp_price green hide" order="3" style="display: table-cell;">43350</td><td class="sp_price red hide" order="4" style="display: table-cell;">43370</td><td class="up_down green" order="5">-9</td><td class="yesterday_close_price" order="6">43369</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">0</span> / <span class="red">0</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">0</span> / <span class="red">0</span></td><td class="final_date" order="9">20171219</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 17.45%; width: 50%; left: 25%; top: 41.27%; background: rgb(0, 255, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(0, 255, 0);"></div>
                        </td></tr><tr class="item-FXF" bg_color="#0f0f0f" exchange_id="TW" title="金融期商品代碼: FXF(12月) 08:45~13:45" order="-1" style="display: none;">





















                        <td class="up_down_ratio green" order="-1" style="display: none;">-0.38%</td><td class="status" order="-1" style="display: none;">收盤</td><td class="newest_time" order="-1" style="display: none;">13:44:56</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 71.62162162162163%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 28.37837837837838%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">11764</td><td class="open_price red" order="-1" style="display: none;">11766</td><td class="lowest_price hide green" order="-1" style="display: none;">11694</td><td class="highest_price hide red" order="-1" style="display: none;">11774</td><td class="total_qty hide" order="-1" style="display: none;">3300</td><td class="product_name" order="0">金融期12</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price green" order="2">11718</td><td class="bp_price green hide" order="3" style="display: table-cell;">11716</td><td class="sp_price green hide" order="4" style="display: table-cell;">11724</td><td class="up_down green" order="5">-45</td><td class="yesterday_close_price" order="6">11763</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">0</span> / <span class="red">0</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">0</span> / <span class="red">0</span></td><td class="final_date" order="9">20171219</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 48%; width: 50%; left: 25%; top: 18%; background: rgb(0, 255, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(0, 255, 0);"></div>
                        </td></tr><tr class="item-TSLQ" bg_color="#121823" exchange_id="TW" title="加權指商品代碼: TSLQ(1月) 08:45~13:45" order="-1" style="display: none;">





















                        <td class="up_down_ratio green" order="-1" style="display: none;">-0.34%</td><td class="status" order="-1" style="display: none;">開盤</td><td class="newest_time" order="-1" style="display: none;">14:31:12</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"></td><td class="yesterday_last_price hide" order="-1" style="display: none;">10390</td><td class="open_price green" order="-1" style="display: none;">10355</td><td class="lowest_price hide green" order="-1" style="display: none;">10322</td><td class="highest_price hide red" order="-1" style="display: none;">10418</td><td class="total_qty hide" order="-1" style="display: none;">479388</td><td class="product_name" order="0">加權指01</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price green" order="2">10355</td><td class="bp_price #ccc hide" order="3" style="display: table-cell;">0</td><td class="sp_price #ccc hide" order="4" style="display: table-cell;">0</td><td class="up_down green" order="5">-35</td><td class="yesterday_close_price" order="6">10390</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">0</span> / <span class="red">0</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">0</span> / <span class="red">0</span></td><td class="final_date" order="9">20180101</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 0%; width: 50%; left: 25%; top: 62.5%; background: rgb(0, 255, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(0, 255, 0);"></div>
                        </td></tr><tr class="item-HSI" bg_color="#0f0f0f" exchange_id="HKEX" title="恆生期商品代碼: HSI(12月) 09:15~01:00" order="-1" style="display: none;">





















                        <td class="up_down_ratio red" order="-1" style="display: none;"><span class="red">0.37%</span></td><td class="status" order="-1" style="display: none;">開盤</td><td class="newest_time" order="-1" style="display: none;">00:57:13</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 61.111111111111114%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 38.88888888888889%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">28312</td><td class="open_price red" order="-1" style="display: none;">28351</td><td class="lowest_price hide green" order="-1" style="display: none;">28150</td><td class="highest_price hide red" order="-1" style="display: none;">28476</td><td class="total_qty hide" order="-1" style="display: none;">195214</td><td class="product_name" order="0">恆生期12</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price red" order="2" style="border-color: rgb(0, 0, 0);"><span class="red">28425</span></td><td class="bp_price red hide" order="3" style="display: table-cell;">28416</td><td class="sp_price red hide" order="4" style="display: table-cell;">28412</td><td class="up_down red" order="5"><span class="red">105</span></td><td class="yesterday_close_price" order="6">28320</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">26904</span> / <span class="red">29736</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">26337</span> / <span class="red">30303</span></td><td class="final_date" order="9">20171227</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 18.16%; width: 50%; left: 25%; top: 22.52%; background: rgb(255, 0, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(255, 0, 0);"></div>
                        </td></tr><tr class="item-E7" bg_color="#121823" exchange_id="CME" title="歐元期商品代碼: E7(12月) 06:00~05:00" order="-1" style="display: none;">





















                        <td class="up_down_ratio green" order="-1" style="display: none;"><span class="green">-0.01%</span></td><td class="status" order="-1" style="display: none;">開盤</td><td class="newest_time" order="-1" style="display: none;">00:57:18</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 56.35939323220537%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 43.64060676779463%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">11796</td><td class="open_price #ccc" order="-1" style="display: none;">11796</td><td class="lowest_price hide green" order="-1" style="display: none;">11781</td><td class="highest_price hide red" order="-1" style="display: none;">11815</td><td class="total_qty hide" order="-1" style="display: none;">147967</td><td class="product_name" order="0">歐元期12</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price green" order="2" style="border-color: rgb(0, 0, 0);"><span class="green">11795</span></td><td class="bp_price green hide" order="3" style="display: table-cell;">11794</td><td class="sp_price green hide" order="4" style="display: table-cell;">11795</td><td class="up_down green" order="5"><span class="green">-1</span></td><td class="yesterday_close_price" order="6">11796</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">11206</span> / <span class="red">12386</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">10970</span> / <span class="red">12622</span></td><td class="final_date" order="9">20171217</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 2.35%; width: 50%; left: 25%; top: 54.71%; background: rgb(0, 255, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(0, 255, 0);"></div>
                        </td></tr><tr class="item-NK225" bg_color="#0f0f0f" exchange_id="JPX" title="日經期商品代碼: NK225(3月) 07:45~04:30" order="-1" style="display: none;">





















                        <td class="up_down_ratio #ccc" order="-1" style="display: none;"><span class="#ccc">0%</span></td><td class="status" order="-1" style="display: none;">開盤</td><td class="newest_time" order="-1" style="display: none;">00:57:19</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 47.12%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 52.88%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">22560</td><td class="open_price green" order="-1" style="display: none;">22510</td><td class="lowest_price hide green" order="-1" style="display: none;">22252</td><td class="highest_price hide red" order="-1" style="display: none;">22600</td><td class="total_qty hide" order="-1" style="display: none;">196464</td><td class="product_name" order="0">日經期03</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price green" order="2" style="border-color: rgb(0, 0, 0);"><span class="green">22560</span></td><td class="bp_price green hide" order="3" style="display: table-cell;">22550</td><td class="sp_price green hide" order="4" style="display: table-cell;">22560</td><td class="up_down green" order="5"><span class="green">-1</span></td><td class="yesterday_close_price" order="6">22561</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">21432</span> / <span class="red">23690</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">20981</span> / <span class="red">24141</span></td><td class="final_date" order="9">20180307</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 11.49%; width: 50%; left: 25%; top: 19.2%; background: rgb(255, 0, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(255, 0, 0);"></div>
                        </td></tr><tr class="item-CN" bg_color="#121823" exchange_id="SGX" title="中國期商品代碼: CN(12月) 09:00~04:45" order="-1" style="display: none;">





















                        <td class="up_down_ratio red" order="-1" style="display: none;"><span class="red">0.29%</span></td><td class="status" order="-1" style="display: none;">開盤</td><td class="newest_time" order="-1" style="display: none;">00:57:12</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 42.4750790177486%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 57.524920982251395%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">12937</td><td class="open_price green" order="-1" style="display: none;">12935</td><td class="lowest_price hide green" order="-1" style="display: none;">12897</td><td class="highest_price hide red" order="-1" style="display: none;">13192</td><td class="total_qty hide" order="-1" style="display: none;">233011</td><td class="product_name" order="0">中國期12</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price red" order="2" style="border-color: rgb(0, 0, 0);"><span class="red">12977</span></td><td class="bp_price red hide" order="3" style="display: table-cell;">12975</td><td class="sp_price red hide" order="4" style="display: table-cell;">12977</td><td class="up_down red" order="5"><span class="red">37</span></td><td class="yesterday_close_price" order="6">12940</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">0</span> / <span class="red">0</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">0</span> / <span class="red">0</span></td><td class="final_date" order="9">20171227</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 11.39%; width: 50%; left: 25%; top: 68.31%; background: rgb(255, 0, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(255, 0, 0);"></div>
                        </td></tr><tr class="item-SI" bg_color="#0f0f0f" exchange_id="NYMEX" title="白銀期商品代碼: SI(3月) 06:00~05:00" order="-1" style="display: none;">





















                        <td class="up_down_ratio green" order="-1" style="display: none;"><span class="green">-1.03%</span></td><td class="status" order="-1" style="display: none;">開盤</td><td class="newest_time" order="-1" style="display: none;">00:57:14</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 40.88176352705411%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 59.118236472945895%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">15980</td><td class="open_price green" order="-1" style="display: none;">15920</td><td class="lowest_price hide green" order="-1" style="display: none;">15760</td><td class="highest_price hide red" order="-1" style="display: none;">16005</td><td class="total_qty hide" order="-1" style="display: none;">46987</td><td class="product_name" order="0">白銀期03</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price green" order="2" style="border-color: rgb(0, 0, 0);"><span class="green">15815</span></td><td class="bp_price green hide" order="3" style="display: table-cell;">15810</td><td class="sp_price green hide" order="4" style="display: table-cell;">15815</td><td class="up_down green" order="5"><span class="green">-165</span></td><td class="yesterday_close_price" order="6">15980</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">15181</span> / <span class="red">16779</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">14861</span> / <span class="red">17099</span></td><td class="final_date" order="9">20180326</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 34.29%; width: 50%; left: 25%; top: 37.76%; background: rgb(0, 255, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(0, 255, 0);"></div>
                        </td></tr><tr class="item-NQ" bg_color="#121823" exchange_id="CME" title="那斯達商品代碼: NQ(12月) 06:00~05:00" order="-1" style="display: none;">





















                        <td class="up_down_ratio red" order="-1" style="display: none;"><span class="red">0.71%</span></td><td class="status" order="-1" style="display: none;">開盤</td><td class="newest_time" order="-1" style="display: none;">00:57:23</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 37.87128712871287%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 62.12871287128713%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">62882</td><td class="open_price red" order="-1" style="display: none;">63202</td><td class="lowest_price hide red" order="-1" style="display: none;">62887</td><td class="highest_price hide red" order="-1" style="display: none;">63337</td><td class="total_qty hide" order="-1" style="display: none;">186316</td><td class="product_name" order="0">那斯達12</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price red" order="2" style="border-color: rgb(255, 0, 0);"><span class="red">63330</span></td><td class="bp_price red hide" order="3" style="display: table-cell;">63317</td><td class="sp_price red hide" order="4" style="display: table-cell;">63315</td><td class="up_down red" order="5"><span class="red">448</span></td><td class="yesterday_close_price" order="6">62882</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">59737</span> / <span class="red">66027</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">58480</span> / <span class="red">67284</span></td><td class="final_date" order="9">20171214</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 22.22%; width: 50%; left: 25%; top: 11.78%; background: rgb(255, 0, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(255, 0, 0);"></div>
                        </td></tr><tr class="item-TXF" bg_color="#121823" exchange_id="TW" title="台指期商品代碼: TXF(12月) 08:45~13:45" order="0">





















                        <td class="up_down_ratio green" order="-1" style="display: none;">-0.23%</td><td class="status" order="-1" style="display: none;">收盤</td><td class="newest_time" order="-1" style="display: none;">13:44:59</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 70.3125%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 29.6875%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">10386</td><td class="open_price red" order="-1" style="display: none;">10389</td><td class="lowest_price hide green" order="-1" style="display: none;">10331</td><td class="highest_price hide red" order="-1" style="display: none;">10427</td><td class="total_qty hide" order="-1" style="display: none;">167901</td><td class="product_name" order="0">台指期12</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price green" order="2">10360</td><td class="bp_price green hide" order="3" style="display: table-cell;">10360</td><td class="sp_price green hide" order="4" style="display: table-cell;">10361</td><td class="up_down green" order="5">-24</td><td class="yesterday_close_price" order="6">10384</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">9864</span> / <span class="red">10904</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">9657</span> / <span class="red">11111</span></td><td class="final_date" order="9">20171219</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 24.17%; width: 50%; left: 25%; top: 41.67%; background: rgb(0, 255, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(0, 255, 0);"></div>
                        </td></tr><tr class="item-TXFAF" bg_color="#0f0f0f" exchange_id="TW" title="台盤後商品代碼: TXFAF(12月) 15:00~05:00" order="1">





















                        <td class="up_down_ratio red" order="-1" style="display: none;"><span class="red">0.18%</span></td><td class="status" order="-1" style="display: none;">開盤</td><td class="newest_time" order="-1" style="display: none;">00:57:23</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 39.93288590604027%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 60.06711409395973%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">10360</td><td class="open_price green" order="-1" style="display: none;">10349</td><td class="lowest_price hide green" order="-1" style="display: none;">10332</td><td class="highest_price hide red" order="-1" style="display: none;">10376</td><td class="total_qty hide" order="-1" style="display: none;">52828</td><td class="product_name" order="0">台盤後12</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price red" order="2" style="border-color: rgb(0, 0, 0);"><span class="red">10376</span></td><td class="bp_price red hide" order="3" style="display: table-cell;">10373</td><td class="sp_price red hide" order="4" style="display: table-cell;">10374</td><td class="up_down red" order="5"><span class="red">19</span></td><td class="yesterday_close_price" order="6">10357</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">9839</span> / <span class="red">10875</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">9632</span> / <span class="red">11082</span></td><td class="final_date" order="9">20171219</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 49.09%; width: 50%; left: 25%; top: 10%; background: rgb(255, 0, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(255, 0, 0);"></div>
                        </td></tr><tr class="item-GC" bg_color="#121823" exchange_id="NYMEX" title="黃金期商品代碼: GC(2月) 06:00~05:00" order="2">





















                        <td class="up_down_ratio green" order="-1" style="display: none;"><span class="green">-0.85%</span></td><td class="status" order="-1" style="display: none;">開盤</td><td class="newest_time" order="-1" style="display: none;">00:57:22</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 48.66352201257861%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 51.33647798742138%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">12658</td><td class="open_price green" order="-1" style="display: none;">12617</td><td class="lowest_price hide green" order="-1" style="display: none;">12543</td><td class="highest_price hide red" order="-1" style="display: none;">12669</td><td class="total_qty hide" order="-1" style="display: none;">203304</td><td class="product_name" order="0">黃金期02</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price green" order="2" style="border-color: rgb(0, 0, 0);"><span class="green">12551</span></td><td class="bp_price green hide" order="3" style="display: table-cell;">12551</td><td class="sp_price green hide" order="4" style="display: table-cell;">12551</td><td class="up_down green" order="5"><span class="green">-107</span></td><td class="yesterday_close_price" order="6">12658</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">12025</span> / <span class="red">13291</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">11771</span> / <span class="red">13545</span></td><td class="final_date" order="9">20180225</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 41.9%; width: 50%; left: 25%; top: 43.02%; background: rgb(0, 255, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(0, 255, 0);"></div>
                        </td></tr><tr class="item-CL" bg_color="#0f0f0f" exchange_id="NYMEX" title="輕油期商品代碼: CL(1月) 06:00~05:00" order="3">





















                        <td class="up_down_ratio green" order="-1" style="display: none;"><span class="green">-0.18%</span></td><td class="status" order="-1" style="display: none;">開盤</td><td class="newest_time" order="-1" style="display: none;">00:57:22</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 58.103747828245226%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 41.896252171754774%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">5673</td><td class="open_price green" order="-1" style="display: none;">5598</td><td class="lowest_price hide green" order="-1" style="display: none;">5582</td><td class="highest_price hide green" order="-1" style="display: none;">5666</td><td class="total_qty hide" order="-1" style="display: none;">344107</td><td class="product_name" order="0">輕油期01</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price green" order="2" style="border-color: rgb(0, 0, 0);"><span class="green">5663</span></td><td class="bp_price green hide" order="3" style="display: table-cell;">5661</td><td class="sp_price green hide" order="4" style="display: table-cell;">5662</td><td class="up_down green" order="5"><span class="green">-10</span></td><td class="yesterday_close_price" order="6">5673</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">5389</span> / <span class="red">5957</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">5275</span> / <span class="red">6071</span></td><td class="final_date" order="9">20171218</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 61.9%; width: 50%; left: 25%; top: 12.86%; background: rgb(255, 0, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(255, 0, 0);"></div>
                        </td></tr><tr class="item-YM" bg_color="#0f0f0f" exchange_id="CBOT" title="道瓊期商品代碼: YM(12月) 06:00~05:00" order="4">





















                        <td class="up_down_ratio red" order="-1" style="display: none;"><span class="red">0.06%</span></td><td class="status" order="-1" style="display: none;">開盤</td><td class="newest_time" order="-1" style="display: none;">00:57:19</td><td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px; display: none;" order="-1">
                        </td><td class="five-ratio" style="padding: 2px; display: none;" order="-1"><div style="height: 20px;">
                                <div class="float-left red-bg" style="width: 35.02415458937198%; height: 100%;"></div>
                                <div class="float-left green-bg" style="width: 64.97584541062803%; height: 100%;"></div>
                                <div class="clearfix"></div>
                            </div></td><td class="yesterday_last_price hide" order="-1" style="display: none;">24212</td><td class="open_price green" order="-1" style="display: none;">24192</td><td class="lowest_price hide green" order="-1" style="display: none;">24073</td><td class="highest_price hide red" order="-1" style="display: none;">24228</td><td class="total_qty hide" order="-1" style="display: none;">85458</td><td class="product_name" order="0">道瓊期12</td><td class="stock" style="text-align: center; min-width: 45px; width: 45px;" order="1"></td><td class="newest_price red" order="2" style="border-color: rgb(0, 0, 0);"><span class="red">24226</span></td><td class="bp_price red hide" order="3" style="display: table-cell;">24226</td><td class="sp_price red hide" order="4" style="display: table-cell;">24226</td><td class="up_down red" order="5"><span class="red">14</span></td><td class="yesterday_close_price" order="6">24212</td><td class="no_new" style="min-width: 140px; width: 140px;" order="7"><span class="green">23001</span> / <span class="red">25423</span></td><td class="force_close" style="min-width: 140px; width: 140px;" order="8"><span class="green">22517</span> / <span class="red">25907</span></td><td class="final_date" order="9">20171214</td><td class="k_bun" style="min-width: 33px; width: 33px;position: relative;" order="10">
                            <div class="k_col" style="position: absolute; height: 17.55%; width: 50%; left: 25%; top: 11.03%; background: rgb(255, 0, 0);"></div>
                            <div class="k_line" style="position: absolute; height: 80%; width: 1px; left: 49%; top: 10%; background: rgb(255, 0, 0);"></div>
                        </td></tr></tbody>
                </table>
            </div>
            <div class="dragbar-item"></div>
            <div class="my-trade-block main-bg-color" style="height: 40%;">
                <div class="my-trade-filter-block">
                    <form class="form-inline">
                        <div class="float-left">
                            <label><input type="radio" name="order_type" value="order" checked="true"> 買賣下單&nbsp;&nbsp;</label>
                            <label><input type="radio" name="order_type" value="uncovered"> 未平倉&nbsp;&nbsp;</label>
                            <label><input type="radio" name="order_type" value="covered"> 已平倉&nbsp;&nbsp;</label>
                            <label><input type="radio" name="order_type" value="commodity"> 商品統計&nbsp;&nbsp;</label>
                            <label><input type="radio" name="order_type" value="money"> 對帳表</label>
                        </div>
                        <div class="float-left" style="width: 50px; height: 1px;"></div>
                        <div class="float-left my-trade-function my-trade-function-order">
                            <label><input type="radio" name="order_filter" value="all" checked="true"> 全部單&nbsp;&nbsp;</label>
                            <label><input type="radio" name="order_filter" value="uncovered"> 未成交&nbsp;&nbsp;</label>
                            <label><input type="radio" name="order_filter" value="covered"> 已成交&nbsp;&nbsp;</label>
                        </div>
                        <div class="float-left my-trade-function my-trade-function-uncovered hide">
                            <input type="checkbox" name="select_all_uncovered"> 全選
                            <button class="btn btn-primary btn-new-mini cover-selected-item" style="margin-left: 10px;">市價平倉</button>
                        </div>
                        <div class="float-left my-trade-function my-trade-function-commodity hide">
                            <span>留倉預扣 <span class="total-commodity-holding" style="color: #f4e842">0</span></span>
                        </div>
                        <div class="clearfix"></div>
                    </form>
                </div>
                <div class="my-trade-table-block my-trade-order-block">
                    <table class="my-trade-table my-trade-table-order full-width-table">
                        <thead style="background-color: initial;">
                        <tr>
                            <th>操作</th>
                            <th>序號</th>
                            <th>商品</th>
                            <th style="min-width: 40px; width: 40px;">倒</th>
                            <th style="min-width: 40px; width: 40px">多空</th>
                            <th>委託價</th>
                            <th style="min-width: 40px; width: 40px">口數</th>
                            <th>成交價</th>
                            <th style="min-width: 120px; width: 120px">總類</th>
                            <th style="min-width: 55px; width: 55px; text-align: center;">停損</th>
                            <th style="min-width: 55px; width: 55px; text-align: center;">停利</th>
                            <th style="min-width: 140px; width: 140px">狀態</th>
                            <th style="min-width: 150px; width: 150px">下單時間</th>
                            <th style="min-width: 150px; width: 150px">完成時間</th>
                        </tr>
                        </thead>
                        <tbody style="height: 249px;"></tbody>
                    </table>
                </div>
                <div class="my-trade-table-block my-trade-uncovered-block hide">
                    <table class="my-trade-table my-trade-table-uncovered full-width-table">
                        <thead style="background-color: initial;">
                        <tr>
                            <th>操作</th>
                            <th>序號</th>
                            <th>商品</th>
                            <th style="min-width: 40px; width: 40px">多空</th>
                            <th>總類</th>
                            <th>成交價</th>
                            <th style="min-width: 40px; width: 40px">口數</th>
                            <th style="min-width: 40px; width: 40px">單價</th>
                            <th style="min-width: 60px; width: 60px">手續費</th>
                            <th style="min-width: 55px; width: 55px; text-align: center;">停損</th>
                            <th style="min-width: 55px; width: 55px; text-align: center;">停利</th>
                            <th style="min-width: 60px; width: 60px">倒限(利)</th>
                            <th style="min-width: 60px; width: 60px">點數</th>
                            <th style="min-width: 40px; width: 40px">單價</th>
                            <th>未平損益</th>
                            <th style="min-width: 40px; width: 40px">天數</th>
                            <th style="min-width: 140px; width: 140px">狀態</th>
                        </tr>
                        </thead>
                        <tbody style="height: 249px;"></tbody>
                    </table>
                </div>
                <div class="my-trade-table-block my-trade-covered-block hide">
                    <table class="my-trade-table my-trade-table-covered full-width-table">
                        <thead style="background-color: initial;">
                        <tr>
                            <th>商品</th>
                            <th>新倉序號</th>
                            <th>平倉序號</th>
                            <th>新倉總類</th>
                            <th style="min-width: 120px; width: 120px">平倉總類</th>
                            <th style="min-width: 40px; width: 40px">口數</th>
                            <th style="min-width: 40px; width: 40px">多空</th>
                            <th>成交價</th>
                            <th>平倉價</th>
                            <th style="min-width: 40px; width: 40px">單價</th>
                            <th style="min-width: 60px; width: 60px">手續費</th>
                            <th style="min-width: 60px; width: 60px">點數</th>
                            <th style="min-width: 40px; width: 40px">單價</th>
                            <th>損益</th>
                            <th style="min-width: 150px; width: 150px">成交日期</th>
                            <th style="min-width: 150px; width: 150px">平倉日期</th>
                        </tr>
                        </thead>
                        <tbody style="height: 249px;"></tbody>
                    </table>
                </div>
                <div class="my-trade-table-block my-trade-commodity-block hide">
                    <table class="my-trade-table my-trade-table-commodity full-width-table">
                        <thead style="background-color: initial;">
                        <tr>
                            <th>商品名稱</th>
                            <th style="min-width: 40px; width: 40px">總多</th>
                            <th style="min-width: 40px; width: 40px">總空</th>
                            <th style="min-width: 60px; width: 60px">未平倉</th>
                            <th style="min-width: 60px; width: 60px">總口數</th>
                            <th style="min-width: 40px; width: 40px">手單</th>
                            <th>手續費合計</th>
                            <th>損益點數</th>
                            <th style="min-width: 40px; width: 40px">點單</th>
                            <th>損益合計</th>
                            <th>留倉預扣</th>
                        </tr>
                        </thead>
                        <tbody style="height: 249px;"></tbody>
                    </table>
                </div>
                <div class="my-trade-table-block my-trade-money-block hide">
                    <div style="color: #ccc; margin: 5px">
                        <form class="form-inline">
                            開始日期 <input type="text" class="moneylist-start-date form-control input-sm hasDatepicker" style="width: 100px" id="dp1512665763798"> ~ <input type="text" class="moneylist-end-date form-control input-sm hasDatepicker" style="width: 100px" id="dp1512665763799"> <button class="btn btn-primary btn-sm" onclick="tra.OrderAPI.getMoneyList($('.moneylist-start-date').val(), $('.moneylist-end-date').val(), '-1'); return false;">送出</button>
                            快速查詢
                            <button class="btn btn-primary btn-sm" onclick="tra.OrderAPI.getMoneyList('', '', '0'); return false;">今日</button>
                            <button class="btn btn-primary btn-sm" onclick="tra.OrderAPI.getMoneyList('', '', '7'); return false;">本週</button>
                            <button class="btn btn-primary btn-sm" onclick="tra.OrderAPI.getMoneyList('', '', '30'); return false;">本月</button>
                        </form>
                    </div>
                    <table class="my-trade-table my-trade-table-money full-width-table">
                        <thead style="background-color: initial;">
                        <tr>
                            <th style="min-width: 100px; width: 100px">日期</th>
                            <th style="min-width: 100px; width: 100px">信用額度</th>
                            <th style="min-width: 100px; width: 100px">帳戶餘額</th>
                            <th>今日損益</th>
                            <th style="min-width: 40px; width: 40px">口數</th>
                            <th>留倉預扣</th>
                            <th>對匯額度</th>
                            <th>交收</th>
                        </tr>
                        </thead>
                        <tbody style="height: 249px;">
                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/12/07</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">53000</td>
                            <td><span class="red">3000</span></td>
                            <td style="min-width: 40px; width: 40px">16</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">3000</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/12/06</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">68600</td>
                            <td><span class="red">18600</span></td>
                            <td style="min-width: 40px; width: 40px">16</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">18600</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/12/05</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">36300</td>
                            <td><span class="green">-22350</span></td>
                            <td style="min-width: 40px; width: 40px">10</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="green">-13700</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/12/04</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">58650</td>
                            <td><span class="red">8650</span></td>
                            <td style="min-width: 40px; width: 40px">10</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">8650</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/12/01</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">20150</td>
                            <td><span class="green">-29850</span></td>
                            <td style="min-width: 40px; width: 40px">6</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="green">-29850</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/30</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">43650</td>
                            <td><span class="green">-7750</span></td>
                            <td style="min-width: 40px; width: 40px">10</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="green">-6350</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/29</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">51400</td>
                            <td><span class="red">5700</span></td>
                            <td style="min-width: 40px; width: 40px">4</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">1400</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/28</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">45700</td>
                            <td><span class="green">-3550</span></td>
                            <td style="min-width: 40px; width: 40px">10</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="green">-4300</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/27</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">49250</td>
                            <td><span class="green">-450</span></td>
                            <td style="min-width: 40px; width: 40px">6</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="green">-750</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/24</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">49700</td>
                            <td><span class="green">-300</span></td>
                            <td style="min-width: 40px; width: 40px">12</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="green">-300</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/23</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">61350</td>
                            <td><span class="red">9250</span></td>
                            <td style="min-width: 40px; width: 40px">10</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">11350</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/20</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">52100</td>
                            <td><span class="green">-750</span></td>
                            <td style="min-width: 40px; width: 40px">10</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">2100</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/17</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">52850</td>
                            <td><span class="red">2850</span></td>
                            <td style="min-width: 40px; width: 40px">18</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">2850</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/16</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">39000</td>
                            <td><span class="green">-11000</span></td>
                            <td style="min-width: 40px; width: 40px">8</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="green">-11000</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/15</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">39450</td>
                            <td><span class="green">-10550</span></td>
                            <td style="min-width: 40px; width: 40px">10</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="green">-10550</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/14</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">62500</td>
                            <td><span class="red">3250</span></td>
                            <td style="min-width: 40px; width: 40px">10</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">12500</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/10</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">59250</td>
                            <td><span class="red">9250</span></td>
                            <td style="min-width: 40px; width: 40px">10</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">9250</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/09</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">66300</td>
                            <td><span class="red">15050</span></td>
                            <td style="min-width: 40px; width: 40px">10</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">16300</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/08</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">51250</td>
                            <td><span class="red">1250</span></td>
                            <td style="min-width: 40px; width: 40px">10</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">1250</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/07</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">65150</td>
                            <td><span class="red">10300</span></td>
                            <td style="min-width: 40px; width: 40px">12</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">15150</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/06</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">54850</td>
                            <td><span class="red">9450</span></td>
                            <td style="min-width: 40px; width: 40px">10</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">4850</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/11/01</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">45400</td>
                            <td><span class="green">-4600</span></td>
                            <td style="min-width: 40px; width: 40px">8</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="green">-4600</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/10/31</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">46500</td>
                            <td><span class="green">-5000</span></td>
                            <td style="min-width: 40px; width: 40px">8</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="green">-3500</span></td>
                        </tr>

                        <tr>
                            <td style="min-width: 100px; width: 100px">2017/10/20</td>
                            <td style="min-width: 100px; width: 100px">50000</td>
                            <td style="min-width: 100px; width: 100px">51500</td>
                            <td><span class="red">1500</span></td>
                            <td style="min-width: 40px; width: 40px">4</td>
                            <td>0</td>
                            <td>10000</td>
                            <td><span class="red">1500</span></td>
                        </tr></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div> <!-- /container -->

    <!-- User Info Modal -->
    <div class="modal fade" id="userinfo_modal" tabindex="-1" role="dialog" aria-labelledby="userinfo_modal_label">
        <div class="modal-dialog modal-userinfo" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="userinfo_modal_label">會員資訊</h4>
                </div>
                <div class="modal-body">
                    會員資訊
                    <table class="userinfo-table full-width-table" style="border: 1px solid #222">
                        <tbody><tr>
                            <td width="150">帳號</td>
                            <td width="150">BAA1330</td>
                        </tr>
                        <tr>
                            <td style="width: 120px;">名稱</td>
                            <td>Y1330</td>
                        </tr>
                        <tr>
                            <td>狀態</td>
                            <td>正常</td>
                        </tr>
                        <tr>
                            <td>信用額度</td>
                            <td>50000</td>
                        </tr>
                        <tr>
                            <td>對匯額度</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td>極贏額度(額度)</td>
                            <td>100000</td>
                        </tr>
                        <tr>
                            <td>全商品持倉上限</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>全商品每筆上限</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>全商品留倉上限</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>全商品留倉天數</td>
                            <td>99</td>
                        </tr>
                        <tr>
                            <td>下單前是否確認</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>刪單前是否確認</td>
                            <td>是</td>
                        </tr>
                        <tr>
                            <td>結算時間</td>
                            <td>13:50:00</td>
                        </tr></tbody>
                    </table>
                    <br>
                    商品資訊
                    <table class="userinfo-item-table full-width-table" style="border: 1px solid #222;">
                        <thead>
                        <tr>
                            <th style="width: 65px;">商品名稱</th>
                            <th style="width: 45px;">持倉上限</th>
                            <th style="width: 45px;">每筆上限</th>
                            <th style="width: 45px;">留倉上限</th>
                            <th style="width: 45px;">留倉天數</th>
                            <th style="width: 60px;">最小跳動點數</th>
                            <th style="width: 60px;">一點多少錢</th>
                            <th style="width: 60px;">手續費</th>
                            <th style="width: 60px;">開盤最大漲跌</th>
                            <th style="width: 60px;">每口最大漲跌</th>
                            <th style="width: 60px;">禁新%</th>
                            <th style="width: 60px;">強平%</th>
                            <th style="width: 60px;">停損利</th>
                            <th style="width: 45px;">收盤全平</th>
                            <th style="width: 100px;">交易時間</th>
                            <th style="width: 65px;">商品狀態</th>
                        </tr>
                        </thead>
                        <tbody><tr class="userinfo-item-TXF" lighting="1" limiting="1" submiting="-1" closing="1">
                            <td style="width: 65px;">台指期</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">1</td>
                            <td style="width: 45px;">99</td>
                            <td style="width: 60px;">1</td>
                            <td style="width: 60px;">200</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">0</td>
                            <td style="width: 60px;" class="no_new">5</td>
                            <td style="width: 60px;" class="force_close">7</td>
                            <td style="width: 60px;" class="userinfo-stop-point">0</td>
                            <td style="width: 45px;" class="userinfo-item-daycover">是</td>
                            <td style="width: 100px;">08:45~13:45</td>
                            <td style="width: 65px;">正常</td>
                        </tr>
                        <tr class="userinfo-item-HSI" lighting="1" limiting="1" submiting="-1" closing="1">
                            <td style="width: 65px;">恆生期</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">1</td>
                            <td style="width: 45px;">99</td>
                            <td style="width: 60px;">1</td>
                            <td style="width: 60px;">200</td>
                            <td style="width: 60px;">500</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">0</td>
                            <td style="width: 60px;" class="no_new">5</td>
                            <td style="width: 60px;" class="force_close">7</td>
                            <td style="width: 60px;" class="userinfo-stop-point">0</td>
                            <td style="width: 45px;" class="userinfo-item-daycover">否</td>
                            <td style="width: 100px;">09:15~12:00<br>
                                13:00~16:30<br>
                                午盤17:15~次日01:00<br< td="">
                                </br<></td><td style="width: 65px;">停權</td>
                        </tr>
                        <tr class="userinfo-item-E7" lighting="1" limiting="1" submiting="-1" closing="1">
                            <td style="width: 65px;">歐元期</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">1</td>
                            <td style="width: 45px;">99</td>
                            <td style="width: 60px;">1</td>
                            <td style="width: 60px;">200</td>
                            <td style="width: 60px;">300</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">0</td>
                            <td style="width: 60px;" class="no_new">5</td>
                            <td style="width: 60px;" class="force_close">7</td>
                            <td style="width: 60px;" class="userinfo-stop-point">0</td>
                            <td style="width: 45px;" class="userinfo-item-daycover">否</td>
                            <td style="width: 100px;">06:00~次日05:00 (冬令延1小時)</td>
                            <td style="width: 65px;">停權</td>
                        </tr>
                        <tr class="userinfo-item-NK225" lighting="1" limiting="1" submiting="-1" closing="1">
                            <td style="width: 65px;">日經期</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">1</td>
                            <td style="width: 45px;">99</td>
                            <td style="width: 60px;">5</td>
                            <td style="width: 60px;">200</td>
                            <td style="width: 60px;">800</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">0</td>
                            <td style="width: 60px;" class="no_new">5</td>
                            <td style="width: 60px;" class="force_close">7</td>
                            <td style="width: 60px;" class="userinfo-stop-point">0</td>
                            <td style="width: 45px;" class="userinfo-item-daycover">否</td>
                            <td style="width: 100px;">07:45~14:15<br>
                                15:30~次日04:30</td>
                            <td style="width: 65px;">停權</td>
                        </tr>
                        <tr class="userinfo-item-FDAX" lighting="1" limiting="1" submiting="-1" closing="1">
                            <td style="width: 65px;">德指</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">1</td>
                            <td style="width: 45px;">99</td>
                            <td style="width: 60px;">1</td>
                            <td style="width: 60px;">200</td>
                            <td style="width: 60px;">300</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">0</td>
                            <td style="width: 60px;" class="no_new">5</td>
                            <td style="width: 60px;" class="force_close">7</td>
                            <td style="width: 60px;" class="userinfo-stop-point">0</td>
                            <td style="width: 45px;" class="userinfo-item-daycover">否</td>
                            <td style="width: 100px;">14:00~次日04:00(冬令延1小時)</td>
                            <td style="width: 65px;">停權</td>
                        </tr>
                        <tr class="userinfo-item-YM" lighting="1" limiting="1" submiting="-1" closing="1">
                            <td style="width: 65px;">道瓊期</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">1</td>
                            <td style="width: 45px;">99</td>
                            <td style="width: 60px;">1</td>
                            <td style="width: 60px;">200</td>
                            <td style="width: 60px;">200</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">0</td>
                            <td style="width: 60px;" class="no_new">5</td>
                            <td style="width: 60px;" class="force_close">7</td>
                            <td style="width: 60px;" class="userinfo-stop-point">0</td>
                            <td style="width: 45px;" class="userinfo-item-daycover">否</td>
                            <td style="width: 100px;">06:00~次日05:00 (冬令延1小時)</td>
                            <td style="width: 65px;">正常</td>
                        </tr>
                        <tr class="userinfo-item-CL" lighting="1" limiting="1" submiting="-1" closing="1">
                            <td style="width: 65px;">輕油期</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">1</td>
                            <td style="width: 45px;">99</td>
                            <td style="width: 60px;">1</td>
                            <td style="width: 60px;">200</td>
                            <td style="width: 60px;">300</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">0</td>
                            <td style="width: 60px;" class="no_new">5</td>
                            <td style="width: 60px;" class="force_close">7</td>
                            <td style="width: 60px;" class="userinfo-stop-point">0</td>
                            <td style="width: 45px;" class="userinfo-item-daycover">否</td>
                            <td style="width: 100px;">06:00~次日05:00 (冬令延1小時)</td>
                            <td style="width: 65px;">停權</td>
                        </tr>
                        <tr class="userinfo-item-GC" lighting="1" limiting="1" submiting="-1" closing="1">
                            <td style="width: 65px;">黃金期</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">1</td>
                            <td style="width: 45px;">99</td>
                            <td style="width: 60px;">1</td>
                            <td style="width: 60px;">200</td>
                            <td style="width: 60px;">300</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">0</td>
                            <td style="width: 60px;" class="no_new">5</td>
                            <td style="width: 60px;" class="force_close">7</td>
                            <td style="width: 60px;" class="userinfo-stop-point">0</td>
                            <td style="width: 45px;" class="userinfo-item-daycover">否</td>
                            <td style="width: 100px;">06:00~次日05:00 (冬令延1小時</td>
                            <td style="width: 65px;">停權</td>
                        </tr>
                        <tr class="userinfo-item-SI" lighting="1" limiting="1" submiting="-1" closing="1">
                            <td style="width: 65px;">白銀期</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">1</td>
                            <td style="width: 45px;">99</td>
                            <td style="width: 60px;">5</td>
                            <td style="width: 60px;">200</td>
                            <td style="width: 60px;">800</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">0</td>
                            <td style="width: 60px;" class="no_new">5</td>
                            <td style="width: 60px;" class="force_close">7</td>
                            <td style="width: 60px;" class="userinfo-stop-point">0</td>
                            <td style="width: 45px;" class="userinfo-item-daycover">否</td>
                            <td style="width: 100px;">06:00~次日05:00 (冬令延1小時)</td>
                            <td style="width: 65px;">停權</td>
                        </tr>
                        <tr class="userinfo-item-CIF" lighting="1" limiting="1" submiting="-1" closing="1">
                            <td style="width: 65px;">滬深期</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">1</td>
                            <td style="width: 45px;">99</td>
                            <td style="width: 60px;">2</td>
                            <td style="width: 60px;">200</td>
                            <td style="width: 60px;">500</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">0</td>
                            <td style="width: 60px;" class="no_new">5</td>
                            <td style="width: 60px;" class="force_close">7</td>
                            <td style="width: 60px;" class="userinfo-stop-point">0</td>
                            <td style="width: 45px;" class="userinfo-item-daycover">否</td>
                            <td style="width: 100px;">09:30~11:30<br> 13:00~15:00</td>
                            <td style="width: 65px;">停權</td>
                        </tr>
                        <tr class="userinfo-item-TXFAF" lighting="1" limiting="1" submiting="-1" closing="1">
                            <td style="width: 65px;">台盤後</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">1</td>
                            <td style="width: 45px;">99</td>
                            <td style="width: 60px;">1</td>
                            <td style="width: 60px;">100</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">0</td>
                            <td style="width: 60px;" class="no_new">5</td>
                            <td style="width: 60px;" class="force_close">7</td>
                            <td style="width: 60px;" class="userinfo-stop-point">0</td>
                            <td style="width: 45px;" class="userinfo-item-daycover">否</td>
                            <td style="width: 100px;">15:00~次日05:00</td>
                            <td style="width: 65px;">停權</td>
                        </tr>
                        <tr class="userinfo-item-NQ" lighting="1" limiting="1" submiting="-1" closing="1">
                            <td style="width: 65px;">那斯達</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">3</td>
                            <td style="width: 45px;">1</td>
                            <td style="width: 45px;">99</td>
                            <td style="width: 60px;">2</td>
                            <td style="width: 60px;">50</td>
                            <td style="width: 60px;">250</td>
                            <td style="width: 60px;">150</td>
                            <td style="width: 60px;">0</td>
                            <td style="width: 60px;" class="no_new">5</td>
                            <td style="width: 60px;" class="force_close">7</td>
                            <td style="width: 60px;" class="userinfo-stop-point">0</td>
                            <td style="width: 45px;" class="userinfo-item-daycover">否</td>
                            <td style="width: 100px;">06:00~次日05:00 (冬令延1小時)</td>
                            <td style="width: 65px;">停權</td>
                        </tr></tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>

    <!-- User History Modal -->
    <div class="modal fade" id="user_history_modal" tabindex="-1" role="dialog" aria-labelledby="user_history_modal_label">
        <div class="modal-dialog modal-user-history" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="user_history_modal_label">歷史資料</h4>
                </div>
                <div class="modal-body">
                    <div class="float-left">
                        <form class="form-inline">
                            日期 <input type="text" class="history-start-date form-control input-sm hasDatepicker" style="width: 100px" id="dp1512665763796"> ~ <input type="text" class="history-end-date form-control input-sm hasDatepicker" style="width: 100px" id="dp1512665763797"> <button class="btn btn-primary btn-sm" onclick="tra.API.User.getHistory($('.history-start-date').val(), $('.history-end-date').val(), '-1'); return false;">搜尋</button>
                        </form>
                    </div>
                    <div class="float-right">
                        <button class="btn btn-primary btn-sm" onclick="tra.API.User.getHistory(&quot;&quot;, &quot;&quot;, &quot;0&quot;)">今日</button>
                        <button class="btn btn-primary btn-sm" onclick="tra.API.User.getHistory(&quot;&quot;, &quot;&quot;, &quot;7&quot;)">本週</button>
                        <button class="btn btn-primary btn-sm" onclick="tra.API.User.getHistory(&quot;&quot;, &quot;&quot;, &quot;30&quot;)">本月</button>
                    </div>
                    <div class="clearfix"></div>
                    <table class="user-history-table full-width-table" style="border: 1px solid #222; margin-top: 10px;">
                        <thead>
                        <tr>
                            <th style="width: 60px;"></th>
                            <th style="width: 100px;">日期</th>
                            <th style="width: 100px;">今日損益</th>
                            <th style="width: 100px;">餘額</th>
                            <th style="width: 100px;">手續費</th>
                            <th style="width: 100px;">當日投注(口)</th>
                            <th style="width: 100px;">交收</th>
                            <th style="width: 100px;">儲值</th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>

    <!-- User History Detail Modal -->
    <div class="modal fade" id="user_history_detail_modal" tabindex="-1" role="dialog" aria-labelledby="user_history_detail_modal_label">
        <div class="modal-dialog modal-user-history-detail" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="user_history_detail_modal_label"><span class="user-history-detail-date"></span> 下單明細</h4>
                </div>
                <div class="modal-body">
                    <div style="margin-bottom: 10px;">今日損益: <span class="user-history-detail-todaymoney"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可用餘額 <span class="user-history-detail-remainingmoney"></span></div>
                    <button class="btn btn-primary btn-sm user-history-detail-button" table="history-detail-order-table">全部單</button>
                    <button class="btn btn-primary btn-sm user-history-detail-button" table="history-detail-covered-table">已平倉</button>
                    <button class="btn btn-primary btn-sm user-history-detail-button" table="history-detail-commodity-table">統計</button>
                    <table class="history-detail-table history-detail-order-table full-width-table" style="border: 1px solid #222; margin-top: 10px;">
                        <thead>
                        <tr>
                            <th>序號</th>
                            <th style="min-width: 60px; width: 60px">商品</th>
                            <th style="min-width: 40px; width: 40px;">倒</th>
                            <th style="min-width: 40px; width: 40px">多空</th>
                            <th>委託價</th>
                            <th style="min-width: 40px; width: 40px">口數</th>
                            <th style="min-width: 60px; width: 60px">成交價</th>
                            <th style="min-width: 100px; width: 100px">總類</th>
                            <th style="min-width: 45px; width: 45px">停損</th>
                            <th style="min-width: 45px; width: 45px">停利</th>
                            <th style="min-width: 140px; width: 140px">狀態</th>
                            <th style="min-width: 100px; width: 100px">下單時間</th>
                            <th style="min-width: 100px; width: 100px">完成時間</th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    <table class="history-detail-table history-detail-covered-table full-width-table hide" style="border: 1px solid #222; margin-top: 10px;">
                        <thead>
                        <tr>
                            <th style="min-width: 60px; width: 60px">商品</th>
                            <th style="min-width: 70px; width: 70px">新倉序號</th>
                            <th style="min-width: 70px; width: 70px">平倉序號</th>
                            <th style="min-width: 70px; width: 70px">新倉總類</th>
                            <th style="min-width: 70px; width: 70px">平倉總類</th>
                            <th style="min-width: 40px; width: 40px">口數</th>
                            <th style="min-width: 40px; width: 40px">多空</th>
                            <th>成交價</th>
                            <th>平倉價</th>
                            <th style="min-width: 50px; width: 50px">手續費</th>
                            <th style="min-width: 50px; width: 50px">點數</th>
                            <th>損益</th>
                            <th style="min-width: 100px; width: 100px">成交日期</th>
                            <th style="min-width: 100px; width: 100px">平倉日期</th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    <table class="history-detail-table history-detail-commodity-table full-width-table hide" style="border: 1px solid #222; margin-top: 10px;">
                        <thead>
                        <tr>
                            <th style="min-width: 70px; width: 70px">商品名稱</th>
                            <th style="min-width: 40px; width: 40px">總多</th>
                            <th style="min-width: 40px; width: 40px">總空</th>
                            <th style="min-width: 60px; width: 60px">未平倉</th>
                            <th style="min-width: 60px; width: 60px">總口數</th>
                            <th style="min-width: 40px; width: 40px">手單</th>
                            <th style="min-width: 80px; width: 80px">手續費合計</th>
                            <th style="min-width: 70px; width: 70px">損益點數</th>
                            <th style="min-width: 40px; width: 40px">點單</th>
                            <th style="min-width: 70px; width: 70px">損益合計</th>
                            <th style="min-width: 70px; width: 70px">留倉預扣</th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Change Password Modal -->
    <div class="modal fade" id="chpwd_modal" tabindex="-1" role="dialog" aria-labelledby="chpwd_modal_label">
        <div class="modal-dialog modal-chpwd" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="chpwd_modal_label">變更密碼</h4>
                </div>
                <div class="modal-body">
                    <form class="form-inline">
                        <div class="form-group" style="margin-bottom: 10px;">
                            <label class="control-label">帳號　　 </label>
                            <input type="text" class="form-control input-sm" value="user" disabled="true">
                        </div>
                        <div class="form-group" style="margin-bottom: 10px;">
                            <label class="control-label">舊密碼　 </label>
                            <input type="password" name="old_password" class="form-control input-sm">
                        </div>
                        <div class="form-group" style="margin-bottom: 10px;">
                            <label class="control-label">新密碼　 </label>
                            <input type="password" name="new_password" class="form-control input-sm">
                        </div>
                        <div class="form-group" style="margin-bottom: 10px;">
                            <label class="control-label">確認密碼 </label>
                            <input type="password" name="confirm_password" class="form-control input-sm">
                        </div>
                        <!--<div style="margin-bottom: 10px; color: #990000">* 密碼由 8-20 位區分大小寫的字元組成</div>-->
                        <div class="center-div" style="width: 116px;">
                            <button class="btn btn-primary change-password-button">確定</button>
                            <button class="btn btn-default" data-dismiss="modal">取消</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- New Content Modal -->
    <div class="modal fade" id="chnew_modal" tabindex="-1" role="dialog" aria-labelledby="chnew_modal_label">
        <div class="modal-dialog modal-chpwd" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="chnew_modal_label">選擇開啟方式</h4>
                </div>
                <div class="modal-body">
                    <button type="button" class="btn btn-default add-current" data-dismiss="modal">本頁開啟</button>
                    <button type="button" class="btn btn-default add-new" data-dismiss="modal">開新視窗</button>
                </div>
            </div>
        </div>
    </div>

    <!-- New Content Modal -->
    <div class="modal fade" id="custom_web_modal" tabindex="-1" role="dialog" aria-labelledby="chweb_modal_label">
        <div class="modal-dialog modal-chpwd" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="chweb_modal_label">版面選擇</h4>
                </div>
                <div class="modal-body">
                    <button type="button" class="btn btn-default set-web-content-a" data-dismiss="modal">版面A</button>
                    <button type="button" class="btn btn-default set-web-content-b" data-dismiss="modal">版面B</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Rule Modal -->
    <div class="modal fade" id="rule_modal" tabindex="-1" role="dialog" aria-labelledby="rule_modal_label">
        <div class="modal-dialog modal-rule" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="rule_modal_label">規則說明</h4>
                </div>
                <div class="modal-body">
                    <table class="rule-table modal-scroll-table full-width-table" style="border: 1px solid #222; margin-top: 10px; width: 566px;">
                        <thead>
                        <tr>
                            <th style="width: 150px;">分類</th>
                            <th style="width: 415px;">規則說明</th>
                        </tr>
                        </thead>
                        <tbody><tr>
                            <td style="width: 150px;">系統公告</td>
                            <td style="width: 415px;">投資決策者需要建立在獨立思考之上，祝您操作順利。<br></td>
                        </tr>
                        <tr>
                            <td style="width: 150px;">開盤</td>
                            <td style="width: 415px;">1)開盤前不接受任何預約單。<br>
                                2)開盤風控點位預設值,留倉單於每日開盤時若每手(口)單位漲跌幅正負值超過「商品資訊」內「開盤風控點數」，系統將自動平倉，午盤休息視為收盤。<br>
                                3)開盤風控是以，可交易時間的第一筆報價和昨日最後一筆報價去計算。<br></td>
                        </tr>
                        <tr>
                            <td style="width: 150px;">盤中</td>
                            <td style="width: 415px;">1)市價單:下單後以下一筆報價為成交點位。<br>
                                2)可設限價單以及持倉後可設「停損」「停利」單，掛價單只限於當日有效，收盤後自動取消需重新設置。<br>
                                <b style="color:#f00;">3)未成交之掛單，若於成交時帳戶餘額不足手續費時，系統自動刪除掛單，視同刪除單，成交不算。</b><br>
                                4)當日行情漲跌幅到達該商品禁新價時，該商品系統將不收新單。<br>
                                5)當日行情漲跌幅到達該商品強平價時，所有在倉單之多單、空單，系統將所有在倉單強制以下一筆報價平倉。<br></td>
                        </tr>
                        <tr>
                            <td style="width: 150px;">收盤</td>
                            <td style="width: 415px;"><b style="color:#f00;">1)商品收盤後(含上午盤)，系統將取消該商品未成交掛價單及停損停利。<br>
                                    2)商品收盤，系統檢查該留倉單是否超過「留倉上限」及「帳戶餘額」是否足夠「留倉保證金」進行留倉指令，若有不足則強制平倉。<br>
                                    3)留倉規則採商品先收盤先留倉原則。<br></b></td>
                        </tr>
                        <tr>
                            <td style="width: 150px;">最後交易日及換倉</td>
                            <td style="width: 415px;">1)商品最後交易日當天將全部強制平倉不可留倉。<br>
                                2)換倉日:以系統時間為準。<br></td>
                        </tr>
                        <tr>
                            <td style="width: 150px;">持倉規定</td>
                            <td style="width: 415px;">帳戶餘額:當「≦強制平倉額度」時，所有持倉部份自動以市價強制平倉。<br></td>
                        </tr>
                        <tr>
                            <td style="width: 150px;">計算方式</td>
                            <td style="width: 415px;">下單交易方式分為買(多)或買(空)，如下單買升點數向上漲表示獲利往下跌則為虧損，如下單買跌點數向下跌表示獲利點數向上漲表示虧損。<br>
                                例1. 買多一手黃金16888在16988時賣出則損益則為＞＞16988-16888=10大點*500(每一整數點價值)-手續費300 所以損益=4700<br>
                                <br>
                                例2. 買多一手黃金16988在16888時賣出則損益則為＞＞16888-16988=-10大點*500(每一整數點價值)-手續費300 所以損益=-5300<br></td>
                        </tr>
                        <tr>
                            <td style="width: 150px;">統計結算方式</td>
                            <td style="width: 415px;">1)結算時間，將所有在倉單商品以結算時間的前一筆點位結算，積分轉入昨日積分餘額，以統計損益。<br>
                                2)結算時間暫時停止新下單，將所有在倉單與留倉單以收盤最後1筆(有量)之成交點位轉入新單。<br>
                                3)每日結算完後，系統將會把今日損益提列到帳戶餘額做相加減，查帳請至統計或帳戶歷史觀看。<br>
                                4)會員結算時間請至會員資訊查詢。
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 150px;">低量時段</td>
                            <td style="width: 415px;">1)美盤商品每日有部份時段成交量極低，稱為低量時段(請參考交易時間表)，此時段本系統不接受新單(禁新)，但若有在倉單可平(關倉)不受此限。<br></td>
                        </tr>
                        <tr>
                            <td style="width: 150px;">聲明</td>
                            <td style="width: 415px;">1)因每家報價資料皆有些許誤差，如遇會員本身斷線、當機、塞車、電腦老舊....等硬體或傳輸問題，則所有成交價格均以「本系統網路資料(分價揭示)」為主，若系統發生延遲緩慢或不能下單，未平倉單損益不予計算。<br>
                                2)全商品暫停交易,待系統恢復方可繼續交易<br>
                                3)系統斷線期間斷線商品在倉部位欲平倉請與上層代理聯繫,如無來電平倉則繼續持有,待系統恢復再自行平倉<br></td>
                        </tr></tbody>
                    </table>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Charge History Modal -->
    <div class="modal fade" id="user_charge_modal" tabindex="-1" role="dialog" aria-labelledby="user_charge_modal_label">
        <div class="modal-dialog modal-user-charge" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="user_charge_modal_label">儲值記錄查詢</h4>
                </div>
                <div class="modal-body">
                    <div class="float-left">
                        <form class="form-inline">
                            日期 <input type="text" class="charge-start-date form-control input-sm hasDatepicker" style="width: 100px" id="dp1512665763802"> ~ <input type="text" class="charge-end-date form-control input-sm hasDatepicker" style="width: 100px" id="dp1512665763803"> <button class="btn btn-primary btn-sm" onclick="tra.API.User.getCharge($('.charge-start-date').val(), $('.charge-end-date').val(), '-1'); return false;">搜尋</button>
                        </form>
                    </div>
                    <div class="float-right">
                        <button class="btn btn-primary btn-sm" onclick="tra.API.User.getCharge(&quot;&quot;, &quot;&quot;, &quot;0&quot;)">今日</button>
                        <button class="btn btn-primary btn-sm" onclick="tra.API.User.getCharge(&quot;&quot;, &quot;&quot;, &quot;7&quot;)">本週</button>
                        <button class="btn btn-primary btn-sm" onclick="tra.API.User.getCharge(&quot;&quot;, &quot;&quot;, &quot;30&quot;)">本月</button>
                    </div>
                    <div class="clearfix"></div>
                    <table class="user-charge-table full-width-table" style="border: 1px solid #222; margin-top: 10px;">
                        <thead>
                        <tr>
                            <th style="width: 188px;">儲值金額</th>
                            <th style="width: 188px;">類型</th>
                            <th style="width: 189px;">儲值日期</th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Custom Item Modal -->
    <div class="modal fade" id="custom_item_modal" tabindex="-1" role="dialog" aria-labelledby="custom_item_modal_label">
        <div class="modal-dialog modal-custom-item" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="custom_item_modal_label">自定商品</h4>
                </div>
                <div class="modal-body">
                    <div style="width: 635px; float: left; padding: 25px; border: 1px solid #ccc;">
                        <div class="row">
                            <div class="float-left" style="padding: 0 15px 15px 15px;">商品列表</div>
                            <div class="float-right" style="padding: 0 15px 15px 15px;">隱藏商品</div>
                            <div class="clearfix"></div>
                            <div class="float-left" style="width: 270px;">
                                <select name="from" id="multiselect_item_to" class="form-control" size="20" multiple="multiple" style="height: 400px;"><option value="TXF">[台灣期貨交易所] 台指期</option>
                                    <option value="TXFAF">[台灣期貨交易所] 台盤後</option>
                                    <option value="GC">[紐約商品期貨交易所] 黃金期</option>
                                    <option value="CL">[紐約商品期貨交易所] 輕油期</option>
                                    <option value="YM">[芝加哥期貨交易所] 道瓊期</option></select>
                            </div>
                            <div class="float-left" style="width: 70px; padding: 0 10px;">
                                <button type="button" id="multiselect_item_leftAll" class="btn btn-block"><i class="glyphicon glyphicon-forward"></i></button>
                                <button type="button" id="multiselect_item_rightAll" class="btn btn-block"><i class="glyphicon glyphicon-backward"></i></button>
                                <button type="button" id="multiselect_item_leftSelected" class="btn btn-block"><i class="glyphicon glyphicon-chevron-right"></i></button>
                                <button type="button" id="multiselect_item_rightSelected" class="btn btn-block"><i class="glyphicon glyphicon-chevron-left"></i></button>
                                <button type="button" id="multiselect_item_move_up" class="btn btn-block"><i class="glyphicon glyphicon-chevron-up"></i></button>
                                <button type="button" id="multiselect_item_move_down" class="btn btn-block"><i class="glyphicon glyphicon-chevron-down"></i></button>
                            </div>
                            <div class="float-left" style="width: 270px;">
                                <select name="to" id="multiselect_item" class="form-control" size="20" multiple="multiple" style="height: 400px;"><option value="EXF">[台灣期貨交易所] 電子期</option>
                                    <option value="FXF">[台灣期貨交易所] 金融期</option>
                                    <option value="TSLQ">[台灣期貨交易所] 加權指</option>
                                    <option value="HSI">[香港交易所] 恆生期</option>
                                    <option value="E7">[芝加哥商品交易所] 歐元期</option>
                                    <option value="NK225">[日本交易所集團] 日經期</option>
                                    <option value="FDAX">[歐洲期貨交易所] 德指期</option>
                                    <option value="NQ">[芝加哥商品交易所] 那斯達</option>
                                    <option value="SI">[紐約商品期貨交易所] 白銀期</option>
                                    <option value="CN">[新加坡交易所] 中國期</option>
                                    <option value="CIF">[中國金融期貨交易所] 滬深期</option></select>
                            </div>
                        </div>
                    </div>

                    <div style="width: 315px; float: right; padding: 25px; border: 1px solid #ccc;">
                        <div class="row">
                            <div class="float-left" style="padding: 0 15px 15px 15px;">顯示欄位</div>
                            <div class="float-right" style="padding: 0 15px 15px 15px;">隱藏欄位</div>
                            <div class="clearfix"></div>
                            <div class="float-left" style="width: 110px;">
                                <select name="from" id="multiselect_col_to" class="form-control" size="20" multiple="multiple" style="height: 400px;"><option value="product_name">商品名稱</option>
                                    <option value="stock">倉位</option>
                                    <option value="newest_price">成交價</option>
                                    <option value="bp_price">買進價</option>
                                    <option value="sp_price">賣出價</option>
                                    <option value="up_down">漲跌</option>
                                    <option value="yesterday_close_price">昨結盤</option>
                                    <option value="no_new">禁新</option>
                                    <option value="force_close">強平</option>
                                    <option value="final_date">最後交易日</option>
                                    <option value="k_bun">K棒</option></select>
                            </div>
                            <div class="float-left" style="width: 70px; padding: 0 10px;">
                                <button type="button" id="multiselect_col_leftAll" class="btn btn-block"><i class="glyphicon glyphicon-forward"></i></button>
                                <button type="button" id="multiselect_col_rightAll" class="btn btn-block"><i class="glyphicon glyphicon-backward"></i></button>
                                <button type="button" id="multiselect_col_leftSelected" class="btn btn-block"><i class="glyphicon glyphicon-chevron-right"></i></button>
                                <button type="button" id="multiselect_col_rightSelected" class="btn btn-block"><i class="glyphicon glyphicon-chevron-left"></i></button>
                                <button type="button" id="multiselect_col_move_up" class="btn btn-block"><i class="glyphicon glyphicon-chevron-up"></i></button>
                                <button type="button" id="multiselect_col_move_down" class="btn btn-block"><i class="glyphicon glyphicon-chevron-down"></i></button>
                            </div>
                            <div class="float-left" style="width: 110px;">
                                <select name="to" id="multiselect_col" class="form-control" size="20" multiple="multiple" style="height: 400px;"><option value="mini_chart">走勢</option>
                                    <option value="five-ratio">內外盤比</option>
                                    <option value="total_qty">總量</option>
                                    <option value="highest_price">最高價</option>
                                    <option value="lowest_price">最低價</option>
                                    <option value="yesterday_last_price">昨收算</option>
                                    <option value="newest_time">時間</option>
                                    <option value="open_price">開盤價</option>
                                    <option value="up_down_ratio">漲跌幅%</option>
                                    <option value="status">狀態</option></select>
                            </div>
                        </div>
                    </div>

                    <div class="clearfix"></div>

                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary save-custom-button" data-dismiss="modal">確定</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Tech Item Modal -->
    <div class="modal fade" id="tech_item_modal" tabindex="-1" role="dialog" aria-labelledby="tech_item_modal_label">
        <div class="modal-dialog modal-custom-item" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="tech_item_modal_label">技術分析指數</h4>
                </div>
                <div class="modal-body">
                    <div style="width: 635px; float: left; padding: 25px; border: 1px solid #ccc;">
                        <div class="row">
                            <div class="float-left" style="padding: 0 15px 15px 15px;">指數列表</div>
                            <div class="float-right" style="padding: 0 15px 15px 15px;">顯示指數</div>
                            <div class="clearfix"></div>
                            <div class="float-left" style="width: 270px;">
                                <select name="from" id="multiselect_tech_to" class="form-control" size="20" style="height: 400px;"><option value="main_chart">［ 主圖表 ］</option>
                                    <option value="m_averge_line1">平均線(1)</option>
                                    <option value="m_averge_line2">平均線(2)</option>
                                    <option value="m_averge_line3">平均線(3)</option>
                                    <option value="m_averge_line4">平均線(4)</option>
                                    <option value="m_averge_line5">平均線(5)</option>
                                    <option value="m_averge_line6">平均線(6)</option>
                                    <option value="m_sar_line">SAR</option>
                                    <option value="m_bollingerband_line">保力加通道</option>
                                    <option value="m_ichimoku_line">一目均衡表</option>
                                    <option value="tech_chart">［ 指標圖標 ］</option>
                                    <option value="t_kd_line">KD</option>
                                    <option value="t_rsi_line">RSI</option>
                                    <option value="t_macd_line">MACD</option>
                                    <option value="t_dmi_line">DMI</option>
                                    <option value="t_bias_line">BIAS</option>
                                    <option value="t_obv_line">OBV</option>
                                    <option value="t_wr_line">威廉指標 ( WM's R% )</option>
                                    <option value="t_psy_line">PSY( Psychological Line) 人氣指標心理線</option>
                                    <option value="t_mtm_line">MTM 動量指標</option>
                                    <option value="t_ar_line">AR-買賣氣勢指標</option>
                                    <option value="t_br_line">BR-買賣意願指標</option>
                                    <option value="t_inoutad_line">進貨出貨 A/D</option>
                                    <option value="t_sooncci_line">順勢指標 CCI</option>
                                    <option value="t_vr_line">VR(Volume Ratio) 成交量比率</option>
                                    <option value="t_mi_line">MI</option>
                                    <option value="t_volum_line">成交量</option>
                                    <option value="t_country_line">外資未平倉</option>
                                    <option value="t_tosin_line">投信未平倉</option>
                                    <option value="t_jiin_line">自營商未平倉</option>
                                    <option value="t_firstfive_line">前5大交易人未沖銷</option>
                                    <option value="t_firstten_line">前10大交易人未沖銷</option>
                                    <option value="t_twtslq_delline">台指價差</option>
                                    <option value="t_twtslq_buysellline">委買委賣</option></select>
                            </div>
                            <div class="float-left" style="width: 70px; padding: 0 10px;">
                                <button type="button" id="multiselect_tech_leftAll" class="btn btn-block"><i class="glyphicon glyphicon-backward"></i></button>
                                <button type="button" id="multiselect_tech_rightSelected" class="btn btn-block"><i class="glyphicon glyphicon-chevron-right"></i></button>
                                <button type="button" id="multiselect_tech_leftSelected" class="btn btn-block"><i class="glyphicon glyphicon-chevron-left"></i></button>
                            </div>
                            <div class="float-left" style="width: 270px;">
                                <select name="to" id="multiselect_tech" class="form-control" size="20" style="height: 400px;"><option value="main_chart">［ 主圖表 ］</option>
                                    <option value="k_line_object">K線</option>
                                    <option value="tech_chart">［ 指標圖標 ］</option></select>
                            </div>
                        </div>
                    </div>

                    <div style="width: 315px; height: 485px; float: right; padding: 25px; border: 1px solid #ccc;">
                        <div class="row">
                            <div id="tech_state_info" style="float:left; width: 100%;">

                            </div>

                        </div>
                    </div>

                    <div class="clearfix"></div>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary save-tech-button" data-dismiss="modal">確定</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Price Detail Modal -->
    <div class="modal fade" id="price_detail_modal" tabindex="-1" role="dialog" aria-labelledby="price_detail_modal_label">
        <div class="modal-dialog modal-price-detail" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="price_detail_modal_label">報價明細查詢</h4>
                </div>
                <div class="modal-body">
                    <form class="form-inline">
                        <div style="margin-bottom: 10px;">
                            <div class="float-left">
                                商　　品 <select name="order_item_list" class="form-control input-sm"><option value="TXF">台指期12</option>
                                    <option value="TXFAF">台盤後12</option>
                                    <option value="EXF">電子期12</option>
                                    <option value="FXF">金融期12</option>
                                    <option value="TSLQ">加權指01</option>
                                    <option value="HSI">恆生期12</option>
                                    <option value="E7">歐元期12</option>
                                    <option value="NK225">日經期03</option>
                                    <option value="FDAX">德指期12</option>
                                    <option value="YM">道瓊期12</option>
                                    <option value="NQ">那斯達12</option>
                                    <option value="CL">輕油期01</option>
                                    <option value="GC">黃金期02</option>
                                    <option value="SI">白銀期03</option>
                                    <option value="CN">中國期12</option>
                                    <option value="CIF">滬深期12</option></select>
                            </div>
                            <div class="float-right">
                                * 3分鐘
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div>
                            開始時間 <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" name="price_detail_hour" class="form-control input-sm spinner-range-style ui-spinner-input" style="width: 30px;" value="00" aria-valuenow="0" autocomplete="off" role="spinbutton"><a class="ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-n">▲</span></span></a><a class="ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-s">▼</span></span></a></span> 時
                            <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" name="price_detail_min" class="form-control input-sm spinner-range-style ui-spinner-input" style="width: 30px;" value="00" aria-valuenow="0" autocomplete="off" role="spinbutton"><a class="ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-n">▲</span></span></a><a class="ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-s">▼</span></span></a></span> 分
                            <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" name="price_detail_sec" class="form-control input-sm spinner-range-style ui-spinner-input" style="width: 30px;" value="00" aria-valuenow="0" autocomplete="off" role="spinbutton"><a class="ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-n">▲</span></span></a><a class="ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-s">▼</span></span></a></span> 秒
                            <button class="btn btn-primary btn-sm search-price-submit">搜尋</button>
                        </div>
                    </form>
                    <div class="clearfix"></div>
                    <table class="history-price-table modal-scroll-table full-width-table" style="border: 1px solid #222; margin-top: 10px;">
                        <thead>
                        <tr>
                            <th style="width: 121px;">時間</th>
                            <th style="width: 122px;">口</th>
                            <th style="width: 122px;">價格</th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Stop Loss Modal -->
    <div class="modal fade" id="stop_loss_modal" tabindex="-1" role="dialog" aria-labelledby="stop_loss_modal_label">
        <div class="modal-dialog modal-stop-loss" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="stop_loss_modal_label">停損</h4>
                </div>
                <div class="modal-body">
                    <div id="stop_loss_block">
                        <form class="form-inline">
                            <input type="hidden" name="target_price">
                            <input type="hidden" name="target_id">
                            <input type="hidden" name="buy_or_sell">
                            <input type="hidden" name="org-min-stop-loss-point">
                            <div style="margin-bottom: 5px;">新損失點需大於[&nbsp;&nbsp;<span class="min-stop-loss-point">0</span>&nbsp;&nbsp;]點</div>
                            <div style="margin-bottom: 5px;">
                                新損失點: <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" name="stop_loss_point" class="form-control input-sm spinner-style ui-spinner-input" style="width: 30px;" value="0" aria-valuenow="0" autocomplete="off" role="spinbutton"><a class="ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-n">▲</span></span></a><a class="ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-s">▼</span></span></a></span>
                                <button class="btn btn-primary btn-sm" onclick="$(&quot;input[name=stop_loss_point]&quot;).val(parseInt($(&quot;input[name=stop_loss_point]&quot;).val()) + 10); return false;">+10</button>
                                <button class="btn btn-primary btn-sm" onclick="$(&quot;input[name=stop_loss_point]&quot;).val(parseInt($(&quot;input[name=stop_loss_point]&quot;).val()) - 10); return false;">-10</button>
                            </div>
                            <button class="btn btn-primary btn-sm reset-stop-loss-button">清除設定</button>
                            <button class="btn btn-primary btn-sm update-stop-loss-button">送出</button>
                            <button class="btn btn-primary btn-sm" data-dismiss="modal">取消</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Take Profit Modal -->
    <div class="modal fade" id="take_profit_modal" tabindex="-1" role="dialog" aria-labelledby="take_profit_modal_label">
        <div class="modal-dialog modal-take-profit" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="take_profit_modal_label">停利</h4>
                </div>
                <div class="modal-body">
                    <div id="take_profit_block">
                        <form class="form-inline">
                            <input type="hidden" name="target_price">
                            <input type="hidden" name="target_id">
                            <input type="hidden" name="buy_or_sell">
                            <input type="hidden" name="org-min-take-profit-point">
                            <div style="margin-bottom: 5px;">新獲利點需大於[&nbsp;&nbsp;<span class="min-take-profit-point">0</span>&nbsp;&nbsp;]點</div>
                            <div style="margin-bottom: 5px;">
                                新獲利點: <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" name="take_profit_point" class="form-control input-sm spinner-style ui-spinner-input" style="width: 30px;" value="0" aria-valuenow="0" autocomplete="off" role="spinbutton"><a class="ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-n">▲</span></span></a><a class="ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-s">▼</span></span></a></span>
                                <button class="btn btn-primary btn-sm" onclick="$(&quot;input[name=take_profit_point]&quot;).val(parseInt($(&quot;input[name=take_profit_point]&quot;).val()) + 10); return false;">+10</button>
                                <button class="btn btn-primary btn-sm" onclick="$(&quot;input[name=take_profit_point]&quot;).val(parseInt($(&quot;input[name=take_profit_point]&quot;).val()) - 10); return false;">-10</button>
                            </div>
                            <button class="btn btn-primary btn-sm reset-take-profit-button">清除設定</button>
                            <button class="btn btn-primary btn-sm update-take-profit-button">送出</button>
                            <button class="btn btn-primary btn-sm" data-dismiss="modal">取消</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Invert Profit Modal -->
    <div class="modal fade" id="invert_profit_modal" tabindex="-1" role="dialog" aria-labelledby="invert_profit_modal_label">
        <div class="modal-dialog modal-invert-profit" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="invert_profit_modal_label">倒限(利)</h4>
                </div>
                <div class="modal-body">
                    <div id="invert_profit_block">
                        <form class="form-inline">
                            <input type="hidden" name="target_price">
                            <input type="hidden" name="target_id">
                            <input type="hidden" name="buy_or_sell">
                            <input type="hidden" name="org-min-invert-profit-point">
                            <div style="margin-bottom: 5px;"><span class="min-invert-profit-point"></span></div>
                            <div style="margin-bottom: 5px;">
                                新獲利點: <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" name="invert_profit_point" class="form-control input-sm spinner-style ui-spinner-input" style="width: 30px;" value="0" aria-valuenow="0" autocomplete="off" role="spinbutton"><a class="ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-n">▲</span></span></a><a class="ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-s">▼</span></span></a></span>
                                <button class="btn btn-primary btn-sm" onclick="$(&quot;input[name=invert_profit_point]&quot;).val(parseInt($(&quot;input[name=invert_profit_point]&quot;).val()) + 10); return false;">+10</button>
                                <button class="btn btn-primary btn-sm" onclick="$(&quot;input[name=invert_profit_point]&quot;).val(parseInt($(&quot;input[name=invert_profit_point]&quot;).val()) - 10); return false;">-10</button>
                            </div>
                            <button class="btn btn-primary btn-sm reset-invert-profit-button">清除設定</button>
                            <button class="btn btn-primary btn-sm update-invert-profit-button">送出</button>
                            <button class="btn btn-primary btn-sm" data-dismiss="modal">取消</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Update Order Modal -->
    <div class="modal fade" id="update_order_modal" tabindex="-1" role="dialog" aria-labelledby="update_order_modal_label">
        <div class="modal-dialog modal-update-order" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="update_order_modal_label">改單</h4>
                </div>
                <div class="modal-body">
                    <div class="float-left" style="width: 220px;">
                        <form class="form-inline">
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label class="control-label">序號: </label>
                                <input type="text" name="update_order_serial" class="form-control input-sm" disabled="true">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label class="control-label">商品: </label>
                                <input type="text" name="update_order_name" class="form-control input-sm" disabled="true">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label class="control-label">會員: </label>
                                <input type="text" name="update_order_user_name" class="form-control input-sm" disabled="true">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label class="control-label">買賣: </label>
                                <input type="text" name="update_order_buy_or_sell" class="form-control input-sm" disabled="true">
                            </div>
                        </form>
                    </div>
                    <div class="float-left" style="width: 220px;">
                        <form class="form-inline">
                            <div style="margin-bottom: 5px;">
                                口數: <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" name="update_order_quantity" class="form-control input-sm spinner-style ui-spinner-input" style="width: 30px;" value="0" aria-valuenow="0" autocomplete="off" role="spinbutton"><a class="ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-n">▲</span></span></a><a class="ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-s">▼</span></span></a></span>
                            </div>
                            <div style="margin-bottom: 5px;">
                                價格: <input type="radio" id="to_submit" name="update_order_odtype" value="0"> 改市價<br>
                                　　&nbsp;&nbsp;<input type="radio" id="edit_limit" name="update_order_odtype" value="2" checked=""> 改限價 <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" name="update_order_orderprice" class="form-control input-sm spinner-style ui-spinner-input" style="width: 50px;" value="0" aria-valuenow="0" autocomplete="off" role="spinbutton"><a class="ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-n">▲</span></span></a><a class="ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default ui-button-text-only" tabindex="-1" role="button"><span class="ui-button-text"><span class="ui-icon ui-icon-triangle-1-s">▼</span></span></a></span>
                            </div>
                            <input type="text" class="form-control input-sm" disabled="true" value="口數只能減量或不變，限價可以改市價" style="width: 220px; margin-bottom: 10px;"><br>
                            <button class="btn btn-primary btn-sm float-right" data-dismiss="modal">取消</button>
                            <button class="btn btn-primary btn-sm update-order-button float-right" style="margin-right: 10px;">確定</button>
                        </form>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Confirm Order Modal -->
    <div class="modal fade" id="confirm_order_modal" tabindex="-1" role="dialog" aria-labelledby="confirm_order_modal_label">
        <div class="modal-dialog modal-confirm-order" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="confirm_order_modal_label">確認下單</h4>
                </div>
                <div class="modal-body">
                    <table class="confirm-order-table full-width-table" style="border: 1px solid #222;">
                        <tbody><tr>
                            <td width="200">目標商品</td>
                            <td width="200">用戶名稱</td>
                            <td width="200">倒</td>
                            <td width="200">多空</td>
                            <td width="200">價格</td>
                            <td width="200">口數</td>
                        </tr>
                        <tr>
                            <td class="confirm-name"></td>
                            <td class="confirm-user-name"></td>
                            <td class="confirm-inverted"></td>
                            <td class="confirm-buy-or-sell"></td>
                            <td class="confirm-price"></td>
                            <td class="confirm-quantity"></td>
                        </tr>
                        </tbody></table>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary confirm-submit-order">確定</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Alert Modal -->
    <div class="modal fade" id="alert_modal" tabindex="-1" role="dialog" aria-labelledby="alert_modal_label">
        <div class="modal-dialog modal-alert" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="alert_modal_label"><span class="modal-alert-title"></span></h4>
                </div>
                <div class="modal-body">
                    <div class="modal-alert-text" style=""></div>
                </div>
                <div class="modal-footer" style="padding: 7px 15px;">
                    <div class="center-div" style="width: 60px;">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">確定</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Processing Modal -->
    <div class="modal fade" id="processing_modal" tabindex="-1" role="dialog" aria-labelledby="processing_modal_label" style="display: none;">
        <div class="modal-dialog modal-processing" role="document">
            <div class="modal-content">
                <div class="modal-header" style="padding: 5px 15px;">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="processing_modal_label"><span class="modal-processing-title"></span></h4>
                </div>
                <div class="modal-body">
                    <div class="modal-processing-text">資料載入中...</div>
                </div>
            </div>
        </div>
    </div>

    <!-- User Action Modal -->
    <div class="modal fade" id="user_action_modal" tabindex="-1" role="dialog" aria-labelledby="user_action_modal_label">
        <div class="modal-dialog modal-user-action" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="user_action_modal_label">使用者動作記錄</h4>
                </div>
                <div class="modal-body">
                    <div class="float-left">
                        <form class="form-inline">
                            日期 <input type="text" class="action-start-date form-control input-sm hasDatepicker" style="width: 100px" id="dp1512665763800"> ~ <input type="text" class="action-end-date form-control input-sm hasDatepicker" style="width: 100px" id="dp1512665763801"> <button class="btn btn-primary btn-sm" onclick="tra.API.User.getAction($('.action-start-date').val(), $('.action-end-date').val(), '-1'); return false;">搜尋</button>
                        </form>
                    </div>
                    <div class="float-right">
                        <button class="btn btn-primary btn-sm" onclick="tra.API.User.getAction(&quot;&quot;, &quot;&quot;, &quot;0&quot;)">今日</button>
                        <button class="btn btn-primary btn-sm" onclick="tra.API.User.getAction(&quot;&quot;, &quot;&quot;, &quot;7&quot;)">本週</button>
                        <button class="btn btn-primary btn-sm" onclick="tra.API.User.getAction(&quot;&quot;, &quot;&quot;, &quot;30&quot;)">本月</button>
                    </div>
                    <div class="clearfix"></div>
                    <table class="user-action-table full-width-table modal-scroll-table" style="border: 1px solid #222; margin-top: 10px;">
                        <thead>
                        <tr>
                            <th>編號</th>
                            <th>帳號</th>
                            <th style="min-width: 80px; width: 80px;">動作類別</th>
                            <th style="min-width: 550px; width: 550px;">說明</th>
                            <th style="min-width: 100px; width: 100px;">日期</th>
                            <th>IP</th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ATR Modal -->
    <div class="move-table ui-draggable ui-draggable-handle ui-resizable">
        <div class="move-table-content" style="height:100%;width:100%;position:relative;">
            <h3 class="max-header" style="margin: 0px; color: white; height:30px; width:100%; font-size: 16px;">
                <div class="move-table-min" style="float:left;margin: 2px 4px 0 1px; color: black;"></div>
                <button class="set-k-button float-left" min="7200" k_day="2" ko_day="2" k="minone" style="margin: 2px 0 0 10px; color: black;">1分</button>
                <button class="set-k-button float-left" min="86400" k_day="9" ko_day="3" k="minfive" style="margin: 2px 0 0 10px; color: black;">5分</button>
                <button class="set-k-button float-left" min="518400" k_day="19" ko_day="5" k="minten" style="margin: 2px 0 0 10px; color: black;">10分</button>
                <button class="set-k-button float-left" min="818400" k_day="28" ko_day="7" k="minfifteen" style="margin: 2px 0 0 10px; color: black;">15分</button>
                <button class="set-k-button float-left" min="1296000" k_day="60" ko_day="14" k="minthirty" style="margin: 2px 0 0 10px; color: black;">30分</button>
                <button class="set-k-button float-left" min="15552000" k_day="18" ko_day="18" k="day" style="margin: 2px 0 0 10px; color: black;">日線</button>
                <button class="set-k-button float-left" min="204984000" k_day="20" ko_day="20" k="month" style="margin: 2px 0 0 10px; color: black;">月線</button>
                <button data-toggle="modal" data-target="#tech_item_modal" class="float-left" style="margin: 2px 0 0 10px; color: black;">技術分析</button>
                <button class="set-tech-ten-button float-left" style="margin: 2px 0 0 10px; color: black;">十</button>
                <div class="move-table-close" style="float:right;margin: 2px 1px 0 1px; color: black;"></div>
            </h3>
            <h3 class="min-header" style="margin: 0px; color: white; height:30px; width:100%; font-size: 16px; display:none;">
                <div class="move-table-close" style="float:right;margin: 2px 1px 0 1px; color: black;"></div>
                <div class="move-table-max" style="float:right;margin: 2px 1px 0 1px; color: black;"></div>
            </h3>
        </div>
        <div class="ui-resizable-handle ui-resizable-n" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-w" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-ne" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-sw" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-nw" style="z-index: 90;"></div></div>

    <footer class="footer">
        <div style="height: 6px; border-top: 1px solid #555; border-bottom: 1px solid #555; background: black;"></div>
        <div style="line-height: 32px; width: 925px;" class="marquee-block"><div style="font-size: 12px;" class="marquee"><div style="width: 100000px; margin-left: 1920px; animation: marqueeAnimation-3257355 22.3359s linear 1s infinite;" class="js-marquee-wrapper"><div class="js-marquee" style="margin-right: 0px; float: left;">　　　　　　　　　　　　　　　　　　　　　　請重視風險控管,避免虧損擴大,請嚴設停損　　　　　　　　　　　　　　　　　　　　　　設定新增版面功能 有A.B版面可選擇 </div><style>@-webkit-keyframes marqueeAnimation-3257355  { 100%  {margin-left:-939px}}</style></div></div></div>
    </footer>
@endsection

@section('script')
    @parent
    <script>
        $(function() {
        });
    </script>
@endsection