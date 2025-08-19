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
<link media="all" type="text/css" rel="stylesheet" href="/nuoyafg/index.css?0628?119">
<link media="all" type="text/css" rel="stylesheet" href="/nuoyafg/index.css?0628?119">
<link media="all" type="text/css" rel="stylesheet" href="/nuoyafg/swiper.min.css?119">
<link media="all" type="text/css" rel="stylesheet" href="/nuoyafg/animate.css?119">
<link rel="stylesheet" type="text/css" href="/nuoyafg/index/game.css?119">
<link rel="stylesheet" type="text/css" href="/nuoyafg/index/style2.css" />
<link media="all" type="text/css" rel="stylesheet" href="/nuoyafg/index/index.css">
<link href="/nuoyafg/js/style.css" rel="stylesheet" type="text/css"/>
<script src="/nuoyafg/jquery-1.9.1.min.js?119"></script>
<script src="/nuoyafg/jquery.easing.1.3.js?119"></script>
<script src="/nuoyafg/jquery.mousewheel.min.js?119"></script>
<script src="/nuoyafg/jquery.jscrollpane.js?119"></script>
<script src="/nuoyafg/underscore-min.js?119"></script>
<script src="/nuoyafg/base.js?119"></script>
<script src="/nuoyafg/layer.js?119"></script>
<script src="/nuoyafg/jquery.cycle2.min.js?119"></script>
<script src="/nuoyafg/gagame.Tab.js?119"></script>
<script src="/nuoyafg/gagame.Message.js?119"></script>
<script src="/nuoyafg/jquery.marquee.min.js?119"></script>
<script src="/nuoyafg/gagame.Timer.js?119"></script>
<script src="/nuoyafg/gagame.Mask.js?119"></script>
<script src="/nuoyafg/swiper.min.js?119"></script>
<script src="/nuoyafg/swiper.animate1.0.3.min.js?119"></script>
<script src="/nuoyafg/jquery.waterwheelCarousel.min.js?119"></script>
<script src="/nuoyafg/jquery.cycle2.min.js?119"></script>
<script src="/nuoyafg/gagame.Tab.js?119"></script>
<script src="/nuoyafg/gagame.Message.js?119"></script>
<script src="/nuoyafg/jquery.marquee.min.js?119"></script>
<script src="/nuoyafg/gagame.Timer.js?119"></script>
<script src="/nuoyafg/gagame.Mask.js?119"></script>
<script src="/nuoyafg/navbarscroll.js?119"></script>
<script type="text/javascript" src="__JS__/jquery-3.1.1.min.js"></script><!-- 洗码插件，缺少此JS插件洗码金额无法显示 -->
<script type="text/javascript" src="/resources/js/way.min.js"></script><!-- 洗码插件，缺少此JS插件洗码金额无法显示 -->
<script type="text/javascript" src="/resources/main/common.js"></script><!-- 洗码插件，缺少此JS插件洗码金额无法显示 -->
<script type="text/javascript" src="/nuoyafg/js/jquery.js"></script>
<script type="text/javascript" src="/nuoyafg/js/jquery.SuperSlide.2.1.1.js"></script>
<script src="/assets/html5zoo.js"></script>
<script src="/assets/lovelygallery.js"></script>   
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
						<a href=" https://www.nuoya788.com/deposit/quick/113 ">
							<span style="width:58px;height:22px;background: linear-gradient(#9C27B0,#441d88);border-radius: 2px;">契约管理</span>
						</a>
					</if>	
					</li>
						<li class="">
						<a href=" https://www.nuoya788.com/deposit/quick/113 ">
							<span style="width:58px;height:22px;background: linear-gradient(#E91E63,#9c281f);border-radius: 2px;">在线充值</span>
						</a>
					</li>
						<li class="">
						<a href="https://www.nuoya788.com/withdrawals/withdraw">
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
					<li><a href="{:U('Index/zrvideo')}">真人游戏</a></li>
					<li><a href="/buy/machines-gather">电子游戏</a></li>
					<li class="TableGames"><a href="/buy/sports-index">体育游戏</a></li>
					
					<li><a href="/users/user">个人中心</a></li>
					<li><a href="/boughts">游戏记录</a></li>
					<li><a href="/team-profits">盈亏报表</a></li>
					<li><a href="/Member.Agent.do;">代理中心</a></li>
					<li><a href="/user-activities">优惠活动</a></li>
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
            <br/><br/><br/><br/><br/><h3 class="k3">快三 </h3>
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




