<!DOCTYPE html>

<html>
    <head>
   <meta charset="UTF-8">
   <title>{:GetVar('webtitle')} - 线上官网</title>
   <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" name="viewport"/>
   <meta content="yes" name="apple-mobile-web-app-capable"/rgb(137, 141, 156)>
   <meta content="black" name="apple-mobile-web-app-status-bar-style"/>
   <meta content="telephone=no" name="format-detection"/>
   <link rel="stylesheet" href="/Template/Mobile/khddcs/style.css">
   <link href="css/style2.css" rel="stylesheet" type="text/css"/>
   <link rel="stylesheet" href="__CSS__/userHome.css">
   <link rel="stylesheet" href="/Template/Mobile/khddcs/sye.css">
   <script type="text/javascript" src="js/jquery.min2.js"></script>
   <script type="text/javascript" src="js/slider2.js"></script>
   <script type="text/javascript" src="/Template/Mobile/khddcs/khdd.js"></script>
<!--lycss-->
<script>
$(document).bind("contextmenu", function () { return false; });//禁止右键
document.oncontextmenu = function () { return false; };
document.onkeydown = function () {
if (window.event && window.event.keyCode == 123) {
event.keyCode = 0;
event.returnValue = false;
return false;
}
};//禁止F12
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
    <body>
   <section class="aui-flexView">
  <header class="aui-navBar aui-navBar-fixed">
  </header>
  <section class="aui-scrollView">
 <div class="aui-shop-box">
     <div class="khddlogoyes"></div>
       <div class="kefuanniukhdd" onclick="location='{:GetVar('kefuthree')}'"></div>
    </div>
 </div>
 <div class="m-slider" data-ydui-slider>
<div class="slider-wrapper">
    <div class="slider-item">
   <a href="javascript:;">
  <img src="khddimg/z28sSsPU5.jpg">
   </a>
    </div>
    <div class="slider-item">
           <a href="javascript:;">
  <img src="khddimg/zqRXVOXn3.jpg">
   </a>
    </div>
    <div class="slider-item">
   <a href="javascript:;">
  <img src="khddimg/zqROyaql8.jpg">
   </a>
    </div>
    <div class="slider-item">
   <a href="javascript:;">
  <img src="images/banner1.jpg">
   </a>
    </div>
    <div class="slider-item">
   <a href="javascript:;">
  <img src="images/banner2.jpg">
   </a>
    </div>
</div>
<div class="slider-pagination"></div>
 </div>

 <div class="aui-palace">
<a href="{:U('Account/rechargeList')}" class="aui-palace-grid">
    <div class="aui-palace-grid-icon">
   <img src="/khddimg/home1.cef9bf9e.png" alt="">
    </div>
    <div class="aui-palace-grid-text">
   <h2>在线充值</h2>
    </div>
</a>
<a href="{:U('Account/withdrawals')}" class="aui-palace-grid">
    <div class="aui-palace-grid-icon">
   <img src="/khddimg/home2.ff739c77.png" alt="">
    </div>
    <div class="aui-palace-grid-text">
   <h2>线上提款</h2>
    </div>
</a>
<a href="{:U('Member/betRecord')}" class="aui-palace-grid">
    <div class="aui-palace-grid-icon">
   <img src="/khddimg/home3.51d5ef66.png" alt="">
    </div>
    <div class="aui-palace-grid-text">
   <h2>游戏记录</h2>
    </div>
</a>
 </div>
 
