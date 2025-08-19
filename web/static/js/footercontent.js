/**
 * 最下方的内容方块
 */
function FooterContent(selector){
	var that = this;
	var _$footer = false;
	var _$items = false;
	var _browseWay = '';
	var _footerText = 'PT游戏是由PT TransPacific在PAGCOR&nbsp;<img src="/images/i-pagcor.png?v=1">&nbsp;的授权下部署';
	var _itemData = [
	    {id:'regist',text:'立即注册'},
		{id:'mobile',text:'手机网页版'},
		{id:'desktop',text:'电脑版'},
		{id:'app',text:'APP版'},
		{id:'appDownload',text:'APP下载'}
	];
	if(sessionStorage['webapp']==='true'){
		var pos = _itemData.map(function(e){return e.id;}).indexOf('app');
		_itemData.splice(pos, 1);
		var pos2 = _itemData.map(function(e){return e.id;}).indexOf('appDownload');
		_itemData.splice(pos2, 1);
	}
	/*var _footerHtml = [
		'<div class="footer-content">', 
		'	<div class="items"></div>',
		'	<div class="text">{0}</div>',
        '</div>'
    ].join('');

	var _footerContentMarginHtml = '<div class="footer-content-margin"></div>';
*/
	var _itemHtml = '<div class="item mui-col-xs32-{0} {1}">{2}</div>';
	
	_init();
	
	function _init(){
		if(_$footer)return;
		_browseWay = sessionStorage['browseWay'];
		
		if(!_browseWay){
			if(webapp.isWebApp()){
				_browseWay = 'app';
			}else if(isMobile()){
				_browseWay = 'mobile';
			}else{
				_browseWay = 'desktop';
			}
			sessionStorage['browseWay'] = _browseWay;
		}else{
			if(webapp.isWebApp()){
				_browseWay = 'app';
			}else{
				_browseWay = 'mobile';
			}
			sessionStorage['browseWay'] = _browseWay;
		}
		
		//如果是App开启
//		if(webapp.isWebApp()){
//			_itemData = [
//	     		{id:'mobile',text:'手机网页版'}
//	     	];
//		}
		
		/*_$footer = $(String.format(_footerHtml,_footerText));
		_$items = _$footer.find('.items');
		_$items.append(_getItemsHtml(_browseWay));
		_$items.find('.item').click(_active);
		_$items.find('.'+_browseWay).addClass('active');
		
		_$footerContentMargin = $(_footerContentMarginHtml);
		
		$(selector).append(_$footer);
		$(selector).append(_$footerContentMargin);

		//计算下面要空出多少高度
		_$footerContentMargin.height($('.footer-content').height()+20);
		*/
	}
	
	function _getItemsHtml(active){
		var array = [];
		var c = 12/_itemData.length;
		for(var i in _itemData){
			array.push(String.format(_itemHtml,c,_itemData[i].id,_itemData[i].text));
		}
		return array.join('');
	}
	
	/**
	 * 选取
	 */
	function _active(e){
		if(this.className.indexOf('appDownload')!=-1){
			
			$.ajax({
	            url : "/asp/checkAgentURLogin.php",
	            type : "post",
	            dataType : "text",
	            success : function(data) {
	            	if('false' == data){
	            		alert('您好，请先登录游戏账号，若无账号，请先进入网页注册!');
						mobileManage.getModel().open('login',['index']);
	            	} else {
	            		webapp.openBrowser('https://support.qnappat01.com/APP/web/app.html');
	            	}
	            }
	        });
			
			/*if(window.agentCode == 'undefind' || window.agentCode == null || window.agentCode == ''){
				webapp.openBrowser('http://www.yabo920.com/');
			} else {
				webapp.openBrowser(window.location.origin+'/appAgent.html?v=1');
			}*/
			//webapp.openBrowser(window.location.origin+'/app.html?v=1');
			//webapp.openBrowser('http://www.yabo920.com/');
			return;
		}
		_$items.find('.item').removeClass('active');
		$(this).addClass('active');
		if(this.className.indexOf('mobile')!=-1){
			sessionStorage['browseWay'] = 'mobile';
			webapp.redirect(window.location.origin+'/mobile/index.jsp');
		}else if(this.className.indexOf('desktop')!=-1){
			sessionStorage['browseWay'] = 'desktop';
			webapp.redirect(window.location.origin);
		}else if(this.className.indexOf('app')!=-1){
//			alert('功能尚未开放！');
//			return;
//			sessionStorage['browseWay'] = 'app';
			window.location.href = 'yahuwebapp://';
		}else if(this.className.indexOf('regist')!=-1){
			mobileManage.redirect('register');
		}
	}
	
}