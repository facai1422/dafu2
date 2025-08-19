<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="description" content=""/>
<meta name="keywords" content=""/>
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>  
<title>{:GetVar('webtitle')} - 线上官网</title>
</style>
<link media="all" type="text/css" rel="stylesheet" href="/assets/global.css">		
<link media="all" type="text/css" rel="stylesheet" href="/assets/global-com.css">
<link media="all" type="text/css" rel="stylesheet" href="/assets/font-awesome.css">
<link media="all" type="text/css" rel="stylesheet" href="/assets/swiper.css">
<link media="all" type="text/css" rel="stylesheet" href="/assets/index.css">
<link media="all" type="text/css" rel="stylesheet" href="/assets/flipclock.css">
<link media="all" type="text/css" rel="stylesheet" href="/zhengdian/layui.css">
<link media="all" type="text/css" rel="stylesheet" href="/zhengdian/zd.local.images.css">
<link media="all" type="text/css" rel="stylesheet" href="/zhengdian/zd.public.css">
<link id="css2" media="all" type="text/css" rel="stylesheet" href="/zhengdian/zd.skin2.css">


<script type="text/javascript" src="__JS__/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="__JS__/artDialog.js"></script>
<script type="text/javascript" src="/resources/js/way.min.js"></script>
<script type="text/javascript" src="/resources/main/common.js"></script>
<script src="/zhengdian/jquery-1.12.3.min.js"></script>

</head>
<style type="text/css">
body {background-image: url(assets/bg1.jpg);}
</style>
<body>
<input type="hidden" name="_token" id="J-global-token-value" value=""/>
<!--公用的头部-->
<div class="jack-header">
    <div class="w">
        <div class="header-l">
		<span><h3></span><span id="timeShow"><h3></span><!--公共样式全局，头部美工时钟显示样式，默认时间，北京，香港-->				
        </div>
        <div class="header-r">
            <div class="header-drop down-drop">
                <a href="javascript:;" class="header-drop-a">
                    <span class="header-person"></span>
                    <span class="header-user">Hi , 您好 ！{$userinfo.username}</span>                       
                    <span class="arrow-down"></span>
                </a>
                <div class="nav-drop bar-drop down-menu">
                    <div class="nav-wrap down-wrap">
                        <div class="bar-box">
							<a>
                            <a href="javascript:void(0);" class="bar-link tab_menu">
                            <span class="play-pos">账号级别：
                            <em class="no_info">{$userinfo.groupname}</em>
							</span>
							</a>
							<eq name="userinfo['proxy']" value="0">  
							<a>
							<a href="javascript:void(0);" class="bar-link tab_menu">
                            <span class="play-pos">&nbsp;&nbsp;&nbsp;&nbsp;账号等级：
                            <em class="no_info">{$userinfo.touhan}</em>
							</span>
							</a>
                            </eq>
							<br/>
							<if condition="$userinfo.proxy eq '1'">
							<a>
                            <a href="/Member.Agent.do;" class="bar-link tab_menu">
							<span class="play-pos">代理中心
							</span>
							</a>
							<br/>
							</if>
							<a>
                            <a href="/Member.betRecord.do;" class="bar-link tab_menu">
							<span class="play-pos">投注记录
							</span>
							</a>
							<br/>
							<a>
                            <a href="/Account.dealRecord.do;" class="bar-link tab_menu">
							<span class="play-pos">交易记录
							</span>
							</a>
							<br/>
							<a>
                            <a href="/Member.ziliao.do;" class="bar-link tab_menu">
							<span class="play-pos">个人中心
							</span>
							</a>
							<br/>
							<a>
                            <a href="/Member.index.do" class="bar-link tab_menu">
							<span class="play-pos">安全中心
							</span>
							</a>
                        </div>
                        <div class="bar-box">
                            <a href="{:U('Public/LoginOut')}" class="bar-link"><img src="/assets/exit.png" alt=""><span class="bar-exit">安全退出</span></a>
                        </div>
                        <div class="login-time">
                            <p>上次登录：{$Think.session.lastlogin.lasttime}</p>
                            <p>上次 IP：{$Think.session.lastlogin.lastip}</p>
                            <p>登录地址：{$Think.session.lastlogin.login_address}</p>
                        </div>
                    </div>
                </div>
            </div>
            <span class="header-line">|</span>
            <div class="header-drop">
                <span class="wallet">账户余额：</span>
                <span class="header-money">￥</span>
                <span class="header-money" id="J-balls-statistics-balance">
                <em class="smallmoney" style="color:#FAFAFA;">{$userinfo['balance']}</em>
							
                <a href="javascript:;" class=""></a>
              </a>
            </div>
            <span class="header-line">|</span>
			<div class="header-drop">
             <li class="xima l" style="color:#fff;">打码量：<span class="c-green" style="color:#FAFAFA;" way-data="user.xima">0</span></li>
            </a>
            </div>
            <span class="header-line">|</span>
            <div class="header-drop">
                <a href="{:U('Account/bankRecharge')}" class="header-btn">充值</a>
                <a href="{:U('Account/withdrawals')}"  class="header-btn">提款</a>
				<a href="#" onclick="open('/moneyChange.php?username={$userinfo.username}','介绍','width=800,height=400,left=150,top=150,resizable=no,scrollbars=no,status=yes,toolbar=no,location=no,menubar=no,menu=yes')" class="header-btn" >额度转换</a>
				<a href="{:GetVar('kefuthree')}" class="header-btn" target="_blank">在线客服</a>
				<a href="/js.ymxt.com.html"  class="header-btn" target="_blank">加速系统</a>
				<a href="/mobileBet.html"  class="header-btn" target="_blank">应用下载</a>
              </a>
            </div>
        </div>
    </div>
