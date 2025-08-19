<include file="Public/header" />
<link rel="stylesheet" href="__CSS__/userHome.css">
<link rel="stylesheet" href="/Template/Mobile/khddcs/zhuche1.css">
<body style="background-image: url(/khddimg/entry-bg-4ad76d67302f5d3892e9634ea8024d77.jpg);background-size: 100% 100%;">
<script>

</script>
<div class="main-wrap">
    <div class="content register  login">
        <div class="table">
        </div>
       <div class="sc-12t80tq-1 dLYIoM">
    <div class="sc-1kukyib-0 fPfeDV">
        <div class="sc-1kukyib-1 iGEidw active" style="color: #fff;">用户注册</div>
    </div>
    <div class="pc4dod-0 jWaGVK">
        <div class="sc-6xd6tf-0 kbDsyl" >
<form method="post" action="{:U('Public/register')}"  class="ruivalidate_form_class" onSubmit="return check_form(this)" id="form1">
    <ul class="bank_form_list">
			<if condition="empty($tgid)">
			</if>
                <li class="am-cf">
				<span class="bank_form_left am-fl"style="color: #fff;">邀请码</span>
				<div class="am-fr bank_right_input">
          <present name="linkinfo"><input type="hidden" name="linkid" value="{$linkinfo.id}"  />
          <input type="text" <if condition="!empty($tgid)">readonly value="{$tgid}"</if> id="reccode" name="reccode" class="input_txt" placeholder="请输入推荐码" />
				</div
			</li>
			<li class="am-cf">
				<span class="bank_form_left am-fl"style="color: #fff;">账号</span>
				<div class="am-fr bank_right_input">
					<input type="text"  name="username" id="username" class="input_txt" placeholder="请输入账号">
				</div>
			</li>
			<li class="am-cf">
				<span class="bank_form_left am-fl"style="color: #fff;">设置密码</span>
				<div class="am-fr bank_right_input">
					<input type="password" name="password" id="password" class="input_txt" placeholder="请输入密码">
				</div>
			</li>
			<li class="am-cf">
				<span class="bank_form_left am-fl"style="color: #fff;">确认密码</span>
				<div class="am-fr bank_right_input">
					<input type="password"  name="cpassword" id="cpassword" class="input_txt" placeholder="请再次输入密码">
				</div>
			</li>
			<li class="am-cf" style="position:relative;">
				<span class="bank_form_left am-fl"style="color: #fff;">提款密码</span>
				<div class="am-fr bank_right_input" style="padding-top: 8px;;">
					<input type="password"  name="tradepassword" id="tradepassword" class="input_txt" placeholder="请输入提款密码">
				
        <div class="forgetPassword">
        <div class="pc4dod-1 htdQTn">
            <button class="pc4dod-2 iDBetw">
                <a href="#">相关条款</a></button></div>
                	<button style="margin-top:0.1rem;" class="sc-13e3lr-0 Kzwch" type="submit">立即注册</button></form></div>
                	
        <div class="sc-1jz5tkq-0 kOylbB">
                <a href="{:U('Public/login')}" >返回</a></div>


<script>
	$("#username").blur(function(){
		var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
		if(reg.test($(this).val())){
			alert('账号不能含有汉字');
			$(this).val('');
		}
		
	})
	$("#password").blur(function(){
		var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
		if(reg.test($(this).val())){
			alert('密码不能含有汉字');
			$(this).val('');
		}
		
	})
	$("#tradepassword").blur(function(){
		var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
		if(reg.test($(this).val())){
			alert('提款密码不能含有汉字');
			$(this).val('');
		}
		
	})
	function check_form(obj) {
       $.ajax({
		   url : "{:U('Public/register')}",
		   type : 'POST',
		   data : $("#form1").serialize(),
		   success : function (data) {
			   if(data.sign==true){
				   alert("恭喜你!注册成功");
				   window.location.href= "{:U('Member/index')}"
			   }else{
				   alert(data.message);
			   }
		   }
	   })
		return false;
	}
</script>
</body>
</html>