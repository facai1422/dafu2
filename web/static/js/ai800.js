//chatfrom:pc/wap/ios/android,app启动需要用后两者。PT客户端可以先用pc，后期可能会单独列出来
function getCsOnDutyAi(chatfrom, infoValue){
	var domain =  window.location.protocol + "//" + window.location.host;
	var serviceURL = "https://chatai.l8servicept777.com/chat/chatClient/chatbox.jsp?companyID=9036&configID=149&chatfrom=pc&live800_domain=" + domain;
	if(chatfrom != null && chatfrom != ''){
		serviceURL += "&chatfrom=" + chatfrom;
	}
	if(infoValue != null && infoValue != ''){
		serviceURL += "&info=" + infoValue;
	}
	window.open(serviceURL);
}

