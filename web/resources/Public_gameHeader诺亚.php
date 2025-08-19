<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta name="keywords" content="" />
<meta name="viewport" content="width=device-width" >
<meta http-equiv="x-ua-compatible" content="IE=edge" >   
<title>{:GetVar('webtitle')} - 线上官网</title>
<link media="all" type="text/css" rel="stylesheet" href="/nuoyafg/global.css?119">
<link media="all" type="text/css" rel="stylesheet" href="/nuoyafg/layer.css?119">
<link media="all" type="text/css" rel="stylesheet" href="/nuoyafg/swiper.min.css?119">
<link media="all" type="text/css" rel="stylesheet" href="/nuoyafg/animate.css?119">
<link rel="stylesheet" type="text/css" href="/nuoyafg/index/game.css?119">
<link rel="stylesheet" type="text/css" href="/nuoyafg/index/style2.css" />
<link media="all" type="text/css" rel="stylesheet" href="/nuoyafg/index/index.css">
<script type="text/javascript" src="__JS__/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="__JS__/artDialog.js"></script>
<script type="text/javascript" src="__JS__/jquery-3.1.1.min.js"></script><!-- 洗码插件，缺少此JS插件洗码金额无法显示 -->
<script type="text/javascript" src="/resources/js/way.min.js"></script><!-- 洗码插件，缺少此JS插件洗码金额无法显示 -->
<script type="text/javascript" src="/resources/main/common.js"></script><!-- 洗码插件，缺少此JS插件洗码金额无法显示 -->

