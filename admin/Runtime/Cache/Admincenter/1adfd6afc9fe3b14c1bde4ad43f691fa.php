<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<LINK rel="Bookmark" href="/favicon.ico" >
<LINK rel="Shortcut Icon" href="/favicon.ico" />

<script type="text/javascript" src="../Template/admin/resources/ui/lib/html5.js"></script>
<script type="text/javascript" src="../Template/admin/resources/ui/lib/respond.min.js"></script>
<script type="text/javascript" src="../Template/admin/resources/ui/lib/PIE_IE678.js"></script>

<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/static/h-ui/css/H-ui.min.css" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/static/h-ui.admin/css/H-ui.admin.css" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/lib/Hui-iconfont/1.0.7/iconfont.css" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/lib/icheck/icheck.css" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/static/h-ui.admin/skin/green/skin.css" id="skin" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/static/h-ui.admin/css/style.css" />

<script type="text/javascript" src="../Template/admin/resources/ui/DD_belatedPNG_0.0.8a-min.js" ></script>

<title><?php echo GetVar('webtitle');?>管理系统</title>
</head>
<body>
<header class="navbar-wrapper">
	<div class="navbar navbar-fixed-top">
		<div class="container-fluid cl"> <a class="logo navbar-logo f-l mr-10 hidden-xs" href="/"><?php echo GetVar('webtitle');?> </a> <a class="logo navbar-logo-m f-l mr-10 visible-xs" href="/"><?php echo GetVar('webtitle');?>管理系统</a> <a aria-hidden="false" class="nav-toggle Hui-iconfont visible-xs" href="javascript:;">&#xe667;</a>
			<!--nav class="nav navbar-nav navbar-menu">
				<ul class="cl">
					<li class="dropDown dropDown_hover"><a href="javascript:;" class="dropDown_A"><i class="Hui-iconfont">&#xe600;</i> 快捷菜单 <i class="Hui-iconfont">&#xe6d5;</i></a>
						<ul class="dropDown-menu menu radius box-shadow">
							<li><a href="<?php echo U('Tongji/gaikuang');?>" data-title="统计概况">统计概况</a></li>
							<li><a href="<?php echo U('Tongji/yingkui');?>" data-title="盈亏统计">盈亏统计</a></li>
							<li><a href="<?php echo U('Member/recharge');?>" data-title="充值管理">充值管理</a></li>
							<li><a href="<?php echo U('Member/withdraw');?>" data-title="提现记录">提款管理</a></li>
							<li><a href="<?php echo U('Member/manage');?>" data-title="会员列表">会员列表</a></li>
							<li><a href="<?php echo U('Member/banklist');?>" data-title="会员银行卡">会员银行卡</a></li>
							<li><a href="<?php echo U('Member/fuddetail');?>" data-title="账变记录">账变记录</a></li>
						</ul>
					</li>
				</ul>
			</nav-->
			<nav id="Hui-userbar" class="nav navbar-nav navbar-userbar hidden-xs">
				<ul class="cl">
					<li><?php echo ($admininfo['groupname']); ?></li>
					<li class="dropDown dropDown_hover"> <a href="javascript:void(0);" class="dropDown_A"><?php echo ($admininfo['username']); ?> <i class="Hui-iconfont">&#xe6d5;</i></a>
						<ul class="dropDown-menu menu radius box-shadow">
							<li><a href="javascript:void(0);" onclick="article_add('修改密码','<?php echo U('Adminmember/editpass',['type'=>'pass']);?>')">修改密码</a></li>
							<li><a href="javascript:void(0);" onclick="article_add('修改安全码','<?php echo U('Adminmember/editpass',['type'=>'safecode']);?>')">修改安全码</a></li>
							<li><a href="<?php echo U('Public/loginout');?>">退出</a></li>
						</ul>
					</li>
					<li id="Hui-skin" class="dropDown right dropDown_hover"> <a href="javascript:;" class="dropDown_A" title="换肤"><i class="Hui-iconfont" style="font-size:18px">&#xe62a;</i></a>
						<ul class="dropDown-menu menu radius box-shadow">
							<li><a href="javascript:;" data-val="default" title="黑色">皮肤风格-幻黑</a></li>
							<li><a href="javascript:;" data-val="blue" title="蓝色">皮肤风格-骚红</a></li>
							<li><a href="javascript:;" data-val="green" title="绿色">橘黄风格(默认)</a></li>
							<li><a href="javascript:;" data-val="red" title="红色">皮肤风格-骚蓝</a></li>
							<li><a href="javascript:;" data-val="yellow" title="黄色">皮肤风格-骚黄</a></li>
							<li><a href="javascript:;" data-val="orange" title="绿色">皮肤风格-橙色</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</header>
