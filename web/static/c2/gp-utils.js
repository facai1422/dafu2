/**
 * Date对象格式化
 * @param format (年:yyyy; 月:MM; 日:dd; 时:hh; 分:mm; 秒:ss)
 * @returns {*}
 */
Date.prototype.format = function(format){
    var o = {
        'M+' : this.getMonth()+1, //month
        'd+' : this.getDate(), //day
        'h+' : this.getHours(), //hour
        'm+' : this.getMinutes(), //minute
        's+' : this.getSeconds(), //second
        'q+' : Math.floor((this.getMonth()+3)/3), //quarter
        'S' : this.getMilliseconds() //millisecond
    };
    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear()+'').substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp('('+ k +')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[''+k] : ('00'+ o[''+k]).substr((''+ o[''+k]).length));
        }
    }
    return format;
};
/**
 * 字符串格式化
 * 范例: '{0}a%sb{1}c%sd{0}'.format('0', '1', '2', '3') = 0a2b1c3d0
 * @returns {string}
 */
String.prototype.format = function(){
    var result = this;
    var len = arguments == null ? 0 : arguments.length;
    if(len > 0){
        var i = 0;
        for(; i<len; i++){
            var reg = '{' + i + '}', value = arguments[i];
            if(result.indexOf(reg) >= 0) {
                while (result.indexOf(reg) >= 0) {
                    result = result.replace(reg, value);
                }
            }
            else{
                break;
            }
        }
        for(; i<len; i++){
            result = result.replace('%s', arguments[i]);
        }
    }
    return '' + result;
};

