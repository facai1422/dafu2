<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta name="keywords" content="" />
<meta name="viewport" content="width=device-width" >
<meta http-equiv="x-ua-compatible" content="IE=edge" >   
<title>{:GetVar('webtitle')} - 线上官网</title>
<link rel="stylesheet" href="/nuoyafg/zhenren/pt-skin.css?v=1.17.3.8" />

<script src="/nuoyafg1/css/jquery.js"></script>
<script src="/nuoyafg1/css/jquery.SuperSlide.2.1.1.js"></script>
</head>
<include file="Public/header" />
<body>
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
  
<div class="zryx_banner">
    <div class="content" style="width:1735px;">
        <!--MG视讯入口-->
        <div class="zryx_enter">
            <img src="/images/nsc/ptgames/bg-img-yy.png?v=1.17.3.8" class="bg-img-yy">
            <div class="zryx_img">
                <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                    <img src="/images/nsc/ptgames/mglive.png?v=1.17.3.8"><span>进入游戏</span>
                </a>
            </div>
            <div class="money-div">
                <p>您MG视讯余额</p>
                <p class="bbinbalance" style="font-size:17px">￥ <span class="money-number" id="bbinbalance" loading="0">0.00 元</span></p>
				<p>额度转换最低100元 <span><?=$set['zrrechargeMin']?></span>最高10000元 <span><?=$set['zrrechargeMax']?></p>
                <a href="javascript:;" id="bbincharge" class="recharge2">自动转换</a>
            </div>
        </div>
        <!--GD视讯入口-->
        <div class="zryx_enter">
            <img src="/images/nsc/ptgames/bg-img-yy.png?v=1.17.3.8" class="bg-img-yy">
            <div class="zryx_img">
                <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                    <img src="/images/nsc/ptgames/gdlive.png?v=1.17.3.8"><span>进入游戏</span>
                </a>
            </div>
            <div class="money-div">
                <p>您GD视讯余额</p>
                <p style="font-size:17px">￥ <span class="money-number" id="ptbalance" loading="0">0.00 元</span></p>
				<p>额度转换最低100元 <span><?=$set['zrrechargeMin']?></span>最高10000元 <span><?=$set['zrrechargeMax']?></p>
                <a href="javascript:;" id="ptcharge" class="recharge2">自动转换</a>
            </div>
        </div>
		<!--BG视讯入口-->
		<div class="zryx_enter">
            <img src="/images/nsc/ptgames/bg-img-yy.png?v=1.17.3.8" class="bg-img-yy">
            <div class="zryx_img">
                <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                    <img src="/images/nsc/ptgames/bglive.png?v=1.17.3.8"><span>进入游戏</span>
                </a>
            </div>
            <div class="money-div">
                <p>您BG视讯余额</p>
                <p style="font-size:17px">￥ <span class="money-number" id="ptbalance" loading="0">0.00 元</span></p>
				<p>额度转换最低100元 <span><?=$set['zrrechargeMin']?></span>最高10000元 <span><?=$set['zrrechargeMax']?></p>
                <a href="#" id="agcharge" class="recharge2">自动转换</a>
            </div>
        </div>
		<!--DG视讯入口-->
		<div class="zryx_enter">
            <img src="/images/nsc/ptgames/bg-img-yy.png?v=1.17.3.8" class="bg-img-yy">
            <div class="zryx_img">
                <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                    <img src="/images/nsc/ptgames/dglive.png?v=1.17.3.8"><span>进入游戏</span>
                </a>
            </div>
            <div class="money-div">
                <p>您DG视讯余额</p>
                <p style="font-size:17px">￥ <span class="money-number" id="ptbalance" loading="0">0.00 元</span></p>
				<p>额度转换最低100元 <span><?=$set['zrrechargeMin']?></span>最高10000元 <span><?=$set['zrrechargeMax']?></p>
                <a href="#" id="agcharge" class="recharge2">自动转换</a>
            </div>
        </div>
		<!--欧博视讯入口-->
		<div class="zryx_enter">
            <img src="/images/nsc/ptgames/bg-img-yy.png?v=1.17.3.8" class="bg-img-yy">
            <div class="zryx_img">
                <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                    <img src="/images/nsc/ptgames/oblive.png?v=1.17.3.8"><span>进入游戏</span>
                </a>
            </div>
            <div class="money-div">
                <p>您欧博视讯余额</p>
                <p style="font-size:17px">￥ <span class="money-number" id="ptbalance" loading="0">0.00 元</span></p>
				<p>额度转换最低100元 <span><?=$set['zrrechargeMin']?></span>最高10000元 <span><?=$set['zrrechargeMax']?></p>
                <a href="#" id="agcharge" class="recharge2">自动转换</a>
            </div>
        </div>
		<!--OG视讯入口-->
		<div class="zryx_enter">
            <img src="/images/nsc/ptgames/bg-img-yy.png?v=1.17.3.8" class="bg-img-yy">
            <div class="zryx_img">
                <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                    <img src="/images/nsc/ptgames/oglive.png?v=1.17.3.8"><span>进入游戏</span>
                </a>
            </div>
            <div class="money-div">
                <p>您OG视讯余额</p>
                <p style="font-size:17px">￥ <span class="money-number" id="ptbalance" loading="0">0.00 元</span></p>
				<p>额度转换最低100元 <span><?=$set['zrrechargeMin']?></span>最高10000元 <span><?=$set['zrrechargeMax']?></p>
                <a href="#" id="agcharge" class="recharge2">自动转换</a>
            </div>
        </div>
		<!--BBIN视讯入口-->
		<div class="zryx_enter">
            <img src="/images/nsc/ptgames/bg-img-yy.png?v=1.17.3.8" class="bg-img-yy">
            <div class="zryx_img">
                <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                    <img src="/images/nsc/ptgames/bbinlive.png?v=1.17.3.8"><span>进入游戏</span>
                </a>
            </div>
            <div class="money-div">
                <p>您BBIN视讯余额</p>
                <p style="font-size:17px">￥ <span class="money-number" id="ptbalance" loading="0">0.00 元</span></p>
				<p>额度转换最低100元 <span><?=$set['zrrechargeMin']?></span>最高10000元 <span><?=$set['zrrechargeMax']?></p>
                <a href="#" id="agcharge" class="recharge2">自动转换</a>
            </div>
        </div>
		<!--申博视讯入口-->
		<div class="zryx_enter">
            <img src="/images/nsc/ptgames/bg-img-yy.png?v=1.17.3.8" class="bg-img-yy">
            <div class="zryx_img">
                <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                    <img src="/images/nsc/ptgames/sunbet.png?v=1.17.3.8"><span>进入游戏</span>
                </a>
            </div>
            <div class="money-div">
                <p>您申博视讯余额</p>
                <p style="font-size:17px">￥ <span class="money-number" id="ptbalance" loading="0">0.00 元</span></p>
				<p>额度转换最低100元 <span><?=$set['zrrechargeMin']?></span>最高10000元 <span><?=$set['zrrechargeMax']?></p>
                <a href="#" id="agcharge" class="recharge2">自动转换</a>
            </div>
        </div>
		<!--HP视讯入口-->
        <div class="zryx_enter">
            <img src="/images/nsc/ptgames/bg-img-yy.png?v=1.17.3.8" class="bg-img-yy">
            <div class="zryx_img">
                <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                    <img src="/images/nsc/ptgames/hp.png?v=1.17.3.8"><span>进入游戏</span>
                </a>
            </div>
            <div class="money-div">
                <p>您HP视讯余额</p>
                <p style="font-size:17px">￥ <span class="money-number" id="ptbalance" loading="0">0.00 元</span></p>
				<p>额度转换最低100元 <span><?=$set['zrrechargeMin']?></span>最高10000元 <span><?=$set['zrrechargeMax']?></p>
                <a href="#" id="agcharge" class="recharge2">自动转换</a>
            </div>
        </div>
        <!--AG视讯入口-->
        <div class="zryx_enter">
            <img src="/images/nsc/ptgames/bg-img-yy.png?v=1.17.3.8" class="bg-img-yy">
            <div class="zryx_img">
                <a href="javascript:alert('亲！游戏正在维护中，请耐心等待开放');">
                    <img src="/images/nsc/ptgames/aglive.png?v=1.17.3.8"><span>进入游戏</span>
                </a>
            </div>
            <div class="money-div">
                <p>您AG视讯余额</p>
                <p style="font-size:17px">￥ <span class="money-number" id="ptbalance" loading="0">0.00 元</span></p>
				<p>额度转换最低100元 <span><?=$set['zrrechargeMin']?></span>最高10000元 <span><?=$set['zrrechargeMax']?></p>
                <a href="#" id="wmcharge" class="recharge2">自动转换</a>
            </div>
        </div>
    </div>