<aside class="Hui-aside">
	<input runat="server" id="divScrollValue" type="hidden" value="" />
	<div class="menu_dropdown bk_2">
    <?php if($admininfo["sys"] == 1): ?><dl id="menu-system">
    <dt><i class="Hui-iconfont">&#xe62e;</i> &#21518;&#21488;&#31995;&#32479;&#31649;&#29702;<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd style="display:block">
        <ul>
            <li><a href="<?php echo U('System/setting');?>" data-title="&#21518;&#21488;&#31995;&#32479;&#35774;&#32622;">&#21518;&#21488;&#31995;&#32479;&#35774;&#32622;</a></li>
            <li><a href="<?php echo U('Caipiao/cptype');?>" data-title="&#20840;&#23616;&#24425;&#31080;&#31649;&#29702;">&#20840;&#23616;&#24425;&#31080;&#31649;&#29702;</a></li>
            <li><a href="<?php echo U('Caipiao/wanfa');?>" data-title="&#23448;&#26041;&#29609;&#27861;&#35774;&#32622;">&#23448;&#26041;&#29609;&#27861;&#35774;&#32622;</a></li>
            <li><a href="<?php echo U('Caipiao/oldWanfa');?>" data-title="&#22806;&#22260;&#29609;&#27861;&#35774;&#32622;">&#22806;&#22260;&#29609;&#27861;&#35774;&#32622;</a></li>
            <li><a href="<?php echo U('Caipiao/kaijiang');?>" data-title="&#20840;&#23616;&#24320;&#22870;&#35774;&#32622;">&#20840;&#23616;&#24320;&#22870;&#35774;&#32622;</a></li>
            <li><a href="<?php echo U('Caipiao/yukaijiang');?>" data-title="&#31995;&#32479;&#24320;&#22870;&#39044;&#35774;">&#31995;&#32479;&#24320;&#22870;&#39044;&#35774;</a></li>
            <li><a href="<?php echo U('Game/manage');?>" data-title="&#24425;&#31080;&#25237;&#27880;&#35760;&#24405;">&#24425;&#31080;&#25237;&#27880;&#35760;&#24405;</a></li>
            <li><a href="<?php echo U('Game/checkerrorder');?>" data-title="&#25237;&#27880;&#39118;&#25511;&#31649;&#29702;">&#25237;&#27880;&#39118;&#25511;&#31649;&#29702;</a></li>
			
        </ul>
    </dd>
</dl><?php endif; ?>

<?php if($admininfo["bank"] == 1): ?><dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe6f3;</i> &#38134;&#34892;&#36130;&#21153;&#37197;&#32622;<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="<?php echo U('Sysbank/manage');?>" data-title="&#25552;&#29616;&#38134;&#34892;&#31649;&#29702;">&#25552;&#29616;&#38134;&#34892;&#31649;&#29702;</a></li>
            <li><a href="<?php echo U('Member/payset');?>" data-title="&#20805;&#20540;&#38134;&#34892;&#31649;&#29702;">&#20805;&#20540;&#38134;&#34892;&#31649;&#29702;</a></li>
            <li><a href="<?php echo U('Member/recharge');?>" data-title="&#29992;&#25143;&#20805;&#20540;&#35760;&#24405;">&#29992;&#25143;&#20805;&#20540;&#35760;&#24405;</a></li>
            <li><a href="<?php echo U('Member/withdraw');?>" data-title="&#29992;&#25143;&#25552;&#29616;&#35760;&#24405;">&#29992;&#25143;&#25552;&#29616;&#35760;&#24405;</a></li>
			<li><a href="<?php echo U('Member/withdraw');?>" data-title="&#22865;&#32422;&#20998;&#32418;&#31649;&#29702;">&#22865;&#32422;&#20998;&#32418;&#31649;&#29702;</a></li>
			
        </ul>
    </dd>
</dl><?php endif; ?>
<?php if($admininfo["caiwu"] == 1): ?><dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe61e;</i> 财务数据统计<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="<?php echo U('Tongji/gaikuang');?>" data-title="后台统计概况">后台统计概况</a></li>
            <li><a href="<?php echo U('Tongji/yingkui');?>" data-title="财务盈亏统计">财务盈亏统计</a></li>
            <li><a href="<?php echo U('Tongji/user');?>" data-title="用户统计概况">用户统计概况</a></li>
            <li><a href="<?php echo U('Tongji/tdgaikuang');?>" data-title="团队统计概况">团队统计概况</a></li>
            <li><a href="<?php echo U('Tongji/cptouzhu3d');?>" data-title="全局投注统计">全局投注统计</a></li>
            <li><a href="<?php echo U('Tongji/chongti3d');?>" data-title="充值提款统计">充值提款统计</a></li>
        </ul>
    </dd>
