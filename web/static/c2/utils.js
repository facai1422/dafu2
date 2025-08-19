// 定义时间格式化函数
Date.prototype.format = function(format){
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    };
    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
};
//弹出框
function showAlert(title,content,width){
	art.dialog({
		id: 'cps1001',
		title: title,
		lock: true,
		fixed: true,
		resize: false,
		drag: true,
		width: getVal(width)==''?'auto':width,
		content: content,
		ok: true
	});
}
//弹出框（带图标）
function showTiShi(title,content,width,icon, callback){
	art.dialog({
		id: 'cps1001',
		title: title,
		lock: true,
		fixed: true,
		resize: false,
		time: false,
		width: getVal(width)==''?'auto':width,
		icon: icon,
		content: content,
		drag: true,
		ok: typeof callback === 'function'? callback:true
	});
}

function changeParentHeight(id){
    id = getVal(id) == "" ? "mem_index" : id;
    $("#"+id,window.parent.document).attr("height","0px");
    var height = $(document).outerHeight(true);
    $("#"+id,window.parent.document).attr("height",height+"px");
}

function getURLparam() {
    var url = window.location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
function get_url_param_by_key(key) {
    var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null){
        return  unescape(r[2]);
    }
    return '';
}

function art_msg(msg){
	if(getVal(msg) == "to_login"){
		alert("请先登录！");
	}else if(getVal(msg) == "repeat_login"){
		alert("您的账号已在别处登录,请重新登录！");
	}else{
		alert(msg);
	}
}
function TableDataLoding(str){
    var arr = getVal(str) == "" ? [] : str.split(",");
    if(arr.length > 0){
        for(var i=0;i<arr.length;i++){
            $("#"+arr[i] + " tr").remove();
            $("#"+arr[i]).append("<tr align='center'><td colspan='"+$("#"+arr[i]).parent().find('thead th').length+"'>查询中。请稍后...</td></tr>");
        }
        arr = null;
    }
}

function TableDataIsNull(str){
    var arr = getVal(str) == "" ? [] : str.split(",");
    if(arr.length > 0){
        for(var i=0;i<arr.length;i++){
            $("#"+arr[i] + " tr").remove();
            $("#"+arr[i]).append("<tr align='center'><td colspan='"+$("#"+arr[i]).parent().find('thead th').length+"'>查无数据。请重试...</td></tr>");
        }
        arr = null;
    }
}

function getBegintime(){
	var date = new Date();
	var time = date.format('yyyy-MM-dd');
	time += " 00:00:00";
	return time;
}

function getEndtime(){
	var date = new Date();
	var time = date.format('yyyy-MM-dd');
	time += " 23:59:59";
	return time;
}

function getDate(subdays){
	var date = new Date();
	date.setTime(date.getTime() - (24*60*60*1000*subdays));
	return date.format('yyyy-MM-dd');
}

function getTime(){
	return new Date().format('hh:mm:ss');
}