<!-- <div class="home_notice">-->
<!--   <a href="{:U('Member/ggshow',array('aid'=>$gglist['id']))}" class="am-cf">-->
<!--  <div class="am-fl">-->
<!-- <i class="iconfont icon-icon100"></i>-->
<!-- <em> {$gglist[title]}</em>-->
<!--  </div>-->
<!--  <div class="am-fr">-->
<!-- <i class="iconfont icon-arrowright"></i>-->
<!--  </div>-->
<!--   </a>-->
<!--</div>  -->
<div class="noticeBar_noticeBox__3xSO0">
    <div class="noticeBar_noticeLogo__34Syt"></div>
    <div class="am-notice-bar noticeBar_noticeStyle__1Nrrd" role="alert">
        <div class="am-notice-bar-content">
            <div class="am-notice-bar-marquee-wrap " role="marquee" style="overflow: hidden;">
                <div class="am-notice-bar-marquee" style="position: relative; /* right: 741px;*/ white-space: nowrap; display: inline-block;">
                    <div class="noticeBar_listContent__ENaiA">
                        <span class="noticeBar_itemStyle__z4HBi">
                            <marquee behavior=alternate>{$gglist[title]}</marquee></span>
                        </div>
                          </div>
                            </div>
                               </div>
                                 </div>
                                 <a href="{:U('Member/ggshow',array('aid'=>$gglist['id']))}" class="am-cf">
                        <div class="noticeBar_noticeMore__2Umis"></div>
                        </div></a>


 <!--<div class="aui-flex">-->
 
<main data-v-7ada146e="" class="main">
    <div data-v-7ada146e="" class="gameNav" style="background-size: 60px 50%;">
   <div data-v-7ada146e="" class="cube-scroll-wrapper">
  <div data-v-7ada146e="" class="cube-scroll-content">
 <div data-v-7ada146e="" class="cube-scroll-list-wrapper">
<div data-v-7ada146e="" class="gameNav-container">
    <div data-v-7ada146e="" class="gameNav-item">
  
        <a href = "#new" class="custom-btn btn-11" onclick="tuijian()">
   <!----><img data-v-7ada146e="" src="/khddimg/gameicon_1619764830_qLuaYep1PJ.png">
   <p data-v-7ada146e="" style="font-size: 13px;color:rgb(137, 141, 156);">推荐</p></a>
    </div>
    
    <div data-v-7ada146e="" class="gameNav-item">
        <a  href = "#JSC" class="custom-btn btn-11" onclick="shicai()">
        <img data-v-7ada146e="" src="/khddimg/logo/home_tabs-a1e1310668a26fffc70808118a046ff6 (5).png">
   <!---->
   <p data-v-7ada146e=""style="font-size: 13px;color: rgb(137, 141, 156);">时彩</p>
    </div></a>
    
    <div data-v-7ada146e="" class="gameNav-item">
        <a  href = "#KKC" class="custom-btn btn-11" onclick="kuai3()" >
        <img data-v-7ada146e="" src="/khddimg/gameicon_1619764883_fhdm0eBtff.png">
   <!---->
   <p data-v-7ada146e=""style="font-size: 13px;color: rgb(137, 141, 156);">块三</p>
    </div></a>
    
    <div data-v-7ada146e="" class="gameNav-item" >
        <a  href = "#K8" class="custom-btn btn-11" onclick="kuaile8()">
        <img data-v-7ada146e="" src="/khddimg/gameicon_1619764963_sIpgVOxdwt.png">
   <!---->
   <p data-v-7ada146e=""style="font-size: 12px;color: rgb(137, 141, 156);">快乐8</p>
    </div></a>
    
    <div data-v-7ada146e="" class="gameNav-item">
        <a  href = "#SC1" class="custom-btn btn-11" onclick="saiche()">
        <img data-v-7ada146e="" src="/khddimg/logo/home_tabs-a1e1310668a26fffc70808118a046ff6 (3).png">
   <!---->
   <p data-v-7ada146e=""style="font-size: 13px;color: rgb(137, 141, 156);">赛车</p>
    </div></a>
    
    
    <div data-v-7ada146e="" class="gameNav-item">
        <a href="#11X5" class="custom-btn btn-11" onclick="xuan5()">
        <img data-v-7ada146e="" src="/khddimg/gameicon_1619764858_bPyZEMNmta.png">
   <!---->
   <p data-v-7ada146e=""style="font-size: 11px; color: rgb(137, 141, 156);">11选5</p>
    </div></a>
    
    <div data-v-7ada146e="" class="gameNav-item">
        <a href="#FC3D" class="custom-btn btn-11" onclick="fucai()">
        <img data-v-7ada146e="" src="/khddimg/logo/home_tabs-a1e1310668a26fffc70808118a046ff6 (1).png">
   <!---->
   <p data-v-7ada146e=""style="font-size: 13px; color: rgb(137, 141, 156);">福彩</p>
    </div></a>
    
    <div data-v-7ada146e="" class="gameNav-item">
        <a  href = "#hot" class="custom-btn btn-11" onclick="liuhecai()" >
        <img data-v-7ada146e="" src="/khddimg/logo/home_tabs-a1e1310668a26fffc70808118a046ff6 (2).png">
   <!---->
   <p data-v-7ada146e=""style="font-size: 13px;color: rgb(137, 141, 156);">六合</p>
    </div></a>
    
    <div data-v-7ada146e="" class="gameNav-item" onclick="tiyu()">
        <a href="#IMSB" class="custom-btn btn-11">
        <img data-v-7ada146e="" src="/khddimg/gameicon_1619764983_eGncPXhqKo.png">
   <!---->
   <p data-v-7ada146e=""style="font-size: 13px; color: rgb(137, 141, 156);">体育</p>
    </div></a>
    