</dl><?php endif; ?>

<?php if($admininfo["user"] == 1): ?><dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe60d;</i> 会员管理中心<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="<?php echo U('Membergroup/manage');?>" data-title="会员级别分组">会员级别分组</a></li>
            <li><a href="<?php echo U('Member/manage');?>" data-title="代理会员列表">代理会员列表</a></li>
            <li><a href="<?php echo U('Member/sameipuser');?>" data-title="异常登录地点">异常登录地点</a></li>
            <li><a href="<?php echo U('Member/fuddetail');?>" data-title="会员账变记录">会员账变记录</a></li>
            <li><a href="<?php echo U('Member/banklist');?>" data-title="会员银行信息">会员银行信息</a></li>
            <li><a href="<?php echo U('Member/agentlink');?>" data-title="代理注册链接">代理注册链接</a></li>
            <li><a href="<?php echo U('Member/memlog');?>" data-title="会员登录日志">会员登录日志</a></li>
            <li><a href="<?php echo U('Member/khddmsg');?>" data-title="站内消息列表">站内消息列表</a></li>
        </ul>
    </dd>
</dl><?php endif; ?>
<?php if($admininfo["zuser"] == 1): ?><dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe6bb;</i> 真人视讯体育<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="<?php echo U('Zhenren/transrecord');?>" data-title="额度转换记录">额度转换记录</a></li>
            <li><a href="<?php echo U('Zhenren/agztrecord');?>" data-title="AG 投注记录">AG 投注记录</a></li>
            <li><a href="<?php echo U('Zhenren/bbtzrecord');?>" data-title="BB 投注记录">BB 投注记录</a></li>
            <li><a href="<?php echo U('Zhenren/sstzrecord');?>" data-title="KY 投注记录">KY 投注记录</a></li>
            <li><a href="<?php echo U('Zhenren/agztreport');?>" data-title="AG 会员报表">AG 会员报表</a></li>
            <li><a href="<?php echo U('Zhenren/bbtzreport');?>" data-title="BB 会员报表">BB 会员报表</a></li>
            <li><a href="<?php echo U('Zhenren/sstzreport');?>" data-title="KY 会员报表">KY 会员报表</a></li>
            <li><a href="<?php echo U('Zhenren/getrecords');?>" data-title="线路切换配置">线路切换配置</a></li>
			<li><a href="<?php echo U('Zhenren/getrecords');?>" data-title="WG 接口配置">WG 接口配置</a></li>
			<li><a href="<?php echo U('Zhenren/getrecords');?>" data-title="BI 接口配置">BI 接口配置</a></li>
			<li><a href="<?php echo U('Zhenren/getrecords');?>" data-title="开启额度免转">开启额度免转</a></li>
         
        </ul>
    </dd>
</dl><?php endif; ?>
<?php if($admininfo["super"] == 1): ?><dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe62d;</i> 超级管理控制<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="<?php echo U('Admingroup/manage');?>" data-title="管理分组配置">管理分组配置</a></li>
            <li><a href="<?php echo U('Adminmember/manage');?>" data-title="超级管理列表">超级管理列表</a></li>
            <li><a href="<?php echo U('Adminmember/memlog');?>" data-title="股东管理人员">股东管理人员</a></li>
			<li><a href="<?php echo U('Adminmember/memlog');?>" data-title="财务管理人员">财务管理人员</a></li>
			<li><a href="<?php echo U('Adminmember/memlog');?>" data-title="日常管理人员">日常管理人员</a></li>
			<li><a href="<?php echo U('Adminmember/memlog');?>" data-title="开奖管理人员">开奖管理人员</a></li>
        </ul>
    </dd>
</dl><?php endif; ?>
<?php if($admininfo["syhuodongs"] == 1): ?><dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe6bb;</i> 平台活动管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="<?php echo U('System/zengsong');?>" data-title="赠送活动">赠送活动管理</a></li>
            <li><a href="<?php echo U('Member/fanshui');?>" data-title="会员反水">会员反水管理</a></li>
            <li><a href="<?php echo U('Member/jinjijiangli');?>" data-title="晋级奖励">晋级奖励管理</a></li>
            <li><a href="<?php echo U('Member/dailiyongjin');?>" data-title="代理佣金">代理佣金管理</a></li>
        </ul>
    </dd>
</dl><?php endif; ?>

<?php if($admininfo["huodongnr"] == 1): ?><dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe616;</i> 活动内容管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="<?php echo U('News/category');?>" data-title="资讯栏目">资讯栏目管理</a></li>
            <li><a href="<?php echo U('News/manage');?>" data-title="新闻资讯">新闻资讯管理</a></li>
            <li><a href="<?php echo U('News/gonggao');?>" data-title="公告管理">网站公告管理</a></li>
        </ul>
    </dd>
