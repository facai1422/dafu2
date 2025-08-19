$(function(){


    $("#ajaxlogin").on('click',function(){
		
        var username = $("#username").val();
        var passwd = $("#passwd").val();
        var piccode = $("#piccode").val();
        if(!username){
            alert( '请输入用户名');return false;
        }
        if(!passwd){
            alert('请输入密码');return false;
        }
        if(!piccode){
            alert('请输入验证码');return false;
        }
        
		var para = {};
		para.username = username;
		para.passwd = passwd;
		para.piccode = piccode;
		$.ajax({
			url: '/Indexno/ajaxlogin/',
			type: 'post',
			dataType: 'json',
			data : para,
			success: function (data) {
				if (data.success) {
					window.location.href="/Indexno/index"
				} else {
					alert(data.msg);
				}
			},
			error: function (data) {
			}
		});
			
    })
	/*
    $(document).on('click','#guest-go',function(){
        $.getJSON('/?a=guest',function(data){
            if(data.code==0){
                window.location.href="/pc.php?c=pc&a=agreement";
            }else{
                alert('注册游客失败，请重试');return false;
            }
        })
        return false;
    });
    $(document).on('click','.guest-go',function(){
        $.getJSON('/?a=guest',function(data){
            if(data.code==0){
                window.location.href="/pc.php?c=pc&a=agreement";
            }else{
                alert('注册游客失败，请重试');return false;
            }
        })
        return false;
    });
	*/
})