<div class="banner-content">
            <div class="banner-slide">
                <div class="banner-slide-circle hd">
                    <ul>
                        <li class="on"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
						<li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="banner-slide-image bd">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="/nuoyafg/js/banner1.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/nuoyafg/js/banner2.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/nuoyafg/js/banner3.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/nuoyafg/js/banner4.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/nuoyafg/js/banner5.jpg" alt="">
                            </a>
                        </li>
						<li>
                            <a href="#">
                                <img src="/nuoyafg/js/banner6.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/nuoyafg/js/banner7.jpg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="banner-hidden">
                <div class="banner-background-01"></div>
                <div class="banner-background-02"></div>
            </div>
        </div>
		
        <script type="text/javascript">
            
            jQuery(".banner-slide").slide({mainCell:".bd ul",autoPlay:true,delayTime:2000});
        
        </script>








<div class="content" id="contentC">
	<!-- 轮播图 -->
	
	<!--轮播公告-->
	<div class="winner-listdiv">
		<div class="winner-list">
			<a href="/"><b>最新公告<span id="J-top-system-msg-num"></span></b></a>
	        <div class="winner-scroll-warp J-prize-marquee">
				<ul id="J-top-system-msg-box"></ul>
				<div class="notice-m">
                     <marquee scrollamount="5" scrolldelay="100" direction="left" onmouseover="this.stop();"
                         onmouseout="this.start();" class="marquee">
                    <a style="color: #FAFAFA;" href="javascript:;" id="first-announcement">{$gonggao.content}</a>
					
                </marquee>
             </div>
			</div>
	    </div>
	</div>
   <!--中部动画内容-->

    <div class="main">
		
		<div class="pro_recommend">
			
			<ul>
				<li>
					<a href="#" class="goods-li-a" target="_blank">
						<img class="item-img" src="statics/images/pic_p01.png">
						<div class="item-text">
							<strong>重庆欢乐生肖</strong>
							<p>官方20分钟一期<br>重庆时时彩</p>
							<span>进入游戏</span>
						</div>
						<i class="i-p-hot"></i>
					</a>
				</li>
				<li>
					<a href="#" class="goods-li-a" target="_blank">
						<img class="item-img" src="statics/images/pic_p02.png">
						<div class="item-text">
							<strong>沙吧体育</strong>
							<p>激情联赛体育<br>体验刺激精彩娱乐</p>
							<span>进入游戏</span>
						</div>

					</a>
				</li>
				<li>
					<a href="#" class="goods-li-a" target="_blank">
						<img class="item-img" src="statics/images/pic_p03.png">
						<div class="item-text">
							<strong>北京PK拾</strong>
							<p>官方20分钟一期<br>畅享速度与激情</p>
							<span>进入游戏</span>
						</div>
						<i class="i-p-new"></i>
					</a>
				</li>
				<li>
					<a href="#" class="goods-li-a" target="_blank">
						<img class="item-img" src="statics/images/pic_p06.png">
						<div class="item-text">
							<strong>广东11选5</strong>
							<p>官方20分钟一期<br> 基诺彩，日进斗金</p>

							<span>进入游戏</span>
						</div>

					</a>
				</li>
				<li>
					<a href="#" class="goods-li-a" target="_blank">
						<img class="item-img" src="statics/images/pic_p04.png">
						<div class="item-text">
							<strong>腾讯分分彩</strong>
							<p> 实时统计腾讯在线人数</p>
							<span>进入游戏</span>
						</div>
						<i class="i-p-free"></i>

					</a>
				</li>
				<li>
					<a href="#" class="goods-li-a" target="_blank">
						<img class="item-img" src="statics/images/pic_p05.png">
						<div class="item-text">
							<strong>江苏快三</strong>
							<p>更多快三，更多选择</p>

							<span>进入游戏</span>
						</div>

					</a>
				</li>
			</ul>
		</div>
		
		
		<div class="RealPerson_game">
			<li>
				<div class="img">
					<i></i>
					<img src="/assets/images/game/person/person_01.jpg">
					<i></i>
				</div>
				<div>
					<h3>AG直播厅</h3>
					<p>直播时间早10点至次日凌晨2点，提供时下最火爆的网络直播互动体验，美女主播与您一起游戏，开创博娱新高度</p>
					<a href="javascript:void(0)" onclick="openGameAGs()">进入游戏&gt;</a>
				</div>
			</li>
			<li>
				<div class="img">
					<i></i>
					<img src="/assets/images/game/person/person_02.jpg">
					<i></i>
				</div>
				<div>
					<h3>AG极速厅</h3>
					<p>游戏品种多，<br> 玩家可听到荷官对话，<br>画面贴近实地赌场</p>
					<a href="javascript:void(0)" onclick="openGameAGs()">进入游戏&gt;</a>
				</div>
			</li>

			<li>
				<div class="img">
					<i></i>
					<img src="/assets/images/game/person/person_03.jpg">
					<i></i>
				</div>
				<div>
					<h3>欧博竞咪厅</h3>
					<p>自主切牌。玩家不仅可与主播进行语音文字聊天，还可全程主导整个游戏节奏，全方位拉近玩家与现场真实游戏互动体验</p>
					<a href="/buy/game-lobby/abzr">进入游戏&gt;</a>
				</div>
			</li>
			<li>
				<div class="img">
					<i></i>
					<img src="/assets/images/game/person/person_04.jpg">
					<i></i>
				</div>
				<div>
					<h3>欧博包桌厅</h3>
					<p>VIP包桌可自行控制游戏节奏，尽享更换荷官、飞牌及换靴等优越功能，成就更高级及自主的娱乐享受。</p>
					<a href="/buy/game-lobby/abzr">进入游戏&gt;</a>
				</div>
			</li>

		</div>
		
		<div class="PhysicalEducation_box">
            <div class="PhysicalEducation_game">
				<div class="game_text">
				<span>赛事推荐</span>
				<a href="javascript:void(0);">更多赛事&nbsp;》</a>
           		</div>
           		<div class="game_game">
           			<li>
           				<div>
           					<img src="/assets/images/game/PhysicalEducation/ico_01.jpg"/>
           					<h6>西汉姆联</h6>
           				</div>
           				<div>
           					<p>沙巴体育竞技</p>
           					<p>英格兰超级联赛</p>
           					<a href="/buy/game-lobby/ibcty"><img src="/assets/images/game/PhysicalEducation/ico_00.jpg"/></a>
           				</div>
           				<div>
           					<img src="/assets/images/game/PhysicalEducation/ico_02.jpg"/>
           					<h6>切尔西</h6>
           				</div>
           			</li>
           			<li>
           				<div>
           					<img src="/assets/images/game/PhysicalEducation/ico_03.jpg"/>
           					<h6>爱斯宾奴</h6>
           				</div>
           				<div>
           					<p>沙巴体育竞技</p>
           					<p>西班牙甲组联赛</p>
           					<a href="/buy/game-lobby/ibcty"><img src="/assets/images/game/PhysicalEducation/ico_00.jpg"/></a>
           				</div>
           				<div>
           					<img src="/assets/images/game/PhysicalEducation/ico_04.jpg"/>
           					<h6>埃尔瓦</h6>
           				</div>
           			</li>
           			<li>
           				<div>
           					<img src="/assets/images/game/PhysicalEducation/ico_05.jpg"/>
           					<h6>雷加利斯</h6>
           				</div>
           				<div>
           					<p>沙巴体育竞技</p>
           					<p>英格兰超级联赛</p>
           					<a href="/buy/game-lobby/ibcty"><img src="/assets/images/game/PhysicalEducation/ico_00.jpg"/></a>
           				</div>
           				<div>
           					<img src="/assets/images/game/PhysicalEducation/ico_06.jpg"/>
           					<h6>巴塞罗那</h6>
           				</div>
           			</li>
           		</div>
            </div>
        </div>
    </div>

		
		<div class="WebsiteIntroduction">

			<div class="text-left">
				<li>
					<h3>安全性</h3>
					<p>采用128位加密技术和严格的安全管理体系，客户资金
					得到最完善的保障。拥有菲律宾官方监管机构颁发的正规执照，接
					受政府监管。</p>
				</li>
				<li>
					<h3>专业性</h3>
					<p>专注专业，注重用户体验和服务质量；平台彩票游戏近
					100种，涵盖市面所有主流彩种，平均存款时间30s，取款平均时间60s
					是一家专业性极高且稳定安全的购彩平台。</p>
				</li>
				<li>
					<h3>便捷性</h3>
					<p>支持各种终端设备，完美兼容PC、移动端。原生态APP让您随时随
					地、轻松投注。培训有素的客服团队7 X 24小时在线，确保
					客户享最优质的服务。</p>
				</li>
			</div>
			<div class="text-right">
				<div>
					<li>
						<span>存款平 均时间</span>
						<img src="/assets/images/index/right_01.png" />
					</li>
					<li>
						<span>取款平 均时间</span>
						<img src="/assets/images/index/right_01.png" />
					</li>
				</div>
				<h3>支持移动端</h3>
				<p>移动互联网时代，机会一手把握全面支持苹果手机APP、 安卓手机APP 、支持网 页浏览器</p>
				<img class="img1" src="/assets/images/index/right_03.png" />
				<img src="/assets/images/index/right_04.png" />
				<img src="/assets/images/index/right_05.png" />
			</div>
		</div>
    </div>