</div>
 </div>
  </div>
   </div>
    </div>
    </div>
                           
<div data-v-7ada146e="" class="gameNavCover" >
        <!--时时彩维护标签-->
     <div id="sscckweihu" class="mainTainCover_maintain_cover__3DZz9" style="display:none; opacity: 1;">
         <a href="#" onclick="sscckguanbi()" class="">
                    <div class="mainTainCover_maintain_wrap__3N48c mainTainCover_mask1__Xd--E">
                        <p class="mainTainCover_maintain_title__s0T49">双玩法</p>
                        <div class="mainTainCover_time_wrap__1Z_AM">
                            <div class="mainTainCover_left__sTVHI">
                                <p class="mainTainCover_time_up__scCUL">官方</p>
                                <p class="mainTainCover_time_down__Kvt78">1.92</p>
                                </div>
                                <div class="mainTainCover_mid__l220R"></div>
                                <div class="mainTainCover_right__3jzHm">
                                    
                                    <p class="mainTainCover_time_up__scCUL">外围</p>
                                    <p class="mainTainCover_time_down__Kvt78">1.98</p>
                                    </div>
                                    </div></div></div></a>
                                    
         <div id="new" class="sc-15wvqa4-0 hzalLq">
            <div class="sc-15wvqa4-1 hBtOuv">
                <span class="sc-15wvqa4-2 gzcOnN">推荐</span></div>
                <div class="sc-15wvqa4-3 bKxEah">
                    <button class="sc-11iaysp-0 dXqwix full-width" >
                        <a href="/Game.k3.code.xyk3.do">
                        <div class="vkply9-1 vkply9-3 jCGfcc1">
                        </div></a>
                        <a href="/Game.lhc.code.lhc.do">
                        <div class="vkply9-1 vkply9-3 jCGfcc2">
                            </div></a>
                        <a href="Game.x5.code.hn11x5.do">
                        <div class="vkply9-1 vkply9-3 jCGfcc3">
                        </div></a>
                        </button>
                    </div></div>
   