</div>
<!--导航-->
<div class="jack-nav">
    <div class="jack-nav-bg">
        <div class="w">
            <div class="nav-l">
                                    <img src="/assets/logo.png" height="60" alt="">
                    <div class="logo-lab">
                        <a class="platform-name-canvas" href="/">
                        <span class="platform-name"></span>
                        </a><br/>
                        <a class="domain-name-canvas" href="/" target="_blank">
                        <span class="domain-name"></span>
                        </a>
                    </div>
                </div>
            <ul class="nav-r clear">
                <li class="nav-li nav-li-first">
                    <a href="/" class="nav-a">
                        <div class="nav-center">
                            <div class="nav-text">
                                <div class="text-1">首页游戏</div>
                            </div>
                        </div>
                                            </a>
                </li>
                <li class="nav-li down-drop">
                    <a  class="nav-a">
                        <div class="nav-center">
                            <div class="text-1">游戏记录</div>
                        </div>
                                            </a>
                    <div class="nav-drop down-menu">
                        <div class="nav-wrap down-wrap">
                            <ul class="nav-sort">
                                <li><a href="/Member.betRecord.do" class="play-link">投注记录</a></li>
                                <li><a href="/Account.dealRecord.do" class="play-link">交易记录</a></li>
								<li><a href="/Account.dealRecord2.do" class="play-link">充值记录</a></li>
								<li><a href="/Account.dealRecord3.do" class="play-link">提现记录</a></li>
								<li><a href="/Account.todayLoss.do" class="play-link">今日盈亏</a></li>
								<li><a href="/Member.gglist.do" class="play-link">平台公告</a></li>
								
								
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="nav-li down-drop">
                    <a  class="nav-a">
                        <div class="nav-center">
                            <div class="text-1">安全管理</div>
                        </div>
                                            </a>
                    <div class="nav-drop down-menu">
                        <div class="nav-wrap down-wrap">
                            <ul class="nav-sort">
                                <li><a href="/Member.index.do" class="play-link">账户密码</a></li>
                                <li><a href="/Member.index.do" class="play-link">资金密码</a></li>
								<li><a href="/Member.index.do" class="play-link">绑定手机</a></li>
								<li><a href="/Member.index.do" class="play-link">绑定邮箱</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="nav-li down-drop">
                    <a href="/Member.ziliao.do" class="nav-a">
                        <div class="nav-center">
                            <div class="text-1">个人中心</div>
                        </div>
                                            </a>
                    <div class="nav-drop down-menu">
                        
                    </div>
                </li>
                                <li class="nav-li down-drop">
                    <a href="{:U('Activity/index')}" class="nav-a nav-agency">
                        <div class="nav-center">
                            <div class="text-1">休闲活动</div>
                        </div>
                                            </a>
                    <div class="nav-drop down-menu">
                        
                    </div>
                </li>

                <li class="nav-li down-drop">
                    <a href="{:U('Index/zrvideo')}" class="nav-a">
                        <div class="nav-center">
                            <div class="text-1">真人视讯</div>
                        </div>
                                            </a>
                    <div class="nav-drop down-menu">
                        <div class="nav-wrap down-wrap">
                            <ul class="nav-sort">
                                <!--li><a href="{:U('News/lists',array('catid'=>33))}" class="play-link">玩法帮助</a></li>
                                <li><a href="/Member.index.do" class="play-link">资金密码</a></li>
								<li><a href="/Member.index.do" class="play-link">绑定手机</a></li>
								<li><a href="/Member.index.do" class="play-link">绑定邮箱</a></li-->
                            </ul>
                        </div>
                    </div>
                </li>
				<li class="nav-li down-drop">
                    <a href="/KyGame/index.php?Gametype=1&username={$userinfo.username}"  target="_blank" class="nav-a">
                        <div class="nav-center">
                            <div class="text-1">电子棋牌</div>
                        </div>
                                            </a>
                    <div class="nav-drop down-menu">
                        <!--div class="nav-wrap down-wrap">
                            <ul class="nav-sort">
                                <li><a href="{:U('News/lists',array('catid'=>33))}" class="play-link">玩法帮助</a></li>
                                <li><a href="/Member.index.do" class="play-link">资金密码</a></li>
								<li><a href="/Member.index.do" class="play-link">绑定手机</a></li>
								<li><a href="/Member.index.do" class="play-link">绑定邮箱</a></li>
                            </ul>
                        </div-->
                    </div>
                </li>
				<li class="nav-li down-drop">
                    <a href="javascript:void(0)" class="nav-a">
                        <div class="nav-center">
                            <div class="text-1">体育赛事</div>
                        </div>
                                            </a>
                    <div class="nav-drop down-menu">
                        <div class="nav-wrap down-wrap">
                            <ul class="nav-sort">
                                <!--li><a href="{:U('News/lists',array('catid'=>33))}" class="play-link">玩法帮助</a></li>
                                <li><a href="/Member.index.do" class="play-link">资金密码</a></li>
								<li><a href="/Member.index.do" class="play-link">绑定手机</a></li>
								<li><a href="/Member.index.do" class="play-link">绑定邮箱</a></li-->
                            </ul>
                        </div>
                    </div>
                </li>
				
            </ul>
        </div>
    </div>
    <div class="nav-menu">
        <div class="nav-lottery w">
            <div class="number-con">
                <div class="com-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时时彩【双面模式】</div><br/>
                                <ul class="play-sort">
                                <li><a href="/Game.ssc?code=cqssc" class="play-link">重庆时时彩<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.ssc?code=xjssc" class="play-link">新疆时时彩<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.ssc?code=tjssc" class="play-link">天津时时彩<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.ssc?code=txssc" class="play-link">腾讯分分彩<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.ssc?code=dfssc" class="play-link">极速时时彩<i class="  play-icon play-new "></i></a></li>
                                <li><a href="/Game.ssc?code=amssc" class="play-link">澳门时时彩<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.ssc?code=hgssc" class="play-link">韩国时时彩<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.ssc?code=twssc" class="play-link">台湾时时彩<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.ssc?code=bxssc" class="play-link">巴西时时彩<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.ssc?code=hnssc" class="play-link">河内时时彩<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.ssc?code=djssc" class="play-link">东京时时彩<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.ssc?code=ynssc" class="play-link">印尼分分彩<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.ssc?code=qqssc" class="play-link">QQ&nbsp;分分彩<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.ssc?code=ydssc" class="play-link">印度分分彩<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.ssc?code=amfssc" class="play-link">澳门分分彩<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.ssc?code=nyssc" class="play-link">纽约分分彩<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.ssc?code=mdssc" class="play-link">缅甸时时彩<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.ssc?code=azssc" class="play-link">澳洲时时彩<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.ssc?code=jzssc" class="play-link">加州时时彩<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.ssc?code=lyssc" class="play-link">里约时时彩<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.ssc?code=flbssc" class="play-link">菲律宾乐彩<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.ssc?code=mgssc" class="play-link">曼谷泰铢乐<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.ssc?code=xjpssc" class="play-link">新加坡快彩<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.ssc?code=mgqlssc" class="play-link">美国强力球<i class=" play-icon play-hot  "></i></a></li>
                             </ul>
            </div>
			<div class="number-con">
                <div class="com-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【11选5 系列】</div><br/>
                                <ul class="play-sort">
                                <li><a href="/Game.x5?code=df11x5" class="play-link">澳门11选5<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.x5?code=jx11x5" class="play-link">江西11选5<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.x5?code=gd11x5" class="play-link">广东11选5<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.x5?code=sh11x5" class="play-link">上海11选5<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.x5?code=ly11x5" class="play-link">里约11选5<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.x5?code=bx11x5" class="play-link">巴西11选5<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.x5?code=tw11x5" class="play-link">台湾11选5<i class="  play-icon play-new "></i></a></li>
                                <li><a href="/Game.x5?code=hn11x5" class="play-link">河内11选5<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.x5?code=dj11x5" class="play-link">东京11选5<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.x5?code=js11x5" class="play-link">极速11选5<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.x5?code=ql11x5" class="play-link">强力11选5<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.x5?code=az11x5" class="play-link">澳洲11选5<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.x5?code=jz11x5" class="play-link">加州11选5<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.x5?code=yn11x5" class="play-link">印尼11选5<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.x5?code=xy11x5" class="play-link">幸运11选5<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.x5?code=md11x5" class="play-link">缅甸11选5<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.x5?code=yd11x5" class="play-link">印度11选5<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.x5?code=ml11x5" class="play-link">马里11选5<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.x5?code=se11x5" class="play-link">首尔11选5<i class=" play-icon play-hot  "></i></a></li>
                             </ul>
            </div>
            <div class="number-con">
                <div class="com-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【快3 系列】</div><br/>
                                <ul class="play-sort">
                                <li><a href="/Game.k3?code=bjk3" class="play-link">北京快3<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.k3?code=f1k3" class="play-link">极速快3<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.k3?code=jsk3" class="play-link">江苏快3<i class="  play-icon play-new "></i></a></li>
                                <li><a href="/Game.k3?code=jlk3" class="play-link">吉林快3<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.k3?code=hubk3" class="play-link">湖北快3<i class="  play-icon play-new "></i></a></li>
                                <li><a href="/Game.k3?code=hebk3" class="play-link">河北快3<i class="  play-icon play-new "></i></a></li>
                                <li><a href="/Game.k3?code=shk3" class="play-link">上海快3<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.k3?code=jxk3" class="play-link">江西快3<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.k3?code=gxk3" class="play-link">广西快3<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.k3?code=lyk3" class="play-link">里约快3<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.k3?code=amk3" class="play-link">澳门快3<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.k3?code=twk3" class="play-link">台湾快3<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.k3?code=hnk3" class="play-link">河内快3<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.k3?code=mlk3" class="play-link">马里快3<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.k3?code=azk3" class="play-link">澳洲快3<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.k3?code=f5k3" class="play-link">分分快3<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.k3?code=xyk3" class="play-link">幸运快3<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.k3?code=mdk3" class="play-link">缅甸快3<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.k3?code=hgk3" class="play-link">韩国快3<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.k3?code=gnjk3" class="play-link">戛纳快3<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.k3?code=ydk3" class="play-link">印度快3<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.k3?code=alk3" class="play-link">迪拜快3<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.k3?code=jndk3" class="play-link">加拿大快3<i class="  play-icon play-new "></i></a></li>
                            </ul>
            </div>
			<div class="number-con">
                <div class="com-title">【六合彩】</div><br/>
                                <ul class="play-sort">
                                <li><a href="/Game.lhc?code=lhc" class="play-link">香港六合彩<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.lhc?code=dflhc" class="play-link">极速六合彩<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.lhc?code=lflhc" class="play-link">两分六合彩<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.lhc?code=sflhc" class="play-link">三分生肖彩<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.lhc?code=wflhc" class="play-link">五分生肖彩<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.lhc?code=amlhc" class="play-link">澳门六合彩<i class="  play-icon play-new "></i></a></li>
                             </ul>
            </div>
            <div class="number-con">
                <div class="com-title">【基诺彩】</div><br/>
                                <ul class="play-sort">
                                <li><a href="/Game.pk10?code=bjpk10" class="play-link">北京赛车pk10<i class=" play-icon play-hot  "></i></a></li>
                                <li><a href="/Game.pk10?code=dfpk10" class="play-link">澳门赛车PK10<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.pk10?code=jspk10" class="play-link">极速赛车PK10<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.pk10?code=lfpk10" class="play-link">里约赛车PK10<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.pk10?code=twpk10" class="play-link">台湾赛车PK10<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.pk10?code=azpk10" class="play-link">澳洲赛车PK10<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.pk10?code=mlpk10" class="play-link">马里赛车PK10<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.pk10?code=hnpk10" class="play-link">河内赛车PK10<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.keno?code=bjkeno" class="play-link">北京快乐八<i class="  play-icon play-new "></i></a></li>
								<li><a href="/Game.keno?code=dfkeno" class="play-link">极速快乐八<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.keno?code=amkeno" class="play-link">澳门快乐八<i class=" play-icon play-hot  "></i></a></li>
								<li><a href="/Game.keno?code=lykeno" class="play-link">里约基诺彩<i class=" play-icon play-hot  "></i></a></li>
                            </ul>
            </div>
            <div class="number-con">
                <div class="com-title">【其他】</div><br/>
                                <ul class="play-sort">
                                <li><a href="/Game.dpc?code=fc3d" class="play-link">福彩游戏3D<i class="  play-icon play-new "></i></a></li>
                                <li><a href="/Game.dpc?code=pl3" class="play-link">体彩排列3D<i class=" "></i></a></li>
                                <li><a href="/Game.dpc?code=df3d" class="play-link">极速游戏3D<i class="  play-icon play-new "></i></a></li>
				
                            </ul>
            </div>	
          </div>
        <div class="nav-line"></div>
    </div>
