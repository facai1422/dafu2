<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <title></title>
    <link href="/nuoyafg1/dianzi/vendor.css" rel="stylesheet">
    <link href="/nuoyafg1/dianzi/mian.css" rel="stylesheet">
    <link href="/nuoyafg1/dianzi/index.css" rel="stylesheet">
    <script src="/nuoyafg1/dianzi/jquery-1.8.2.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="/nuoyafg1/dianzi/main.js"></script>
    <script src="/nuoyafg1/dianzi/jquery.SuperSlide.2.1.1.source.js" type="text/javascript" charset="utf-8"></script>
    <script src="/nuoyafg1/dianzi/init.js" type="text/javascript"></script>
    <script src="/nuoyafg1/dianzi/page_common.js" type="text/javascript"></script>
    <script src="/nuoyafg1/dianzi/layer.js" type="text/javascript" charset="utf-8"></script>
    <script src="/nuoyafg1/dianzi/checkinput.js" type="text/javascript"></script>
    <script src="/nuoyafg1/dianzi/loadpage.js" type="text/javascript"></script>
    <script src="/nuoyafg1/dianzi/imagescode.js" type="text/javascript"></script>
    <script src="/nuoyafg1/dianzi/game_plat.js" type="text/javascript"></script>
    <script src="/nuoyafg1/dianzi/checkMobile.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="/nuoyafg1/dianzi/slot_gg.js"></script>
    <script src="/nuoyafg1/dianzi/jquery.marquee.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="/nuoyafg1/dianzi/jquery.placeholder.min.js" type="text/javascript"></script>

    <script type="text/javascript" src="/nuoyafg1/dianzi/json3.js"></script>
    <script type="text/javascript" src="/nuoyafg1/dianzi/Platform_PT.js"></script>

</head>
<script type="text/javascript">
    $(function () {


        //        tab
        $('#game_nav_bar li').on('click', function () {
            $('#game_nav_bar li').eq($(this).index()).addClass('nav_bar_on').siblings().removeClass('nav_bar_on');
            $('.nav_content_list').hide().eq($(this).index()).show();

        })

        //        电子导航
        $('#ele_nav_list li').hover(function () {
            $(this).find('p').show();
            $('.p_on').show();
        }, function () {
            $(this).find('p').hide();
            $('.p_on').show();

        });


        //游戏导航鼠标经过效果
        $('.ele_nav_content_mg').hover(function () {
            $(this).find('img').attr('src', '//image.beike188.com/AMH/images/electronic/electronic_ico_08_m.png');
        }, function () {
            $(this).find('img').attr('src', '//image.beike188.com/AMH/images/electronic/electronic_ico_08.png');
        })
        $('.ele_nav_content_hb').hover(function () {
            $(this).find('img').attr('src', '//image.beike188.com/AMH/images/electronic/electronic_ico_03_m.png');
        }, function () {
            $(this).find('img').attr('src', '//image.beike188.com/AMH/images/electronic/electronic_ico_03.png');
        });
        $('.ele_nav_content_bbin').hover(function () {
            $(this).find('img').attr('src', '//image.beike188.com/AMH/images/electronic/electronic_ico_13_m.png');
        }, function () {
            $(this).find('img').attr('src', '//image.beike188.com/AMH/images/electronic/electronic_ico_13.png');
        });
        $('.ele_nav_content_tgp').hover(function () {
            $(this).find('img').attr('src', '//image.beike188.com/AMH/images/electronic/electronic_ico_11_m.png');
        }, function () {
            $(this).find('img').attr('src', '//image.beike188.com/AMH/images/electronic/electronic_ico_11.png');
        })
        $('.ele_nav_content_yoplay').hover(function () {
            $(this).find('img').attr('src', '//image.beike188.com/AMH/images/electronic/electronic_ico_02_m.png');
        }, function () {
            $(this).find('img').attr('src', '//image.beike188.com/AMH/images/electronic/electronic_ico_02.png');
        })
        $('.ele_nav_content_ps').hover(function () {
            $(this).find('img').attr('src', '//image.beike188.com/AMH/images/electronic/electronic_ico_07.png');
        }, function () {
            $(this).find('img').attr('src', '//image.beike188.com/AMH/images/electronic/electronic_ico_07_m.png');
        })
        $('.ele_nav_content_jdb').hover(function(){
            $(this).find('img').attr('src','//image.beike188.com/AMH/images/electronic/electronic_ico_09_m.png');
        },function(){
            $(this).find('img').attr('src','//image.beike188.com/AMH/images/electronic/electronic_ico_09.png');
        })
    })