var $GP_Utils = function(){
    return {
        /**
         * 是否整型
         * @param str
         * @returns {boolean}
         */
        is_int: function(str){
            return /^\d+$/.test('' + str);
        },
        /**
         * 是否数值型, 包含小数
         * @param str
         * @returns {boolean}
         */
        is_number: function(str){
            return /^[\d.]+$/.test('' + str);
        },
        /**
         * 值
         * @param val
         * @returns {string}
         */
        get_str: function(val){
            return val == null ? '' : '' + val;
        },
        /**
         * 转换为整型
         * @param val
         * @param default_value 默认值:0
         * @returns {*}
         */
        get_int: function(val, default_value){
            if(typeof val == 'boolean'){
                return val ? 1 : 0;
            }
            return isNaN(parseInt(val)) ? (default_value || 0) : parseInt(val);
        },
        /**
         * 整型字符串
         * @param str
         * @returns {string}
         */
        get_int_str: function(str){
            return ('' + str).replace(/\D/g, '');
        },
        /**
         * 转换为浮点型
         * @param str
         * @param default_value 默认值为0
         * @returns {*}
         */
        get_decimal: function(str, default_value){
            return isNaN(parseFloat(str)) ? (default_value || 0) : parseFloat(str);
        },
        /**
         * 浮点型字符串
         * @param str
         * @returns {string}
         */
        get_decimal_str: function(str){
            return ('' + str).replace(/[^\d.]/g, '');
        },
        get_bool: function(val){
            return this.get_int(val) != 0;
        },
        /**
         * 金额格式化, 固定精度3位小数
         * @param money
         * @returns {string}
         */
        get_money: function(money){
            return (isNaN(Number(money)) ? 0 : Number(money)).toFixed(3);
        },
        /**
         * 金额格式化, 去除小数点尾数0
         * @param money
         * @returns {string}
         */
        get_short_money: function(money){
            if(isNaN(Number(money)) || Number(money) == 0){
                return '0';
            }
            var d_index = (''+money).indexOf('.');
            if(d_index < 0){
                return money;
            }
            money = '' + money;
            var sub_len = money.length - 1;
            for(var i=sub_len; i > d_index; i--){
                if(money.charAt(i) == '0'){
                    sub_len --;
                }
                else{
                    break;
                }
            }
            return Number(money).toFixed(sub_len - d_index);
        },
        /**
         * 根据key获取字典的值
         * @param dict
         * @param key
         * @param default_val
         * @returns {*}
         */
        get_dict_val: function(dict, key, default_val){
            return typeof dict == 'object' && key in dict ? dict[key] : (default_val || '');
        },
        /**
         * Date对象格式化
         * @param date  Date对象
         * @param formatter 格式化方式, 默认为 yyyy-MM-dd
         * @returns {string} 默认返回 yyyy-MM-dd
         */
        get_date_str: function(date, formatter){
            return (date || new Date()).format(formatter || 'yyyy-MM-dd');
        },
        /**
         * Date对象格式化为yyyyMMdd
         * @param date  Date对象
         * @returns {string} yyyyMMdd
         */
        get_date_short_str: function(date){
            return this.get_date_str(date, null).replace(/\D/g, '');
        },
        /**
         * Date对象格式化
         * @param date  Date对象
         * @param formatter 格式化方式, 默认为 yyyy-MM-dd hh:mm:ss
         * @returns {*|string} 默认返回 yyyy-MM-dd hh:mm:ss
         */
        get_time_str: function(date, formatter){
            return this.get_date_str(date, formatter || 'yyyy-MM-dd hh:mm:ss');
        },
        /**
         * Date对象格式化为yyyyMMddhhmmss
         * @param date  Date对象
         * @returns {string} yyyyMMddhhmmss
         */
        get_time_short_str: function(date){
            return this.get_time_str(date).replace(/\D/g, '');
        },
        /**
         * 时间/日期字符串转换Date对象
         * @param str   时间/日期字符串
         * @returns {Date} Date对象
         */
        time_str_to_date: function(str){
            str = (str == null ? '' : str).replace(/\D/g, '');
            var date = new Date();
            if(str == ''){
                return date;
            }
            date.setDate(1);
            if(str.length > 3){
                date.setFullYear(parseInt(str.substr(0, 4)));
            }
            if(str.length > 5){
                date.setMonth(parseInt(str.substr(4, 2))-1);
            }
            if(str.length > 7){
                date.setDate(parseInt(str.substr(6, 2)));
            }
            if(str.length > 9){
                date.setHours(parseInt(str.substr(8, 2)));
            }
            if(str.length > 11){
                date.setMinutes(parseInt(str.substr(10, 2)));
            }
            if(str.length > 13){
                date.setSeconds(parseInt(str.substr(12, 2)));
            }
            return date;
        },
        /**
         * 时间字符串转换为毫秒数
         * @param time_str  时间字符串
         * @returns {number} 毫秒数
         */
        time_str_to_milliseconds: function(time_str) {
            return this.time_str_to_date(time_str).getTime();
        },
        /**
         * 日期字符串格式化
         * @param date_str  日期字符串
         * @returns {*|string} yyyy-MM-dd
         */
        date_str_formatter: function(date_str){
            return this.get_date_str(this.time_str_to_date(date_str), null);
        },
        /**
         * 时间字符串格式化
         * @param time_str  时间字符串
         * @returns {*|string} yyyy-MM-dd hh:mm:ss
         */
        time_str_formatter: function(time_str){
            return this.get_time_str(this.time_str_to_date(time_str));
        },
        /**
         * 秒数转换时间
         * @param seconds   秒数
         * @returns {string} hh:mm:ss
         */
        seconds_to_time: function(seconds){
            var h = (''+(seconds/3600)).split('.')[0];
            var m = (''+((seconds%3600)/60)).split('.')[0];
            var s = (''+(seconds%60)).split('.')[0];
            return [(h<10?('0'+h):h), (m<10?('0'+m):m), (s<10?('0'+s):s)].join(':');
        },
        /**
         * 金额转换为中文大写
         * @param money
         * @returns {string}
         */
        money_dx_formatter: function(money){
            var str = '', strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
            money = this.get_decimal(money).toFixed(2).replace(/\D/g, '');
            strUnit = strUnit.substr(strUnit.length - money.length);
            for (var i=0; i < money.length; i++){
                str += '零壹贰叁肆伍陆柒捌玖'.substr(this.get_int(money.substr(i, 1)), 1) + strUnit.substr(i, 1);
            }
            return str.replace(/零角零分$/, '整').replace(/零分$/, '').replace(/零[仟佰拾]/g, '零')
                .replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元')
                .replace(/亿零{0,3}万/, '亿').replace(/^元/, '零元');
        },
        /**
         * 根据差异天数获取日期
         * @param date_str  日期/时间字符串, 空为当天
         * @param diff_days 差异天数(正数为加, 负数为减)
         * @returns {Date}
         */
        get_date_by_diff_days: function(date_str, diff_days){
            var date = this.time_str_to_date(date_str);
            diff_days = this.get_int(diff_days);
            if(diff_days != 0) {
                date.setDate(date.getDate() + diff_days);
            }
            return date;
        },
        get_date_str_by_diff_days: function(date_str, diff_days, formatter){
            return this.get_date_str(this.get_date_by_diff_days(date_str, diff_days), formatter);
        },
        get_date_by_diff_month: function(date_str, diff_month){
            var date = this.time_str_to_date(date_str);
            diff_month = this.get_int(diff_month);
            if(diff_month != 0){
                var d = date.getDate();
                date.setDate(1);
                date.setMonth(date.getMonth() + diff_month);
                date.setDate(d);
            }
            return date;
        },
        get_date_str_by_diff_month: function(date_str, diff_month, formatter){
            return this.get_date_str(this.get_date_by_diff_month(date_str, diff_month), formatter);
        },
        /**
         * 根据差异月份获取最小日期和最大日期
         * @param date_str 日期/时间字符串, 空为当月
         * @param diff_month 差异的月数(正数为加, 负数为减)
         * @returns {{date_min: Date, date_max: Date}} {最小日期对象, 最大日期对象}
         */
        get_month_date_range: function(date_str, diff_month){
            var date_min = this.time_str_to_date(date_str);
            date_min.setDate(1);
            diff_month = this.get_int(diff_month);
            if(diff_month != 0){
                date_min.setMonth(date_min.getMonth() + diff_month);
            }
            var date_max = new Date();
            date_max.setFullYear(date_min.getFullYear());
            date_max.setDate(1);
            date_max.setMonth(date_min.getMonth() + 1);
            date_max.setDate(0);
            return {date_min: date_min, date_max: date_max};
        },
        /**
         * 根据差异周数获取最小日期和最大日期
         * @param date_str  日期/时间字符串, 空为当月
         * @param diff_week 差异的周数(正数为加, 负数为减)
         * @returns {{date_min: Date, date_max: Date}} {最小日期对象, 最大日期对象}
         */
        get_week_date_range: function(date_str, diff_week){
            var date_min = this.time_str_to_date(date_str);
            diff_week = this.get_int(diff_week);
            if(diff_week != 0){
                date_min.setDate(date_min.getDate() + (diff_week * 7));
            }
            date_min.setDate(date_min.getDate() - (date_min.getDay() || 7) + 1);
            var date_max = new Date();
            date_max.setFullYear(date_min.getFullYear());
            date_max.setMonth(date_min.getMonth());
            date_max.setDate(date_min.getDate() + 6);
            return {date_min: date_min, date_max: date_max};
        },
        /**
         * 设置Cookie
         * @param key
         * @param value
         */
        set_cookie: function(key, value){
            var exp = new Date();
            exp.setTime(exp.getTime() + 30*24*60*60*1000);
            document.cookie = key + '=' + value + ';expires=' + exp.toGMTString();
        },
        /**
         * 获取Cookie
         * @param key
         * @returns {*}
         */
        get_cookie: function(key){
            var arr = document.cookie.match(new RegExp('(^| )'+key+'=([^;]*)(;|$)'));
            if(arr != null && arr.length > 1 && arr[2] != null){
                return arr[2];
            }
            return '';
        },
        /**
         * 删除Cookie
         * @param key
         */
        clear_cookie: function(key){
            this.set_cookie(key, '');
        },
        /**
         * 获取url上的所有参数
         * @returns {{}} 参数键值对对象
         */
        get_url_params: function(){
            var url = window.location.search;
            var params = {};
            if (url.indexOf('?') != -1) {
                var str = url.substr(1);
                var ls = str.split('&');
                for (var i = 0; i < ls.length; i++) {
                    var _v = ls[i].split('=');
                    params[_v[0]] = unescape(_v[1]);
                }
            }
            return params;
        },
        /**
         * 根据key获取url上的参数
         * @param key
         * @returns {string}
         */
        get_url_param_by_key: function(key) {
            var reg = new RegExp('(^|&)'+ key +'=([^&]*)(&|$)');
            var r = window.location.search.substr(1).match(reg);
            if(r != null){
                return  unescape(r[2]);
            }
            return '';
        },
        /**
         * 根据字段生成下拉款(select)的选项(option)
         * @param dict  选项键值对字典
         * @returns {string} 选项(option)html代码
         */
        get_select_option_html_by_dict: function(dict){
            var result = '';
            if(dict == null){
                dict = {};
            }
            for(var key in dict){
                result += '<option>' + dict[''+key] + '</option>';
            }
            return result;
        },
        // 数组排序(升序)
        array_sort: function (arr, asc){
            if(asc == null){
                asc = true;
            }
            arr.sort(function(a, b){
                if(!asc){
                    return a-b;
                }
                return b-a;
            });
            return arr;
        },
        get_dict_len: function(dict){
            var len = 0;
            for(var _ in dict){
                len ++;
            }
            return len;
        },
        value_in_dict: function(dict, val){
            for(var k in dict){
                if(dict[''+k] == val){
                    return ''+k;
                }
            }
            return '';
        }
    }
}();
