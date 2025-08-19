$(function(){
    $(".menu-list .item").removeClass("active");
    $("#lottery").parent(".item").addClass("active");
    // var bHeight = $("body").height() - 300;
    // $("body").height(bHeight);
    // alert(bHeight);
    $("#lottery").addClass("active").siblings(".item").removeClass("active");
    //lottery大輪播圖
    var lotteryBanner = new Slider($('#lotteryBanner'), {
        time: 5000,
        delay: 400,
        event: 'click',
        auto: true,
        mode: 'fade',
        controller: $('#lotteryBannerCtrl'),
        activeControllerCls: 'active'
    });
    $('#lotteryBanner .flex-prev').click(function() {
        lotteryBanner.prev()
    });
    $('#lotteryBanner .flex-next').click(function() {
        lotteryBanner.next()
    });

    //bbin提示
    $(".sports-model").on("click", function(){
        dialog.info($.t("base:bbin_time"));
    });

    //tab切換
    $(".lottery-title  li").eq(0).addClass("active");
    var dataI18n =  $(".lottery-title  li").eq(0).attr("data-i18n");
    if(dataI18n == "lottery:lottery.LT"){
        $(".lottery-list.LT").addClass("active");
    }else if(dataI18n == "lottery:lottery.KM"){
        $(".lottery-list.KM").addClass("active");
    }else{
        $(".lottery-list.BBIN_LOTTERY").addClass("active");
    }
    $(document).on("click",".lottery-title .LT",function(){
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".lottery-list.LT").addClass("active");
        $(".lottery-list.KM").removeClass("active");
        $(".lottery-list.BBIN_LOTTERY").removeClass("active");
    })
    $(document).on("click",".lottery-title .KM",function(){
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".lottery-list.KM").addClass("active");
        $(".lottery-list.LT").removeClass("active");
        $(".lottery-list.BBIN_LOTTERY").removeClass("active");
    })
    $(document).on("click",".lottery-title .BBIN_LOTTERY",function(){
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".lottery-list.BBIN_LOTTERY").addClass("active");
        $(".lottery-list.LT").removeClass("active");
        $(".lottery-list.KM").removeClass("active");
    })
    // $(document).on("click",".lottery-title .item",function(){
    //     var disTance = 50 + parseInt(Math.random()*30);
    //     var This = $(this);
    //     var ulList = $(".lottery-list").eq(This.index());
    //     var ulListItem = ulList.children(".item");
    //     // var changeBefore ={
    //     //     "left":disTance,
    //     //     "top": -1 * disTance,
    //     //     "width":"188px",
    //     //     "height":"112px"
    //     // };
    //     // var changeAfter  = {
    //     //     "left":"0px",
    //     //     "top":"0px",
    //     //     "width":"376px",
    //     //     "height":"224px"
    //     // }
    //     $(".lottery-list").fadeOut(0);
    //     ulList.fadeIn();
    //     // ulListItem.css( changeBefore );
    //     // ulListItem.animate( changeAfter,800);
    //     addRemoveAct(This,$(".item"));
    // });

    //彩票列表懸停效果
    $(".lottery-list .item").hover(function(){
        $(this).children(".btn-box").stop().animate({
            "left" : 240,
            "top" : 100,
            "width" : 180,
            "height" : 180,
            "borderWidth" : 3
        },400);
        $(this).children(".lottery-img").stop().animate({
            "width": 398 ,
            "left" : -11,
            "top" : -6
        },400);
        $(this).children(".lottery-bg").stop().fadeIn(300);
        // $(this).children(".title").stop().animate({
        //     "left" : 38,
        //     "top" : 20,
        //     "width" : 300,
        //     "height" : 38,
        //     "lineHeight" : 38,
        //     "fontSize" : 18,
        //     "opacity" : 0.8
        // },400)

    },function(){
        $(this).children(".btn-box").stop().animate({
            "left" : 376,
            "top" : 222,
            "width" : 0,
            "height" : 0,
            "borderWidth" : 0
        },400);
        $(this).children(".lottery-img").stop().animate({
            "width": 376 ,
            "left" : 0,
            "top" : 0
        },400);
        $(this).children(".lottery-bg").stop().fadeOut(300);
        // $(this).children(".title").stop().animate({
        //     "left" : 60,
        //     "top" : 25,
        //     "width" : 258,
        //     "height" : 28,
        //     "lineHeight" : 28,
        //     "fontSize" : 16,
        //     "opacity" : 0.5
        // },400)
    });

    //立即遊戲
    $(".km").attr("state",$(".lottery-title li").eq(0).attr("state"));
    $(".lt").attr("state",$(".lottery-title li").eq(1).attr("state"));

    $(document).on("click",".btn.play",function(){

        var state = $(this).attr("state");
        var codename = $(this).attr("codename");
        var ticket = $("#token").val();
        var op = $("#gpiOp").val();
        if(!isLogin()){ $(".ui-button-text-only").click(function(){ window.location.reload();}); return;}
        if(state == 0){
            dialog.info($.t("base:no_play"), function () {});
            $(".ui-button-text-only").click(function(){ window.location.reload();});
            return;
        }
        if(codename=="LT") {
            var url = "https://rlottery.globalintgames.com/#/?op="+op+"&token="+ticket+"&domain=globalintgames.com&lang=zh-cn&gamerulelink=http://info.gpiops.com/share/rules_lottery_cs.shtml";
            openWindow(url, "onlinew88", 1280, 650, "", "");
        } else if (codename=="BBIN_LOTTERY") {
                var url = "/game/bbinGame_load?gamekind=12&gameType=Ltlottery";
                openWindow(url, "onlinew88", 1280, 650, "", "");
            $(".sports-model").show();
                setTimeout(function () {
                    $(".sports-model").hide();
                },32000);
        } else{
            var url = "http://lottery.gpiops.com/Login?lang=zh_cn&version=3&vendor="+op+"&ticket=" + ticket;
            openWindow(url, "onlinew88", 1280, 650, "", "");
        }
    });

    $(document).on("click", ".btn .play .bbin", function(){
        var state = $(this).attr("state");
        var codename = $(this).attr("codename");
        if(!isLogin()){ $(".ui-button-text-only").click(function(){ window.location.reload();}); return;}
        if(state == 0){
            dialog.info($.t("base:no_play"), function () {});
            $(".ui-button-text-only").click(function(){ window.location.reload();});
            return;
        }

    });

    //試玩遊戲
    $(document).on("click",".btn.try",function(){
        var codename = $(this).attr("codename");
        if(codename=="KM") {
            var url = "http://lottery.gpiops.com/Login?mode=Try&version=3&vendor=gameplay&lang=zh-cn";
            openWindow(url, "onlinew88", 1280, 650, "", "");
        }
    })

})

function addRemoveAct(obj1,obj2){
    obj1.addClass("active").siblings(obj2).removeClass('active');
}