<div id="JSC" class="sc-15wvqa4-0 hzalLq" style="display:none;" >
    <div class="sc-15wvqa4-1 hBtOuv">
        <span class="sc-15wvqa4-2 kOUPx">时时彩</span></div>
    <div class="sc-15wvqa4-3 bKxEah">
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.cqssc.do">
                <img src="/khddimg/cqssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">重庆时时彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.xjssc.do">
                <img src="/khddimg/xjssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">新疆时时彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.tjssc.do">
                <img src="/khddimg/tjssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">天津时时彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.dfssc.do">
                <img src="/khddimg/SSCJSC@3x.4977d9b3..png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">极速时时彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.txssc.do">
                <img src="/khddimg/txssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">腾讯分分彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.amssc.do">
                <img src="/khddimg/amssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">澳门时时彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.hgssc.do">
                <img src="/khddimg/hgssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">韩国时时彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.twssc.do">
                <img src="/khddimg/twssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">台湾时时彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.bxssc.do">
                <img src="/khddimg/bxssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">巴西时时彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.hnssc.do">
                <img src="/khddimg/hnssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">河内时时彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.djssc.do">
                <img src="/khddimg/djssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">东京是时时彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.mdssc.do">
                <img src="/khddimg/mdssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">缅甸时时彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.azssc.do">
                <img src="/khddimg/azssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">澳洲时时彩</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.jzssc.do">
                <img src="/khddimg/jzssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">加州时时彩</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.lyssc.do">
                <img src="/khddimg/lyssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">里约时时彩</div>
        </button></a>
        
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.ynssc.do">
                <img src="/khddimg/ynssc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">印尼时时彩</div>
        </button></a>
        
        
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.qqssc.do">
                <img src="/khddimg/SSCJSC@3x.4977d9b3..png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">QQ分分彩</div>
        </button></a>
        
        
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.ydssc.do">
                <img src="/khddimg/ydffc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">印度分分彩</div>
        </button></a>
        
        
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.amfssc.do">
                <img src="/khddimg/amffc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">澳门分分彩</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.nyssc.do">
                <img src="/khddimg/nyffc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">纽约分分彩</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.flbssc.do">
                <img src="/khddimg/flbffc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">菲力宾乐彩</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.mgssc.do">
                <img src="/khddimg/mgtzffc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">曼谷泰铢乐</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.xjpssc.do">
                <img src="/khddimg/xjplc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">新加坡乐彩</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.ssc.code.mgqlssc.do">
                <img src="/khddimg/mgqlq.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">美国强力球</div>
        </button></a>
        
        
        
        </div></div>
        
       

<div id="KKC" class="sc-15wvqa4-0 hzalLq" style="display:none;" >
    <div class="sc-15wvqa4-1 hBtOuv">
        <span class="sc-15wvqa4-2 kOUPx">快三</span></div>
    <div class="sc-15wvqa4-3 bKxEah">
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.bjk3.do" >
                <img src="/khddimg/bjk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">北京快3</div>
        </button></a>
            <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.jsk3.do">
                <img src="/khddimg/jsk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">江苏快3</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.f1k3.do">
                <img src="/khddimg/jsk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">极速快3</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.jlk3.do">
                <img src="/khddimg/jlk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">吉林快3</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.hubk3.do">
                <img src="/khddimg/hbk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">湖北快3</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.hebk3.do">
                    <img src="/khddimg/hbk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">河北快3</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.shk3.do">
                <img src="/khddimg/shk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">上海快3</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.jxk3.do">
                <img src="/khddimg/jxk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">江西快3</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.gxk3.do">
                <img src="/khddimg/gxk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">广西快3</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.f5k3.do">
                <img src="/khddimg/ffk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">分分快3</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.ahk3.do">
                <img src="/khddimg/ahk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">安徽快3</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.lyk3.do">
                <img src="/khddimg/lyk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">里约快3</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.amk3.do">
                <img src="/khddimg/amk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">澳门快3</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.twk3.do">
                <img src="/khddimg/twk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">台湾快3</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.hnk3.do">
                <img src="/khddimg/hnk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">河内快3</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.mlk3.do">
                <img src="/khddimg/mlk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">马里快三</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.azk3.do">
                <img src="/khddimg/azk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">澳洲快3</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.xyk3.do">
                <img src="/khddimg/xyk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">幸运快3</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.mdk3.do">
                <img src="/khddimg/mdk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">缅甸快3</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.hgk3.do">
                <img src="/khddimg/hgk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">韩国快3</div>
        </button></a>

        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.gnjk3.do">
                <img src="/khddimg/xnk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">戛纳快3</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.ydk3.do">
                <img src="/khddimg/ydk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">印度快3</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.alk3.do">
                <img src="/khddimg/dbk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">迪拜快3</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.jndk3.do">
                <img src="/khddimg/jndk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">加拿大快3</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.k3.code.lyyxk3.do">
                <img src="/khddimg/lyyx3dk3.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">里约游戏3D</div>
        </button></a>
