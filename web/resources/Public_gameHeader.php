<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="description" content=""/>
<meta name="keywords" content=""/>
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
<title>{:GetVar('webtitle')} - 线上官网</title>
</style>
<link media="all" type="text/css" rel="stylesheet" href="/assets/global.css">
<link media="all" type="text/css" rel="stylesheet" href="/assets/font-awesome.css"> 
<link media="all" type="text/css" rel="stylesheet" href="/assets/swiper.css">
<link media="all" type="text/css" rel="stylesheet" href="/assets/index.css">
<link media="all" type="text/css" rel="stylesheet" href="/assets/flipclock.css">
<script>
    var WebConfigs = {
        "ROOT" : "__ROOT__",
        'IMG' : "__IMG__",
    }
</script>
<script type="text/javascript" src="__JS__/jquery-3.1.1.min.js"></script>
<link rel="stylesheet" type="text/css" href="__CSS__/artDialog.css" />
<link rel="stylesheet" type="text/css" href="__CSS__/headernav.css" />
<script type="text/javascript" src="__JS__/artDialog.js"></script>
<script type="text/javascript" src="/resources/js/way.min.js"></script>
<script type="text/javascript" src="/resources/main/common.js"></script>
<link media="all" type="text/css" rel="stylesheet" href="/assets/global-com.css">
</head>
<style type="text/css">
body {background-image: url(assets/bg3.jpg);}
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
						<i class="iconfont refresh_money">&#xe602;</i>
						<em class="hide_money_btn" style="color:#fff;">隐藏</em>
						</span>
						<span class="hide_money" style="display:none;color:#fff;">
							已隐藏
						<em class="show_money_btn" style="color:#fff;">显示</em>
						</span>
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
                                <div class="text-1">彩票游戏</div>
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
                    <a href="javascript:void(0)" class="nav-a">
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
                    <a href="javascript:void(0)" class="nav-a">
                        <div class="nav-center">
                            <div class="text-1">电子棋牌</div>
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
								<li><a href="/Game.lhc?code=amlhc" class="play-link">澳门六合彩<i class="  play-icon play-new "></i></a></li>
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
</div>    <!--主要的内容-->
</script>
<script src="/assets/base-all.min.js"></script>
<script src="/assets/swiper.min.js"></script>
<script src="/assets/flipclock.js"></script>
<script src="/assets/html5zoo.js"></script>
<script src="/assets/lovelygallery.js"></script>
<script src="/assets/jquery.superslide.js"></script>
<script src="/assets/number.slide.js"></script>
<script src="/assets/bootstrap-modal.js"></script>
<script src="/assets/effect.js"></script>
<!--数字滚动效果-->
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
</body>
</html>
