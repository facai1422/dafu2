<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE >
    <html>
	<style type="text/css">
    body {background-image: url(assets/bg1.jpg);}
    </style>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <link rel="Shortcut Icon" href="/images/faviconbo.ico"/>
        <title><?php echo GetVar('webtitle');?> - 线上官网</title>
        <meta name="keywords"
              content=""/>
        <meta name="description" content=""/>

        <meta name="viewport"
              content="width=device-width, initial-scale=1, user-scalable=yes, minimum-scale=1, maximum-scale=2.0"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <script src="https://cdn.bootcss.com/jquery/2.1.3/jquery.js"></script>
        <link rel="stylesheet" type="text/css" href="static/css/mui.grid.system.css"/>
        <link rel="stylesheet" type="text/css" href="static/css/mui.min.css"/>
        <!-- <link rel="stylesheet" type="text/css" href="static/css/pace.css" /> -->
        <link rel="stylesheet" type="text/css" href="static/css/iconfont.css"/>
        <link rel="stylesheet" type="text/css" href="static/css/loader.css"/>
        <link rel="stylesheet" type="text/css" href="static/css/common.css"/>
        <link rel="stylesheet" type="text/css" href="static/css/common.mui.css"/>

        <!--<link rel="stylesheet" type="text/css" href="static/css/footercontent.css" />-->
        <link rel="stylesheet" type="text/css" href="static/css/grid.css"/>
        <link rel="stylesheet" type="text/css" href="static/css/date.mui.css"/>
        <link rel="stylesheet" type="text/css" href="static/css/cssmarquee.css"/>

        <!-- 	<script type="text/javascript" src="static/js/pace.js"></script> -->
        <script type="text/javascript" src="static/js/jquery.cookie.js"></script>

        <script type="text/javascript" src="static/js/imagesloaded.pkgd.min.js"></script>
        <script type="text/javascript" src="static/js/mui.js"></script>
        <script type="text/javascript" src="static/js/util.js"></script>
        <script type="text/javascript" src="static/js/string.js"></script>
        <script type="text/javascript" src="static/js/date.js"></script>
        <script type="text/javascript" src="static/js/muidate.js"></script>

        <script type="text/javascript" src="static/js/muimodel.js"></script>
        <script type="text/javascript" src="static/js/loader.js"></script>
        <script type="text/javascript" src="static/js/usermanage.js"></script>
        <script type="text/javascript" src="static/js/bankmanage.js"></script>
        <script type="text/javascript" src="static/js/tppmanage.js"></script>
        <script type="text/javascript" src="static/js/selfgetmanage.js"></script>
        <script type="text/javascript" src="static/js/signmanage.js"></script>
        <script type="text/javascript" src="static/js/emigratedmanage.js"></script>
        <script type="text/javascript" src="static/js/fightteammanage.js"></script>
        <script type="text/javascript" src="static/js/mobilemanage.js"></script>
        <script type="text/javascript" src="static/js/mobilegrid.js"></script>
        <script type="text/javascript" src="static/js/mobilecombobox.js"></script>
        <script type="text/javascript" src="static/js/cssmarquee.js"></script>
        <script type="text/javascript" src="static/js/experiencemanage.js"></script>
        <script type="text/javascript" src="static/js/footerbar2.js"></script>
        <script type="text/javascript" src="static/js/headerbar.js"></script>

        <script type="text/javascript" src="static/js/webapp.js"></script>
        <link rel="stylesheet" type="text/css" href="static/css/register.css"/>
        <link rel="stylesheet" type="text/css" href="/Template/Mobile/khddcs/zhuche.css"/>
        <link rel="stylesheet" type="text/css" href="static/css/layer.mobile.css"/>
        <!--<script type="text/javascript" src="static/js/footercontent.js"></script>-->


        <script>
$(document).bind("contextmenu", function () { return false; }) 
document.oncontextmenu = function () { return false; };
document.onkeydown = function () {
if (window.event && window.event.keyCode == 123) {
event.keyCode = 0;
event.returnValue = false;
return false;
}
} 
</script>
<script>
    document.onkeydown = function () {
        if (window.event && window.event.keyCode == 123) {
            alert("操作无效");
            event.keyCode = 0;
            event.returnValue = false;
        }
        if (window.event && window.event.keyCode == 13) {
            window.event.keyCode = 505;
        }
        if (window.event && window.event.keyCode == 8) {
            alert(str + "\n请使用Del键进行字符的删除操作！");
            window.event.returnValue = false;
        }
    }


</script>
    </head>

<body>