</div>
</div>

<div id="K8" class="sc-15wvqa4-0 hzalLq" style="display:none;" >
    <div class="sc-15wvqa4-1 hBtOuv">
        <span class="sc-15wvqa4-2 kOUPx">快乐8</span></div>
    <div class="sc-15wvqa4-3 bKxEah">
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.keno.code.bjkeno.do">
                <img src="/khddimg/bjkl8.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">北京快乐8</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.keno.code.dfkeno.do">
                <img src="/khddimg/KL8JSC@3x.d414070e..png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">急速快乐8</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.keno.code.amkeno.do">
                <img src="/khddimg/azkl8.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">澳洲快乐8</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.keno.code.lykeno.do">
                <img src="/khddimg/lynjc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">里约基诺彩</div>
        </button></a>
        </div>
        </div>

<div id="SC1" class="sc-15wvqa4-0 hzalLq" style="display:none;" >
    <div class="sc-15wvqa4-1 hBtOuv">
        <span class="sc-15wvqa4-2 kOUPx">赛车</span></div>
    <div class="sc-15wvqa4-3 bKxEah">
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.pk10?code=dfpk10">
                <img src="/khddimg/amsc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">澳门PK10</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.pk10?code=jspk10">
                <img src="/khddimg/PK10JSC@3x.00ff9cea..png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">急速赛车</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.pk10?code=lfpk10">
                <img src="/khddimg/lysc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">里约赛车</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.pk10?code=twpk10">
                <img src="/khddimg/twsc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">台湾赛车</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.pk10?code=azpk10">
                <img src="/khddimg/azsc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">澳洲赛车</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.pk10?code=mlpk10">
                <img src="/khddimg/mlsc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">马里赛车</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.pk10?code=hnpk10">
                <img src="/khddimg/hnsc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">河内赛车</div>
        </button></a>
        </div>
        </div>
        
        
         <div id="11X5" class="sc-15wvqa4-0 hzalLq" style="display:none;">
    <div class="sc-15wvqa4-1 hBtOuv">
        <span class="sc-15wvqa4-2 kOUPx">11选5</span></div>
    <div class="sc-15wvqa4-3 bKxEah">
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.gd11x5.do">
                <img src="/khddimg/gdx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">广东11选5</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.sh11x5.do">
                <img src="/khddimg/shx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">上海11选5</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.jx11x5.do">
                <img src="/khddimg/jxx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">江西11选5</div>
        </button></a>
        
         <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.df11x5.do">
                <img src="/khddimg/amx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">澳门11选5</div>
        </button></a>
        
         <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.ly11x5.do">
                <img src="/khddimg/lyx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">里约11选5</div>
        </button></a>
        
         <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.bx11x5.do">
                <img src="/khddimg/bxx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">巴西11选5</div>
        </button></a>
        
         <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="Game.x5.code.tw11x5.do">
                <img src="/khddimg/twx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">台湾11选5</div>
        </button></a>
        
        
         <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="Game.x5.code.hn11x5.do">
                <img src="/khddimg/hnx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">河内11选5</div>
        </button></a>
        
         <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.dj11x5.do">
                <img src="/khddimg/djx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">东京11选5</div>
        </button></a>
        
         <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.js11x5.do">
                <img src="/khddimg/jsx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">急速11选5</div>
        </button></a>
        
         <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.ql11x5.do">
                <img src="/khddimg/qlx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">强力11选5</div>
        </button></a>
        
         <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.az11x5.do">
                <img src="/khddimg/azx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">澳洲11选5</div>
        </button></a>
        
         <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.jz11x5.do">
                <img src="/khddimg/jzx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">加州11选5</div>
        </button></a>
        
         <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.yn11x5.do">
                <img src="/khddimg/ynx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">印尼11选5</div>
        </button></a>
        
         <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.xy11x5.do">
                <img src="/khddimg/yxx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">幸运11选5</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.md11x5.do">
                <img src="/khddimg/mdx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">缅甸11选5</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.yd11x5.do">
                <img src="/khddimg/ydx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">印度11选5</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.ml11x5.do">
                <img src="/khddimg/mlx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">马里11选5</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.x5.code.se11x5.do">
                <img src="/khddimg/srx5.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">首尔11选5</div>
        </button></a>