</div>

<div class="bg_tanchu" style="display: none;"></div>
<div class="charge_cont" style="display: none;">
    <a href="javascript:;" class="close-icon" title="关闭"> </a>
    <h2 id="chargeTitle">PT转账</h2>
    <form id="" method="post" onsubmit="return false">
        <div class="charge_input">
            <p>转入金额:
                <input name="from" type="text" value="" placeholder="请填写转入金额" id="money0" style="background: rgb(255, 255, 255);">
                <input type="radio" name="charge" value="0" checked="checked" class="radio"> <span id="chargeTo">至PT账户</span></p>
            <p>转出金额:
                <input name="to" type="text" value="" readonly="readonly" placeholder="请填写转出金额" id="money1" style="background:#ddd">
                <input type="radio" name="charge" value="1" class="radio"> <span>至彩票账户</span></p>
            <span id="trprocess" style="display:none">转账中,请稍后...</span>
            <input type="button" value="确定" class="charge_btn" id="ptBtn">
        </div>
    </form>
</div>
<script type="text/javascript" src="/nuoyafg/zhenren/layer.js?v=1.17.3.8" ></script>
<include file="Public/footer" />
<script type="text/javascript">
    $(function(){
        //getBalance();
        getBalancebbin();
        //转账弹出窗
        $('.recharge2, .close-icon').click(function(){
            if($('.bg_tanchu').is(':hidden')){
                if($(this).attr("id") == 'ptcharge'){
                    $('#chargeTitle').html('PT转账');
                    $('#chargeTo').html('至PT账户');
                    $('.charge_btn').attr('id','ptBtn');
                }
                else if($(this).attr("id") == 'bbincharge'){
                    $('#chargeTitle').html('BBIN转账');
                    $('#chargeTo').html('至BBIN账户');
                    $('.charge_btn').attr('id','bbinBtn');
                }
                $('.bg_tanchu, .charge_cont').show();
                $('#money0').focus();
            }else $('.bg_tanchu, .charge_cont').hide();
        })
        $('.charge_input input[type=text]').focus(function(){
            $(this).attr('readonly',false);
            $(this).css('background','#fff');
            $(this).parent().siblings().children('input[type=text]').val('');
            $(this).parent().siblings().children('input[type=text]').attr('readonly',true);
            $(this).parent().siblings().children('input[type=text]').css('background','#ddd');
            $(this).next('input[type=radio]').attr('checked','checked');
        })

        if(!fnCheckIe()){
            var _scale = $(".layer",parent.document).attr("zoom");
            $("body").css("zoom",_scale);
        }
    })

    var submitButton = true;
    var ptbalance = 0, bbinbalance = 0;
    function getBalance() {
        if(jQuery("#ptbalance").attr('loading') == 1) {return;}
        jQuery("#ptbalance").html("正在加载...");
        jQuery("#ptbalance").attr('loading',1) ;
        $.ajax({
            type: "POST",
            dataType:"json",
            url: "/?controller=ptgame&action=tranfer",
            data: "tag=getbalance",
            success: function(json) {
                jQuery("#cpbalance").html(moneyFormat(json.balance));
                jQuery("#ptbalance").html(moneyFormat(json.ptbalance));
                ptbalance = moneyFormat(json.ptbalance);
                jQuery("#ptbalance").attr('loading',0) ;
            }
        });
    }
    function getBalancebbin() {
        if(jQuery("#bbinbalance").attr('loading') == 1) {return;}
        jQuery("#bbinbalance").html("正在加载...");
        jQuery("#bbinbalance").attr('loading',1) ;

        $.getJSON('/index.php/livegame/getbbinbalance',function(json){
            jQuery("#bbinbalance").html(moneyFormat(json.bbinbalance));
            jQuery("#bbinbalance").attr('loading',0) ;
        });


    }

    $(".charge_btn").click(function(){
        if(submitButton){
            var radio = $(".radio:checked").val();
            //当radio是0时，表示为彩票主账户转账到pt或bbin
            //当radio是1时，表示为pt或bbin转账到彩票主账户
            var radioArr = [["s","2"],["2","s"]];
            var tran_from = radioArr[radio][0];
            var tran_to = radioArr[radio][1];
            var money = jQuery("#money" + radio).val();
            var attrId = $(".charge_btn").attr("id");
            var url = '', data = '';
            if (tran_from == tran_to) {
                alert("转出和转入平台不能相同！");
                return false;
            }
			var moneymin=<?=$set['zrrechargeMin']?>;
			var moneymax=<?=$set['zrrechargeMax']?>;
            var reg = /^[-+]?\d*$/;
            if (!reg.test(money) || money < moneymin || money > moneymax) {
                alert("请输入正确金额");
                return false;
            }
            /*
             if((attrId=='ptBtn' && radio==1 && money>parseInt(ptbalance.replace(/,/g,""))) || (attrId== 'bbinBtn' && radio==1 && money>parseInt(bbinbalance.replace(/,/g,"")))){
             alert('转出金额不能大于现有余额!');
             return false;
             }
             */
            submitButton = false;
            //转至pt账户
            if(attrId == 'ptBtn'){
                url = "/index.php/livegame/pttranfer";
                data = "tag=transfer&frompt="+tran_from+"&targetpt="+tran_to+"&money="+money;
            }
            //转至bbin账户
            else if(attrId == 'bbinBtn'){
                if(isNaN(bbinbalance)){
                    alert(bbinbalance);
                    return;
                }
                var tag = "tobbin";
                if(radio == 0){tag = "tobbin"}
                else if(radio == 1){tag = "tocp"}
                url = "/index.php/livegame/bbintranfer";
                data = "tag="+tag+"&money="+money;
            }
            else {
                alert('转账出错, 请刷新页面后再试!');
                return;
            }
            $("#trprocess").show();
            $.ajax({
                type: "POST",
                dataType: "json",
                headers:{'client': 'json'},
                url: url,
                data: data,
                success: function(json) {
                    alert(json.message);
                    if(json.state == 1){
                        if(attrId == 'ptBtn') {
                            getBalance();
                        }
                        else if(attrId == 'bbinBtn') {
                            getBalancebbin();
                        }
                        submitButton = true;
                        $('.bg_tanchu, .charge_cont').hide();
                    }
                    $("#trprocess").hide();
                }
            });
        }else{
            alert("喝杯茶休息下！");
            window.setTimeout(function(){
                submitButton = true;
            },60000);
        }
    });

    function fnCheckIe(){
        var broswer = navigator.userAgent;
        if(broswer.indexOf("MSIE") != -1){
            return true;
        }else{
            return false;
        }
    }
</script>
</body>
</html>