//转换日期（yyyyMMdd）为（yyyy-MM-dd）
function formatDate(date){
	try{
		var year = date.substr(0,4);
		var month = date.substr(4,2);
		var day = date.substr(6,2);
		if(year != "" && month != "" && day != ""){
			return year + "-" + month + "-" + day;
		}
		return "";
	}catch(e){
		return "";
	}
}
//转换日期（yyyyMMddHHmmss）为（yyyy-MM-dd HH:mm:ss）
function formatTime(date,flag){
	try{
		if(getVal(date) == "")return "";
		var d = new Date();
		d.setFullYear(Number(date.substring(0,4)));
		d.setMonth(Number(date.substring(4,6)) - 1);
		d.setDate(Number(date.substring(6,8)));
		d.setHours(Number(date.substring(8,10)));
		d.setMinutes(Number(date.substring(10,12)));
		d.setSeconds(Number(date.substring(12,14)));
		if(getVal(flag) == "1"){
			var seconds = d.getTime() - (12 * 60 * 60 * 1000);
			d.setTime(seconds);
		}
		return d.format('yyyy-MM-dd hh:mm:ss');
	}catch(e){
		return "";
	}
}
//格式化value
function getVal(val){
    return (val == null || $.trim(val) == "") ? "" : $.trim(val);
}
function time_format(id){
	return $("#"+id).val().replace(/\D/g, '');
}
//格式化时间查询条件
function getTimeCondition(min,max){
	min = getVal(min) == "" ? "time_min" : min;
    max = getVal(max) == "" ? "time_max" : max;
    var begin = getVal($("#beginDate").val());
    var end = getVal($("#endDate").val());
    $("input[name='"+min+"'][type='hidden']").val(begin.replace(/\D/g,''));
    $("input[name='"+max+"'][type='hidden']").val(end.replace(/\D/g,''));
}
//分页信息
function getPageInfo(rs, paging_elem, paging_func){
    var page_index = Number(rs['page_index']);
    if(isNaN(page_index)){
        page_index = 1;
    }
    var total_page = Number(rs['page_count']);
    if(isNaN(total_page)){
        total_page = 1;
    }
    var total_count = Number(rs['count']);
    if(isNaN(total_count)){
        total_count = 1;
    }
    var page_size = Number(rs['page_size']);
    if(isNaN(page_size)){
        page_size = 0;
    }
    paging_elem.find('.paging_info').html('第 '+page_index+' 页, 共 '+total_page+' 页, 共 '+total_count+' 条, 每页 '+page_size+' 条');
    var paging_html = '';
    if(page_index > 1){
        paging_html += '<a class="active" next="'+(page_index-1)+'">上一页</a><a class="active" next="1">1</a>';
    }
    else{
        paging_html += '<a>上一页</a><a>1</a>';
    }
    var begin = 2;
    if((page_index-5) > 2){
        begin = page_index - 4;
        paging_html += '...';
    }
    var end = (page_index + 6) < total_page ? (page_index + 5) : total_page;
    for(; begin < end; begin++){
        paging_html += begin == page_index ? ('<a>'+begin+'</a>') : ('<a class="active" next="'+begin+'">'+begin+'</a>');
    }
    if(end < (total_page-1)){
        paging_html += '...';
    }
    if(page_index < total_page){
        paging_html += '<a class="active" next="'+total_page+'">'+total_page+'</a><a class="active" next="'+(page_index+1)+'">下一页</a>';
    }
    else{
        paging_html += (total_page > 1 ? ('<a>'+total_page+'</a>') : '') + '<a>下一页</a>';
    }
    paging_html += '<input value="'+page_index+'" onkeyup="value=value.replace(/[^0-9]/g,\'\')" onchange="value=value.replace(/[^0-9]/g,\'\')">'
        + '<a class="go">Go</a>';
    paging_elem.find('.paging_jump').html(paging_html);
    paging_elem.find('.paging_jump .active').bind('click', function(){
        var next_page = $(this).attr('next');
        paging_func(next_page);
    });
    paging_elem.find('.paging_jump .go').bind('click', function(){
        var next_page = Number($(this).prev('input').val());
        if(isNaN(next_page) || next_page <= 0){
            alert('请输入正确的页数!');
            $(this).prev('input').focus();
        }
        else {
            paging_func(next_page);
        }
    });
}
//根据输入的页面信息跳转
function pageskip(method_name){
	var pageIndex = $("#pageText").val();
	method_name = getVal(method_name)==""?'search':method_name;
	if(pageIndex <= 0)return;
	if(pageIndex > $("#pageText").data("totalPage")){
		alert("输入的页码不能大于最大页数！");
		return;
	}else{
        if(pageIndex == $("#page_info").data('page_index'))return;
        switch (method_name) {
            case 'search': search(pageIndex,false); break;
            case 'search1': search1(pageIndex,false); break;
            case 'search2': search2(pageIndex,false); break;
        }
	}
}
//验证数字
function checkNums(event){
	event.value = event.value.replace(/\D/g,"");
}
//验证数字
function checkNum(event){
	var val = Number(event.value.replace(/\D/g,""));
	if(isNaN(val))
		val = 0;
	event.value = val<0?'':Number(val);
}

//清空查询条件
function btn_reset(){
	$("#searchForm input[type!='button']").val("");
	$("select").each(function(){
		$(this).find("option").first().attr("selected","selected");
	});
    $("#beginDate").val(getDate(1));
    $("#endDate").val(getDate(0));
}
function Numbers(num){
	return Number(num).toFixed(2);
}
function formatMoney(num) {
	num = ("" + num).replace(/\$|\\,/g, '');
	if (isNaN(num))
		num = "0";
	var sign = (num == (num = Math.abs(num)));
	num = Math.floor(num * 100 + 0.50000000001);
	var cents = num % 100;
	num = Math.floor(num / 100).toString();
	if (cents < 10)
		cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
		num = num.substring(0, num.length - (4 * i + 3)) + ','
			+ num.substring(num.length - (4 * i + 3));
	return (((sign) ? '' : '-') + num + '.' + cents);
}
function getLocationUrl() {
	var arr = top.location.href.split('/');
	return arr[0] + '//' + arr[2] + "/";
}