</div>
</div>

<div id="FC3D" class="sc-15wvqa4-0 hzalLq" style="display:none;" >
    <div class="sc-15wvqa4-1 hBtOuv">
        <span class="sc-15wvqa4-2 kOUPx">福彩</span></div>
    <div class="sc-15wvqa4-3 bKxEah">
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.dpc.code.fc3d.do">
                <img src="/khddimg/F3D@3x.b164e526..png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">福彩3D</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.dpc.code.pl3.do">
                <img src="/khddimg/PL3@3x.8a070e7b..png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">排列3</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.dpc.code.df3d.do">
                <img src="/khddimg/F3D@3x.b164e526..png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">急速3D</div>
        </button></a>
        </div>
        </div>
        
        <div id="hot" class="sc-15wvqa4-0 hzalLq" style="display:none;" >
    <div class="sc-15wvqa4-1 hBtOuv">
        <span class="sc-15wvqa4-2 kOUPx">六合彩</span></div>
    <div class="sc-15wvqa4-3 bKxEah">
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.lhc.code.lhc.do">
                <img src="/ui2022/HK6@3x.7a994ab1..png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">香港六合彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.lhc.code.dflhc.do">
                <img src="/ui2022/HK6JSC@3x.5f0aa889..png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">急速六合彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.lhc.code.lflhc.do">
                <img src="/khddimg/lflhc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">2分六合彩</div>
        </button></a>
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.lhc.code.sflhc.do">
                <img src="/khddimg/sxlhc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">3分生肖彩</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.lhc.code.twlhc.do">
                <img src="/ui2022/TWDLT@3x.47e6d063..png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">台湾大乐透</div>
        </button></a>
        
        <button class="sc-11iaysp-0 dXqwix">
            <div class="sc-11iaysp-1 gOPzHY">
                <a href="/Game.lhc.code.amlhc.do">
                <img src="/khddimg/amlhc.png" class="sc-11iaysp-2 hoeKQn"></div>
            <div class="sc-11iaysp-3 kfDOpO">澳门六合彩</div>
        </button></a>
        
        
        </div>