</div>    <!--轮播图-->
    <div id="html5zoo-1">
    <ul class="html5zoo-slides">
        <!--{split}-->
        <li>
            <a href="/" target="_blank">
            <img src="/ad/s1.jpg" width="1920" height="560" title="春节活动">
            </a>
        </li>
        <li>
            <a href="/" target="_blank">
            <img src="/ad/s2.jpg" width="1920" height="560" title="VIP俱乐部">
            </a>
        </li>
        <li>
            <a href="/" target="_blank">
            <img src="/ad/s3.jpg" width="1920" height="560" title="奖上加奖">
            </a>
        </li>
        <li>
            <a href="/" target="_blank">
            <img src="/ad/s4.jpg" width="1920" height="560" title="APP下载">
            </a>
        </li>
		<li>
            <a href="/" target="_blank">
            <img src="/ad/s5.jpg" width="1920" height="560" title="APP下载">
            </a>
        </li>
    </ul>
</div> <!--主要的内容-->   
    <div class="jack-main w">
        <div class="jack-notice">
            <div class="notice-l">
                <img src="/assets/notice-bg.png" alt="">
            </div>
            <div class="notice-m">
                     <marquee scrollamount="5" scrolldelay="100" direction="left" onmouseover="this.stop();"
                         onmouseout="this.start();" class="marquee">
                    <a href="javascript:;" id="first-announcement">{$gonggao.content}</a>
                </marquee>
             </div>
        </div>
     
