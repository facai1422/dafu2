/* PRJ_NAME_START */
var PRJ_NAME = "金彩会官方信誉网";
/* PRJ_NAME_END */

/* PRJ_URL_START */
var PRJ_URL = "";
/* PRJ_URL_END */

/* PRJ_SPEED_URL_START */
var PRJ_SPEED_URL = [
    ''
];
/* PRJ_SPEED_URL_END */

var PRJ_THIRD_SPEED_URL = '';  // 第三方线路检测

/* PRJ_QQ_START */
var PRJ_QQ = "443518663";
/* PRJ_QQ_END */

/* PRJ_PROXY_QQ_START */
var PRJ_PROXY_QQ = "";
/* PRJ_PROXY_QQ_END */

/* PRJ_MAIL_START */
var PRJ_MAIL = "";
/* PRJ_MAIL_END */

/* PRJ_TEL_START */
var PRJ_TEL = "";
/* PRJ_TEL_END */

/* PRJ_MOBILE_URL_START */
var PRJ_MOBILE_URL = "http://mobile.jincaih.com/";  // mobile-url /*暂时临时替换空白判断地址，需要跳转请布上*/
/* PRJ_MOBILE_URL_END */

/* PRJ_SERVICE_URL_START */
var PRJ_SERVICE_URL = "https://vf18.chatbay.net/chat/chatClient/chatbox.jsp?companyID=839778&jid=3238627566&s=1"; // online-service
/* PRJ_SERVICE_URL_END */

/* PRJ_DOWN_PLATFORM_IPA_URL_START */
var PRJ_DOWN_PLATFORM_IPA_URL = "";  // platform-iphone
/* PRJ_DOWN_PLATFORM_IPA_URL_END */

/* PRJ_DOWN_PLATFORM_APK_URL_START */
var PRJ_DOWN_PLATFORM_APK_URL = ""; // platform-android
/* PRJ_DOWN_PLATFORM_APK_URL_END */

/* PRJ_DOWN_LOTTERY_PC_URL_START */
var PRJ_DOWN_LOTTERY_PC_URL = "https://appplugs.com/download/huisheng";  // lottery-pc
/* PRJ_DOWN_LOTTERY_PC_URL_END */

/* PRJ_DOWN_LOTTERY_IPA_URL_START */
var PRJ_DOWN_LOTTERY_IPA_URL = "https://appplugs.com/download/huisheng";  // lottery-iphone
/* PRJ_DOWN_LOTTERY_IPA_URL_END */

/* PRJ_DOWN_LOTTERY_APK_URL_START */
var PRJ_DOWN_LOTTERY_APK_URL = "https://appplugs.com/download/huisheng"; // lottery-android
/* PRJ_DOWN_LOTTERY_APK_URL_END */

/* PRJ_DOWN_PT_PC_URL_START */
var PRJ_DOWN_PT_PC_URL = "";  // pt-pc
/* PRJ_DOWN_PT_PC_URL_END */

/* PRJ_DOWN_PT_IPA_URL_START */
var PRJ_DOWN_PT_IPA_URL = "";  // pt-iphone
/* PRJ_DOWN_PT_IPA_URL_END */

/* PRJ_DOWN_PT_APK_URL_START */
var PRJ_DOWN_PT_APK_URL = ""; // pt-android
/* PRJ_DOWN_PT_APK_URL_END */

/* PRJ_DOWN_AG_PC_URL_START */
var PRJ_DOWN_AG_PC_URL = "";  // ag-pc
/* PRJ_DOWN_AG_PC_URL_END */

/* PRJ_DOWN_AG_IPA_URL_START */
var PRJ_DOWN_AG_IPA_URL = "";  // ag-iphone
/* PRJ_DOWN_AG_IPA_URL_END */

/* PRJ_DOWN_AG_APK_URL_START */
var PRJ_DOWN_AG_APK_URL = ""; // ag-android
/* PRJ_DOWN_AG_APK_URL_END */

/* PRJ_DOWN_CHESS_PC_URL_START */
var PRJ_DOWN_CHESS_PC_URL = "";  // chess-pc
/* PRJ_DOWN_CHESS_PC_URL_END */

/* PRJ_DOWN_CHESS_IPA_URL_START */
var PRJ_DOWN_CHESS_IPA_URL = "";  // chess-iphone
/* PRJ_DOWN_CHESS_IPA_URL_END */

/* PRJ_DOWN_CHESS_APK_URL_START */
var PRJ_DOWN_CHESS_APK_URL = ""; // chess-android
/* PRJ_DOWN_CHESS_APK_URL_END */

/* PRJ_MIN_PAY_MONEY_START */
var PRJ_MIN_PAY_MONEY = 50;
/* PRJ_MIN_PAY_MONEY_END */

/* PRJ_MAX_PAY_MONEY_START */
var PRJ_MAX_PAY_MONEY = 100000;
/* PRJ_MAX_PAY_MONEY_END */

/* PRJ_MIN_ONLINE_PAY_MONEY_START */
var PRJ_MIN_ONLINE_PAY_MONEY = 50;
/* PRJ_MIN_ONLINE_PAY_MONEY_END */

/* PRJ_MAX_ONLINE_PAY_MONEY_START */
var PRJ_MAX_ONLINE_PAY_MONEY = 100000;
/* PRJ_MAX_ONLINE_PAY_MONEY_END */

/* PRJ_MIN_DRAW_MONEY_START */
var PRJ_MIN_DRAW_MONEY = 100;
/* PRJ_MIN_DRAW_MONEY_END */

/* PRJ_MAX_DRAW_MONEY_START */
var PRJ_MAX_DRAW_MONEY = 1000000;
/* PRJ_MAX_DRAW_MONEY_END */


/**
 *
 * STATUS: int
 * value: 0: 关闭; 1: 正常开放; 2: 维护中; 3: 稍后开放
 */
var GAME_STATUS = {
    lottery: 1,
    sport: 0,
    qps: 0,
    ag: 1,
    mg: 1,
    pt: 1,
    nt: 1,
    ig: 0,
    playtech: 0,
    bbin: 1,
    agbbin: 0,
    agchess: 0,
    agshaba: 1,
    lucky28:1,
};
var GAME_STATUS_MEMO = {
    0: '关闭',
    1: '正常',
    2: '维护中',
    3: '稍后开放'
};

var BET_M_LIMIT = '';

var ACCOUNT_CONFIG = {
    game: {
        interface_type: 1
    },
    member: {
        real_name: {
            show: true,
            edit: true
        },
        qq: {
            show: true,
            edit: true
        },
        mail: {
            show: true,
            edit: true
        },
        tel: {
            show: true,
            edit: true
        }
    },
    finance: {
        min_deposit_online: 50,
        min_deposit_company: 50,
        min_withdraw: 100,
        max_withdraw: 500000,
        day_max_withdraw: 5000000,
        max_withdraw_times: 5,
        withdraw_time: '全天24小时服务',
        filter_user_bank_id: ['121', '122', '123']
    },
    proxy: {
        show_lower_qq: false
    }
};

/* _START */

/* _END */