</div>

<!--系统公告-->
<div id="footer" class="footer_mian">
	
	<div class="footer-inner">
		<span></span>
		<p>温馨提示：禁止向未成年人出售彩票</p>
		<a href="/">(Philippine Amusement and Gaming Corporation)</a>
		<p>Copyright © 2019 Online Entertainment. All Rights {:GetVar('webtitle')} 版权所有 PAGCOR 认证</p>
	</div>
</div>
<script type="text/javascript">

		_role = '',
		a = 1,
		b = 0,
		c = 0,
		d = 0;
		if(b){
			_role = '测试'
		}else if(a && !c){
			_role = '代理'
		}else if(a && c){
			_role = '总代'
		}else if(d){
			_role = '玩家'
		}else{
			_role = '游客'
		};
		var _name = "bbcc369" ? "&user_name=bbcc369" : '未登录';

		function getExtraParamForKFInterface(){
		    return {'name': '用户名称:'+_name ,'role': '用户角色:'+_role};
		};
	//	客服链接
	$('.CustomerService_01').click(function(){
		var DEFAULT_VERSION = "8.0";
		var ua = navigator.userAgent.toLowerCase();
		var isIE = ua.indexOf("msie")>-1;
		var safariVersion;
		if(isIE){
		    safariVersion =  ua.match(/msie ([\d.]+)/)[1];
		}
				if(safariVersion <= DEFAULT_VERSION ){
		    // 进行你所要的操作
		   	window.open("https://ssg.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=658311&configID=40829&jid=4707160750&s=1","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=841, height=665")
		}else{
			window.open("https://ssg.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=658311&configID=40829&jid=4707160750&s=1","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=841, height=665")
		}
		
	})
	$(function(){

		
		
		$('[data-call-center]').addClass('btn-online-chat');

		var qqURL = 'http://wpd.b.qq.com/page/webchat.html?nameAccount=800112473';
		$('[data-call-qq]').click(function(event) {
			window.open(qqURL,"","height=520,width=605,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no");
			return false;
		});


			//平台、设备和操作系统
		    var system ={
		    win : false,
		    mac : false,
		    xll : false
		    };
		    //检测平台
		    var p = navigator.platform;
		    system.win = p.indexOf("Win") == 0;
		    system.mac = p.indexOf("Mac") == 0;
		    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
		    if(system.win||system.mac||system.xll){
		    }else{
		        $('div.call-center').hide();
		        $('body').css('minWidth','1200px')
		    }

	})