</script><!--头部导航-->
        <div class="container">
            <!-- PC端最新开奖数据显示区域 -->
            <div class="pc-latest-lottery-section" style="margin: 20px 0; background: rgba(255,255,255,0.95); border-radius: 10px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <h3 style="margin: 0 0 15px 0; color: #333; font-size: 20px; text-align: center; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">🎲 最新开奖公告</h3>
                <div id="pc-home-lottery-display">
                    <div style="text-align: center; color: #666; padding: 30px; font-size: 16px;">正在加载开奖数据...</div>
                </div>
            </div>
            
            <ul class="home-center">
                <li class="center-activity">
                        <div class="home-ad">
                            <a href="javascript:void(0);">
                                <img class="home-ad-img" src="/zhengdian/ag.png">
                                <div class="home-ad-caption">
								<p class="home-ad-hover">
									                                                <a   href="/AgGame/index.php?Gametype=1&username={$userinfo.username}"  target="_blank">进入游戏</a>
																					</p>
                                </div>
                            </a>
                        </div>
                    </li>
                        <li class="center-activity">
                        <div class="home-ad">
                            <a href="javascript:void(0);">
                                <img class="home-ad-img" src="/zhengdian/mg.png">
                                <div class="home-ad-caption">
                                   <p class="home-ad-hover">
									                                                <a   href="/MgGame/index.php?Gametype=1&username={$userinfo.username}"  target="_blank">进入游戏</a>
																					</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="center-activity">
                        <div class="home-ad">
                            <a href="javascript:void(0);" class="home-ad-caption_a">
                                <img class="home-ad-img" src="/zhengdian/by.png">
                                <div class="home-ad-caption">
                                    <p class="home-ad-hover">
									                                                <a   href="/BbGame/index.php?Gametype=1&username={$userinfo.username}"  target="_blank">进入游戏</a>
