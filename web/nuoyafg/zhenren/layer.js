/**
* 弹出框
* 提示框
* @
*/
;(function($){
    //默认参数
    var defaults = {
        width:"980",
        height:"870",
        anTime:350,
        scale:true
    };

    //判断浏览器是否为IE
    function fnCheckIe(){
        var broswer = navigator.userAgent;
        var ver = parseInt(broswer.substr(broswer.indexOf("MSIE")+5,3));
        //if(ver <= 8){
        if(broswer.indexOf("MSIE") != -1){
            return true;
        }else{
            return false;
        }
    }

    //窗口自适应
    function fnAutoSize(w,h,s){
        var _width=$(window).width();
            _height=$(window).height();
            _top=_height/2-h/2;
            _left=_width/2-w/2;
        if(s){
            _top=_height/2-h*s/2;
            _left=_width/2-w*s/2;
        }
        $(".layer-container").css({"top":_top,"left":_left});
    }

    $.fn.layer = function(options){
        var $this = $(this);
        var settings = $.extend({},defaults,options||{});
        var html=""
            ,_width=$(window).width()
            ,_height=$(window).height()
            ,_top=_height/2-settings.height/2
            ,_left=_width/2-settings.width/2
            ,_scale
            ,_scale_iframe
            ,_anTime = parseFloat(settings.anTime/1000)
            ,_animation = "animation:layer linear "+_anTime+"s 1;-webkit-animation:layer linear "+_anTime+"s 1;-moz-animation:layer linear "+_anTime+"s 1;"
            ,closeText = "layer-close"
            ,cssText = "";

        if(settings.scale){

            //弹出窗口高度如果大于浏览器高度
            //或者宽度大于浏览器宽度
            //或者分辨率小于1024时处理
            if(_height-100 < settings.height || _width-100 < settings.width || _width<1024){
                _scale = 0.78;
                _scale_iframe = _scale;
                _top = _height/2-settings.height*_scale/2;
                _left = _width/2-settings.width*_scale/2;

                //如果浏览器为ie8以下
                if(fnCheckIe()){
                    var _angle = 0
                        ,rad = _angle * (Math.PI / 180)
                        ,m11 = Math.cos(rad) * _scale
                        ,m12 = -1 * Math.sin(rad) * _scale
                        ,m21 = Math.sin(rad) * _scale
                        ,m22 = m11
                        ,_filter = "progid:DXImageTransform.Microsoft.Matrix(M11="+ m11 +",M12="+ m12 +",M21="+ m21 +",M22="+ m22 +",SizingMethod='auto expand')";
                    closeText = "layer-closeie";
                    //_scale_iframe = 1;
                    //cssText = "transform:rotate("+ _angle +"deg) scale("+ _scale +");-webkit-transform:rotate("+ _angle +"deg) scale("+ _scale +");-moz-transform:rotate("+ _angle +"deg) scale("+ _scale +");filter:"+_filter;
                    cssText = "width:"+settings.width*_scale+"px;height:"+settings.height*_scale+"px;overflow:hidden;";
                }
            }
        }

        $(window).resize(function(){
            fnAutoSize(settings.width,settings.height,_scale);
        });

        //创建弹出层结构
        html+="<div id='layer' class='layer' zoom="+_scale+">";
        html+="<div class='mask'></div>";
        html+="<div class='layer-container' style='top:"+_top+"px;left:"+_left+"px;"+_animation+cssText+"'><h2></h2>";
        html+="<div class='layer-content'></div>";
        html+="<div class='"+closeText+"'></div>";
        html+="</div></div>";

        var $layer = $(html)
            ,url = $this.attr("url")
            ,_iframe = "<iframe id='layer-iframe' width='"+settings.width+"' height='"+settings.height+"' src='"+url+"' scrolling='no' frameborder=no style='zoom:"+_scale_iframe+"'></iframe>";
        var isAir = !!getCookie("isclient") && getCookie("kernel") == 2,
            timedelay = isAir?300:0;
        setTimeout(function(){
          //附加弹出窗口
          $layer.find(".layer-content").append($(_iframe).fadeIn());
          $("body").append($layer);

          //关闭弹出窗口
          $(".layer-close,.layer-closeie").on("click",function(){
              if(!fnCheckIe()){
                  $(".layer .mask").css("display","none");
                  $(".layer .layer-container").css({"transform":"scale(0)","-webkit-transform":"scale(0)","-moz-transform":"scale(0)"})
                  .one("transitionend webkitTransitionEnd mozTransitionEnd",function(){
                      $(".layer").detach();
                  });
              }else{
                  $(".layer").detach();
              }
          });
        },timedelay);
    };

    $.confirm = function(a,b,c){
        var $msgbox,$sbt,$cel,msgbox;

        //创建提示框结构
        msgbox="<div class='msgbox'>";
        msgbox+="<div class='msg-mask'></div>";
        msgbox+="<div class='msg-container'>";
        msgbox+="<h2><span></span>提示</h2>";
        msgbox+="<div class='msg-content'>"+a+"</div>";
        msgbox+="<button class='submit'>确定</button>";
        msgbox+="<button class='cancel'>取消</button>";
        msgbox+="</div></div>";
        $("body").append(msgbox);

        $msgbox = $(".msgbox");
        $sbt = $msgbox.find(".submit");
        $cel = $msgbox.find(".cancel");

        $sbt.on("click",function(){
            if(b && typeof b === "function"){
                b(a);
            }else{
                $msgbox.detach();
            }
        });

        $cel.on("click",function(){
            $msgbox.detach();
        })

    }

})(window.jQuery);