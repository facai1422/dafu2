$(function () {
    // upMenu();
    downMenu();
    // myBanner();
    sideNav();
});
// 页脚微信的hover效果
// function upMenu() {
//     $('.foot-icon li').hover(function () {
//         $(this).find('.up-drop').stop(true, false).fadeIn(400);
//         $(this).find('.up-menu').addClass('up-menu-hov');
//     }, function () {
//         $(this).find('.up-drop').stop(true, false).fadeOut(400);
//         $(this).find('.up-menu').removeClass('up-menu-hov');
//     })
// }
function sideNav() {
    var oLi = $('.jack-side .li-phone'),
        oTime = null;

    oLi.hover(function () {
        var This = $(this);
        oTime = setInterval(function () {
            This.find('.erweima-wrap').addClass('erweima-wrap-hov');
            This.find('.erweima-box').fadeIn(300);
        }, 300);
    }, function () {
        clearInterval(oTime);
        $(this).find('.erweima-wrap').removeClass('erweima-wrap-hov');
        $(this).find('.erweima-box').fadeOut(300);
    });
    oLi.on('touchstart', function () {
        $(this).find('.erweima-wrap').toggleClass('erweima-wrap-hov');
        $(this).find('.erweima-box').fadeToggle(300);
    });
}

//头部和导航公用的hover效果
function downMenu() {
    var oDrop = $('.down-drop'),
        firstDrop = $('.nav-li-first'),
        navMenu = $('.nav-menu'),
        timer = null,
        onOff = true;

    //nav里的li
    oDrop.hover(function () {
        var This = $(this);
        timer = setTimeout(
            function () {
                This.find('.down-menu').stop(true, false).fadeIn(300);
                This.find('.down-wrap').addClass('down-wrap-hov');
            }, 300)
    }, function () {
        clearTimeout(timer);
        $(this).find('.down-menu').stop(true, false).fadeOut(300);
        $(this).find('.down-wrap').removeClass('down-wrap-hov');
    });
    //nav里的第一个li
    firstDrop.hover(function () {
        navMenu.addClass('nav-menu-hov');
    }, function () {
        navMenu.removeClass('nav-menu-hov');
    });
    //nav里的第一个li下的下拉菜单
    navMenu.hover(function () {
        navMenu.addClass('nav-menu-hov');
        firstDrop.addClass('j-nav-bg');
        firstDrop.find('.arrow-down').addClass('arrow-down-opacity');
        firstDrop.find('.nav-a').css('color' , '#FFF');
    }, function () {
        navMenu.removeClass('nav-menu-hov');
        firstDrop.removeClass('j-nav-bg');
        firstDrop.find('.arrow-down').removeClass('arrow-down-opacity');
        firstDrop.find('.nav-a').css('color' , '#454545');
    });

    //导航下拉兼容手机
    firstDrop.on('touchstart', function (e) {
        if (onOff) {
            $(this).removeClass('bg-none');
            onOff = false;
        } else {
            $(this).addClass('bg-none');
            onOff = true;
        }
        navMenu.toggleClass('nav-menu-hov');
    });
    //头部下拉兼容手机
    $('.header-drop-a').on('touchstart', function () {
        $(this).next().fadeToggle(300);
    });
}

//活动图片和banner图片滑动的js
// function myBanner() {
//     $(".fullSlide").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold", autoPlay:true, autoPage:true,interTime:4000, trigger:"click",
//         startFun:function(i){
//             var curLi = jQuery(".fullSlide .bd li").eq(i);
//             if( !!curLi.attr("_src") ){
//                 curLi.css("background-image",curLi.attr("_src")).removeAttr("_src")
//             }
//         }
//     });
//     $('.fullSlide .hd ul').hover(function () {
//         $('.fullSlide .prev').addClass('my-opacity');
//         $('.fullSlide .next').addClass('my-opacity');
//     },function () {
//         $('.fullSlide .prev').removeClass('my-opacity');
//         $('.fullSlide .next').removeClass('my-opacity');
//     })
// }