</p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="center-activity">
                        <div class="home-ad">
                            <a href="javascript:void(0);" class="home-ad-caption_a">
                                <img class="home-ad-img" src="/zhengdian/aggj.png">
                                <div class="home-ad-caption">
                                    <p class="home-ad-hover">
																		                                                <a   href="/AgGame/index.php?Gametype=2&username={$userinfo.username}"  target="_blank">进入游戏</a>

									</p>
                                </div>
                            </a>
                        </div>
                    </li>
                 </ul>
		</div>
</div>
    <div class="part-body">
        <div class="container">
            <div class="part-body-left">
                <ul class="part-body-notice">
                    <li>
                    <h2 class="home-notice-tit"><span>最新中奖榜单</span></h2>
                    </li>
                    <li>
                        <div class="up-turn">
                                <ul id="leftBox">
                                        <li class="problem4ul">[04***d5]
                                            在重庆时时彩
                                            游戏中赢得4535元
                                        </li>
                                        <li class="problem4ul">[sk***8w]
                                            在里约快3
                                            游戏中赢得2657元
                                        </li>
                                        <li class="problem4ul">[sk***8w]
                                            在北京PK10
                                            游戏中赢得1031元
                                        </li>
                                        <li class="problem4ul">[14***0k]
                                            在重庆时时彩
                                            游戏中赢得6809元
                                        </li>
                                        <li class="problem4ul">[a8***69]
                                            在腾讯分分彩
                                            游戏中赢得1818元
                                        </li>
                                        <li class="problem4ul">[n0***rw]
                                            在澳门时时彩
                                            游戏中赢得7236元
                                        </li>
                                        <li class="problem4ul">[22***bl]
                                            在重庆时时彩
                                            游戏中赢得4010元
                                        </li>
                                        <li class="problem4ul">[j9***ol]
                                            在新疆时时彩
                                            游戏中赢得23791元
                                        </li>
										<li class="problem4ul">[sk***8w]
                                            在里约快3
                                            游戏中赢得2657元
                                        </li>
                                        <li class="problem4ul">[sk***8w]
                                            在广东11选5
                                            游戏中赢得1031元
                                        </li>
                                        <li class="problem4ul">[14***0k]
                                            在马里PK10
                                            游戏中赢得6809元
                                        </li>
                                        <li class="problem4ul">[a8***69]
                                            在美国强力球
                                            游戏中赢得1818元
                                        </li>
                                        <li class="problem4ul">[n0***rw]
                                            在QQ分分彩
                                            游戏中赢得7236元
                                        </li>
                                        <li class="problem4ul">[22***bl]
                                            在吉林快3
                                            游戏中赢得4010元
                                        </li>
                                        <li class="problem4ul">[j9***ol]
                                            在天津时时彩
                                            游戏中赢得23791元
                                        </li>
                                    </ul>
                            </div>
                    </li>
                </ul>
                <ul class="part-body-lottery">
                    <li class="home-lottery">
                        <h5>距北京PK拾&nbsp;<span id="sscNumber">729920</span>&nbsp;期截止时间</h5>


                        <div class="deadline-number" id="J-deadline-panel">
                            <em class="hour-left">
                                <b class="deadline-number-mask"></b>
                                <span class="deadline-num deadline-num-next-t">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-next-b">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-t">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-b">
                          <span class="inner"></span>
                        </span>
                            </em>
                            <em class="hour-right">
                                <b class="deadline-number-mask"></b>
                                <span class="deadline-num deadline-num-next-t">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-next-b">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-t">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-b">
                          <span class="inner"></span>
                        </span>
                            </em>
                            <span>:</span>
                            <em class="min-left">
                                <b class="deadline-number-mask"></b>
                                <span class="deadline-num deadline-num-next-t">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-next-b">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-t">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-b">
                          <span class="inner"></span>
                        </span>
                            </em>
                            <em class="min-right">
                                <b class="deadline-number-mask"></b>
                                <span class="deadline-num deadline-num-next-t">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-next-b">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-t">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-b">
                          <span class="inner"></span>
                        </span>
                            </em>
                            <span>:</span>
                            <em class="sec-left">
                                <b class="deadline-number-mask"></b>
                                <span class="deadline-num deadline-num-next-t">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-next-b">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-t">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-b">
                          <span class="inner"></span>
                        </span>
                            </em>
                            <em class="sec-right">
                                <b class="deadline-number-mask"></b>
                                <span class="deadline-num deadline-num-next-t">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-next-b">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-t">
                          <span class="inner"></span>
                        </span>
                                <span class="deadline-num deadline-num-b">
                          <span class="inner"></span>
                        </span>
                            </em>
                        </div>
                        <a href="/Game.pk10?code=bjpk10" class="bet">立即投注</a>
                    </li>
                </ul>
            </div>

            <div class="part-body-right">
                <div class="hot">
                   <div class="tab-playGame home-tab-playGame">
                    <button id="js-lmpGames" class="  " >信用玩法<a class="hotgame-icon"></a></button>
                    </div>
                    <div class="hot-type gfc-wraper " style="display:  block "  >
                    	<a href="/OldGame.ssc?code=cqssc">重庆时时彩<span class="icon-hzn icon-hot"></span></a>
                    	<a href="/OldGame.ssc?code=txssc">腾讯分分彩<span class="icon-hzn icon-hot"></span></a>
                        <a href="/OldGame.ssc?code=xjssc">新疆时时彩<span class="icon-hzn icon-zd"></span></a>
                        <a href="/OldGame.ssc?code=tjssc">天津时时彩</a>
                        <a href="/OldGame.pk10?code=bjpk10">北京PK拾<span class="icon-hzn icon-hot"></span></a>
                        <a href="/OldGame.pk10?code=dfpk10">澳门PK拾<span class="icon-hzn icon-zd"></span></a>
                        <a href="/OldGame.pk10?code=lfpk10">里约PK拾<span class="icon-hzn icon-zd"></span></a>
                        <a href="/OldGame.pk10?code=azpk10">澳洲PK拾<span class="icon-hzn icon-zd"></span></a>
                       <br>
                         <a href="/OldGame.ssc?code=amssc">澳门时时彩<span class="icon-hzn icon-hot"></span></a>
                        <a href="/OldGame.ssc?code=twssc">台湾时时彩<span class="icon-hzn icon-hot"></span></a>
                        <a href="/OldGame.ssc?code=hgssc">韩国时时彩<span class="icon-hzn icon-new"></span></a>
                        <a href="/OldGame.ssc?code=bxssc">巴西时时彩<span class="icon-hzn icon-new"></span></a>
                        <a href="/OldGame.ssc?code=hnssc">河内时时彩<span class="icon-hzn icon-new"></span></a>
                        <a href="/OldGame.ssc?code=djssc">东京时时彩<span class="icon-hzn icon-hot"></span></a>
                        <a href="/OldGame.ssc?code=ynssc">印尼分分彩<span class="icon-hzn icon-zd"></span></a>
                        <a href="/OldGame.ssc?code=qqssc">QQ分分彩<span class="icon-hzn icon-new"></span></a>
                       <br>
                       	<a href="/OldGame.ssc?code=ydssc">印度分分彩<span class="icon-hzn icon-zd"></span></a>
                        <a href="/OldGame.ssc?code=amfssc">澳门分分彩<span class="icon-hzn icon-hot"></span></a>
                        <a href="/OldGame.ssc?code=nyssc">纽约分分彩<span class="icon-hzn icon-new"></span></a>
                        <a href="/OldGame.ssc?code=mdssc">缅甸时时彩<span class="icon-hzn icon-zd"></span></a>
                        <a href="/OldGame.ssc?code=azssc">澳洲时时彩</a>
                        <a href="/OldGame.ssc?code=jzssc">加州时时彩<span class="icon-hzn icon-zd"></span></a>
                        <a href="/OldGame.ssc?code=lyssc">里约时时彩<span class="icon-hzn icon-new"></span></a>
                        <a href="/OldGame.ssc?code=mgqlssc">美国强力球<span class="icon-hzn icon-new"></span></a>
                    </div>
                </div>
                <ul class="games-type">
                    <div class="container">
                        <ul class="home-center Thirdparty">
                                                            <li class="center-activity">
                                    <div class="img_word">
                                        <span class="tit">电玩城</span>
                                        <span class="describe">人气爆棚，激情无限</span>
                                    </div>
                                    <div class="home-ad">
                                        <span class="title"> </span>
                                        <a href="javascript:void(0)">
                                            <img class="home-ad-img" src="/zhengdian/GHAG.jpg"
                                                 alt="">
                                        </a>
                                        <div class="home-ad-caption">
                                            <a href="javascript:void(0)"></a>
                                            <p class="home-ad-hover">
                                                <a href="javascript:void(0)">
                                                    <span>电玩城</span>
                                                    <span>人气爆棚，激情无限</span>
                                                </a>
                                                <a class="gogame isopen"
                                                    href="/AgGame/index.php?GameType=8&username={$userinfo.username}"  target="_blank">进入游戏</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="center-activity">
                                    <div class="img_word">
                                        <span class="tit">MG电子</span>
                                        <span class="describe">神秘刺激，淘金之旅</span>
                                    </div>
                                    <div class="home-ad">
                                        <span class="title"></span>
                                        <a href="javascript:void(0)" class="home-ad-caption_a">
                                            <img class="home-ad-img" src="/zhengdian/ghbanner2.jpg">
                                        </a>
                                        <div class="home-ad-caption">
                                            <a href="javascript:void(0)" class="home-ad-caption_a"></a>
                                            <p class="home-ad-hover">
                                                <a href="javascript:void(0)" class="home-ad-caption_a">
                                                    <span>MG电子</span>
                                                    <span>神秘刺激 淘金之旅</span>
                                                </a>
                                                <a class="gogame isopen"
                                                      href="/MgGame/index.php?username={$userinfo.username}"  target="_blank">进入游戏</a>
                                            </p>

                                        </div>

                                    </div>
                                </li>
                                <li class="center-activity">
                                    <div class="img_word">
                                        <span class="tit">PT电子</span>
                                        <span class="describe">最劲爆的奖池现金大奖</span>
                                    </div>
                                    <div class="home-ad">
                                        <span class="title"></span>
                                        <a href="javascript:void(0)" class="home-ad-caption_a">
                                            <img class="home-ad-img"
                                                 src="/zhengdian/GHfishing.jpg"
                                                 alt="Image 01">
                                        </a>
                                        <div class="home-ad-caption"><a href="javascript:void(0)"
                                                                        class="home-ad-caption_a">
                                            </a>
                                            <p class="home-ad-hover"><a href="javascript:void(0)"
                                                                        class="home-ad-caption_a">
                                                    <span>PT电子</span>
                                                    <span>最劲爆的奖池现金大奖</span>
                                                </a><a class="gogame isopen"
                                                       href="/PTGame/index.php?username={$userinfo.username}"  target="_blank">进入游戏</a>

                                            </p>

                                        </div>

                                    </div>
                                </li>
                                <li class="center-activity">
                                    <div class="img_word">
                                        <span class="tit">AG视讯</span>
                                        <span class="describe">现场美女，视讯直播</span>
                                    </div>
                                    <div class="home-ad">
                                        <span class="title"></span>
                                        <a href="javascript:void(0)">
                                            <img class="home-ad-img"
                                                 src="/zhengdian/GHSB.jpg"
                                                 alt="Image 01">
                                        </a>
                                        <div class="home-ad-caption"><a href="javascript:void(0)">
                                            </a>
                                            <p class="home-ad-hover"><a href="javascript:void(0)">
                                                    <span>AG视讯</span>
                                                    <span>现场美女&nbsp;&nbsp;视讯直播</span>
                                                </a>
                                                <a class="gogame isopen"
                                                   href="/AgGame/index.php?username={$userinfo.username}"  target="_blank">进入游戏</a>

                                            </p>

                                        </div>

                                    </div>
                                </li>
                                <li class="center-activity">
                                    <div class="img_word">
                                        <span class="tit">AG捕鱼王</span>
                                        <span class="describe">畅玩无阻，想玩就玩</span>
                                    </div>
                                    <div class="home-ad">
                                        <span class="title"></span>
                                        <a href="javascript:void(0)" class="home-ad-caption_a">
                                            <img class="home-ad-img"
                                                 src="/zhengdian/GHBJL.jpg"
                                                 alt="Image 01">
                                        </a>
                                        <div class="home-ad-caption"><a href="javascript:void(0)"
                                                                        class="home-ad-caption_a"> </a>
                                            <p class="home-ad-hover"><a href="javascript:void(0)"
                                                                        class="home-ad-caption_a">
                                                    <span>AG捕鱼王</span>
                                                    <span>畅玩无阻&nbsp;想玩就玩 </span>
                                                </a> <a class="gogame isopen"
                                                        href="/AgGame/index.php?GameType=6&username={$userinfo.username}"  target="_blank">进入游戏</a>
                                            </p>

                                        </div>

                                    </div>
                                </li>
                                <li class="center-activity">
                                    <div class="img_word">
                                        <span class="tit">沙巴体育</span>
                                        <span class="describe">精彩赛事，不容错过</span>
                                    </div>
                                    <div class="home-ad">
                                        <span class="title"></span>
                                        <a href="javascript:void(0);" class="home-ad-caption_a">
                                            <img class="home-ad-img" src="/zhengdian/GHPT.jpg">
                                        </a>
                                        <div class="home-ad-caption"><a href="javascript:void(0);"
                                                                        class="home-ad-caption_a">
                                            </a>
                                            <p class="home-ad-hover"><a href="javascript:void(0);"
                                                                        class="home-ad-caption_a">
                                                    <span>沙巴体育</span>

                                                    <span>精彩赛事&nbsp;不容错过 </span>
                                                </a> <a class="gogame isopen"
                                                       href="/IbcGame/index.php?GameType=1&username={$userinfo.username}"  target="_blank">进入游戏</a>
                                            </p>

                                        </div>

                                    </div>
                                </li>
                           </ul>
                    </div>
                </ul>
            </div>
        </div>
    </div>