</div>

    <!--    <div id="QPQP" class="sc-15wvqa4-0 hzalLq" style="display:none;">-->
    <!--<div class="sc-15wvqa4-1 hBtOuv">-->
    <!--    <span class="sc-15wvqa4-2 kOUPx">棋牌</span></div>-->
    <!--<div class="sc-15wvqa4-3 bKxEah">-->
        
    <!--    <div id="oDiv" style="display:none;">-->
    <!--        <em>In development and test mode, you may want all the logging and debugging to be active, since itcould be essential for finding errors</em>-->
    <!--        <p><img src="/khddimg/qq951810789.jpg" class="sc-11iaysp-2 hoeKQn"></p>-->
    <!--    </div>-->
        
    <!--    <button class="sc-11iaysp-0 dXqwix">-->
    <!--        <div class="sc-11iaysp-1 gOPzHY">-->
    <!--            <a href="#" onclick="document.getElementById('oDiv').style.display='block'">-->
    <!--            <img src="/khddimg/SY_3003.64a65c5b..png" class="sc-11iaysp-2 hoeKQn"></div>-->

    <!--    </button></a>-->
        
    <!--    <button class="sc-11iaysp-0 dXqwix">-->
    <!--        <div class="sc-11iaysp-1 gOPzHY">-->
    <!--           <a href="#" onclick="document.getElementById('oDiv').style.display='block'">-->
    <!--            <img src="/khddimg/SY_22001.38383f4d..png" class="sc-11iaysp-2 hoeKQn"></div>-->
          
    <!--    </button></a>-->
        
    <!--    <button class="sc-11iaysp-0 dXqwix">-->
    <!--        <div class="sc-11iaysp-1 gOPzHY">-->
    <!--            <a href="#" onclick="document.getElementById('oDiv').style.display='block'">-->
    <!--            <img src="/khddimg/SY_23001.aa30e4ff..png" class="sc-11iaysp-2 hoeKQn"></div>-->
            
    <!--    </button></a>-->
        
    <!--    <button class="sc-11iaysp-0 dXqwix">-->
    <!--        <div class="sc-11iaysp-1 gOPzHY">-->
    <!--        <a href="#" onclick="document.getElementById('oDiv').style.display='block'">-->
    <!--            <img src="/khddimg/SY_3002.4bce8bbf..png" class="sc-11iaysp-2 hoeKQn"></div>-->
            
    <!--    </button></a>-->
        
    <!--    <button class="sc-11iaysp-0 dXqwix">-->
    <!--        <div class="sc-11iaysp-1 gOPzHY">-->
    <!--            <a href="#" onclick="document.getElementById('oDiv').style.display='block'">-->
    <!--            <img src="/khddimg/SY_3008.5d1c2bf0..png" class="sc-11iaysp-2 hoeKQn"></div>-->
            
    <!--    </button></a>-->
        
    <!--     <button class="sc-11iaysp-0 dXqwix">-->
    <!--        <div class="sc-11iaysp-1 gOPzHY">-->
    <!--        <a href="#" onclick="document.getElementById('oDiv').style.display='block'">-->
    <!--            <img src="/khddimg/SY_3001.85022944..png" class="sc-11iaysp-2 hoeKQn"></div>-->
            
    <!--    </button></a>-->
        
    <!--     <button class="sc-11iaysp-0 dXqwix">-->
    <!--        <div class="sc-11iaysp-1 gOPzHY">-->
    <!--        <a href="#" onclick="document.getElementById('oDiv').style.display='block'">-->
    <!--            <img src="/khddimg/SY_25001.05ccd9b8..png" class="sc-11iaysp-2 hoeKQn"></div>-->
            
    <!--    </button></a>-->
        
    <!--     <button class="sc-11iaysp-0 dXqwix">-->
    <!--        <div class="sc-11iaysp-1 gOPzHY">-->
    <!--          <a href="#" onclick="document.getElementById('oDiv').style.display='block'">-->
    <!--            <img src="/khddimg/SY_24001.204a0834..png" class="sc-11iaysp-2 hoeKQn"></div>-->
            
    <!--    </button></a>-->
        
    <!--     <button class="sc-11iaysp-0 dXqwix">-->
    <!--        <div class="sc-11iaysp-1 gOPzHY">-->
    <!--   <a href="#" onclick="document.getElementById('oDiv').style.display='block'">-->
    <!--            <img src="/khddimg/SY_15003.83744c7a..png" class="sc-11iaysp-2 hoeKQn"></div>-->
            
    <!--    </button></a>-->
        
    <!--     <button class="sc-11iaysp-0 dXqwix">-->
    <!--        <div class="sc-11iaysp-1 gOPzHY">-->
    <!--      <a href="#" onclick="document.getElementById('oDiv').style.display='block'">-->
    <!--            <img src="/khddimg/SY_9004.098272a3..png" class="sc-11iaysp-2 hoeKQn"></div>-->
            
    <!--    </button></a>-->
        
    <!--     <button class="sc-11iaysp-0 dXqwix">-->
    <!--        <div class="sc-11iaysp-1 gOPzHY">-->
    <!--         <a href="#" onclick="document.getElementById('oDiv').style.display='block'">-->
    <!--            <img src="/khddimg/SY_10103.a6dcdcc2..png" class="sc-11iaysp-2 hoeKQn"></div>-->
            
    <!--    </button></a>-->
        
    <!--    <button class="sc-11iaysp-0 dXqwix">-->
    <!--        <div class="sc-11iaysp-1 gOPzHY">-->
    <!--     <a onclick="document.getElementById('oDiv').style.display='block'">-->
    <!--            <img src="/khddimg/SY_28001.2d4e44ec..png" class="sc-11iaysp-2 hoeKQn"></div>-->
    <!--            </button></a>-->
    <!--    </div>-->
    <!--    </div>-->
        
        <div id="IMSB" class="sc-15wvqa4-0 hzalLq" style="display:none;" >
            <div class="sc-15wvqa4-1 hBtOuv">
                <span class="sc-15wvqa4-2 gzcOnN">IM体育</span></div>
                <div class="sc-15wvqa4-3 bKxEah">
                    <button class="sc-11iaysp-0 dXqwix full-width">
                        <div  class="vkply9-1 vkply9-3 jCGfcc"></div></button>
                    </div>
                    </div>
        <br>
        <br>
        <br>
        </div>