</script>


    </body>

    
    
    
<script type="text/javascript">
    (function () {
        if ($('#popWindow').length) {
            var popWindow = new gagame.Message();
            var data = {
                title: '提示',
                content: $('#popWindow').find('.pop-bd > .pop-content').html(),
                closeIsShow: true,
                closeButtonText: '关闭',
                closeFun: function () {
                    this.hide();
                }
            };
        popWindow.show(data);
        }
    })();
</script>
<script>
    $(function () {
        
		$(".game_nav_download li").each(function(i){
			$(".game_nav_download li").eq(i).click(function(){
				$(".game_nav_download li").eq(i).addClass("li").siblings().removeClass("li");
				$(".game_nav_download div").eq(i).addClass("div").siblings().removeClass("div");
			})
		})
		
        //尽请期待
       	$(".main_bgBox li a").click(function(){
        	layer.msg('尽请期待', {icon: 6}); 
       	})

		// 轮播图配置
       	var swiper = new Swiper('#intermediate', {
       		speed:300,
    	  autoplay:true,
    	  autoplay: {
		    disableOnInteraction: false,
		    delay:6000
		  },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		        renderBullet: function (index, className) {
		          return '<span class="' + className + '"><i></i></span>';
		        },
	      },
	    }); 
	   $("#intermediate").mouseenter(function () {//滑过悬停
			     swiper.autoplay.stop();//mySwiper 为上面你swiper实例化的名称
			}).mouseleave(function(){//离开开启
			  swiper.autoplay.start();
			});
       	//首页中部信息动画
       $(".classification>li").each(function(i){
       		$(".classification>li").eq(i).mouseover(function(){
			  $(".classification>li").eq(i).addClass("li").siblings().removeClass("li");
			   $(".Introduction>div").eq(i).addClass("div").siblings().removeClass("div");
			});
       })
       //快三动画
        var carousel = $("#carousel").waterwheelCarousel({
	          flankingItems: 3,
	          movingToCenter: function ($item) {
	            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
	          },
	          movedToCenter: function ($item) {
	            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
	          },
	          movingFromCenter: function ($item) {
	            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
	          },
	          movedFromCenter: function ($item) {
	            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
	          },
	          clickedCenter: function ($item) {
	            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
	          }
	        });
        // 弹出公告栏点击文字大小
		 var fontsizeClass = ['fs-12', 'fs-15', 'fs-17'],
        $content = $('.article-page-content');
	    $('[data-font-size] a').on('click', function(){
	        var $this = $(this),
	            idx = $this.index();
	        if( $this.hasClass('current') ) return false;
	        $content.removeClass (function (index, css) {
	            return (css.match (/(^|\s)fs-\d+/g) || []).join(' ');
	        }).addClass(fontsizeClass[idx]);
	        $this.addClass('current').siblings('.current').removeClass('current');
	    }).eq(0).trigger('click');
	    
	    $(".Sign_in i").click(function(){
	    	$(".Sign_in").hide();
	    })
	    // 弹出公告栏点击事件
	    $(".main_navBox_content_left li").each(function(i){
	    	$(".main_navBox_content_left li").eq(0).click();
	    	 $(".main_navBox_content_left li").eq(i).click(function(){
	    	 	$(".main_navBox_content_left li").eq(i).addClass("li").siblings().removeClass("li");
	    	 	$(".main_navBox_content_right .right_div").eq(i).addClass("disBlock").siblings().removeClass("disBlock");
	    	 	$(this).find("span").removeClass("fontWeightB");
	    	 });
	    });
	       
        //热门彩种信息
        var timerNum;
        var lotteryUrl = '/info/lottery/';
        var lotteryId='1';
        var hotDom = function(data){
            var lotteryBox = $('#j-game-info');
            lotteryBox.find('.game-time ul').html('');
            lotteryBox.find('div.text').html('<img src="/assets/images/game/logo/'+data.identifier+'.png">每<font id="j-time-info">'+parseInt((data.cycle)/60)+'分钟</font>开奖一次');
            lotteryBox.find('#j-game-lottery-num').text(data.lastNumber.issue);
            lotteryBox.find('.game-time a').attr('href',"https://www.nuoya788.com/buy/bet/"+lotteryId);
            var lotteryNum = (data.lastNumber.wn_number).substring(3,2) == ' ' ? (data.lastNumber.wn_number).split(' '):(data.lastNumber.wn_number).split('');

            var numDom = [];
            for(var i = 0; i<lotteryNum.length; i++){
                numDom.push('<span>'+lotteryNum[i]+'</span>')
            }
            lotteryBox.find('.game-lottery').html(numDom.join(''));
            var timer;
            var surplusTime = data.endTime - data.time;
            var traceTimeDom = lotteryBox.find('.game-time ul');
            var fun = function(){
                if(surplusTime < 0){
                    timer.stop();
                    newLotteryFun();
                    return;
                }
                var timeStrArr = [],
                    h = Math.floor(surplusTime / 3600), // 小时数
                    m = Math.floor(surplusTime % 3600 / 60), // 分钟数
                    s = surplusTime%3600%60;

                h = h < 10 ? '0' + h : '' + h;
                m = m < 10 ? '0' + m : '' + m;
                s = s < 10 ? '0' + s : '' + s;
                timeStrArr.push('<li>'+h+'</li>');
                timeStrArr.push('<li>'+m+'</li>');
                timeStrArr.push('<li>'+s+'</li>');

                traceTimeDom.html(timeStrArr.join(''));
                surplusTime--;
            };
            timer = new gagame.Timer({time:1000, fn:fun});
        };

        var newLotteryFun = function(){
            $.ajax({
                url: lotteryUrl+lotteryId,
                type: 'GET',
                dataType:'json'
            })
            .done(function(data) {
                hotDom(data);
            })
            .fail(function() {
                //console.log("error");
            })
            .always(function() {
                //console.log("complete");
            });
        };

        $('#j-game-title').find("li").click(function(event) {
            var me = $(this);
            lotteryId = me.find('span').attr('data-id');

            $('#j-game-title').find("li").removeClass('current');
            if(!me.hasClass('current')){me.addClass('current')};
            if(lotteryId == 'fb'){
                $('#j-game-info').hide();
                $('.game-info-box-fb').show();
            }else{
                $('.game-info-box-fb').hide();
                $('#j-game-info').show();
                newLotteryFun();
            }
            //timerNum = new gagame.Timer({time:5000,fn:newLotteryFun});
        });
        $('#j-game-title').find("li:eq(0)").trigger('click');

        //  main 球运动
            $(document).ready(function(){
              $(".main_nav").mousemove(function(event){
                  var ballPageY = event.offsetY ;
                  if(ballPageY <  190){
                    $(".ball_01").css({"left":ballPageY/10})
                    $(".ball_02").css({"right":ballPageY/10})
                  }else {
                    $(".ball_01").css({"left":(190 - (ballPageY - 250))/10})
                    $(".ball_02").css({"right":(190 - (ballPageY - 250))/10})
                  }
              });
            });
       
		//公告关闭
		$(".close").click(function(){
			$(".main_navBox").hide();
		});

        var isLogin = '10060105';
        if(isLogin){
            var ernie,
                $button = $('.balance-hammer'),
                nums = $.trim($('#J-user-balance-value').val()).replace('.', ''),
                numStr = '0000000000000', // '000,000,000.0000'
                locked = false;

            nums = numStr.substr(0, numStr.length - nums.length) + nums;
            nums = nums.split('');
            ernie = new gagame.Ernie({
                dom: $('.balance-box li:not(".money-dot")'),
                height: 24,
                length: 10,
                callback: function () {
                    $button.find('.hammer-down').hide();
                    $button.find('.hammer-up').show();
                }
            });

            $button.on('click', function () {
                if (locked) {
                    return;
                }
                $.ajax({
                    url: '/users/user-monetary-info',
                    //type: 'POST',
                    dataType: 'json',
                    beforeSend: function () {
                        locked = true;
                        $button.find('.hammer-up').hide();
                        $button.find('.hammer-down').show();
                        ernie.start();
                    },
                    success: function (data) {
                        if (Number(data['isSuccess']) == 1) {
                            var monetary = '' + data['data']['available']; // isAgent ? data['data']['team_turnover'] : data['data']['available']
                            var decimals = '0000';
                            monetary = monetary.split('.');
                            if (monetary[1]) {
                                decimals = (monetary[1] + '0000').substr(0, 4);
                            }
                            var num = monetary[0] + decimals;
                            monetary = monetary[0] + '.' + decimals;
                            num = numStr.substr(0, numStr.length - num.length) + num;
                            ernie.stop(num.split(''));
                            $('[data-user-account-balance]').html(formatMoney(monetary));
                        }
                    },
                    complete: function () {
                        locked = false;
                    }
                });
            }).trigger('click');
            ernie.start();
            ernie.stop(nums);

            //优惠卡弹窗
            var discuntCardFun =function(){
                var discuntCardurl = "/user-activities/get-discount-card-sum";
                var mask = new gagame.Mask();
                $.ajax({
                    url: discuntCardurl,
                    type: 'GET',
                    dataType: 'json'
                })
                    .done(function(d) {
                        if(d['number'] != ''){
                            var winDom = '<div id="discuntBox" class="discuntBox"><i>x</i><h1>'+d['number']+'元</h1><a href="/user-activities/discount-card"></a></div>';
                            mask.show();
                            $('body').append(winDom);
                            $('#discuntBox i').click(function(event) {
                                mask.hide();
                                $('#discuntBox').hide();
                            });
                        }
                    })
                    .fail(function() {
                        console.log("error");
                    })
                    .always(function(d) {
                        console.log("complete");
                    });
            };
            discuntCardFun();
        }
    });