</head>
<style type="text/css">
body {background-image: url(assets/bg1.jpg);}
</style>
<body>
<div id="header">
<div  class="wrap">
		<div class="hearder-top">
			<div class="hearder-top-content">
				<p>
				    <span id="timeShow"></span>
					
					 
					</span>  
				</p>
					<ul class="name-ul">
					<li class="name">
						<div class="header-drop">
						<span><span class="header-user">{$userinfo.username}</span>&nbsp;|
                        <span class="wallet">账户：</span>
                        
                        <span class="header-money" id="J-balls-statistics-balance">
                        <em class="smallmoney" style="color:#FAFAFA;">{$userinfo['balance']}</em>
						<span>元</span>	
                        
                        </a>
                       </div>
					</li>
					<li class="top-balance">
						
						<span class="play-pos">&nbsp;| 级别：
                            <em class="no_info">{$userinfo.groupname}</em>
							</span>
							
							</a>
							<eq name="userinfo['proxy']" value="0">  
							<a>
							<a href="javascript:void(0);" class="bar-link tab_menu">
                            <span class="play-pos">&nbsp;| 等级：
                            <em class="no_info">{$userinfo.touhan}</em>
							</span>
							</a>
                            </eq>
							
					<li class="xima l">
					    &nbsp;| 洗码：<span class="c-green" style="color:#FAFAFA;" way-data="user.xima">0</span>
						<span>元</span>
					<if condition="$userinfo.proxy eq '1'">	
					</li>
					    <li class="">
						<a href="/Member.Agent.do">
							<span style="width:58px;height:22px;background: linear-gradient(#9C27B0,#441d88);border-radius: 2px;">契约管理</span>
						</a>
					</if>	
					</li>
						<li class="">
						<a href="{:U('Account/bankRecharge')}">
							<span style="width:58px;height:22px;background: linear-gradient(#E91E63,#9c281f);border-radius: 2px;">在线充值</span>
						</a>
					</li>
						<li class="">
						<a href="{:U('Account/withdrawals')}">
							<span style="width:58px;height:22px;background: linear-gradient(#37b73c,#017d72);border-radius: 2px;">在线提款</span>
						</a>
					</li>
					    <li class="">
						<a href="{:GetVar('kefuthree')}" class="header-btn" target="_blank"><span style="width:58px;height:22px;background: linear-gradient(#2196F3,#673AB7);border-radius: 2px;">在线客服</span></a>
							
						</a>
					</li>
					
						<li class="top-out">
						
						<a href="{:U('Public/LoginOut')}" class="bar-link"><img src="/assets/exit.png" alt=""><span class="bar-exit">安全退出</span></a>
						
						</a>
					</li>
					
				</ul>
					
			</div>
		</div>
		<div class="hearder-bottom">
			<div class="hearder-bottom-content">
				<ul class="content-nav-li">
				    <a class="LOGO" href="/"><img src="/assets/logo.png"/></a>
					<li><a href="/">首页</a></li>
					<li><a href="#">彩票游戏</a><i></i></li>
					<li><a href="{:U('Index/zrvideo')}">真人视讯</a></li>
					<li><a href="{:U('Index/lottery')}">体育竞技</a></li>
					<li class="TableGames"><a href="/buy/sports-index">电子游戏</a></li>
					
					<li><a href="/Member.ziliao.do">个人中心</a></li>
					<li><a href="/Account.dealRecord.do">游戏记录</a></li>
					<li><a href="/Account.dealRecord.do">盈亏报表</a></li>
					<if condition="$userinfo.proxy eq '1'">
					<li><a href="/Member.Agent.do">代理中心</a></li>
					</if>
					<li><a href="{:U('Activity/index')}">优惠活动</a></li>
				</ul>
				<div class="bottom-content-nav">
					<div class="RealPeople">
						<div class="RealPeople-box">
						<div>		
						</div>
					<div>
				<ul class="clearfix">
            <li>
            <h3 class="ssc">时时彩</h3>
            <div class="list-link">
                <a class="hot-game " href="/Game.ssc?code=cqssc" target="_self"><span class="nav-icon-hot"></span>重庆时时彩</a>
                <a class=" " href="/Game.ssc?code=xjssc" target="_self">新疆时时彩</a>
                <a class=" " href="/Game.ssc?code=tjssc" target="_self">天津时时彩</a>
                <a class="hot-game " href="/Game.ssc?code=txssc" target="_self"><span class="nav-icon-hot"></span>腾讯分分彩</a>
                <a class="hot-game " href="/Game.ssc?code=dfssc" target="_self"><span class="nav-icon-hot"></span>极速时时彩</a>
                <a class=" " href="/Game.ssc?code=amssc" target="_self">澳门时时彩</a>
				<a class="hot-game " href="/Game.ssc?code=hgssc" target="_self"><span class="nav-icon-hot"></span>韩国时时彩</a>
                <a class=" " href="/Game.ssc?code=twssc" target="_self">台湾时时彩</a>
                <a class=" " href="/Game.ssc?code=bxssc" target="_self">巴西时时彩</a>
                <a class="hot-game " href="/Game.ssc?code=hnssc" target="_self"><span class="nav-icon-hot"></span>河内时时彩</a>
                <a class="hot-game " href="/Game.ssc?code=djssc" target="_self"><span class="nav-icon-hot"></span>京东时时彩</a>
                <a class=" " href="/Game.ssc?code=ynssc" target="_self">印尼分分彩</a>
				<a class="hot-game " href="/Game.ssc?code=qqssc" target="_self"><span class="nav-icon-hot"></span>QQ分分彩</a>
                <a class=" " href="/Game.ssc?code=ydssc" target="_self">印度分分彩</a>
                <a class=" " href="/Game.ssc?code=amfssc" target="_self">澳门分分彩</a>
                <a class="hot-game " href="/Game.ssc?code=nyssc" target="_self"><span class="nav-icon-hot"></span>纽约分分彩</a>
                <a class="hot-game " href="/Game.ssc?code=mdssc" target="_self"><span class="nav-icon-hot"></span>缅甸时时彩</a>
                <a class=" " href="/Game.ssc?code=azssc" target="_self">澳洲时时彩</a>
				<a class="hot-game " href="/Game.ssc?code=jzssc" target="_self"><span class="nav-icon-hot"></span>加州时时彩</a>
                <a class=" " href="/Game.ssc?code=lyssc" target="_self">里约时时彩</a>
				<a class=" " href="/Game.ssc?code=flbssc" target="_self">菲律宾乐彩</a>
				<a class=" " href="/Game.ssc?code=mgssc" target="_self">曼谷泰铢乐</a>
				<a class=" " href="/Game.ssc?code=xjpssc" target="_self">新加坡快彩</a>
				<a class=" " href="/Game.ssc?code=mgqlssc" target="_self">美国强力球</a>
            <div class="clearfix"></div>
         </div>
        </li>
            <li>
            <br/><br/><br/><h3 class="pk10">PK10 </h3>
            <div class="list-link">
                                <a class=" " href="/Game.pk10?code=bjpk10" class="play-link">北京pk10</a>
                                <a class=" " href="/Game.pk10?code=dfpk10" class="play-link">澳门PK10</a>
								<a class=" " href="/Game.pk10?code=jspk10" class="play-link">极速PK10</a>
								<a class=" " href="/Game.pk10?code=lfpk10" class="play-link">里约PK10</a>
								<a class=" " href="/Game.pk10?code=twpk10" class="play-link">台湾PK10</a>
								<a class=" " href="/Game.pk10?code=azpk10" class="play-link">澳洲PK10</a>
								<a class=" " href="/Game.pk10?code=mlpk10" class="play-link">马里PK10</a>
								<a class=" " href="/Game.pk10?code=hnpk10" class="play-link">河内PK10</a>
								<a class=" " href="/Game.keno?code=bjkeno" class="play-link">北京快乐八</a>
								<a class=" " href="/Game.keno?code=dfkeno" class="play-link">极速快乐八</a>
								<a class=" " href="/Game.keno?code=amkeno" class="play-link">澳门快乐八</a>
								<a class=" " href="/Game.keno?code=lykeno" class="play-link">里约基诺彩</a>
            <div class="clearfix"></div>
            </div>
        </li>
            <li>
            <br/><br/><br/><br/><h3 class="ny11x5">11选5 </h3>
            <div class="list-link">
                                <a class=" " href="/Game.x5?code=df11x5" class="play-link">澳门11选5</a>
                                <a class=" " href="/Game.x5?code=jx11x5" class="play-link">江西11选5</a>
                                <a class=" " href="/Game.x5?code=gd11x5" class="play-link">广东11选5</a>
                                <a class=" " href="/Game.x5?code=sh11x5" class="play-link">上海11选5</a>
                                <a class=" " href="/Game.x5?code=ly11x5" class="play-link">里约11选5</a>
                                <a class=" " href="/Game.x5?code=bx11x5" class="play-link">巴西11选5</a>
                                <a class=" " href="/Game.x5?code=tw11x5" class="play-link">台湾11选5</a>
                                <a class=" " href="/Game.x5?code=hn11x5" class="play-link">河内11选5</a>
								<a class=" " href="/Game.x5?code=dj11x5" class="play-link">东京11选5</a>
								<a class=" " href="/Game.x5?code=js11x5" class="play-link">极速11选5</a>
								<a class=" " href="/Game.x5?code=ql11x5" class="play-link">强力11选5</a>
								<a class=" " href="/Game.x5?code=az11x5" class="play-link">澳洲11选5</a>
								<a class=" " href="/Game.x5?code=jz11x5" class="play-link">加州11选5</a>
								<a class=" " href="/Game.x5?code=yn11x5" class="play-link">印尼11选5</a>
								<a class=" " href="/Game.x5?code=xy11x5" class="play-link">幸运11选5</a>
								<a class=" " href="/Game.x5?code=md11x5" class="play-link">缅甸11选5</a>
								<a class=" " href="/Game.x5?code=yd11x5" class="play-link">印度11选5</a>
								<a class=" " href="/Game.x5?code=ml11x5" class="play-link">马里11选5</a>
								<a class=" " href="/Game.x5?code=se11x5" class="play-link">首尔11选5</a>
            <div class="clearfix"></div>
            </div>
        </li>
            <li>
            <br/><br/><br/><br/><br/><h3 class="k3">快三彩</h3>
            <div class="list-link">
                                <a class=" " href="/Game.k3?code=bjk3" class="play-link">北京快3</a>
                                <a class=" " href="/Game.k3?code=f1k3" class="play-link">极速快3</a>
                                <a class=" " href="/Game.k3?code=jsk3" class="play-link">江苏快3</a>
                                <a class=" " href="/Game.k3?code=jlk3" class="play-link">吉林快3</a>
                                <a class=" " href="/Game.k3?code=hubk3" class="play-link">湖北快3</a>
                                <a class=" " href="/Game.k3?code=hebk3" class="play-link">河北快3</a>
                                <a class=" " href="/Game.k3?code=shk3" class="play-link">上海快3</a>
                                <a class=" " href="/Game.k3?code=jxk3" class="play-link">江西快3</a>
                                <a class=" " href="/Game.k3?code=gxk3" class="play-link">广西快3</a>
								<a class=" " href="/Game.k3?code=lyk3" class="play-link">里约快3</a>
								<a class=" " href="/Game.k3?code=amk3" class="play-link">澳门快3</a>
								<a class=" " href="/Game.k3?code=twk3" class="play-link">台湾快3</a>
								<a class=" " href="/Game.k3?code=hnk3" class="play-link">河内快3</a>
								<a class=" " href="/Game.k3?code=mlk3" class="play-link">马里快3</a>
								<a class=" " href="/Game.k3?code=azk3" class="play-link">澳洲快3</a>
								<a class=" " href="/Game.k3?code=f5k3" class="play-link">分分快3</a>
								<a class=" " href="/Game.k3?code=xyk3" class="play-link">幸运快3</a>
								<a class=" " href="/Game.k3?code=mdk3" class="play-link">缅甸快3</a>
								<a class=" " href="/Game.k3?code=hgk3" class="play-link">韩国快3</a>
								<a class=" " href="/Game.k3?code=gnjk3" class="play-link">戛纳快3</a>
								<a class=" " href="/Game.k3?code=ydk3" class="play-link">印度快3</a>
								<a class=" " href="/Game.k3?code=alk3" class="play-link">迪拜快3</a>
								<a class=" " href="/Game.k3?code=jndk3" class="play-link">加拿大快3</a>
            <div class="clearfix"></div>
            </div>
        </li>
            <li>
            <br/><br/><br/><br/><br/><br/><br/><br/><h3 class="other">其它彩</h3>
            <div class="list-link">
                                <a class=" " href="/Game.lhc?code=lhc" class="play-link">香港六合彩</a>
								<a class=" " href="/Game.lhc?code=dflhc" class="play-link">极速六合彩</a>
								<a class=" " href="/Game.lhc?code=lflhc" class="play-link">两分六合彩</a>
								<a class=" " href="/Game.lhc?code=sflhc" class="play-link">三分生肖彩</a>
								<a class=" " href="/Game.lhc?code=wflhc" class="play-link">五分生肖彩</a>
								<a class=" " href="/Game.lhc?code=pmlhc" class="play-link">香港跑马会</a>
								<a class=" " href="/Game.dpc?code=fc3d" class="play-link">福彩游戏3D</a>
                                <a class=" " href="/Game.dpc?code=pl3" class="play-link">体彩排列3D</a>
                                <a class=" " href="/Game.dpc?code=df3d" class="play-link">极速游戏3D</a>
                
            <div class="clearfix"></div>
            </div>
        </li>
    