</script>
<include file="Public/header" />
<body>
<div id="electronic">
    <div class="header_bgbox">
        <script>
            Main($('.header_bgbox'), '../template/header.html');
        </script>
    </div>

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
    <div class="content">
        <div class="game-content mt30">
            <div class="content-header clearfix">
                <div class="searchConditionTop">
                    <div class="f-left ele_nav">
                        <div class="nav_wapper">
                            <ul id="ele_nav_list">
                                <li>
                                        <div class="ele_nav_content ele_nav_content_sw">
                                            <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                                                
                                                <span>SW电子</span>
                                            </a>
                                        </div>
                                        <p style="javascript:void(0)"><a href="/"></a></p>
                                    </li>
                                <li>
                                    <div class="ele_nav_content ele_nav_content_mg">
                                        <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                                            
                                                <span>MG电子</span>
                                        </a>
                                    </div>
                                    <p class="p_on" style="display: block;"><a href=""></a></p>
                                </li>
                                <li class="lion">
                                    <div class="ele_nav_content ele_nav_content_pt">
                                        <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                                            
                                                <span>PT电子</span></a>
                                    </div>
                                    <p style="display: none;"><a href=""></a></p>
                                </li>
                                <li>
                                    <div class="ele_nav_content ele_nav_content_hb">
                                        <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                                            
                                                <span>HABA电子</span></a>
                                    </div>
                                    <p style="display: none;"><a href=""></a></p>
                                </li>
                                <li>
                                    <div class="ele_nav_content ele_nav_content_bbin">
                                        <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                                            
                                                <span>BBIN电子</span></a>
                                    </div>
                                    <p style="display: none;"><a href="javascript:void(0)" onclick=""></a></p>
                                </li>
                                <li>
                                    <div class="ele_nav_content ele_nav_content_tgp">
                                        <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                                            
                                                <span>TGP电子</span></a>
                                    </div>
                                    <p style="display: none;"><a href="javascript:void(0)" onclick=""></a></p>
                                </li>
                                <li>
                                    <div class="ele_nav_content ele_nav_content_yoplay">
                                        <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                                            
                                            <span>YOPLAY电子</span>
                                        </a>
                                    </div>
                                    <p style="display: none;"><a href=""></a></p>
                                </li>
                                <li>
                                    <div class="ele_nav_content ele_nav_content_ps">
                                        <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                                            
                                            <span>PS电子</span>
                                        </a>
                                    </div>
                                    <p style="display: none;"><a href=""></a></p>
                                </li>
                                <li>
                                    <div class="ele_nav_content ele_nav_content_jdb">
                                        <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                                            
                                            <span>JDB电子</span>
                                        </a>
                                    </div>
                                    <p style="display: none;"><a href=""></a></p>
                                </li>
                                <li>
                                    <div class="ele_nav_content ele_nav_content_cqj">
                                        <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                                            
                                            <span>CQ9电子</span>
                                        </a>
                                    </div>
                                    <p style="display: none;"><a href="javascript:void(0);" onclick=")"></a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="f-right input">
                        <div class="searchInput ivu-input-wrapper ivu-input-type">
                            <i class="ivu-icon ivu-icon-load-c ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i>
                            <input autocomplete="off" type="text" placeholder="请输入游戏名称" class="ivu-input" id="game_input">
                        </div>
                        <span class="searchBtn" id="game_searchdo"></span>
                    </div>
                </div>
            </div>
            <div class="searchConditionDown">
                <ul class="game_nav_bar game_nav_pt_bar" id="game_nav_bar">
                    <li class="" onclick="PT_GAME(PTGAME.Table_Card,0);">热门游戏</li>
                    <li onclick="PT_GAME(PTGAME.New_Slots,1);" class="">最新游戏</li>
                    <li onclick="PT_GAME(PTGAME.linesThree_ten,2);" class="">3-10线</li>
                    <li onclick="PT_GAME(PTGAME.linesTen_twenty,3);" class="">15-20线</li>
                    <li onclick="PT_GAME(PTGAME.linesTwentyMore,4);">25+线</li>
                    <li onclick="PT_GAME(PTGAME.Featured_Slots,5);" class="nav_bar_on">特色游戏</li>
                    <li onclick="PT_GAME(PTGAME.Video_Slots,6);" class="">老虎机</li>
                    <li onclick="PT_GAME(PTGAME.Arcade_Slots,7);" class="">街机游戏</li>
                    <li onclick="PT_GAME(PTGAME.Fixed_Odds_Games,8);" class="">累计奖池</li>
                    <li onclick="PT_GAME(PTGAME.Classic_Slots,9);" class="">卡牌</li>
                    <li onclick="PT_GAME(PTGAME.Scratch_Cards,10);" class="">刮刮乐</li>
                    <!--<li onclick="PT_GAME(PTGAME.Table_Games,4);">桌面</li>-->
                </ul>
                <!-- <ul class="game_nav_bar" id="game_nav_bar">
                              <li class="nav_bar_on" onclick="MG_GAME(gamelist.bonus_slot,0);">热门游戏</li>
                              <li onclick="MG_GAME(gamelist.classic_slot,1);" class="">老虎机</li>
                              <li onclick="MG_GAME(gamelist.feature_slot,2);" class="">累计奖池</li>
                              <li onclick="MG_GAME(gamelist.others,3);" class="">视频扑克</li>
                              <li onclick="MG_GAME(gamelist.table,4);" class="">刮刮乐</li>
                              <li onclick="MG_GAME(gamelist.video_poker,5);" class="">桌面</li>
                              <li onclick="MG_GAME(gamelist.video_slot,6);" class="">机台&amp;卡台</li>
                          </ul> -->
            </div>
            <div class="electronicList_content">
                <div class="content_listNumb_box electronics clearfix"><div class="gbox f-left elecItem" style="margin-left: 0px;"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/fruit_mania.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display: none;"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('fmn')">免费试玩</span><span class="btn" onclick="load_game_link_pt('fmn')">进入游戏</span></div></div></div></div><div class="txt">水果狂</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/yycf.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display: none;"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('ashfmf')">免费试玩</span><span class="btn" onclick="load_game_link_pt('ashfmf')">进入游戏</span></div></div></div></div><div class="txt">圆月财富</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/Funky_Fruits_Farm.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display: none;"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('fff')">免费试玩</span><span class="btn" onclick="load_game_link_pt('fff')">进入游戏</span></div></div></div></div><div class="txt">水果农场</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/xksg.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display: none;"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('fnfrj')">免费试玩</span><span class="btn" onclick="load_game_link_pt('fnfrj')">进入游戏</span></div></div></div></div><div class="txt">酷炫水果</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/yjgs.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display: none;"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('ges')">免费试玩</span><span class="btn" onclick="load_game_link_pt('ges')">进入游戏</span></div></div></div></div><div class="txt">艺伎故事</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/yjjb.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display: none;"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('gesjp')">免费试玩</span><span class="btn" onclick="load_game_link_pt('gesjp')">进入游戏</span></div></div></div></div><div class="txt">艺伎故事积宝游戏</div></div></div><div class="gbox f-left elecItem" style="margin-left: 0px;"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/thai_paradise.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display: none;"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('tpd2')">免费试玩</span><span class="btn" onclick="load_game_link_pt('tpd2')">进入游戏</span></div></div></div></div><div class="txt">泰国梦天堂</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/thtk.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display: none;"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('thtk')">免费试玩</span><span class="btn" onclick="load_game_link_pt('thtk')">进入游戏</span></div></div></div></div><div class="txt">泰国佛寺KIOSK</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/dcv.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display: none;"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('dcv')">免费试玩</span><span class="btn" onclick="load_game_link_pt('dcv')">进入游戏</span></div></div></div></div><div class="txt">征服四海</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/gtsgme.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display: none;"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('gtsgme')">免费试玩</span><span class="btn" onclick="load_game_link_pt('gtsgme')">进入游戏</span></div></div></div></div><div class="txt">大明帝国</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/The_Love_Boat.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display: none;"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('lvb')">免费试玩</span><span class="btn" onclick="load_game_link_pt('lvb')">进入游戏</span></div></div></div></div><div class="txt">爱之船</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/The_Mummy.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display:none"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('mmy')">免费试玩</span><span class="btn" onclick="load_game_link_pt('mmy')">进入游戏</span></div></div></div></div><div class="txt">木乃伊</div></div></div><div class="gbox f-left elecItem" style="margin-left: 0px;"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/donq.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display: none;"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('donq')">免费试玩</span><span class="btn" onclick="load_game_link_pt('donq')">进入游戏</span></div></div></div></div><div class="txt">富有的唐吉可德</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/zssd.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display:none"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('aogs')">免费试玩</span><span class="btn" onclick="load_game_link_pt('aogs')">进入游戏</span></div></div></div></div><div class="txt">众神时代</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/Amazone_Wild.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display:none"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('ashamw')">免费试玩</span><span class="btn" onclick="load_game_link_pt('ashamw')">进入游戏</span></div></div></div></div><div class="txt">野生亚马逊</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/archer.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display:none"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('arc')">免费试玩</span><span class="btn" onclick="load_game_link_pt('arc')">进入游戏</span></div></div></div></div><div class="txt">弓箭手</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/arctic_treasure.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display:none"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('art')">免费试玩</span><span class="btn" onclick="load_game_link_pt('art')">进入游戏</span></div></div></div></div><div class="txt">北极宝藏</div></div></div><div class="gbox f-left elecItem"><div class="ordinary_game" style="cursor:pointer"><div class="img rel" style="overflow:hidden"><div class="span_title"><span class="platform_span">PT</span></div><img style="width:100%" src="/nuoyafg1/dianzi/Atlantis_Queen.png" alt=""><div class="elect_enter_game_div my_animated noEmpty" style="display:none"><div style="width: 100%;"><div class="line-btn line_btn_pt"><span class="btn" style="margin:0 0 20px" onclick="try_game_link('gtsatq')">免费试玩</span><span class="btn" onclick="load_game_link_pt('gtsatq')">进入游戏</span></div></div></div></div><div class="txt">亚特兰蒂斯女王</div></div></div></div>
            </div>
            <div class="ele_pages">
                <h3>
                    <button type="button" id="pages_top_btn_rm">上一页</button>
                </h3>
                <ul>
                    <li>
                        <i id="pages_numf_rm">1</i>/
						<i id="pages_numf_rm">68</i>
                        
                    </li>
                </ul>
                <h3>
                    <button type="button" id="pages_bot_btn_rm">下一页</button>
                </h3>
            </div>
        </div>
    </div>
    <!--尾部-->
    <div class="footer_bgbox">
        <script>
            Main($('.footer_bgbox'), '../template/footer.html');
        </script>
    </div>
</div>
</body>
<script type="text/javascript">
    /*格式化金额*/
    function formatCurrency(num) {
        num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num))
            num = "0";
        sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * 100 + 0.50000000001);
        cents = num % 100;
        num = Math.floor(num / 100).toString();
        if (cents < 10)
            cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + ',' +
                num.substring(num.length - (4 * i + 3));
        return (((sign) ? '' : '-') + num + '.' + cents);
    }

    //            随机数
    function number(z, numb, time) {
        setInterval(function () {
            var i = $(z);
            var w = $('.jackpot');

            var s = Math.random() * 10;
            numb = numb + s;
            i.text("￥" + formatCurrency(numb));

        }, time);
    }

    number('#jp_', 515000622, 50);
</script>
<include file="Public/footer" />
</html>