<script>
        layui.use('carousel', function () {
            var carousel = layui.carousel;
            //常规轮播
            carousel.render({
                elem: '#div-banner'
                , arrow: 'always'
                , width: '100%'
                , height: '100%'
            });

        });
</script>
</body>
</html>
<script src="/zhengdian/zd.public.js"></script>
<script src="/zhengdian/zd.password.js"></script>
<script src="/assets/base-all.min.js"></script>
<script src="/assets/swiper.min.js"></script>
<script src="/assets/flipclock.js"></script>
<script src="/assets/html5zoo.js"></script>
<script src="/assets/lovelygallery.js"></script>   
<script src="/assets/jquery.superslide.js"></script>
<script src="/assets/number.slide.js"></script>
<script src="/assets/bootstrap-modal.js"></script>
<script src="/assets/effect.js"></script>
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
 document.getElementById("timeShow").innerHTML="当前时钟："+y+"年"+month+"月"+day+"日"+h+"时"+m+"分"+s+"秒";
 t = setTimeout(time,1000);    
} 
window.onload=function(){time()}
</script>
<include file="Public/footer" />
</body>
<script src="/zhengdian/zd.password.js"></script>

<script type="text/javascript">
        var intDiff = parseInt(200); //倒计时总秒数量


        function timer(intDiff) {
            var flipCard = function (dom, number) {
                var dom = $(dom),
                    numDoms = dom.find('.inner');
                numDoms.eq(0).text(number);
                numDoms.eq(1).text(number);
                dom.addClass('min-left-anim');
                setTimeout(function () {
                    numDoms.eq(2).text(number);
                    numDoms.eq(3).text(number);
                    dom.removeClass('min-left-anim');
                }, 800);
            };
            var
                timeDoms = $('#J-deadline-panel').children('em'),
                h = 0,
                m = 0,
                s = 0,
                oldTimeNumber = [],
                oldTimeNumberData = [],
                timeStrArr = [],
                indexArr = [],
                timeStr = '',
                buttonTimeDom = $('#J-button-btn-time');
            window.setInterval(function () {
                    var day = 0,
                        hour = 0,
                        minute = 0,
                        second = 0; //时间默认值
                    if (intDiff > 0) {
                        day = Math.floor(intDiff / (60 * 60 * 24)); //天
                        hour = Math.floor(intDiff / (60 * 60)) - (day * 24); //时
                        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60); //分
                        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60); //秒
                    }
                    //倒计时
//
                    h = Math.floor(intDiff / 3600);
                    m = Math.floor(intDiff % 3600 / 60);
                    s = intDiff % 3600 % 60;


                    h = h < 10 ? '0' + h : '' + h;
                    m = m < 10 ? '0' + m : '' + m;
                    s = s < 10 ? '0' + s : '' + s;
                    timeStr = '' + h + m + s;
                    timeStrArr = timeStr.split('');


                    for (i = 0, len = timeStrArr.length; i < len; i++) {
                        if (timeStrArr[i] != oldTimeNumber[i]) {
                            indexArr.push(i);
                        }
                    }

                    oldTimeNumber = timeStr.split('');

                    for (i = 0, len = indexArr.length; i < len; i++) {
                        if (document.all) {

                            timeDoms[indexArr[i]].innerHTML = oldTimeNumber[indexArr[i]];
                        } else {
//                               	console.log('2222');
                            flipCard(timeDoms[indexArr[i]], oldTimeNumber[indexArr[i]]);
                        }
                    }
                    //倒计时

                    intDiff--;
                    indexArr = [];

                    if (intDiff == 0) {

                        var sscNumber = $("#sscNumber").html();
                        $.ajax({
                            url: 'https://www.zd555.net/get-current-issue/24',
                            type: 'get',
                            dataType: 'json',
                            success: function (data) {
                                console.log('倒计时调试');
                                console.log(data);
//                              console.log("data['isSuccess']:" + data['issue']);
//                              console.log('$("#sscNumber").html():' + $("#sscNumber").html());
//                              console.log("data['data']['issue']:" + data['issue'])
//                              console.log("data['end_time']:"+data['end_time']);
                                if (data['issue'] && $("#sscNumber").html() != data['issue']) {
                                    $("#sscNumber").html(data['issue']);
                                    intDiff = data['end_time'];
//                                  console.log(data);
//                                  console.log('倒计时');
//                                  console.log(intDiff);
                                } else if ($("#sscNumber").html() == data['issue']) {
                                    intDiff = 1
                                }

                            },
                            error: function (err, textStatus) {
//                            console.log(':');
//                            console.log(err);
                            }
                        });
                    }
                },
                1000);
        }

        $(function () {
            timer(intDiff);
                    });
