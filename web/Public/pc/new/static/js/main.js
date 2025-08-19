$(document).ready(function(){
	$(".bg_txt ol li").hover(function(){
		$(".bg_txt ol li").removeClass("active").eq($(this).index()).addClass("active");
		$(".banner ul li").removeClass("active").eq($(this).index()).addClass("active");
	})
	var index = 0;
	var length =  $(".bg_txt ol li").length-1;
	var runppt = setInterval(run,8000);

	function run(){
		index++;
		console.log(index);
		if(index>length){
			index=0;
		}
		$(".bg_txt ol li").removeClass("active").eq(index).addClass("active");
		$(".banner ul li").removeClass("active").eq(index).addClass("active");
	}
    
    $(".banner ul li").hover(function(){
    	clearInterval(runppt);
    	index = $(this).index();
    },function(){
    	runppt = setInterval(run,8000);
    })
    $(".banner ol li").hover(function(){
    	clearInterval(runppt);
    	index = $(this).index();
    },function(){
    	runppt = setInterval(run,8000);
    })
    
    $(".draw_hover").hover(function(){
    	$(".draw_hover").addClass("active");
    	$(".draw").show();
    },function(){
    	$(".draw_hover").removeClass("active");
    	$(".draw").hide();
    })
    $(".draw").hover(function(){
    	$(".draw_hover").addClass("active");
    	$(".draw").show();
    },function(){
    	$(".draw_hover").removeClass("active");
    	$(".draw").hide();
    })

    $(".close").click(function(){
    	$(".pf").hide();
    	setTimeout(function(){
           $(".pf").show();
    	},8000)
    })
    $(".left_close").click(function(){
        $(".left_pf").hide();
        setTimeout(function(){
           $(".left_pf").show();
        },8000)
    })
    $(".center_txt_left ul li").click(function(){
        $(".center_txt_left ul li").removeClass("active").eq($(this).index()).addClass("active");
        $(".center_txt_right dl").removeClass("active").eq($(this).index()).addClass("active");
    })
    $(".center_txt").addClass("active");
    $(".center_shadow").addClass("active");
    $(".center_txt_close").click(function(){
        $(".center_txt").removeClass("active");
        $(".center_shadow").removeClass("active");
    })
})

