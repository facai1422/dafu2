
var  _REGISTER = 'user'

// 切换
$('.table div').on('click',function(){
	var _this = $(this).index();
	restFrom();
	if(_this == 0){
		_REGISTER = 'user'
		$('.forgetPassword').show()
	}else{
		$('.forgetPassword').hide()
		_REGISTER = 'mobile'
	}
	$(this).addClass('cur').siblings('div').removeClass('cur');
	$('.tab-de').eq(_this).show().siblings('.tab-de').hide();
})

function lauerMsg(content){
	layer.open({
	    content: content
	    ,skin: 'msg'
	    ,time: 2 //2秒后自动关闭
	 });
}

function loding(){
	 layer.open({
	    type: 2
	    ,content: '加载 中'
	    ,shadeClose:false
	  });
}

var $image = $('#register-img');
$image.attr('src', mobileManage.getSecurityCodeUrl() + '?' + Math.random());

//设定只能输入数字
NumberInput('register-phone');


//刷新验证码
$image.click(function () {
    $image.attr('src', mobileManage.getSecurityCodeUrl() + '?' + Math.random());
});


// 返回上一步
$('.register1 .btn-back').click(function(){
	$('.register').show();
	$('.register1').hide();
})
// 登录
$('.login .reg-btn').click(function(){
	var _obj  = {
		iphone:$('#regIphone').val(),
		mobileYZM:$('#mobileYZM').val(),

		username:$('#regUserName').val(),
		userpwd:$("#regUserpwd").val(),
		userNpwd:$("#newUserpwd").val(),
		// userYZM:$("#regUserYZM").val(),
	}

    if(!$('.reg-btn').hasClass('cur')) return;

	if(_REGISTER == 'mobile'){
		mobileLogin(_obj)
		$()
	}

	if(_REGISTER == 'user'){
		userLogin(_obj)
	}
})

// 手机注册
function mobileLogin(obj){
	var  _iphone = obj.iphone;
	var  _yzm = obj.mobileYZM;
	if(_iphone == '' || _iphone.length !=11){
		alert('请输入正确的手机号码')
		return;
	} 
	if(_yzm.length !=4){
		alert('请输入4位验证码')
		return;
	}
	var code;

    layer.open({
	    type: 2
	    ,content: '加载 中'
	    ,shadeClose:false
	  });
    // 查询 手机是不是有用户绑定
    $.ajax({
        url: '/mobi/mobileGetUserByphone.php',
        type: 'post',
        data: {phone: _iphone,smsCode:_yzm},
        async: false,
        success: function (res) {
            layer.closeAll()
            var _html = ''
            if(res.message == '短信验证码错误'){
            	lauerMsg('短信验证码错误')
            	 code = 1;
            	return;
            }
            if (res !== null && res !== "" && res.length !== 0) {
                for (var i = 0; i < res.length; i++) {
                        _html += '<li><div class="user-tit"></div>';
                        _html += '<p>' + res[i].data + '</p>';
                        if(res.length>1){
                        	_html += '<i class="r"></i>';
                        }
                        _html += '</li>';
                }
                code = 1;
                $('.register1').show();
                $('.register').hide();
                $('.register1 .user-box .user-list').html(_html)
                return false;
            }
        }
    });
    if (code == 1) {
        return false;
    }
     //开启登入弹窗 showLoginWindow()启动
    function showLoginWindow(item) {
        $('#modal-login').modal('show');
        $("#login_url").val(item);
    }
   
    $.ajax({
        url: '/mobi/newMobileLogin.php',
        type: 'post',
        data: {phone: _iphone, smsCode: _yzm, loginType: '2'},
        async: false,
        success: function (res) {
        	if(res.message=='此号码暂未注册,请先注册!'){
        		layer.open({
        			content:'此号码暂未注册,请先注册!',
        			className: 'popuo-01',
        			btn:['一键注册','取消'],
        			yes:function(){
        				loding()
        				$.post('/mobi/newMobileRegister.php', {
				            phone: _iphone,
				            smsCode: _yzm,
				            registrationType: '2'
				        }, function (res) {
				        	layer.closeAll();
				            if (res.success == true) {
				            	lauerMsg('注册成功')
				                window.location.href = '/mobile/fundsManage.jsp';
				            } else {
				                 lauerMsg(res.message)
				            }
				        })
        			}
        		})
        		return;
        	}
            if (res.success == true) {
                window.location.href = "/mobile/fundsManage.jsp";
            } else {
                lauerMsg(res.message)
                return false;
            }
        }
    });
   

}	

var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; //验证邮箱
// 用户名登录
function userLogin(obj){
  	var  _userName = obj.username;
  	var  _userpwd = obj.userpwd;
  	// var  _userYZM = obj.userYZM;
  	var data={};
  // 	if(_userName == '' || _userName.length<6 || _userName.length>12){
  // 		lauerMsg('请输入正确的用户名')
		// return;
  // 	}
	if(_userpwd == '' || _userpwd.length<8 || _userpwd.length>12){
  		lauerMsg('请输入正确的密码')
		return;
  	}

  	// if(_userYZM.length !=4){
  	// 	lauerMsg('请输入正确的验证码')
  	// 	return;
  	// }

  	if(/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(_userName) == true){
        data.phone = _userName;
        data.password = _userpwd;
        data.loginType = 3;
    }else if(emailReg.test(_userName) === true){
    	data.email = _userName;
        data.password = _userpwd;
        data.loginType = 4;
    }else{
        data.account = _userName;
        data.password = _userpwd;
        // data.imageCode = _userYZM;
        data.loginType = 1;
    }
    $.ajax({
        url:'/mobi/newMobileLogin.php',
        type:'post', 
        data:data,
        success:function(res){
            if(res.success == true){
             	lauerMsg("登录成功！")
         	  	if(_userName.slice(0,2) == 'a_'){
                         window.location.href ='/mobile/agentHistory.jsp'
                }else{
                    window.location.href = "/mobile/fundsManage.jsp";
                }
                return false;
            }else{
                lauerMsg(res.message)
                return false;
            }
        } 
    });

}	

var iphoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;  //验证手机是否合法
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数

// 点击获取验证码
$('.register .yzb-btn').on('click',function(){
	var iphone = $('#regIphone').val();
	if(!iphoneReg.test(iphone)){
		alert('请输入正确的手机号码')
		return;
	}

	curCount = count;
	if(curCount !=60) return;
	//设置button效果，开始计时
	$(".yzb-btn").attr("disabled", "disabled");
	$(".yzb-btn").addClass('cur');
	mobileCode(iphone)
	InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
});
// 定时器
function SetRemainTime() {
	if (curCount == 0) {                
		window.clearInterval(InterValObj);//停止计时器
		$(".yzb-btn").removeAttr("disabled");//启用按钮
		$(".yzb-btn").removeClass('cur');
		$(".yzb-btn").val("重新获取");
	}else {
		curCount--;
		$(".yzb-btn").val("" + curCount + "s后获取");
	}
}

// 获取手机验证码


function mobileCode(phone){
	$.post('/mobi/mobileSendSmsCodeForUser.php', {phone: phone}, function (res) {
		if(res.message == '该手机号暂未注册,请先注册'){
			 layer.open({
		    content: '该手机号暂未注册,请先注册'
		    ,className: 'popuo-01'
		    ,btn: ['去注册', '取消']
		    ,yes: function(index){
		    	window.location.href="/mobile/register.jsp";
		    }
		    });
			return;
		}
		lauerMsg(res.message)
    });
}

// 监控是否达到条件
$('#regIphone ,#mobileYZM').on('keyup change',function(){
	var iphone = $('#regIphone').val();
	var mobileYZM=$('#mobileYZM').val();

	if(iphoneReg.test(iphone) && mobileYZM.length == 4){
		$('.reg-btn').addClass('cur')
	}else{
		$('.reg-btn').removeClass('cur')
	}
})

// 监控是否达到条件   ,#regUserYZM
$('#regUserName ,#regUserpwd').on('keyup change',function(){
	var username=$('#regUserName').val();
	var userpwd=$("#regUserpwd").val();
	// var userYZM=$("#regUserYZM").val();

	$('.reg-btn').removeClass('cur')
	// if(username == '' || username.length<6 || username.length>12){
	// 	return;
 //  	}

  	if(userpwd == '' || userpwd.length<8 || userpwd.length>12){
		return;
  	}

  	// if(userYZM.length !=4){
  	// 	return;
  	// }
  	$('.reg-btn').addClass('cur')
})

//情空
function restFrom(){
	$('#regUserName').val('');
	$("#regUserpwd").val('');
	// $("#regUserYZM").val('');
	$('#regIphone').val('');
	$('#mobileYZM').val('');
	$('.reg-btn').removeClass('cur')
}

/*******************************************************/ 

// 自己的账号理解注册
$('.register1 .btn-box .btn-y').click(function(){
	var _username = $('.user-list .cur');
	var _iphone =$('#regIphone').val()
	if($('.user-list li').length >1 && $('.user-list .cur').length==0){
		lauerMsg('请选择账号')
		return;
	}

	if($('.user-list li').length ==1){
		_username =$('.user-list li').eq(0).text()
	}else{
		_username = $('.user-list .cur p').text()
	}

	 var  _html='<div class="user-verification"><p>验证游戏账号<br/>'+_username+'</p><input placeholder="请输入完整的游戏账号" class="reg1-user-name"></div>'
	  layer.open({
	    content: _html
	    ,className: 'popuo-01'
	    ,btn: ['确定', '取消']
	    ,yes: function(index){
	      var _name = $('.reg1-user-name').val();
	      console.log(_name)
	      $.ajax({
	        url: '/mobi/newMobileLogin.php',
	        type: 'post',
	        data: {phone: _iphone,name:_name,loginType:5},
	        async: false,
	        success: function (response) {
	        	if(response.success){
	        		lauerMsg('注册成功')
	        		window.location.href = '/mobile/fundsManage.jsp';
	        		return;
	        	}
	        	 lauerMsg(response.message)
	        }
	    });
	      layer.close(index);
	    }
	  });
})

$('.register1  .btn-box .btn-b').click(function(){
	var _iphone=$('#regIphone').val();
	var	_mobileYZM=$('#mobileYZM').val();
	loding()
	 $.post('/mobi/newMobileRegister.php', {
            phone: _iphone,
            smsCode: _mobileYZM,
            registrationType: '2'
        }, function (res) {
        	layer.closeAll()
            if (res.success == true) {
            	lauerMsg('注册成功')
                window.location.href = '/mobile/fundsManage.jsp';
            } else {
                 lauerMsg(res.message)
            }
        })
})

$('.register1  .user-list').on('click','li',function(){
	$(this).addClass('cur').siblings().removeClass('cur')
})

// 控制密码显示隐藏
var _password=false;
$('.user-name .eye').click(function(){
	_password = !_password;
	$(this).siblings('input').attr('type',_password?'password':'text')
	if(_password){
		$(this).addClass('icon-yincang').removeClass('icon-xianshi')
		return
	}
	$(this).addClass('icon-xianshi').removeClass('icon-yincang')
	
})