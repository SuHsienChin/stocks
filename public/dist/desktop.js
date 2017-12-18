var home =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.str_pad = exports.strParseInt = exports.tech_render = exports.updateCheckBoxTech = exports.updateColorTech = exports.updateSelectTech = exports.updateTech = exports.updateInput = exports.formatNumber = exports.formatTime = exports.rgb2hex = exports.getColor = exports.getDatePeriod = exports.getTime = exports.getDate = exports.getDateTime = exports.p = exports.tra = undefined;

var _main_desktop = __webpack_require__(1);

$(function () {
    if (window.token) {
        _main_desktop.tra.User.token = window.token;
        _main_desktop.tra.User.user_id = window.user_id;
        _main_desktop.tra.Page.init();
        _main_desktop.tra.API.init();
        _main_desktop.tra.OrderAPI.init();
        _main_desktop.tra.Order.init();

        // Load the fonts
        Highcharts.createElement('link', {
            href: 'https://fonts.googleapis.com/css?family=Signika:400,700',
            rel: 'stylesheet',
            type: 'text/css'
        }, null, document.getElementsByTagName('head')[0]);

        //台灣時區為主
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
    }
    window.tra = _main_desktop.tra;
    window.p = _main_desktop.p;
    window.getDateTime = _main_desktop.getDateTime;
    window.getDate = _main_desktop.getDate;
    window.getTime = _main_desktop.getTime;
    window.getDatePeriod = _main_desktop.getDatePeriod;
    window.getColor = _main_desktop.getDatePeriod;
    window.rgb2hex = _main_desktop.rgb2hex;
    window.formatTime = _main_desktop.formatTime;
    window.formatNumber = _main_desktop.formatNumber;
    window.updateInput = _main_desktop.updateInput;
    window.updateTech = _main_desktop.updateTech;
    window.updateSelectTech = _main_desktop.updateSelectTech;
    window.updateColorTech = _main_desktop.updateColorTech;
    window.updateCheckBoxTech = _main_desktop.updateCheckBoxTech;
    window.tech_render = _main_desktop.tech_render;
    window.strParseInt = _main_desktop.strParseInt;
    window.str_pad = _main_desktop.str_pad;
});

exports.tra = _main_desktop.tra;
exports.p = _main_desktop.p;
exports.getDateTime = _main_desktop.getDateTime;
exports.getDate = _main_desktop.getDate;
exports.getTime = _main_desktop.getTime;
exports.getDatePeriod = _main_desktop.getDatePeriod;
exports.getColor = _main_desktop.getColor;
exports.rgb2hex = _main_desktop.rgb2hex;
exports.formatTime = _main_desktop.formatTime;
exports.formatNumber = _main_desktop.formatNumber;
exports.updateInput = _main_desktop.updateInput;
exports.updateTech = _main_desktop.updateTech;
exports.updateSelectTech = _main_desktop.updateSelectTech;
exports.updateColorTech = _main_desktop.updateColorTech;
exports.updateCheckBoxTech = _main_desktop.updateCheckBoxTech;
exports.tech_render = _main_desktop.tech_render;
exports.strParseInt = _main_desktop.strParseInt;
exports.str_pad = _main_desktop.str_pad;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.str_pad = exports.strParseInt = exports.tech_render = exports.updateCheckBoxTech = exports.updateColorTech = exports.updateSelectTech = exports.updateTech = exports.updateInput = exports.formatNumber = exports.formatTime = exports.rgb2hex = exports.getColor = exports.getDatePeriod = exports.getTime = exports.getDate = exports.getDateTime = exports.p = exports.tra = undefined;

var _api = __webpack_require__(2);

_api.tra.ConfigSet.ORDERAPI_CLIENT = 0;

_api.tra.TXFval = {
    txf_p: 0,
    tslq_p: 0,
    tslq_ref: 0
};

_api.tra.TechIndex = {
    "Current": "minone",
    "CurrentDay": 2,
    "Min": 7200
};

//setTimeout(function(){location.reload()}, 3600000)

_api.tra.Page.loginOut = function (error) {
    alert(error);
    location.href = "logout.php";
};

_api.tra.Page.setCallback = function () {
    _api.tra.Web.initContentSel();
    _api.tra.setDragBarVerticalCallback();
    _api.tra.setDragBarItemCallback();
    _api.tra.setDragBarPriceCallback();
    if (_api.tra.Custom.WebContent.get() == "B") {
        _api.tra.setWebContentDragBarPriceCallback();
    }
    _api.tra.Page.reCalculate();
    _api.tra.setDateClickCallback();
    _api.tra.setUserHistoryDetailFilterCallback();
    _api.tra.setDragBarKlineCallback();
    _api.tra.Alarm.init();
    _api.tra.BSSignal.init();
    _api.tra.User.init();
    _api.tra.API.Rule.get();
    _api.tra.API.Announce.get();
    _api.tra.Password.init();
    _api.tra.HistoryPrice.init();
    _api.tra.Chart.Control.init();
    _api.tra.AddNewOrCurrent.init();
    function techItemClick() {
        $("#tech_state_info").html('');

        var tech_setting = _api.tra.Custom.Tech.get();

        for (var i in tech_setting["tech_to"]) {
            if (tech_setting["tech_to"][i][0] == $(this).children(":selected").val()) {
                if (tech_setting["tech_to"][i].length >= 3) {
                    var render_object = [];
                    for (var j in tech_setting["tech_to"][i][2]) {
                        if (tech_setting["tech_to"][i][2][j][0] == 0) {
                            render_object.push('<div class="float-left" style="width:100%;margin-bottom:15px;">', '<div class="float-left use-price-div">', tech_setting["tech_to"][i][2][j][1] + ':　<img src="image/mobile/icon-add2.gif" width="20" style="vertical-align: middle" onclick="updateTech($(\'input[name=t' + j + ']\'), ' + i + ', ' + j + ', \'add\');">', '</div>', '<div class="float-left use-price-div">', '    <input type="text" name="t' + j + '" style="width: 55px; text-align: center;" class="use-price" value="' + tech_setting["tech_to"][i][2][j][2] + '">', '</div>', '<div class="float-left use-price-div">', '    <img src="image/mobile/icon-sub2.gif" width="20" style="vertical-align: middle" onclick="updateTech($(\'input[name=t' + j + ']\'), ' + i + ', ' + j + ', \'sub\');">', '</div>', '</div>');
                        } else if (tech_setting["tech_to"][i][2][j][0] == 1) {
                            render_object.push('<div class="float-left" style="width:100%;margin-bottom:15px;">', tech_setting["tech_to"][i][2][j][1] + ':　<select name="t' + j + '" onchange="updateSelectTech($(this), ' + i + ', ' + j + ');">');

                            for (var k = 3; k < tech_setting["tech_to"][i][2][j].length; k++) {
                                if (k - 3 == tech_setting["tech_to"][i][2][j][2]) {
                                    render_object.push('<option value="' + (k - 3) + '" selected>' + tech_setting["tech_to"][i][2][j][k] + '</option>');
                                } else {
                                    render_object.push('<option value="' + (k - 3) + '">' + tech_setting["tech_to"][i][2][j][k] + '</option>');
                                }
                            }

                            render_object.push('</select>', '</div>');
                        } else if (tech_setting["tech_to"][i][2][j][0] == 2) {
                            render_object.push('<div class="float-left" style="width:100%;margin-bottom:15px;">', tech_setting["tech_to"][i][2][j][1] + ':　<input class="tcolor" type="text" value="' + tech_setting["tech_to"][i][2][j][2] + '" tech_i="' + i + '" tech_j="' + j + '"  />', '</div>');
                        } else if (tech_setting["tech_to"][i][2][j][0] == 3) {
                            render_object.push('<div class="float-left" style="width:100%;margin-bottom:15px;">', tech_setting["tech_to"][i][2][j][1] + ':　<input style="width:18px;height:18px;" type="checkbox" name="t' + j + '" onchange="updateCheckBoxTech($(this), ' + i + ', ' + j + ', false);" ' + (tech_setting["tech_to"][i][2][j][2] == 1 ? 'checked' : '') + '/>', '</div>');
                        } else if (tech_setting["tech_to"][i][2][j][0] == 4) {
                            render_object.push('<div class="float-left" style="width:100%;margin-bottom:15px;">', tech_setting["tech_to"][i][2][j][1] + ':　<input style="width:18px;height:18px;" type="checkbox" name="t' + j + '" onchange="updateCheckBoxTech($(this), ' + i + ', ' + j + ', true);" ' + (tech_setting["tech_to"][i][2][j][2] == 1 ? 'checked' : '') + '/>', '</div>');
                        }
                    }

                    renderToTechBox(render_object);
                    $(".jPicker").remove();
                    $('.tcolor').jPicker({
                        window: {
                            expandable: true,
                            position: {
                                x: 'center', // acceptable values "left", "center", "right", "screenCenter", or relative px value
                                y: '60px' // acceptable values "top", "bottom", "center", or relative px value
                            }
                        },
                        color: {
                            alphaSupport: true,
                            active: new $.jPicker.Color({ ahex: '99330099' })
                        }
                    }, function (color, context) {
                        (0, _api.updateColorTech)($(this));
                    });
                }
            }
        }
    }

    function renderToTechBox(item) {
        $("#tech_state_info").html(item.join("\n"));
    }

    var resize_ing = 0;
    $(window).resize(function () {
        if (resize_ing == 0) {
            setTimeout(resize_chart, 100);
            resize_ing = 1;
        }
    });

    function resize_chart() {
        _api.tra.Page.reCalculate();
        resize_ing = 0;
    }

    $("#multiselect_tech_leftSelected").click(function () {
        var tech_setting = _api.tra.Custom.Tech.get();

        for (var i in tech_setting["tech_to"]) {
            if (tech_setting["tech_to"][i][0] == $('#multiselect_tech').children(":selected").val()) {
                if (tech_setting["tech_to"][i].length >= 3) {
                    tech_setting["tech_to"][i][3] = 0;
                    (0, _api.tech_render)("#multiselect_tech", 1, tech_setting["tech_to"]);
                }
            }
        }

        _api.tra.Custom.Tech.set(tech_setting);
    });

    $("#multiselect_tech_rightSelected").click(function () {
        var tech_setting = _api.tra.Custom.Tech.get();

        for (var i in tech_setting["tech_to"]) {
            if (tech_setting["tech_to"][i][0] == $('#multiselect_tech_to').children(":selected").val()) {
                if (tech_setting["tech_to"][i].length >= 3) {
                    tech_setting["tech_to"][i][3] = 1;
                    (0, _api.tech_render)("#multiselect_tech", 1, tech_setting["tech_to"]);
                }
            }
        }

        _api.tra.Custom.Tech.set(tech_setting);
    });
    $("#multiselect_tech_leftAll").click(function () {
        var tech_setting = _api.tra.Custom.Tech.get();

        for (var i in tech_setting["tech_to"]) {
            if (tech_setting["tech_to"][i].length >= 3) {
                tech_setting["tech_to"][i][3] = 0;
            }
        }

        (0, _api.tech_render)("#multiselect_tech", 1, tech_setting["tech_to"]);

        _api.tra.Custom.Tech.set(tech_setting);
    });

    $('#multiselect_item').multiselect({ sort: false });
    $('#multiselect_col').multiselect({ sort: false });
    $('#multiselect_tech_to').change(techItemClick);
    $('#multiselect_tech').change(techItemClick);
    $(".spinner-style").spinner();
    // $(".use-price").prop("disabled", true);
    $("input[name=price_detail_hour]").spinner({
        spin: function spin(event, ui) {
            if (ui.value > 23) {
                $(this).spinner("value", 0);
                return false;
            } else if (ui.value < 0) {
                $(this).spinner("value", 23);
                return false;
            }
        }
    });
    $("input[name=price_detail_min], input[name=price_detail_sec]").spinner({
        spin: function spin(event, ui) {
            if (ui.value > 59) {
                $(this).spinner("value", 0);
                return false;
            } else if (ui.value < 0) {
                $(this).spinner("value", 59);
                return false;
            }
        }
    });
    $("input[name=update_order_quantity]").spinner({
        spin: function spin(event, ui) {
            if (ui.value > $("input[name=update_order_quantity]").val()) {
                $(this).spinner("value", $("input[name=update_order_quantity]").val());
                _api.tra.Alert("口數只能減量或不變");
                return false;
            } else if (ui.value < 1) {
                $(this).spinner("value", 1);
                return false;
            }
        }
    });
    $(".price-tabs").tabs();
    $(".price-tabs li a").click(function () {
        if ($(this).attr("href") == "#price-detail-block") {
            $(".price-detail-option").show();
        } else {
            $(".price-detail-option").hide();
        }
    });
    $(".ui-spinner-input").focus(function () {
        $(this).parent().css("box-shadow", "0 0 5px #6eaad7");
    });
    $(".ui-spinner-input").blur(function () {
        $(this).parent().css("box-shadow", "none");
    });
    $("input[name=select_all_uncovered]").click(function () {
        if ($(this).prop("checked")) {
            $("input[name=uncovered_checkbox]").prop("checked", true);
        } else {
            $("input[name=uncovered_checkbox]").prop("checked", false);
        }
    });
    $(".exchange-menu").delegate("li", "click", function () {
        var exchange_id = $(this).attr("exchange_id");
        if (exchange_id == "all") {
            $(".item-table tbody tr").show();
        } else {
            $(".item-table tbody tr").hide();
            $(".item-table tbody tr[exchange_id=" + exchange_id + "]").show();
        }
    });
};

_api.tra.Page.render = {
    UserInfo: function UserInfo(info) {
        _api.tra.User.user_name = info["UserArray"]["Account"];
        var point_or_todaymoney = info["UserArray"]["PointOrTodayMoney"] == "0" ? "額度" : "今日損益";
        var submit_confirm = info["UserArray"]["SubmitNotConfirm"] == "1" ? "否" : "是";
        var delete_confirm = info["UserArray"]["DeleteConfirm"] == "0" ? "否" : "是";
        var today_money = info["UserArray"]["TodayMoney"];
        if (today_money > 0) {
            today_money = '<span class="header-red">+' + (0, _api.formatNumber)(today_money) + '</span>';
        } else if (today_money < 0) {
            today_money = '<span class="header-green">' + (0, _api.formatNumber)(today_money) + '</span>';
        }

        $(".userinfo-todaymoney").html(today_money);
        $(".user-touch-point").text((0, _api.formatNumber)(info["UserArray"]["TouchPoint"]));
        $(".user-money, .user-money-float").text((0, _api.formatNumber)(info["UserArray"]["Money"]));
        if (info["UserArray"]["State"] == "正常") {
            $(".icon-member-status").html('<img src="image/mobile/icon-normal.gif" height="50">' + _api.tra.User.user_name);
        } else {
            $(".icon-member-status").html('<img src="image/mobile/icon-disabled.gif" height="50">' + _api.tra.User.user_name);
        }
        var tr = ['<tr>', '    <td width="150">帳號</td>', '    <td width="150">' + info["UserArray"]["Account"] + '</td>', '</tr>', '<tr>', '    <td style="width: 120px;">名稱</td>', '    <td>' + info["UserArray"]["Name"] + '</td>', '</tr>', '<tr>', '    <td>狀態</td>', '    <td>' + info["UserArray"]["State"] + '</td>', '</tr>', '<tr>', '    <td>信用額度</td>', '    <td>' + info["UserArray"]["TouchPoint"] + '</td>', '</tr>', '<tr>', '    <td>對匯額度</td>', '    <td>' + info["UserArray"]["ContrastPoint"] + '</td>', '</tr>', '<tr>', '    <td>極贏額度(' + point_or_todaymoney + ')</td>', '    <td>' + info["UserArray"]["SuperPoint"] + '</td>', '</tr>', '<tr>', '    <td>全商品持倉上限</td>', '    <td>' + info["UserArray"]["AllStoreLimit"] + '</td>', '</tr>', '<tr>', '    <td>全商品每筆上限</td>', '    <td>' + info["UserArray"]["DaySubmitLimit"] + '</td>', '</tr>', '<tr>', '    <td>全商品留倉上限</td>', '    <td>' + info["UserArray"]["AllRemainingLimit"] + '</td>', '</tr>', '<tr>', '    <td>全商品留倉天數</td>', '    <td>' + info["UserArray"]["AllDayRemaingDayLimit"] + '</td>', '</tr>', '<tr>', '    <td>下單前是否確認</td>', '    <td>' + submit_confirm + '</td>', '</tr>', '<tr>', '    <td>刪單前是否確認</td>', '    <td>' + delete_confirm + '</td>', '</tr>', '<tr>', '    <td>結算時間</td>', '    <td>' + info["UserArray"]["EndTime"] + '</td>', '</tr>'];
        $(".userinfo-table tbody").html(tr.join("\n"));

        if (info["UserArray"]["SubmitNotConfirm"] == "1") {
            $("input[name=order_without_comfirm]").prop("checked", true);
        }

        var item_tr = [];
        var day_cover;
        for (var i in info["CommidyArray"]) {
            //$(".item-" + info["CommidyArray"][i]["ID"] + ".no_new").text(info["CommidyArray"][i]["NotNewPercent"]);
            //$(".item-" + info["CommidyArray"][i]["ID"] + ".force_close").text(info["CommidyArray"][i]["CoverPercent"]);
            day_cover = info["CommidyArray"][i]["DayCover"] == 0 ? "否" : "是";
            item_tr.push('<tr class="userinfo-item-' + info["CommidyArray"][i]["ID"] + '" lighting="' + info["CommidyArray"][i]["Lighting"] + '" limiting="' + info["CommidyArray"][i]["Limiting"] + '" submiting="' + info["CommidyArray"][i]["Submiting"] + '" closing="' + info["CommidyArray"][i]["Closing"] + '">', '    <td style="width: 65px;">' + info["CommidyArray"][i]["Name"] + '</td>', '    <td style="width: 45px;">' + info["CommidyArray"][i]["StoreLimit"] + '</td>', '    <td style="width: 45px;">' + info["CommidyArray"][i]["SubmitMax"] + '</td>', '    <td style="width: 45px;">' + info["CommidyArray"][i]["RemaingLimit"] + '</td>', '    <td style="width: 45px;">' + info["CommidyArray"][i]["RemaingDayLimit"] + '</td>', '    <td style="width: 60px;">' + info["CommidyArray"][i]["TradePoint"] + '</td>', '    <td style="width: 60px;">' + info["CommidyArray"][i]["PointMoney"] + '</td>', '    <td style="width: 60px;">' + info["CommidyArray"][i]["Fee"] + '</td>', '    <td style="width: 60px;">' + info["CommidyArray"][i]["OpenMaxPoint"] + '</td>', '    <td style="width: 60px;">' + info["CommidyArray"][i]["SubmitMaxPoint"] + '</td>', '    <td style="width: 60px;" class="no_new">' + info["CommidyArray"][i]["NotNewPercent"] + '</td>', '    <td style="width: 60px;" class="force_close">' + info["CommidyArray"][i]["CoverPercent"] + '</td>', '    <td style="width: 60px;" class="userinfo-stop-point">' + info["CommidyArray"][i]["StopPoint"] + '</td>', '    <td style="width: 45px;" class="userinfo-item-daycover">' + day_cover + '</td>', '    <td style="width: 100px;">' + info["CommidyArray"][i]["TradeTime"] + '</td>', '    <td style="width: 65px;">' + info["CommidyArray"][i]["State"] + '</td>', '</tr>');
        }
        $(".userinfo-item-table tbody").html(item_tr.join("\n"));
    }
};

_api.tra.Item = {
    init: function init(items) {
        var tr = [];
        items = items["data"];

        if (items.length > 0 && _api.tra.Custom.WebContent.get() == "B") {
            _api.tra.Chart.queryChart(items[0]["product_id"]);
        }

        var thead = ['<tr>', '    <th class="k_bun" style="min-width: 33px; width: 33px;">K棒</th>', '    <th class="product_name">商品名稱</th>', '    <th class="stock" style="min-width: 45px; width: 45px;">倉位</th>', '    <th class="mini_chart" style="min-width: 120px; width: 120px;">走勢</th>', '    <th class="five-ratio">內外盤比</th>', '    <th class="newest_price">成交價</th>', '    <th class="open_price">開盤價</th>', '    <th class="bp_price hide">買進價</th>', '    <th class="sp_price hide">賣出價</th>', '    <th class="up_down">漲跌</th>', '    <th class="up_down_ratio">漲跌幅%</th>', '    <th class="yesterday_close_price">昨結算</th>', '    <th class="total_qty hide">總量</th>', '    <th class="highest_price hide">最高價</th>', '    <th class="lowest_price hide">最低價</th>', '    <th class="yesterday_last_price hide">昨收盤</th>', '    <th class="no_new" style="min-width: 140px; width: 140px;">禁新</th>', '    <th class="force_close" style="min-width: 140px; width: 140px;">強平</th>', '    <th class="final_date">最後交易日</th>', '    <th class="newest_time">時間</th>', '    <th class="status">狀態</th>', '</tr>'];
        $(".item-table thead").html(thead.join("\n"));

        var state = "";
        var standard,
            up_down,
            up_down_ratio = 0;
        var order_item_list = [];
        var color_dict = {};
        var bg_color;
        var final_date_td;
        var today = new Date();
        var no_new = {};
        var force_close = {};

        var market_tq = [];
        var buysell_tq = [];
        for (var i in items) {
            if (items[i]["product_id"] == "TXF" || items[i]["product_id"] == "TXFAF") {
                _api.tra.TXFval.txf_p = items[i]["newest_price"];
            } else if (items[i]["product_id"] == "TSLQ") {
                _api.tra.TXFval.tslq_p = items[i]["newest_price"];
                _api.tra.TXFval.tslq_ref = items[i]["yesterday_close_price"];
                market_tq = items[i]["market_memo"].split(",");
                buysell_tq = items[i]["buysell_memo"].split(",");
            }

            if ($(".exchange-menu li[exchange_id=" + items[i]["market"] + "]").length == 0) {
                $(".exchange-menu").append('<li exchange_id="' + items[i]["market"] + '"><a href="#">' + _api.tra.exchange[items[i]["market"]] + '</a></li>');
            }
            standard = items[i]["yesterday_close_price"];
            up_down = Math.round((items[i]["newest_price"] - standard) * 1000) / 1000;
            if (standard > 0) {
                up_down_ratio = Math.round(up_down / standard * 10000) / 100;
            } else {
                up_down_ratio = 0;
            }
            bg_color = i % 2 == 1 ? "#0f0f0f" : "#121823";
            if (isNaN(up_down_ratio)) {
                up_down_ratio = 0;
            }
            if (items[i]["state"] == 0 || items[i]["state"] == 1) {
                state = "收盤";
            } else if (items[i]["state"] == 2) {
                state = "開盤";
            }
            order_item_list.push('<option value="' + items[i]["product_id"] + '">' + items[i]["product_name"] + items[i]["monthday"] + '</option>');
            color_dict["newest_price"] = (0, _api.getColor)(standard, items[i]["newest_price"]);
            color_dict["bp_price"] = (0, _api.getColor)(standard, items[i]["bp_price"]);
            color_dict["sp_price"] = (0, _api.getColor)(standard, items[i]["sp_price"]);
            color_dict["up_down"] = (0, _api.getColor)(0, up_down);
            color_dict["up_down_ratio"] = (0, _api.getColor)(0, up_down_ratio);
            color_dict["open_price"] = (0, _api.getColor)(standard, items[i]["open_price"]);
            color_dict["highest_price"] = (0, _api.getColor)(standard, items[i]["highest_price"]);
            color_dict["lowest_price"] = (0, _api.getColor)(standard, items[i]["lowest_price"]);
            if (parseInt((0, _api.getDate)(today, "")) >= parseInt(items[i]["end_date"])) {
                final_date_td = '    <td class="final_date red-bg">' + items[i]["end_date"] + '</td>';
            } else {
                final_date_td = '    <td class="final_date">' + items[i]["end_date"] + '</td>';
            }
            no_new["value"] = Math.ceil(standard * parseInt($(".userinfo-item-" + items[i]["product_id"] + " td.no_new").text()) / 100);
            no_new["max"] = isNaN(no_new["value"]) ? 0 : standard + no_new["value"];
            no_new["min"] = isNaN(no_new["value"]) ? 0 : standard - no_new["value"];
            force_close["value"] = Math.ceil(standard * parseInt($(".userinfo-item-" + items[i]["product_id"] + " td.force_close").text()) / 100);
            force_close["max"] = isNaN(force_close["value"]) ? 0 : standard + force_close["value"];
            force_close["min"] = isNaN(force_close["value"]) ? 0 : standard - force_close["value"];
            tr.push('<tr class="item-' + items[i]["product_id"] + '" bg_color="' + bg_color + '" exchange_id=' + items[i]["market"] + ' title="' + items[i]["product_name"] + "商品代碼: " + items[i]["product_id"] + "(" + items[i]["monthday"].replace("0", "") + "月) " + (0, _api.getTime)(items[i]["open_date_time"]) + "~" + (0, _api.getTime)(items[i]["close_date_time"]) + '">', '    <td class="k_bun" style="min-width: 33px; width: 33px;position: relative;">', '       <div class="k_col" style="position:absolute;height:1px;width:50%;left:25%;top:50%;background:#fff;"></div>', '       <div class="k_line" style="position:absolute;height:1px;width:1px;left:49%;top:50%;background:#fff;"></div>', '    </td>', '    <td class="product_name">' + items[i]["product_name"] + items[i]["monthday"] + '</td>', '    <td class="stock" style="text-align: center; min-width: 45px; width: 45px;"></td>', '    <td class="mini_chart" style="padding: 0px; min-width: 120px; width: 120px;">', '    </td>', '    <td class="five-ratio" style="padding: 2px;"></td>', '    <td class="newest_price ' + color_dict["newest_price"] + '">' + items[i]["newest_price"] + '</td>', '    <td class="open_price ' + color_dict["open_price"] + '">' + items[i]["open_price"] + '</td>', '    <td class="bp_price ' + color_dict["bp_price"] + ' hide">' + items[i]["bp_price"] + '</td>', '    <td class="sp_price ' + color_dict["sp_price"] + ' hide">' + items[i]["sp_price"] + '</td>', '    <td class="up_down ' + color_dict["up_down"] + '">' + up_down.toString() + '</td>', '    <td class="up_down_ratio ' + color_dict["up_down_ratio"] + '">' + up_down_ratio.toString() + '%</td>', '    <td class="yesterday_close_price">' + items[i]["yesterday_close_price"] + '</td>', '    <td class="total_qty hide">' + items[i]["total_qty"] + '</td>', '    <td class="highest_price hide ' + color_dict["highest_price"] + '">' + items[i]["highest_price"] + '</td>', '    <td class="lowest_price hide ' + color_dict["lowest_price"] + '">' + items[i]["lowest_price"] + '</td>', '    <td class="yesterday_last_price hide">' + items[i]["yesterday_last_price"] + '</td>', '    <td class="no_new" style="min-width: 140px; width: 140px;"><span class="green">' + no_new["min"] + '</span> / <span class="red">' + no_new["max"] + '</span></td>', '    <td class="force_close" style="min-width: 140px; width: 140px;"><span class="green">' + force_close["min"] + '</span> / <span class="red">' + force_close["max"] + '</span></td>', final_date_td, '    <td class="newest_time">' + items[i]["newest_time"].substring(0, 2) + ":" + items[i]["newest_time"].substring(2, 4) + ":" + items[i]["newest_time"].substring(4, 6) + '</td>', '    <td class="status">' + state + '</td>', '</tr>');
        }

        if (_api.tra.TXFval.tslq_p > 0 && _api.tra.TXFval.txf_p > 0) {
            $(".tslq-point-diff").html("<b class=\"" + (0, _api.getColor)(0, _api.tra.TXFval.txf_p - _api.tra.TXFval.tslq_p) + "\">" + (_api.tra.TXFval.txf_p - _api.tra.TXFval.tslq_p) + "</b>");
        }

        if (market_tq.length > 2 && buysell_tq.length > 3) {
            $(".tslq-point").html("<b>" + parseInt(parseFloat(market_tq[1]) / 10000) + "萬張 " + parseInt(parseFloat(market_tq[2]) / 10000) + "萬筆 " + parseInt(parseFloat(market_tq[1]) / parseFloat(market_tq[2]) * 100) / 100 + "</b>");

            $(".tslq-money").html("<b> 成交量 " + market_tq[0] + "億 </b>");

            $(".tslq-want-buy").html("<b class=\"red\">" + parseInt(parseFloat(buysell_tq[1]) / 10000) + "萬張 " + parseInt(parseFloat(buysell_tq[0]) / 10000) + "萬筆 " + parseInt(parseFloat(buysell_tq[1]) / parseFloat(buysell_tq[0]) * 100) / 100 + "</b>");

            $(".tslq-want-sell").html("<b class=\"green\">" + parseInt(parseFloat(buysell_tq[3]) / 10000) + "萬張 " + parseInt(parseFloat(buysell_tq[2]) / 10000) + "萬筆 " + parseInt(parseFloat(buysell_tq[3]) / parseFloat(buysell_tq[2]) * 100) / 100 + "</b>");
        }

        $(".exchange-menu").append('<li exchange_id="all"><a href="#">所有交易所</a></li>');
        $("select[name=order_item_list]").html(order_item_list.join("\n"));
        _api.tra.Order.render.checkDayCover();
        $(".item-table tbody").html(tr.join("\n"));
        _api.tra.Order.render.StockNumber();
        _api.tra.Item.clickCallback();
        _api.tra.Page.reCalculate();

        for (var i in items) {
            if (items[i]["last_depth"].length > 0) {
                var five = items[i]["last_depth"].split(",");
                if (five.length > 11) {
                    var buy = 0;
                    var sell = 0;
                    var buy_count = five[0];
                    var sell_count = five[1];

                    for (var j = 0; j < buy_count; j++) {
                        buy += parseInt(five[j * 2 + 3]);
                    }
                    for (var j = 0; j < sell_count; j++) {
                        sell += parseInt(five[j * 2 + 3 + buy_count * 2]);
                    }

                    if ($("th.five-ratio").css("display") != "none") {
                        _api.tra.Item.renderFiveBar(items[i]["product_id"], buy, sell);
                    }
                }
            }
        }
    },

    refresh: function refresh() {
        //Item
        var item_setting = _api.tra.Custom.Item.get();
        $(".item-table tbody tr").attr("order", "-1");
        for (var i in item_setting["show"]) {
            $(".item-" + item_setting["show"][i][0]).attr("order", i);
        }

        $(".item-table tbody tr").show();
        $(".item-table tbody tr[order=-1]").hide();
        var rows = $(".item-table tbody tr");
        rows.sort(function (a, b) {
            var keyA = $(a).attr('order');
            var keyB = $(b).attr('order');
            if (parseInt(keyA) < parseInt(keyB)) return -1;
            if (parseInt(keyA) > parseInt(keyB)) return 1;
            return 0;
        });
        $.each(rows, function (index, row) {
            $(".item-table tbody").append(row);
        });
        //Col
        var col_setting = _api.tra.Custom.Col.get();
        $(".item-table td, .item-table th").attr("order", "-1");
        //更新五檔、內外盤、送指令

        var find_five_ratio = false;
        for (var i in col_setting["show"]) {
            $(".item-table").find("." + col_setting["show"][i][0]).attr("order", i);
            if (col_setting["show"][i][0] == "mini_chart") {
                _api.tra.Item.displayMiniChart();
            }

            if (col_setting["show"][i][0] == "five-ratio") {
                var sub_str = "";
                for (var j in item_setting["show"]) {
                    if (sub_str.length > 0) {
                        sub_str += ",";
                    }

                    sub_str += item_setting["show"][j][0];
                }

                if (sub_str.length > 0) {
                    _api.tra.API.send("h:" + sub_str);
                }

                find_five_ratio = true;
            }
        }

        if (!find_five_ratio) {
            var sub_str = "";
            for (var j in item_setting["show"]) {
                if (sub_str.length > 0) {
                    sub_str += ",";
                }

                sub_str += item_setting["show"][j][0];
            }

            if (sub_str.length > 0) {
                _api.tra.API.send("f:" + sub_str);
            }
        }

        $(".item-table td, .item-table th").show();
        $(".item-table td[order=-1], .item-table th[order=-1]").hide();
        var rows = $(".item-table tr");
        var cols;
        var this_row;
        rows.each(function () {
            this_row = $(this);
            cols = $(this).children("td, th");
            cols.sort(function (a, b) {
                var keyA = $(a).attr('order');
                var keyB = $(b).attr('order');
                if (parseInt(keyA) < parseInt(keyB)) return -1;
                if (parseInt(keyA) > parseInt(keyB)) return 1;
                return 0;
            });
            $.each(cols, function (index, col) {
                this_row.append(col);
            });
        });
    },

    displayMiniChart: function displayMiniChart() {
        for (var k in _api.tra.MiniChart.minivChart) {
            if (_api.tra.MiniChart.minivChart.hasOwnProperty(k)) {
                _api.tra.MiniChart.minivChart[k].destroy();
            }
        }
        _api.tra.MiniChart.minivChart = {};
        $(".mini-chart").remove();

        var col_setting = _api.tra.Custom.Col.get();
        var item_setting = _api.tra.Custom.Item.get();
        _api.tra.MiniChart.createdNum = item_setting["show"].length % 2;

        for (var i in col_setting["show"]) {
            if (col_setting["show"][i][0] == "mini_chart") {
                var product_id;
                var query_array = [];
                for (var j in item_setting["show"]) {
                    var name = item_setting["show"][j][0];
                    if (name == "TXF" || name == "FXF" || name == "EXF" || name == "HSI") {
                        query_array = query_array.concat([name, "minone", 1, "mini_chart"]);
                    } else {
                        query_array = query_array.concat([name, "minone", 2, "mini_chart"]);
                    }
                }
                if (query_array.length > 0) {
                    _api.tra.API.getTechLine(query_array);
                }
            }
        }
    },

    update: function update(item) {
        var standard = parseInt($(".item-" + item[0]).children("td.yesterday_close_price").text());
        var new_price = parseInt(item[2]);
        var color = "";
        _api.tra.Order.render.StopTakePoint(item[0], item[2]);
        if (standard > new_price) {
            color = "green";
        } else if (standard < new_price) {
            color = "red";
        } else {
            color = "";
        }
        var current_row_color = '#000000';
        //if(rgb2hex($(".item-"+ item[0]).css("background-color")) == current_row_color) {
        //$(".item-" + item[0] + " .newest_price").css("background-color", color).animate({"background-color": current_row_color}, 500);
        //}
        $(".item-" + item[0]).children("td.newest_price").animate({ borderBottomColor: color,
            borderRightColor: color, borderTopColor: color,
            borderLeftColor: color }, 0).animate({ borderBottomColor: color }, 500).animate({ borderBottomColor: current_row_color, borderRightColor: current_row_color, borderTopColor: current_row_color,
            borderLeftColor: current_row_color }, 0);
        //報價
        $(".item-" + item[0]).children("td.newest_price").html('<span class="' + color + '">' + item[2] + '</span>');
        //漲跌
        var color_dict = {};
        var up_down = Math.round((item[2] - standard) * 1000) / 1000;
        var up_down_ratio = 0;
        if (standard > 0) {
            up_down_ratio = Math.round(up_down / standard * 10000) / 100;
        }
        color_dict["up_down"] = (0, _api.getColor)(0, up_down);
        color_dict["up_down_ratio"] = (0, _api.getColor)(0, up_down_ratio);
        if (isNaN(up_down_ratio)) {
            up_down_ratio = 0;
        }

        $(".item-" + item[0]).children("td.newest_time").text(item[1].substring(0, 2) + ":" + item[1].substring(2, 4) + ":" + item[1].substring(4, 6));
        $(".item-" + item[0]).children("td.up_down").html('<span class="' + color_dict["up_down"] + '">' + up_down + '</span>');
        $(".item-" + item[0]).children("td.up_down_ratio").html('<span class="' + color_dict["up_down_ratio"] + '">' + up_down_ratio + '%</span>');
        //最低價
        var current_low = parseInt($(".item-" + item[0]).children("td.lowest_price").text());
        if (item[2] < current_low) {
            $(".item-" + item[0]).children("td.lowest_price").text(item[2]);
        }
        //最高價
        var current_high = parseInt($(".item-" + item[0]).children("td.highest_price").text());
        if (item[3] > current_high) {
            $(".item-" + item[0]).children("td.highest_price").text(item[3]);
        }
        //量
        var current_qty = parseInt($(".item-" + item[0]).children("td.total_qty").text());
        $(".item-" + item[0]).children("td.total_qty").text(current_qty + parseInt(item[4]));
    },

    renderSpBp: function renderSpBp(target, buy, sell) {
        $(".item-" + target).children("td.bp_price").text(buy);
        $(".item-" + target).children("td.sp_price").text(sell);
    },

    renderFiveBar: function renderFiveBar(target, buy, sell) {
        var total = buy + sell;
        var buy_ratio = buy / total * 100;
        var sell_ratio = sell / total * 100;
        var html = [];
        html.push('<div style="height: 20px;">', '    <div class="float-left red-bg" style="width: ' + buy_ratio.toString() + '%; height: 100%;"></div>', '    <div class="float-left green-bg" style="width: ' + sell_ratio.toString() + '%; height: 100%;"></div>', '    <div class="clearfix"></div>', '</div>');
        $(".item-" + target).children(".five-ratio").html(html.join("\n"));
    },
    clickCallback: function clickCallback() {
        $(".item-table tbody").delegate("tr", "click", function () {
            var item = $(this).attr("class").split("-");
            if (item[1] == "TXF" || item[1] == "TXFAF" || item[1] == "TSLQ") {
                $(".tslq-detail").show();
            } else {
                $(".tslq-detail").hide();
            }

            var col_setting = _api.tra.Custom.Col.get();
            var find_five_ratio = false;
            for (var i in col_setting["show"]) {
                if (col_setting["show"][i][0] == "five-ratio") {
                    find_five_ratio = true;
                }
            }

            if (!find_five_ratio) {
                _api.tra.API.send("f:" + _api.tra.current_item);
            }

            if (_api.tra.current_item != item[1]) {
                if (_api.tra.Chart.stateShow) {
                    if (_api.tra.Custom.WebContent.get() != "B") {
                        _api.tra.Processing.show();
                    }
                    _api.tra.Chart.queryChart(item[1]);
                }

                if (_api.tra.kChart.stateShow) {
                    _api.tra.Processing.show();
                    _api.tra.kChart.queryChart(item[1]);
                }
            }

            _api.tra.current_item = item[1];
            _api.tra.API.send("h:" + item[1]);
            $(".main-five-flow").hide();

            //Update order block
            $(".order-block select[name=order_item_list]").val(_api.tra.current_item);
            $(".order-block input[name=use_price]").val($(this).children("td.newest_price").text());
            var item_stop_point = $(".userinfo-item-table tr.userinfo-item-" + _api.tra.current_item + " td.userinfo-stop-point").text();
            $(".order-block input[name=use_stop_loss_point]").val("0");
            $(".order-block input[name=use_take_profit_point]").val("0");

            $(".five-step-table tr.five-data").remove();
            $(".price-detail-table tbody tr").remove();
            $(this).siblings().find("td").removeClass("blue-bg");
            $(this).find("td").addClass("blue-bg");
            $(".current-item-name").text($(this).children("td.product_name").text());
            _api.tra.Order.render.checkDayCover();
        });
        $("#tech_item_modal").delegate("option", "click", function () {
            var item = $(this).val();
        });
        $(".item-table").delegate("td.product_name", "click", function () {
            var item = $(this).parent().attr("class").split("-");
            if (item.length == 2) {
                if (_api.tra.Custom.WebContent.get() == "A") {
                    $('.item-table tr').addClass("com-hide");
                    $('.item-' + _api.tra.current_item).removeClass("com-hide");
                    if (!_api.tra.Chart.stateShow) {
                        _api.tra.Processing.show();
                        //初始化
                        _api.tra.Chart.Control.switchChart(item[1]);
                    }

                    if (_api.tra.kChart.stateShow) {
                        //若已在數窗外會同步變化
                        _api.tra.kChart.queryChart(item[1]);
                    }
                } else if (_api.tra.Custom.WebContent.get() == "B") {
                    _api.tra.Processing.hide();
                    $("#chnew_modal").modal('show');
                }
            }
        });
        $(".close-chart-panel").click(function () {

            $(".chart-panel").hide();
            $(".item-table").find("tr").removeClass("com-hide");

            //版面A
            if (_api.tra.Custom.WebContent.get() == "A") {
                // 先kchart 刪除，新增新的
                if (_api.tra.APIConfigSet.now_inline_or_outline == 0) {
                    //視窗內
                    if (_api.tra.kChart.stateShow) {
                        //若已在數窗外會同步變化
                        _api.tra.kChart.clearChart();
                    }
                }

                if (_api.tra.Chart.stateShow) {
                    //若已在數窗外會同步變化
                    _api.tra.Chart.clearChart();
                }
            } else if (_api.tra.Custom.WebContent.get() == "B") {
                // 先kchart 刪除，新增新的
                if (_api.tra.APIConfigSet.now_inline_or_outline == 0) {
                    //視窗內
                    if (_api.tra.kChart.stateShow) {
                        //若已在數窗外會同步變化
                        _api.tra.kChart.clearChart();
                    }
                }
            }
        });
    }
};

_api.tra.Five = {
    update: function update(data, buy, sell, buy_count, sell_count) {
        var tr = [];
        var color = "";
        var buy_bar = 0;
        var sell_bar = 0;
        var tcount_buy = 0;
        var tcount_sell = 0;
        for (var i in data) {
            if (i < parseInt(sell_count)) {
                color = "green";
            } else if (i >= parseInt(sell_count)) {
                color = "red";
            } else {
                color = "white";
            }
            buy_bar = parseInt(data[i][0]) / parseInt(buy) * 100;
            sell_bar = parseInt(data[i][2]) / parseInt(sell) * 100;

            tr.push('<tr class="five-data">', '    <td style="text-align: left; color: #eee">', '        <div class="float-right red-bg" style="height: 20px; width: ' + buy_bar + '%;"></div>', '        <div style="position: absolute; left:10px; z-index:100">' + data[i][0] + '</div>', '    </td>', '    <td class="' + color + '">' + data[i][1] + '</td>', '    <td style="text-align: right; color: #eee">', '        <div class="float-left green-bg" style="height: 20px; width: ' + sell_bar + '%;"></div>', '        <div style="position: absolute; right:10px; z-index:100">' + data[i][2] + '</div>', '    </td>', '</tr>');
        }

        $(".main-five-flow").show();
        $(".main-five-red").css("width", parseInt(buy / (buy + sell) * 100) + "%");
        $(".main-five-green").css("width", 100 - parseInt(buy / (buy + sell) * 100) + "%");

        $(".five-step-table tr.five-data").remove();
        $(".five-step-table").append(tr.join("\n"));

        //tra.Processing.hide();
    }
};

_api.tra.Login = {
    init: function init() {
        if (localStorage.getItem("account") !== null) {
            $("input[name=account]").val(localStorage.getItem("account"));
            $("#save_account").prop("checked", true);
        }
        $.ajax({
            url: "/api/loginout.php",
            type: "GET"
        });
        $(".login-submit").click(function () {
            if ($("#save_account").prop("checked")) {
                localStorage.setItem("account", $("input[name=account]").val());
            } else {
                localStorage.removeItem("account");
            }
            _api.tra.API.Login($("input[name=account]").val(), $("input[name=password]").val());
            return false;
        });
    }
};

_api.tra.Order.render = {
    init: function init() {
        $("input[name=order_type]").click(function () {
            $(".my-trade-table-block").hide();
            $(".my-trade-function").hide();
            $(".my-trade-" + $(this).val() + "-block").show();
            $(".my-trade-function-" + $(this).val()).show();
        });
        $("input[name=order_filter]").click(function () {
            var order_filter = $(this).val();
            switch (order_filter) {
                case "all":
                    $(".my-trade-table tbody tr").show();
                    break;
                case "covered":
                    $(".my-trade-table-order tbody tr, .my-trade-table-covered tbody tr, .my-trade-table-uncovered tbody tr").hide();
                    $(".my-trade-table tbody tr").each(function () {
                        if ($(this).find(".order-state").text() == "已成交") {
                            $(this).show();
                        }
                    });
                    break;
                case "uncovered":
                    $(".my-trade-table-order tbody tr, .my-trade-table-covered tbody tr, .my-trade-table-uncovered tbody tr").hide();
                    $(".my-trade-table tbody tr").each(function () {
                        if ($(this).find(".order-state").text().indexOf("未成交") != -1) {
                            $(this).show();
                        }
                    });
                    break;
            }
        });
        $(".my-trade-table").delegate("tr", "click", function () {
            if ($(this).parent().prop("tagName") != "THEAD") {
                $(this).siblings().css("border", "none");
                $(this).css("border", "2px solid red");
            }
        });
        $("input[name=order_without_comfirm]").click(function () {
            var cover_all_on_close = $("input[name=cover_all_on_close]").prop("checked") ? "1" : "0";
            if ($(this).prop("checked")) {
                _api.tra.Alert("選擇下單不確認時，下單不會跳出確認視窗!");
                _api.tra.OrderAPI.setCloseCoverAll($(".order-block select[name=order_item_list]").val(), cover_all_on_close, "1");
            } else {
                _api.tra.OrderAPI.setCloseCoverAll($(".order-block select[name=order_item_list]").val(), cover_all_on_close, "0");
            }
        });
        $("input[name=cover_all_on_close]").click(function () {
            _api.tra.OrderAPI.getAll();
            var order_without_comfirm = $("input[name=order_without_comfirm]").prop("checked") ? "1" : "0";
            if ($(this).prop("checked")) {
                _api.tra.Alert("您已選擇【" + $(".order-block select[name=order_item_list] option:selected").text() + "】收盤全平，並記錄在使用者紀錄");
                _api.tra.OrderAPI.setCloseCoverAll($(".order-block select[name=order_item_list]").val(), "1", order_without_comfirm);
            } else {
                _api.tra.Alert("您已取消【" + $(".order-block select[name=order_item_list] option:selected").text() + "】收盤全平，並記錄在使用者紀錄");
                _api.tra.OrderAPI.setCloseCoverAll($(".order-block select[name=order_item_list]").val(), "0", order_without_comfirm);
            }
        });
        $(".submit-order-buy").click(function () {
            _api.tra.API.User.getInfo();
            _api.tra.Order.render.checkDayCover();
            var order_without_comfirm = $("input[name=order_without_comfirm]").prop("checked");
            var use_close_price = $("input[name=use_close_price]").prop("checked");
            var use_stock_price = $("input[name=use_stock_price]").prop("checked");
            if (!order_without_comfirm) {
                var current_item = $("select[name=order_item_list]").val();
                var current_price = parseInt($(".item-" + current_item + " .newest_price").text());
                $(".confirm-order-table .confirm-name").text($(".order-block select[name=order_item_list] option:selected").text());
                $(".confirm-order-table .confirm-user-name").text(_api.tra.User.user_name);
                if (current_price < parseInt($(".order-block input[name=use_price]").val()) && !use_close_price && !use_stock_price) {
                    $(".confirm-order-table .confirm-inverted").text("倒");
                } else {
                    $(".confirm-order-table .confirm-inverted").text("");
                }
                $(".confirm-order-table .confirm-buy-or-sell").text("多");
                if ($("input[name=use_stock_price]").prop("checked")) {
                    $(".confirm-order-table .confirm-price").text("市價");
                } else if (use_close_price) {
                    $(".confirm-order-table .confirm-price").text("收盤價");
                } else {
                    $(".confirm-order-table .confirm-price").text($(".order-block input[name=use_price]").val());
                }
                $(".confirm-order-table .confirm-quantity").text($(".order-block input[name=use_quantity]").val());
                $(".confirm-submit-order").attr("onclick", "tra.OrderAPI.submit('0');");
                $("#confirm_order_modal").modal();
            } else {
                _api.tra.OrderAPI.submit("0");
            }
        });
        $(".submit-order-cover").click(function () {
            _api.tra.API.User.getInfo();
            _api.tra.Order.render.checkDayCover();
            $(".order-cover-button").hide();
            _api.tra.OrderAPI.cover("0", $(".order-block select[name=order_item_list]").val());
        });
        $(".submit-order-sell").click(function () {
            _api.tra.API.User.getInfo();
            _api.tra.Order.render.checkDayCover();
            var order_without_comfirm = $("input[name=order_without_comfirm]").prop("checked");
            var use_close_price = $("input[name=use_close_price]").prop("checked");
            var use_stock_price = $("input[name=use_stock_price]").prop("checked");
            if (!order_without_comfirm) {
                var current_item = $("select[name=order_item_list]").val();
                var current_price = parseInt($(".item-" + current_item + " .newest_price").text());
                $(".confirm-order-table .confirm-name").text($(".order-block select[name=order_item_list] option:selected").text());
                $(".confirm-order-table .confirm-user-name").text(_api.tra.User.user_name);
                if (current_price > parseInt($(".order-block input[name=use_price]").val()) && !use_close_price && !use_stock_price) {
                    $(".confirm-order-table .confirm-inverted").text("倒");
                } else {
                    $(".confirm-order-table .confirm-inverted").text("");
                }
                $(".confirm-order-table .confirm-buy-or-sell").text("空");
                if ($("input[name=use_stock_price]").prop("checked")) {
                    $(".confirm-order-table .confirm-price").text("市價");
                } else if (use_close_price) {
                    $(".confirm-order-table .confirm-price").text("收盤價");
                } else {
                    $(".confirm-order-table .confirm-price").text($(".order-block input[name=use_price]").val());
                }
                $(".confirm-order-table .confirm-quantity").text($(".order-block input[name=use_quantity]").val());
                $(".confirm-submit-order").attr("onclick", "tra.OrderAPI.submit('1');");
                $("#confirm_order_modal").modal();
            } else {
                _api.tra.OrderAPI.submit("1");
            }
        });
        $(".order-block select[name=order_item_list]").change(function () {
            _api.tra.Order.render.checkDayCover();
            $(".item-" + $(this).children("option:selected").attr("value")).click();

            if (_api.tra.Chart.stateShow) {
                _api.tra.Processing.show();
                _api.tra.Chart.queryChart($(this).children("option:selected").attr("value"));
            }

            if (_api.tra.kChart.stateShow) {
                _api.tra.Processing.show();
                _api.tra.kChart.queryChart($(this).children("option:selected").attr("value"));
            }
        });
        $(".cover-selected-item").click(function () {
            var id_list = [];
            var serial_list = [];
            $(".my-trade-table-uncovered tbody tr").each(function () {
                if ($(this).find("input[name=uncovered_checkbox]").prop("checked")) {
                    id_list.push($(this).attr("item_id"));
                    serial_list.push($(this).find(".uncovered-serial").text());
                }
            });
            _api.tra.OrderAPI.cover(serial_list.join(";"), id_list.join(";"));
            return false;
        });
        $(".use-stock-price").click(function () {
            if ($(this).prop("checked") === true) {
                //$(".use-close-price").prop("checked", false);
                //$(".use-price").prop("disabled", true);
                $(".use-limit-price").prop("checked", false);
                $(".use-close-price").prop("checked", false);
                $(".use-price-div").hide();
            } else {
                //$(".use-price").prop("disabled", false);
                $(".use-stock-price").prop("checked", true);
            }
        });
        $(".use-close-price").click(function () {
            if ($(this).prop("checked") === true) {
                //$(".use-stock-price").prop("checked", false);
                //$(".use-price").prop("disabled", true);
                $(".use-limit-price").prop("checked", false);
                $(".use-stock-price").prop("checked", false);
                $(".use-price-div").hide();
            } else {
                $(".use-close-price").prop("checked", true);
            }
        });
        $(".use-limit-price").click(function () {
            if ($(this).prop("checked") === true) {
                $(".use-close-price").prop("checked", false);
                $(".use-stock-price").prop("checked", false);
                //$(".use-price").prop("disabled", true);
                $(".use-price-div").show();
                $(".order-block input[name=use_price]").val(_api.tra.APIConfigSet.now_data[$(".order-block select[name=order_item_list]").val()][4]);
            } else {
                $(".use-limit-price").prop("checked", true);
            }
        });
        /*$(".use-price-div").click(function() {
            if($("input[name=use_price]").prop("disabled")) {
                $("input[name=use_stock_price]").click();
            }
        });*/
    },
    checkDayCover: function checkDayCover() {
        var is_daycover = $(".userinfo-item-" + $(".order-block select[name=order_item_list]").val() + " .userinfo-item-daycover").text();
        var is_lighting = $(".userinfo-item-" + $(".order-block select[name=order_item_list]").val()).attr("lighting");
        var is_limiting = $(".userinfo-item-" + $(".order-block select[name=order_item_list]").val()).attr("limiting");
        var is_submiting = $(".userinfo-item-" + $(".order-block select[name=order_item_list]").val()).attr("submiting");
        var is_closing = $(".userinfo-item-" + $(".order-block select[name=order_item_list]").val()).attr("closing");

        if (is_daycover == "是") {
            $("input[name=cover_all_on_close]").prop("checked", true);
        } else {
            $("input[name=cover_all_on_close]").prop("checked", false);
        }

        if (is_lighting == "1") {
            $(".use-lighting-label").text("閃電");
            $(".use-stock-price").attr("disabled", false);
        } else {
            if (is_submiting == "0") {
                $(".use-stock-price").attr("disabled", true);

                if ($(".use-stock-price").prop("checked")) {
                    $(".use-stock-price").prop("checked", false);

                    if (is_limiting == "1") {
                        $(".use-limit-price").prop("checked", true);
                    } else if (is_closing == "1") {
                        $(".use-close-price").prop("checked", true);
                    }
                }
            } else {
                $(".use-stock-price").attr("disabled", false);
            }

            $(".use-lighting-label").text("市價");
        }

        if (is_limiting == "0") {
            $(".use-limit-price").attr("disabled", true);

            if ($(".use-limit-price").prop("checked")) {
                $(".use-limit-price").prop("checked", false);

                if (is_submiting == "1" || is_lighting == "1") {
                    $(".use-stock-price").prop("checked", true);
                } else if (is_closing == "1") {
                    $(".use-close-price").prop("checked", true);
                }
            }
        } else {
            $(".use-limit-price").attr("disabled", false);
        }

        if (is_closing == "0") {
            $(".use-close-price").attr("disabled", true);

            if ($(".use-close-price").prop("checked")) {
                $(".use-close-price").prop("checked", false);

                if (is_submiting == "1" || is_lighting == "1") {
                    $(".use-stock-price").prop("checked", true);
                } else if (is_limiting == "1") {
                    $(".use-limit-price").prop("checked", true);
                }
            }
        } else {
            $(".use-close-price").attr("disabled", false);
        }

        if ($(".use-limit-price").prop("checked")) {
            $(".use-price-div").show();
        } else {
            $(".use-price-div").hide();
        }

        if (is_submiting == "1" || is_lighting == "1" || is_limiting == "1" || is_closing == "1") {
            $(".submit-enable").show();

            if (!$(".use-stock-price").prop("checked") && !$(".use-limit-price").prop("checked") && !$(".use-close-price").prop("checked")) {
                if (is_submiting || is_lighting) {
                    $(".use-stock-price").prop("checked", true);
                } else if (is_limiting) {
                    $(".use-limit-price").prop("checked", true);
                } else if (is_closing) {
                    $(".use-close-price").prop("checked", true);
                }
            }
        } else {
            $(".submit-enable").hide();
        }
    },
    StockNumber: function StockNumber() {
        $(".item-table tbody .stock").text("").removeClass("reg-bg").removeClass("green-bg");
        $(".my-trade-table-uncovered tbody tr").each(function () {
            var current_id = $(this).attr("item_id");
            var current_stock = isNaN(parseInt($(".item-" + current_id + " .stock").text())) ? 0 : parseInt($(".item-" + current_id + " .stock").text());
            var total_stock = isNaN(parseInt($(this).children(".uncovered-quantity").text())) ? 0 : parseInt($(this).children(".uncovered-quantity").text());
            if ($(this).children(".uncovered-buy-or-sell").text() == "多") {
                current_stock += total_stock;
            } else {
                current_stock -= total_stock;
            }
            $(".item-" + current_id + " .stock").text(current_stock);
        });
        $(".item-table tbody tr").each(function () {
            var current_stock = parseInt($(this).children(".stock").text());
            if (current_stock > 0) {
                $(this).children(".stock").addClass("red-bg");
            } else if (current_stock < 0) {
                $(this).children(".stock").text(Math.abs(current_stock));
                $(this).children(".stock").addClass("green-bg");
            } else {
                $(this).children(".stock").removeClass("red-bg");
                $(this).children(".stock").removeClass("green-bg");
            }
        });
    },
    Order: function Order(orders) {
        var tr = [];
        var buy_or_sell;
        var state;
        var inverted;
        var color;
        var button_html;
        var loss_point, win_point;
        var point_button_bg, stop_loss_button_action, take_profit_button_action;
        clearInterval(_api.tra.ConfigSet.ORDER_WAITING_INT);
        for (var i in orders) {
            button_html = [];
            buy_or_sell = orders[i]["BuyOrSell"] == "0" ? "多" : "空";
            inverted = orders[i]["Inverted"] == "0" ? "" : "倒";
            color = orders[i]["BuyOrSell"] == "0" ? "red" : "green";
            loss_point = orders[i]["LossPoint"] == 0 ? "無" : orders[i]["LossPoint"];
            win_point = orders[i]["WinPoint"] == 0 ? "無" : orders[i]["WinPoint"];
            point_button_bg = orders[i]["Operation"][0] == 0 && orders[i]["Operation"][1] == 0 && orders[i]["Operation"][2] == 0 ? "black-bg" : "";
            if (orders[i]["State"] == "未成交") {
                if (typeof _api.tra.ConfigSet.ORDER_WAITING_INT == "undefined") {
                    _api.tra.ConfigSet.ORDER_WAITING_INT = setInterval(function () {
                        $(".order-waiting-text").toggle();
                    }, 1000);
                }
                state = '<span class="order-waiting-text" style="color: red; display: none; font-size: 16px;">未成交</span><span class="order-waiting-text" style="font-size: 16px;">未成交</span>';
            } else {
                state = orders[i]["State"];
            }
            if (point_button_bg == "black-bg") {
                stop_loss_button_action = "";
                take_profit_button_action = "";
            } else {
                stop_loss_button_action = 'tra.Order.render.StopLoss(\'' + orders[i]["Serial"] + '\', \'' + orders[i]["ID"] + '\', \'' + orders[i]["LossPoint"] + '\', \'' + orders[i]["FinalPrice"] + '\', \'' + orders[i]["BuyOrSell"] + '\')';
                take_profit_button_action = 'tra.Order.render.TakeProfit(\'' + orders[i]["Serial"] + '\', \'' + orders[i]["ID"] + '\', \'' + orders[i]["WinPoint"] + '\', \'' + orders[i]["FinalPrice"] + '\', \'' + orders[i]["BuyOrSell"] + '\')';
            }
            if (orders[i]["Operation"][0] == 1) {
                button_html.push('<button class="btn btn-primary btn-new-mini" onclick="tra.Order.render.UpdateOrder(\'' + orders[i]["Serial"] + '\', \'' + orders[i]["ID"] + '\', \'' + orders[i]["Name"] + '\', \'' + buy_or_sell + '\', \'' + orders[i]["Quantity"] + '\', \'' + orders[i]["Odtype"] + '\', \'' + orders[i]["OrderPrice"] + '\')">改</button>');
            }
            if (orders[i]["Operation"][1] == 1) {
                button_html.push('<button class="btn btn-primary btn-new-mini" onclick="tra.OrderAPI.edit_submit(\'0\', \'' + orders[i]["Serial"] + '\', \'' + orders[i]["ID"] + '\')">刪</button>');
            }
            if (orders[i]["Operation"][2] == 1) {
                button_html.push('<button class="btn btn-primary btn-new-mini order-cover-button" onclick="tra.OrderAPI.cover(\'' + orders[i]["Serial"] + '\', \'' + orders[i]["ID"] + '\')">平倉</button>');
            }
            tr.push('', '<tr>', '    <td align="center">', '        ' + button_html.join("&nbsp;&nbsp;"), '    </td>', '    <td>', '        ' + orders[i]["Serial"], '    </td>', '    <td>', '        <span class="' + color + '">' + orders[i]["Name"] + '</span>', '    </td>', '    <td class="' + color + '" style="min-width: 40px; width: 40px">' + inverted + '</td>', '    <td class="' + color + '" style="min-width: 40px; width: 40px; text-align: center;">' + buy_or_sell + '</td>', '    <td class="' + color + '">' + orders[i]["OrderPrice"] + '</td>', '    <td class="' + color + '" style="min-width: 40px; width: 40px">' + orders[i]["Quantity"] + '</td>', '    <td class="' + color + '">' + orders[i]["FinalPrice"] + '</td>', '    <td class="' + color + '"  style="min-width: 120px; width: 120px">' + orders[i]["Odtype"] + '</td>', '    <td align="center" style="min-width: 55px; width: 55px">', '        <button class="btn btn-primary btn-new-mini green-bg ' + point_button_bg + '" style="min-width: 30px;" onclick="' + stop_loss_button_action + '">' + loss_point + '</button>', '    </td>', '    <td align="center" style="min-width: 55px; width: 55px">', '        <button class="btn btn-primary btn-new-mini red-bg ' + point_button_bg + '" style="min-width: 30px;" onclick="' + take_profit_button_action + '">' + win_point + '</button>', '    </td>', '    <td class="order-state" style="color: #f4e842; min-width: 140px; width: 140px">' + state + '</td>', '    <td class="' + color + '" style="min-width: 150px; width: 150px">' + orders[i]["OrderTime"] + '</td>', '    <td class="' + color + '" style="min-width: 150px; width: 150px">' + orders[i]["FinalTime"] + '</td>', '</tr>');
        }
        $(".my-trade-table-order tbody").html(tr.join("\n"));
    },
    StopTakePoint: function StopTakePoint(id, price) {
        if (id != _api.tra.current_stop_take_id) {
            return;
        }
        var buy_or_sell = _api.tra.current_stop_take_buy_or_sell;
        var stop_loss_price = parseInt($("#stop_loss_block input[name=target_price]").val());

        var take_profit_price = parseInt($("#take_profit_block input[name=target_price]").val());
        var invert_profit_price = parseInt($("#invert_profit_block input[name=target_price]").val());

        var stop_loss_diff = parseInt(price) - stop_loss_price;
        var take_profit_diff = parseInt(price) - take_profit_price;
        var invert_profit_diff = parseInt(price) - invert_profit_price;
        if (buy_or_sell == "1") {
            invert_profit_diff = invert_profit_diff * -1;
        }

        var current_min_stop_loss = parseInt($("#stop_loss_block." + id + " input[name=org-min-stop-loss-point]").val());
        var current_min_take_profit = parseInt($("#take_profit_block." + id + " input[name=org-min-take-profit-point]").val());
        var current_min_invert_profit = parseInt($("#invert_profit_block." + id + " input[name=org-min-invert-profit-point]").val());

        if (current_min_stop_loss < Math.abs(stop_loss_diff)) {
            $("#stop_loss_block." + id + " .min-stop-loss-point").text(Math.abs(stop_loss_diff));
        }
        if (current_min_take_profit < Math.abs(take_profit_diff)) {
            $("#take_profit_block." + id + " .min-take-profit-point").text(Math.abs(take_profit_diff));
        }

        if (invert_profit_diff <= 0) {
            $("#invert_profit_block." + id + " .min-invert-profit-point").text("目前部位虧損 不能設定");
            invert_profit_diff = 0;
        } else if (current_min_invert_profit >= invert_profit_diff) {
            $("#invert_profit_block." + id + " .min-invert-profit-point").text("新獲利點須大於" + current_min_invert_profit + "點");
        } else if (current_min_invert_profit < invert_profit_diff) {
            if (current_min_invert_profit != 0) {
                $("#invert_profit_block." + id + " .min-invert-profit-point").text("新獲利點須大於" + current_min_invert_profit + "點 小於" + invert_profit_diff.toString() + "點");
            } else {
                $("#invert_profit_block." + id + " .min-invert-profit-point").text("新獲利點須小於" + invert_profit_diff.toString() + "點");
            }
        }

        if (buy_or_sell == "0" && take_profit_diff < 0 || buy_or_sell == "1" && take_profit_diff > 0) {
            $("#take_profit_block." + id + " .min-take-profit-point").text(current_min_take_profit);
        }
        if (buy_or_sell == "0" && stop_loss_diff > 0 || buy_or_sell == "1" && stop_loss_diff < 0) {
            $("#stop_loss_block." + id + " .min-stop-loss-point").text(current_min_stop_loss);
        }
    },
    Uncovered: function Uncovered(orders) {
        var tr = [];
        var buy_or_sell;
        var color;
        var loss_point, win_point;
        var button_html;
        var checkbox_html;
        var point_button_bg;
        var invert_point_button_bg;
        var invert_profit_button_action;
        for (var i in orders) {
            button_html = [];
            checkbox_html = "";
            buy_or_sell = orders[i]["BuyOrSell"] == "0" ? "多" : "空";
            loss_point = orders[i]["LossPoint"] == 0 ? "無" : orders[i]["LossPoint"];
            win_point = orders[i]["WinPoint"] == 0 ? "無" : orders[i]["WinPoint"];
            color = orders[i]["BuyOrSell"] == "0" ? "red" : "green";
            if (orders[i]["Operation"][2] == 1) {
                button_html.push('<button class="btn btn-primary btn-new-mini order-cover-button" onclick="tra.OrderAPI.cover(\'' + orders[i]["Serial"] + '\', \'' + orders[i]["ID"] + '\')">平倉</button>');
                checkbox_html = '<input type="checkbox" name="uncovered_checkbox" val="' + orders[i]["Serial"] + '"> ';
            }
            point_button_bg = orders[i]["Operation"][0] == 0 && orders[i]["Operation"][1] == 0 && orders[i]["Operation"][2] == 0 ? "black-bg" : "";
            if (orders[i]["Operation"][3] == 0) {
                invert_point_button_bg = "black-bg";
                invert_profit_button_action = "";
            } else {
                invert_point_button_bg = "red-bg";
                invert_profit_button_action = 'tra.Order.render.InvertProfit(\'' + orders[i]["Serial"] + '\', \'' + orders[i]["ID"] + '\', \'' + orders[i]["WinPoint"] + '\', \'' + orders[i]["FinalPrice"] + '\', \'' + orders[i]["BuyOrSell"] + '\')';
            }
            tr.push('', '<tr class="uncovered-item-' + orders[i]["ID"] + '" item_id="' + orders[i]["ID"] + '">', '    <td align="center">', '        ' + button_html.join("&nbsp;&nbsp;"), '    </td>', '    <td>', '        ' + checkbox_html + '<span class="uncovered-serial">' + orders[i]["Serial"] + "</span>", '    </td>', '    <td>', '        <span class="' + color + '">' + orders[i]["Name"] + '</span>', '    </td>', '    <td class="' + color + ' uncovered-buy-or-sell" style="min-width: 40px; width: 40px; text-align: center;">' + buy_or_sell + '</td>', '    <td class="' + color + '">' + orders[i]["Odtype"] + '</td>', '    <td class="' + color + ' uncovered-price">' + orders[i]["FinalPrice"] + '</td>', '    <td class="' + color + ' uncovered-quantity" style="min-width: 40px; width: 40px">' + orders[i]["Quantity"] + '</td>', '    <td style="min-width: 40px; width: 40px">' + orders[i]["Fee"] + '</td>', '    <td style="min-width: 60px; width: 60px">' + orders[i]["TotalFee"] + '</td>', '    <td align="center" style="min-width: 55px; width: 55px">', '        <button class="btn btn-primary btn-new-mini green-bg ' + point_button_bg + '" style="min-width: 30px;" onclick="tra.Order.render.StopLoss(\'' + orders[i]["Serial"] + '\', \'' + orders[i]["ID"] + '\', \'' + orders[i]["LossPoint"] + '\', \'' + orders[i]["FinalPrice"] + '\', \'' + orders[i]["BuyOrSell"] + '\')">' + loss_point + '</button>', '    </td>', '    <td align="center" style="min-width: 55px; width: 55px">', '        <button class="btn btn-primary btn-new-mini red-bg ' + point_button_bg + '" style="min-width: 30px;" onclick="tra.Order.render.TakeProfit(\'' + orders[i]["Serial"] + '\', \'' + orders[i]["ID"] + '\', \'' + orders[i]["WinPoint"] + '\', \'' + orders[i]["FinalPrice"] + '\', \'' + orders[i]["BuyOrSell"] + '\')">' + win_point + '</button>', '    </td>', '    <td align="center" style="min-width: 60px; width: 60px">', '        <button class="btn btn-primary btn-new-mini ' + invert_point_button_bg + '" style="min-width: 30px;" onclick="' + invert_profit_button_action + '">' + orders[i]["InvertedPoint"] + '</button>', '    </td>', '    <td class="uncovered-point" style="min-width: 60px; width: 60px"></td>', '    <td class="uncovered-pointmoney" style="min-width: 40px; width: 40px">' + orders[i]["PointMoney"] + '</td>', '    <td class="uncovered-totalmoney"></td>', '    <td style="min-width: 40px; width: 40px">' + orders[i]["Day"] + '</td>', '    <td class="order-state" style="color: #f4e842; min-width: 140px; width: 140px">' + orders[i]["State"] + '</td>', '</tr>');
        }
        $(".my-trade-table-uncovered tbody").html(tr.join("\n"));
        $("input[name=select_all_uncovered]").prop("checked", false);
        _api.tra.Order.render.StockNumber();
    },
    Covered: function Covered(orders) {
        var tr = [];
        var buy_or_sell;
        var covered_point, totalmoney;
        var color;
        for (var i in orders) {
            buy_or_sell = orders[i]["BuyOrSell"] == "0" ? "多" : "空";
            color = orders[i]["BuyOrSell"] == "0" ? "red" : "green";
            covered_point = orders[i]["Point"] > 0 ? '<span class="red">&#9650;' + orders[i]["Point"] + '</span>' : '<span class="green">&#9660;' + Math.abs(orders[i]["Point"]) + '</span>';
            totalmoney = orders[i]["Money"] > 0 ? '<span class="red">' + orders[i]["Money"] + '</span>' : '<span class="green">' + orders[i]["Money"] + '</span>';
            tr.push('', '<tr>', '    <td>' + orders[i]["Name"] + '</td>', '    <td>', '        ' + orders[i]["NewSerial"], '    </td>', '    <td>', '        ' + orders[i]["CoverSerial"], '    </td>', '    <td>' + orders[i]["NewType"] + '</td>', '    <td style="min-width: 120px; width: 120px">' + orders[i]["CoverType"] + '</td>', '    <td style="min-width: 40px; width: 40px">' + orders[i]["SerialCoveredNum"] + '</td>', '    <td class="' + color + '" style="min-width: 40px; width: 40px; text-align: center;">' + buy_or_sell + '</td>', '    <td>' + orders[i]["NewPrice"] + '</td>', '    <td>' + orders[i]["CoverPrice"] + '</td>', '    <td style="min-width: 40px; width: 40px">' + orders[i]["Fee"] + '</td>', '    <td style="min-width: 60px; width: 60px">' + orders[i]["TotalFee"] + '</td>', '    <td style="min-width: 60px; width: 60px">' + covered_point + '</td>', '    <td style="min-width: 40px; width: 40px">' + orders[i]["PointMoney"] + '</td>', '    <td>' + totalmoney + '</td>', '    <td style="min-width: 150px; width: 150px">' + orders[i]["NewDate"] + '</td>', '    <td style="min-width: 150px; width: 150px">' + orders[i]["CoverDate"] + '</td>', '</tr>');
        }
        $(".my-trade-table-covered tbody").html(tr.join("\n"));
    },
    Commodity: function Commodity(orders) {
        var tr = [];
        var colored_point, colored_totalmoney;
        var total_holding = 0;
        var total_stock;
        for (var i in orders) {
            total_stock = orders[i]["RemainingBuyStock"] - orders[i]["RemainingSellStock"];
            colored_point = orders[i]["TotalPoint"] > 0 ? '<span class="red">&#9650;' + orders[i]["TotalPoint"] + '</span>' : '<span class="green">&#9660;' + Math.abs(orders[i]["TotalPoint"]) + '</span>';
            colored_totalmoney = orders[i]["TodayMoney"] > 0 ? '<span class="red">' + orders[i]["TodayMoney"] + '</span>' : '<span class="green">' + orders[i]["TodayMoney"] + '</span>';
            var colored_stock = total_stock > 0 ? "red-bg" : total_stock < 0 ? "green-bg" : "";
            tr.push('', '<tr>', '    <td>' + orders[i]["Name"] + '</td>', '    <td class="red" style="min-width: 40px; width: 40px">' + orders[i]["TotalBuySubmit"] + '</td>', '    <td class="green" style="min-width: 40px; width: 40px">' + orders[i]["TotalSellSubmit"] + '</td>', '    <td class="' + colored_stock + '" style="text-align: center; min-width: 60px; width: 60px">' + Math.abs(total_stock) + '</td>', '    <td style="min-width: 60px; width: 60px">' + orders[i]["TotalSubmit"] + '</td>', '    <td style="min-width: 40px; width: 40px">' + orders[i]["Fee"] + '</td>', '    <td>' + orders[i]["TotalFee"] + '</td>', '    <td>' + colored_point + '</td>', '    <td style="min-width: 40px; width: 40px">' + orders[i]["OnePoint"] + '</td>', '    <td>' + colored_totalmoney + '</td>', '    <td>' + orders[i]["RemainingWithholding"] + '</td>', '</tr>');
            total_holding += parseInt(orders[i]["RemainingWithholding"]);
        }
        $(".total-commodity-holding").text(total_holding);
        $(".my-trade-table-commodity tbody").html(tr.join("\n"));
    },
    Money: function Money(orders) {
        var tr = [];
        var colored_point, colored_totalmoney;
        for (var i in orders) {
            var colored_todaymoney = orders[i]["TodayMoney"] > 0 ? '<span class="red">' + orders[i]["TodayMoney"] + '</span>' : '<span class="green">' + orders[i]["TodayMoney"] + '</span>';
            var colored_uppay = orders[i]["Uppay"] > 0 ? '<span class="red">' + orders[i]["Uppay"] + '</span>' : '<span class="green">' + orders[i]["Uppay"] + '</span>';
            tr.push('', '<tr>', '    <td style="min-width: 100px; width: 100px">' + orders[i]["Date"] + '</td>', '    <td style="min-width: 100px; width: 100px">' + orders[i]["TouchPoint"] + '</td>', '    <td style="min-width: 100px; width: 100px">' + orders[i]["RemainingMoney"] + '</td>', '    <td>' + colored_todaymoney + '</td>', '    <td style="min-width: 40px; width: 40px">' + orders[i]["TotalSubmit"] + '</td>', '    <td>' + orders[i]["Withholding"] + '</td>', '    <td>' + orders[i]["Limitpoint"] + '</td>', '    <td>' + colored_uppay + '</td>', '</tr>');
        }
        $(".my-trade-table-money tbody").html(tr.join("\n"));
    },
    StopLoss: function StopLoss(serial, id, point, price, buy_or_sell) {
        _api.tra.current_stop_take_id = id;
        _api.tra.current_stop_take_buy_or_sell = buy_or_sell;
        $("input[name=stop_loss_point]").val(point);
        var item_stop_point = $(".userinfo-item-table tr.userinfo-item-" + id + " td.userinfo-stop-point").text();
        $(".min-stop-loss-point").text(item_stop_point);
        $("input[name=org-min-stop-loss-point]").val(item_stop_point);
        $("#stop_loss_modal .update-stop-loss-button").attr("onclick", 'tra.Order.render.StopLossAction(\'' + serial + '\', \'' + id + '\'); return false;');
        $("#stop_loss_modal .reset-stop-loss-button").attr("onclick", '$("input[name=stop_loss_point]").val("0"); $(".update-stop-loss-button").click(); return false;');
        $("#stop_loss_block").attr("class", id);
        $("#stop_loss_modal input[name=target_price]").val(price);
        $("#stop_loss_modal input[name=target_id]").val(id);
        $("#stop_loss_modal input[name=buy_or_sell]").val(buy_or_sell);
        _api.tra.Order.render.StopTakePoint(id, $(".item-" + id + " .newest_price").text());
        $("#stop_loss_modal").modal();
    },
    StopLossAction: function StopLossAction(serial, id) {
        var org_min = parseInt($("input[name=org-min-stop-loss-point]").val());
        var new_min = parseInt($(".min-stop-loss-point").text());
        var min_stop_loss_point = org_min > new_min ? org_min : new_min;
        var current_point = parseInt($("input[name=stop_loss_point]").val());
        if (min_stop_loss_point > current_point && current_point != 0) {
            alert("必須大於" + min_stop_loss_point.toString() + "點");
        } else {
            _api.tra.OrderAPI.edit_submit('3', serial, id);
            $("#stop_loss_modal").modal("hide");
        }
        return false;
    },
    TakeProfit: function TakeProfit(serial, id, point, price, buy_or_sell) {
        _api.tra.current_stop_take_id = id;
        _api.tra.current_stop_take_buy_or_sell = buy_or_sell;
        $("input[name=take_profit_point]").val(point);
        var item_stop_point = $(".userinfo-item-table tr.userinfo-item-" + id + " td.userinfo-stop-point").text();
        $(".min-take-profit-point").text(item_stop_point);
        $("input[name=org-min-take-profit-point]").val(item_stop_point);
        $("#take_profit_modal .update-take-profit-button").attr("onclick", 'tra.Order.render.TakeProfitAction(\'' + serial + '\', \'' + id + '\'); return false;');
        $("#take_profit_modal .reset-take-profit-button").attr("onclick", '$("input[name=take_profit_point]").val("0"); $(".update-take-profit-button").click(); return false;');
        $("#take_profit_block").attr("class", id);
        $("#take_profit_modal input[name=target_price]").val(price);
        $("#take_profit_modal input[name=target_id]").val(id);
        $("#stop_loss_modal input[name=buy_or_sell]").val(buy_or_sell);
        _api.tra.Order.render.StopTakePoint(id, $(".item-" + id + " .newest_price").text());
        $("#take_profit_modal").modal();
    },
    TakeProfitAction: function TakeProfitAction(serial, id) {
        var org_min = parseInt($("input[name=org-min-take-profit-point]").val());
        var new_min = parseInt($(".min-take-profit-point").text());
        var min_take_profit_point = org_min > new_min ? org_min : new_min;
        var current_point = parseInt($("input[name=take_profit_point]").val());
        if (min_take_profit_point > current_point && current_point != 0) {
            alert("必須大於" + min_take_profit_point.toString() + "點");
        } else {
            _api.tra.OrderAPI.edit_submit('1', serial, id);
            $("#take_profit_modal").modal("hide");
        }
        return false;
    },
    InvertProfit: function InvertProfit(serial, id, point, price, buy_or_sell) {
        _api.tra.current_stop_take_id = id;
        _api.tra.current_stop_take_buy_or_sell = buy_or_sell;
        $("input[name=invert_profit_point]").val(point);
        var item_stop_point = $(".userinfo-item-table tr.userinfo-item-" + id + " td.userinfo-stop-point").text();
        $(".min-invert-profit-point").text($(".userinfo-item-" + id + " .userinfo-stop-point").text());
        $("input[name=org-min-invert-profit-point]").val($(".userinfo-item-" + id + " .userinfo-stop-point").text());
        $("#invert_profit_modal .update-invert-profit-button").attr("onclick", 'tra.Order.render.InvertProfitAction(\'' + serial + '\', \'' + id + '\'); return false;');
        $("#invert_profit_modal .reset-invert-profit-button").attr("onclick", '$("input[name=invert_profit_point]").val("0"); $(".update-invert-profit-button").click(); return false;');
        $("#invert_profit_block").attr("class", id);
        $("#invert_profit_modal input[name=target_price]").val(price);
        $("#invert_profit_modal input[name=target_id]").val(id);
        $("#invert_profit_modal input[name=buy_or_sell]").val(buy_or_sell);
        _api.tra.Order.render.StopTakePoint(id, $(".item-" + id + " .newest_price").text());
        $("#invert_profit_modal").modal();
    },
    InvertProfitAction: function InvertProfitAction(serial, id) {
        var org_max = parseInt($("input[name=org-min-invert-profit-point]").val());
        var new_max = parseInt($(".min-invert-profit-point").text());
        var max_invert_profit_point = org_max > new_max ? org_max : new_max;
        var current_point = parseInt($("input[name=invert_profit_point]").val());
        if (max_invert_profit_point < current_point && current_point != 0) {
            alert("必須小於" + max_invert_profit_point.toString() + "點");
        } else {
            _api.tra.OrderAPI.edit_submit('5', serial, id);
            $("#invert_profit_modal").modal("hide");
        }
        return false;
    },
    UpdateOrder: function UpdateOrder(serial, id, name, buy_or_sell, quantity, odtype, orderprice) {
        $("input[name=update_order_serial]").val(serial);
        $("input[name=update_order_name]").val(name);
        $("input[name=update_order_user_name]").val(_api.tra.User.user_name);
        $("input[name=update_order_buy_or_sell]").val(buy_or_sell);
        $("input[name=update_order_quantity]").val(quantity);
        $("input[name=update_order_orderprice]").val(orderprice);
        $("#to_submit").attr("onclick", "tra.sertype='6';");
        $("#edit_limit").attr("onclick", "tra.sertype='2';");

        $(".update-order-button").attr("onclick", "tra.OrderAPI.edit_submit(tra.sertype, '" + serial + "', '" + id + "'); $('.modal').modal('hide'); return false;");
        $("#update_order_modal").modal();
    }
};

_api.tra.sertype = '2';

_api.tra.Price = {
    update: function update(item, price) {
        var tr = [];
        var standard = parseInt($(".item-" + _api.tra.current_item).children("td.yesterday_close_price").text());
        var color = "";
        if ($("#price-detail-block").css("display") == "block") {
            if ($(".price-detail-table tbody tr").length == 0) {
                for (var i in _api.tra.available.product_price[_api.tra.current_item]) {
                    if (standard > _api.tra.available.product_price[_api.tra.current_item][i][2]) {
                        color = "green";
                    } else if (standard < _api.tra.available.product_price[_api.tra.current_item][i][2]) {
                        color = "red";
                    } else {
                        color = "";
                    }
                    tr.push('<tr style="border-bottom: 1px solid black;">', '    <td>' + _api.tra.available.product_price[_api.tra.current_item][i][0] + '</td>', '    <td class="' + color + '">' + _api.tra.available.product_price[_api.tra.current_item][i][1] + '</td>', '    <td class="' + color + '">' + _api.tra.available.product_price[_api.tra.current_item][i][2] + '</td>', '</tr>');
                }
                $(".price-detail-table tbody").html(tr.join("\n"));
            } else {
                if (_api.tra.current_item == item) {
                    if (standard > price[2]) {
                        color = "green";
                    } else if (standard < price[2]) {
                        color = "red";
                    } else {
                        color = "";
                    }
                    tr = ['<tr style="border-bottom: 1px solid black;">', '    <td>' + price[0] + '</td>', '    <td class="' + color + '">' + price[1] + '</td>', '    <td class="' + color + '">' + price[2] + '</td>', '</tr>'];
                    $(".price-detail-table tbody").prepend(tr.join("\n"));
                    if ($("input[name=auto_scroll_price]").prop("checked")) {
                        $("#price-detail-block").scrollTop($("#price-detail-block")[0].scrollHeight);
                    }
                }
            }
        }
    }
};

_api.tra.Alarm = {
    init: function init() {
        $(".alarm-icon").click(function () {
            if ($(".alarm-menu").css("display") != "none") {
                _api.tra.API.Alarm.readAll();
                _api.tra.API.Alarm.get();
            }
        });
    },
    render: function render(res) {
        var alarm_list = [
            //'<li class="dropdown-header">提醒通知(' + res["AlarmCount"] + ')</li>'
        ];
        for (var i in res["AlarmArray"]) {
            alarm_list.push('<li class="alarm-item"><a href="#">' + res["AlarmArray"][i]["AlarmMessage"] + '</a></li>');
        }
        if (res["AlarmCount"] <= 0) {
            if (typeof _api.tra.ConfigSet.ALARM_INT != "undefined") {
                clearInterval(_api.tra.ConfigSet.ALARM_INT);
                $(".alarm-icon img:eq(0)").show();
                $(".alarm-icon img:eq(1)").hide();
            }
        } else {
            _api.tra.playSound("alarm.wav");
            if (typeof _api.tra.ConfigSet.ALARM_INT == "undefined") {
                _api.tra.ConfigSet.ALARM_INT = setInterval(function () {
                    $(".alarm-icon img").toggle();
                }, 1000);
            }
        }
        $(".alarm-menu").children().remove();
        $(".alarm-menu").append(alarm_list.join("\n"));
    }
};

_api.tra.BSSignal = {
    init: function init() {
        $(".buysellsignal-icon").click(function () {
            if ($(".buysellsignal-menu").css("display") != "none") {
                _api.tra.API.BuySellSignal.get();
            }
        });
    },
    render: function render(res) {
        var buysellsignal_list = [];
        for (var i in res["BSArray"]) {
            buysellsignal_list.push('<div class="buysellsignal-item"><div class="ui-buysell" style="width:15%;">' + res["BSArray"][i]["bs_system_name"] + '</div><div class="ui-buysell" style="width:15%;">' + res["BSArray"][i]["bs_signal_value"] + '</div><div class="ui-buysell" style="width:25%;">' + res["BSArray"][i]["bs_buy_price"] + '</div><div class="ui-buysell" style="width:15%;">' + (res["BSArray"][i]["bs_buysell"] == 0 ? '買' : '賣') + '</div><div class="ui-buysell" style="width:30%;">' + res["BSArray"][i]["bs_time"].substring(11) + '</div></div>');
        }

        $(".buysellsignal-menu").children().remove();
        $(".buysellsignal-menu").append('<li class="alarm-item">' + buysellsignal_list.join("\n") + '</li>');
    }
};

_api.tra.Web = {
    initContentSel: function initContentSel() {
        if (_api.tra.Custom.WebContent.get() == "A") {
            $(".web-cotent-b").hide('');
        } else {
            $(".web-cotent-b").show('');
            //初始化Chart
            //tra.Chart.queryChart("");
        }

        $(".set-web-content-a").click(function () {
            _api.tra.Custom.WebContent.set("A");
            var percent_setting = {
                "percent": {
                    "dragger_percent": 0,
                    "item_percent": 60,
                    "price_percent": 60,
                    "vertical_percent": 5.4463
                }
            };
            _api.tra.Custom.Percent.set(percent_setting);

            location.reload();
        });

        $(".set-web-content-b").click(function () {
            _api.tra.Custom.WebContent.set("B");
            var percent_setting = {
                "percent": {
                    "dragger_percent": 20,
                    "item_percent": 60,
                    "price_percent": 40,
                    "vertical_percent": 5.4463
                }
            };
            _api.tra.Custom.Percent.set(percent_setting);

            location.reload();
        });
    },
    setContentSel: function setContentSel(sel) {
        _api.tra.Custom.WebContent.set(sel);
    }
};

_api.tra.User = {
    init: function init() {
        $(".user-history-table").delegate(".view-history-detail", "click", function () {
            var date = $(this).attr("date");
            _api.tra.API.User.getHistoryDetail(date, date, "-1");
            $(".user-history-detail-date").text(date);
            $(".user-history-detail-todaymoney").text((0, _api.formatNumber)($(this).attr("today_money")));
            $(".user-history-detail-remainingmoney").text((0, _api.formatNumber)($(this).attr("remaining_money")));
            $("#user_history_detail_modal").modal();
        });
    },
    render: {
        Action: function Action(res) {
            var tr = [];
            for (var i in res) {
                tr.push('<tr>', '    <td>' + res[i]["Index"] + '</td>', '    <td>' + res[i]["ActionUserAccount"] + '</td>', '    <td style="min-width: 80px; width: 80px;">' + res[i]["ActionType"] + '</td>', '    <td style="min-width: 550px; width: 550px;">' + res[i]["ActionData"] + '</td>', '    <td style="min-width: 100px; width: 100px;">' + res[i]["ActionTime"].replace(" ", "<br />") + '</td>', '    <td>' + res[i]["ActionIP"] + '</td>', '</tr>');
            }
            $(".user-action-table tbody").html(tr.join("\n"));
        },
        Charge: function Charge(res) {
            var tr = [];
            for (var i in res) {
                tr.push('<tr>', '    <td style="width: 188px;">' + res[i]["SaveMoney"] + '</td>', '    <td style="width: 188px;">' + res[i]["MoneyType"] + '</td>', '    <td style="width: 189px;">' + res[i]["MoneyDate"] + '</td>', '</tr>');
            }
            $(".user-charge-table tbody").html(tr.join("\n"));
        },
        History: function History(res) {
            var tr = [];
            var date;
            for (var i in res) {
                date = res[i]["Date"].replace(/\//g, '-');
                tr.push('<tr>', '    <td style="width: 60px;"><button class="btn btn-primary btn-xs view-history-detail" date="' + res[i]["Date"] + '" remaining_money="' + res[i]["RemainingMoney"] + '" today_money="' + res[i]["TodayMoney"] + '">明細</button></td>', '    <td style="width: 100px;">' + res[i]["Date"] + '</td>', '    <td style="width: 100px;">' + res[i]["TodayMoney"] + '</td>', '    <td style="width: 100px;">' + res[i]["RemainingMoney"] + '</td>', '    <td style="width: 100px;">' + res[i]["TotalFee"] + '</td>', '    <td style="width: 100px;">' + res[i]["TotalSubmit"] + '</td>', '    <td style="width: 100px;">' + res[i]["Uppay"] + '</td>', '    <td style="width: 100px;">' + res[i]["SaveMoney"] + '</td>', '</tr>');
            }
            $(".user-history-table tbody").html(tr.join("\n"));
        },
        HistoryDetail: function HistoryDetail(res) {
            _api.tra.User.render.OrderHistory(res["OrderArray"]);
            _api.tra.User.render.CoveredHistory(res["CoveredArray"]);
            _api.tra.User.render.CommodityHistory(res["CommodityArray"]);
        },
        OrderHistory: function OrderHistory(orders) {
            var tr = [];
            var buy_or_sell;
            var state;
            var inverted;
            var color;
            var button_html;
            var loss_point, win_point;
            var stop_loss_button_action, take_profit_button_action;
            for (var i in orders) {
                button_html = [];
                buy_or_sell = orders[i]["BuyOrSell"] == "0" ? "多" : "空";
                inverted = orders[i]["Inverted"] == "0" ? "" : "倒";
                color = orders[i]["BuyOrSell"] == "0" ? "red" : "green";
                loss_point = orders[i]["LossPoint"] == 0 ? "無" : orders[i]["LossPoint"];
                win_point = orders[i]["WinPoint"] == 0 ? "無" : orders[i]["WinPoint"];
                state = orders[i]["State"];
                tr.push('', '<tr>', '    <td>', '        ' + orders[i]["Serial"], '    </td>', '    <td style="min-width: 60px; width: 60px">', '        <span class="' + color + '">' + orders[i]["Name"] + '</span>', '    </td>', '    <td class="' + color + '" style="min-width: 40px; width: 40px">' + inverted + '</td>', '    <td class="' + color + '" style="min-width: 40px; width: 40px">' + buy_or_sell + '</td>', '    <td class="' + color + '">' + orders[i]["OrderPrice"] + '</td>', '    <td class="' + color + '" style="min-width: 40px; width: 40px">' + orders[i]["Quantity"] + '</td>', '    <td class="' + color + '" style="min-width: 60px; width: 60px">' + orders[i]["FinalPrice"] + '</td>', '    <td class="' + color + '" style="min-width: 100px; width: 100px">' + orders[i]["Odtype"] + '</td>', '    <td style="min-width: 45px; width: 45px">', '        ' + loss_point, '    </td>', '    <td style="min-width: 45px; width: 45px">', '        ' + win_point, '    </td>', '    <td class="order-state" style="min-width: 140px; width: 140px">' + state + '</td>', '    <td class="' + color + '" style="min-width: 100px; width: 100px">' + orders[i]["OrderTime"].replace(" ", "<br />") + '</td>', '    <td class="' + color + '" style="min-width: 100px; width: 100px">' + orders[i]["FinalTime"].replace(" ", "<br />") + '</td>', '</tr>');
            }
            $(".history-detail-order-table tbody").html(tr.join("\n"));
        },
        CoveredHistory: function CoveredHistory(orders) {
            var tr = [];
            var buy_or_sell;
            var covered_point, totalmoney;
            var color;
            for (var i in orders) {
                buy_or_sell = orders[i]["BuyOrSell"] == "0" ? "多" : "空";
                color = orders[i]["BuyOrSell"] == "0" ? "red" : "green";
                covered_point = orders[i]["Point"] > 0 ? '<span class="red">&#9650;' + orders[i]["Point"] + '</span>' : '<span class="green">&#9660;' + Math.abs(orders[i]["Point"]) + '</span>';
                totalmoney = orders[i]["Money"] > 0 ? '<span class="red">' + orders[i]["Money"] + '</span>' : '<span class="green">' + orders[i]["Money"] + '</span>';
                tr.push('', '<tr>', '    <td style="min-width: 60px; width: 60px">' + orders[i]["Name"] + '</td>', '    <td style="min-width: 70px; width: 70px">', '        ' + orders[i]["NewSerial"], '    </td>', '    <td style="min-width: 70px; width: 70px">', '        ' + orders[i]["CoverSerial"], '    </td>', '    <td style="min-width: 70px; width: 70px">' + orders[i]["NewType"] + '</td>', '    <td style="min-width: 70px; width: 70px">' + orders[i]["CoverType"] + '</td>', '    <td style="min-width: 40px; width: 40px">' + orders[i]["SerialCoveredNum"] + '</td>', '    <td class="' + color + '" style="min-width: 40px; width: 40px">' + buy_or_sell + '</td>', '    <td>' + orders[i]["NewPrice"] + '</td>', '    <td>' + orders[i]["CoverPrice"] + '</td>', '    <td style="min-width: 50px; width: 50px">' + orders[i]["TotalFee"] + '</td>', '    <td style="min-width: 50px; width: 50px">' + covered_point + '</td>', '    <td style="min-width: 50px; width: 50px">' + totalmoney + '</td>', '    <td style="min-width: 100px; width: 100px">' + orders[i]["NewDate"].replace(" ", "<br />") + '</td>', '    <td style="min-width: 100px; width: 100px">' + orders[i]["CoverDate"].replace(" ", "<br />") + '</td>', '</tr>');
            }
            $(".history-detail-covered-table tbody").html(tr.join("\n"));
        },
        CommodityHistory: function CommodityHistory(orders) {
            var tr = [];
            var colored_point, colored_totalmoney;
            var total_holding = 0;
            var total_stock;
            for (var i in orders) {
                total_stock = orders[i]["RemainingBuyStock"] - orders[i]["RemainingSellStock"];
                colored_point = orders[i]["TotalPoint"] > 0 ? '<span class="red">&#9650;' + orders[i]["TotalPoint"] + '</span>' : '<span class="green">&#9660;' + Math.abs(orders[i]["TotalPoint"]) + '</span>';
                colored_totalmoney = orders[i]["TodayMoney"] > 0 ? '<span class="red">' + orders[i]["TodayMoney"] + '</span>' : '<span class="green">' + orders[i]["TodayMoney"] + '</span>';
                var colored_stock = total_stock > 0 ? "red-bg" : total_stock < 0 ? "green-bg" : "";
                tr.push('', '<tr>', '    <td style="min-width: 70px; width: 70px">' + orders[i]["Name"] + '</td>', '    <td class="red" style="min-width: 40px; width: 40px">' + orders[i]["TotalBuySubmit"] + '</td>', '    <td class="green" style="min-width: 40px; width: 40px">' + orders[i]["TotalSellSubmit"] + '</td>', '    <td class="' + colored_stock + '" style="text-align: center; min-width: 60px; width: 60px; color: white;">' + Math.abs(total_stock) + '</td>', '    <td style="min-width: 60px; width: 60px">' + orders[i]["TotalSubmit"] + '</td>', '    <td style="min-width: 40px; width: 40px">' + orders[i]["Fee"] + '</td>', '    <td style="min-width: 80px; width: 80px">' + orders[i]["TotalFee"] + '</td>', '    <td style="min-width: 70px; width: 70px">' + colored_point + '</td>', '    <td style="min-width: 40px; width: 40px">' + orders[i]["OnePoint"] + '</td>', '    <td style="min-width: 70px; width: 70px">' + colored_totalmoney + '</td>', '    <td style="min-width: 70px; width: 70px">' + orders[i]["RemainingWithholding"] + '</td>', '</tr>');
                total_holding += parseInt(orders[i]["RemainingWithholding"]);
            }
            $(".total-commodity-holding").text(total_holding);
            $(".history-detail-commodity-table tbody").html(tr.join("\n"));
        }
    }
};

_api.tra.Rule = {
    render: function render(res) {
        var tr = [];
        for (var i in res["Rule"]) {
            tr.push('<tr>', '    <td style="width: 150px;">' + res["Rule"][i]["Title"] + '</td>', '    <td style="width: 415px;">' + res["Rule"][i]["Content"] + '</td>', '</tr>');
        }
        $(".rule-table tbody").html(tr.join("\n"));
    }
};

_api.tra.AddNewOrCurrent = {
    now_width: 0,
    now_height: 0,

    init: function init() {
        $(".add-new").click(function () {
            _api.tra.Chart.Control.switchKChart(1);
        });

        $(".add-current").click(function () {
            _api.tra.Chart.Control.switchKChart(0);
            $('.item-table tr').addClass("com-hide");
            $('.item-' + _api.tra.current_item).removeClass("com-hide");
        });

        $(".move-table").draggable({ scroll: true, cancel: '.kchart_chart' });
        $(".move-table").resizable({
            minHeight: 50,
            minWidth: 570,
            handles: 'n, e, s, w, se, ne, sw, nw'
        });

        $(".move-table-close").click(function () {
            _api.tra.APIConfigSet.now_inline_or_outline = 0;
            if (_api.tra.kChart.stateShow) {
                _api.tra.kChart.clearChart();
            }

            $(".move-table").hide();
        });

        $(".move-table-min").click(function () {
            _api.tra.APIConfigSet.now_inline_or_outline = 0;
            if (_api.tra.kChart.stateShow) {
                _api.tra.kChart.clearChart();
            }

            $('.max-header').hide();
            $('.min-header').show();
            _api.tra.AddNewOrCurrent.now_width = $('.move-table').width();
            _api.tra.AddNewOrCurrent.now_height = $('.move-table').height();

            $('.move-table').width(55);
            $('.move-table').height(32);

            $(".move-table").resizable("disable");
        });

        $(".move-table-max").click(function () {
            $('.min-header').hide();
            $('.max-header').show();
            $('.move-table').width(_api.tra.AddNewOrCurrent.now_width);
            $('.move-table').height(_api.tra.AddNewOrCurrent.now_height);
            _api.tra.AddNewOrCurrent.now_width = 0;

            _api.tra.APIConfigSet.now_inline_or_outline = 1;
            _api.tra.Processing.show();
            _api.tra.kChart.queryChart(_api.tra.current_item);

            $(".move-table").resizable("enable");
        });
    }
};

_api.tra.Password = {
    init: function init() {
        $(".change-password-button").click(function () {
            if ($("input[name=new_password]").val() != $("input[name=confirm_password]").val()) {
                _api.tra.Alert("兩次輸入的密碼不相同");
                return false;
            }
            if ($("input[name=old_password]").val() == "") {
                _api.tra.Alert("請輸入舊密碼");
                return false;
            }
            if ($("input[name=new_password]").val() == "") {
                _api.tra.Alert("請輸入新密碼");
                return false;
            }
            _api.tra.API.Password.set();
            return false;
        });
    }
};

_api.tra.Announce = {
    render: function render(res) {
        var ann = [];
        ann.push('<div style="font-size: 12px;" class="marquee">' + res["Announce"] + '</div>');
        $(".marquee-block").html(ann.join("\n"));
        $(".marquee").marquee({ duration: 15000 });
    }
};

_api.tra.HistoryPrice = {
    init: function init() {
        $(".search-price-submit").click(function () {
            var datetime = (0, _api.getDate)(new Date()) + " " + (0, _api.str_pad)($("input[name=price_detail_hour]").val()) + ":" + (0, _api.str_pad)($("input[name=price_detail_min]").val()) + ":" + (0, _api.str_pad)($("input[name=price_detail_sec]").val());
            _api.tra.API.HistoryPrice.get(datetime, $(".modal-price-detail select[name=order_item_list] option:selected").attr("value"));
            return false;
        });
    },
    render: function render(res) {
        var tr = [];
        var history = res["ComDataArray"].split(",");
        if (history.length < 3) {
            return;
        }
        for (var i = 0; i < history.length; i += 3) {
            tr.push('<tr>', '    <td style="width: 121px;">' + history[i] + '</td>', '    <td style="width: 122px;">' + history[i + 2] + '</td>', '    <td style="width: 122px;">' + history[i + 1] + '</td>', '</tr>');
        }
        $(".history-price-table tbody").html(tr.join("\n"));
    }
};

_api.tra.stopAllProccess = function () {
    $('<div class="modal-backdrop fade in"></div>').appendTo("body");
    $(".stop-banner").css("left", $(window).width() / 2 - 250);
    $(".stop-banner").css("top", $(window).height() / 2 - 140);
    $(".stop-banner").show();
    setInterval(function () {
        $(".stop-text").toggle();
    }, 1000);
};

_api.tra.showQRCode = function () {
    $(".qrcode-block").css("left", $(window).width() / 2 - 92);
    $(".qrcode-block").css("top", $(window).height() / 2 - 92);
    $(".qrcode-block").removeClass("hide");
};

_api.tra.Chart.Control = {
    init: function init() {
        $(".set-k-button").click(function () {
            _api.tra.Processing.show();
            var k = $(this).attr("k");
            var k_day = parseInt($(this).attr("k_day"));
            _api.tra.TechIndex.Current = k;
            _api.tra.TechIndex.CurrentDay = k_day;
            _api.tra.TechIndex.Min = parseInt($(this).attr("min"));
            _api.tra.kChart.queryChart(_api.tra.current_item);
        });
        $(".set-tech-ten-button").click(function () {
            _api.tra.kChart.toggleTenButton();
        });
        $(".set-chart-ten-button").click(function () {
            _api.tra.Chart.toggleTenButton();
        });
    },

    switchChart: function switchChart() {
        var queryItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _api.tra.current_item;

        _api.tra.Processing.show();
        _api.tra.Chart.queryChart(queryItem);
        $(".chartview").hide();
        $(".klineview").show();
        $(".tech-index-panel").addClass("hide");
    },

    switchKChart: function switchKChart(inline_or_outline) {
        _api.tra.Processing.show();
        _api.tra.kChart.queryChart(_api.tra.current_item);

        _api.tra.APIConfigSet.now_inline_or_outline = inline_or_outline;

        if (inline_or_outline == 1) {
            $(".move-table").show();
        } else {
            $(".move-table").hide();
            $(".klineview").hide();
            if (_api.tra.Custom.WebContent.get() == "A") {
                $(".chartview").show();
            } else {
                $(".chartview").hide();
            }
            $(".tech-index-panel").removeClass("hide");
        }
    }
};

_api.tra.Alert = function (text, title) {
    var title = title || "提示";
    $(".modal-alert-title").html(title);
    $(".modal-alert-text").html(text);
    if (_api.tra.ConfigSet.ORDERAPI_CLIENT == 0) {
        $("#alert_modal").modal();
    } else {
        $.mobile.changePage("#alert_dialog", { transition: "pop", role: "dialog" });
    }
};

_api.tra.SucessBuy = function () {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { id: 0, name: "", price: "市價", num: 0, buysell: 0, stopwin: 0, stoploss: 0 };

    var res = ["序號: " + p.id, "商品: " + p.name, "委託價: " + p.price, "口數: " + (p.buysell == 0 ? "多" : "空") + p.num, "停損: " + p.stoploss, "停利: " + p.stopwin];
    _api.tra.Alert(res.join("<br />"), "成交回報");
};

exports.tra = _api.tra;
exports.p = _api.p;
exports.getDateTime = _api.getDateTime;
exports.getDate = _api.getDate;
exports.getTime = _api.getTime;
exports.getDatePeriod = _api.getDatePeriod;
exports.getColor = _api.getColor;
exports.rgb2hex = _api.rgb2hex;
exports.formatTime = _api.formatTime;
exports.formatNumber = _api.formatNumber;
exports.updateInput = _api.updateInput;
exports.updateTech = _api.updateTech;
exports.updateSelectTech = _api.updateSelectTech;
exports.updateColorTech = _api.updateColorTech;
exports.updateCheckBoxTech = _api.updateCheckBoxTech;
exports.tech_render = _api.tech_render;
exports.strParseInt = _api.strParseInt;
exports.str_pad = _api.str_pad;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.str_pad = exports.strParseInt = exports.tech_render = exports.updateCheckBoxTech = exports.updateColorTech = exports.updateSelectTech = exports.updateTech = exports.updateInput = exports.formatNumber = exports.formatTime = exports.rgb2hex = exports.getColor = exports.getDatePeriod = exports.getTime = exports.getDate = exports.getDateTime = exports.p = exports.tra = undefined;

var _main = __webpack_require__(3);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var url = "ws://t8899.cc:1180";
var websocket;

//可註冊商品
_main.tra.available = {
	available_product: null,
	product_price: {}

	//現價資料 商品 => [時間,開,高,低,收]
};_main.tra.APIConfigSet = {
	now_data: {
		update_func: null
	},
	now_inline_or_outline: 0

	//Order
};var submit_url = "ws://t8899.cc:1280";
var submit_websocket;

//Queued API Query
var TIMER_GET_ORDER_LIST;
var TIMER_GET_USER_INFO;

//Tech Line
var report_url = "ws://t8899.cc:1380";
var report_websocket;

//更新各期貨資訊
function updateAllStockFunc() {
	if (_main.tra.available.available_product && _main.tra.available.available_product['data']) {
		for (var i = 0; i < _main.tra.available.available_product['data'].length; i++) {
			var the_id = _main.tra.available.available_product['data'][i]['product_id'];
			var the_now_data = _main.tra.APIConfigSet.now_data[the_id];
			if (the_now_data[7] != the_now_data[4] || the_now_data[0] % 60000 < the_now_data[6] % 60000 || !the_now_data[8]) {
				if (_main.tra.current_item == the_id) {
					if (_main.tra.Chart.stateShow) {
						_main.tra.Chart.setFuncInterval();
					}

					if (_main.tra.kChart.stateShow) {
						_main.tra.kChart.setFuncInterval();
					}
				}

				if (the_now_data[11] == the_now_data[12]) {
					$('.item-' + the_id + ' .k_bun').find(".k_col").animate({ height: "1px", top: "50%", backgroundColor: "#FFFFFF" }, 500);
					$('.item-' + the_id + ' .k_bun').find(".k_line").animate({ height: "1px", top: "50%", backgroundColor: "#FFFFFF" }, 500);
				} else if (the_now_data[4] > the_now_data[10]) {
					var kheight = Number((the_now_data[4] - the_now_data[10]) / (the_now_data[11] - the_now_data[12]) * 80).toFixed(2);
					var ktop = Number((the_now_data[11] - the_now_data[4]) / (the_now_data[11] - the_now_data[12]) * 80 + 10).toFixed(2);
					$('.item-' + the_id + ' .k_bun').find(".k_col").animate({ height: kheight + "%", top: ktop + "%", backgroundColor: "#FF0000" }, 500);
					$('.item-' + the_id + ' .k_bun').find(".k_line").animate({ height: "80%", top: "10%", backgroundColor: "#FF0000" }, 500);
				} else {

					var _kheight = Number((the_now_data[10] - the_now_data[4]) / (the_now_data[11] - the_now_data[12]) * 80).toFixed(2);
					var _ktop = Number((the_now_data[11] - the_now_data[10]) / (the_now_data[11] - the_now_data[12]) * 80 + 10).toFixed(2);
					$('.item-' + the_id + ' .k_bun').find(".k_col").animate({ height: _kheight + "%", top: _ktop + "%", backgroundColor: "#00FF00" }, 500);
					$('.item-' + the_id + ' .k_bun').find(".k_line").animate({ height: "80%", top: "10%", backgroundColor: "#00FF00" }, 500);
				}

				the_now_data[8] = true;
			}

			if (the_now_data[0] % 60000 < the_now_data[6] % 60000) {
				if (_main.tra.MiniChart.minivChart[the_id]) {
					var ontime = the_now_data[0] - the_now_data[0] % 60000;
					_main.tra.MiniChart.minivChart[the_id].series[0].addPoint([ontime, the_now_data[7]], true, false);
				}
				the_now_data[1] = the_now_data[4];
				the_now_data[2] = the_now_data[4];
				the_now_data[3] = the_now_data[4];
				the_now_data[5] = 0;
			}

			the_now_data[7] = the_now_data[4];
			the_now_data[6] = the_now_data[0];
		}
	}
}

//商品報價API
_main.tra.API = {
	listOn: false,
	reportOn: false,
	init: function init() {
		_main.tra.API.doWebSocket();
		_main.tra.API.doReportWebSocket();
		_main.tra.API.User.getInfo();
		if (_main.tra.ConfigSet.ORDERAPI_CLIENT == 0) {

			_main.tra.API.Alarm.get();
			_main.tra.API.BSSignal.get();
		}
	},
	doWebSocket: function doWebSocket() {
		_main.tra.Processing.show();

		websocket = new WebSocket(url);

		websocket.onopen = function (e) {
			_main.tra.API.onOpen(e);
		};

		websocket.onmessage = function (e) {
			_main.tra.API.onMessage(e);
		};

		websocket.onerror = function (e) {
			_main.tra.API.onError(e);
		};

		websocket.onclose = function (e) {
			_main.tra.API.onClose(e);
		};
	},

	doReportWebSocket: function doReportWebSocket() {

		report_websocket = new WebSocket(report_url);

		report_websocket.onmessage = function (e) {
			_main.tra.API.onReportMessage(e);
		};

		report_websocket.onopen = function (e) {
			_main.tra.API.reportOn = true;
		};

		report_websocket.onclose = function (e) {
			_main.tra.API.onReportClose(e);
		};
	},

	onOpen: function onOpen(event) {
		_main.tra.Processing.hide();
		_main.tra.API.send("a:" + _main.tra.User.user_id + "," + _main.tra.User.token);
	},

	onMessage: function onMessage(event) {
		var res = [];

		if (typeof event.data === "string") {
			var str_arr = event.data.split("&");
			for (var k = 0; k < str_arr.length; k++) {
				var edata = str_arr[k];
				var event_type = edata.substring(0, 1);
				if (edata.length > 1) {
					res = edata.substring(2).split(",");
				}
//      console.log('res',res); //2017-12-08 suking加
				switch (event_type) {
					case "a":
						//商品開盤通知， res[0] = 商品代碼 1=時間 2=開盤價
						//若與現在再看得走勢圖相同，則重啟走勢圖
						var item_id = edata.substring(2);
						if (_main.tra.current_item == item_id) {
							_main.tra.Chart.queryChart(_main.tra.current_item);
						}
						_main.tra.OrderAPI.delayGetAll();
						_main.tra.API.User.delayGetInfo();
						$(".item-" + item_id + " td.status").text("開盤");
						_main.tra.APIConfigSet.now_data[item_id][13] = 2;
						break;
					case "d":
						//商品現價通知， res[0] = 商品代碼 1=時間 2=最低 3=最高 4=量
						var parse_price = edata.substring(2).split(",");
						var item_id = parse_price[0];
						//如果商品代碼 = 現在所選的代碼

						//今天日期
						var now_date = new Date();
						var now_value = parseInt(parse_price[2]);
						//更新最新資料
						_main.tra.APIConfigSet.now_data[item_id][0] = new Date(now_date.getFullYear(), now_date.getMonth(), now_date.getDate(), parse_price[1].substring(0, 2), parse_price[1].substring(2, 4), parse_price[1].substring(4, 6)).getTime();
						_main.tra.APIConfigSet.now_data[item_id][4] = now_value;
						if (_main.tra.APIConfigSet.now_data[item_id][2] < now_value) {
							_main.tra.APIConfigSet.now_data[item_id][2] = now_value;
						}
						if (_main.tra.APIConfigSet.now_data[item_id][3] > now_value) {
							_main.tra.APIConfigSet.now_data[item_id][3] = now_value;
						}
						if (_main.tra.APIConfigSet.now_data[item_id][11] < now_value) {
							_main.tra.APIConfigSet.now_data[item_id][11] = now_value;
						}
						if (_main.tra.APIConfigSet.now_data[item_id][12] > now_value) {
							_main.tra.APIConfigSet.now_data[item_id][12] = now_value;
						}
						_main.tra.APIConfigSet.now_data[item_id][5] += parseInt(parse_price[4]);

						_main.tra.Item.update(parse_price);
						_main.tra.calculateFloatMoney();
						if (!(parse_price[0] in _main.tra.available.product_price)) {
							_main.tra.available.product_price[parse_price[0]] = [];
						}
						_main.tra.available.product_price[item_id].unshift([(0, _main.formatTime)(parse_price[1]), parse_price[4], parse_price[2]]);
						if (_main.tra.available.product_price[item_id].length > 20) {
							_main.tra.available.product_price[item_id].pop();
						}
						_main.tra.Price.update(item_id, [(0, _main.formatTime)(parse_price[1]), parse_price[4], parse_price[2]]);

						if (_main.tra.ConfigSet.ORDERAPI_CLIENT == 0) {
							if (item_id == "TXF" || item_id == "TXFAF" || item_id == "TSLQ") {
								if (item_id != "TSLQ") {
									_main.tra.TXFval.txf_p = parseInt(parse_price[2]);
								} else {
									_main.tra.TXFval.tslq_p = parseInt(parse_price[2]);
								}

								if (_main.tra.TXFval.tslq_p > 0 && _main.tra.TXFval.txf_p > 0) {
									$(".tslq-point-diff").html("<b class=\"" + (0, _main.getColor)(0, _main.tra.TXFval.txf_p - _main.tra.TXFval.tslq_p) + "\">" + (_main.tra.TXFval.txf_p - _main.tra.TXFval.tslq_p) + "</b>");
								}
							}
						}

						break;
					case "b":
						//五檔商品 res[0] = 商品代碼 1~5 委買價 高到低 6~10 委買量 11~15 委賣價 低到高 16~20 委賣量
						//$("#bp_content").html(edata.substring(2) + "<br>");
						var five = edata.substring(2).split(",");
						var buy = 0;
						var sell = 0;
						var buy_count = five[1];
						var sell_count = five[2];

						for (var i = 0; i < buy_count; i++) {
							buy += parseInt(five[i * 2 + 4]);
						}
						for (var i = 0; i < sell_count; i++) {
							sell += parseInt(five[i * 2 + 4 + buy_count * 2]);
						}
						if ($("th.five-ratio").css("display") != "none") {
							_main.tra.Item.renderFiveBar(five[0], buy, sell);
						}
						_main.tra.Item.renderSpBp(five[0], five[3], five[buy_count * 2 + 3]);
						if (five[0] == _main.tra.current_item) {
							var max_num = five[1] * 2 + five[2] * 2 + 3 - 1;
							var five_data = [];
							for (var i = 0; i < sell_count; i++) {
								five_data.push(['', five[max_num - i * 2 - 1], five[max_num - i * 2]]);
							}
							for (var i = 0; i < buy_count; i++) {
								five_data.push([five[i * 2 + 4], five[i * 2 + 3], '']);
							}
							_main.tra.Five.update(five_data, buy, sell, buy_count, sell_count);
						}
						break;
					case "t":
						//可用商品列表 需先送出身分ID，才會回傳
						_main.tra.API.listOn = true;
						_main.tra.Processing.hide();

						var regArray = JSON.parse(edata.substring(2));
						if (regArray["code"] > 0) {
							for (var _k = 0; _k < regArray['data'].length; _k++) {
								if (regArray['data'][_k]['open_price'] > regArray['data'][_k]['highest_price']) {
									regArray['data'][_k]['highest_price'] = regArray['data'][_k]['open_price'];
								}
								if (regArray['data'][_k]['open_price'] < regArray['data'][_k]['lowest_price']) {
									regArray['data'][_k]['lowest_price'] = regArray['data'][_k]['open_price'];
								}
							}
							_main.tra.Custom.init(regArray["data"]);
							_main.tra.available.available_product = regArray;
							_main.tra.API.reg();
							_main.tra.Item.init(regArray);
						} else {
							//tra.Page.loginOut("您已在其他地方登入");
						}
						break;
					case "i":
						//收盤
						_main.tra.OrderAPI.delayGetAll();
						_main.tra.API.User.delayGetInfo();
						var item_id = edata.substring(2);
						$(".item-" + item_id + " td.status").text("收盤");
						_main.tra.APIConfigSet.now_data[item_id][13] = 0;
						break;
					case "w":
						//TSLQ

						var market_tq = edata.substring(2).split(",");
						if (market_tq.length > 6) {
							$(".tslq-point").html("<b>" + parseInt(parseFloat(market_tq[1]) / 10000) + "萬張 " + parseInt(parseFloat(market_tq[2]) / 10000) + "萬筆 " + parseInt(parseFloat(market_tq[1]) / parseFloat(market_tq[2]) * 100) / 100 + "</b>");

							$(".tslq-money").html("<b> 成交量 " + market_tq[0] + "億 </b>");

							$(".tslq-want-buy").html("<b class=\"red\">" + parseInt(parseFloat(market_tq[4]) / 10000) + "萬張 " + parseInt(parseFloat(market_tq[3]) / 10000) + "萬筆 " + parseInt(parseFloat(market_tq[4]) / parseFloat(market_tq[3]) * 100) / 100 + "</b>");

							$(".tslq-want-sell").html("<b class=\"green\">" + parseInt(parseFloat(market_tq[6]) / 10000) + "萬張 " + parseInt(parseFloat(market_tq[5]) / 10000) + "萬筆 " + parseInt(parseFloat(market_tq[6]) / parseFloat(market_tq[5]) * 100) / 100 + "</b>");
						}
						break;
					default:
						break;
				}
			}
		}
	},

	onError: function onError(event) {},

	onClose: function onClose(event) {
		_main.tra.Processing.show();

		setTimeout(function () {
			//開啟連線
			_main.tra.API.doWebSocket();
		}, 5000);

		_main.tra.API.listOn = false;
	},

	send: function send(message) {
		websocket.send(message);
	},

	onReportMessage: function onReportMessage(event) {
		var pass_array = event.data.split("&");
		for (var i = 0; i < pass_array.length; i++) {
			var myArray = JSON.parse(pass_array[i]);
			if (myArray["chartType"] == "chart") {
				_main.tra.Chart.createData(myArray, myArray["chartName"]);
			} else if (myArray["chartType"] == "mini_chart") {
				_main.tra.MiniChart.createData(myArray, myArray["chartName"]);
			} else if (myArray["chartType"] == "kline") {
				_main.tra.kChart.createData(myArray, myArray["chartName"]);
			}
		}
	},

	onReportClose: function onReportClose(event) {
		setTimeout(function () {
			//開啟連線
			_main.tra.API.doReportWebSocket();
		}, 5000);

		_main.tra.API.reportOn = false;
	},

	reportSend: function reportSend(message) {
		if (report_websocket.readyState == 1) {
			report_websocket.send(message);
		}
	},

	bin2String: function bin2String(array) {
		var result = "";
		for (var i = 0; i < array.length; i++) {
			result += String.fromCharCode(parseInt(array[i], 2));
		}
		return result;
	},

	reg: function reg() {
		//註冊商品列表
		var available_product_str = "";
		var now_date = new Date();
		//最新資料 即時更新K線
		for (var i = 0; i < _main.tra.available.available_product['data'].length; i++) {
			available_product_str += _main.tra.available.available_product['data'][i]['product_id'] + ",";
			var newest_time = _main.tra.available.available_product['data'][i]['newest_time'];
			_main.tra.APIConfigSet.now_data[_main.tra.available.available_product['data'][i]['product_id']] = [
			/** 0 **/new Date(now_date.getFullYear(), now_date.getMonth(), now_date.getDate(), newest_time.substring(0, 2), newest_time.substring(2, 4), newest_time.substring(4, 6)).getTime(),
			/** 1 **/_main.tra.available.available_product['data'][i]['newest_price'],
			/** 2 **/_main.tra.available.available_product['data'][i]['newest_price'],
			/** 3 **/_main.tra.available.available_product['data'][i]['newest_price'],
			/** 4 **/_main.tra.available.available_product['data'][i]['newest_price'],
			/** 5 **/_main.tra.available.available_product['data'][i]['newest_qty'],
			/** 6 prev time **/0,
			/** 7 prev value **/0,
			/** 8 first add **/0,
			/** 9 chart data **/[],
			/** 10 **/_main.tra.available.available_product['data'][i]['open_price'],
			/** 11 **/_main.tra.available.available_product['data'][i]['highest_price'],
			/** 12 **/_main.tra.available.available_product['data'][i]['lowest_price'],
			/** 13 **/_main.tra.available.available_product['data'][i]['state'],
			/** 14 **/_main.tra.available.available_product['data'][i]['yesterday_close_price']];
		}
		if (!_main.tra.APIConfigSet.now_data.update_func) {
			clearInterval(_main.tra.APIConfigSet.now_data.update_func);
			_main.tra.APIConfigSet.now_data.update_func = null;
		}
		_main.tra.APIConfigSet.now_data.update_func = setInterval(updateAllStockFunc, 1000);

		_main.tra.API.send("x:" + available_product_str.substring(0, available_product_str.length - 1));

		//註冊商品五檔(建議一次註冊一個就好)
		if (_main.tra.ConfigSet.ORDERAPI_CLIENT == 0) {
			//var available_product_str = "";
			//for( var i = 0; i < available_product['data'].length; i++) {
			//        available_product_str += available_product['data'][i]['product_id'] + ",";
			//}
			//tra.API.send("h:" + available_product_str.substring(0, available_product_str.length-1));
			//tra.API.send("h:" + available_product['data'][0]['product_id']);
		}

		console.log(_main.tra.APIConfigSet.now_data);
	},

	getTechLine: function getTechLine(input_array) {
		var sent_array = ["y:" + input_array[0]];
		for (var i = 1; i < input_array.length; i++) {
			sent_array.push(input_array[i]);
		}
		_main.tra.API.reportSend(sent_array.join(","));
		return;
	},

	//登入系統
	Login: function Login(account, password) {
		var data = {
			LoginAccount: account,
			LoginPassword: password
		};
		$.ajax({
			url: "/api/validation",
			type: "POST",
			data: data,
			dataType: "json"
		}).done(function (res) {

			if (res["Code"] == 2) {
				if (_main.tra.ConfigSet.ORDERAPI_CLIENT == 0) {
					$("#href-target").prop("action", "/agent/index.php");
					$("#choose-id").val(res["ChooseId"]);
					$("#user-id").val(res["UserId"]);
					$("#user-account").val(res["UserAccount"]);
					$("#user-token").val(res["Token"]);
					$("#href-target").submit();
				}
				//location.href = '/agent/index.php';
			} else if (res["Code"] > 0) {
				if (_main.tra.ConfigSet.ORDERAPI_CLIENT == 0) {
					$("#href-target").prop("action", "index.php");
					$("#user-id").val(res["UserId"]);
					$("#user-token").val(res["Token"]);
					$("#href-target").submit();
				} else {
					$.ajax({
						url: "login_action.php",
						type: "POST",
						data: {
							token: res["Token"],
							user_id: res["UserId"]
						}
					}).done(function () {
						location.href = 'index.php';
					});
				}
				/*$.ajax({
            url: "login_action.php",
            type: "POST",
            data: {
            token: res["Token"],
            user_id: res["UserId"]
        }
    }).done(function() {
    location.href = 'index.php';
    });*/
			} else {
				_main.tra.Alert(res["ErrorMsg"]);
			}
		});
	},

	Loginout: function Loginout() {
		var data = {
			UserID: _main.tra.User.user_id
		};
		$.ajax({
			url: "/api/loginout",
			type: "POST",
			data: data
		}).done(function (res) {
			location.href = "login.php";
		});
	}
};

_main.tra.API.User = {
	getInfo: function getInfo() {
		var data = {
			Token: _main.tra.User.token,
			UserID: _main.tra.User.user_id
		};
		$.ajax({
			url: "/api/query_member_and_commoditylist",
			type: "POST",
			data: data,
			dataType: "json"
		}).done(function (res) {
			if (res["Code"] < 0) {
				_main.tra.Page.loginOut(res["ErrorMsg"]);
				return;
			} else if (res["Code"] > 0) {
				_main.tra.Page.render.UserInfo(res);
			}
		});
	},
	delayGetInfo: function delayGetInfo() {
		if (typeof TIMER_GET_USER_INFO !== "undefined") {
			clearTimeout(TIMER_GET_USER_INFO);
		}
		TIMER_GET_USER_INFO = setTimeout(function () {
			_main.tra.API.User.getInfo();
		}, 2000);
	},
	getAction: function getAction(start_date, end_date, day) {
		var data = {
			Token: _main.tra.User.token,
			UserID: _main.tra.User.user_id
		};
		if (start_date == "" && end_date == "") {
			data["DaySelect"] = day;
		} else {
			data["StartDate"] = start_date;
			data["EndDate"] = end_date;
			data["DaySelect"] = day;
		}
		$.ajax({
			url: "/api/query_actionlist",
			type: "POST",
			data: data
		}).done(function (res) {
			res = JSON.parse(res);
			_main.tra.User.render.Action(res["ActionArray"]);
		});
	},
	getCharge: function getCharge(start_date, end_date, day) {
		var data = {
			"Token": _main.tra.User.token,
			"UserID": _main.tra.User.user_id
		};
		if (start_date == "" && end_date == "") {
			data["DaySelect"] = day;
		} else {
			data["StartDate"] = start_date;
			data["EndDate"] = end_date;
			data["DaySelect"] = day;
		}
		$.ajax({
			url: "/api/query_savemoneylist",
			type: "POST",
			data: data
		}).done(function (res) {
			res = JSON.parse(res);
			_main.tra.User.render.Charge(res["MoneyArray"]);
		});
	},
	getHistory: function getHistory(start_date, end_date, day) {
		var data = {
			"Token": _main.tra.User.token,
			"UserID": _main.tra.User.user_id
		};
		if (start_date == "" && end_date == "") {
			data["DaySelect"] = day;
		} else {
			data["StartDate"] = start_date;
			data["EndDate"] = end_date;
			data["DaySelect"] = day;
		}
		$.ajax({
			url: "/api/query_history_moneylist",
			type: "POST",
			data: data
		}).done(function (res) {
			res = JSON.parse(res);
			_main.tra.User.render.History(res["MoneyArray"]);
		});
	},
	getHistoryDetail: function getHistoryDetail(start_date, end_date, day) {
		var data = {
			"Token": _main.tra.User.token,
			"UserID": _main.tra.User.user_id
		};
		if (start_date == "" && end_date == "") {
			data["DaySelect"] = day;
		} else {
			data["StartDate"] = start_date;
			data["EndDate"] = end_date;
			data["DaySelect"] = day;
		}
		$.ajax({
			url: "/api/query_moneylist_detail",
			type: "POST",
			data: data
		}).done(function (res) {
			res = JSON.parse(res);
			_main.tra.User.render.HistoryDetail(res);
		});
	}
};

_main.tra.Chart = {
	syncChart: null,
	stateShow: false,
	crosshairX: null,
	labelY: null,
	circleX: null, // trend last point
	highLabel: null,
	lowLabel: null,
	mouseLabelY: null,
	mouseLabelColumnY: null,
	mouseLabelX: null,
	mouseCrosshairX: null,
	mouseCrosshairColumnX: null,
	toggleTen: false,
	highest_data: 0,
	lowest_data: 9999999,
	series: null,
	series2: null,
	setFuncInterval: null,
	label_font_size: '16px',
	label_width: '44px',
	label_x: 5,
	chart_label1_x: 0,
	chart_label2_x: 0,
	chart_label_maringleft: 0,
	toggleTenButton: function toggleTenButton() {
		if (!_main.tra.Chart.toggleTen) {
			_main.tra.Chart.mouseCrosshairX.show();
			_main.tra.Chart.mouseCrosshairColumnX.show();
			_main.tra.Chart.mouseLabelX.show();
			_main.tra.Chart.mouseLabelY.show();
			_main.tra.Chart.mouseLabelColumnY.show();
		} else {
			_main.tra.Chart.mouseCrosshairX.hide();
			_main.tra.Chart.mouseCrosshairColumnX.hide();
			_main.tra.Chart.mouseLabelX.hide();
			_main.tra.Chart.mouseLabelY.hide();
			_main.tra.Chart.mouseLabelColumnY.hide();
		}
		_main.tra.Chart.toggleTen = !_main.tra.Chart.toggleTen;
	},

	addChartCrosshairs: function addChartCrosshairs() {
		var chart = this;
		//initialize the X and Y component of the crosshairs (you can adjust the color and size of the crosshair lines here)
		_main.tra.Chart.crosshairX = chart.renderer.path(['M', chart.plotLeft - 10, 2, 'L', chart.plotLeft + chart.plotWidth + 10, 2]).attr({
			stroke: 'red',
			'stroke-width': 1,
			zIndex: 0
		}).add().hide().toFront();

		_main.tra.Chart.chart_label2_x = chart.plotLeft + chart.plotWidth - 10;
		if (_main.tra.ConfigSet.ORDERAPI_CLIENT == 1) {
			_main.tra.Chart.label_width = '26px';
			_main.tra.Chart.label_x = chart.plotWidth + 5;
			_main.tra.Chart.chart_label1_x = _main.tra.Chart.label_x;
			_main.tra.Chart.chart_label2_x = _main.tra.Chart.label_x;
		} else if (_main.tra.Custom.WebContent.get() == "B") {
			_main.tra.Chart.label_width = '32px';
			_main.tra.Chart.label_x = 0;
		}
		_main.tra.Chart.labelY = chart.renderer.label('<div style="text-align:center;font-size:' + _main.tra.Chart.label_font_size + ';width:' + _main.tra.Chart.label_width + 'height:21px;line-height:21px;"></div>', _main.tra.Chart.label_x, 50, 'callout', 520, 64, true).css({
			color: '#FFFFFF',
			fontSize: _main.tra.Chart.label_font_size
		}).attr({
			fill: 'rgb(233, 0, 0)'
		}).add().hide().toFront();

		_main.tra.Chart.circleX = chart.renderer.circle(3, 3, 4).attr({
			fill: '#F00',
			stroke: 'white',
			'stroke-width': 1
		}).add().toFront().hide();

		_main.tra.Chart.mouseLabelY = chart.renderer.label('<div></div>', -50, -50, 'callout', 520, 64, true).css({
			color: '#000000',
			fontSize: _main.tra.Chart.label_font_size
		}).attr({
			fill: 'rgb(211, 211, 211)',
			zIndex: 5
		}).add().hide().toFront();

		_main.tra.Chart.mouseLabelX = chart.renderer.label('<div></div>', -50, -50, 'callout', 520, 64, true).css({
			color: '#000000',
			fontSize: _main.tra.Chart.label_font_size
		}).attr({
			fill: 'rgb(211, 211, 211)',
			zIndex: 5
		}).add().hide().toFront();

		_main.tra.Chart.mouseLabelColumnY = chart.renderer.label('<div></div>', -50, -50, 'callout', 520, 64, true).css({
			color: '#000000',
			fontSize: _main.tra.Chart.label_font_size
		}).attr({
			fill: 'rgb(211, 211, 211)',
			zIndex: 5
		}).add().hide().toFront();

		_main.tra.Chart.mouseCrosshairColumnX = chart.renderer.path(['M', chart.plotLeft - 10, chart.plotTop - 50, 'L', chart.plotLeft + chart.plotWidth + 10, chart.plotTop - 50]).attr({
			stroke: '#FFFFFF',
			'stroke-width': 1,
			zIndex: 5
		}).add().hide().toFront();

		_main.tra.Chart.mouseCrosshairX = chart.renderer.path(['M', chart.plotLeft - 10, chart.plotTop - 50, 'L', chart.plotLeft + chart.plotWidth + 10, chart.plotTop - 50]).attr({
			stroke: '#FFFFFF',
			'stroke-width': 1,
			zIndex: 5
		}).add().hide().toFront();

		chart.renderer.path(['M', chart.plotLeft + chart.plotWidth, chart.plotTop, 'L', chart.plotLeft + chart.plotWidth, chart.plotTop + chart.plotHeight]).attr({
			stroke: '#555555',
			'stroke-width': 1,
			zIndex: 5
		}).add();

		chart.renderer.path(['M', chart.plotLeft, chart.plotTop, 'L', chart.plotLeft, chart.plotTop + chart.plotHeight]).attr({
			stroke: '#333333',
			'stroke-width': 1,
			zIndex: 5
		}).add();

		if (_main.tra.Custom.WebContent.get() == "B" || _main.tra.ConfigSet.ORDERAPI_CLIENT == 1) {
			_main.tra.Chart.toggleTen = true;
		}

		if (_main.tra.Chart.toggleTen) {
			_main.tra.Chart.mouseCrosshairX.show();
			_main.tra.Chart.mouseCrosshairColumnX.show();
			_main.tra.Chart.mouseLabelX.show();
			_main.tra.Chart.mouseLabelY.show();
			_main.tra.Chart.mouseLabelColumnY.show();
		}

		var threshold = _main.tra.Chart.crossdata[0][1],
		    colorAbove = '#E61E19',
		    colorBelow = '#53AB35';

		_main.tra.Chart.series = this.series[1];
		_main.tra.Chart.series2 = this.series[0];
		_main.tra.APIConfigSet.now_data[_main.tra.current_item][8] = false;
		_main.tra.Chart.setFuncInterval = function () {
			var series = _main.tra.Chart.series;
			var the_now_data = _main.tra.APIConfigSet.now_data[_main.tra.current_item];
			if (_main.tra.APIConfigSet.now_data[_main.tra.current_item][13] == 2) {
				var series2 = _main.tra.Chart.series2;
				//前後時間有更新才做更新
				//the_now_data 時間 開 高 低 收 量 上一筆時間 上一筆價格
				//分鐘線不刪掉
				if (series.data[series.data.length - 1].x % 60000 != 0) {
					series.removePoint(series.data.length - 1, false, false);
				}

				if (the_now_data[0] % 60000 != 0) {
					//固定新增最後一個點，僅新增非分鐘線
					series.addPoint([the_now_data[0], the_now_data[4]], false, false);
				}

				//量
				//分鐘線不刪掉
				if (series2.data[series2.data.length - 1].x % 60000 != 0) {
					series2.removePoint(series2.data.length - 1, false, false);
				}

				//同步更新分鐘線資料
				series2.data[series2.data.length - 1].y = the_now_data[5];

				//量
				if (the_now_data[0] % 60000 != 0) {
					series2.addPoint([the_now_data[0], the_now_data[5]], false, false);
				}

				if (the_now_data[0] / 1000 % 60 < the_now_data[6] / 1000 % 60) {
					//固定新增最後一個點，分鐘線，所以要整點
					var ontime = the_now_data[0] - the_now_data[0] % 60000;
					series.addPoint([ontime, the_now_data[4]], false, false);
					series2.addPoint([ontime, 0], false, false);
				}

				_main.tra.Chart.syncChart.redraw();
			}

			//將點移到最後一個點位
			var points = series.points;

			_main.tra.Chart.crosshairX.show();
			_main.tra.Chart.crosshairX.translate(chart.plotLeft, points[points.length - 1].plotY + chart.plotTop);

			//animate({
			//translateY: points[points.length - 1].plotY + chart.plotTop
			//}, 300);

			_main.tra.Chart.circleX.show();
			_main.tra.Chart.circleX.translate(points[points.length - 1].plotX + chart.plotLeft - 2, points[points.length - 1].plotY + chart.plotTop - 2);
			//	tra.Chart.circleX.animate({
			//		translateY: points[points.length - 1].plotY + chart.plotTop - 2,
			//		translateX: points[points.length - 1].plotX + chart.plotLeft - 2
			//	}, 300);

			_main.tra.Chart.labelY.show();
			_main.tra.Chart.labelY.translate(_main.tra.Chart.label_x, points[points.length - 1].plotY + chart.plotTop - _main.tra.Chart.labelY.height / 2);

			//animate({
			//	translateY: points[points.length - 1].plotY + chart.plotTop - tra.Chart.labelY.height / 2
			//	}, 300);
			var tra_chart_array = ['<div style="text-align:center;font-size:', _main.tra.Chart.label_font_size, ';width:', _main.tra.Chart.label_width, ';height:', _main.tra.Chart.label_font_size, ';line-height:', _main.tra.Chart.label_font_size, ';">', the_now_data[4], '</div>'];
			_main.tra.Chart.labelY.attr({
				text: tra_chart_array.join("")
			});
		};

		if (this.renderer.box.tagName === 'svg') {
			var translatedThreshold = _main.tra.Chart.series.yAxis.translate(threshold),
			    y1 = Math.round(_main.tra.Chart.series.yAxis.len - translatedThreshold),
			    y2 = y1 + 2; // 0.01 would be fine, but IE9 requires 2

			// Apply gradient to the path
			_main.tra.Chart.series.graph.attr({
				stroke: {
					linearGradient: [0, y1, 0, y2],
					stops: [[0, Highcharts.Color(colorAbove).setOpacity(1).get('rgba')], [1, Highcharts.Color(colorBelow).setOpacity(1).get('rgba')]]
				}
			});

			// Apply gradient to the area
			if (_main.tra.Chart.series.area) {
				_main.tra.Chart.series.area.attr({
					fill: {
						linearGradient: [0, y1, 0, y2],
						stops: [[0, Highcharts.Color(colorAbove).setOpacity(0.5).get('rgba')], [1, Highcharts.Color(colorBelow).setOpacity(0.5).get('rgba')]]
					}
				});
			}
		}
	},

	clearChart: function clearChart() {
		if (_main.tra.Chart.syncChart != null) {
			_main.tra.Chart.syncChart.destroy();
		}
		_main.tra.Chart.syncChart = null;

		$(".chart_chart").remove();

		_main.tra.Chart.stateShow = false;
	},

	redrawHighLowLabel: function redrawHighLowLabel() {
		var point = null;
		for (var i = 1; i < _main.tra.Chart.syncChart.series[1].points.length; i++) {
			var tpoint = _main.tra.Chart.syncChart.series[1].points[i];
			if (!point || tpoint.y > point.y) {
				point = tpoint;
			}
		}

		if (point == null) {
			_main.tra.Chart.highLabel.hide();
		} else {
			_main.tra.Chart.highLabel.show();
			var high_x = point.plotX + _main.tra.Chart.syncChart.plotLeft - 20;
			var high_y = point.plotY < _main.tra.Chart.syncChart.plotTop + 5 ? _main.tra.Chart.syncChart.plotTop + 5 : point.plotY + _main.tra.Chart.syncChart.plotTop + 3;
			_main.tra.Chart.highLabel.translate(high_x >= _main.tra.Chart.syncChart.plotLeft ? high_x : _main.tra.Chart.syncChart.plotLeft, high_y);
			var highLabel_array = ['<div style="text-align:center;font-size:', _main.tra.Chart.label_font_size, ';width:', _main.tra.Chart.label_width, ';height:', _main.tra.Chart.label_font_size, ';line-height:', _main.tra.Chart.label_font_size, ';">', _main.tra.Chart.highest_data, '</div>'];
			_main.tra.Chart.highLabel.attr({
				text: highLabel_array.join("")
			});
		}

		var point2 = null;
		for (var i = 1; i < _main.tra.Chart.syncChart.series[1].points.length; i++) {
			var tpoint = _main.tra.Chart.syncChart.series[1].points[i];
			if (!point2 || tpoint.y < point2.y) {
				point2 = tpoint;
			}
		}
		if (point2 == null) {
			_main.tra.Chart.lowLabel.hide();
		} else {
			_main.tra.Chart.lowLabel.show();
			var low_x = point2.plotX + _main.tra.Chart.syncChart.plotLeft - 20;
			var low_y = point2.plotY < _main.tra.Chart.syncChart.plotTop + 5 ? _main.tra.Chart.syncChart.plotTop + 5 : point2.plotY + _main.tra.Chart.syncChart.plotTop + 3;
			_main.tra.Chart.lowLabel.translate(low_x >= _main.tra.Chart.syncChart.plotLeft ? low_x : _main.tra.Chart.syncChart.plotLeft, low_y);
			var lowLabel_array = ['<div style="text-align:center;font-size:', _main.tra.Chart.label_font_size, ';width:', _main.tra.Chart.label_width, ';height:', _main.tra.Chart.label_font_size, ';line-height:', _main.tra.Chart.label_font_size, ';">', _main.tra.Chart.lowest_data, '</div>'];
			_main.tra.Chart.lowLabel.attr({
				text: lowLabel_array.join("")
			});
		}
	},

	afterSetExtremes: function afterSetExtremes(e) {
		//vertical line
		for (var i in _main.tra.Chart.newlines) {
			_main.tra.Chart.newlines[i].destroy();
		}
		_main.tra.Chart.newlines = [];

		var sync_key = [];
		for (var i in _main.tra.Chart.syncChart.xAxis[0].ticks) {
			var j = 0;
			for (j = 0; j < sync_key.length; j++) {
				if (parseInt(sync_key[j]) > parseInt(i)) {
					sync_key.splice(j, 0, i);
					break;
				}
			}
			if (j >= sync_key.length) {
				sync_key[sync_key.length] = i;
			}
		}

		for (var i = 0; i < sync_key.length - 1; i++) {
			var draw_d = _main.tra.Chart.syncChart.xAxis[0].ticks[sync_key[i]].gridLine.d.split(" ");

			var ndex_draw_d = _main.tra.Chart.syncChart.xAxis[0].ticks[sync_key[i + 1]].gridLine.d.split(" ");
			for (var j = 1; j < draw_d.length; j += 3) {
				draw_d[j] = (parseFloat(draw_d[j]) + parseFloat(ndex_draw_d[j])) / 2;
			}

			var new_line = _main.tra.Chart.syncChart.renderer.path(draw_d).attr({
				stroke: '#555555',
				'stroke-width': 1,
				zIndex: 0,
				dashstyle: 'dash'
			}).add();

			_main.tra.Chart.newlines[_main.tra.Chart.newlines.length] = new_line;
		}
	},

	init: function init() {
		var chart_height = 200;

		_main.tra.Processing.hide();
		_main.tra.Chart.clearChart();
		_main.tra.Chart.stateShow = true;

		//初始素質
		var object_name = ".chart-container";
		var chart_left_margin = 65;
		var chart_right_margin = 40;
		var chart_tickPixelInterval = 100;
		var chart_zoomType = '';
		var chart_formatter = null;
		var chart_spacingRight = 10;
		var chart_spacingTop = 15;
		var chart_label_x = 20;
		var chart_formater_x = 48;
		var chart_formater_label_width = '80px';
		var chart_opposite = false;
		var chart_tickLength = 10;
		var chart_tickY = 20;
		var chart_background = "rgb(28, 28, 28)";
		var chart_label_formatter = {};
		var chart_y_label_aligin = "right";
		var chart_y_label_x = -8;
		//版面A
		if (_main.tra.ConfigSet.ORDERAPI_CLIENT == 0) {
			if (_main.tra.Custom.WebContent.get() == "A") {
				// 先kchart 刪除，新增新的
				if (_main.tra.APIConfigSet.now_inline_or_outline == 0) {
					//視窗內
					_main.tra.kChart.clearChart();
				}

				$(".chart-panel").show();
				chart_height = $(".item-block").height() - 86;
				$(".chart-container").height(chart_height);
				chart_zoomType = 'x';
			} else {
				//版面B
				_main.tra.kChart.clearChart();
				chart_height = $(".web-cotent-b-chart-container").height();
				object_name = ".web-cotent-b-chart-container";
				chart_left_margin = 40;
				chart_right_margin = 22;
				chart_tickPixelInterval = 70;
				_main.tra.Chart.label_font_size = '9px';
				chart_spacingRight = 3;
				chart_spacingTop = 5;
				chart_label_x = 10;
				chart_formater_x = 22;
				chart_formater_label_width = '60px';
				_main.tra.Chart.chart_label_maringleft = -10;
				chart_tickLength = 0;
				chart_tickY = 10;
			}

			chart_label_formatter = {
				x: chart_label_x,
				align: 'center',
				style: {
					fontSize: _main.tra.Chart.label_font_size,
					color: '#E0E0E3',
					fontWeight: 'normal'
				}
			};
		} else {
			chart_tickLength = 0;
			chart_left_margin = 5;
			chart_right_margin = 40;
			chart_tickPixelInterval = 70;
			_main.tra.Chart.label_font_size = '9px';
			chart_spacingRight = 3;
			chart_spacingTop = 5;
			chart_label_x = -30;
			chart_formater_x = 22;
			chart_formater_label_width = '50px';
			_main.tra.Chart.chart_label_maringleft = -10;
			chart_opposite = true;
			chart_label_formatter = {
				formatter: function formatter() {
					return '';
				}
			};
			chart_tickY = 10;
			chart_background = "rgb(0, 0, 0)";
			chart_y_label_x = 4;
			chart_y_label_aligin = "left";
			chart_height = $(".chart-container").height();
		}

		chart_formatter = function chart_formatter() {
			var x = this.x,
			    chart = this.series.chart,
			    series = this.series.chart.series,
			    ret = '',
			    s;

			_main.tra.Chart.mouseLabelX.translate(this.point.plotX + chart_label_x, chart.plotHeight + chart.plotTop + 3);
			var time_array = ['<div style="text-shadow: 0 0 0 !important;text-align:center;font-size:', _main.tra.Chart.label_font_size, ';width:', chart_formater_label_width, ';height:', _main.tra.Chart.label_font_size, ';line-height:', _main.tra.Chart.label_font_size, ';">', Highcharts.dateFormat('%H:%M:%S', this.x), '</div>'];
			_main.tra.Chart.mouseLabelX.attr({
				text: time_array.join("")
			});

			s = series[1];
			$.each(s.points, function (key, p) {
				if (p.x >= x) {
					_main.tra.Chart.mouseLabelY.translate(_main.tra.Chart.chart_label1_x, p.plotY + chart.plotTop - _main.tra.Chart.mouseLabelY.height / 2);
					var mouse_array = ['<div style="text-shadow: 0 0 0 !important;text-align:center;font-size:', _main.tra.Chart.label_font_size, ';width:', _main.tra.Chart.label_width, ';height:', _main.tra.Chart.label_font_size, ';line-height:', _main.tra.Chart.label_font_size, ';">', p.y, '</div>'];
					_main.tra.Chart.mouseLabelY.attr({
						text: mouse_array.join("")
					});

					_main.tra.Chart.mouseCrosshairX.translate(0, p.plotY + 50);
					return false;
				}
			});

			s = series[0];
			$.each(s.points, function (key, p) {
				if (p.x >= x) {
					_main.tra.Chart.mouseLabelColumnY.translate(_main.tra.Chart.chart_label2_x, p.plotY + chart.plotTop - _main.tra.Chart.mouseLabelColumnY.height / 2);
					var mouse_array = ['<div style="text-shadow: 0 0 0 !important;text-align:center;font-size:', _main.tra.Chart.label_font_size, ';width:', _main.tra.Chart.label_width, ';height:', _main.tra.Chart.label_font_size, ';line-height:', _main.tra.Chart.label_font_size, ';">', p.y, '</div>'];
					_main.tra.Chart.mouseLabelColumnY.attr({
						text: mouse_array.join("")
					});

					_main.tra.Chart.mouseCrosshairColumnX.translate(chart.plotLeft, p.plotY + 50);
					return false;
				}
			});

			return '';
		};

		$('<div class="chart_chart" style="height: ' + chart_height + 'px;">').appendTo(object_name).highcharts({
			global: {
				useUTC: false
			},
			chart: {
				backgroundColor: chart_background,
				style: {
					fontFamily: "Signika, serif"
				},
				marginLeft: chart_left_margin, // Keep all charts left aligned
				marginRight: chart_right_margin,
				spacingTop: chart_spacingTop,
				spacingBottom: 7,
				spacingRight: chart_spacingRight,
				zoomType: chart_zoomType,
				events: {
					load: _main.tra.Chart.addChartCrosshairs,
					redraw: _main.tra.Chart.redrawHighLowLabel
				}
			},
			title: {
				text: ''
			},
			xAxis: {
				tickPixelInterval: chart_tickPixelInterval,
				type: 'datetime',
				gridLineWidth: 1,
				gridLineColor: '#555555',
				gridLineDashStyle: 'dash',
				labels: {
					style: {
						fontSize: _main.tra.Chart.label_font_size,
						fontWeight: 'normal',
						color: '#E0E0E3'
					},
					y: chart_tickY
				},
				lineColor: '#555555',
				minorGridLineColor: '#505053',
				tickColor: '#555555',
				tickLength: chart_tickLength,
				title: {
					style: {
						color: '#A0A0A3'
					}
				},
				crosshair: true,
				events: {
					afterSetExtremes: _main.tra.Chart.afterSetExtremes
				}
			},
			yAxis: [{
				title: {
					text: ''
				},
				shadow: true,
				gridLineColor: '#555555',
				labels: {
					style: {
						fontSize: _main.tra.Chart.label_font_size,
						color: '#E0E0E3',
						fontWeight: 'normal',
						crop: false
					},
					x: chart_y_label_x,
					align: chart_y_label_aligin
				},
				tickLength: 0,
				lineColor: '#555555',
				minorGridLineColor: '#505053',
				tickColor: '#555555',
				tickPixelInterval: 70,
				maxPadding: 0,
				minPadding: 0.1,
				startOnTick: false,
				endOnTick: true,
				tickWidth: 1,
				opposite: chart_opposite
			}, {
				title: {
					text: ''
				},
				gridLineWidth: 0,
				tickWidth: 0,
				opposite: !chart_opposite,
				labels: chart_label_formatter,
				lineColor: '#555555',
				minorGridLineColor: '#505053'
			}],
			legend: {
				enabled: false
			},
			tooltip: {
				positioner: function positioner() {
					return {
						x: chart_formater_x,
						y: -7 // align to title
					};
				},
				shared: false,
				split: false,
				borderWidth: 0,
				backgroundColor: 'none',
				shadow: false,
				useHTML: true,
				style: {
					fontSize: _main.tra.Chart.label_font_size
				},
				headerFormat: '',
				pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> <b style=\"color:#FFF;\">{point.y}</b>",
				formatter: chart_formatter
			},

			plotOptions: {
				area: {
					fillColor: {
						linearGradient: {
							x1: 0,
							y1: 0,
							x2: 0,
							y2: 0.85
						},
						stops: [[0, Highcharts.Color("#E61E19").setOpacity(0).get('rgba')], [1, Highcharts.Color("#53AB35").setOpacity(0).get('rgba')]]
					},

					lineWidth: 2,
					states: {
						hover: {
							lineWidth: 2
						}
					},
					dataLabels: {
						enabled: false
					},
					color: "#E61E19",
					negativeColor: '#53AB35',
					threshold: _main.tra.Chart.crossdata[0][1]
				},

				series: {
					animation: false,
					borderWidth: 0,
					marker: {
						enabled: false,
						fillColor: '#FFFFFF',
						lineColor: 'rgb(32, 150, 216)',
						lineWidth: 2,
						radius: 4
					},
					dataLabels: {
						style: {
							fontSize: _main.tra.Chart.label_font_size,
							color: '#FFF',
							fontWeight: 'normal',
							textOutline: 'none',
							textShadow: false
						},
						shadow: false,
						borderRadius: 5,
						//backgroundColor: 'rgb(32, 150, 216)',
						zIndex: 9999,
						y: 15,
						x: -35
					}
				}
			},

			series: [{
				type: 'column',
				//enableMouseTracking: false,
				yAxis: 1,
				name: '量',
				data: _main.tra.Chart.q_data
			}, {
				type: 'area',
				yAxis: 0,
				name: '價格',
				data: _main.tra.Chart.data,
				states: {
					hover: {
						enabled: false
					}
				}
			}, {
				type: 'line',
				enableMouseTracking: false,
				lineWidth: 1,
				yAxis: 0,
				name: '',
				data: _main.tra.Chart.crossdata
			}],

			colors: ["rgb(223,222,88)", "rgb(45, 170, 230)", "rgb(32, 150, 216)", "rgb(32, 96, 161)"],
			symbols: ['circle', 'circle', 'circle', 'circle', 'circle']
		}, function (chart) {
			// on complete
			_main.tra.Chart.syncChart = chart;

			_main.tra.Chart.highLabel = chart.renderer.label('<div></div>', 0, 0, 'rect', 0, 0, true).css({
				color: '#F00',
				fontSize: _main.tra.Chart.label_font_size
			}).attr({
				fill: 'rgba(0, 0, 0, 0.7)'
			}).add().toFront();

			_main.tra.Chart.lowLabel = chart.renderer.label('<div></div>', 0, 0, 'rect', 0, 0, true).css({
				color: '#53AB35',
				fontSize: _main.tra.Chart.label_font_size
			}).attr({
				fill: 'rgba(0, 0, 0, 0.7)'
			}).add().toFront();

			_main.tra.Chart.redrawHighLowLabel();

			//vertical line
			for (var i in _main.tra.Chart.newlines) {
				_main.tra.Chart.newlines[i].destroy();
			}
			_main.tra.Chart.newlines = [];

			var sync_key = [];
			for (var i in _main.tra.Chart.syncChart.xAxis[0].ticks) {
				var j = 0;
				for (j = 0; j < sync_key.length; j++) {
					if (parseInt(sync_key[j]) > parseInt(i)) {
						sync_key.splice(j, 0, i);
						break;
					}
				}
				if (j >= sync_key.length) {
					sync_key[sync_key.length] = i;
				}
			}

			for (var i = 0; i < sync_key.length - 1; i++) {
				var draw_d = _main.tra.Chart.syncChart.xAxis[0].ticks[sync_key[i]].gridLine.d.split(" ");

				var ndex_draw_d = _main.tra.Chart.syncChart.xAxis[0].ticks[sync_key[i + 1]].gridLine.d.split(" ");
				for (var j = 1; j < draw_d.length; j += 3) {
					draw_d[j] = (parseFloat(draw_d[j]) + parseFloat(ndex_draw_d[j])) / 2;
				}

				var new_line = _main.tra.Chart.syncChart.renderer.path(draw_d).attr({
					stroke: '#555555',
					'stroke-width': 1,
					zIndex: 0,
					dashstyle: 'dash'
				}).add();

				_main.tra.Chart.newlines[_main.tra.Chart.newlines.length] = new_line;
			}
		});
		_main.tra.Page.reFlowChart();
	},

	newlines: [],

	createData: function createData(data_array, data_name) {
		if (_main.tra.current_item != data_name) {
			return;
		}

		// 先讀取走勢圖資料長度 開盤到收盤
		var open_date_time = "";
		var close_date_time = "";
		var open_state = "";
		var reference_data = 0;

		for (var i = 0; i < _main.tra.available.available_product['data'].length; i++) {
			if (_main.tra.available.available_product['data'][i]['product_id'] == _main.tra.current_item) {
				open_date_time = new Date(_main.tra.available.available_product['data'][i]['open_date_time']).getTime();
				close_date_time = new Date(_main.tra.available.available_product['data'][i]['close_date_time']).getTime();
				open_state = _main.tra.available.available_product['data'][i]['state'];
				reference_data = _main.tra.available.available_product['data'][i]['yesterday_close_price'];
				_main.tra.Chart.highest_data = _main.tra.APIConfigSet.now_data[_main.tra.current_item][11];
				_main.tra.Chart.lowest_data = _main.tra.APIConfigSet.now_data[_main.tra.current_item][12];
				//tra.Chart.highest_data = tra.available.available_product['data'][i]['highest_price'];
				//tra.Chart.lowest_data = tra.available.available_product['data'][i]['lowest_price'];
			}
		}

		//初始化 目前最新的資料
		_main.tra.Chart.data = [];
		_main.tra.Chart.q_data = [];

		var history_data = [];
		if (data_array["history"] != null) {
			history_data = data_array["history"].split(",");
		}

		var the_date_time, the_chart_value;

		//日期 時間、值、量、時間差、值差、量....
		if (history_data.length > 1) {
			the_date_time = new Date(history_data[0]).getTime();
			the_chart_value = parseInt(history_data[1]);

			if (_main.tra.current_item == "TXF" || _main.tra.current_item == "EXF" || _main.tra.current_item == "FXF") {
				_main.tra.Chart.data.push([the_date_time, reference_data]);
			} else {
				_main.tra.Chart.data.push([the_date_time, the_chart_value]);
			}
			_main.tra.Chart.q_data.push([the_date_time, 0]);

			for (var i = 3; i < history_data.length - 1; i += 3) {
				var chart_date_time = the_date_time + parseInt(history_data[i]) * 60000;

				the_chart_value += parseInt(history_data[i + 1]);
				//僅把開盤時間內的資料補上

				if (parseInt(history_data[i]) > 0) {
					if (_main.tra.current_item == "TXF" || _main.tra.current_item == "EXF" || _main.tra.current_item == "FXF" || _main.tra.current_item == "TSLQ") {
						var x = chart_date_time / 60000;
						var minutes = x % 60;
						x = parseInt(chart_date_time / 3600000);
						var hours = x % 24 + 8;
						var confirm_time = parseInt(hours * 60 + minutes);
						if (confirm_time > 825) {
							continue;
						}
					}
					_main.tra.Chart.data.push([chart_date_time, the_chart_value]);
					_main.tra.Chart.q_data.push([chart_date_time, parseInt(history_data[i + 2])]);
				}
			}
		}

		//若有資料更新最新資料
		if (_main.tra.Chart.data.length > 0) {
			_main.tra.Chart.crossdata = [[open_date_time, reference_data], [close_date_time, reference_data]];
		} else {
			_main.tra.Chart.crossdata = [[0, 0]];
		}

		_main.tra.Chart.init();
	},

	queryChart: function queryChart(name) {
		_main.tra.Chart.clearChart();

		_main.tra.current_item = name;

		//註冊
		_main.tra.API.send("x:" + name);

		//註冊5檔
		//tra.API.send("h:" + name);

		//走勢圖使用1分K線資料，最多追朔到前兩天資料 (因國外期貨有跨天，以及今天可能是假日)
		_main.tra.API.getTechLine([name, "minone", 1, "chart"]);
		//For k chart
		// tra.API.getTechLine(name, "minfive", 2, "kline");
	}
};

_main.tra.MiniChart = {
	createdNum: 0,
	minivChart: {},
	init: function init(data, x_min, x_max, reference_data, data_name) {
		// 先刪除，新增新的
		$('<div class="mini-chart" style="height:26px;width:118px;background-color: rgba(122, 255, 255, 0.0);margin-left:1px;">').appendTo('.item-' + data_name + ' .mini_chart').highcharts({
			chart: {
				backgroundColor: 'rgba(255, 255, 255, 0.0)',
				margin: [0, 0, 0, 0], // Keep all charts left aligned
				spacing: [0, 0, 0, 0],
				zoomType: null
			},
			title: {
				text: ''
			},
			xAxis: {
				min: x_min,
				max: x_max,
				visible: false,
				crosshair: false,
				type: 'datetime',
				gridLineWidth: 0,
				minorGridLineWidth: 0
			},
			yAxis: {
				floor: 1,
				startOnTick: false,
				endOnTick: false,
				visible: false,
				gridLineWidth: 0,
				minorGridLineWidth: 0
			},
			legend: {
				enabled: false
			},
			tooltip: {
				enabled: false,
				followPointer: false
			},
			marker: {
				enabled: false
			},
			plotOptions: {
				line: {
					marker: {
						enabled: false
					},
					states: {
						hover: {
							enabled: false
						}
					}
				}
			},

			series: [{
				type: 'line',
				yAxis: 0,
				name: '價格',
				data: data,
				shadow: false,
				color: "#E61E19",
				negativeColor: "#53AB35",
				threshold: reference_data,
				lineWidth: 1,
				enableMouseTracking: false
			}],

			colors: ["rgb(32, 150, 216)", "rgb(32, 96, 161)"],

			global: {
				useUTC: false
			}
		}, function (chart) {
			// on complete
			_main.tra.MiniChart.minivChart[data_name] = chart;
		});
	},

	createData: function createData(data_array, data_name) {
		// 先讀取走勢圖資料長度 開盤到收盤
		var open_date_time = 0;
		var close_date_time = 0;
		var open_state = "";
		var reference_data = 0;

		for (var i = 0; i < _main.tra.available.available_product['data'].length; i++) {
			if (_main.tra.available.available_product['data'][i]['product_id'] == data_name) {
				//open_date_time = new Date(available_product['data'][i]['open_date_time']).getTime();
				close_date_time = new Date(_main.tra.available.available_product['data'][i]['close_date_time']).getTime();
				open_state = _main.tra.available.available_product['data'][i]['state'];
				reference_data = _main.tra.available.available_product['data'][i]['yesterday_close_price'];
			}
		}

		//初始化 目前最新的資料
		_main.tra.APIConfigSet.now_data[data_name][9] = [];
		var history_data = data_array["history"].split(",");
		var the_date_time, the_chart_value;

		//日期 時間、值、量、時間差、值差、量....
		if (history_data.length > 1) {
			the_date_time = new Date(history_data[0]).getTime();
			open_date_time = the_date_time;
			the_chart_value = parseInt(history_data[1]);

			if (_main.tra.current_item == "TXF" || _main.tra.current_item == "EXF" || _main.tra.current_item == "FXF") {
				_main.tra.APIConfigSet.now_data[data_name][9].push([the_date_time, reference_data]);
			} else {
				_main.tra.APIConfigSet.now_data[data_name][9].push([the_date_time, the_chart_value]);
			}

			for (var i = 3; i < history_data.length - 1; i += 3) {
				var chart_date_time = the_date_time + parseInt(history_data[i]) * 60000;

				the_chart_value += parseInt(history_data[i + 1]);
				//僅把開盤時間內的資料補上

				if (parseInt(history_data[i]) > 0) {
					_main.tra.APIConfigSet.now_data[data_name][9].push([chart_date_time, the_chart_value]);
				}
			}
		}

		_main.tra.MiniChart.init(_main.tra.APIConfigSet.now_data[data_name][9], open_date_time, close_date_time, reference_data, data_name);
	},
	queryChart: function queryChart(name) {
		if (_main.tra.MiniChart.minivChart.hasOwnProperty(name)) {
			_main.tra.MiniChart.minivChart[name].destroy();
		}
		$('.item-' + name).find(".mini-chart").remove();
		if (name == "TXF" || name == "FXF" || name == "EXF" || name == "HSI") {
			_main.tra.API.getTechLine([name, "minone", 1, "mini_chart"]);
		} else {
			_main.tra.API.getTechLine([name, "minone", 2, "mini_chart"]);
		}
	}
};

_main.tra.OrderAPI = {
	init: function init() {
		_main.tra.OrderAPI.doSubmitWebSocket();
	},
	doSubmitWebSocket: function doSubmitWebSocket() {
		submit_websocket = new WebSocket(submit_url);
		submit_websocket.onopen = function (e) {
			_main.tra.OrderAPI.onSubmitOpen(e);
		};
		submit_websocket.onmessage = function (e) {
			_main.tra.OrderAPI.onSubmitMessage(e);
		};
		submit_websocket.onclose = function (e) {
			_main.tra.OrderAPI.onSubmitClose(e);
		};
	},
	onSubmitOpen: function onSubmitOpen(event) {
		_main.tra.OrderAPI.submitSend("a:" + _main.tra.User.user_id + "," + _main.tra.User.token + "," + _main.tra.ConfigSet.ORDERAPI_CLIENT);
		_main.tra.OrderAPI.getAll();
	},
	onSubmitMessage: function onSubmitMessage(event) {
		var res = [];
		var event_type = "z";
		if (typeof event.data === "string") {
			event_type = event.data.substring(0, 1);
			if (event.data.length > 1) {
				res = event.data.substring(2).split(",");
			}
		}

		switch (event_type) {
			case "c":
				//下單回傳結果 下單錯誤編號、錯誤訊息、成功之後單的編號
				var submitArray = JSON.parse(event.data.substring(2));
				if (submitArray["Code"] > 0) {
					//更新結果
					_main.tra.OrderAPI.getAll();
					if (!$("input[name=order_without_comfirm]").prop("checked")) {
						//tra.Alert("處理中")
					}
					try {
						$("#confirm_order_modal").modal("hide");
					} catch (e) {}
				} else {
					_main.tra.Alert(submitArray["ErrorMsg"]);
					_main.tra.OrderAPI.getAll();
				}
				break;

			case "d":
				//掛單成功
				//var submitArray= JSON.parse(event.data.substring(2));
				if (!$("input[name=order_without_comfirm]").prop("checked")) {
					_main.tra.Alert("掛單成功");
				}
				//更新結果
				_main.tra.OrderAPI.getAll();
				break;

			case "i":
				//成交回報
				var submitArray = JSON.parse(event.data.substring(2));
				_main.tra.playSound("order_success.mp3");
				$(".user-money, .user-money-float").text((0, _main.formatNumber)(submitArray["UserMoney"]));
				$(".userinfo-todaymoney").text((0, _main.formatNumber)(submitArray["TodayMoney"]));
				if (submitArray["HaveMessage"] == 1) {
					_main.tra.API.Alarm.get();
				}
				if (!$("input[name=order_without_comfirm]").prop("checked") || submitArray["HaveMessage"] == 1) {
					_main.tra.SucessBuy({ name: submitArray["Name"], price: submitArray["OrderPrice"], num: submitArray["Quantity"], buysell: submitArray["BuyOrSell"], id: submitArray["Serial"], stopwin: submitArray["StopWin"], stoploss: submitArray["StopLoss"] });
				}
				_main.tra.OrderAPI.getAll();
				_main.tra.API.User.delayGetInfo();
				break;

			case "o":
				_main.tra.stopAllProccess();
				break;

			case "v":
				setTimeout(function () {
					location.reload();
				}, 2000);
				break;

			case "z":
				//其它事件 (utf轉)

				var fr = new FileReader();
				fr.onload = function (e) {

					var b_type = new Uint8Array(e.target.result);
					switch (b_type[0]) {
						case 114:
							//c 交易完成
							//tra.Page.loginOut("您已在其他地方登入");
							break;
						default:
							break;
					}
				};
				fr.readAsArrayBuffer(event.data);
				break;
			default:
				break;
		}
	},
	onSubmitClose: function onSubmitClose(event) {
		setTimeout(function () {
			//開啟連線
			_main.tra.OrderAPI.doSubmitWebSocket();
		}, 5000);
	},
	submit: function submit(buy_or_sell) {
		var submit_type;
		if ($(".order-block input[name=use_stock_price]").prop("checked")) {
			submit_type = "0";
		} else if ($(".order-block input[name=use_close_price]").prop("checked")) {
			submit_type = "2";
		} else {
			submit_type = "1";
		}

		var submit_cmd = "s:" + _main.tra.User.user_id + "," + buy_or_sell + "," + $(".order-block input[name=use_quantity]").val() + "," + $(".order-block select[name=order_item_list]").val() + "," + $("input[name=use_take_profit_point]").val() + "," + $("input[name=use_stop_loss_point]").val() + "," + $(".order-block input[name=use_price]").val() + "," + submit_type + "," + _main.tra.User.token;
		//s送出單
		_main.tra.OrderAPI.submitSend(submit_cmd + "," + _main.tra.ConfigSet.ORDERAPI_CLIENT);
		if (_main.tra.ConfigSet.ORDERAPI_CLIENT == 0) {
			$("#confirm_order_modal").modal("hide");
		}
	},
	edit_submit: function edit_submit(edit_type, serial, id) {
		switch (edit_type) {
			//刪
			case "0":
				var submit_cmd = "e:" + _main.tra.User.user_id + ",0," + id + ",0,0,0," + edit_type + "," + serial + "," + _main.tra.User.token;
				break;
			//停利
			case "1":
				var submit_cmd = "e:" + _main.tra.User.user_id + ",0," + id + "," + $("input[name=take_profit_point]").val() + "," + $("input[name=stop_loss_point]").val() + ",0," + edit_type + "," + serial + "," + _main.tra.User.token;
				break;
			//數量、價格
			case "2":
				var submit_cmd = "e:" + _main.tra.User.user_id + "," + $("input[name=update_order_quantity]").val() + "," + id + ",0,0," + $("input[name=update_order_orderprice]").val() + "," + edit_type + "," + serial + "," + _main.tra.User.token;
				break;
			//停損
			case "3":
				var submit_cmd = "e:" + _main.tra.User.user_id + ",0," + id + "," + $("input[name=take_profit_point]").val() + "," + $("input[name=stop_loss_point]").val() + ",0," + edit_type + "," + serial + "," + _main.tra.User.token;
				break;
			//倒限利
			case "5":
				var submit_cmd = "e:" + _main.tra.User.user_id + ",0," + id + "," + $("input[name=invert_profit_point]").val() + "," + $("input[name=stop_loss_point]").val() + ",0," + edit_type + "," + serial + "," + _main.tra.User.token;
			//限價改市價
			case "6":
				var submit_cmd = "e:" + _main.tra.User.user_id + ",0," + id + "," + $("input[name=invert_profit_point]").val() + "," + $("input[name=stop_loss_point]").val() + ",0," + edit_type + "," + serial + "," + _main.tra.User.token;
				break;
		}
		//var submit_cmd = "e:" + $("#edit_user_id").val() + "," + $("#edit_num").val()  + "," + $("#edit_cm_id").val()  + "," + $("#edit_stop_win").val()  + "," + $("#edit_stop_loss").val() + "," + $("#edit_submit_point").val()  + "," + $("#edit_type").val() + "," + $("#edit_id").val() + "," + $("#edit_token").val();
		//送出單
		_main.tra.OrderAPI.submitSend(submit_cmd + "," + _main.tra.ConfigSet.ORDERAPI_CLIENT);
	},
	cover: function cover(serial, id) {
		var submit_cmd = "t:" + _main.tra.User.user_id + "," + serial + "," + _main.tra.User.token + "," + _main.tra.ConfigSet.ORDERAPI_CLIENT + "," + id;
		//t送出單
		_main.tra.OrderAPI.submitSend(submit_cmd + "," + _main.tra.ConfigSet.ORDERAPI_CLIENT);
	},
	submitSend: function submitSend(message) {
		submit_websocket.send(message);
	},
	setCloseCoverAll: function setCloseCoverAll(item, close_cover, no_confirm) {
		$.ajax({
			url: "/api/set_close_cover_all",
			type: "POST",
			data: {
				Token: _main.tra.User.token,
				UserID: _main.tra.User.user_id,
				SetCloseCover: close_cover,
				SetCloseCommodity: item,
				SetSubmitNotConfirm: no_confirm
			},
			dataType: "json"
		}).done(function (res) {
			_main.tra.API.User.getInfo();
			_main.tra.OrderAPI.getAll();
		});
	},
	getMoneyList: function getMoneyList(start_date, end_date, day) {
		var data = {
			"Token": _main.tra.User.token,
			"UserID": _main.tra.User.user_id
		};
		if (start_date == "" && end_date == "") {
			data["DaySelect"] = day;
		} else {
			data["StartDate"] = start_date;
			data["EndDate"] = end_date;
			data["DaySelect"] = day;
		}
		$.ajax({
			url: "/api/query_moneylist",
			type: "POST",
			data: data
		}).done(function (res) {
			//res = JSON.parse(res);
			_main.tra.Order.render.Money(res["MoneyArray"]);
		});
	},
	getAll: function getAll() {

		$.ajax({
			url: "/api/query_orderlist",
			type: "POST",
			data: {
				"Token": _main.tra.User.token,
				"UserID": _main.tra.User.user_id
			}
		}).done(function (res) {
            //console.log('這是=',res);
			//res = JSON.parse(res);
			if (res["Code"] < 0) {
				alert(res["ErrorMsg"]);
				location.href = "logout.php";
				return;
			}
			_main.tra.Order.UncoveredArray = res["UncoveredArray"];
			_main.tra.Order.render.Order(res["OrderArray"]);
			_main.tra.Order.render.Covered(res["CoveredArray"]);
			_main.tra.Order.render.Uncovered(res["UncoveredArray"]);
			_main.tra.Order.render.Commodity(res["CommodityArray"]);
			if (_main.tra.ConfigSet.ORDERAPI_CLIENT == 1) {
				_main.tra.Order.render.Waiting(res["OrderArray"]);
			}
			_main.tra.calculateFloatMoney();
		});
		_main.tra.OrderAPI.getMoneyList("", "", "-7");
	},
	delayGetAll: function delayGetAll() {
		if (typeof TIMER_GET_ORDER_LIST !== "undefined") {
			clearTimeout(TIMER_GET_ORDER_LIST);
		}
		TIMER_GET_ORDER_LIST = setTimeout(function () {
			_main.tra.playSound("timerstart.mp3");
			_main.tra.OrderAPI.getAll();
		}, 2000);
	},
	getOrder: function getOrder(key) {
		$.ajax({
			url: "/api/query_orderlist",
			type: "POST",
			data: {
				"Token": _main.tra.User.token,
				"UserID": _main.tra.User.user_id
			}
		}).done(function (res) {
			res = JSON.parse(res);
			if (res["Code"] < 0) {
				_main.tra.Page.loginOut(res["ErrorMsg"]);
				return;
			}
			switch (key) {
				case "Order":
					_main.tra.Order.render.Order(res["OrderArray"]);
					break;
				case "Uncovered":
					_main.tra.Order.render.Uncovered(res["UncoveredArray"]);
					break;
				case "Covered":
					_main.tra.Order.render.Covered(res["CoveredArray"]);
					break;
				case "Waiting":
					_main.tra.Order.render.Waiting(res["OrderArray"]);
					break;
				case "Commodity":
					_main.tra.Order.render.Commodity(res["CommodityArray"]);
					break;
			}
		});
	}
};

_main.tra.API.Alarm = {
	get: function get() {
		$.ajax({
			url: "/api/query_alarmlist",
			type: "POST",
			data: {
				Token: _main.tra.User.token,
				UserID: _main.tra.User.user_id
			},
			dataType: "json"
		}).done(function (res) {
			if (_main.tra.ConfigSet.ORDERAPI_CLIENT == 0) {
				_main.tra.Alarm.render(res);
			}
		});
	},
	readAll: function readAll() {
		$.ajax({
			url: "/api/set_alarm_readall",
			type: "POST",
			data: {
				Token: _main.tra.User.token,
				UserID: _main.tra.User.user_id
			},
			dataType: "json"
		}).done(function (res) {
			//tra.Alert("全部標記為已讀");
		});
	}
};

_main.tra.API.BSSignal = {
	get: function get() {
		$.ajax({
			url: "/api/query_buysell_signal",
			type: "POST",
			data: {
				Token: _main.tra.User.token,
				UserID: _main.tra.User.user_id
			},
			dataType: "json"
		}).done(function (res) {
			if (_main.tra.ConfigSet.ORDERAPI_CLIENT == 0) {
				_main.tra.BSSignal.render(res);
			}
		});
	}
};

_main.tra.API.Rule = {
	get: function get() {
		$.ajax({
			url: "/api/query_rule",
			type: "POST",
			data: {
				Token: _main.tra.User.token,
				UserID: _main.tra.User.user_id
			},
			dataType: "json"
		}).done(function (res) {
			_main.tra.Rule.render(res);
		});
	}
};

_main.tra.API.Password = {
	set: function set() {
		$.ajax({
			url: "/api/set_password",
			type: "POST",
			data: {
				Token: _main.tra.User.token,
				UserID: _main.tra.User.user_id,
				OldPassword: $("input[name=old_password]").val(),
				NewPassword: $("input[name=new_password]").val()
			},
			dataType: "json"
		}).done(function (res) {
			if (res["Code"] > 0) {
				_main.tra.Alert("密碼變更成功");
			} else {
				_main.tra.Alert(res["ErrorMsg"]);
			}
			$("input[name=old_password], input[name=new_password], input[name=confirm_password]").val("");
		});
	}
};

_main.tra.API.Announce = {
	get: function get() {
		$.ajax({
			url: "/api/query_announce",
			type: "POST",
			data: {
				Token: _main.tra.User.token,
				UserID: _main.tra.User.user_id
			},
			dataType: "json"
		}).done(function (res) {
			_main.tra.Announce.render(res);
		});
	}
};

_main.tra.API.HistoryPrice = {
	get: function get(datetime, item_id) {
		$.ajax({
			url: "/api/query_com_history_data",
			type: "POST",
			data: {
				Token: _main.tra.User.token,
				UserID: _main.tra.User.user_id,
				queryTime: datetime,
				queryComId: item_id,
				queryLen: 3
			},
			dataType: "json"
		}).done(function (res) {
			_main.tra.HistoryPrice.render(res);
		});
	}
};

_main.tra.API.Custom = {
	get: function get(items) {
		$.ajax({
			url: "/api/query_usersavedata",
			type: "POST",
			data: {
                _token: "{{ csrf_token() }}",
				Token: _main.tra.User.token,
				UserID: _main.tra.User.user_id
			},
			dataType: "json"
		}).done(function (res) {
			_main.tra.Custom.render(items, res);
		});
	},
	set: function set(item_setting, col_setting) {
		$.ajax({
			url: "/api/set_usersavedata",
			type: "POST",
			data: {
                _token: "{{ csrf_token() }}",
				Token: _main.tra.User.token,
				UserID: _main.tra.User.user_id,
				UscommodityOn: JSON.stringify(item_setting["show"]),
				UscommodityOff: JSON.stringify(item_setting["hide"]),
				UstypeOn: JSON.stringify(col_setting["show"]),
				UstypeOff: JSON.stringify(col_setting["hide"])
			},
			dataType: "json"
		}).done(function (res) {});
	}
};

_main.tra.kChart = {
	syncChart: null,
	stateShow: false,
	nowExtreme: {
		min: 0,
		max: 0,
		dataMin: 0,
		dataMax: 0
	},
	crosshairX: null,
	labelY: null,
	mouseLabelY: null,
	mouseLabelX: null,
	mouseCrosshairX: null,
	userTooltip: null,
	toggleTen: false,
	setFuncInterval: null,
	//技術資料
	k_data: [],
	k_q_data: [],
	toggleTenButton: function toggleTenButton() {
		if (!_main.tra.kChart.toggleTen) {
			_main.tra.kChart.mouseCrosshairX.show();
			_main.tra.kChart.userTooltip.show();
			_main.tra.kChart.mouseLabelX.show();
			_main.tra.kChart.mouseLabelY.show();
		} else {
			_main.tra.kChart.mouseCrosshairX.hide();
			_main.tra.kChart.userTooltip.hide();
			_main.tra.kChart.mouseLabelX.hide();
			_main.tra.kChart.mouseLabelY.hide();
		}
		_main.tra.kChart.toggleTen = !_main.tra.kChart.toggleTen;
	},
	addChartCrosshairs: function addChartCrosshairs() {
		var chart = this;

		_main.tra.kChart.crosshairX = chart.renderer.path(['M', chart.plotLeft, 2, 'L', chart.plotLeft + chart.plotWidth, 2]).attr({
			stroke: 'red',
			'stroke-width': 1,
			zIndex: 5
		}).add().hide().toFront();

		_main.tra.kChart.mouseCrosshairX = chart.renderer.path(['M', chart.plotLeft, chart.plotTop - 50, 'L', chart.plotLeft + chart.plotWidth, chart.plotTop - 50]).attr({
			stroke: '#FFFFFF',
			'stroke-width': 1,
			zIndex: 5
		}).add().hide().toFront();

		_main.tra.kChart.labelY = chart.renderer.label('<div style="text-align:center;font-size:11px;width:36px;height:11px;line-height:11px;">62345</div>', 5, 50, 'callout', 520, 64, true).css({
			color: '#FFFFFF',
			fontSize: '11px'
		}).attr({
			fill: 'rgb(233, 0, 0)',
			zIndex: 5
		}).add().hide().toFront();

		_main.tra.kChart.userTooltip = chart.renderer.label('<div style="z-index:9999;"></div>', -50, -50, '', 0, 0, true).css({
			color: '#FFFFFF',
			fontSize: '14px'
		}).attr({
			fill: 'rgba(0, 0, 0, 0.7)',
			zIndex: 9999,
			borderColor: '#FFFF00',
			borderWidth: 1
		}).add().hide().toFront();

		_main.tra.kChart.mouseLabelY = chart.renderer.label('<div></div>', -50, -50, 'callout', 520, 64, true).css({
			color: '#000000',
			fontSize: '11px'
		}).attr({
			fill: 'rgb(211, 211, 211)',
			zIndex: 5
		}).add().hide().toFront();

		_main.tra.kChart.mouseLabelX = chart.renderer.label('<div></div>', -50, -50, 'callout', 520, 64, true).css({
			color: '#000000',
			fontSize: '11px'
		}).attr({
			fill: 'rgb(211, 211, 211)',
			zIndex: 5
		}).add().hide().toFront();

		if (_main.tra.kChart.toggleTen) {
			_main.tra.kChart.mouseCrosshairX.show();
			_main.tra.kChart.userTooltip.show();
			_main.tra.kChart.mouseLabelX.show();
			_main.tra.kChart.mouseLabelY.show();
		}

		var every_interval = 60000;
		if (_main.tra.TechIndex.Current == "minfive") {
			every_interval = 60000 * 5;
		} else if (_main.tra.TechIndex.Current == "minten") {
			every_interval = 60000 * 10;
		} else if (_main.tra.TechIndex.Current == "minfifteen") {
			every_interval = 60000 * 15;
		} else if (_main.tra.TechIndex.Current == "minthirty") {
			every_interval = 60000 * 30;
		} else if (_main.tra.TechIndex.Current == "day") {
			every_interval = 60000 * 30 * 2 * 24;
		} else if (_main.tra.TechIndex.Current == "month") {
			every_interval = 60000 * 30 * 2 * 24 * 30;
		}

		_main.tra.APIConfigSet.now_data[_main.tra.current_item][8] = false;
		_main.tra.kChart.setFuncInterval = function () {
			var the_now_data = _main.tra.APIConfigSet.now_data[_main.tra.current_item];
			if (_main.tra.APIConfigSet.now_data[_main.tra.current_item][13] == 2) {
				var k_data = _main.tra.kChart.k_data;
				if (the_now_data[7] != the_now_data[4] || the_now_data[0] % every_interval < the_now_data[6] % every_interval || !the_now_data[8]) {
					var _chart = _main.tra.kChart.syncChart;
					for (var i = 0; i < _chart.series.length - 1; i++) {
						var series = _chart.series[i];

						if (typeof _main.tra.kChart.nameColor[series.name].getnew === "undefined") {
							continue;
						}

						//如果有資料
						var newest_data_array = [];
						if (the_now_data[0] % every_interval < the_now_data[6] % every_interval) {
							_main.tra.kChart.nameColor[series.name].getnew(true);
							the_now_data[1] = the_now_data[4];
							the_now_data[2] = the_now_data[4];
							the_now_data[3] = the_now_data[4];
							the_now_data[5] = 0;
						}

						if (i > 0) {
							// tech line
							newest_data_array = _main.tra.kChart.nameColor[series.name].getnew(false);
						} else {
							//k line
							var report_update_data = the_now_data.slice(0);
							newest_data_array = [report_update_data];
						}

						for (var j = 0; j < newest_data_array.length; j++) {
							var newest_s_data = newest_data_array[j];
							var j_series = _chart.series[i + j];

							if (i == 0) {
								//first k line
								newest_s_data[0] += -1 * (the_now_data[0] % every_interval) + every_interval;
							}

							//分鐘線不刪掉
							if (k_data[k_data.length - 1][0] == newest_s_data[0]) {
								j_series.removePoint(k_data.length - 1, false, false, false);
								if (i == 0) {
									_main.tra.kChart.k_q_data.pop();
								}
							}

							if (i == 0) {
								_main.tra.kChart.k_q_data.push([newest_s_data[0], the_now_data[5]]);
							}

							j_series.addPoint(newest_s_data, false, false, false);
						}

						i += newest_data_array.length - 1;
					}

					_main.tra.kChart.syncChart.redraw(false);
				}
			}

			var points = chart.series[0].points;
			var temp_series = chart.series[0];
			if (temp_series.data[temp_series.data.length - 1] && points[points.length - 1].options && temp_series.data[temp_series.data.length - 1].x == points[points.length - 1].options.x) {
				_main.tra.kChart.crosshairX.show();
				_main.tra.kChart.crosshairX.translate(0, points[points.length - 1].plotClose + chart.plotTop);

				_main.tra.kChart.labelY.show();
				_main.tra.kChart.labelY.translate(8, points[points.length - 1].plotClose + chart.plotTop - _main.tra.kChart.labelY.height / 2);
				_main.tra.kChart.labelY.attr({
					text: '<div style="text-align:center;font-size:11px;width:36px;height:11px;line-height:11px;">' + the_now_data[4] + '</div>'
				});
			}

			for (var i in _main.tra.kChart.buySellIcons) {
				_main.tra.kChart.buySellIcons[i].destroy();
			}

			_main.tra.kChart.buySellIcons = [];
			_main.tra.kChart.refreshBuySellIcon();
		};
	},

	clearChart: function clearChart() {
		if (_main.tra.kChart.syncChart != null) {
			_main.tra.kChart.syncChart.destroy();
		}
		_main.tra.kChart.syncChart = null;

		$(".dragbar-kline").remove();
		$(".kchart_chart").remove();

		_main.tra.kChart.stateShow = false;
	},

	init: function init() {
		var _tech_yAxis_array$tec, _tech_yAxis_array$tec2, _tech_yAxis_array$tec3, _tech_yAxis_array$tec4, _tech_yAxis_array$tec5, _tech_yAxis_array$tec6, _tech_yAxis_array$tec7, _tech_yAxis_array$tec8, _tech_yAxis_array$tec9, _tech_yAxis_array$tec10, _tech_yAxis_array$tec11, _tech_yAxis_array$tec12, _tech_yAxis_array$tec13, _tech_yAxis_array$tec14, _tech_yAxis_array$tec15, _tech_yAxis_array$tec16, _tech_yAxis_array$tec17, _tech_yAxis_array$tec18, _tech_yAxis_array$tec19, _tech_yAxis_array$tec20, _tech_yAxis_array$tec21, _tech_yAxis_array$tec22, _tech_yAxis_array$tec23, _tech_yAxis_array$tec24, _tech_yAxis_array$tec25, _tech_yAxis_array$tec26, _tech_yAxis_array$tec27, _tech_yAxis_array$tec28, _tech_yAxis_array$tec29;

		var k_data = _main.tra.kChart.k_data;
		var k_q_data = _main.tra.kChart.k_q_data;
		var chart_height = 200;
		_main.tra.kChart.clearChart();
		_main.tra.kChart.stateShow = true;

		_main.tra.Processing.hide();

		if (_main.tra.AddNewOrCurrent.now_width > 0) {
			$('.min-header').hide();
			$('.max-header').show();
			$('.move-table').width(_main.tra.AddNewOrCurrent.now_width);
			$('.move-table').height(_main.tra.AddNewOrCurrent.now_height);
		}

		//版面A
		if ((_main.tra.ConfigSet.ORDERAPI_CLIENT == 1 || _main.tra.Custom.WebContent.get() == "A") && _main.tra.APIConfigSet.now_inline_or_outline == 0) {
			// 先chart 刪除，新增新的
			_main.tra.Chart.clearChart();
		}

		if (_main.tra.ConfigSet.ORDERAPI_CLIENT == 0) {
			if (_main.tra.APIConfigSet.now_inline_or_outline == 0) {
				//視窗內
				//Browser
				$(".chart-panel").show();
				chart_height = $(".item-block").height() - 86;
				$(".chart-container").height(chart_height);
			} else {
				chart_height = $(".move-table").height() - 30;
			}
		}

		var tech_setting = _main.tra.Custom.Tech.get();
		var second_enable = false;

		var total_sub_chart = 0;
		for (var i in tech_setting["tech_to"]) {

			if (tech_setting["tech_to"][i].length == 4 && tech_setting["tech_to"][i][3] == 1) {
				if (tech_setting["tech_to"][i][0].substring(0, 1) == "t" && !second_enable) {
					total_sub_chart++;
				}
			}
		}

		var percent_kline_setting = _main.tra.Custom.PercentKline.get();
		if (percent_kline_setting["percent_kline"].length == 0) {
			percent_kline_setting = {
				"percent_kline": [100]
			};
			_main.tra.Custom.PercentKline.set(percent_kline_setting);
		}

		if (percent_kline_setting["percent_kline"].length - 1 < total_sub_chart) {
			for (var i = percent_kline_setting["percent_kline"].length - 1; i < total_sub_chart; i++) {
				percent_kline_setting["percent_kline"].push(30);
			}

			var per_top = 0;
			for (var j = 0; j < percent_kline_setting["percent_kline"].length; j++) {
				per_top += percent_kline_setting["percent_kline"][j];
			}

			var add_per = 100 / per_top;
			for (var j = 0; j < percent_kline_setting["percent_kline"].length; j++) {
				percent_kline_setting["percent_kline"][j] *= add_per;
			}
		} else if (percent_kline_setting["percent_kline"].length - 1 > total_sub_chart) {

			var per_top = 0;
			for (var i = 0; i < total_sub_chart + 1; i++) {
				per_top += percent_kline_setting["percent_kline"][i];
			}

			var add_per = (100 - total_sub_chart) / per_top;
			for (var i = 0; i < total_sub_chart + 1; i++) {
				percent_kline_setting["percent_kline"][i] *= add_per;
			}

			var vt = percent_kline_setting["percent_kline"].length - 1;
			for (var i = total_sub_chart; i < vt; i++) {
				percent_kline_setting["percent_kline"].pop();
			}
		}
		_main.tra.Custom.PercentKline.set(percent_kline_setting);

		var second_tech_series = [{
			type: 'candlestick',
			yAxis: 0,
			name: 'K線',
			id: "price",
			data: k_data,
			shadow: true,
			color: {
				linearGradient: {
					x1: 0.3,
					x2: 1,
					y1: 0.3,
					y2: 1
				},
				stops: [[0, '#33FF33'], [1, '#009911']]
			},
			upColor: {
				linearGradient: {
					x1: 0.3,
					x2: 1,
					y1: 0.3,
					y2: 1
				},
				stops: [[0, '#FF3333'], [1, '#990011']]
			}
		}];
		_main.tra.kChart.nameColor["K線"] = {
			color: "#FFFFFF",
			getnew: function getnew() {}
		};

		var percent_i = 0;
		var percent_height = 0;

		//Prepare tech index
		var tech_yAxis_array = [{
			title: {
				text: ''
			},
			labels: {
				style: {
					fontSize: '14px',
					color: '#E0E0E3',
					fontWeight: 'normal',
					crop: false
				},
				x: -5
			},
			floor: 0,
			//gridLineColor: '#555555',
			//gridLineDashStyle: 'dash',
			gridLineWidth: 0,
			tickPixelInterval: 45,
			maxPadding: 0.1,
			minPadding: 0.1,
			minorGridLineColor: '#505053',

			tickColor: '#555555',
			tickWidth: 0,
			lineColor: '#555555',

			top: percent_height + "%",
			height: percent_kline_setting["percent_kline"][percent_i] + "%",
			startOnTick: false,
			endOnTick: true,
			opposite: false
		}];
		percent_height += percent_kline_setting["percent_kline"][percent_i++];

		var later_update = 0;
		var later_update_finish = 0;

		var sub_tech_line_count = 1;
		_main.tra.kChart.buySellType.enable = false;
		for (var i in tech_setting["tech_to"]) {

			if (tech_setting["tech_to"][i].length == 4 && tech_setting["tech_to"][i][3] == 1) {
				if (tech_setting["tech_to"][i][2].length > 2) {
					var the_row = tech_setting["tech_to"][i][2];
					if (the_row[the_row.length - 1][0] == 4 && the_row[the_row.length - 1][2] == 1) {
						_main.tra.kChart.buySellType.enable = true;
						_main.tra.kChart.buySellType.type = tech_setting["tech_to"][i][0];
						_main.tra.kChart.buySellType.ysel = sub_tech_line_count;
					}
				}

				switch (tech_setting["tech_to"][i][0]) {
					case "t_kd_line":
						second_tech_series = _main.tra.kChart.kdLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							gridLineWidth: 0,
							tickPixelInterval: 35,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec, "opposite", false), _defineProperty(_tech_yAxis_array$tec, "offset", 0), _tech_yAxis_array$tec);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_rsi_line":
						second_tech_series = _main.tra.kChart.rsiLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], (tech_setting["tech_to"][i][2][3][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][3][2], tech_setting["tech_to"][i][2][0][2], tech_setting["tech_to"][i][2][1][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec2 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec2, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec2, "opposite", false), _defineProperty(_tech_yAxis_array$tec2, "offset", 0), _tech_yAxis_array$tec2);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_macd_line":
						second_tech_series = _main.tra.kChart.macdLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][3][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][3][2], (tech_setting["tech_to"][i][2][4][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][4][2], (tech_setting["tech_to"][i][2][5][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][5][2], (tech_setting["tech_to"][i][2][6][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][6][2], tech_setting["tech_to"][i][2][0][2], tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][2][2], sub_tech_line_count);
						sub_tech_line_count += 2;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec3 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec3, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec3, "opposite", false), _defineProperty(_tech_yAxis_array$tec3, "offset", 0), _tech_yAxis_array$tec3);
						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec4 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec4, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec4, "opposite", true), _defineProperty(_tech_yAxis_array$tec4, "offset", 0), _tech_yAxis_array$tec4);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_dmi_line":

						second_tech_series = _main.tra.kChart.dmiLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], (tech_setting["tech_to"][i][2][3][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][3][2], tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec5 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec5, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec5, "opposite", false), _defineProperty(_tech_yAxis_array$tec5, "offset", 0), _tech_yAxis_array$tec5);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "m_averge_line1":
						second_tech_series = _main.tra.kChart.mvLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], "1");
						break;
					case "m_averge_line2":
						second_tech_series = _main.tra.kChart.mvLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], "2");
						break;
					case "m_averge_line3":
						second_tech_series = _main.tra.kChart.mvLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], "3");
						break;
					case "m_averge_line4":
						second_tech_series = _main.tra.kChart.mvLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], "4");
						break;
					case "m_averge_line5":
						second_tech_series = _main.tra.kChart.mvLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], "5");
						break;
					case "m_averge_line6":
						second_tech_series = _main.tra.kChart.mvLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], "6");
						break;
					case "m_sar_line":
						second_tech_series = _main.tra.kChart.sarLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2]);
						break;
					case "m_bollingerband_line":
						second_tech_series = _main.tra.kChart.bollingerbandLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], (tech_setting["tech_to"][i][2][3][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][3][2], tech_setting["tech_to"][i][2][0][2]);
						break;
					case "m_ichimoku_line":
						second_tech_series = _main.tra.kChart.ichimokuLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][3][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][3][2], (tech_setting["tech_to"][i][2][4][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][4][2], (tech_setting["tech_to"][i][2][5][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][5][2], (tech_setting["tech_to"][i][2][6][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][6][2], (tech_setting["tech_to"][i][2][7][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][7][2], tech_setting["tech_to"][i][2][0][2], tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][2][2]);
						break;
					case "t_bias_line":
						second_tech_series = _main.tra.kChart.biasLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec6 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec6, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec6, "opposite", false), _defineProperty(_tech_yAxis_array$tec6, "offset", 0), _tech_yAxis_array$tec6);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_obv_line":
						second_tech_series = _main.tra.kChart.obvLineFunc(second_tech_series, k_data, k_q_data, (tech_setting["tech_to"][i][2][0][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec7 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec7, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec7, "opposite", false), _defineProperty(_tech_yAxis_array$tec7, "offset", 0), _tech_yAxis_array$tec7);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_wr_line":
						second_tech_series = _main.tra.kChart.wrLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec8 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec8, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec8, "opposite", false), _defineProperty(_tech_yAxis_array$tec8, "offset", 0), _tech_yAxis_array$tec8);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_psy_line":
						second_tech_series = _main.tra.kChart.psyLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec9 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec9, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec9, "opposite", false), _defineProperty(_tech_yAxis_array$tec9, "offset", 0), _tech_yAxis_array$tec9);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_mtm_line":
						second_tech_series = _main.tra.kChart.mtmLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec10 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec10, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec10, "opposite", false), _defineProperty(_tech_yAxis_array$tec10, "offset", 0), _tech_yAxis_array$tec10);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_inoutad_line":
						second_tech_series = _main.tra.kChart.inoutadLineFunc(second_tech_series, k_data, k_q_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec11 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec11, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec11, "opposite", false), _defineProperty(_tech_yAxis_array$tec11, "offset", 0), _tech_yAxis_array$tec11);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_sooncci_line":
						second_tech_series = _main.tra.kChart.sooncciLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec12 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec12, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec12, "opposite", false), _defineProperty(_tech_yAxis_array$tec12, "offset", 0), _tech_yAxis_array$tec12);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_ar_line":
						second_tech_series = _main.tra.kChart.arLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec13 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec13, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec13, "opposite", false), _defineProperty(_tech_yAxis_array$tec13, "offset", 0), _tech_yAxis_array$tec13);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_br_line":
						second_tech_series = _main.tra.kChart.brLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec14 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec14, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec14, "opposite", false), _defineProperty(_tech_yAxis_array$tec14, "offset", 0), _tech_yAxis_array$tec14);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_vr_line":
						second_tech_series = _main.tra.kChart.vrLineFunc(second_tech_series, k_data, k_q_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec15 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec15, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec15, "opposite", false), _defineProperty(_tech_yAxis_array$tec15, "offset", 0), _tech_yAxis_array$tec15);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_mi_line":
						second_tech_series = _main.tra.kChart.miLineFunc(second_tech_series, k_data, (tech_setting["tech_to"][i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][1][2], (tech_setting["tech_to"][i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][2][2], (tech_setting["tech_to"][i][2][3][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][3][2], tech_setting["tech_to"][i][2][0][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec16 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec16, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec16, "opposite", false), _defineProperty(_tech_yAxis_array$tec16, "offset", 0), _tech_yAxis_array$tec16);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_volum_line":
						second_tech_series = _main.tra.kChart.volumLineFunc(second_tech_series, k_data, k_q_data, (tech_setting["tech_to"][i][2][3][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][3][2], (tech_setting["tech_to"][i][2][4][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][4][2], (tech_setting["tech_to"][i][2][5][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][5][2], (tech_setting["tech_to"][i][2][6][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][i][2][6][2], tech_setting["tech_to"][i][2][0][2], tech_setting["tech_to"][i][2][1][2], tech_setting["tech_to"][i][2][2][2], sub_tech_line_count);
						sub_tech_line_count++;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec17 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec17, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec17, "opposite", false), _defineProperty(_tech_yAxis_array$tec17, "offset", 0), _tech_yAxis_array$tec17);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];
						break;
					case "t_country_line":
						//額外讀取資料
						later_update_finish++;

						//data_type 0 = 台指、1=電子、2=金融、3=道瓊
						//data_sel 0 = 外資、1=投信、2=自營商
						var data = {
							"data_type": tech_setting["tech_to"][i][2][0][2],
							"Token": _main.tra.User.token,
							"UserID": _main.tra.User.user_id,
							"data_sel": 0,
							"SubCount": sub_tech_line_count,
							"query_i": i
						};

						sub_tech_line_count += 2;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec18 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec18, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec18, "opposite", false), _defineProperty(_tech_yAxis_array$tec18, "offset", 0), _tech_yAxis_array$tec18);
						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec19 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								formatter: function formatter() {
									return '';
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec19, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec19, "opposite", true), _defineProperty(_tech_yAxis_array$tec19, "offset", 0), _tech_yAxis_array$tec19);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];

						$.ajax({
							url: "/api/load_uncover_techd_ata",
							type: "POST",
							data: data
						}).done(function (res) {
							res = JSON.parse(res);
							var query_i = parseInt(res["query_i"]);
							second_tech_series = _main.tra.kChart.countryLineFunc(second_tech_series, res['Data'], (tech_setting["tech_to"][query_i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][1][2], (tech_setting["tech_to"][query_i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][2][2], k_data, tech_setting["tech_to"][query_i][2][0][3 + tech_setting["tech_to"][query_i][2][0][2]], "外資", parseInt(res['SubCount']));

							later_update++;

							if (later_update >= later_update_finish) {
								_main.tra.kChart.updateKLineChart(chart_height, tech_yAxis_array, second_tech_series);
							}
						});

						break;
					case "t_tosin_line":
						//額外讀取資料
						later_update_finish++;

						//data_type 0 = 台指、1=電子、2=金融、3=道瓊
						//data_sel 0 = 外資、1=投信、2=自營商
						var data = {
							"data_type": tech_setting["tech_to"][i][2][0][2],
							"Token": _main.tra.User.token,
							"UserID": _main.tra.User.user_id,
							"data_sel": 1,
							"SubCount": sub_tech_line_count,
							"query_i": i
						};
						sub_tech_line_count += 2;

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec20 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec20, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec20, "opposite", false), _defineProperty(_tech_yAxis_array$tec20, "offset", 0), _tech_yAxis_array$tec20);
						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec21 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								formatter: function formatter() {
									return '';
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec21, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec21, "opposite", true), _defineProperty(_tech_yAxis_array$tec21, "offset", 0), _tech_yAxis_array$tec21);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];

						$.ajax({
							url: "/api/load_uncover_techd_ata",
							type: "POST",
							data: data
						}).done(function (res) {

							res = JSON.parse(res);
							var query_i = parseInt(res["query_i"]);

							second_tech_series = _main.tra.kChart.countryLineFunc(second_tech_series, res['Data'], (tech_setting["tech_to"][query_i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][1][2], (tech_setting["tech_to"][query_i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][2][2], k_data, tech_setting["tech_to"][query_i][2][0][3 + tech_setting["tech_to"][query_i][2][0][2]], "投信", parseInt(res['SubCount']));

							later_update++;

							if (later_update >= later_update_finish) {
								_main.tra.kChart.updateKLineChart(chart_height, tech_yAxis_array, second_tech_series);
							}
						});
						break;
					case "t_twtslq_delline":
						//額外讀取資料
						later_update_finish++;

						var data = {
							"data_type": _main.tra.TechIndex.Current,
							"Token": _main.tra.User.token,
							"UserID": _main.tra.User.user_id,
							"data_sel": _main.tra.TechIndex.CurrentDay,
							"SubCount": sub_tech_line_count,
							"query_i": i
						};
						sub_tech_line_count++;
						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec22 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec22, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec22, "opposite", false), _defineProperty(_tech_yAxis_array$tec22, "offset", 0), _tech_yAxis_array$tec22);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];

						$.ajax({
							url: "/api/load_del_techd_ata",
							type: "POST",
							data: data
						}).done(function (res) {

							res = JSON.parse(res);
							var query_i = parseInt(res["query_i"]);

							if (res['Data'].length > 0) {
								second_tech_series = _main.tra.kChart.twtslqDelLineFunc(second_tech_series, res['Data'], (tech_setting["tech_to"][query_i][2][0][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][0][2], (tech_setting["tech_to"][query_i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][1][2], k_data, parseInt(res['SubCount']));
							}
							later_update++;

							if (later_update >= later_update_finish) {
								_main.tra.kChart.updateKLineChart(chart_height, tech_yAxis_array, second_tech_series);
							}
						});
						break;
					case "t_twtslq_buysellline":
						//額外讀取資料
						later_update_finish++;

						var data = {
							"data_type": _main.tra.TechIndex.Current,
							"Token": _main.tra.User.token,
							"UserID": _main.tra.User.user_id,
							"data_sel": _main.tra.TechIndex.CurrentDay,
							"SubCount": sub_tech_line_count,
							"query_i": i
						};
						sub_tech_line_count++;
						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec23 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec23, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec23, "opposite", false), _defineProperty(_tech_yAxis_array$tec23, "offset", 0), _tech_yAxis_array$tec23);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];

						$.ajax({
							url: "/api/load_buysell_techd_ata",
							type: "POST",
							data: data
						}).done(function (res) {

							res = JSON.parse(res);
							var query_i = parseInt(res["query_i"]);

							if (res['Data'].length > 0) {
								second_tech_series = _main.tra.kChart.twtslqBuySellLineFunc(second_tech_series, res['Data'], (tech_setting["tech_to"][query_i][2][0][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][0][2], (tech_setting["tech_to"][query_i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][1][2], k_data, parseInt(res['SubCount']));
							}
							later_update++;

							if (later_update >= later_update_finish) {
								_main.tra.kChart.updateKLineChart(chart_height, tech_yAxis_array, second_tech_series);
							}
						});
						break;
					case "t_jiin_line":
						//額外讀取資料
						later_update_finish++;

						//data_type 0 = 台指、1=電子、2=金融、3=道瓊
						//data_sel 0 = 外資、1=投信、2=自營商
						var data = {
							"data_type": tech_setting["tech_to"][i][2][0][2],
							"Token": _main.tra.User.token,
							"UserID": _main.tra.User.user_id,
							"data_sel": 2,
							"SubCount": sub_tech_line_count,
							"query_i": i
						};
						sub_tech_line_count += 2;
						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec24 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec24, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec24, "opposite", false), _defineProperty(_tech_yAxis_array$tec24, "offset", 0), _tech_yAxis_array$tec24);

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec25 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								formatter: function formatter() {
									return '';
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec25, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec25, "opposite", true), _defineProperty(_tech_yAxis_array$tec25, "offset", 0), _tech_yAxis_array$tec25);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];

						$.ajax({
							url: "/api/load_uncover_techd_ata",
							type: "POST",
							data: data
						}).done(function (res) {

							res = JSON.parse(res);
							var query_i = parseInt(res["query_i"]);

							second_tech_series = _main.tra.kChart.countryLineFunc(second_tech_series, res['Data'], (tech_setting["tech_to"][query_i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][1][2], (tech_setting["tech_to"][query_i][2][2][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][2][2], k_data, tech_setting["tech_to"][query_i][2][0][3 + tech_setting["tech_to"][query_i][2][0][2]], "自營商", parseInt(res['SubCount']));

							later_update++;

							if (later_update >= later_update_finish) {
								_main.tra.kChart.updateKLineChart(chart_height, tech_yAxis_array, second_tech_series);
							}
						});
						break;
					case "t_firstfive_line":
						//額外讀取資料
						later_update_finish++;

						//data_type 0 = 前五、4=前十
						var data = {
							"data_type": 0,
							"Token": _main.tra.User.token,
							"UserID": _main.tra.User.user_id,
							"SubCount": sub_tech_line_count,
							"query_i": i
						};
						sub_tech_line_count += 2;
						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec26 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec26, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec26, "opposite", false), _defineProperty(_tech_yAxis_array$tec26, "offset", 0), _tech_yAxis_array$tec26);

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec27 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								formatter: function formatter() {
									return '';
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec27, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec27, "opposite", true), _defineProperty(_tech_yAxis_array$tec27, "offset", 0), _tech_yAxis_array$tec27);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];

						$.ajax({
							url: "/api/load_first_uncover_techd_ata",
							type: "POST",
							data: data
						}).done(function (res) {

							res = JSON.parse(res);
							var query_i = parseInt(res["query_i"]);

							second_tech_series = _main.tra.kChart.firtUncoverLineFunc(second_tech_series, res['Data'], (tech_setting["tech_to"][query_i][2][0][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][0][2], (tech_setting["tech_to"][query_i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][1][2], k_data, "前5", parseInt(res['SubCount']));

							later_update++;

							if (later_update >= later_update_finish) {
								_main.tra.kChart.updateKLineChart(chart_height, tech_yAxis_array, second_tech_series);
							}
						});
						break;
					case "t_firstten_line":
						//額外讀取資料
						later_update_finish++;

						//data_type 0 = 前五、4=前十
						var data = {
							"data_type": 4,
							"Token": _main.tra.User.token,
							"UserID": _main.tra.User.user_id,
							"SubCount": sub_tech_line_count,
							"query_i": i
						};
						sub_tech_line_count += 2;
						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec28 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								style: {
									fontSize: '14px',
									color: '#E0E0E3',
									fontWeight: 'normal',
									crop: false
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec28, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec28, "opposite", false), _defineProperty(_tech_yAxis_array$tec28, "offset", 0), _tech_yAxis_array$tec28);

						tech_yAxis_array[tech_yAxis_array.length] = (_tech_yAxis_array$tec29 = {
							title: {
								text: ''
							},
							gridLineColor: '#555555',
							gridLineDashStyle: 'dash',
							tickPixelInterval: 35,
							gridLineWidth: 0,
							maxPadding: 0,
							minPadding: 0,
							startOnTick: false,
							endOnTick: true,
							tickWidth: 0,

							labels: {
								formatter: function formatter() {
									return '';
								}
							},
							lineColor: '#555555',
							height: '100%',
							top: percent_height + 1.5 + "%"
						}, _defineProperty(_tech_yAxis_array$tec29, "height", percent_kline_setting["percent_kline"][percent_i] - 1.5 + "%"), _defineProperty(_tech_yAxis_array$tec29, "opposite", true), _defineProperty(_tech_yAxis_array$tec29, "offset", 0), _tech_yAxis_array$tec29);
						percent_height += percent_kline_setting["percent_kline"][percent_i++];

						$.ajax({
							url: "/api/load_first_uncover_techd_ata",
							type: "POST",
							data: data
						}).done(function (res) {

							res = JSON.parse(res);
							var query_i = parseInt(res["query_i"]);

							second_tech_series = _main.tra.kChart.firtUncoverLineFunc(second_tech_series, res['Data'], (tech_setting["tech_to"][query_i][2][0][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][0][2], (tech_setting["tech_to"][query_i][2][1][2].substring(0, 1) == "#" ? "" : "#") + tech_setting["tech_to"][query_i][2][1][2], k_data, "前10", parseInt(res['SubCount']));

							later_update++;

							if (later_update >= later_update_finish) {
								_main.tra.kChart.updateKLineChart(chart_height, tech_yAxis_array, second_tech_series);
							}
						});
						break;
					default:
						break;
				}
			}
		}

		if (later_update_finish == 0) {
			_main.tra.kChart.updateKLineChart(chart_height, tech_yAxis_array, second_tech_series);
		}
	},

	updateKLineChart: function updateKLineChart(chart_height, tech_yAxis_array, second_tech_series) {
		var k_data = _main.tra.kChart.k_data;
		var x_min = k_data.length >= 120 ? k_data[k_data.length - 120][0] : k_data[0][0];
		var x_max = k_data[k_data.length - 1][0];

		if (_main.tra.kChart.nowExtreme.userMin != void 0) {
			/*if (tra.kChart.nowExtreme.max != tra.kChart.nowExtreme.dataMax) {
   	x_min = tra.kChart.nowExtreme.min;
   	x_max = tra.kChart.nowExtreme.max;
   } else {
   	x_min = tra.kChart.nowExtreme.min;
   	x_max = new Date().getTime() + 600000;
   }*/
			x_min = _main.tra.kChart.nowExtreme.userMin;
			x_max = _main.tra.kChart.nowExtreme.userMax;
		}

		_main.tra.kChart.renderChart(chart_height, x_min, x_max, second_tech_series, tech_yAxis_array);

		_main.tra.kChart.dragKLine();
	},

	refreshBuySellIcon: function refreshBuySellIcon() {

		if (_main.tra.kChart.buySellType.enable) {
			switch (_main.tra.kChart.buySellType.type) {
				case "t_kd_line":
					var calPoints_k = _main.tra.kChart.syncChart.yAxis[_main.tra.kChart.buySellType.ysel].series[0].points;
					var calPoints_d = _main.tra.kChart.syncChart.yAxis[_main.tra.kChart.buySellType.ysel].series[1].points;

					var kd_downup = -1;
					for (var i = 0; i < calPoints_k.length; i++) {
						if (kd_downup == -1) {
							if (calPoints_k[i].y == calPoints_d[i].y) {
								continue;
							} else if (calPoints_k[i].y > calPoints_d[i].y) {
								kd_downup = 1;
								continue;
							} else if (calPoints_k[i].y < calPoints_d[i].y) {
								kd_downup = 0;
								continue;
							}
						}

						if (kd_downup == 0 && calPoints_k[i].y > calPoints_d[i].y) {
							kd_downup = 1;
							var object = _main.tra.kChart.syncChart.yAxis[0].series[0].points[i - 1];
							if (typeof object !== "undefined") {
								var buyIcons = _main.tra.kChart.syncChart.renderer.image('image/buy.png', _main.tra.kChart.syncChart.plotLeft + object.plotX - 10, _main.tra.kChart.syncChart.plotTop + object.yBottom + 9, 18, 26).attr({
									zIndex: 5
								}).add();
								_main.tra.kChart.buySellIcons.push(buyIcons);
							}
						} else if (kd_downup == 1 && calPoints_k[i].y < calPoints_d[i - 1].y) {
							kd_downup = 0;
							var object = _main.tra.kChart.syncChart.yAxis[0].series[0].points[i - 1];
							if (typeof object !== "undefined") {
								var sellIcons = _main.tra.kChart.syncChart.renderer.image('image/sell.png', _main.tra.kChart.syncChart.plotLeft + object.plotX - 9, _main.tra.kChart.syncChart.plotTop + object.plotY - 31, 16, 22).attr({
									zIndex: 5
								}).add();
								_main.tra.kChart.buySellIcons.push(sellIcons);
							}
						}
					}
					break;
				case "t_rsi_line":
					var calPoints_k = _main.tra.kChart.syncChart.yAxis[_main.tra.kChart.buySellType.ysel].series[0].points;
					var calPoints_d = _main.tra.kChart.syncChart.yAxis[_main.tra.kChart.buySellType.ysel].series[1].points;

					var kd_downup = -1;
					for (var i = 0; i < calPoints_k.length; i++) {
						if (kd_downup == -1) {
							if (calPoints_k[i].y == calPoints_d[i].y) {
								continue;
							} else if (calPoints_k[i].y > calPoints_d[i].y) {
								kd_downup = 1;
								continue;
							} else if (calPoints_k[i].y < calPoints_d[i].y) {
								kd_downup = 0;
								continue;
							}
						}

						if (kd_downup == 0 && calPoints_k[i].y > calPoints_d[i].y) {
							kd_downup = 1;
							var object = _main.tra.kChart.syncChart.yAxis[0].series[0].points[i - 1];
							if (typeof object !== "undefined") {
								var buyIcons = _main.tra.kChart.syncChart.renderer.image('image/buy.png', _main.tra.kChart.syncChart.plotLeft + object.plotX - 10, _main.tra.kChart.syncChart.plotTop + object.yBottom + 9, 18, 26).attr({
									zIndex: 5
								}).add();
								_main.tra.kChart.buySellIcons.push(buyIcons);
							}
						} else if (kd_downup == 1 && calPoints_k[i].y < calPoints_d[i - 1].y) {
							kd_downup = 0;
							var object = _main.tra.kChart.syncChart.yAxis[0].series[0].points[i - 1];
							if (typeof object !== "undefined") {
								var sellIcons = _main.tra.kChart.syncChart.renderer.image('image/sell.png', _main.tra.kChart.syncChart.plotLeft + object.plotX - 9, _main.tra.kChart.syncChart.plotTop + object.plotY - 31, 16, 22).attr({
									zIndex: 5
								}).add();
								_main.tra.kChart.buySellIcons.push(sellIcons);
							}
						}
					}
					break;
				case "t_macd_line":
					var calPoints_k = _main.tra.kChart.syncChart.yAxis[_main.tra.kChart.buySellType.ysel].series[0].points;
					var calPoints_d = _main.tra.kChart.syncChart.yAxis[_main.tra.kChart.buySellType.ysel].series[1].points;

					var kd_downup = -1;
					for (var i = 0; i < calPoints_k.length; i++) {
						if (kd_downup == -1) {
							if (calPoints_k[i].y == calPoints_d[i].y) {
								continue;
							} else if (calPoints_k[i].y > calPoints_d[i].y) {
								kd_downup = 1;
								continue;
							} else if (calPoints_k[i].y < calPoints_d[i].y) {
								kd_downup = 0;
								continue;
							}
						}

						if (kd_downup == 0 && calPoints_k[i].y > calPoints_d[i].y) {
							kd_downup = 1;
							var object = _main.tra.kChart.syncChart.yAxis[0].series[0].points[i - 1];
							if (typeof object !== "undefined") {
								var buyIcons = _main.tra.kChart.syncChart.renderer.image('image/buy.png', _main.tra.kChart.syncChart.plotLeft + object.plotX - 10, _main.tra.kChart.syncChart.plotTop + object.yBottom + 9, 18, 26).attr({
									zIndex: 5
								}).add();
								_main.tra.kChart.buySellIcons.push(buyIcons);
							}
						} else if (kd_downup == 1 && calPoints_k[i].y < calPoints_d[i - 1].y) {
							kd_downup = 0;
							var object = _main.tra.kChart.syncChart.yAxis[0].series[0].points[i - 1];
							if (typeof object !== "undefined") {
								var sellIcons = _main.tra.kChart.syncChart.renderer.image('image/sell.png', _main.tra.kChart.syncChart.plotLeft + object.plotX - 9, _main.tra.kChart.syncChart.plotTop + object.plotY - 31, 16, 22).attr({
									zIndex: 5
								}).add();
								_main.tra.kChart.buySellIcons.push(sellIcons);
							}
						}
					}
					break;
				case "t_dmi_line":
					var calPoints_k = _main.tra.kChart.syncChart.yAxis[_main.tra.kChart.buySellType.ysel].series[0].points;
					var calPoints_d = _main.tra.kChart.syncChart.yAxis[_main.tra.kChart.buySellType.ysel].series[1].points;
					var calPoints_adx = _main.tra.kChart.syncChart.yAxis[_main.tra.kChart.buySellType.ysel].series[2].points;

					var kd_downup = -1;
					for (var i = 0; i < calPoints_k.length; i++) {
						if (kd_downup == -1) {
							if (calPoints_k[i].y == calPoints_d[i].y) {
								continue;
							} else if (calPoints_k[i].y > calPoints_d[i].y) {
								kd_downup = 1;
								continue;
							} else if (calPoints_k[i].y < calPoints_d[i].y) {
								kd_downup = 0;
								continue;
							}
						}

						if (kd_downup == 0 && calPoints_k[i].y > calPoints_d[i].y) {
							kd_downup = 1;
							if (calPoints_adx[i].y >= 20) {
								var object = _main.tra.kChart.syncChart.yAxis[0].series[0].points[i - 1];
								if (typeof object !== "undefined") {
									var buyIcons = _main.tra.kChart.syncChart.renderer.image('image/buy.png', _main.tra.kChart.syncChart.plotLeft + object.plotX - 10, _main.tra.kChart.syncChart.plotTop + object.yBottom + 9, 18, 26).attr({
										zIndex: 5
									}).add();
									_main.tra.kChart.buySellIcons.push(buyIcons);
								}
							}
						} else if (kd_downup == 1 && calPoints_k[i].y < calPoints_d[i - 1].y) {
							kd_downup = 0;
							if (calPoints_adx[i].y >= 20) {
								var object = _main.tra.kChart.syncChart.yAxis[0].series[0].points[i - 1];
								if (typeof object !== "undefined") {
									var sellIcons = _main.tra.kChart.syncChart.renderer.image('image/sell.png', _main.tra.kChart.syncChart.plotLeft + object.plotX - 9, _main.tra.kChart.syncChart.plotTop + object.plotY - 31, 16, 22).attr({
										zIndex: 5
									}).add();
									_main.tra.kChart.buySellIcons.push(sellIcons);
								}
							}
						}
					}
					break;
				case "t_inoutad_line":
					var calPoints_k = _main.tra.kChart.syncChart.yAxis[_main.tra.kChart.buySellType.ysel].series[0].points;
					var calPoints_d = _main.tra.kChart.syncChart.yAxis[_main.tra.kChart.buySellType.ysel].series[1].points;

					var kd_downup = -1;
					for (var i = 0; i < calPoints_k.length; i++) {
						if (kd_downup == -1) {
							if (calPoints_k[i].y == calPoints_d[i].y) {
								continue;
							} else if (calPoints_k[i].y > calPoints_d[i].y) {
								kd_downup = 1;
								continue;
							} else if (calPoints_k[i].y < calPoints_d[i].y) {
								kd_downup = 0;
								continue;
							}
						}

						if (kd_downup == 0 && calPoints_k[i].y > calPoints_d[i].y) {
							kd_downup = 1;
							var object = _main.tra.kChart.syncChart.yAxis[0].series[0].points[i - 1];
							if (typeof object !== "undefined") {
								var buyIcons = _main.tra.kChart.syncChart.renderer.image('image/buy.png', _main.tra.kChart.syncChart.plotLeft + object.plotX - 10, _main.tra.kChart.syncChart.plotTop + object.yBottom + 9, 18, 26).attr({
									zIndex: 5
								}).add();
								_main.tra.kChart.buySellIcons.push(buyIcons);
							}
						} else if (kd_downup == 1 && calPoints_k[i].y < calPoints_d[i - 1].y) {
							kd_downup = 0;
							var object = _main.tra.kChart.syncChart.yAxis[0].series[0].points[i - 1];
							if (typeof object !== "undefined") {
								var sellIcons = _main.tra.kChart.syncChart.renderer.image('image/sell.png', _main.tra.kChart.syncChart.plotLeft + object.plotX - 9, _main.tra.kChart.syncChart.plotTop + object.plotY - 31, 16, 22).attr({
									zIndex: 5
								}).add();
								_main.tra.kChart.buySellIcons.push(sellIcons);
							}
						}
					}
					break;
			}
		}
	},

	buySellIcons: [],

	buySellType: {
		enable: false,
		type: 't_kd_line',
		ysel: 0
	},

	dragKLine: function dragKLine() {
		var object_name = '.kchart_chart';

		$(".dragbar-kline").remove();

		var percent_kline_setting = _main.tra.Custom.PercentKline.get();
		var allocate_top = 0;

		for (var i = 1; i < percent_kline_setting["percent_kline"].length; i++) {
			allocate_top += percent_kline_setting["percent_kline"][i - 1];

			$('<div class="dragbar-kline" tag="' + (i - 1) + '" style="top:' + (_main.tra.kChart.syncChart.plotHeight * (allocate_top + 0.75) / 100 + _main.tra.kChart.syncChart.plotTop) + "px" + ';"></div>').appendTo(object_name);
		}

		$(".dragbar-kline").mousedown(function (e) {
			_main.tra.draggerSet.dragging_kline_index = parseInt($(this).attr("tag"));

			e.preventDefault();

			_main.tra.draggerSet.dragging_kline = true;
			var object_name = '.kchart_chart';
			var main = $(object_name);
			var ghostbar = $('<div>', {
				id: 'ghostbar-kline',
				css: {
					width: _main.tra.kChart.syncChart.plotWidth,
					top: main.offset().top + main.height(),
					left: main.offset().left + _main.tra.kChart.syncChart.plotLeft
				}
			}).appendTo('body');

			$(document).mousemove(function (e) {
				ghostbar.css("top", e.pageY + 2);
			});
		});
	},

	/**
  * Load new data depending on the selected min and max
  */
	afterSetExtremes: function afterSetExtremes(e) {

		if (_main.tra.kChart.syncChart.xAxis[0].getExtremes().userMin != void 0) {
			_main.tra.kChart.nowExtreme = _main.tra.kChart.syncChart.xAxis[0].getExtremes();
		}
		if (_main.tra.kChart.nowExtreme.dataMax - _main.tra.kChart.nowExtreme.max < 60000) {
			_main.tra.kChart.nowExtreme.max = new Date().getTime() + 600000;
		}

		for (var i in _main.tra.kChart.buySellIcons) {
			_main.tra.kChart.buySellIcons[i].destroy();
		}

		var points = _main.tra.kChart.syncChart.series[0].points;
		var temp_series = _main.tra.kChart.syncChart.series[0];
		if (!(temp_series.data[temp_series.data.length - 1] && points[points.length - 1].options && temp_series.data[temp_series.data.length - 1].x == points[points.length - 1].options.x)) {
			_main.tra.kChart.crosshairX.hide();
			_main.tra.kChart.labelY.hide();
		} else {
			_main.tra.kChart.crosshairX.show();
			_main.tra.kChart.crosshairX.translate(0, points[points.length - 1].plotClose + _main.tra.kChart.syncChart.plotTop);
			_main.tra.kChart.labelY.show();
			_main.tra.kChart.labelY.translate(8, points[points.length - 1].plotClose + _main.tra.kChart.syncChart.plotTop - _main.tra.kChart.labelY.height / 2);
			_main.tra.kChart.labelY.attr({
				text: '<div style="text-align:center;font-size:11px;width:36px;height:11px;line-height:11px;">' + _main.tra.APIConfigSet.now_data[_main.tra.current_item][4] + '</div>'
			});
		}

		_main.tra.kChart.buySellIcons = [];

		for (var i in _main.tra.kChart.newlines) {
			_main.tra.kChart.newlines[i].destroy();
		}
		_main.tra.kChart.newlines = [];

		_main.tra.kChart.delayUpdateGridLine(0, 0, false);
	},

	delayUpdateGridLine: function (_delayUpdateGridLine) {
		function delayUpdateGridLine(_x, _x2, _x3) {
			return _delayUpdateGridLine.apply(this, arguments);
		}

		delayUpdateGridLine.toString = function () {
			return _delayUpdateGridLine.toString();
		};

		return delayUpdateGridLine;
	}(function (i, j, tryed) {
		setTimeout(function () {
			//horizen line
			for (; j < _main.tra.kChart.syncChart.yAxis.length - 1; j++) {
				if (_main.tra.kChart.syncChart.yAxis[j].opposite === false) {
					for (; i < _main.tra.kChart.syncChart.yAxis[j].ticks.length; i++) {
						if (!_main.tra.kChart.syncChart.yAxis[j].ticks[i].isLast) {
							if (!_main.tra.kChart.syncChart.yAxis[j].ticks[i].gridLine.d) {
								if (!tryed) {
									delayUpdateGridLine(i, j, true);
								}
								return;
							}

							var draw_d = _main.tra.kChart.syncChart.yAxis[j].ticks[i].gridLine.d.split(" ");

							if (draw_d[2] - 0.5 != _main.tra.kChart.syncChart.yAxis[j].top + _main.tra.kChart.syncChart.yAxis[j].height) {
								var new_line = _main.tra.kChart.syncChart.renderer.path([draw_d[0], _main.tra.kChart.syncChart.plotLeft, draw_d[2], draw_d[3], _main.tra.kChart.syncChart.plotLeft + _main.tra.kChart.syncChart.plotWidth, draw_d[5]]).attr({
									stroke: '#555555',
									'stroke-width': 1,
									zIndex: 0,
									dashstyle: 'dash'
								}).add();

								_main.tra.kChart.newlines[_main.tra.kChart.newlines.length] = new_line;
							}
						}
					}
				}
			}

			//vertical line
			var sync_key = [];
			for (var i in _main.tra.kChart.syncChart.xAxis[0].ticks) {
				var j = 0;
				for (j = 0; j < sync_key.length; j++) {
					if (parseInt(sync_key[j]) > parseInt(i)) {
						sync_key.splice(j, 0, i);
						break;
					}
				}
				if (j >= sync_key.length) {
					sync_key[sync_key.length] = i;
				}
			}

			//vertical line
			for (var i = 0; i < sync_key.length - 1; i++) {
				var draw_d = _main.tra.kChart.syncChart.xAxis[0].ticks[sync_key[i]].gridLine.d.split(" ");

				var ndex_draw_d = _main.tra.kChart.syncChart.xAxis[0].ticks[sync_key[i + 1]].gridLine.d.split(" ");
				for (var j = 1; j < draw_d.length; j += 3) {
					draw_d[j] = (parseFloat(draw_d[j]) + parseFloat(ndex_draw_d[j])) / 2;
				}

				var new_line = _main.tra.kChart.syncChart.renderer.path(draw_d).attr({
					stroke: '#555555',
					'stroke-width': 1,
					zIndex: 0,
					dashstyle: 'dash'
				}).add();

				_main.tra.kChart.newlines[_main.tra.kChart.newlines.length] = new_line;
			}

			_main.tra.kChart.refreshBuySellIcon();
		}, 100);
	}),

	renderChart: function renderChart(chart_height, x_min, x_max, tech_series, tech_yAxis) {
		var object_name = '.chart-container';
		if (_main.tra.APIConfigSet.now_inline_or_outline == 1) {
			object_name = '.move-table-content';
		}

		$('<div class="kchart_chart" style="height: ' + chart_height + 'px;position:relative;">').appendTo(object_name).highcharts({
			chart: {
				reflow: false,
				panning: true,
				backgroundColor: "rgb(28, 28, 28)",
				style: {
					fontFamily: "Signika, serif"
				},
				marginLeft: 50, // Keep all charts left aligned
				marginTop: 4,
				spacingRight: 15,
				marginBottom: 20,
				spacingBottom: 5,
				events: {
					load: _main.tra.kChart.addChartCrosshairs
				}
			},

			title: {
				text: ''
			},

			navigator: {
				enabled: true,
				height: 10,
				margin: 5,
				xAxis: {
					labels: {
						enabled: false
					},
					gridLineWidth: 0
				},
				series: {
					lineWidth: 0
				},
				maskFill: '#555555'
			},

			xAxis: {
				min: x_min,
				max: x_max,
				ordinal: true,
				crosshair: true,
				type: 'datetime',

				tickPixelInterval: 70,
				tickInterval: null,
				gridLineWidth: 1,
				gridLineColor: '#555555',
				gridLineDashStyle: 'dash',
				labels: {
					enabled: true,
					x: 16,
					y: 12,
					style: {
						color: "#DDDDDD"
					}
				},
				lineColor: '#555555',
				tickColor: '#555555',
				title: {
					style: {
						color: '#A0A0A3'
					}
				},
				tickWidth: 1,
				lineWidth: 0,

				events: {
					afterSetExtremes: _main.tra.kChart.afterSetExtremes
				}
			},
			yAxis: tech_yAxis,
			legend: {
				enabled: false
			},
			tooltip: {
				positioner: function positioner() {
					return {
						x: 48,
						y: -7 // align to title
					};
				},
				shared: false,
				split: false,
				borderWidth: 0,
				backgroundColor: 'none',
				headerFormat: '',
				shadow: false,
				useHTML: true,
				style: {
					fontSize: '14px'
				},
				formatter: function formatter() {
					var x = this.x,
					    chart = this.series.chart,
					    series = this.series.chart.series,
					    ret = '',
					    s;

					_main.tra.kChart.mouseCrosshairX.translate(0, this.series.yAxis.top + this.point.plotY + 50);

					_main.tra.kChart.mouseLabelY.translate(8, this.series.yAxis.top + this.point.plotY + chart.plotTop - _main.tra.kChart.mouseLabelY.height / 2);
					_main.tra.kChart.mouseLabelY.attr({
						text: '<div style="z-index:0;text-align:center;font-size:11px;width:36px;height:11px;line-height:11px;">' + this.y + '</div>'
					});

					_main.tra.kChart.mouseLabelX.translate(this.point.plotX - 16, chart.plotHeight + chart.plotTop);
					_main.tra.kChart.mouseLabelX.attr({
						text: '<div style="z-index:0;text-align:center;font-size:11px;width:110px;height:11px;line-height:11px;">' + Highcharts.dateFormat('%N/%m/%d %H:%M:%S', this.x) + '</div>'
					});

					var tooltip_array = [];
					var uesr_tooltip_array = [];
					tooltip_array.push([series[0].yAxis.top, ['<font style="display:block;float:left;" color="#FFFFFF">', Highcharts.dateFormat('%N/%m/%d %H:%M:%S', this.x), '&nbsp;&nbsp;</font>']]);

					var point_series_y = this.series.yAxis.top;
					if (point_series_y == series[0].yAxis.top) {
						uesr_tooltip_array.push('<font color="#FFFFFF">', Highcharts.dateFormat('%N/%m/%d %H:%M:%S', this.x), '</font><br>');
					}

					for (var i = 0; i < tech_series.length; i++) {
						s = series[i];
						$.each(s.points, function (key, p) {
							if (p.x >= x) {
								if (i > 0 && s.name != "成交量" || p.y != 0) {
									var title_name = s.name;
									var title_color = _main.tra.kChart.nameColor[s.name].color;
									var title_break = '';

									if (point_series_y == s.yAxis.top) {
										if (i == 0) {
											uesr_tooltip_array.push('<font color="', title_color, '">', '開:', p.open, '<br>高:', p.high, '<br>低:', p.low, '<br>收:', p.close, '<br>漲跌:', p.close - p.open, '</font><br>');
										} else {
											uesr_tooltip_array.push('<font color="', title_color, '">', title_name, ':', p.y, '</font><br>');
										}
									}

									if (i == 0) {
										title_name = '開:' + p.open + ' 高:' + p.high + ' 低:' + p.low + ' 收:' + p.close + ' 漲跌:' + (p.close - p.open);
										title_break = '<br>';
										tooltip_array[0][1].push('<font style="display:block;float:left;min-width:130px;" color="', title_color, '">', title_name, '</font>', title_break);
									} else {
										var j = 0;
										for (; j < tooltip_array.length; j++) {
											if (tooltip_array[j][0] == s.yAxis.top) {
												tooltip_array[j][1].push('<font style="display:block;float:left;min-width:130px;" color="', title_color, '">', title_name, ':', p.y, '</font>', title_break);
												break;
											}
										}

										if (j >= tooltip_array.length) {
											tooltip_array.push([s.yAxis.top, ['<font style="display:block;float:left;min-width:130px;" color="', title_color, '">', title_name, ':', p.y, '</font>', title_break]]);
										}
									}
								}
								return false;
							}
						});
					}

					for (var i = 0; i < tooltip_array.length; i++) {
						ret += '<div style="z-index:0;position:absolute;top:' + tooltip_array[i][0] + 'px;font-size:7px;width:700px;float:left;">' + tooltip_array[i][1].join('') + '</div>';
					}

					var user_ret = uesr_tooltip_array.join('');
					_main.tra.kChart.userTooltip.translate(this.point.plotX - _main.tra.kChart.userTooltip.width + 45, this.series.yAxis.top + this.point.plotY + chart.plotTop + 2);
					_main.tra.kChart.userTooltip.attr({
						text: '<div style="background:rgba(0, 0, 0, 0.7);position:absolute;z-index:9999;text-align:left;font-size:14px;padding:3px;border:1px solid;border-color:#aa0;">' + user_ret + '</div>'
					}).toFront();

					return ret;
				}
			},

			plotOptions: {
				series: {
					animation: false,
					borderWidth: 0,
					marker: {
						enabled: false,
						fillColor: '#FFFFFF',
						lineColor: 'rgb(32, 150, 216)',
						lineWidth: 2
					},
					states: {
						hover: {
							enabled: false
						}
					},
					dataLabels: {
						style: {
							fontSize: '14px',
							color: '#FFF',
							fontWeight: 'normal',
							textShadow: false
						},
						shadow: false,
						borderRadius: 5,
						zIndex: 9999,
						y: 15,
						x: -35
					},
					shadow: true
				},
				candlestick: {
					color: '#53AB35',
					lineColor: '#53AB35',
					upColor: '#E61E19',
					upLineColor: '#E61E19'
				}
			},

			series: tech_series,

			colors: ["rgb(45, 170, 230, 0)", "rgb(223,222,88)", "rgb(48, 191, 26)", "rgb(232, 168, 41)"],

			global: {
				useUTC: false
			}
		}, function (chart) {
			// on complete
			_main.tra.kChart.syncChart = chart;

			//horizen
			for (var j = 0; j < _main.tra.kChart.syncChart.yAxis.length - 1; j++) {
				if (_main.tra.kChart.syncChart.yAxis[j].opposite === false) {
					for (var i in _main.tra.kChart.syncChart.yAxis[j].ticks) {
						if (!_main.tra.kChart.syncChart.yAxis[j].ticks[i].isLast) {
							var draw_d = _main.tra.kChart.syncChart.yAxis[j].ticks[i].gridLine.d.split(" ");

							if (draw_d[2] - 0.5 != _main.tra.kChart.syncChart.yAxis[j].top + _main.tra.kChart.syncChart.yAxis[j].height) {
								var new_line = _main.tra.kChart.syncChart.renderer.path([draw_d[0], _main.tra.kChart.syncChart.plotLeft, draw_d[2], draw_d[3], _main.tra.kChart.syncChart.plotLeft + _main.tra.kChart.syncChart.plotWidth, draw_d[5]]).attr({
									stroke: '#555555',
									'stroke-width': 1,
									zIndex: 0,
									dashstyle: 'dash'
								}).add();

								_main.tra.kChart.newlines[_main.tra.kChart.newlines.length] = new_line;
							}
						}
					}
				}
			}

			var sync_key = [];
			for (var i in _main.tra.kChart.syncChart.xAxis[0].ticks) {
				var j = 0;
				for (j = 0; j < sync_key.length; j++) {
					if (parseInt(sync_key[j]) > parseInt(i)) {
						sync_key.splice(j, 0, i);
						break;
					}
				}
				if (j >= sync_key.length) {
					sync_key[sync_key.length] = i;
				}
			}

			//vertical line
			for (var i = 0; i < sync_key.length - 1; i++) {
				var draw_d = _main.tra.kChart.syncChart.xAxis[0].ticks[sync_key[i]].gridLine.d.split(" ");

				var ndex_draw_d = _main.tra.kChart.syncChart.xAxis[0].ticks[sync_key[i + 1]].gridLine.d.split(" ");
				for (var j = 1; j < draw_d.length; j += 3) {
					draw_d[j] = (parseFloat(draw_d[j]) + parseFloat(ndex_draw_d[j])) / 2;
				}

				var new_line = _main.tra.kChart.syncChart.renderer.path(draw_d).attr({
					stroke: '#555555',
					'stroke-width': 1,
					zIndex: 0,
					dashstyle: 'dash'
				}).add();

				_main.tra.kChart.newlines[_main.tra.kChart.newlines.length] = new_line;
			}

			chart.renderer.path(['M', chart.plotLeft, chart.plotTop, 'L', chart.plotLeft + chart.plotWidth, chart.plotTop]).attr({
				stroke: '#AAAAAA',
				'stroke-width': 1,
				zIndex: 0
			}).add();

			var percent_kline_setting = _main.tra.Custom.PercentKline.get();
			var percent_height = 0;
			for (var i = 0; i < percent_kline_setting["percent_kline"].length; i++) {
				if (i == 0) {
					chart.renderer.path(['M', chart.plotLeft, chart.plotTop + chart.plotHeight * percent_height / 100, 'L', chart.plotLeft, chart.plotTop + chart.plotHeight * (percent_height + percent_kline_setting["percent_kline"][i]) / 100]).attr({
						stroke: '#AAAAAA',
						'stroke-width': 1,
						zIndex: 0
					}).add().show();

					chart.renderer.path(['M', chart.plotLeft + chart.plotWidth, chart.plotTop + chart.plotHeight * percent_height / 100, 'L', chart.plotLeft + chart.plotWidth, chart.plotTop + chart.plotHeight * (percent_height + percent_kline_setting["percent_kline"][i]) / 100]).attr({
						stroke: '#AAAAAA',
						'stroke-width': 1,
						zIndex: 0
					}).add();
				} else {
					chart.renderer.path(['M', chart.plotLeft, chart.plotTop + chart.plotHeight * (percent_height + 1.5) / 100, 'L', chart.plotLeft, chart.plotTop + chart.plotHeight * (percent_height + percent_kline_setting["percent_kline"][i]) / 100]).attr({
						stroke: '#AAAAAA',
						'stroke-width': 1,
						zIndex: 0
					}).add().show();

					chart.renderer.path(['M', chart.plotLeft + chart.plotWidth, chart.plotTop + chart.plotHeight * (percent_height + 1.5) / 100, 'L', chart.plotLeft + chart.plotWidth, chart.plotTop + chart.plotHeight * (percent_height + percent_kline_setting["percent_kline"][i]) / 100]).attr({
						stroke: '#AAAAAA',
						'stroke-width': 1,
						zIndex: 0
					}).add();
				}

				percent_height += percent_kline_setting["percent_kline"][i];
				chart.renderer.path(['M', chart.plotLeft, chart.plotTop + chart.plotHeight * percent_height / 100, 'L', chart.plotLeft + chart.plotWidth, chart.plotTop + chart.plotHeight * percent_height / 100]).attr({
					stroke: '#AAAAAA',
					'stroke-width': 1,
					zIndex: 0
				}).add();

				if (i < percent_kline_setting["percent_kline"].length - 1) {
					chart.renderer.path(['M', chart.plotLeft, chart.plotTop + chart.plotHeight * (percent_height + 1) / 100, 'L', chart.plotLeft + chart.plotWidth, chart.plotTop + chart.plotHeight * (percent_height + 1.5) / 100]).attr({
						stroke: '#AAAAAA',
						'stroke-width': 1,
						zIndex: 0
					}).add();
				}
			}

			for (var i in _main.tra.kChart.buySellIcons) {
				_main.tra.kChart.buySellIcons[i].destroy();
			}

			_main.tra.kChart.buySellIcons = [];
			_main.tra.kChart.refreshBuySellIcon();
		});
	},

	newlines: [],

	createData: function createData(data_array, data_name) {
		if (_main.tra.current_item != data_name) {
			return;
		}
		// 先讀取走勢圖資料長度 開盤到收盤
		var open_date_time = "";
		var close_date_time = "";
		for (var i = 0; i < _main.tra.available.available_product['data'].length; i++) {
			if (_main.tra.available.available_product['data'][i]['product_id'] == _main.tra.current_item) {
				open_date_time = new Date(_main.tra.available.available_product['data'][i]['open_date_time']).getTime();
				close_date_time = new Date(_main.tra.available.available_product['data'][i]['close_date_time']).getTime();
			}
		}

		//初始化 目前最新的資料
		_main.tra.kChart.k_data = [];
		_main.tra.kChart.k_q_data = [];

		var history_data = data_array["history"].split(";");
		var history_item, the_date_time;
		//日期，時間，開，高，低，收，量；日期，時間，開，高，低，收，量；．．．．
		if (history_data.length > 1) {
			for (var i in history_data) {
				history_item = history_data[i].split(",");
				if (history_item.length < 6 || parseInt(history_item[2]) <= 0 || parseInt(history_item[3]) <= 0 || parseInt(history_item[4]) <= 0 || parseInt(history_item[5]) <= 0) {
					continue;
				}

				the_date_time = new Date(history_item[0] + " " + history_item[1]).getTime();
				if (_main.tra.current_item == "TXF" || _main.tra.current_item == "EXF" || _main.tra.current_item == "FXF" || _main.tra.current_item == "TSLQ") {
					var t = history_item[1].split(":");
					if (parseInt(t[0]) * 60 + parseInt(t[1]) > 825) {
						continue;
					}
				}

				if (isNaN(the_date_time)) {
					continue;
				}
				if (_main.tra.kChart.k_data.length > 0) {
					if (the_date_time <= _main.tra.kChart.k_data[_main.tra.kChart.k_data.length - 1][0]) {
						continue;
					}
				}
				_main.tra.kChart.k_q_data[_main.tra.kChart.k_q_data.length] = [the_date_time, parseInt(history_item[6])];
				_main.tra.kChart.k_data[_main.tra.kChart.k_data.length] = [the_date_time, parseInt(history_item[2]), parseInt(history_item[3]), parseInt(history_item[4]), parseInt(history_item[5])];
			}
		}
		_main.tra.kChart.init();
	},

	nameColor: {},

	kdLineFunc: function kdLineFunc(input_series, input_data, k_color, d_color, input_weak, sub_tech_line_i) {
		var k_series = [];
		var d_series = [];
		var kd_k = 50;
		var kd_d = 50;

		var i = 0;

		for (; i < input_weak - 1; i++) {
			k_series[k_series.length] = [input_data[i][0], 50];
			d_series[d_series.length] = [input_data[i][0], 50];
		}

		for (; i >= 0 && i < input_data.length; i++) {
			var rsi_top = input_data[i][2];
			var rsi_bottom = input_data[i][3];
			var rsi_close = input_data[i][4];
			for (var j = i - 1; j >= i - input_weak + 1; j--) {
				if (input_data[j][2] > rsi_top) {
					rsi_top = input_data[j][2];
				}

				if (input_data[j][3] < rsi_bottom) {
					rsi_bottom = input_data[j][3];
				}
			}
			var rsi = rsi_top - rsi_bottom == 0 ? 50 : (rsi_close - rsi_bottom) / (rsi_top - rsi_bottom) * 100;
			kd_k = kd_k * 2 / 3 + rsi / 3;
			kd_d = kd_d * 2 / 3 + kd_k / 3;

			var num = parseInt(kd_k * 10) / 10;
			k_series[k_series.length] = [input_data[i][0], num];
			num = parseInt(kd_d * 10) / 10;
			d_series[d_series.length] = [input_data[i][0], num];
		}

		input_series.push({
			color: k_color,
			type: 'line',
			id: "K(" + input_weak + ")",
			name: "K(" + input_weak + ")",
			data: k_series,
			lineWidth: 1,
			yAxis: sub_tech_line_i
		});

		input_series.push({
			color: d_color,
			type: 'line',
			id: "D(" + input_weak + ")",
			name: "D(" + input_weak + ")",
			data: d_series,
			lineWidth: 1,
			yAxis: sub_tech_line_i
		});

		_main.tra.kChart.nameColor["K(" + input_weak + ")"] = {
			color: k_color,
			kd_k: kd_k,
			kd_d: kd_d,
			input_data: input_data,
			getnew: function getnew(updated) {

				var i = input_data.length - 1;
				if (updated) {
					i--;
				}

				var kd_k = this.kd_k;
				var kd_d = this.kd_d;

				if (i >= input_weak - 1) {
					var rsi_top = input_data[i][2];
					var rsi_bottom = input_data[i][3];
					var rsi_close = input_data[i][4];

					for (var j = i - 1; j >= i - input_weak + 1; j--) {
						if (input_data[j][2] > rsi_top) {
							rsi_top = input_data[j][2];
						}

						if (input_data[j][3] < rsi_bottom) {
							rsi_bottom = input_data[j][3];
						}
					}
					var rsi = rsi_top - rsi_bottom == 0 ? 50 : (rsi_close - rsi_bottom) / (rsi_top - rsi_bottom) * 100;
					kd_k = kd_k * 2 / 3 + rsi / 3;
					kd_d = kd_d * 2 / 3 + kd_k / 3;
				}

				if (updated) {
					this.kd_k = kd_k;
					this.kd_d = kd_d;
				}

				var num = parseInt(kd_k * 10) / 10;
				var return_array = [];
				return_array.push([input_data[i][0], num]);
				num = parseInt(kd_d * 10) / 10;
				return_array.push([input_data[i][0], num]);

				return return_array;
			}
		};
		_main.tra.kChart.nameColor["D(" + input_weak + ")"] = {
			color: d_color
		};

		return input_series;
	},

	rsiLineFunc: function rsiLineFunc(input_series, input_data, rsi_color1, rsi_color2, input_rsi_weak1, input_rsi_weak2, sub_tech_line_i) {

		var rsi1_series = [];
		var rsi2_series = [];
		var ris1_value = 50;
		var ris2_value = 50;

		for (var i = 0; i < input_rsi_weak1 - 1; i++) {
			rsi1_series[rsi1_series.length] = [input_data[i][0], 50];
		}

		for (var i = 0; i < input_rsi_weak2 - 1; i++) {
			rsi2_series[rsi2_series.length] = [input_data[i][0], 50];
		}

		for (var i = input_rsi_weak1 - 1; i >= 0 && i < input_data.length; i++) {
			var rsi_up = 0;
			var rsi_down = 0;
			for (var j = i - 1; j >= i - input_rsi_weak1 + 1; j--) {
				if (input_data[j][4] - input_data[j][1] > 0) {
					rsi_up += input_data[j][4] - input_data[j][1];
				} else {
					rsi_down += input_data[j][4] - input_data[j][1];
				}
			}
			var rsi = 50;
			if (rsi_up - rsi_down > 0) {
				rsi = rsi_up / (rsi_up - rsi_down) * 100;
			}

			var num = parseInt(rsi * 10) / 10;
			rsi1_series[rsi1_series.length] = [input_data[i][0], num];
		}

		for (var i = input_rsi_weak2 - 1; i >= 0 && i < input_data.length; i++) {
			var rsi_up = 0;
			var rsi_down = 0;
			for (var j = i - 1; j >= i - input_rsi_weak2 + 1; j--) {
				if (input_data[j][4] - input_data[j][1] > 0) {
					rsi_up += input_data[j][4] - input_data[j][1];
				} else {
					rsi_down += input_data[j][4] - input_data[j][1];
				}
			}
			var rsi = 50;
			if (rsi_up - rsi_down > 0) {
				rsi = rsi_up / (rsi_up - rsi_down) * 100;
			}

			var num = parseInt(rsi * 10) / 10;
			rsi2_series[rsi2_series.length] = [input_data[i][0], num];
		}

		input_series.push({
			color: rsi_color1,
			type: 'line',
			id: "rsi1(" + input_rsi_weak1 + ")",
			name: "rsi1(" + input_rsi_weak1 + ")",
			data: rsi1_series,
			lineWidth: 1,
			yAxis: sub_tech_line_i
		});

		input_series.push({
			color: rsi_color2,
			type: 'line',
			id: "rsi2(" + input_rsi_weak2 + ")",
			name: "rsi2(" + input_rsi_weak2 + ")",
			data: rsi2_series,
			lineWidth: 1,
			yAxis: sub_tech_line_i
		});

		_main.tra.kChart.nameColor["rsi1(" + input_rsi_weak1 + ")"] = {
			color: rsi_color1,
			input_rsi_weak1: input_rsi_weak1,
			input_rsi_weak2: input_rsi_weak2,
			input_data: input_data,
			getnew: function getnew(updated) {

				var i = input_data.length - 1;
				if (updated) {
					i--;
				}

				var return_array = [];
				if (i >= input_rsi_weak1 - 1) {

					var rsi_up = 0;
					var rsi_down = 0;
					for (var j = i - 1; j >= i - input_rsi_weak1 + 1; j--) {
						if (input_data[j][4] - input_data[j][1] > 0) {
							rsi_up += input_data[j][4] - input_data[j][1];
						} else {
							rsi_down += input_data[j][4] - input_data[j][1];
						}
					}
					var rsi = 50;
					if (rsi_up - rsi_down > 0) {
						rsi = rsi_up / (rsi_up - rsi_down) * 100;
					}

					var num = parseInt(rsi * 10) / 10;
					return_array.push([input_data[i][0], num]);
				} else {
					return_array.push([input_data[i][0], 50]);
				}

				if (i >= input_rsi_weak2 - 1) {

					var rsi_up = 0;
					var rsi_down = 0;
					for (var j = i - 1; j >= i - input_rsi_weak2 + 1; j--) {
						if (input_data[j][4] - input_data[j][1] > 0) {
							rsi_up += input_data[j][4] - input_data[j][1];
						} else {
							rsi_down += input_data[j][4] - input_data[j][1];
						}
					}
					var rsi = 50;
					if (rsi_up - rsi_down > 0) {
						rsi = rsi_up / (rsi_up - rsi_down) * 100;
					}

					var num = parseInt(rsi * 10) / 10;
					return_array.push([input_data[i][0], num]);
				} else {
					return_array.push([input_data[i][0], 50]);
				}

				return return_array;
			}
		};
		_main.tra.kChart.nameColor["rsi2(" + input_rsi_weak2 + ")"] = {
			color: rsi_color2
		};
		return input_series;
	},

	macdLineFunc: function macdLineFunc(input_series, input_data, dif_color, macd_color, oscup_color, oscdown_color, fastline, slowline, simpleline, sub_tech_line_i) {
		var _input_series$push;

		var dif_series = [];
		var macd_series = [];
		var osc_series = [];

		var ema_series1;
		var ema_series2;
		var ema_y1 = 2 / (fastline + 1);
		var ema_y2 = 2 / (slowline + 1);
		var macd_y = 2 / (simpleline + 1);
		var macd_value;

		if (input_data.length > 0) {
			ema_series1 = input_data[0][4];
			ema_series2 = input_data[0][4];
			dif_series[dif_series.length] = [input_data[0][0], ema_series1 - ema_series2];

			for (var i = 1; i < input_data.length; i++) {
				ema_series1 = (input_data[i][4] - ema_series1) * ema_y1 + ema_series1;
				ema_series2 = (input_data[i][4] - ema_series2) * ema_y2 + ema_series2;
				dif_series[dif_series.length] = [input_data[i][0], ema_series1 - ema_series2];
			}

			macd_series[macd_series.length] = [input_data[0][0], dif_series[0][1]];
			for (var i = 1; i < dif_series.length; i++) {
				macd_series[macd_series.length] = [input_data[i][0], (dif_series[i][1] - macd_series[macd_series.length - 1][1]) * macd_y + macd_series[macd_series.length - 1][1]];
			}

			for (var i = 0; i < dif_series.length; i++) {
				osc_series[osc_series.length] = [input_data[i][0], dif_series[i][1] - macd_series[i][1]];
			}
		}

		macd_value = macd_series[macd_series.length - 1][1];

		for (var i = 0; i < dif_series.length; i++) {
			dif_series[i][1] = parseInt(dif_series[i][1] * 10) / 10;
			macd_series[i][1] = parseInt(macd_series[i][1] * 10) / 10;
			osc_series[i][1] = parseInt(osc_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: dif_color,
			type: 'line',
			id: "dif(" + fastline + "," + slowline + ")",
			name: "dif(" + fastline + "," + slowline + ")",
			data: dif_series,
			lineWidth: 1,
			yAxis: sub_tech_line_i
		});

		input_series.push({
			color: macd_color,
			type: 'line',
			id: "macd(" + simpleline + ")",
			name: "macd(" + simpleline + ")",
			data: macd_series,
			lineWidth: 1,
			yAxis: sub_tech_line_i
		});

		input_series.push((_input_series$push = {
			type: 'column',
			//enableMouseTracking: false,
			name: '量',
			id: "osc"
		}, _defineProperty(_input_series$push, "name", "osc"), _defineProperty(_input_series$push, "data", osc_series), _defineProperty(_input_series$push, "color", oscup_color), _defineProperty(_input_series$push, "negativeColor", oscdown_color), _defineProperty(_input_series$push, "threshold", 0), _defineProperty(_input_series$push, "shadow", true), _defineProperty(_input_series$push, "yAxis", sub_tech_line_i + 1), _input_series$push));

		_main.tra.kChart.nameColor["dif(" + fastline + "," + slowline + ")"] = {
			color: dif_color,
			macd_y: macd_y,
			input_data: input_data,
			ema_series1: ema_series1,
			ema_series2: ema_series2,
			ema_y1: ema_y1,
			ema_y2: ema_y2,
			macd_value: macd_value,
			getnew: function getnew(updated) {

				var i = input_data.length - 1;
				if (updated) {
					i--;
				}
				var macd_value = this.macd_value;
				var ema_series1 = this.ema_series1;
				var ema_series2 = this.ema_series2;

				var return_array = [];
				if (i >= 0) {
					ema_series1 = (input_data[i][4] - ema_series1) * ema_y1 + ema_series1;
					ema_series2 = (input_data[i][4] - ema_series2) * ema_y2 + ema_series2;
					var dif_value = ema_series1 - ema_series2;
					macd_value = (dif_value - macd_value) * macd_y + macd_value;
					var osc_value = dif_value - macd_value;

					var num = parseInt(dif_value * 10) / 10;
					return_array.push([input_data[i][0], num]);
					num = parseInt(macd_value * 10) / 10;
					return_array.push([input_data[i][0], num]);
					num = parseInt(osc_value * 10) / 10;
					return_array.push([input_data[i][0], num]);
				}

				if (updated) {
					this.macd_value = macd_value;
					this.ema_series1 = ema_series1;
					this.ema_series2 = ema_series2;
				}

				return return_array;
			}
		};
		_main.tra.kChart.nameColor["macd(" + simpleline + ")"] = {
			color: macd_color
		};
		_main.tra.kChart.nameColor["osc"] = {
			color: oscup_color
		};

		return input_series;
	},

	dmiLineFunc: function dmiLineFunc(input_series, input_data, dmion_color, dmioff_color, adx_color, weakline, sub_tech_line_i) {

		var dmion_series = [];
		var dmioff_series = [];
		var tr_series = [];

		var avdmion_series = [];
		var avdmioff_series = [];
		var avtr_series = [];

		var dion_series = [];
		var dioff_series = [];
		var dx_series = [];

		var adx_series = [];

		dmion_series[0] = 0;
		dmioff_series[0] = 0;

		for (var i = 1; i < input_data.length; i++) {
			if (input_data[i][2] > input_data[i - 1][2]) {
				dmion_series[dmion_series.length] = input_data[i][2] - input_data[i - 1][2];
			} else {
				dmion_series[dmion_series.length] = 0;
			}
		}

		for (var i = 1; i < input_data.length; i++) {
			if (input_data[i - 1][3] > input_data[i][3]) {
				dmioff_series[dmioff_series.length] = input_data[i - 1][3] - input_data[i][3];
			} else {
				dmioff_series[dmioff_series.length] = 0;
			}
		}

		for (var i = 1; i < input_data.length; i++) {
			if (dmion_series[i] > dmioff_series[i]) {
				dmioff_series[i] = 0;
			} else if (dmion_series[i] < dmioff_series[i]) {
				dmion_series[i] = 0;
			} else {
				dmioff_series[i] = 0;
				dmion_series[i] = 0;
			}
		}

		tr_series[0] = input_data[0][2] - input_data[0][3];
		for (var i = 1; i < input_data.length; i++) {
			tr_series[tr_series.length] = Math.max(input_data[i][2] - input_data[i][3], Math.abs(input_data[i][2] - input_data[i - 1][4]), Math.abs(input_data[i][3] - input_data[i - 1][4]));
		}

		avdmion_series[0] = dmion_series[0];
		avdmioff_series[0] = dmioff_series[0];
		avtr_series[0] = tr_series[0];

		for (var i = 1; i < input_data.length; i++) {
			var av = weakline;
			if (i + 1 < av) {
				av = i + 1;
			}

			avdmion_series[avdmion_series.length] = avdmion_series[i - 1] + (dmion_series[i] - avdmion_series[i - 1]) / av;
			avdmioff_series[avdmioff_series.length] = avdmioff_series[i - 1] + (dmioff_series[i] - avdmioff_series[i - 1]) / av;
			avtr_series[avtr_series.length] = avtr_series[i - 1] + (tr_series[i] - avtr_series[i - 1]) / av;
		}

		for (var i = 0; i < input_data.length; i++) {
			dion_series[dion_series.length] = [input_data[i][0], avdmion_series[i] / avtr_series[i] * 100];
			dioff_series[dioff_series.length] = [input_data[i][0], avdmioff_series[i] / avtr_series[i] * 100];

			if (dion_series[i][1] + dioff_series[i][1] > 0) {
				dx_series[dx_series.length] = Math.abs(dion_series[i][1] - dioff_series[i][1]) / (dion_series[i][1] + dioff_series[i][1]) * 100;
			} else {
				dx_series[dx_series.length] = 0;
			}
		}

		adx_series[0] = [input_data[0][0], dx_series[0]];
		for (var i = 1; i < input_data.length; i++) {
			var av = weakline;
			if (i + 1 < av) {
				av = i + 1;
			}

			adx_series[adx_series.length] = [input_data[i][0], adx_series[i - 1][1] + (dx_series[i] - adx_series[i - 1][1]) / av];
		}

		for (var i = 0; i < input_data.length; i++) {
			dion_series[i][1] = parseInt(dion_series[i][1] * 10) / 10;
			dioff_series[i][1] = parseInt(dioff_series[i][1] * 10) / 10;
			adx_series[i][1] = parseInt(adx_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: dmion_color,
			type: 'line',
			id: "DMIO(" + weakline + ")",
			name: "+DMI(" + weakline + ")",
			data: dion_series,
			lineWidth: 1,
			yAxis: sub_tech_line_i
		});

		input_series.push({
			color: dmioff_color,
			type: 'line',
			id: "DMIF(" + weakline + ")",
			name: "-DMI(" + weakline + ")",
			data: dioff_series,
			lineWidth: 1,
			yAxis: sub_tech_line_i
		});

		input_series.push({
			color: adx_color,
			type: 'line',
			id: "ADX(" + weakline + ")",
			name: "ADX(" + weakline + ")",
			data: adx_series,
			lineWidth: 1,
			yAxis: sub_tech_line_i
		});

		_main.tra.kChart.nameColor["+DMI(" + weakline + ")"] = {
			color: dmioff_color,
			weakline: weakline,
			input_data: input_data,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var return_array = [];

				var dmion_series = [];
				var dmioff_series = [];
				var tr_series = [];

				var avdmion_series = [];
				var avdmioff_series = [];
				var avtr_series = [];

				var dion_series = [];
				var dioff_series = [];
				var dx_series = [];

				var adx_series = [];

				dmion_series[0] = 0;
				dmioff_series[0] = 0;

				for (var i = 1; i < input_data.length; i++) {
					if (input_data[i][2] > input_data[i - 1][2]) {
						dmion_series[dmion_series.length] = input_data[i][2] - input_data[i - 1][2];
					} else {
						dmion_series[dmion_series.length] = 0;
					}
				}

				for (var i = 1; i < input_data.length; i++) {
					if (input_data[i - 1][3] > input_data[i][3]) {
						dmioff_series[dmioff_series.length] = input_data[i - 1][3] - input_data[i][3];
					} else {
						dmioff_series[dmioff_series.length] = 0;
					}
				}

				for (var i = 1; i < input_data.length; i++) {
					if (dmion_series[i] > dmioff_series[i]) {
						dmioff_series[i] = 0;
					} else if (dmion_series[i] < dmioff_series[i]) {
						dmion_series[i] = 0;
					} else {
						dmioff_series[i] = 0;
						dmion_series[i] = 0;
					}
				}

				tr_series[0] = input_data[0][2] - input_data[0][3];
				for (var i = 1; i < input_data.length; i++) {
					tr_series[tr_series.length] = Math.max(input_data[i][2] - input_data[i][3], Math.abs(input_data[i][2] - input_data[i - 1][4]), Math.abs(input_data[i][3] - input_data[i - 1][4]));
				}

				avdmion_series[0] = dmion_series[0];
				avdmioff_series[0] = dmioff_series[0];
				avtr_series[0] = tr_series[0];

				for (var i = 1; i < input_data.length; i++) {
					var av = weakline;
					if (i + 1 < av) {
						av = i + 1;
					}

					avdmion_series[avdmion_series.length] = avdmion_series[i - 1] + (dmion_series[i] - avdmion_series[i - 1]) / av;
					avdmioff_series[avdmioff_series.length] = avdmioff_series[i - 1] + (dmioff_series[i] - avdmioff_series[i - 1]) / av;
					avtr_series[avtr_series.length] = avtr_series[i - 1] + (tr_series[i] - avtr_series[i - 1]) / av;
				}

				for (var i = 0; i < input_data.length; i++) {
					dion_series[dion_series.length] = [input_data[i][0], avdmion_series[i] / avtr_series[i] * 100];
					dioff_series[dioff_series.length] = [input_data[i][0], avdmioff_series[i] / avtr_series[i] * 100];

					if (dion_series[i][1] + dioff_series[i][1] > 0) {
						dx_series[dx_series.length] = Math.abs(dion_series[i][1] - dioff_series[i][1]) / (dion_series[i][1] + dioff_series[i][1]) * 100;
					} else {
						dx_series[dx_series.length] = 0;
					}
				}

				adx_series[0] = [input_data[0][0], dx_series[0]];
				for (var i = 1; i < input_data.length; i++) {
					var av = weakline;
					if (i + 1 < av) {
						av = i + 1;
					}

					adx_series[adx_series.length] = [input_data[i][0], adx_series[i - 1][1] + (dx_series[i] - adx_series[i - 1][1]) / av];
				}

				for (var i = 0; i < input_data.length; i++) {
					dion_series[i][1] = parseInt(dion_series[i][1] * 10) / 10;
					dioff_series[i][1] = parseInt(dioff_series[i][1] * 10) / 10;
					adx_series[i][1] = parseInt(adx_series[i][1] * 10) / 10;
				}

				var num = parseInt(dion_series[dion_series.length - 1][1] * 10) / 10;
				return_array.push([input_data[input_data.length - 1][0], num]);
				num = parseInt(dioff_series[dioff_series.length - 1][1] * 10) / 10;
				return_array.push([input_data[input_data.length - 1][0], num]);
				num = parseInt(adx_series[adx_series.length - 1][1] * 10) / 10;
				return_array.push([input_data[input_data.length - 1][0], num]);

				return return_array;
			}
		};
		_main.tra.kChart.nameColor["-DMI(" + weakline + ")"] = {
			color: dmion_color
		};
		_main.tra.kChart.nameColor["ADX(" + weakline + ")"] = {
			color: adx_color
		};

		return input_series;
	},

	firtUncoverLineFunc: function firtUncoverLineFunc(input_series, input_data, b_color, s_color, time_data, the_title_name, sub_tech_line_i) {

		var b_series = [];
		var s_series = [];
		var t_series = [];

		//日期，時間，開，高，低，收，量；日期，時間，開，高，低，收，量；．．．．
		if (input_data.length >= 1) {
			for (var i = input_data.length - 1; i >= 0; i--) {
				if (time_data.length - 1 - (input_data.length - 1 - i) >= 0) {
					b_series.splice(0, 0, [time_data[time_data.length - 1 - (input_data.length - 1 - i)][0], parseInt(input_data[i][1])]);
					s_series.splice(0, 0, [time_data[time_data.length - 1 - (input_data.length - 1 - i)][0], parseInt(input_data[i][2])]);
					t_series.splice(0, 0, [time_data[time_data.length - 1 - (input_data.length - 1 - i)][0], parseInt(input_data[i][0])]);
				} else {
					break;
				}
			}
		}

		if (b_series.length < time_data.length) {
			for (var i = 0; i < time_data.length - b_series.length; i++) {
				b_series.splice(0, 0, [time_data[time_data.length - b_series.length - i][0], 0]);
				s_series.splice(0, 0, [time_data[time_data.length - b_series.length - i][0], 0]);
				t_series.splice(0, 0, [time_data[time_data.length - b_series.length - i][0], 0]);
			}
		}

		input_series.push({
			color: b_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: the_title_name + "大買方未沖銷",
			name: the_title_name + "大買方未沖銷",
			data: b_series,
			lineWidth: 1
		});

		input_series.push({
			color: s_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: the_title_name + "大賣方未沖銷",
			name: the_title_name + "大賣方未沖銷",
			data: s_series,
			lineWidth: 1
		});

		input_series.push({
			color: "#121C3A",
			type: 'line',
			yAxis: sub_tech_line_i + 1,
			id: "日期",
			name: "日期",
			data: t_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["日期"] = {
			color: "#FFFFFF"
		};
		_main.tra.kChart.nameColor[the_title_name + "大買方未沖銷"] = {
			color: b_color
		};
		_main.tra.kChart.nameColor[the_title_name + "大賣方未沖銷"] = {
			color: s_color
		};

		return input_series;
	},

	twtslqDelLineFunc: function twtslqDelLineFunc(input_series, input_data, twtslq_up_color, twtslq_down_color, time_data, sub_tech_line_i) {

		var t_series = [];

		//日期，時間，開，高，低，收，量；日期，時間，開，高，低，收，量；．．．．
		if (input_data.length >= 1) {
			for (var i = 0; i < input_data.length; i++) {
				if (time_data.length - i - 1 >= 0) {
					t_series.splice(0, 0, [time_data[time_data.length - i - 1][0], parseInt(input_data[i])]);
				} else {
					break;
				}
			}
		}

		var t_len = t_series.length;
		if (t_len < time_data.length) {
			for (var i = 0; i < time_data.length - t_len; i++) {
				t_series.splice(0, 0, [time_data[time_data.length - t_len - i][0], 0]);
			}
		}

		input_series.push({
			color: twtslq_up_color,
			negativeColor: twtslq_down_color,
			type: 'column',
			yAxis: sub_tech_line_i,
			id: "價差",
			name: "價差",
			data: t_series,
			lineWidth: 1,
			shadow: true
		});

		_main.tra.kChart.nameColor["價差"] = {
			color: twtslq_up_color
		};

		return input_series;
	},

	twtslqBuySellLineFunc: function twtslqBuySellLineFunc(input_series, input_data, b_color, s_color, time_data, sub_tech_line_i) {

		var b_series = [];
		var s_series = [];

		//日期，時間，開，高，低，收，量；日期，時間，開，高，低，收，量；．．．．
		if (input_data.length >= 1) {
			for (var i = 0; i < input_data.length; i += 4) {
				if (time_data.length - i / 4 - 1 >= 0) {
					b_series.splice(0, 0, [time_data[time_data.length - i / 4 - 1][0], Math.floor(parseFloat(input_data[i + 1]) / parseFloat(input_data[i]) * 100) / 100]);
					s_series.splice(0, 0, [time_data[time_data.length - i / 4 - 1][0], Math.floor(parseFloat(input_data[i + 3]) / parseFloat(input_data[i + 2]) * 100) / 100]);
				} else {
					break;
				}
			}
		}

		var b_len = b_series.length;
		if (b_len < time_data.length) {
			for (var i = 0; i < time_data.length - b_len; i++) {
				b_series.splice(0, 0, [time_data[time_data.length - b_len - i][0], 0]);
				s_series.splice(0, 0, [time_data[time_data.length - b_len - i][0], 0]);
			}
		}

		input_series.push({
			color: b_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "委買",
			name: "委買",
			data: b_series,
			lineWidth: 1
		});

		input_series.push({
			color: s_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "委賣",
			name: "委賣",
			data: s_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["委買"] = {
			color: b_color
		};
		_main.tra.kChart.nameColor["委賣"] = {
			color: s_color
		};

		return input_series;
	},

	countryLineFunc: function countryLineFunc(input_series, input_data, b_color, s_color, time_data, the_type_name, the_title_name, sub_tech_line_i) {

		var b_series = [];
		var s_series = [];
		var t_series = [];

		//日期，時間，開，高，低，收，量；日期，時間，開，高，低，收，量；．．．．
		if (input_data.length >= 1) {
			for (var i = input_data.length - 1; i >= 0; i--) {
				if (time_data.length - 1 - (input_data.length - 1 - i) >= 0) {
					b_series.splice(0, 0, [time_data[time_data.length - 1 - (input_data.length - 1 - i)][0], parseInt(input_data[i][1])]);
					s_series.splice(0, 0, [time_data[time_data.length - 1 - (input_data.length - 1 - i)][0], parseInt(input_data[i][2])]);
					t_series.splice(0, 0, [time_data[time_data.length - 1 - (input_data.length - 1 - i)][0], parseInt(input_data[i][0])]);
				} else {
					break;
				}
			}
		}

		if (b_series.length < time_data.length) {
			for (var i = 0; i < time_data.length - b_series.length; i++) {
				b_series.splice(0, 0, [time_data[time_data.length - b_series.length - i][0], 0]);
				s_series.splice(0, 0, [time_data[time_data.length - b_series.length - i][0], 0]);
				t_series.splice(0, 0, [time_data[time_data.length - b_series.length - i][0], 0]);
			}
		}

		input_series.push({
			color: b_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: the_type_name + the_title_name + "多方未平倉",
			name: the_type_name + the_title_name + "多方未平倉",
			data: b_series,
			lineWidth: 1
		});

		input_series.push({
			color: s_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: the_type_name + the_title_name + "空方未平倉",
			name: the_type_name + the_title_name + "空方未平倉",
			data: s_series,
			lineWidth: 1
		});

		input_series.push({
			color: "#121C3A",
			type: 'line',
			yAxis: sub_tech_line_i + 1,
			id: "日期",
			name: "日期",
			data: t_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["日期"] = {
			color: "#FFFFFF"
		};
		_main.tra.kChart.nameColor[the_type_name + the_title_name + "多方未平倉"] = {
			color: b_color
		};
		_main.tra.kChart.nameColor[the_type_name + the_title_name + "空方未平倉"] = {
			color: s_color
		};

		return input_series;
	},

	mvLineFunc: function mvLineFunc(input_series, input_data, mv_color, mv_type, weakline, mv_index) {

		if (input_data.length < weakline) {
			return input_series;
		}

		var mv_series = [];

		if (mv_type != 2) {
			for (var i = weakline; i < input_data.length; i++) {

				if (mv_type == 0) {
					var mv_value = 0;
					for (var k = i - 1; k > i - weakline - 1; k--) {
						mv_value += input_data[k][4];
					}

					mv_value /= weakline;

					mv_series[mv_series.length] = [input_data[i][0], mv_value];
				} else if (mv_type == 1) {
					var mv_value = 0;
					for (var k = i - 1; k > i - weakline - 1; k--) {
						mv_value += (weakline - (i - 1 - k)) * input_data[k][4];
					}

					mv_value /= (1 + weakline) * weakline / 2;

					mv_series[mv_series.length] = [input_data[i][0], mv_value];
				}
			}
		} else if (mv_type == 2) {
			var af = 2 / (weakline + 1);
			var mv_ini = input_data[0][4];

			mv_series[mv_series.length] = [input_data[0][0], mv_ini];

			for (var i = 1; i < input_data.length; i++) {
				mv_ini = mv_ini + af * (input_data[i][4] - mv_ini);
			}
			mv_series[mv_series.length] = [input_data[0][0], mv_ini];
		}

		for (var i = 0; i < mv_series.length; i++) {
			mv_series[i][1] = parseInt(mv_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: mv_color,
			type: 'line',
			yAxis: 0,
			id: "MV" + mv_index + "(" + weakline + ")",
			name: "MV" + mv_index + "(" + weakline + ")",
			data: mv_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["MV" + mv_index + "(" + weakline + ")"] = {
			color: mv_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.mvLineFunc(temp_array, input_data, mv_color, mv_type, weakline, mv_index);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return return_array;
			}
		};

		return input_series;
	},

	sarLineFunc: function sarLineFunc(input_series, input_data, sar_color, weakline) {

		if (input_data.length < weakline) {
			return input_series;
		}

		var sar_series = [];
		var af = 0.02;
		var up_or_down = 0;

		var ini_sum = 0;
		var k = 0;
		var EPL = 99999999;
		var EPH = 0;
		for (; k < weakline; k++) {
			ini_sum += input_data[k][4];
			if (input_data[k][3] < EPL) {
				EPL = input_data[k][3];
			}

			if (input_data[k][2] > EPH) {
				EPH = input_data[k][2];
			}
		}

		ini_sum /= k;
		if (ini_sum < input_data[0][4]) {
			up_or_down = 1;
		}

		var ini_sar = 0;
		if (up_or_down == 0) {
			ini_sar = EPL;
			sar_series[sar_series.length] = [input_data[weakline - 1][0], EPL];
		} else {
			ini_sar = EPH;
			sar_series[sar_series.length] = [input_data[weakline - 1][0], EPH];
		}

		for (var i = weakline; i < input_data.length; i++) {
			EPL = 99999999;
			EPH = 0;
			for (var k = i - 1; k > i - weakline - 1; k--) {
				if (input_data[k][3] < EPL) {
					EPL = input_data[k][3];
				}

				if (input_data[k][2] > EPH) {
					EPH = input_data[k][2];
				}
			}

			if (up_or_down == 0) {
				if (input_data[i][2] > EPH) {
					if (af < 0.2) {
						af += 0.02;
					}
				}

				if (input_data[i][3] < ini_sar) {

					up_or_down = 1;

					ini_sar = EPH;
					af = 0.02;
					sar_series[sar_series.length] = [input_data[i][0], EPH];
				} else {
					sar_series[sar_series.length] = [input_data[i][0], ini_sar + af * (EPH - ini_sar)];
					ini_sar = sar_series[sar_series.length - 1][1];
				}
			} else if (up_or_down == 1) {
				if (input_data[i][3] < EPL) {
					if (af < 0.2) {
						af += 0.02;
					}
				}

				if (input_data[i][2] > ini_sar) {
					up_or_down = 0;

					ini_sar = EPL;
					af = 0.02;
					sar_series[sar_series.length] = [input_data[i][0], EPL];
				} else {
					sar_series[sar_series.length] = [input_data[i][0], ini_sar - af * (ini_sar - EPL)];
					ini_sar = sar_series[sar_series.length - 1][1];
				}
			}
		}

		for (var i = 0; i < sar_series.length; i++) {
			sar_series[i][1] = parseInt(sar_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: sar_color,
			type: 'line',
			yAxis: 0,
			id: "SAR(" + weakline + ")",
			name: "SAR(" + weakline + ")",
			data: sar_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["SAR(" + weakline + ")"] = {
			color: sar_color,
			input_data: input_data,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.sarLineFunc(temp_array, input_data, sar_color, weakline);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return return_array;
			}
		};

		return input_series;
	},

	bollingerbandLineFunc: function bollingerbandLineFunc(input_series, input_data, ma_color, up_color, down_color, weakline) {
		if (input_data.length < weakline) {
			return input_series;
		}

		var ma_series = [];
		var up_series = [];
		var down_series = [];

		for (var i = weakline; i < input_data.length; i++) {

			var mv_value = 0;
			for (var k = i - 1; k > i - weakline - 1; k--) {
				mv_value += input_data[k][4];
			}

			mv_value /= weakline;

			var e_value = 0;
			for (var k = i - 1; k > i - weakline - 1; k--) {
				e_value += Math.pow(input_data[k][4] - mv_value, 2);
			}

			e_value = Math.sqrt(e_value / weakline);

			ma_series[ma_series.length] = [input_data[i][0], mv_value];
			up_series[up_series.length] = [input_data[i][0], mv_value + e_value * 2];
			down_series[down_series.length] = [input_data[i][0], mv_value - e_value * 2];
		}

		for (var i = 0; i < ma_series.length; i++) {
			ma_series[i][1] = parseInt(ma_series[i][1] * 10) / 10;
		}

		for (var i = 0; i < up_series.length; i++) {
			up_series[i][1] = parseInt(up_series[i][1] * 10) / 10;
		}

		for (var i = 0; i < down_series.length; i++) {
			down_series[i][1] = parseInt(down_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: ma_color,
			type: 'line',
			yAxis: 0,
			id: "BMA(" + weakline + ")",
			name: "BMA(" + weakline + ")",
			data: ma_series,
			lineWidth: 1
		});

		input_series.push({
			color: up_color,
			type: 'line',
			yAxis: 0,
			id: "BUP(" + weakline + ")",
			name: "BUP(" + weakline + ")",
			data: up_series,
			lineWidth: 1
		});

		input_series.push({
			color: down_color,
			type: 'line',
			yAxis: 0,
			id: "BDOWN(" + weakline + ")",
			name: "BDOWN(" + weakline + ")",
			data: down_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["BMA(" + weakline + ")"] = {
			color: ma_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.bollingerbandLineFunc(temp_array, input_data, ma_color, up_color, down_color, weakline);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return_array.push(temp_array[1].data[temp_array[1].data.length - 1]);
				return_array.push(temp_array[2].data[temp_array[2].data.length - 1]);
				return return_array;
			}
		};
		_main.tra.kChart.nameColor["BUP(" + weakline + ")"] = {
			color: up_color
		};
		_main.tra.kChart.nameColor["BDOWN(" + weakline + ")"] = {
			color: down_color
		};

		return input_series;
	},

	ichimokuLineFunc: function ichimokuLineFunc(input_series, input_data, Tenkan_color, Kijun_color, SpanA_color, SpanB_color, Chinkou_color, change_weakline, base_weakline, front_weakline) {

		var Tenkan_series = [];
		var Kijun_series = [];
		var SpanA_series = [];
		var SpanB_series = [];
		var Chinkou_series = [];
		var Kumo_series = [];

		for (var i = change_weakline; i < input_data.length; i++) {

			var EPL = 99999999;
			var EPH = 0;
			for (var k = i; k > i - change_weakline; k--) {
				if (input_data[k][3] < EPL) {
					EPL = input_data[k][3];
				}

				if (input_data[k][2] > EPH) {
					EPH = input_data[k][2];
				}
			}

			Tenkan_series[Tenkan_series.length] = [input_data[i][0], (EPL + EPH) / 2];
		}

		for (var i = base_weakline; i < input_data.length; i++) {

			var EPL = 99999999;
			var EPH = 0;
			for (var k = i; k > i - base_weakline; k--) {
				if (input_data[k][3] < EPL) {
					EPL = input_data[k][3];
				}

				if (input_data[k][2] > EPH) {
					EPH = input_data[k][2];
				}
			}

			var cEPL = 99999999;
			var cEPH = 0;
			for (var k = i; k > i - change_weakline; k--) {
				if (input_data[k][3] < cEPL) {
					cEPL = input_data[k][3];
				}

				if (input_data[k][2] > cEPH) {
					cEPH = input_data[k][2];
				}
			}

			var fEPL = 99999999;
			var fEPH = 0;
			if (i - front_weakline > -2) {
				for (var k = i; k > i - front_weakline; k--) {
					if (input_data[k][3] < fEPL) {
						fEPL = input_data[k][3];
					}

					if (input_data[k][2] > fEPH) {
						fEPH = input_data[k][2];
					}
				}
			}

			Kijun_series[Kijun_series.length] = [input_data[i][0], (EPL + EPH) / 2];

			Chinkou_series[Chinkou_series.length] = [input_data[i - base_weakline][0], input_data[i][4]];

			if (i + base_weakline < input_data.length) {
				SpanA_series[SpanA_series.length] = [input_data[i + base_weakline][0], ((cEPL + cEPH) / 2 + (EPL + EPH) / 2) / 2];
				SpanB_series[SpanB_series.length] = [input_data[i + base_weakline][0], (fEPL + fEPH) / 2];

				if (((cEPL + cEPH) / 2 + (EPL + EPH) / 2) / 2 < (fEPL + fEPH) / 2) {
					Kumo_series[Kumo_series.length] = [input_data[i + base_weakline][0], ((cEPL + cEPH) / 2 + (EPL + EPH) / 2) / 2, (fEPL + fEPH) / 2];
				} else if (((cEPL + cEPH) / 2 + (EPL + EPH) / 2) / 2 > (fEPL + fEPH) / 2) {
					Kumo_series[Kumo_series.length] = [input_data[i + base_weakline][0], (fEPL + fEPH) / 2, ((cEPL + cEPH) / 2 + (EPL + EPH) / 2) / 2];
				}
			}
		}

		for (var i = 0; i < Tenkan_series.length; i++) {
			Tenkan_series[i][1] = parseInt(Tenkan_series[i][1] * 10) / 10;
		}

		for (var i = 0; i < Kijun_series.length; i++) {
			Kijun_series[i][1] = parseInt(Kijun_series[i][1] * 10) / 10;
		}

		for (var i = 0; i < SpanA_series.length; i++) {
			SpanA_series[i][1] = parseInt(SpanA_series[i][1] * 10) / 10;
		}

		for (var i = 0; i < SpanB_series.length; i++) {
			SpanB_series[i][1] = parseInt(SpanB_series[i][1] * 10) / 10;
		}

		for (var i = 0; i < Chinkou_series.length; i++) {
			Chinkou_series[i][1] = parseInt(Chinkou_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: "rgba(188,188,188,0.3)",
			type: 'arearange',
			yAxis: 0,
			id: "Kumo4",
			name: "Kumo4",
			data: Kumo_series,
			lineWidth: 0
		});

		input_series.push({
			color: Tenkan_color,
			type: 'line',
			yAxis: 0,
			id: "Tenkan(" + change_weakline + ")",
			name: "Tenkan(" + change_weakline + ")",
			data: Tenkan_series,
			lineWidth: 1
		});

		input_series.push({
			color: Kijun_color,
			type: 'line',
			yAxis: 0,
			id: "Kijun(" + base_weakline + ")",
			name: "Kijun(" + base_weakline + ")",
			data: Kijun_series,
			lineWidth: 1
		});

		input_series.push({
			color: SpanA_color,
			type: 'line',
			yAxis: 0,
			id: "SpanA(" + base_weakline + ")",
			name: "SpanA(" + base_weakline + ")",
			data: SpanA_series,
			lineWidth: 1
		});

		input_series.push({
			color: SpanB_color,
			type: 'line',
			yAxis: 0,
			id: "SpanB(" + front_weakline + ")",
			name: "SpanB(" + front_weakline + ")",
			data: SpanB_series,
			lineWidth: 1
		});

		input_series.push({
			color: Chinkou_color,
			type: 'line',
			yAxis: 0,
			id: "Chinkou(" + base_weakline + ")",
			name: "Chinkou(" + base_weakline + ")",
			data: Chinkou_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["Kumo4"] = {
			color: "rgba(188,188,188,0.3)",
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.ichimokuLineFunc(temp_array, input_data, Tenkan_color, Kijun_color, SpanA_color, SpanB_color, Chinkou_color, change_weakline, base_weakline, front_weakline);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return_array.push(temp_array[1].data[temp_array[1].data.length - 1]);
				return_array.push(temp_array[2].data[temp_array[2].data.length - 1]);
				return_array.push(temp_array[3].data[temp_array[3].data.length - 1]);
				return_array.push(temp_array[4].data[temp_array[4].data.length - 1]);
				return_array.push(temp_array[5].data[temp_array[5].data.length - 1]);
				return return_array;
			}
		};
		_main.tra.kChart.nameColor["Tenkan(" + change_weakline + ")"] = {
			color: Tenkan_color
		};
		_main.tra.kChart.nameColor["Kijun(" + base_weakline + ")"] = {
			color: Kijun_color
		};
		_main.tra.kChart.nameColor["SpanA(" + base_weakline + ")"] = {
			color: SpanA_color
		};
		_main.tra.kChart.nameColor["SpanB(" + front_weakline + ")"] = {
			color: SpanB_color
		};
		_main.tra.kChart.nameColor["Chinkou(" + base_weakline + ")"] = {
			color: Chinkou_color
		};

		return input_series;
	},

	biasLineFunc: function biasLineFunc(input_series, input_data, bias_color, weakline, sub_tech_line_i) {

		if (input_data.length < weakline) {
			return input_series;
		}

		var bias_series = [];

		for (var i = weakline - 1; i < input_data.length; i++) {

			var ma = 0;
			for (var k = i; k > i - weakline; k--) {
				ma += input_data[k][4];
			}
			ma /= weakline;

			bias_series[bias_series.length] = [input_data[i][0], (input_data[i][4] - ma) / ma];
		}

		var add_len = input_data[input_data.length - 1][4].toString().length;

		for (var i = 0; i < bias_series.length; i++) {
			bias_series[i][1] = parseInt(bias_series[i][1] * Math.pow(10, add_len + 1)) / 10;
		}

		input_series.push({
			color: bias_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "BIAS(" + weakline + ")",
			name: "BIAS(" + weakline + ")",
			data: bias_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["BIAS(" + weakline + ")"] = {
			color: bias_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.biasLineFunc(temp_array, input_data, bias_color, weakline, sub_tech_line_i);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return return_array;
			}
		};

		return input_series;
	},

	obvLineFunc: function obvLineFunc(input_series, input_data, input_qdata, obv_color, sub_tech_line_i) {

		var obv_series = [];
		var ini_obv = 0;
		obv_series[obv_series.length] = [input_data[0][0], 0];

		for (var i = 1; i < input_data.length && i < input_qdata.length; i++) {

			ini_obv += input_data[i][4] > input_data[i - 1][4] ? input_qdata[i][1] : input_data[i][4] < input_data[i - 1][4] ? -1 * input_qdata[i][1] : 0;

			obv_series[obv_series.length] = [input_data[i][0], ini_obv];
		}

		input_series.push({
			color: obv_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "OBV",
			name: "OBV",
			data: obv_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["OBV"] = {
			color: obv_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.obvLineFunc(temp_array, input_data, input_qdata, obv_color, sub_tech_line_i);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return return_array;
			}
		};

		return input_series;
	},

	wrLineFunc: function wrLineFunc(input_series, input_data, wr_color, weakline, sub_tech_line_i) {

		if (input_data.length < weakline) {
			return input_series;
		}

		var wr_series = [];

		for (var i = weakline - 1; i < input_data.length; i++) {

			var EPL = 99999999;
			var EPH = 0;
			for (var k = i; k > i - weakline; k--) {
				if (input_data[k][3] < EPL) {
					EPL = input_data[k][3];
				}

				if (input_data[k][2] > EPH) {
					EPH = input_data[k][2];
				}
			}

			wr_series[wr_series.length] = [input_data[i][0], (input_data[i][4] - EPH) / (EPH - EPL) * 100];
		}

		for (var i = 0; i < wr_series.length; i++) {
			wr_series[i][1] = parseInt(wr_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: wr_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "W%R(" + weakline + ")",
			name: "W%R(" + weakline + ")",
			data: wr_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["W%R(" + weakline + ")"] = {
			color: wr_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.wrLineFunc(temp_array, input_data, wr_color, weakline, sub_tech_line_i);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return return_array;
			}
		};

		return input_series;
	},

	psyLineFunc: function psyLineFunc(input_series, input_data, psy_color, weakline, sub_tech_line_i) {

		if (input_data.length < weakline) {
			return input_series;
		}

		var psy_series = [];

		for (var i = weakline - 1; i < input_data.length; i++) {

			var upn = 0;

			for (var k = i; k > i - weakline + 1; k--) {
				if (input_data[k][4] > input_data[k - 1][4]) {
					upn++;
				}
			}

			psy_series[psy_series.length] = [input_data[i][0], upn / weakline * 100];
		}

		for (var i = 0; i < psy_series.length; i++) {
			psy_series[i][1] = parseInt(psy_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: psy_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "PSY(" + weakline + ")",
			name: "PSY(" + weakline + ")",
			data: psy_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["PSY(" + weakline + ")"] = {
			color: psy_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.psyLineFunc(temp_array, input_data, psy_color, weakline, sub_tech_line_i);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return return_array;
			}
		};

		return input_series;
	},

	mtmLineFunc: function mtmLineFunc(input_series, input_data, mtm_color, weakline, sub_tech_line_i) {

		if (input_data.length < weakline + 1) {
			return input_series;
		}

		var mtm_series = [];

		for (var i = weakline; i < input_data.length; i++) {
			mtm_series[mtm_series.length] = [input_data[i][0], input_data[i][4] - input_data[i - weakline][4]];
		}

		for (var i = 0; i < mtm_series.length; i++) {
			mtm_series[i][1] = parseInt(mtm_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: mtm_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "MTM(" + weakline + ")",
			name: "MTM(" + weakline + ")",
			data: mtm_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["MTM(" + weakline + ")"] = {
			color: mtm_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.mtmLineFunc(temp_array, input_data, mtm_color, weakline, sub_tech_line_i);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return return_array;
			}
		};

		return input_series;
	},

	inoutadLineFunc: function inoutadLineFunc(input_series, input_data, input_qdata, ad_color, signal_color, weakline, sub_tech_line_i) {

		var inoutadseries = [];
		var signalseries = [];
		var ac = 0;

		for (var i = 0; i < input_data.length && i < input_qdata.length; i++) {
			if (input_data[i][2] > input_data[i][3]) {
				ac = ac + (input_data[i][4] - input_data[i][3] - (input_data[i][2] - input_data[i][4])) / (input_data[i][2] - input_data[i][3]) * input_qdata[i][1];
			} else if (i > 0) {
				ac = ac + (input_data[i][4] / input_data[i - 1][4] - 1) * input_qdata[i][1];
			}
			inoutadseries[inoutadseries.length] = [input_data[i][0], ac];
		}

		for (var i = 0; i < weakline - 1; i++) {
			signalseries[signalseries.length] = [inoutadseries[i][0], 0];
		}

		for (var i = weakline - 1; i < inoutadseries.length; i++) {

			var mv_value = 0;
			for (var k = i; k > i - weakline; k--) {
				mv_value += inoutadseries[k][1];
			}

			mv_value /= weakline;

			signalseries[signalseries.length] = [inoutadseries[i][0], mv_value];
		}

		for (var i = 0; i < inoutadseries.length; i++) {
			inoutadseries[i][1] = parseInt(inoutadseries[i][1] * 10) / 10;
		}

		for (var i = 0; i < signalseries.length; i++) {
			signalseries[i][1] = parseInt(signalseries[i][1] * 10) / 10;
		}

		input_series.push({
			color: ad_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "A/D",
			name: "A/D",
			data: inoutadseries,
			lineWidth: 1
		});

		input_series.push({
			color: signal_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "Signal(" + weakline + ")",
			name: "Signal(" + weakline + ")",
			data: signalseries,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["A/D"] = {
			color: ad_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.inoutadLineFunc(temp_array, input_data, input_qdata, ad_color, signal_color, weakline, sub_tech_line_i);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return_array.push(temp_array[1].data[temp_array[1].data.length - 1]);
				return return_array;
			}
		};
		_main.tra.kChart.nameColor["Signal(" + weakline + ")"] = {
			color: signal_color
		};

		return input_series;
	},

	sooncciLineFunc: function sooncciLineFunc(input_series, input_data, cci_color, signal_color, weakline, sub_tech_line_i) {

		if (input_data.length < weakline) {
			return input_series;
		}

		var cciseries = [];
		var signalseries = [];
		var ac = 0;

		for (var i = weakline; i < input_data.length; i++) {

			var TP = 0;
			var MA = 0;
			var MD = 0;
			for (var k = i; k > i - weakline - 1; k--) {
				MA += input_data[i][4];
			}
			MA /= weakline;

			for (var k = i; k > i - weakline - 1; k--) {
				MD += MA - input_data[i][4];
			}
			MD /= weakline;

			TP = (input_data[i][2] + input_data[i][3] + input_data[i][4]) / 3;

			if (MD > 0) {
				cciseries[cciseries.length] = [input_data[i][0], (TP - MA) / MD / 0.015];
			} else {
				cciseries[cciseries.length] = [input_data[i][0], 0];
			}
		}

		for (var i = 0; i < weakline - 1; i++) {
			signalseries[signalseries.length] = [cciseries[i][0], 0];
		}

		for (var i = weakline - 1; i < cciseries.length; i++) {

			var mv_value = 0;
			for (var k = i; k > i - weakline; k--) {
				mv_value += cciseries[k][1];
			}

			mv_value /= weakline;

			signalseries[signalseries.length] = [cciseries[i][0], mv_value];
		}

		for (var i = 0; i < cciseries.length; i++) {
			cciseries[i][1] = parseInt(cciseries[i][1] * 10) / 10;
		}

		for (var i = 0; i < signalseries.length; i++) {
			signalseries[i][1] = parseInt(signalseries[i][1] * 10) / 10;
		}

		input_series.push({
			color: cci_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "CCI",
			name: "CCI",
			data: cciseries,
			lineWidth: 1
		});

		input_series.push({
			color: signal_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "Signal(" + weakline + ")",
			name: "Signal(" + weakline + ")",
			data: signalseries,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["CCI"] = {
			color: cci_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.sooncciLineFunc(temp_array, input_data, cci_color, signal_color, weakline, sub_tech_line_i);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return_array.push(temp_array[1].data[temp_array[1].data.length - 1]);
				return return_array;
			}
		};
		_main.tra.kChart.nameColor["Signal(" + weakline + ")"] = {
			color: signal_color
		};

		return input_series;
	},

	arLineFunc: function arLineFunc(input_series, input_data, ar_color, weakline, sub_tech_line_i) {

		if (input_data.length < weakline) {
			return input_series;
		}

		var ar_series = [];

		for (var i = weakline - 1; i < input_data.length; i++) {

			var ar = 0;
			var arv = 0;
			for (var k = i; k > i - weakline; k--) {
				ar += input_data[k][2] - input_data[k][1];
				arv += input_data[k][1] - input_data[k][3];
			}

			ar_series[ar_series.length] = [input_data[i][0], ar / arv * 100];
		}

		for (var i = 0; i < ar_series.length; i++) {
			ar_series[i][1] = parseInt(ar_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: ar_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "AR(" + weakline + ")",
			name: "AR(" + weakline + ")",
			data: ar_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["AR(" + weakline + ")"] = {
			color: ar_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.arLineFunc(temp_array, input_data, ar_color, weakline, sub_tech_line_i);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return return_array;
			}
		};

		return input_series;
	},

	brLineFunc: function brLineFunc(input_series, input_data, br_color, weakline, sub_tech_line_i) {

		if (input_data.length < weakline + 1) {
			return input_series;
		}

		var br_series = [];

		for (var i = weakline - 1; i < input_data.length; i++) {

			var br = 0;
			var brv = 0;
			for (var k = i; k > i - weakline + 1; k--) {
				br += input_data[k][2] - input_data[k - 1][4];
				brv += input_data[k - 1][4] - input_data[k][3];
			}

			br_series[br_series.length] = [input_data[i][0], br / brv * 100];
		}

		for (var i = 0; i < br_series.length; i++) {
			br_series[i][1] = parseInt(br_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: br_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "BR(" + weakline + ")",
			name: "BR(" + weakline + ")",
			data: br_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["BR(" + weakline + ")"] = {
			color: br_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.brLineFunc(temp_array, input_data, br_color, weakline, sub_tech_line_i);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return return_array;
			}
		};

		return input_series;
	},

	vrLineFunc: function vrLineFunc(input_series, input_data, input_qdata, vr_color, weakline, sub_tech_line_i) {

		if (input_data.length < weakline) {
			return input_series;
		}

		var vr_series = [];

		for (var i = weakline - 1; i < input_data.length && i < input_qdata.length; i++) {

			var qun = 0;
			var qfn = 0;
			var qdn = 0;
			for (var k = i; k > i - weakline; k--) {
				if (input_data[k][4] > input_data[k][1]) {
					qun += input_qdata[k][1];
				} else if (input_data[k][4] < input_data[k][1]) {
					qdn += input_qdata[k][1];
				} else {
					qfn += input_qdata[k][1];
				}
			}

			if (qdn + qfn / 2 > 0) {
				vr_series[vr_series.length] = [input_data[i][0], (qun + qfn / 2) / (qdn + qfn / 2) * 100];
			}
		}

		for (var i = 0; i < vr_series.length; i++) {
			vr_series[i][1] = parseInt(vr_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: vr_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "VR%(" + weakline + ")",
			name: "VR%(" + weakline + ")",
			data: vr_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["VR%(" + weakline + ")"] = {
			color: vr_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.vrLineFunc(temp_array, input_data, input_qdata, vr_color, weakline, sub_tech_line_i);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return return_array;
			}
		};

		return input_series;
	},

	miLineFunc: function miLineFunc(input_series, input_data, ema_color1, ema_color2, ma_color, weakline, sub_tech_line_i) {

		var ema_series1 = [];
		var ema_series2 = [];
		var ma_series = [];

		var ema_ini1 = input_data[0][2] - input_data[0][3];
		var ema_ini2 = ema_ini1;
		ema_series1[ema_series1.length] = [input_data[0][0], ema_ini1];
		ema_series2[ema_series2.length] = [input_data[0][0], ema_ini2];
		ma_series[ma_series.length] = [input_data[0][0], ema_ini1 / ema_ini2];
		var av = 2 / (1 + weakline);

		for (var i = 1; i < input_data.length; i++) {
			ema_ini1 = (input_data[i][2] - input_data[i][3] - ema_ini1) * av + ema_ini1;
			ema_ini2 = (ema_ini1 - ema_ini2) * av + ema_ini2;

			ema_series1[ema_series1.length] = [input_data[i][0], ema_ini1];
			ema_series2[ema_series2.length] = [input_data[i][0], ema_ini2];
			ma_series[ma_series.length] = [input_data[i][0], ema_ini1 / ema_ini2];
		}

		for (var i = 0; i < ema_series1.length; i++) {
			ema_series1[i][1] = parseInt(ema_series1[i][1] * 10) / 10;
			ema_series2[i][1] = parseInt(ema_series2[i][1] * 10) / 10;
			ma_series[i][1] = parseInt(ma_series[i][1] * 10) / 10;
		}

		input_series.push({
			color: ema_color1,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "EMA1(" + weakline + ")",
			name: "EMA1(" + weakline + ")",
			data: ema_series1,
			lineWidth: 1
		});

		input_series.push({
			color: ema_color2,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "EMA2(" + weakline + ")",
			name: "EMA2(" + weakline + ")",
			data: ema_series2,
			lineWidth: 1
		});

		input_series.push({
			color: ma_color,
			type: 'line',
			yAxis: sub_tech_line_i,
			id: "MI(" + weakline + ")",
			name: "MI(" + weakline + ")",
			data: ma_series,
			lineWidth: 1
		});

		_main.tra.kChart.nameColor["EMA1(" + weakline + ")"] = {
			color: ema_color1,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.miLineFunc(temp_array, input_data, ema_color1, ema_color2, ma_color, weakline, sub_tech_line_i);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return_array.push(temp_array[1].data[temp_array[1].data.length - 1]);
				return_array.push(temp_array[2].data[temp_array[2].data.length - 1]);
				return return_array;
			}
		};
		_main.tra.kChart.nameColor["EMA2(" + weakline + ")"] = {
			color: ema_color2
		};
		_main.tra.kChart.nameColor["MI(" + weakline + ")"] = {
			color: ma_color
		};

		return input_series;
	},

	volumLineFunc: function volumLineFunc(input_series, input_data, input_qdata, ma_color, up_color, down_color, same_color, ma_show, ma_weak, ma_type, sub_tech_line_i) {

		var ma_series = [];
		var volum_up_series = [];
		var volum_down_series = [];
		var volum_same_series = [];

		if (ma_show == 1) {
			if (ma_type != 2) {
				for (var i = ma_weak; i < input_qdata.length; i++) {

					if (ma_type == 0) {
						var mv_value = 0;
						for (var k = i - 1; k > i - ma_weak - 1; k--) {
							mv_value += input_qdata[k][1];
						}

						mv_value /= ma_weak;

						ma_series[ma_series.length] = [input_qdata[i][0], mv_value];
					} else if (ma_type == 1) {
						var mv_value = 0;
						for (var k = i - 1; k > i - ma_weak - 1; k--) {
							mv_value += (ma_weak - (i - 1 - k)) * input_qdata[k][1];
						}

						mv_value /= (1 + ma_weak) * ma_weak / 2;

						ma_series[ma_series.length] = [input_qdata[i][0], mv_value];
					}
				}
			} else if (ma_type == 2) {
				var af = 2 / (ma_weak + 1);
				var mv_ini = input_qdata[0][1];

				ma_series[ma_series.length] = [input_qdata[0][0], mv_ini];

				for (var i = 1; i < input_qdata.length; i++) {
					mv_ini = mv_ini + af * (input_qdata[i][1] - mv_ini);
				}
				ma_series[ma_series.length] = [input_qdata[0][0], mv_ini];
			}
		}

		for (var i = 0; i < input_data.length && i < input_qdata.length; i++) {
			if (input_data[i][4] > input_data[i][1]) {
				volum_up_series[volum_up_series.length] = [input_qdata[i][0], input_qdata[i][1]];
				volum_down_series[volum_down_series.length] = [input_qdata[i][0], 0];
				volum_same_series[volum_same_series.length] = [input_qdata[i][0], 0];
			} else if (input_data[i][4] < input_data[i][1]) {
				volum_down_series[volum_down_series.length] = [input_qdata[i][0], input_qdata[i][1]];
				volum_up_series[volum_up_series.length] = [input_qdata[i][0], 0];
				volum_same_series[volum_same_series.length] = [input_qdata[i][0], 0];
			} else {
				volum_same_series[volum_same_series.length] = [input_qdata[i][0], input_qdata[i][1]];
				volum_down_series[volum_down_series.length] = [input_qdata[i][0], 0];
				volum_up_series[volum_up_series.length] = [input_qdata[i][0], 0];
			}
		}

		if (ma_show == 1) {
			input_series.push({
				color: ma_color,
				type: 'line',
				id: "VMA(" + ma_weak + ")",
				name: "VMA(" + ma_weak + ")",
				data: ma_series,
				yAxis: sub_tech_line_i,
				lineWidth: 1
			});

			input_series.push({
				color: up_color,
				type: 'column',
				name: '成交量',
				id: '成交量',
				yAxis: sub_tech_line_i,
				data: volum_up_series,
				shadow: true
			});

			input_series.push({
				color: down_color,
				type: 'column',
				name: '成交量',
				id: '成交量',
				yAxis: sub_tech_line_i,
				data: volum_down_series,
				shadow: true
			});

			input_series.push({
				color: same_color,
				type: 'column',
				name: '成交量',
				id: '成交量',
				yAxis: sub_tech_line_i,
				data: volum_same_series,
				shadow: true
			});
		} else {
			input_series.push({
				color: up_color,
				type: 'column',
				name: '成交量',
				id: '成交量',
				yAxis: sub_tech_line_i,
				data: volum_up_series,
				shadow: true
			});

			input_series.push({
				color: down_color,
				type: 'column',
				name: '成交量',
				id: '成交量',
				yAxis: sub_tech_line_i,
				data: volum_down_series,
				shadow: true
			});

			input_series.push({
				color: same_color,
				type: 'column',
				name: '成交量',
				id: '成交量',
				yAxis: sub_tech_line_i,
				data: volum_same_series,
				shadow: true
			});
		}

		if (ma_show == 1) {
			_main.tra.kChart.nameColor["VMA(" + ma_weak + ")"] = {
				color: ma_color,
				getnew: function getnew(updated) {
					if (updated) {
						return;
					}
					var temp_array = [];
					_main.tra.kChart.volumLineFunc(temp_array, input_data, input_qdata, ma_color, up_color, down_color, same_color, ma_show, ma_weak, ma_type, sub_tech_line_i);
					var return_array = [];
					for (var _i = 0; _i < temp_array.length; _i++) {
						return_array.push(temp_array[_i].data[temp_array[_i].data.length - 1]);
					}
					return return_array;
				}
			};
		}

		_main.tra.kChart.nameColor["成交量"] = {
			color: same_color,
			getnew: function getnew(updated) {
				if (updated) {
					return;
				}

				var temp_array = [];
				_main.tra.kChart.volumLineFunc(temp_array, input_data, input_qdata, ma_color, up_color, down_color, same_color, ma_show, ma_weak, ma_type, sub_tech_line_i);
				var return_array = [];
				return_array.push(temp_array[0].data[temp_array[0].data.length - 1]);
				return_array.push(temp_array[1].data[temp_array[1].data.length - 1]);
				return_array.push(temp_array[2].data[temp_array[2].data.length - 1]);
				return return_array;
			}
		};

		return input_series;
	},

	queryChart: function queryChart(name) {
		//For k chart
		_main.tra.kChart.nowExtreme = {
			min: 0,
			max: 0,
			dataMin: 0,
			dataMax: 0
		};
		_main.tra.API.getTechLine([name, _main.tra.TechIndex.Current, _main.tra.TechIndex.CurrentDay, "kline"]);
	}
};

exports.tra = _main.tra;
exports.p = _main.p;
exports.getDateTime = _main.getDateTime;
exports.getDate = _main.getDate;
exports.getTime = _main.getTime;
exports.getDatePeriod = _main.getDatePeriod;
exports.getColor = _main.getColor;
exports.rgb2hex = _main.rgb2hex;
exports.formatTime = _main.formatTime;
exports.formatNumber = _main.formatNumber;
exports.updateInput = _main.updateInput;
exports.updateTech = _main.updateTech;
exports.updateSelectTech = _main.updateSelectTech;
exports.updateColorTech = _main.updateColorTech;
exports.updateCheckBoxTech = _main.updateCheckBoxTech;
exports.tech_render = _main.tech_render;
exports.strParseInt = _main.strParseInt;
exports.str_pad = _main.str_pad;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};

Date.prototype.subDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() - days);
    return dat;
};

function p(s) {
    return s < 10 ? "0" + s : s;
};

function getDateTime(dt) {
    var year = dt.getFullYear();
    var month = p(dt.getMonth() + 1);
    var day = p(dt.getDate());
    var hour = p(dt.getHours());
    var min = p(dt.getMinutes());
    var sec = p(dt.getSeconds());
    return year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec;
};

function getDate(dt, line) {
    if (line == null) {
        line = "-";
    }
    var year = dt.getFullYear();
    var month = p(dt.getMonth() + 1);
    var day = p(dt.getDate());
    return year + line + month + line + day;
};

function getTime(dt) {
    var time = new Date(dt);
    return p(time.getHours()) + ":" + p(time.getMinutes());
}

function getDatePeriod(period) {
    var now = new Date();
    var result = [];
    switch (period) {
        case "today":
            result = [getDate(now), getDate(now)];
            break;
        case "yesterday":
            var yesterday = new Date();
            result = [getDate(yesterday.subDays(1)), getDate(now)];
            break;
        case "week":
            var first = now.getDate() - now.getDay();
            var last = first + 6;
            result = [getDate(new Date(now.setDate(first))), getDate(new Date(now.setDate(last)))];
            break;
        case "month":
            result = [getDate(new Date(now.getFullYear(), now.getMonth(), 1)), getDate(now)];
            break;
        case "last_month":
            result = [getDate(new Date(now.getFullYear(), now.getMonth() - 1, 1)), getDate(new Date(now.getFullYear(), now.getMonth(), 0))];
            break;
    }
    return result;
};

function getColor(target, value) {
    if (value == 0) return "#ccc";
    return value > target ? "red" : value < target ? "green" : "#ccc";
}

function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function formatTime(time) {
    return time.substring(0, 2) + ":" + time.substring(2, 4) + ":" + time.substring(4, 6);
}

function formatNumber(num) {
    var num = num.toString().split(".");
    if (num.length == 1) {
        return num[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    } else {
        return num[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "." + num[1];
    }
}

function updateInput(target, method) {
    var num = parseInt(target.val());
    if (target.prop("disabled")) {
        return;
    }
    if (isNaN(num)) {
        num = 0;
    }
    if (method == "add") {
        num++;
    } else {
        num = num - 1 < 0 ? num : num - 1;
    }
    target.val(num);
}

function updateTech(target, tech_i, tech_j, method) {
    var num = parseInt(target.val());
    if (target.prop("disabled")) {
        return;
    }
    if (isNaN(num)) {
        num = 0;
    }
    if (method == "add") {
        num++;
    } else {
        num = num - 1 < 0 ? num : num - 1;
    }
    target.val(num);

    var tech_setting = tra.Custom.Tech.get();
    tech_setting["tech_to"][tech_i][2][tech_j][2] = num;
    tra.Custom.Tech.set(tech_setting);
}

function updateSelectTech(target, tech_i, tech_j) {
    var num = parseInt(target.val());
    var tech_setting = tra.Custom.Tech.get();
    tech_setting["tech_to"][tech_i][2][tech_j][2] = num;
    tra.Custom.Tech.set(tech_setting);
}

function updateColorTech(target) {
    var tech_setting = tra.Custom.Tech.get();
    tech_setting["tech_to"][target.attr("tech_i")][2][target.attr("tech_j")][2] = target.val();
    tra.Custom.Tech.set(tech_setting);
}

function updateCheckBoxTech(target, tech_i, tech_j, check_all) {
    var tech_setting = tra.Custom.Tech.get();
    if (!check_all) {
        if (target.prop("checked")) {
            tech_setting["tech_to"][tech_i][2][tech_j][2] = 1;
        } else {
            tech_setting["tech_to"][tech_i][2][tech_j][2] = 0;
        }
        tra.Custom.Tech.set(tech_setting);
    } else {
        if (target.prop("checked")) {
            var finded = false;
            for (var _i in tech_setting["tech_to"]) {
                if (_i != tech_i && tech_setting["tech_to"][_i].length > 2) {
                    var the_row = tech_setting["tech_to"][_i][2];
                    if (the_row[the_row.length - 1][0] == 4 && the_row[the_row.length - 1][2] == 1) {
                        tra.Alert("一次僅能顯示一種買賣訊號");
                        finded = true;
                    }
                }
            }
            if (!finded) {
                tech_setting["tech_to"][tech_i][2][tech_j][2] = 1;
            } else {
                target.prop("checked", false);
            }
        } else {
            tech_setting["tech_to"][tech_i][2][tech_j][2] = 0;
        }
        tra.Custom.Tech.set(tech_setting);
    }
}

function tech_render(target, type, data) {
    var option = [];

    for (var i in data) {
        if (data[i].length == 2 || type == 0 || type == 1 && data[i].length == 4 && data[i][3] == 1) {
            option.push('<option value="' + data[i][0] + '">' + data[i][1] + '</option>');
        }
        if (i == 0) {
            if (type == 1) {
                option.push('<option value="k_line_object">K線</option>');
            }
        }
    }
    $(target).html(option.join("\n"));
}

function strParseInt(str) {
    return parseInt(str.replace(/,/g, ""));
}

function str_pad(n) {
    return String("00" + n).slice(-2);
}

var tra = {};
tra.exchange = {
    "TW": "台灣期貨交易所",
    "SGX": "新加坡交易所",
    "CME": "芝加哥商品交易所",
    "JPX": "日本交易所集團",
    "CBOT": "芝加哥期貨交易所",
    "NYMEX": "紐約商品期貨交易所",
    "EURX": "歐洲期貨交易所",
    "HKEX": "香港交易所",
    "CFFE": "中國金融期貨交易所"
};

tra.current_item = "";
tra.current_item_saved = "";
tra.current_stop_take_id = "";
tra.current_stop_take_buy_or_sell = "";

tra.ConfigSet = {
    ORDERAPI_CLIENT: 0,
    ORDER_WAITING_INT: null,
    ALARM_INT: null
};

tra.Processing = {
    show: function show() {
        if (tra.ConfigSet.ORDERAPI_CLIENT == 0) $("#processing_modal").modal();
    },
    hide: function hide() {
        if (tra.ConfigSet.ORDERAPI_CLIENT == 0) $("#processing_modal").modal("hide");
    }
};

tra.Page = {
    init: function init() {
        tra.Page.setCallback();
    },
    reCalculate: function reCalculate() {
        var percent_setting = tra.Custom.Percent.get();
        if (percent_setting["percent"].length == 0) {
            if (cotent_sel_ab == "A") {
                percent_setting = {
                    "percent": {
                        "dragger_percent": 0,
                        "item_percent": 60,
                        "price_percent": 60,
                        "vertical_percent": 5.4463
                    }
                };
            } else {
                percent_setting = {
                    "percent": {
                        "dragger_percent": 20, // top char
                        "item_percent": 60,
                        "price_percent": 40,
                        "vertical_percent": 5.4463
                    }
                };
            }
            tra.Custom.Percent.set(percent_setting);
        }
        var cotent_sel_ab = tra.Custom.WebContent.get();

        $(".item-block").css("height", percent_setting["percent"]["item_percent"] + "%");
        $(".my-trade-block").css("height", 100 - percent_setting["percent"]["item_percent"] + "%");

        if (cotent_sel_ab == "A") {
            $(".price-detail").css("height", percent_setting["percent"]["price_percent"] + "%");
            $(".order-block").css("height", 100 - percent_setting["percent"]["price_percent"] + "%");
        } else if (cotent_sel_ab == "B") {
            $(".web-cotent-b-chart-container").css("height", percent_setting["percent"]["dragger_percent"] + "%");
            $(".price-detail").css("height", percent_setting["percent"]["price_percent"] + "%");
            $(".order-block").css("height", 100 - percent_setting["percent"]["price_percent"] - percent_setting["percent"]["dragger_percent"] + "%");
        }

        $(".container-left").css("width", percent_setting["percent"]["vertical_percent"] + "%");
        $(".container-right").css("width", 100 - percent_setting["percent"]["vertical_percent"] + "%");

        var content_b_height = cotent_sel_ab == "B" ? $("#web-cotent-b-chart-container web-cotent-b").outerHeight() + $("#dragbar-chart").outerHeight() : 0;
        var window_width = $(window).width();
        var window_height = $(window).height() - $(".dragbar-price").outerHeight() - $("footer").outerHeight() - content_b_height;
        var contain_height = window_height - $(".navbar").outerHeight();
        var left_width = Math.floor($(".container-left")[0].getBoundingClientRect().width) - $(".dragbar-vertical").outerWidth();
        var scroll = 0;
        for (var i = 1; i < 5; i++) {
            $(".container-right").width(window_width - left_width - i * 2);
            if ($(".container-right").offset().top < 100) {
                break;
            }
        }
        $(".price-detail").width(left_width);

        if (cotent_sel_ab == "A") {
            $(".price-detail").height(contain_height - $(".order-block").outerHeight());
            $(".price-block").height($(".price-detail").outerHeight() - 40);
        } else if (cotent_sel_ab == "B") {
            $(".price-detail").height(contain_height - $(".order-block").outerHeight() - $(".web-cotent-b-chart-container").outerHeight());
            $(".price-block").height($(".price-detail").outerHeight() - 40);
        }

        var chart_height = $(".item-block").height() - 86;
        $(".chart-container").height(chart_height);

        $(".dragbar-chart").width(left_width);
        $(".web-cotent-b-chart-container").width(left_width);
        $(".dragbar-price").width(left_width);
        $(".order-block").width(left_width);
        $(".marquee-block").width(window_width);

        if ($(".item-block")[0].scrollWidth != $(".item-block").width()) {
            scroll = 17;
        }
        $(".item-table tbody").height($(".item-block").height() - 28 - scroll);
        scroll = 0;
        if ($(".my-trade-block")[0].scrollWidth != $(".my-trade-block").width()) {
            scroll = 17;
        }
        $(".my-trade-table tbody").height($(".my-trade-block").height() - $(".my-trade-filter-block").height() - $(".footer").height() - scroll);

        var chart_button_panel_height = 86;
        var te_chart_height = $(".item-block").height() - chart_button_panel_height;
        if (cotent_sel_ab == "A") {
            $(".chart-container").find(".chart_chart").height(te_chart_height);
        } else if (cotent_sel_ab == "B") {
            $(".web-cotent-b-chart-container").find(".chart_chart").height($(".web-cotent-b-chart-container").height());
        }

        $(".chart-container").find(".kchart_chart").height(te_chart_height);

        tra.Page.reFlowChart();
    },
    reFlowChart: function reFlowChart() {
        try {
            if (tra.Chart.stateShow && tra.Chart.syncChart) {
                tra.Chart.syncChart.reflow();
                tra.Chart.afterSetExtremes();
            }

            if (tra.kChart.stateShow && tra.kChart.syncChart) {
                tra.kChart.init();
            }
        } catch (err) {
            //console.log(err);
        };
    }
};

var i = 0;

tra.draggerSet = {
    dragging: false,
    dragging_item: false,
    dragging_price: false,
    dragging_kline: false,
    dragging_chart: false,
    dragging_kline_index: 0
};

tra.setDragBarVerticalCallback = function () {
    $(".dragbar-vertical").mousedown(function (e) {
        e.preventDefault();

        tra.draggerSet.dragging = true;
        var main = $(".container-right");
        var ghostbar = $('<div>', { id: 'ghostbar',
            css: {
                height: main.outerHeight(),
                top: main.offset().top,
                left: main.offset().left
            }
        }).appendTo('body');

        $(document).mousemove(function (e) {
            ghostbar.css("left", e.pageX + 2);
        });
    });

    $(document).mouseup(function (e) {
        if (tra.draggerSet.dragging) {
            var page_x = e.pageX;
            if (page_x < 295) {
                page_x = 295;
            }
            var percentage = page_x / window.innerWidth * 100;
            var mainPercentage = 100 - percentage;

            var percent_setting = tra.Custom.Percent.get();
            percent_setting["percent"]["vertical_percent"] = percentage;
            tra.Custom.Percent.set(percent_setting);

            $(".container-left").css("width", percentage + "%");
            $(".container-right").css("width", mainPercentage + "%");
            $('#ghostbar').remove();
            tra.Page.reCalculate();
            $(document).unbind('mousemove');
            tra.draggerSet.dragging = false;
        }
    });
};

tra.setDragBarKlineCallback = function () {

    $(document).mouseup(function (e) {
        if (tra.draggerSet.dragging_kline) {
            var object_name = '.chart-container';
            if (tra.APIConfigSet.now_inline_or_outline == 1) {
                object_name = '.kchart_chart';
            }
            var top_object = $(object_name).offset();
            var percentage = (e.pageY - top_object.top - tra.kChart.syncChart.plotTop) / tra.kChart.syncChart.plotHeight * 100 - 0.75;
            if (percentage <= 0 || percentage >= 100) {
                return;
            }

            var percent_setting = tra.Custom.PercentKline.get();

            var top_per = 0;
            for (var i = 0; i < percent_setting["percent_kline"].length && i <= tra.draggerSet.dragging_kline_index; i++) {
                top_per += percent_setting["percent_kline"][i];
            }
            var bot_per = 100 - top_per;

            var add_per = percentage / top_per;
            for (var i = 0; i < percent_setting["percent_kline"].length && i <= tra.draggerSet.dragging_kline_index; i++) {
                percent_setting["percent_kline"][i] = percent_setting["percent_kline"][i] * add_per;
            }

            var dec_per = (100 - percentage) / bot_per;
            for (var i = tra.draggerSet.dragging_kline_index + 1; i < percent_setting["percent_kline"].length; i++) {
                percent_setting["percent_kline"][i] = percent_setting["percent_kline"][i] * dec_per;
            }

            tra.Custom.PercentKline.set(percent_setting);

            $('#ghostbar-kline').remove();
            tra.kChart.init();
            $(document).unbind('mousemove');
            tra.draggerSet.dragging_kline = false;
        }
    });
};

tra.setDragBarItemCallback = function () {
    $(".dragbar-item").mousedown(function (e) {
        e.preventDefault();

        tra.draggerSet.dragging_item = true;
        var main = $(".item-block");
        var ghostbar = $('<div>', { id: 'ghostbar-item',
            css: {
                width: main.outerWidth(),
                top: main.offset().top + main.height(),
                left: main.offset().left
            }
        }).appendTo('body');

        $(document).mousemove(function (e) {
            ghostbar.css("top", e.pageY + 2);
        });
    });

    $(document).mouseup(function (e) {
        if (tra.draggerSet.dragging_item) {
            var percentage = (e.pageY - $(".navbar").height()) / $(".container-right").innerHeight() * 100;
            var mainPercentage = 100 - percentage;

            $(".item-block").css("height", percentage + "%");
            $(".my-trade-block").css("height", mainPercentage + "%");

            var percent_setting = tra.Custom.Percent.get();
            percent_setting["percent"]["item_percent"] = percentage;
            tra.Custom.Percent.set(percent_setting);

            $('#ghostbar-item').remove();
            tra.Page.reCalculate();
            $(document).unbind('mousemove');
            tra.draggerSet.dragging_item = false;
        }
    });
};

tra.setDragBarPriceCallback = function () {
    $(".dragbar-price").mousedown(function (e) {
        e.preventDefault();

        tra.draggerSet.dragging_price = true;
        var main = $(".price-detail");
        var ghostbar = $('<div>', { id: 'ghostbar-price',
            css: {
                width: main.outerWidth(),
                top: main.offset().top + main.height(),
                left: main.offset().left
            }
        }).appendTo('body');

        $(document).mousemove(function (e) {
            ghostbar.css("top", e.pageY + 2);
        });
    });

    $(document).mouseup(function (e) {
        if (tra.draggerSet.dragging_price) {
            if (tra.Custom.WebContent.get() == "A") {
                var percentage = (e.pageY - $(".navbar").height()) / $(".container-left").innerHeight() * 100;
                var mainPercentage = 100 - percentage;

                $(".price-detail").css("height", percentage + "%");
                $(".order-block").css("height", mainPercentage + "%");

                var percent_setting = tra.Custom.Percent.get();
                percent_setting["percent"]["price_percent"] = percentage;
                tra.Custom.Percent.set(percent_setting);

                $('#ghostbar-price').remove();
                tra.Page.reCalculate();
                $(document).unbind('mousemove');
                tra.draggerSet.dragging_price = false;
            } else {
                var percent_setting = tra.Custom.Percent.get();

                var percentage = (e.pageY - $(".navbar").height()) / $(".container-left").innerHeight() * 100;
                if (percentage <= percent_setting["percent"]["dragger_percent"]) {
                    $('#ghostbar-price').remove();
                    $(document).unbind('mousemove');
                    tra.draggerSet.dragging_price = false;
                    return;
                }
                percentage -= percent_setting["percent"]["dragger_percent"];
                var mainPercentage = 100 - percentage - percent_setting["percent"]["dragger_percent"];

                $(".web-cotent-b-chart-container").css("height", percent_setting["percent"]["dragger_percent"] + "%");
                $(".price-detail").css("height", percentage + "%");
                $(".order-block").css("height", mainPercentage + "%");

                percent_setting["percent"]["price_percent"] = percentage;
                tra.Custom.Percent.set(percent_setting);

                $('#ghostbar-price').remove();
                tra.Page.reCalculate();
                $(document).unbind('mousemove');
                tra.draggerSet.dragging_price = false;
            }
        }
    });
};

tra.setWebContentDragBarPriceCallback = function () {
    $(".dragbar-chart").mousedown(function (e) {
        e.preventDefault();

        tra.draggerSet.dragging_chart = true;
        var main = $(".web-cotent-b-chart-container");
        var ghostbar = $('<div>', { id: 'ghostbar-price',
            css: {
                width: main.outerWidth(),
                top: main.offset().top + main.height(),
                left: main.offset().left
            }
        }).appendTo('body');

        $(document).mousemove(function (e) {
            ghostbar.css("top", e.pageY + 2);
        });
    });

    $(document).mouseup(function (e) {
        if (tra.draggerSet.dragging_chart) {
            var percent_setting = tra.Custom.Percent.get();

            var percentage = (e.pageY - $(".navbar").height()) / $(".container-left").innerHeight() * 100;
            if (percentage <= 0) {
                $('#ghostbar-price').remove();
                $(document).unbind('mousemove');
                tra.draggerSet.dragging_chart = false;
                return;
            }

            var priceMainPercentage = percent_setting["percent"]["price_percent"] - (percentage - percent_setting["percent"]["dragger_percent"]);
            var mainPercentage = 100 - percentage - priceMainPercentage;

            $(".web-cotent-b-chart-container").css("height", percentage + "%");
            $(".price-detail").css("height", priceMainPercentage + "%");
            $(".order-block").css("height", mainPercentage + "%");

            percent_setting["percent"]["dragger_percent"] = percentage;
            percent_setting["percent"]["price_percent"] = priceMainPercentage;
            tra.Custom.Percent.set(percent_setting);

            $('#ghostbar-price').remove();
            tra.Page.reCalculate();
            $(document).unbind('mousemove');
            tra.draggerSet.dragging_chart = false;
        }
    });
};

tra.setDateClickCallback = function () {
    $.datepicker.regional['zh-TW'] = {
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        prevText: "上月",
        nextText: "次月",
        weekHeader: "週"
    };
    $.datepicker.setDefaults($.datepicker.regional["zh-TW"]);
    $(".history-start-date").datepicker({ dateFormat: "yy/mm/dd" });
    $(".history-end-date").datepicker({ dateFormat: "yy/mm/dd" });
    $(".moneylist-start-date").datepicker({ dateFormat: "yy-mm-dd" });
    $(".moneylist-end-date").datepicker({ dateFormat: "yy-mm-dd" });
    $(".moneylist-start-date").val(getDatePeriod("month")[0]);
    $(".moneylist-end-date").val(getDatePeriod("month")[1]);
    $(".action-start-date").datepicker({ dateFormat: "yy-mm-dd" });
    $(".action-end-date").datepicker({ dateFormat: "yy-mm-dd" });
    $(".action-start-date").val(getDatePeriod("month")[0]);
    $(".action-end-date").val(getDatePeriod("month")[1]);
    $(".charge-start-date").datepicker({ dateFormat: "yy-mm-dd" });
    $(".charge-end-date").datepicker({ dateFormat: "yy-mm-dd" });
    $(".charge-start-date").val(getDatePeriod("month")[0]);
    $(".charge-end-date").val(getDatePeriod("month")[1]);
    $(".history-start-date").datepicker({ dateFormat: "yy-mm-dd" });
    $(".history-end-date").datepicker({ dateFormat: "yy-mm-dd" });
    $(".history-start-date").val(getDatePeriod("month")[0]);
    $(".history-end-date").val(getDatePeriod("month")[1]);
};

tra.setUserHistoryDetailFilterCallback = function () {
    $(".user-history-detail-button").click(function () {
        $(".modal-user-history-detail table").hide();
        $("." + $(this).attr("table")).show();
    });
};

tra.Custom = {
    init: function init(items) {
        function saveSetting(target) {
            var data = [];
            var ids = [];
            $(target + " option").each(function () {
                data.push([$(this).attr("value"), $(this).text()]);
                ids.push($(this).attr("value"));
            });
            /*if(ids.length > 0) {
                if(target == "#multiselect_item_to") {
                    tra.API.send("x:" + ids.join(","));
                }
                else if(target == "#multiselect_item") {
                    tra.API.send("p:" + ids.join(","));
                }
            }*/
            return data;
        }

        $(".save-custom-button").click(function () {

            var item_setting = {
                "show": [],
                "hide": []
            };
            var col_setting = {
                "show": [],
                "hide": []
            };
            item_setting["hide"] = saveSetting("#multiselect_item");
            item_setting["show"] = saveSetting("#multiselect_item_to");
            col_setting["hide"] = saveSetting("#multiselect_col");
            col_setting["show"] = saveSetting("#multiselect_col_to");
            tra.Custom.Item.set(item_setting);
            tra.Custom.Col.set(col_setting);
            tra.API.Custom.set(item_setting, col_setting);
            tra.Item.refresh();
        });

        $(".save-tech-button").click(function () {
            tra.kChart.init();
        });
        tra.API.Custom.get(items);
    },

    load: function load(item_setting, col_setting, tech_setting) {
        function render(target, data) {
            var option = [];
            for (var i in data) {
                option.push('<option value="' + data[i][0] + '">' + data[i][1] + '</option>');
            }
            $(target).html(option.join("\n"));
        }

        if (item_setting["show"].length != 0 || item_setting["hide"].length != 0) {
            render("#multiselect_item", item_setting["hide"]);
            render("#multiselect_item_to", item_setting["show"]);
        }
        if (col_setting["show"].length != 0 || col_setting["hide"].length != 0) {
            render("#multiselect_col", col_setting["hide"]);
            render("#multiselect_col_to", col_setting["show"]);
        }
        if (tech_setting["tech_to"].length != 0) {
            tech_render("#multiselect_tech_to", 0, tech_setting["tech_to"]);
            tech_render("#multiselect_tech", 1, tech_setting["tech_to"]);
        }
        if (tra.ConfigSet.ORDERAPI_CLIENT == 0) {
            tra.Item.refresh();
        }
    },

    render: function render(items, res) {
        var item_setting = {};
        var col_setting = {};
        var tech_setting = {};
        if ($.isEmptyObject(res["UserSaveData"]) || res["UserSaveData"]["UscommodityOn"] == "[]" && res["UserSaveData"]["UscommodityOff"] == "[]" && res["UserSaveData"]["UstypeOn"] == "[]" && res["UserSaveData"]["UstypeOff"] == "[]") {
            item_setting = {
                "show": [],
                "hide": []
            };
            col_setting = {
                "show": [["product_name", "商品名稱"], ["stock", "倉位"], ["newest_price", "成交價"], ["open_price", "開盤價"], ["up_down", "漲跌"], ["up_down_ratio", "漲跌幅%"], ["yesterday_close_price", "昨結盤"], ["no_new", "禁新"], ["force_close", "強平"], ["final_date", "最後交易日"], ["status", "狀態"], ["k_bun", "K棒"]],
                "hide": [["mini_chart", "走勢"], ["five-ratio", "內外盤比"], ["bp_price", "買進價"], ["sp_price", "賣出價"], ["total_qty", "總量"], ["highest_price", "最高價"], ["lowest_price", "最低價"], ["yesterday_last_price", "昨收算"], ["newest_time", "時間"]]
            };
            for (var i in items) {
                item_setting["show"].push([items[i]["product_id"], "[" + tra.exchange[items[i]["market"]] + "] " + items[i]["product_name"]]);
            }
        } else {
            item_setting["show"] = JSON.parse(res["UserSaveData"]["UscommodityOn"]);
            item_setting["hide"] = JSON.parse(res["UserSaveData"]["UscommodityOff"]);
            col_setting["show"] = JSON.parse(res["UserSaveData"]["UstypeOn"]);
            col_setting["hide"] = JSON.parse(res["UserSaveData"]["UstypeOff"]);
        }

        var tech_setting = tra.Custom.Tech.get();

        if (!("version" in tech_setting) || "version" in tech_setting && tech_setting["version"] < 3.7) {
            tech_setting = {
                "version": 3.7,
                "tech_to": [["main_chart", "［ 主圖表 ］"], ["m_averge_line1", "平均線(1)", [[0, "週期", 1], [1, "類型", 0, "SMA", "WMA", "EMA"], [2, "MA", "ff1233"]], 0], ["m_averge_line2", "平均線(2)", [[0, "週期", 2], [1, "類型", 0, "SMA", "WMA", "EMA"], [2, "MA", "ff2233"]], 0], ["m_averge_line3", "平均線(3)", [[0, "週期", 3], [1, "類型", 0, "SMA", "WMA", "EMA"], [2, "MA", "ff3233"]], 0], ["m_averge_line4", "平均線(4)", [[0, "週期", 4], [1, "類型", 0, "SMA", "WMA", "EMA"], [2, "MA", "ff4233"]], 0], ["m_averge_line5", "平均線(5)", [[0, "週期", 5], [1, "類型", 0, "SMA", "WMA", "EMA"], [2, "MA", "ff5233"]], 0], ["m_averge_line6", "平均線(6)", [[0, "週期", 6], [1, "類型", 0, "SMA", "WMA", "EMA"], [2, "MA", "ff6233"]], 0], ["m_sar_line", "SAR", [[0, "週期1", 14], [2, "SAR", "3cb371"]], 0], ["m_bollingerband_line", "保力加通道", [[0, "週期1", 20], [2, "MA", "3cb371"], [2, "UP", "ffb371"], [2, "DOWN", "3cff71"]], 0], ["m_ichimoku_line", "一目均衡表", [[0, "轉換週期", 9], [0, "基準週期", 26], [0, "先行週期", 52], [2, "Tenkan", "ffb371"], [2, "Kijun", "1123ff"], [2, "SpanA", "113371"], [2, "SpanB", "2fa371"], [2, "Chinkou", "11ff71"]], 0], ["tech_chart", "［ 指標圖標 ］"], ["t_kd_line", "KD", [[0, "週期", 9], [2, "K", "ff4233"], [2, "D", "3cb371"], [4, "顯示買賣訊號", 0]], 0], ["t_rsi_line", "RSI", [[0, "週期1", 3], [0, "週期2", 6], [2, "RSI1", "ff4233"], [2, "RSI2", "3cb371"], [4, "顯示買賣訊號", 0]], 0], ["t_macd_line", "MACD", [[0, "快速", 12], [0, "慢速", 26], [0, "簡單", 9], [2, "DIF", "99ffff"], [2, "MACD", "cccccc"], [2, "OSCup", "ff3300"], [2, "OSCdown", "c0c0c0"], [4, "顯示買賣訊號", 0]], 0], ["t_dmi_line", "DMI", [[0, "週期1", 14], [2, "+DMI", "ff0000"], [2, "-DMI", "00ff00"], [2, "ADX", "ff00ff"], [4, "顯示買賣訊號", 0]], 0], ["t_bias_line", "BIAS", [[0, "週期1", 14], [2, "BIAS", "3cb371"]], 0], ["t_obv_line", "OBV", [[2, "OBV", "3cb371"]], 0], ["t_wr_line", "威廉指標 ( WM's R% )", [[0, "週期1", 14], [2, "W%R", "ffff00"]], 0], ["t_psy_line", "PSY( Psychological Line) 人氣指標心理線", [[0, "週期1", 14], [2, "PSY", "ffff00"]], 0], ["t_mtm_line", "MTM 動量指標", [[0, "週期1", 1], [2, "MTM", "aa4233"]], 0], ["t_ar_line", "AR-買賣氣勢指標", [[0, "週期1", 14], [2, "AR", "3cb371"]], 0], ["t_br_line", "BR-買賣意願指標", [[0, "週期1", 14], [2, "BR", "3cb371"]], 0], ["t_inoutad_line", "進貨出貨 A/D", [[0, "週期1", 9], [2, "A/D", "3cb371"], [2, "Signal", "3cb3ff"], [4, "顯示買賣訊號", 0]], 0], ["t_sooncci_line", "順勢指標 CCI", [[0, "週期1", 9], [2, "CCI", "3cb371"], [2, "Signal", "ffb371"]], 0], ["t_vr_line", "VR(Volume Ratio) 成交量比率", [[0, "週期1", 14], [2, "VR", "3cb371"]], 0], ["t_mi_line", "MI", [[0, "週期1", 9], [2, "EMA1", "ff4233"], [2, "EMA2", "ff4233"], [2, "MI", "ffff11"]], 0], ["t_volum_line", "成交量", [[3, "顯示平均線", 1], [0, "週期", 5], [1, "類型", 0, "SMA", "WMA", "EMA"], [2, "MA", "ff6233"], [2, "漲", "ff2233"], [2, "跌", "11ff33"], [2, "平", "cccccc"]], 0], ["t_country_line", "外資未平倉", [[1, "類型", 0, "臺股期貨", "電子期貨", "金融期貨", "美國道瓊期貨"], [2, "多方未平倉", "ff3311"], [2, "空方未平倉", "11ff11"]], 0], ["t_tosin_line", "投信未平倉", [[1, "類型", 0, "臺股期貨", "電子期貨", "金融期貨", "美國道瓊期貨"], [2, "多方未平倉", "ff3311"], [2, "空方未平倉", "11ff11"]], 0], ["t_jiin_line", "自營商未平倉", [[1, "類型", 0, "臺股期貨", "電子期貨", "金融期貨", "美國道瓊期貨"], [2, "多方未平倉", "ff3311"], [2, "空方未平倉", "11ff11"]], 0], ["t_firstfive_line", "前5大交易人未沖銷", [[2, "前5大買方未沖銷", "ff3311"], [2, "前5大賣方未沖銷", "11ff11"]], 0], ["t_firstten_line", "前10大交易人未沖銷", [[2, "前10大買方未沖銷", "ff3311"], [2, "前10大賣方未沖銷", "11ff11"]], 0], ["t_twtslq_delline", "台指價差", [[2, "台指價差up", "6666FF"], [2, "台指價差down", "66FF77"]], 0], ["t_twtslq_buysellline", "委買委賣", [[2, "委買", "ff2211"], [2, "委賣", "22ff11"]], 0]]
            };
            tra.Custom.Tech.set(tech_setting);
        }

        tra.Custom.Item.set(item_setting);
        tra.Custom.Col.set(col_setting);
        tra.Custom.load(item_setting, col_setting, tech_setting);
    },

    Item: {
        get: function get() {
            var show = localStorage.getItem("item_show") === null ? [] : localStorage.getItem("item_show");
            var hide = localStorage.getItem("item_hide") === null ? [] : localStorage.getItem("item_hide");
            return {
                "show": JSON.parse(show),
                "hide": JSON.parse(hide)
            };
        },
        set: function set(setting) {
            localStorage.setItem("item_show", JSON.stringify(setting["show"]));
            localStorage.setItem("item_hide", JSON.stringify(setting["hide"]));
        }
    },

    Col: {
        get: function get() {
            var show = localStorage.getItem("col_show") === null ? [] : localStorage.getItem("col_show");
            var hide = localStorage.getItem("col_hide") === null ? [] : localStorage.getItem("col_hide");
            return {
                "show": JSON.parse(show),
                "hide": JSON.parse(hide)
            };
        },
        set: function set(setting) {
            localStorage.setItem("col_show", JSON.stringify(setting["show"]));
            localStorage.setItem("col_hide", JSON.stringify(setting["hide"]));
        }
    },

    Tech: {
        get: function get() {
            var tech_to = localStorage.getItem("tech_to") === null ? "[]" : localStorage.getItem("tech_to");
            return JSON.parse(tech_to);
        },
        set: function set(setting) {
            localStorage.setItem("tech_to", JSON.stringify(setting));
        }
    },

    Percent: {
        get: function get() {
            var percent_to = localStorage.getItem("percent") === null ? "[]" : localStorage.getItem("percent");
            return {
                "percent": JSON.parse(percent_to)
            };
        },
        set: function set(setting) {
            localStorage.setItem("percent", JSON.stringify(setting["percent"]));
        }
    },

    PercentKline: {
        get: function get() {
            var percent_to = localStorage.getItem("percent_kline") === null ? "[]" : localStorage.getItem("percent_kline");
            return {
                "percent_kline": JSON.parse(percent_to)
            };
        },
        set: function set(setting) {
            localStorage.setItem("percent_kline", JSON.stringify(setting["percent_kline"]));
        }
    },

    WebContent: {
        get: function get() {
            var web_content_set = localStorage.getItem("web_content_set") || "A";
            return web_content_set;
        },
        set: function set(setting) {
            localStorage.setItem("web_content_set", setting);
        }
    }
};

tra.Order = {
    init: function init() {
        tra.Order.render.init();
    }
};

tra.calculateFloatMoney = function () {
    var current_point;
    var diff, totalmoney, point_diff;
    var float_money = 0;
    var user_money = strParseInt($(".user-money").text());
    var colored_point, colored_totalmoney;
    for (var i in tra.Order.UncoveredArray) {
        current_point = $(".item-" + tra.Order.UncoveredArray[i]["ID"] + " td.newest_price").text();
        if (current_point == "") {
            setTimeout(function () {
                tra.calculateFloatMoney();
            }, 200);
            return;
        }
        diff = parseInt(current_point) - parseInt(tra.Order.UncoveredArray[i]["FinalPrice"]);
        if (tra.Order.UncoveredArray[i]["BuyOrSell"] == 0) {
            point_diff = diff;
            float_money += diff * parseInt(tra.Order.UncoveredArray[i]["PointMoney"]) * parseInt(tra.Order.UncoveredArray[i]["Quantity"]);
        } else {
            point_diff = diff * -1;
            float_money -= diff * parseInt(tra.Order.UncoveredArray[i]["PointMoney"]) * parseInt(tra.Order.UncoveredArray[i]["Quantity"]);
        }
        //float_money -= parseInt(tra.Order.UncoveredArray[i]["TotalFee"]);
        colored_point = point_diff > 0 ? '<span class="red">&#9650;' + point_diff.toString() + '</span>' : point_diff == 0 ? point_diff.toString() : '<span class="green">&#9660;' + Math.abs(point_diff.toString()) + '</span>';
        totalmoney = point_diff * parseInt(tra.Order.UncoveredArray[i]["PointMoney"]) * parseInt(tra.Order.UncoveredArray[i]["Quantity"]) - parseInt(tra.Order.UncoveredArray[i]["TotalFee"]);
        colored_totalmoney = totalmoney > 0 ? '<span class="red">+' + totalmoney.toString() + '</span>' : '<span class="green">' + totalmoney.toString() + '</span>';

        $(".my-trade-table-uncovered tbody").children("tr:eq(" + i.toString() + ")").find(".uncovered-point").html(colored_point);
        $(".my-trade-table-uncovered tbody").children("tr:eq(" + i.toString() + ")").find(".uncovered-totalmoney").html(colored_totalmoney);
    }
    if (float_money > 0) {
        $(".float-money").html('<span class="header-red">+' + formatNumber(float_money) + '</span>');
    } else if (float_money < 0) {
        $(".float-money").html('<span class="header-green">' + formatNumber(float_money) + '</span>');
    } else {
        $(".float-money").html('0');
    }
    $(".user-money-float").text(formatNumber(user_money + float_money));
};

tra.playSound = function (file) {
    $("audio").remove();
    $('<audio autoplay="autoplay" style="display:none;">' + '<source src="' + file + '" />' + '<embed src="' + file + '" hidden="true" autostart="true" loop="false" class="playSound" />' + '</audio>').appendTo('body');
};

exports.tra = tra;
exports.p = p;
exports.getDateTime = getDateTime;
exports.getDate = getDate;
exports.getTime = getTime;
exports.getDatePeriod = getDatePeriod;
exports.getColor = getColor;
exports.rgb2hex = rgb2hex;
exports.formatTime = formatTime;
exports.formatNumber = formatNumber;
exports.updateInput = updateInput;
exports.updateTech = updateTech;
exports.updateSelectTech = updateSelectTech;
exports.updateColorTech = updateColorTech;
exports.updateCheckBoxTech = updateCheckBoxTech;
exports.tech_render = tech_render;
exports.strParseInt = strParseInt;
exports.str_pad = str_pad;

/***/ })
/******/ ]);
//# sourceMappingURL=desktop.js.map