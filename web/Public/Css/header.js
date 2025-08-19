$(function(){
	$(window).height() < 900 ? $(".service-box").css("top","100px") : $(".service-box").css("top","365px");
	$(".language").hover(function(){
		$(".language-list").fadeOut(200);
	},function(){
		$(".language-list").fadeOut(200);
	});

	$(document).on("click",".language-item",function(){
		var This = $(this);
		$(".language-now").text(This.text());
		$(".language-list").fadeOut(200);
	})

	//$(window).scroll(function(){
	//	var scrollTop = $(document).scrollTop();
	//	if(scrollTop >= 82){
	//		$(".header_top").slideUp(0);
	//		$(".header_btm").addClass("fixed");
	//		$(".header_btm .logo,.header_btm .register-btn").fadeIn();
	//		return false;
	//	}else{
	//		$(".header_top").slideDown(0);
	//		$(".header_btm").removeClass("fixed");
	//		$(".header_btm .logo,.header_btm .register-btn").fadeOut(200);
	//		return false;
	//	}
	//});

	$(window.document).scroll(function () {
		var scrollTop = $(document).scrollTop();
		//var oldSite=new Object();
		//oldSite.left=$("#floatRight").offset().left;
		var top1=$(".header_btm").offset().top;

			if(scrollTop >=top1){
				$(".header_top").slideUp(0);
				$(".header_btm").addClass("fixed");
				$(".header_btm .logo,.header_btm .register-btn").fadeIn();
			}if(scrollTop ==0){
				$(".header_top").slideDown(0);
				$(".header_btm").removeClass("fixed");
				$(".header_btm .logo,.header_btm .register-btn").fadeOut(200);

			}
	});

	//下載中心
	$(".opacity-bg").height($("body").outerHeight());
	$(document).on("click",".download",function(){
		$(".opacity-bg").fadeIn();
		$(".download-box")  .addClass("active").css({opacity:0,top:-100});
		$(".download-box").animate({
			"top":["200px", 'easeOutBounce'],
			"opacity":[1, 'swing']
		},500);
	});
	$(document).on("click",".download-box .close-btn",function(){
		$(".opacity-bg").fadeOut();
		$(".download-box").animate({
			"opacity":[0, 'swing'],
			"top":[-1000, 'linear']
		},500,function(){
			$(".download-box").removeClass("active")
		});
	});
	
//	service支持
	$(".service-box > .item > a").hover(function(){
		$(this).children(".service-s").css("display","block");
		$(this).children(".wx-i").css("display","block");
		$(this).children(".service-s").stop().animate({
			"left" : -235,
			"opacity" : 1
		},400);
		$(this).children(".wx-i").stop().animate({
			"left" : -185,
			"opacity" : 1
		},400);
	},function(){
		$(this).children("span,img").stop().animate({
			"left" : 0,
			"opacity" : 0
		},400);
	});
	
})

var bbin_timer;
function timerbbin(diff) {
	bbin_timer = window.setInterval(function () {
		var day = 0, hour = 0, minute = 0, second = 0;
		if (diff > 0) {
			minute = Math.floor(diff / 60) - (day * 24 * 60) - (hour * 60);
			second = Math.floor(diff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		}
		diff--;
	}, 1000);
}


function addRemoveAct(obj1,obj2){
	obj1.addClass("active").siblings(obj2).removeClass('active');
}