</ul>							</div>
							<div class="AG">
								<!--<a href="/buy/thirdplat-index"></a>
								<a href="/buy/machines-gather"></a>-->
								
							</div>
							<div>
								
							</div>
							<div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="header">
	
</div>
<div class="leftNav">
	
</div>

	
</a>





        </div>
		
        <script type="text/javascript">
            
            jQuery(".banner-slide").slide({mainCell:".bd ul",autoPlay:true,delayTime:2000});
        
        </script>








<div class="content" id="contentC">
	<!-- 轮播图 -->
	
	<!--轮播公告-->
	
   <!--中部动画内容-->

    
</div>

<!--系统公告-->
</body>
<script>
$(function() {

	//导航下拉	
	$(".content-nav-li>li").each(function(i){
		$(".content-nav-li>li").eq(i).mouseover(function(){
			$(".content-nav-li>li").eq(i).addClass("li").siblings().removeClass("li");
			if( i > 0 && i < 2){
				$(".bottom-content-nav").removeClass("bottom-content-navC");
				$(".bottom-content-nav").addClass("bottom-content-navB");
				$(".RealPeople-box>div").eq(i).addClass("block").siblings().removeClass("block");
			}else{
				$(".bottom-content-nav").removeClass("bottom-content-navB");	
			}
		})
	});
//	$(".bottom-content-nav").mouseover(function(){
//		$(".bottom-content-nav").removeClass("bottom-content-navC");
//		$(".bottom-content-nav").addClass("bottom-content-navB");
//	})
	$(".content").mouseover(function(){
		$(".bottom-content-nav").addClass("bottom-content-navC");
		$(".bottom-content-nav").removeClass("bottom-content-navB");
	})
	$(".main-content").mouseover(function(){
		$(".bottom-content-nav").addClass("bottom-content-navC");
		$(".bottom-content-nav").removeClass("bottom-content-navB");
	})
	$(".SlotMachine_bj").mouseover(function(){
		$(".bottom-content-nav").addClass("bottom-content-navC");
		$(".bottom-content-nav").removeClass("bottom-content-navB");
	})
	$(".liC").each(function(i){
	 $(".liC").eq(i).hover(function(){
	    $(this).siblings(".liA").addClass("liH");
	    },function(){
	     $(this).siblings(".liA").removeClass("liH");
	  });
	});
	
	$('.wrapper').navbarscroll();
	
	
	
//	})
	
	//新版更改！！！上面
			
//	// 顶部用户菜单下拉
//	$('.top-nav-user, .top-nav-msg').overdropdown({
//		activeClass: 'top-nav-toggle-active',
//		handlerIsLink: true
//	});
 	

    var isLogin = 'bbcc369';
    if(isLogin){
        // 余额显示隐藏
        var $balanceHandler = $('#balance-toggle, .balance-toggle');
        // 显示余额
        if( dsCookie.readCookie('userBalanceIsVisible') ){
            // $('[data-refresh-balance]').trigger('click');
            userBalanceOfTopNav('show');
        }else{
            userBalanceOfTopNav('hide');
        }
        $balanceHandler.on('click', function(){
            if( dsCookie.readCookie('userBalanceIsVisible') ){
                userBalanceOfTopNav('hide');
                dsCookie.eraseCookie('userBalanceIsVisible');
            }else{
                userBalanceOfTopNav('show');
                dsCookie.createCookie('userBalanceIsVisible', true, 7);
            }
            return false;
        });
        function userBalanceOfTopNav(type){
            var type = type || 'show',
                $spans = $balanceHandler.siblings('span');
            if( type == 'show' ){
                $('.balance-a').show();
                $('.balance-b').hide();
                $balanceHandler.html('<img src="/assets/images/global/kai.png"/>');
            }else{
                $('.balance-a').hide();
                $('.balance-b').show();
                $balanceHandler.html('<img src="/assets/images/global/guan.png"/>');
            }
        }
        function getSiteMsg(){
            var unreaded = 0;
            $.ajax({
                type: 'GET',
                url: "",
                dataType: 'json',
                success: function(resp){
                    if( Object.prototype.toString.call( resp ) === '[object Array]' && resp.length ){
                        $.each(resp, function(i,msg){
                            if( msg.is_readed == '0' ){
                                unreaded++;
                            }
                        });
                    }
                    if( unreaded > 0 ){
                    	$('.i-emil').attr('id','i-emil_style');
                        $('#J-top-msg-num').html('(' + unreaded + ')');
                    }
                }
            });
        }
        getSiteMsg();
        setInterval(getSiteMsg, 1 * 60 * 1000);
        // 账户余额
        var balanceUrl ="";
        balanceUrl += '?temp=' + new Date().getTime();
        $('body').on('click', '[data-refresh-balance]', function() {
            var me = this;
            if ($(me).hasClass('onhandled')) return false;
            $(me).addClass('onhandled');

            var st = new Date().getTime(),
                delay = 2000,
                handler = function(resp){
                    if (resp.isSuccess != 0 && resp.data.available) {
                        var b = formatMoney(resp.data.available);
                        $('[data-user-account-balance]').html(b);
                    } else if( resp.isSuccess == 0 && resp.type == "loginTimeout" ){
                        alert(resp.data.tplData.msg);
                        location.reload();
                    } else {
                        alert(resp.msg || '网络繁忙请稍后再试');
                    }
                    $(me).removeClass('onhandled');
                };
            $.ajax({
                url:balanceUrl,
                cache:false,
                success:function(resp) {
                    var resp = $.parseJSON(resp);
                    var st2 = new Date().getTime() - st;
                    if( st2 > delay ){
                        handler(resp);
                    }else{
                        setTimeout(function(){
                            handler(resp);
                        }, delay - st2);
                    }
                }
            });
            return false;
        }).find('[data-refresh-balance]').eq(0).trigger('click');
        //定时点击刷新余额
        setIntervalD = function(){
            $('[data-refresh-balance]').eq(0).trigger('click');
        }
        setInterval(function() {
            setIntervalD()
        }, 5000);
        function getSystemMsg(){
            var unreaded = 0,
                html = '';
            $.ajax({
                type: 'GET',
                url: "",
                dataType: 'json',
                success: function(resp){
                    if( Object.prototype.toString.call( resp ) === '[object Array]' && resp.length ){
                        $.each(resp, function(i,msg){
                            var cl = '';
                            if( msg.is_readed == '0' ){
                                cl = ' class="un-read"';
                                unreaded++;
                            }
                            html += '<li style="float: none;"' +cl+ '> \
								<a href="' + msg.url + '"><span class="color-highlight">' + msg.title + '</span></a> \
							</li>';
                        });
                    }else{
                        html += '<li style="float: none;">没有新消息了！</li>';
                    }
                    $('#J-top-system-msg-box').html(html);
                    if( unreaded > 0 ){ // 公告未读(暂未显示)
                        $('#J-top-system-msg-num').html('(' + unreaded + ')');
                    }
                }
            });
        }
        getSystemMsg();
        setInterval(getSystemMsg, 1 * 60 * 1000);
	}
});
</script>
<script type="text/javascript">
var t = null;
function time(){
 dt = new Date();
 var y=dt.getFullYear();
 var month=dt.getMonth() + 1;
 var day=dt.getDate();
 var h=dt.getHours();
 var m=dt.getMinutes();
 var s=dt.getSeconds();
 document.getElementById("timeShow").innerHTML="GMT+ "+y+"年"+month+"月"+day+"日"+h+"时"+m+"分"+s+"秒";
 t = setTimeout(time,1000);    
} 
window.onload=function(){time()}
</script>
</html>