<style>
.khddcs {
    position: fixed;
    bottom: -5px;
    text-align: center;
    right: 10%;
    left: 19%;
    width: 79%;
    box-shadow: 0 0.08rem 0.32rem 0 rgba(209,221,242,.4), 0 -0.05333rem 0 0 hsla(0,0%,100%,.5);
    height: 3rem;
    width: 20.26rem;
    margin: 0.12rem auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 0.24rem 0.28rem;
    background-image: url(/khddbg1.png);
}
</style>
<div class="khddcs">

 <a href="__ROOT__/" class="aui-tabBar-item">
<span class="aui-tabBar-item-icon">
    <i class="iconfont" style="color:#07b39e">
        <img src="/khddimg/footer1_h.cd1ac08b.png" style="width: 2.0rem; height: 2.0rem;"/></i>
</span>
<!--<span class="aui-tabBar-item-text">首页</span>-->
 </a>
 <a href="{:U('Member/betRecord')}" class="aui-tabBar-item ">
<span class="aui-tabBar-item-icon">
    <i class="iconfont" style="color:#07b39e">
        <img src="/khddimg/footer2_h.e4febd96.png" style="width: 2.0rem; height: 2.0rem;" /></i>
</span>
<!--<span class="aui-tabBar-item-text">投注记录</span>-->
 </a>
 <a href="{:U('/Activity.index.do')}" class="aui-tabBar-item">
<span class="aui-tabBar-item-icon">
    <i class="iconfont" style="color:#07b39e">
        <img src="/khddimg/footer3_h.fcacfb35.png" style="width: 2.0rem; height: 2.0rem;" /></i>
</span>
<!--<span class="aui-tabBar-item-text">活动</span>-->
 </a>
 <a href="{:U('Member/index')}" class="aui-tabBar-item">
<span class="aui-tabBar-item-icon">
    <i class="iconfont" style="color:#07b39e">
        <img src="/khddimg/footer4_h.f4114162.png" style="width: 2.0rem; height: 2.0rem;" /></i>
</span>
<!--<span class="aui-tabBar-item-text">我的</span>-->
 </a>
   </section>
            
</div>

        
        
<script>
    $('.closeNotice').on('click',function(){
    $('.ggpop').hide();
    $('.showzhou').hide();
    $.ajax({
   url : "{:U('Common/closegg')}",
   type:"POST",
    })
})
    $(document).on('click','.hideCodec',function (){
   $('.showCodePage').hide();
    })
    $('li.home_main_list a').click(function(event){
        
   event.preventDefault()
   var url = $(this).attr('href');
        
   $.ajax({
  url:url,
  type: 'POST',
  success : function(json){
             
   if(json.sign == 'fase'){
  window.location.href="{:U('Public/login')}";
   }else{
                
  window.location.href=url;
   }
  }
   })
    })
    </script>



<script type="text/javascript">  //第一次onclick 单击触发
document.onclick = function() {
}  

</script>
<script>
var e = "%c";

var n = "color:red;text-shadow:5px 5px 2px #fff, 5px 5px 2px #373E40, 5px 5px 5px #A2B4BA, 5px 5px 10px #82ABBA;font-weight:bolder;font-size:55px"

var r = "color:#495A80;text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 1px 0 #bbb;font-size:20px";



</script>
</body>
</html>
