$(function(){
	//$(".registerform").Validform();  //就这一行代码！;
		
	var demo=$("#form1,.yz_form").Validform({
		tiptype:3,
		label:".label",
		showAllError:false,
		datatype:{
			"zh1-6":/^[\u4E00-\u9FA5\uf900-\ufa2d]{1,6}$/,    //中文
			"bank":/^[0-9]{10,19}$/,       					//银行卡
			"idcard":function(gets,obj,curform,datatype){         //身份证
				//该方法由佚名网友提供;
			
				var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];// 加权因子;
				var ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];// 身份证验证位值，10代表X;
			
				if (gets.length == 15) {   
					return isValidityBrithBy15IdCard(gets);   
				}else if (gets.length == 18){   
					var a_idCard = gets.split("");// 得到身份证数组   
					if (isValidityBrithBy18IdCard(gets)&&isTrueValidateCodeBy18IdCard(a_idCard)) {   
						return true;   
					}   
					return false;
				}
				return false;
				
				function isTrueValidateCodeBy18IdCard(a_idCard) {   
					var sum = 0; // 声明加权求和变量   
					if (a_idCard[17].toLowerCase() == 'x') {   
						a_idCard[17] = 10;// 将最后位为x的验证码替换为10方便后续操作   
					}   
					for ( var i = 0; i < 17; i++) {   
						sum += Wi[i] * a_idCard[i];// 加权求和   
					}   
					valCodePosition = sum % 11;// 得到验证码所位置   
					if (a_idCard[17] == ValideCode[valCodePosition]) {   
						return true;   
					}
					return false;   
				}
				
				function isValidityBrithBy18IdCard(idCard18){   
					var year = idCard18.substring(6,10);   
					var month = idCard18.substring(10,12);   
					var day = idCard18.substring(12,14);   
					var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));   
					// 这里用getFullYear()获取年份，避免千年虫问题   
					if(temp_date.getFullYear()!=parseFloat(year) || temp_date.getMonth()!=parseFloat(month)-1 || temp_date.getDate()!=parseFloat(day)){   
						return false;   
					}
					return true;   
				}
				
				function isValidityBrithBy15IdCard(idCard15){   
					var year =  idCard15.substring(6,8);   
					var month = idCard15.substring(8,10);   
					var day = idCard15.substring(10,12);
					var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));   
					// 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
					if(temp_date.getYear()!=parseFloat(year) || temp_date.getMonth()!=parseFloat(month)-1 || temp_date.getDate()!=parseFloat(day)){   
						return false;   
					}
					return true;
				}
				
			}
		},
		ajaxPost:false   //是否用ajax提交
	});
	
	//通过$.Tipmsg扩展默认提示信息;
	//$.Tipmsg.w["zh1-6"]="请输入1到6个中文字符！";
	demo.tipmsg.w["zh1-6"]="请输入1到6个中文字符！";
	demo.addRule([{
		ele:".yz_name",    //姓名
		datatype:"zh2-16"
	},
	{
		ele:".yz_user",     //用户名
		datatype:"s5-16"
	},
	{
	    ele: ".yz_user2",     //用户名
	    datatype: "sn"
	},
	{
		ele:".yz_passwrod",  //密码
		datatype:"*5-16"
	},
	{
		ele:".yz_mail",     //邮箱
		datatype:"e"
	},
	{
		ele:".yz_sfz",     //身份证
		datatype:"idcard"
	},
	{
		ele:".yz_empty",   //是否空
		datatype:"*"
	},
	{
		ele:".yz_phone",   //手机号
		datatype:"m"
	},
	{
		ele:".yz_qq",      //qq
		datatype:"n5-11"
	},
	{
		ele:".yz_card",    //银行卡
		datatype: "bank"
	},
	{
		ele:".yz_kh",    //开户行
		datatype:"zh4-30"
	},
	{
		ele:".yz_num",    //开户行
		datatype:"n"
	},
	{
	    ele: ".yz_me",    //财付通账号
	    datatype: "me"
	}]);
	
})