</script>
<script>
function tcpay(){
	layer.open({
	  type: 2,
	  area: ['1000px', '600px'],
	  //fixed: false, //不固定
	  title:'额度转换',
	  scrollbar: false,//屏蔽滚动条
	  //maxmin: true,
	  content:'/moneyChange.php?username={$userinfo.username}'
	});
	return false;
}
</script>

<script>
// PC端主页开奖数据加载
$(document).ready(function(){
    loadPCHomeLotteryData();
    
    // 定时刷新开奖数据（每60秒）
    setInterval(function() {
        loadPCHomeLotteryData();
    }, 60000);
});

// 加载PC端主页开奖数据
function loadPCHomeLotteryData() {
    // 热门彩票类型
    var popularLotteries = [
        {type: 'cqssc', name: '重庆时时彩'},
        {type: 'bjk3', name: '北京快3'},
        {type: 'bjpk10', name: '北京PK10'},
        {type: 'dfssc', name: '东方时时彩'},
        {type: 'f1k3', name: '极速快3'},
        {type: 'f5k3', name: '分分快3'}
    ];
    
    var results = [];
    var completed = 0;
    
    popularLotteries.forEach(function(lottery) {
        $.ajax({
            url: '/Api/Kaijiang/getLatest',
            type: 'GET',
            data: {
                type: lottery.type,
                count: 1
            },
            dataType: 'json',
            success: function(res) {
                if (res.code === 200 && res.data && res.data.length > 0) {
                    results.push({
                        lottery: lottery,
                        data: res.data[0]
                    });
                }
            },
            complete: function() {
                completed++;
                if (completed === popularLotteries.length) {
                    displayPCHomeLotteryData(results);
                }
            }
        });
    });
}

