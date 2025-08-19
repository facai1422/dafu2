<php>$webheadertitle = $nowcpinfo['title'];</php>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>{:GetVar('webtitle')} - 线上官网</title>
<meta name="viewport" content="initial-scale=1, maximum-scale=1">
<link rel="shortcut icon" href="/favicon.ico">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="__ROOT__/Template/Mobile/css/sm.css">
<link rel="stylesheet" href="__ROOT__/Template/Mobile/css/sm-extend.min.css">

<link rel="stylesheet" type="text/css" href="__ROOT__/Template/Mobile/css/jquery.range.css" />


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
<script>
var WebConfigs = {
'ROOT' : "__ROOT__"
} 
<?php echo "var k3lotteryrates = ".json_encode($rates,JSON_UNESCAPED_UNICODE);?>
</script>
<script type="text/javascript" src="__ROOT__/resources/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="__ROOT__/Template/Mobile/js/layer/layer.js"></script>
<script type="text/javascript">
var jq=$.noConflict();
</script>
<script type='text/javascript' src='__ROOT__/Template/Mobile/js/zepto.js' charset='utf-8'></script>

<script type="text/javascript" src="__ROOT__/Template/Mobile/js/jquery.range.js"></script>
<script type='text/javascript' src='__ROOT__/Template/Mobile/js/config.js' charset='utf-8'></script>
<script type='text/javascript' src='__ROOT__/Template/Mobile/js/fx.js' charset='utf-8'></script>
<script type='text/javascript' src='__ROOT__/Template/Mobile/js/sm.min.js' charset='utf-8'></script>
<script type='text/javascript' src='__ROOT__/Template/Mobile/js/slideupdown.js' charset='utf-8'></script>
<script type='text/javascript' src='__ROOT__/Template/Mobile/js/sm-extend.min.js' charset='utf-8'></script>
<link rel="stylesheet" href="__ROOT__/Template/Mobile/css/sm-extend.min.css">
<link rel="stylesheet" href="__ROOT__/Template/Mobile/css/reset.css">
<link rel="stylesheet" href="__ROOT__/Template/Mobile/css/theme-red.css">  

<link rel="stylesheet" href="__CSS__/icon.css">
<script>
  

var lotteryinfo = <?php echo json_encode($nowcpinfo,JSON_UNESCAPED_UNICODE);?>;
</script>
<script type='text/javascript' src='__ROOT__/Template/Mobile/js/way.min.js' charset='utf-8'></script>
<script type="text/javascript" src="__ROOT__/Template/Mobile/js/member.page.js"></script>
<script type='text/javascript' src='__ROOT__/Template/Mobile/js/common.js' charset='utf-8'></script>