</script>

<script>
$(function() {
//检测登陆	
	// login form
	function changeCaptcha () {
	    // debugger;
	    captchaImg.src = "https://www.nuoya788.com/captcha?" + ((Math.random()*9 +1)*100000).toFixed(0);
	};
	
	//登陆显示	
	$(function(){
	    $('#loginButton').click(function (e) {
	        var pwd = $('#login-pass').val();
	        var username = ($('#login-name').val()).toLowerCase();
	        $(this).text('登录中...');
	        $('#login-pass-real').val(pwd);
	        $('form[name=signinForm]').submit();
	    });
	    $('form[name=signinForm]').keydown(function(event) {
	        if (event.keyCode == 13) $('#loginButton').click();
	    });
	});
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
	
	
	//	客服链接
	$('#CustomerService_01').click(function(){
		var DEFAULT_VERSION = "8.0";
		var ua = navigator.userAgent.toLowerCase();
		var isIE = ua.indexOf("msie")>-1;
		var safariVersion;
		if(isIE){
		    safariVersion =  ua.match(/msie ([\d.]+)/)[1];
		}
					if(safariVersion <= DEFAULT_VERSION ){
			    // 进行你所要的操作
			   	window.open("https://ssg.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=658311&configID=40829&jid=4707160750&s=1","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=841, height=665")
			}else{
				window.open("https://ssg.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=658311&configID=40829&jid=4707160750&s=1","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=841, height=665")
			}
			})

	
//	$(".TableGames").click(function(){
//		layer.msg('尽请期待', {icon: 6}); 
//	})
	
	//新版更改！！！上面
			
//	// 顶部用户菜单下拉
//	$('.top-nav-user, .top-nav-msg').overdropdown({
//		activeClass: 'top-nav-toggle-active',
//		handlerIsLink: true
//	});
 	// 获奖名单滚动
        $('.J-prize-marquee').marquee({
            auto: true,
            interval: 6000,
            speed: 2000,
            showNum: 1,
            stepLen: 3,
//          type: 'vertical',
        });
	// Tips
    var tips = new gagame.Tip({cls: 'j-ui-tip-r w-3'});
    $('[data-tips-top]').hover(function (e) {
        var el = $(this),
                text = el.data('tips-top');
        tips.setText(text);
        tips.show((tips.getDom().width()+30 )* -1, -8, el);
        e.preventDefault();
    }, function () {
        tips.hide();
    });

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
                url: "https://www.nuoya788.com/letters/get-user-messages",
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
        var balanceUrl ="https://www.nuoya788.com/users/user-monetary-info";
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
                url: "https://www.nuoya788.com/system-notice/get-user-notices",
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