//复制到剪切板
function copy(cont,target){
	var flashvars = {
		content: encodeURIComponent(cont),
		uri: '/static/images/flash_copy_btn.png'
	};
	var params = {
		wmode: "transparent",
		allowScriptAccess: "always"
	};
	swfobject.embedSWF("/static/js/clipboard.swf", target, "52", "25", "9.0.0", null, flashvars, params);
}
function copySuccess(){
	alert("复制成功！");
}
function SetCookie(name,value){
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    var cookie = name+"="+ escape(value) + ";expires=" + exp.toGMTString();
    document.cookie = cookie;
}
function getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null){
        return unescape(arr[2]);
    }
    return "";
}
function get_reg_url(key){
	key = getVal(key) == ""?"reg":key;
	var arr = top.location.href.split('/');
	return arr[0] + '//' + arr[2] + '/?keys=' + key;
}
function get_games(plat,game_code,type,game_type){
	var conf = {
		width: '1024',
		height: '768'
	};
	var _tmp = [];

	var o = {};
	for (var k in conf) {
		_tmp.push(k + '=' + ((o[k] == undefined) ? conf[k] : o[k]));
	}
	var url = '/static/html/'+plat+'.html?game_code='+game_code+'&game_type='+getVal(game_type);
	if(getVal(type) == 'fun'){
		if(plat == 'pt'){
			url = 'http://cache.download.banner.winforfun88.com/casinoclient.html?language=zh-cn&game='+game_code+'&mode=offline&currency=cny';
		}else if(plat == 'nt'){
			url = 'https://www.netent.com/en/game/'+game_code+'/';
		}else if(plat == 'ag'){
			url = url+'&actype=0';
		}else if(plat == 'agbbin'){
			url = url+'&actype=0';
		}
	}else{
		if(plat == 'ag'){
			url = url+'&actype=1';
		}else if(plat == 'agbbin'){
			url = url+'&actype=1';
		}else if(plat == 'mg'){
			url = url+'&actype=1';
		}
	}
	window.open(url+'&t='+new Date().getTime());
}

function get_games1(plat,game_code,type,game_type,page_present){
	var conf = {
		width: '1024',
		height: '768'
	};
	var _tmp = [];

	var o = {};
	for (var k in conf) {
		_tmp.push(k + '=' + ((o[k] == undefined) ? conf[k] : o[k]));
	}
	var url = '/static/html/forward.html?game_code='+game_code+'&plat='+plat+'&game_type='+getVal(game_type);
	if(getVal(type) == 'fun'){
		if(plat == 'pt'){
			url = 'http://cache.download.banner.winforfun88.com/casinoclient.html?language=zh-cn&game='+game_code+'&mode=offline&currency=cny';
		}else if(plat == 'nt'){
			url = 'https://www.netent.com/en/game/'+game_code+'/';
		}
	}else{
		url = url+'&actype=1';
		if (plat == '10') {
			url = url + (game_code?'&page_site='+game_code: "");
			url = url + (page_present?'&page_present='+page_present:'');
		}
	}
	window.open(url+'&t='+new Date().getTime());
}