<div class="main-wrap">
    <div class="main-top-header"></div>
    <div class="content register  login">
        <h3 class="logo">
            <img src="http://act.zxgj112.com/storage/uploads/config/202106/05/config_1622858208_DLggUE73vm.png"></h3>
        <div class="table">
        </div>
       <div class="sc-12t80tq-1 dLYIoM">
    <div class="sc-1kukyib-0 fPfeDV">
        <div class="sc-1kukyib-1 iGEidw active">用户登录</div>
    </div>
    <div class="pc4dod-0 jWaGVK">
        <div class="sc-6xd6tf-0 kbDsyl" >
              <form method="post" id="form1" checkby_ruivalidateurl="" action="<?php echo U('Public/logindo');?>">
          
            <input type=""  class="sc-6xd6tf-2 kpxcX" name="name" id="regUserName" placeholder="用户名/手机号/邮箱" >
            <!--<div class="sc-6xd6tf-1 jweRpa">账号</div>-->
            <div class="sc-6xd6tf-3 lcWLSi"></div>
        </div>
        <div class="sc-6xd6tf-0 kbDsyl" style="width:89%;">
            <!--<div class="sc-6xd6tf-1 jweRpa">密码</div>-->
            <input type="password" name="pass"  class="sc-6xd6tf-2 kpxcX" id="regUserpwd"  placeholder="请输入登录密码"  maxlength="12">
            <div class="sc-6xd6tf-3 lcWLSi">
                
            </div>
        </div>
         <div class="sc-6xd6tf-0 kbDsyl">
            <!--<div class="sc-6xd6tf-1 jweRpa">验证码</div>-->
            <input type="" name="code"  class="input-pos" placeholder="请输入验证码" id="regUserYZM">
            <img class="yanzma" id="register-img" src="<?php echo U('Public/verify',array('imageW'=>110,'imageH'=>30));?>" onclick="this.src=this.src+'?temp='+ 1">
            <div class="sc-6xd6tf-3 lcWLSi">
            </div>
        </div></form>
        <div class="forgetPassword">
        <div class="pc4dod-1 htdQTn">
            <button class="pc4dod-2 iDBetw">
                <a href="<?php echo U('Public/forgetPaw');?>">忘记密码</a></button></div>
            <button class="sc-13e3lr-0 Kzwch" id="btn_login" style="margin-top: 20px;">登入</button>
            <!--<div class="tiaokuankhddcs">-->
            <!--    <span class="tiaokuankhddcs1"></span>-->
            <!--<span>我已阅读并同意</span>-->
            <!--<span class="tiaokuankhddcs2">相关条款</span>-->
            <!--<span>和</span><span class="tiaokuankhddcs2">隐私政策</span>-->
            <!--</div>-->
        <div class="sc-1jz5tkq-0 kOylbB">
            <button class="sc-1jz5tkq-1 jGwzAg" >
                <a href="<?php echo U('Public/register');?>"style="border: none;outline: none; background-color: transparent; color: rgb(101, 149, 222);">
                立刻注册</button></a>
            <button lass="sc-1jz5tkq-1 jGwzAg" href="/js.ymxt.com.html" style="border: none;outline: none; background-color: transparent; color: rgb(101, 149, 222);" target="_blank">线路检测</button>
            </div>
        <div class="pc4dod-3 gaEoqZ">v5.0.1</div>
    </div>
</div>


    <div class="content register1">
        <div class="user-box">
            <ul class="user-list">
            </ul>
            <p>该手机号已经绑定以上游戏帐号，请验证您要登录的
                游戏帐号，成功后会自动解绑其他帐号</p>
        </div>
        <div class="btn-box">
            <a class="btn-y">是我的，立刻绑定</a>
            <a class="btn-b">不是我的，继续注册</a>
            <a class="btn-back">返回上一步</a>
        </div>
    </div>




    <script>
        function check_login(obj) {
            $.ajax({
                url: "<?php echo U('Public/LoginDo');?>",
                type: 'POST',
                data: $("#form1").serialize(),
                success: function (data) {
                    if (data.sign == true) {
                        alert(data.message);
                        window.location.href = "<?php echo U('Member/index');?>"
                    } else {
                        if (data.message == "你的帐号已在别处登陆，是否重新登陆") {
                            if (confirm('你的帐号已在别处登陆，是否重新登陆')) {
                                $.ajax({
                                    url: "<?php echo U('Public/LoginDo');?>",
                                    type: "POST",
                                    data: {
                                        name: $("input[name=name]").val(),
                                        pass: $("input[name=pass]").val(),
                                        nocode: true,
                                    },
                                    success: function (json) {
                                        alert(json.message);
                                        window.location.href = "<?php echo U('Member.index');?>";
                                    }
                                })
                            }
                        } else {
                            alert(data.message);
                        }
                    }
                }
            })
            return false;
        }

        $(function () {
            $('#btn_login').on('click', function () {
                console.log(123)
                check_login(this);
            })
        });
    </script>





    <!--<script>
        var _hmt = _hmt || [];
        if(window.location.host.indexOf('yahu58.com')!=-1){  
            (function() {
                var hm = document.createElement("script");hm.src = "//hm.baidu.com/hm.js?5b6d79621dd66071e75b5babe766d1b5";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);
            })();
        }
    </script>-->

    <script async src="static/js/ai800.js"></script>



    <script language="javascript" src="static/js/snare.js"></script>

</div>
<style type="text/css">
body {background-image: url(assets/bg1.jpg);}
</style>
</body>
</html>