</dl><?php endif; ?>
<?php if($admininfo["yunwei"] == 1): ?><dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe616;</i> 数据运维管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="<?php echo U('Yunwei/caiji');?>" data-title="采集设置">全局采集设置</a></li>
            <li><a href="<?php echo U('Yunwei/dbclear');?>" data-title="数据清理">管理数据清理</a></li>
            <li><a href="<?php echo U('Database/index',['type'=>'export']);?>" data-title="数据库备份">管理数据备份</a></li>
            <li><a href="<?php echo U('Database/index',['type'=>'import']);?>" data-title="数据库还原">管理数据还原</a></li>
            <!--<li><a href="<?php echo U('Database/nization');?>" data-title="数据备份同步">数据备份同步</a></li>-->
            <li><a href="<?php echo U('Yunwei/jihua');?>" data-title="计划任务">配置计划任务</a></li>
            <li><a href="<?php echo U('Yunwei/yijianclear');?>" data-title="一键清理数据">全局数据清理</a></li>
        </ul>
    </dd>
</dl><?php endif; ?>
<?php if($admininfo["qiyue"] == 1): ?><dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe616;</i> 合同契约管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="<?php echo U('Contract/details');?>" data-title="契约合同设置">契约合同设置</a></li>
			<li><a href="<?php echo U('Contract/users');?>" data-title="签约用户">签约用户管理</a></li>
			<li><a href="<?php echo U('Contract/drawshare');?>" data-title="分红领取">契约分红领取</a></li>
        </ul>
    </dd>
</dl><?php endif; ?>



	</div>
</aside>
<div class="dislpayArrow hidden-xs"><a class="pngfix" href="javascript:void(0);" onClick="displaynavbar(this)"></a></div>
<section class="Hui-article-box">
	<div id="Hui-tabNav" class="Hui-tabNav hidden-xs">
		<div class="Hui-tabNav-wp">
			<ul id="min_title_list" class="acrossTab cl">
				<li class="active"><span title="统计概况" data-href="<?php echo U('Tongji/Tongjiweb');?>">后台统计描述</span><em></em></li>
			</ul>
		</div>
		<div class="Hui-tabNav-more btn-group"><a id="js-tabNav-prev" class="btn radius btn-default size-S" href="javascript:;"><i class="Hui-iconfont">&#xe6d4;</i></a><a id="js-tabNav-next" class="btn radius btn-default size-S" href="javascript:;"><i class="Hui-iconfont">&#xe6d7;</i></a></div>
	</div>
	<div id="iframe_box" class="Hui-article">
		<div class="show_iframe">
			<div style="display:none" class="loading"></div>
			<iframe scrolling="yes" frameborder="0" src="<?php echo U('Tongji/gaikuang');?>"></iframe>
		</div>
	</div> 
</section>
<script type="text/javascript" src="../Template/admin/resources/ui/lib/jquery/1.9.1/jquery.min.js"></script> 
<script type="text/javascript" src="../Template/admin/resources/ui/lib/layer/2.1/layer.js"></script> 
<script type="text/javascript" src="../Template/admin/resources/ui/static/h-ui/js/H-ui.js"></script> 
<script type="text/javascript" src="../Template/admin/resources/ui/static/h-ui.admin/js/H-ui.admin.js"></script> 
<script type="text/javascript">
function article_add(title,url){
	layer_show(title,url);
}
loadAudioSource();
function loadAudioSource(num) {
	var audioHtml = '';
	audioHtml += '<audio controls id="audiotikuan" style="display:none;"><source src="../Template/admin/resources/audio/tikuan.mp3" type="audio/mpeg"></audio>';
	audioHtml += '<audio controls id="audiochongzhi" style="display:none;"><source src="../Template/admin/resources/audio/chongzhi.mp3" type="audio/mpeg"></audio>';
	audioHtml += '<audio controls id="audiobankbind" style="display:none;"><source src="../Template/admin/resources/audio/bankbind.mp3" type="audio/mpeg"></audio>';
	$("body").append(audioHtml);

}
 
function audioPlay(name) {
	var audio = document.getElementById("audio" + name);
	if(!audio) {
		setTimeout(function(){
			audioPlay(name);
		}, 50);
		return false;
	}
	audio.play('tikuan');
}
function checkspeck(){
	$.getJSON("<?php echo U('Index/checkspeck');?>", function(data){
	   if(data.sign){
		   if(data.tkcount>0){
			   audioPlay('tikuan');
		   }else if(data.czcount>0){
			   audioPlay('chongzhi');
		   }else if(data.bankbindcount>0){
			   audioPlay('bankbind');
		   }
	   }
	});
}
window.setInterval("checkspeck();",10000);
</script> 
</body>
</html>