(function($){
	$.fn.textSlider = function(settings){
		settings = jQuery.extend({
			speed : "normal",
			line : 2,
			timer : 3000
		}, settings);
		return this.each(function() {
			$.fn.textSlider.scllor( $( this ), settings );
		});
	};
	$.fn.textSlider.scllor = function($this, settings){
		var ul = $("ul:eq(0)",$this );
		var timerID;
		var li = ul.children();
		var liHight=$(li[0]).height();
		var upHeight=0-settings.line*liHight;//滚动的高度；
		var scrollUp=function(){
			ul.animate({marginTop:upHeight},settings.speed,function(){
				for(var i=0;i<settings.line;i++){
					ul.find("li:first",$this).appendTo(ul);
				}
				ul.css({marginTop:0});
			});
		};
		var autoPlay=function(){
			timerID = window.setInterval(scrollUp,settings.timer);
		};
		var autoStop = function(){
			window.clearInterval(timerID);
		};
		//事件绑定
		ul.hover(autoStop,autoPlay).mouseout();
	};
})(jQuery);
//open window
function openWindow(openUrl, openName, openWidth, openHeight, openLeft, openTop){
	var url = openUrl;
	var name = openName;
	var width = openWidth;
	var height = openHeight;
	var left = (String(openLeft) == "" ? (window.screen.availWidth-10-openWidth)/2 : openLeft);
	var top = (String(openTop) == "" ? (window.screen.availHeight-40-openHeight)/2 : openTop);
	window.open(url, name, "depended=yes,width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
}

function logout(){
	if(confirm('是否确定要退出平台?')){
		top.location.href = '/logout';
	}
}

function ajax_post(url, params, callback){
	$.post(url, params, function(rs){
		if(rs.error_code == 1){
			alert(rs.message);
			top.location.href = '/logout';
			return false;
		}else if(rs.error_code == 2){
            alert(rs.message);
            top.location.href = '/logout';
			return false;
        }else{
			if(!rs.success && getVal(rs.message) != "")
				alert(rs.message);
			callback(rs);
		}
    });
}

var just_notice_timer;
function get_just_popup_notice_timer() {
    clearTimeout(just_notice_timer);
    $.post('/notice/get', {command: 'get_just_popup_notice'}, function (rs) {
        if (rs.success) {
            var msg = getVal(rs.data.content);
            $("#now_art_msg").html(msg);
            msg = $("#now_art_msg").text().replace(/\r\n/g, '<br>').replace(/\n/g, '<br>');
            if (msg != "" && msg != getVal(getCookie('now_art_msg'))) {
                SetCookie('now_art_msg', msg);
                var html = "<div style='max-width:700px'>"+msg.replace(/\s/g,'&nbsp;')+"</div>";
                art.dialog({
					id: 'notice1001',
					title: rs.data.title,
					lock: true,
					fixed: true,
					resize: false,
					drag: true,
					width: 'auto',
					content: html,
					ok: true
				});
            }
        }
    });
    just_notice_timer = setTimeout(function(){get_just_popup_notice_timer();}, 180000);
}

function show_login_notice(){
    ajax_post("/notice/get",{command:'get_popup_notice'},function(rs){
        $(".window_shade_div").hide();
        $(".window_loading_div").hide();
        if(rs.success && getVal(rs.data['content']) != ""){
            var cont = getVal(rs.data.content);
            art.dialog({
                id: 'login_msg',
                title: rs.data.title,
                lock: true,
                fixed: true,
                resize: false,
                drag: true,
                width: 'auto',
                content: cont,
                top:'30%',
                ok: function(){
                    $("#main_frame",window.parent.document).attr('src', '/?view=index');
                }
            });
        }else{
            $("#main_frame",window.parent.document).attr('src', '/?view=index');
        }
    });
}

$(".online-service,.open_cs").click(function(){
    window.open(PRJ_SERVICE_URL);
});

$(".open_ag_client,.open_mg_client,.open_ag_mobile").click(function(){
    showTiShi("温馨提示",'即将上线,敬请期待！','','confirm');
});

$("#lottery .down_lottery").click(function(){
    window.open(PRJ_DOWN_LOTTERY_PC_URL);
});

$(".page-chess .down_chess").click(function(){
    window.open(PRJ_DOWN_CHESS_PC_URL);
});

$(".solt_game_nav .down_pc,.solt_game_nav .down_android,.yxxz .down_android,.yxxz .down_pc").click(function(){
    showTiShi("温馨提示",'即将上线,敬请期待！','','confirm');
    return false;
    /*var down_key = getVal($(this).attr('class')).split(" ");
    var action = $(this).attr('action');
    var url = "";
    if(down_key[0].split('_')[1] == 'pc'){
        switch (action){
            case 'pt': url = PRJ_DOWN_PT_PC_URL; break;
        }
    }else{
        switch (action){
            case 'pt': url = PRJ_DOWN_PT_APK_URL; break;
        }
    }
    if(url != "")
        openWindow(url,'down_slot_app',820,600,"","");
    else
        showTiShi("温馨提示",'即将上线,敬请期待！','','confirm');*/
});

/****
 *
 * @param str 日期(8位)/时间(14位)字符串
 * @returns {Date} Date对象
 */
function str_to_date(str){
    if(str != null && str != ''){
        str = ('' + str).replace(/\D/g, '');
    }
    else{
        str = '';
    }
    var date = new Date();
	date.setDate(1);
    if(str.length > 3){
        date.setFullYear(Number(str.substr(0, 4)));
    }
    if(str.length > 5){
        date.setMonth(Number(str.substr(4, 2))-1);
    }
    if(str.length > 7){
        date.setDate(Number(str.substr(6, 2)));
    }
    if(str.length > 9){
        date.setHours(Number(str.substr(8, 2)));
    }
    if(str.length > 11){
        date.setMinutes(Number(str.substr(10, 2)));
    }
    if(str.length > 13){
        date.setSeconds(Number(str.substr(12, 2)));
    }
    return date;
}
/****
 *
 * @param date_str 日期/时间字符串
 * @param sub_month 要跳的月数(正数为加, 负数为减)
 * @returns {{date_min, date_max}} {月份最小日期, 月份最大日期}
 */
function get_month_date_range(date_str, sub_month){
    var date = str_to_date(date_str);
	date.setDate(1);
    if(sub_month != null){
		var _m = date.getMonth();
		_m += Number(sub_month);
        date.setMonth(_m);
    }
    var date_min = date.format('yyyyMMdd');
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    var date_max = date.format('yyyyMMdd');
    return {date_min: date_min, date_max: date_max};
}
/****
 *
 * @param date_str 日期/时间字符串
 * @param diff_week 差异的周数(正数为加, 负数为减)
 * @returns {{date_min, date_max}} {最小日期, 最大日期}
 */
function get_week_range(date_str, diff_week){
	var date_min = str_to_date(date_str);
	if(diff_week != null){
		date_min.setDate(date_min.getDate() + (parseInt(diff_week) * 7));
	}
	date_min.setDate(date_min.getDate() - date_min.getDay() + 1);
	var date_max = new Date();
	date_max.setFullYear(date_min.getFullYear());
	date_max.setMonth(date_min.getMonth());
	date_max.setDate(date_min.getDate() + 6);
	return {date_min: date_min.format('yyyyMMdd'), date_max: date_max.format('yyyyMMdd')};
}
/****
 * 要获取参数的对象
 * @param elem jquery对象
 * @returns {{}} json对象, 对象内输入的参数
 */
function get_params_to_json(elem){
	var params = {};
	elem.find('input').each(function(){
		var name = $(this).attr('name');
		var val = $(this).val();
		if(/^time_+|^date_/.test(name)){
			val = val.replace(/\D/g, '');
		}
		params[name] = val;
	});
	elem.find('select').each(function(){
		params[$(this).attr('name')] = $(this).find('option:selected').val();
	});
	return params;
}
function formater_money_dx(money){
	var str = '', strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
	money = Number(money).toFixed(2).replace('.', '');
	//var intPos = money.indexOf('.');
	//if (intPos >= 0){
	//	money = money.substring(0, intPos) + money.substr(intPos + 1, 2);
	//}
	strUnit = strUnit.substr(strUnit.length - money.length);
	for (var i=0; i < money.length; i++){
		str += '零壹贰叁肆伍陆柒捌玖'.substr(money.substr(i,1),1) + strUnit.substr(i,1);
	}
	return str.replace(/零角零分$/, '整').replace(/零分$/, '').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元")
}
// 将秒数转换为时间
function seconds_to_time(seconds){
    var h = (''+(seconds/3600)).split('.')[0];
    var m = (''+((seconds%3600)/60)).split('.')[0];
    var s = (''+(seconds%60)).split('.')[0];
    return (h<10?('0'+h):h) + ':' + (m<10?('0'+m):m) + ':' + (s<10?('0'+s):s)
}
function get_rebate_info(ls) {
    var ssc_rebate = 0;
    var other_rebate = 0;
    var data = ls ? ls : [];
    $.each(data, function (i, val) {
        if (val != null && val['game_id'] == '2') {
            if (LOTTERY_CLASSIFY["gp"].indexOf('' + val['genre']) >= 0) {
                if (ssc_rebate == 0 || ssc_rebate < Number(val['rebate'])) {
                    ssc_rebate = Number(val['rebate']);
                }
            } else if (other_rebate == 0 || other_rebate < Number(val['rebate'])) {
                other_rebate = Number(val['rebate']);
            }
        }
    });
    return {
        ssc: ssc_rebate.toFixed(3),
        other: other_rebate.toFixed(3)
    };
}
function removeHTMLTag(str){
    str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
    return str;
}
//手机网页判断
function browserRedirect() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		return true;
	}
	return false;
}