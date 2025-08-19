


$(function(){

	$(".top").click(function(){
	 $('body,html').animate({scrollTop:0},500); 
							
	})
              
})

	 $(function(){
            $(".nav2 li").each(function(index){
                $(this).click(function(){
    			 $(this).addClass('active').siblings().removeClass('active');
         		 $('.textbox li').css('display','none');
                 $(".textbox li:eq("+index+")").css('display','block');
						
                })
            })                
        })
	 
	 
	 

	 $(function(){
            $(".left_menu li").each(function(index){
                $(this).click(function(){
    			 $(this).addClass('on').siblings().removeClass('on');
         		 $('.list').css('display','none');
                 $(".list:eq("+index+")").css('display','block');
						
                })
            })                
        })
	 
	 	 $(function(){
            $(".close").each(function(index){
                $(this).click(function(){
				$(".kf").hide();
						
                })
            })                
        })
	 