// 显示PC端主页开奖数据
function displayPCHomeLotteryData(results) {
    var container = $('#pc-home-lottery-display');
    
    if (!results || results.length === 0) {
        container.html('<div style="text-align: center; color: #999; padding: 30px; font-size: 16px;">暂无开奖数据</div>');
        return;
    }
    
    var html = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 15px;">';
    
    results.forEach(function(item) {
        if (item.lottery && item.data) {
            html += '<div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">';
            html += '  <div style="display: flex; justify-content: space-between; align-items: center;">';
            html += '    <div>';
            html += '      <h4 style="margin: 0 0 5px 0; font-size: 16px; font-weight: bold;">' + item.lottery.name + '</h4>';
            html += '      <div style="font-size: 12px; opacity: 0.9;">第' + item.data.expect + '期</div>';
            html += '    </div>';
            html += '    <div style="text-align: right;">';
            html += '      <div class="pc-lottery-balls" style="margin-bottom: 5px;">';
            
            if (item.data.opencode_array) {
                item.data.opencode_array.forEach(function(num, index) {
                    html += '<span style="display:inline-block; width:32px; height:32px; line-height:32px; text-align:center; background:rgba(255,255,255,0.9); color:#333; border-radius:50%; margin:1px; font-size:14px; font-weight:bold; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">' + num + '</span>';
                });
            }
            
            html += '      </div>';
            html += '      <div style="font-size: 11px; opacity: 0.8;">' + item.data.opentime + '</div>';
            html += '    </div>';
            html += '  </div>';
            html += '</div>';
        }
    });
    
    html += '</div>';
    container.html(html);
}
</script>

</body>
</html>