<script type='text/javascript' src='__ROOT__/Template/Mobile/js/k3.js' charset='utf-8'></script>
<style>
.bottom_navbar{position: absolute;bottom: 0;z-index: 9999;width: 100%;}
.bottom_navbar ul{list-style: none;overflow: hidden;padding: 0;margin: 0;background: #22292c;color: #fff;padding-top: 5px;}
.bottom_navbar ul li{ float: left;width: 25%;text-align: center;}
.am-navbar-default a {color: #fff;}
.am-navbar-nav a { display: inline-block;width: 100%;height: 49px;line-height: 20px;}
.bottom_navbar .bottom_navbar_list i{font-size: 25px;line-height: 30px;}
.am-navbar-nav a .am-navbar-label {padding-top: 2px;line-height: 1;font-size: 12px;display: block;word-wrap: normal;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;font-size: 14px;}
.bottom_navbar .active {color: #e54042;}
.choice_lottery_playdetail {
position: absolute;
z-index: 100;
top: -50px;
left: 50%;
}
</style>
</head>
<body>
<div class="page-group">

  <!-- 你的html代码 -->
  <div class="pa yyplay_select_container" id="PageSwitch">
<volist name="k3list" id="k3vo">
<a  data-k3url="{:U('Game/k3',['code'=>$k3vo['name']])}">{$k3vo.title}</a>
</volist>
</div>
  <div class="page">
<include file="Game/header" />
  <div class="content">
<div class="row no-gutter text-center Betting_Issue_CountDown"style="padding-top: 5px;
color: rgb(51, 51, 51);
background-image: url(/khddimg/card_sport_ob.3bc0.webp);
/* position: fixed; */
/* top: 500px; */
/* left: 23px; */
width: 99%;
height: 20%;
/* min-width: 1000px; */
z-index: 10;
zoom: 1;
background-color: #fff;
background-repeat: no-repeat;
background-size: cover;
-webkit-background-size: cover;
-o-background-size: cover;
background-position: center0;">

   <dl class="col-50 cz_openNumb">
  <dt style="font-size:14px;">
  <i class="f_lottery_info_lastnumber red"  id="f_lottery_info_lastnumber" way-data="showExpect.lastFullExpect">--</i><span id="issueText">期</span></dt>
   <dd style="font-size:20px; padding:0; margin:0;">
							   <!--i class="openNum_list red" id="openNum_list">
								<t way-data="showExpect.openCode1">-</t>
								<t way-data="showExpect.openCode2">-</t>
								<t way-data="showExpect.openCode3">-</t>
							   </i-->
							   <ul id="openNum_list" style="list-style:none;">
								<li class="open_numb_gif"></li>
								<li class="open_numb_gif"></li>
								<li class="open_numb_gif"></li>
								<span class="icon icon-caret" style="color:rgb(240, 201, 48)"></span>
				   </ul>
							   </dd>
</dl>
   <dl class="col-50" style="color: rgb(51, 51, 51);">
<dt style="font-size:14px;">距<i class="f_lottery_info_number red" id="f_lottery_info_number" way-data="showExpect.currFullExpect">--</i>期截止</dt>
 <dd style="font-size:20px; padding:0; margin:0;">
     <i class="j_lottery_time red" id="j_lottery_time">
							<t class="hh bj">
							    <span way-data="gametimes.h" style="background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAYAAABIdFAMAAAAGXRFW…99ZOdcZGvt4mJjzMVKqcha68iIePB86GAiOv8CDADlIUQBs7MD3wAAAABJRU5ErkJggg%3D%3D) repeat-x;
/* display: inline-block; */
padding: 0px 5px;
color: #ff0000;
text-decoration: none;
font-weight: bold;
cursor: pointer;
margin-right: 0px;
-moz-border-radius: 5px;
-webkit-border-radius: 10px;
-moz-box-shadow: 0 1px 3px rgba(0,0,0,.5);
-webkit-box-shadow: 0 1px 3px rgba(0,0,0,.5);
text-shadow: 0 -1px 1px rgba(0,0,0,.25);
vertical-align: midd;
">00</span></t>
							<em style="color:#ff0003" >:</em>
							<t class="mm bj"><span way-data="gametimes.m" style="color:#ff0003;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAYAAABIdFAMAAAAGXRFW…99ZOdcZGvt4mJjzMVKqcha68iIePB86GAiOv8CDADlIUQBs7MD3wAAAABJRU5ErkJggg%3D%3D) repeat-x;
/* display: inline-block; */
padding: 0px 5px;
color: #ff0000;
text-decoration: none;
font-weight: bold;
cursor: pointer;
margin-right: 0px;
-moz-border-radius: 5px;
-webkit-border-radius: 10px;
-moz-box-shadow: 0 1px 3px rgba(0,0,0,.5);
-webkit-box-shadow: 0 1px 3px rgba(0,0,0,.5);
text-shadow: 0 -1px 1px rgba(0,0,0,.25);
vertical-align: midd;" >00</span></t>
							<em style="color:#ff0003">:</em>
							<t class="ss bj"><span way-data="gametimes.s" style="color:#ff0003; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAYAAABIdFAMAAAAGXRFW…99ZOdcZGvt4mJjzMVKqcha68iIePB86GAiOv8CDADlIUQBs7MD3wAAAABJRU5ErkJggg%3D%3D) repeat-x;
/* display: inline-block; */
padding: 0px 5px;
color: #ff0000;
text-decoration: none;
font-weight: bold;
cursor: pointer;
margin-right: 0px;
-moz-border-radius: 5px;
-webkit-border-radius: 10px;
-moz-box-shadow: 0 1px 3px rgba(0,0,0,.5);
-webkit-box-shadow: 0 1px 3px rgba(0,0,0,.5);
text-shadow: 0 -1px 1px rgba(0,0,0,.25);
vertical-align: midd;" >00</span></t>
						 </i></dd> 
</dl> 
<div class="sliderConter">
<table  style="height: 100%; border: 0px;">
<tr>
<td>
<div class="peilu">
<var style="color: rgb(202, 202, 202);">赔率</var><span id="amount">0.00</span>
</div>
</td> 
<td style="padding-top: 8px;">
<a  id="minus"></a>
</td> 
<td style="width: 100%;">
<input type="hidden" class="single-slider" value="0" /> 
</td> 
<td style="padding-top: 8px; ">
<a  id="plus"></a>
</td> 
<td >
<div class="fandian">
<p style="display: inline-block; color: rgb(202, 202, 202);">返点</p> 
<p style="display: inline-block;" class="fans">0.0</p>
</div>  
</tr>
</table>
</div>
		  	</div>
			
				


			<?php 
		
		if($cpRes['zhibao_url']) {?>						
						<div style="width:100%; height: 260px;margin-top:15px;" id="accordion-zhibao">
						<iframe src="<?php echo $cpRes['zhibao_url']?>" width="100%" scrolling="no" height="300" frameborder="0"></iframe>
						</div>
		<?php }?>
		
		<section class="ui-container">   

  <style>
  .kjofEK {
display: flex;
flex: 1 1 100%;
overflow: hidden;
padding-bottom: 0px;
flex-direction: row;
}
.jiizBD {
display: flex;
flex-direction: column;
flex: 0 0 80px;
overflow: hidden auto;
background-color: rgb(255, 255, 255);
/*border-right: 1px solid rgb(230, 228, 228);*/
transform: translate3d(0px, 0px, 0px);
height: 100%;
}
.gKrtaH {
display: flex;
white-space: nowrap;
font-size: 12px;
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAYAAABIdFAMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNo8zjsOxCAMBFB/KEAUFFR0Cbng3nQPw68ArZdAlOZppPFIBhH5EAB8b+Tlt9MYQ6i1BuqFaq1CKSVcxZ2Acs6406KUgpt5/LCKuVgz5BDCSb13ZO99ZOdcZGvt4mJjzMVKqcha68iIePB86GAiOv8CDADlIUQBs7MD3wAAAABJRU5ErkJggg%3D%3D) repeat-x;
display: inline-block;
padding: 16px 4px;
color: #fff;
text-decoration: none;
font-weight: bold;
cursor: pointer;
margin-right: 5px;
-moz-border-radius: 5px;
-webkit-border-radius: 10px;
-moz-box-shadow: 0 1px 3px rgba(0,0,0,.5);
/* -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.5); */
text-shadow: 0 -1px 1px rgba(0,0,0,.25);
vertical-align: midd;
position: relative;
display: block;
height: 2rem;
background-position: 50%;
background-size: 100% 100%;
background-repeat: no-repeat;
background-image: url(https://vipwap1.yanshidemo.com/static/img/nav_active_2.5e51116f.png);
margin: 0.26667rem -2px 0;
}
.jCjebn {
font-weight: bold;
color: #fff;
}
.gQpmTx {
display: flex;
flex: 0 0 auto;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
padding: 14px 10px;
white-space: nowrap;
border-bottom: 1px solid rgb(230, 228, 228);
font-size: 14px;
}
.cbDZwX {
font-weight: bold;
color: rgb(101, 149, 222);

}

.WITPM {
display: flex;
flex-direction: column;
overflow: hidden scroll;
width: calc(100vw - 80px);
transform: translate3d(0px, 0px, 0px);
}
.biBQdb {
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
width: 100%;
font-size: 14px;
height: 19px;
border-bottom: 1px solid rgb(230, 228, 228);
color: rgb(158, 158, 158);
background-color: rgb(247, 247, 247);
}
.gKmKIX {
margin-top: 2px;
position: absolute;
right: 23px;
transition: transform 0.1s ease-out 0s;
transform: rotate(180deg);
}
.drKwgG {
height: 192px;
transition: height 0.1s linear 0s;
}
.BqCQX {
display: flex;
flex-flow: row wrap;
border: 0px;
}
.bAIZST {
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
position: relative;
padding: 4px;
height: 48px;
width: 50%;
opacity: 1;
pointer-events: auto;
border-style: solid;
border-width: 0px 1px 1px 0px;
border-color: rgb(230, 230, 230);
}
.iqFJCI {
display: flex;
-webkit-box-align: center;
align-items: center;
flex-direction: row;
-webkit-box-pack: center;
justify-content: center;
width: 100%;
padding-left: 0px;
}
.fetjsV {
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: start;
justify-content: flex-start;
width: 100%;
}

.dRkEBC {
display: flex;
-webkit-box-pack: end;
justify-content: flex-end;
color: rgb(68, 68, 68);
opacity: 1;
flex-basis: 50%;
margin-right: 8px;
}
.fHZaVH {
width: 22px;
height: 22px;
}
.juGKdT {
color: rgb(213, 16, 0);
flex-basis: 50%;
text-align: left;
}

  </style>
  
<div class="tujb3w-1 kjofEK">
<div class="sc-1stt73j-0 jiizBD">
<div class="sc-16qpshg-2 biBQdb"></div>  <!--横条_-->
<div id="j_play_select" style="padding-left: 5px; margin-top: 28px;">

<ul class="play_select_tit" style=" list-style: none; margin: 0px;padding: 0px;"> 


<li lottery_code="k3hzzx" parent_code="{$nowcpinfo.name}" class="sc-1stt73j-1 gKrtaH">
<a href="javascript:void(0)" class="sc-1stt73j-2 jCjebn">和值</a>
</li>

<li lottery_code="k3sthtx" parent_code="{$nowcpinfo.name}" class="sc-1stt73j-1 gKrtaH">
<a href="javascript:void(0)" class="sc-1stt73j-2 jCjebn">三同号通选</a> 
</li>

<li lottery_code="k3sthdx" parent_code="{$nowcpinfo.name}" class="sc-1stt73j-1 gKrtaH">
<a href="javascript:void(0)" class="sc-1stt73j-2 jCjebn">三同号单选</a>
</li>

<li lottery_code="k3sbthbz" parent_code="{$nowcpinfo.name}" class="sc-1stt73j-1 gKrtaH">
<a href="javascript:void(0)" class="sc-1stt73j-2 jCjebn">三不同号</a>
</li>

<li lottery_code="k3slhtx" parent_code="{$nowcpinfo.name}" class="sc-1stt73j-1 gKrtaH">
<a href="javascript:void(0)" class="sc-1stt73j-2 jCjebn">三连号通选</a>
</li>

<li lottery_code="k3ethfx" parent_code="{$nowcpinfo.name}" class="sc-1stt73j-1 gKrtaH">
<a href="javascript:void(0)" class="sc-1stt73j-2 jCjebn">二同号复选</a>
</li>

<li lottery_code="k3ethdx" parent_code="{$nowcpinfo.name}" class="sc-1stt73j-1 gKrtaH">
<a href="javascript:void(0)" class="sc-1stt73j-2 jCjebn">二同号单选</a>
</li>

<li lottery_code="k3ebthbz" parent_code="{$nowcpinfo.name}" class="sc-1stt73j-1 gKrtaH">
<a href="javascript:void(0)" class="sc-1stt73j-2 jCjebn">二不同号</a>
</li>

<br>
</ul> 
</div>
</div>
<div class="qyewp8-0 WITPM">
<div class="otqn25-0 coBIYZ">
<div class="sc-16qpshg-0 kBllpY">
  
 </div>
  </div>
<div style="background-color: #fff; margin-top: -1px; ">
   <table id="fn_getoPenGame" border="0px" cellpadding="0" cellspacing="0" style="display:none;width:100%;text-align:center">
<colgroup>
<col width="30%">
<col width="20%">
<col width="20%">
<col width="20%">
</colgroup>
<thead style="background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAYAAABIdFAMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNo8zjsOxCAMBFB/KEAUFFR0Cbng3nQPw68ArZdAlOZppPFIBhH5EAB8b+Tlt9MYQ6i1BuqFaq1CKSVcxZ2Acs6406KUgpt5/LCKuVgz5BDCSb13ZO99ZOdcZGvt4mJjzMVKqcha68iIePB86GAiOv8CDADlIUQBs7MD3wAAAABJRU5ErkJggg%3D%3D) repeat-x;/* display: inline-block; */
padding: 3px 8px;
color: #3575ff;
text-decoration: none;
font-weight: bold;
cursor: pointer;
margin-right: 10px;
-moz-border-radius: 5px;
-webkit-border-radius: 10px;
-moz-box-shadow: 0 1px 3px rgba(0,0,0,.5);
-webkit-box-shadow: 0 1px 3px rgba(0,0,0,.5);
text-shadow: 0 -1px 1px rgba(0,0,0,.25);
vertical-align: midd;">
<tr style="border-bottom: 0px solid #212121;">
<th>开奖期数</th>
<th>开奖号码</th>
<th>和值</th>
<th>形态</th>
</tr>
</thead>
<tbody class="tbody" style="background: #ffffff; "></tbody>
</table>
 </div>

   <div class="sc-16qpshg-2 biBQdb">玩法切换</div>
   
			<div class="Choice_Ball_Container ui-whitespace" id="Game_CheckBall">
				<if condition="$nowcpinfo['iswh'] eq 0">
				<div class="gn_main_cont k3_ball_conatiner" id="gn_main_cont">

				</div>
				<else />
					<p style="font-size:30px; color:#f60; text-align:center; padding:15px 0;">彩种维护中...</p>
				</if>
</div>
		</section>  
  </div>
  </div>
  </div>
  
  
<div class="lottey_footer" style="bottom: 58px;">
<div class="lottery_footer_sum" style="display:none;">
<span class="lottery_sum_text">当前号码</span>
<div id="lottery_sum_old_b">

</div>
</div>
<div class="lottery_inputBox" style="display:none;">
每注金额
<input type="number" class="lottery_input">
<span class="lottery_input_text">请输入要投注的金额</span>
</div>
<div class="kuaijie_money">
<ul class="kuaijie_money_ul">
<li class="kuaijie_item">5</li>
<li class="kuaijie_item">10</li>
<li class="kuaijie_item">50</li>
<li class="kuaijie_item">100</li>
<li class="kuaijie_item">1000</li>
</ul>
</div>  
<div class="betting_box" style="/* background: rgb(239 239 239); */
/* border-top: 1px solid #dfdfdf; */
margin-bottom: -60px;
background-image: url(/khddbg1.png);
/* position: fixed; */
top: 0;
left: 0;
/* width: 100%; */
/* height: 100%; */
/* min-width: 1000px; */
z-index: -10;
zoom: 1;
background-color: #fff;
background-repeat: no-repeat;
background-size: cover;
-webkit-background-size: cover;
-o-background-size: cover;
background-position: center0;">
<div class="betting_left">
<span class="betting_empty">清空</span>
<em class="betting_sum_box" style="display:none;">
共<span class="betting_sum">0</span>注,
<span class="betting_sum_moery">0</span>元
</em>
</div>
<div class="betting_right">
<button class="betting_right_btn">
马上投注
</button>
</div>
</div>
</div>

<include file="Game/wf" />
<div class="popup" id="userbetshistory">
		<div class="list-block media-list" style="padding-top: 0; margin-top: 0">
			<div class="card-header "><botton id="formaubmitdo" class="button button-fill button-danger close-popup" style="width:100%;">关闭</botton></div>
			<ul id="userbetshistorylist"></ul>
			<div class="member-pag paging"></div>
		</div>
</div>

<script>
	$(document).ready(function(){
		$("#accordion-zhibao").hide();
  $("#videoHead").click(function(){
	  var dataCalse = $(this).attr('data-class');
	  if( dataCalse == "show"){
		  $("#accordion-zhibao").show();
			$(this).attr('data-class' , 'hide');
			$(this).html('隐藏直播');
	  } else {
		  $("#accordion-zhibao").hide();
		  $(this).attr('data-class' , 'show');
		  $(this).html('看直播');
	  }
  })
});
	</script>
	
</body>
</html>