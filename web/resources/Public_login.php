
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>{:GetVar('webtitle')} - 线上官网</title>
    <meta http-equiv="x-ua-compatible" content="IE=Edge,chrome=1"/>
    <meta name="renderer" content="webkit"/>
    <link rel="shortcut icon" type="image/x-icon" href="/static/c2/favicon.ico?v=1.0"/>
    <link rel="icon" type="image/x-icon" href="/static/c2/favicon.ico?v=1.0">
    <link rel="stylesheet" type="text/css" href="/static/c2/base.css?v=2017122001">
    <link rel="stylesheet" type="text/css" href="/static/c2/animate.css?v=2017122001">
    <link rel="stylesheet" type="text/css" href="/static/c2/parallax.css?v=2017122001">
    <link rel="stylesheet" type="text/css" href="/static/c2/layout.css?v=2017122001">
    <link rel="stylesheet" href="/css/nsc/reset.css?v=1.16.11.5" />
    <link rel="stylesheet" href="/css/nsc/plugin/dialogUI/dialogUI.css?v=1.16.11.5" media="all" type="text/css" >
    <link rel="stylesheet" type="text/css" media="all" href="/js/keypad/keypad.css?v=1.16.11.5" />
    <link rel="stylesheet" href="/css/nsc/login.css?v=1.16.11.5" />

    <script language="javascript">
        document.onkeydown = function(event){if ((event.keyCode == 112) || //屏蔽 F1
            // (event.keyCode == 113) || //屏蔽 F2
            // (event.keyCode == 114) || //屏蔽 F3
            // (event.keyCode == 115) || //屏蔽 F4
            // (event.keyCode == 116) || //屏蔽 F5
            // (event.keyCode == 117) || //屏蔽 F6
            // (event.keyCode == 118) || //屏蔽 F7
            // (event.keyCode == 119) || //屏蔽 F8
            // (event.keyCode == 120) || //屏蔽 F9
            // (event.keyCode == 121) || //屏蔽 F10
            // (event.keyCode == 122) || //屏蔽 F11
            // (event.keyCode == 123)) //屏蔽 F12
        {
            return false;
        }}
        window.onhelp = function(){return false;}
    </script>

    <style>
        html {height:100%;width:100%}
        body { margin: 0; padding: 0; font-size: 14px;height: 100%;width:100% }
        ul{ margin: 0; padding: 0; }
        li{ list-style: outside none none; font-style: normal; }
        img { border: 0 none;}
        a{text-decoration: none}
        input{background: none;border:0 none;}
        input::-webkit-input-placeholder{color: #999FAB !important;}
        input::-moz-placeholder {color: #999FAB !important;}
        input::-moz-placeholder {color: #999FAB !important;}
        input:-ms-input-placeholder {color: #999FAB !important;}
        .ui-scroll{position: absolute;width: 100%;height: 100%;font-family: 'Microsoft Yahei';font-size: 14px;background:  top center no-repeat;background-size: cover}
        .ui-scroll .ui-wrap{width: 1100px;margin: 0 auto;display: flex;justify-content: center;align-items: center;height: 100%;width: 100%;}
        .ui-scroll .ui-wrap .header_top {height: 565px;background: url(/static/c2/logn-form.png) center no-repeat;width: 426px;margin: 0 auto;text-align: center;}
        .ui-scroll .ui-wrap .header_top .login{width: 326px;margin: 0 auto;margin-top: 50px;}
        .ui-scroll .ui-wrap .header_top .login label {position: relative;margin-bottom: 25px;display: block;padding-left: 55px;border: 1px solid #636c7a;}
        .ui-scroll .ui-wrap .header_top .login label[for]:before {content:'';display:inline-block;position:absolute;background:url(/static/c2/icon.png) center no-repeat;width:20px;height:20px;left:15px;top:14px}
        .ui-scroll .ui-wrap .header_top .login label[for=user_name]:before {background-position:0 0}
        .ui-scroll .ui-wrap .header_top .login label[for=password]:before {background-position: -20px 0;}
        .ui-scroll .ui-wrap .header_top .login label[for=valid_code]:before {background-position:-40px 0px}
        .ui-scroll .ui-wrap .header_top .login label[for=g_code]:before {background-position:-60px 0px}
        .ui-scroll .ui-wrap .header_top .login label input {border: 0 solid;border-left: 1px solid #636c7a;height: 52px;width: 240px;background-color: transparent;color: #fff;padding: 0 15px;}
        .ui-scroll .ui-wrap .header_top .login label img{position: absolute;right: 1px;top: 1px;}
        .ui-scroll .ui-wrap .header_top .login label.check_g_code {display: none;text-align: center;color: #ff2f59;border: none;margin-bottom: 6px;padding: 0;}
        .ui-scroll .ui-wrap .header_top .login label.check_g_code i {position: relative;cursor: pointer;display: inline-block;height: 12px;width: 12px;background: transparent;border: 1px solid #ff2f59;margin-right: 4px;}
        .ui-scroll .ui-wrap .header_top .login label.check_g_code a {display: inline-block;text-decoration: underline;padding-left: 4px;color: #ff2f59;cursor: pointer;}
        .ui-scroll .ui-wrap .header_top .login label.check_g_code i:before {display: none;position: absolute;content: '';height: 15px;width: 8px;border-width: 0 2px 2px 0;border-style: solid;border-color: #ff2f59;top: -8px;left: 6px;}
        .ui-scroll .ui-wrap .header_top .login label.check_g_code i.active:before {display: inline-block;transform: rotate(45deg);-webkit-transform: rotate(45deg);}
        .ui-scroll .ui-wrap .header_top .login .login_btn {cursor: pointer;width: 320px;height: 50px;margin-top: 15px;border: 1px solid #636C7A;font-size: 20px;line-height: 50px;}
        .ui-scroll .ui-wrap .header_top .login .ui-bottom-nav {margin-top: 20px;font-size: 16px;}
        #mobile_guide {background:url(/static/c2/bg.jpg?v=1.1) no-repeat center top;background-size:cover;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;height:100%;width:100%;}
        #mobile_guide .guide-bg {width:100%;text-align:center;position:absolute;top:50%;transform: translateY(-38%);-moz-transform: translateY(-38%);-webkit-transform: translateY(-38%);-o-transform: translateY(-38%);}
        #mobile_guide .guide-bg .logo {width:60%;margin:0 auto;max-width: 600px}
        #mobile_guide .guide-bg .logo img {width:100%;margin-bottom:20px}
        #mobile_guide .guide-bg .btn-group {width:70%;margin:0 auto;max-width:650px;text-align: center;color:#fff}
        #mobile_guide .guide-bg a {text-decoration: none}
        #mobile_guide .guide-bg .btn-group .btn {color:#fff;cursor: pointer;width:100%;display:inline-block;padding:10px 0;border-radius: 20px;-webkit-border-radius: 20px;-moz-border-radius: 20px;margin-top:20px}
        #mobile_guide .guide-bg .btn-group .btn:last-child {margin-top:100px;}
        #mobile_guide .guide-bg .btn-group .btn-yellow {background:-prefix-liner-gradient(to bottom,#fbd225,#d3952f);background:linear-gradient(to bottom, #fbd225, #d3952f)}
        #mobile_guide .guide-bg .btn-group .btn-blue {background:-prefix-liner-gradient(to bottom,#19cefb,#1c68f2);background:linear-gradient(to bottom, #19cefb, #1c68f2)}
        #mobile_guide .guide-bg .btn-group span {color:#fff;font-size:12px}
    </style>

	<meta charset="utf-8">
	<title>video scream background</title>
	<style type="text/css">
		*{  
            margin: 0px;  
            padding: 0px;  
        }  
        video{  
            position: fixed;  
            right: 0px;  
            bottom: 0px;  
            min-width: 100%;  
            min-height: 100%;  
            height: auto;  
            width: auto;  
            /*加滤镜*/  
            /*-webkit-filter: grayscale(100%);*/  
            /*filter:grayscale(100%);*/  
        }  
        source{  
            min-width: 100%;  
            min-height: 100%;  
            height: auto;  
            width: auto;  
        }  
	</style>
	
</head>
<body style="overflow: hidden;">
<video autoplay="autoplay" loop="loop">  
   	 	<source  src="/login_files/xfh.mp4" type="video/mp4" >;  
	</video>
<div class="" style="display: none; position: absolute;"><div class="aui_outer"><table class="aui_border"><tbody><tr><td class="aui_nw"></td><td class="aui_n"></td><td class="aui_ne"></td></tr><tr><td class="aui_w"></td><td class="aui_c"><div class="aui_inner"><table class="aui_dialog"><tbody><tr><td colspan="2" class="aui_header"><div class="aui_titleBar"><div class="aui_title" style="cursor: move;"></div><a class="aui_close" href="javascript:/*artDialog*/;">×</a></div></td></tr><tr><td class="aui_icon" style="display: none;"><div class="aui_iconBg" style="background: none;"></div></td><td class="aui_main" style="width: auto; height: auto;"><div class="aui_content" style="padding: 20px 25px;"></div></td></tr><tr><td colspan="2" class="aui_footer"><div class="aui_buttons" style="display: none;"></div></td></tr></tbody></table></div></td><td class="aui_e"></td></tr><tr><td class="aui_sw"></td><td class="aui_s"></td><td class="aui_se" style="cursor: se-resize;"></td></tr></tbody></table></div></div><!-- 登陆元素 --->

<!-- 内容 -->


</head>
<body>

<div class="ui-scroll">
    <div class="navFixed ui-wrap">

        <div class="header_top"><h4 class="logo"><img src="/assets/logo.png"></h4>
            <div class="login">
			
                <form method="post" class="ruivalidate_form_class" id="ruivalidate_form_class" checkby_ruivalidate url="" action="{:U('Public/logindo')}">

                <label for="user_name">

                    <input id="login_user_name" name="name" placeholder="账号" type="text">
                </label>
                <label for="password">
                    <input id="login_password" name="pass" placeholder="密码" type="password">
                </label>
                <div class="login_pass user_commom_style">
                    <label for="valid_code">
                    <input  type="text"  class="text_accont" id="code" name="code" maxlength="10" style="width:px;height: 48px;background-color: rgba(99, 108, 122, 0)"  isNot="true"  verify="isAll" msg="请输入验证码" style="border-radius:4px;" />
                    <a href="javascript:void(0)" class="two_code">
                        <img  src="{:U('Public/verify',array('imageW'=>120,'imageH'=>45,'fontSize'=>18))}"  onclick="this.src=this.src+'?temp='+ 1" /></a>
                    <em>
                        
                    </em>
                </div>

                <div id="btn_login" class="login_btn" type="button">用户登录</div>

                <div class="ui-bottom-nav">
                    <a style="padding-right:23px;color:#fff" href="/Public.register.do" target="_blank">用户注册</a>
                    <a style="padding-right:23px;color:#fff" href="/js.ymxt.com.html" target="_blank">线路检测</a>
                    <a style="padding-right:2px;color:#fff" href="/mobileBet.html" target="_blank">应用下载</a>



                </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div id="mobile_guide" style="display:none">
    <div class="guide-bg">
        <div class="logo">
            <img src="/static/c2/logo.png?v=1.1">
        </div>
        <div class="btn-group">
            <a class="btn btn-yellow" id="guide_go">访问手机网页版</a>
            <a class="btn btn-blue" id="guide_stand">访问电脑网页版</a>
            <a class="btn btn-blue" id="guide_load" style="margin-top:100px">下载手机客户端</a>
            <span>更好的体验尽在手机客户端</span>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="/js/nsc/jquery-1.7.min.js?v=1.16.11.5"></script>
<script type="text/javascript" src="__JS__/jquery.form.min.js"></script><!-- Jquery form表单提交 -->
<script type="text/javascript" src="__JS__/jquery.ruiValidate.js"></script><!-- 表单验证的js文件 -->
<script type="text/javascript" src="__JS__/jquery.kinMaxShow-1.1.min.js"></script>

<script type="text/javascript">
    $(function(){
        // var _FormValidate = new $.rui_validate();
        // _FormValidate.initload();

        // _FormValidate.initForm({
        // 	FocusTip:true,	//获取焦点则进行提示，显示输入规则（ boolen ）
        // 	BlurChange:true,	//失去焦点再进行提示，显示输入规则（ boolen ）
        // 	ShowTip: "Icon",	//显示提示信息的类型：Bubble（气泡）；IconText( 图标加文字 ) ; Text（仅是文字）; Icon（正确或错误的图标）； Highlights 聚焦高亮 ;
        // 	ShowTipDirection:"right", //提示信息的位置：right：右边，top：上面；bottom：下面；inside：输入框内；
        // 	FormObj:$("#ruivalidate_form_class"),	//验证的表单容器
        // 	FormIdName: 'ruivalidate_form_class',  //form的ID名称
        // 	ShowTipClass:"ts_msg",    //显示提示信息的区域class
        // 	ShowTipStyle:"",    //显示提示信息的class
        // 	SubBtn:'sub_btn',   //提交按钮的class
        // 	CallBack: ruivalidate_form_class //回调函数
        // })
        // function ruivalidate_form_class(obj) {
        // 	var _this = $(".ruivalidate_form_class .sub_btn");
        // 	_sub(_this);
        // }

        $('.text_accont[name="name"]').blur(function () {
            var text = $(this).val();
            if(!text || text.trim() == ''){
                $(this).siblings('.checkInput').show();
                $(this).siblings('.checkInput').find('span').text('账号不能为空');
                $(this).siblings('.checkInput').find('.iconfont').removeClass('icon-chenggong');
                $(this).siblings('.checkInput').find('.iconfont').addClass('icon-cross-ivt');
            }else{
                $(this).siblings('.checkInput').show();
                $(this).siblings('.checkInput').find('span').text('');
                $(this).siblings('.checkInput').find('.iconfont').removeClass('icon-cross-ivt');
                $(this).siblings('.checkInput').find('.iconfont').addClass('icon-chenggong');
            }
        })

        $('.text_accont[name="pass"]').blur(function () {
            var text = $(this).val();
            if(!text || text.trim() == ''){
                $(this).siblings('.checkInput').show();
                $(this).siblings('.checkInput').find('span').text('密码不能为空');
                $(this).siblings('.checkInput').find('.iconfont').removeClass('icon-chenggong');
                $(this).siblings('.checkInput').find('.iconfont').addClass('icon-cross-ivt');
            }else if(text.length < 6 || text.length > 16){
                $(this).siblings('.checkInput').show();
                $(this).siblings('.checkInput').find('span').text('密码范围在6-16位');
                $(this).siblings('.checkInput').find('.iconfont').removeClass('icon-chenggong');
                $(this).siblings('.checkInput').find('.iconfont').addClass('icon-cross-ivt');
            }else{
                $(this).siblings('.checkInput').show();
                $(this).siblings('.checkInput').find('span').text('');
                $(this).siblings('.checkInput').find('.iconfont').removeClass('icon-cross-ivt');
                $(this).siblings('.checkInput').find('.iconfont').addClass('icon-chenggong');
            }
        })


        $('#btn_login').on('click', function () {
            var code = $("#code").val();
            if(code == ''){
                alert('验证码不能为空');
            }else{
                check_login(this);
            }

        })
    });

    function check_login(obj) {
        $.ajax({
            url: "{:U('Public/LoginDo')}",
            type: 'POST',
            data: $("#ruivalidate_form_class").serialize(),
            success: function (data) {
                if (data.sign == true) {
                    alert(data.message);
                    // loginCengBoxFn(data.message);
                    window.location.href = "{:U('Index/index')}"
                } else {
                    if (data.message == "你的帐号已在别处登陆，是否重新登陆") {
                        if (confirm('你的帐号已在别处登陆，是否重新登陆')) {
                            $.ajax({
                                url: "{:U('Public/LoginDo')}",
                                type: "POST",
                                data: {
                                    name: $("input[name=name]").val(),
                                    pass: $("input[name=pass]").val(),
                                    nocode: true,
                                },
                                success: function (json) {
                                    alert(json.message);
                                    // loginCengBoxFn(json.message);
                                    window.location.href = "{:U('Index.index')}";
                                }
                            })
                        }
                    } else {
                        alert(data.message);
                        // loginCengBoxFn(json.message);
                    }
                }
            }
        })
        return false;
    }


    function check_login2(obj){
        $.post($(obj).attr('action'),$(obj).serialize(), function(json){
            if(json.sign==1){
                alert(json.message);
                // loginCengBoxFn(json.message);
                window.location.href = "{:U('Member.index')}";
            }else{
                if(json.message=="你的帐号已在别处登陆，是否重新登陆"){
                    if(confirm('你的帐号已在别处登陆，是否重新登陆')){
                        $.ajax({
                            url : $(obj).attr('action'),
                            type : "POST",
                            data : {
                                name : $("input[name=name]").val(),
                                pass :$("input[name=pass]").val(),
                                nocode : true,
                            },
                            success : function (json) {
                                alert(json.message);
                                // loginCengBoxFn(json.message);
                                window.location.href = "{:U('Member.index')}";
                            }
                        })
                    }
                }else{
                    alt(json.message);
                    // loginCengBoxFn(json.message);
                }
            }
        },'json');
        return false;
    }
</script>
<!--script type="text/Javascript">
    //事件单禁用右键菜单
    document.oncontextmenu=function(e){return   false;};
    document.onselectstart=function(e){return   false;};
</script-->


</html>
</html>