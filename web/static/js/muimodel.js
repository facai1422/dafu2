/**
 * 依赖MUI 设计的Model
 */
function MUIModel(manage, muiObj) {
    if (typeof manage !== 'object') {
        alert('mobileManage error');
        return;
    }
    if (typeof muiObj !== 'object') {
        alert('mui error');
        return;
    }
    var that = this;
    //当前的model
    var _$currentModel = false;
    var _$currentId = false;

    //动作对应方法
    var _actionFn = {
        // 'login': _getLogin,
        'logout': _getLogout,
        'makeCall': _getMakeCall,
        'modifyPassword': _getModifyPassword,
        'question': _getQuestion,
        'news': _getNews,
        'download': _getDownload,
        'bankBind': _getBankBind,
        'Unbank': _getUnBank,
        'goGame': _getGoGame,
        'sign': _getSign,
        'zfbBind': _getZfbBind,
        'confirm': _getConfirm,
        'emigrated': _getEmigrated,
        'fightTeam': _getFightTeam,
        'goOrDownload': _getGoOrDownloadGame,
        'goOrDownloadDT': _getGoOrDownloadGameDT,
        'gameAccountBind': _getGameAccountBind,
        'goGameOrFunGame': _getGoGameOrFunGame,
        'goGameOrDownloadGame': _goGameOrDownloadGame,
        'withdrawalConfirm': _withdrawalConfirm
    };

    var _$loginModel = false;
    var _$logoutModel = false;
    var _$makeCallModel = false;
    var _$modifyPasswordModel = false;
    var _$questionModel = false;
    var _$newsModel = false;
    var _$downloadModel = false;
    var _$bankBindModel = false;
    var _$UnbankModel = false;
    var _$goGameModel = false;
    var _$signModel = false;
    var _$zfbDepositBindModel = false;
    var _$confirmModel = false;
    var _$emigratedModel = false;
    var _$fightTeamModel = false;
    var _$transferGameModel = false;
    var _$goOrDownloadGameModel = false;
    var _$goOrDownloadDTGameModel = false;
    var _$goGameOrFunGameModel = false;
    var _$goGameOrDownloadGameModel = false;
    var _$withdrawalConfirmModel = false;

    //视窗改变时，去变更top位置
    $(window).resize(function () {
        if (_$currentModel) {
            _checkHeight(_$currentModel);
        }
    });

    //登录 html
    var _loginModelHtml = [
        '<div class="mui-panel" style="height: 100%;">',
        '<div class="space-3"></div>',
        '<div class="content-box mui-col-xs32-12" style="height: 90%;">',
        '<i id="closelogin" class="icon iconfont icon-close" style="position: absolute;left: 25px;color: #ffffff;"></i>',
        '<div class="mui-col-xs32-12">',
        '<div class="space-3"></div>',
        '<div class="space-1"></div>',
        '<div class="mui-textfield" style="text-align: center;">',
        '<img src="/mobile/images/index/login_long.png" style="width: 50%">',
        '</div>',
        '<span class="space-3"></span>',
        '<span class="space-3"></span>',
        '<div class="mui-textfield">',
        // '<label>账号：</label>',
        '<i class="iconfont icon-register_account"></i>',
        '<input id="mui-login-account"  style="padding-left: 40px;" type="text" placeholder="请输入游戏账号" required>',
        '<div class="message"></div>',
        '</div>',
        '<div class="space-2"></div>',
        '<div class="mui-textfield">',
        // '<label>密码：</label>',
        '<i class="iconfont icon-register_password"></i>',
        '<input id="mui-login-password" style="padding-left: 40px;" class="login-password" type="password" placeholder="请输入游戏密码" required>',
        '</div>',
        '<div class="space-1"></div>',
        '<a href="/mobile/selfService.jsp" style="float: right;color: #d1be74"">忘记密码?</a>',
        /*'<span class="space-1"></span>',
         '<div class="mui-textfield">',
         '<label>验证码：</label>',
         '<input id="mui-login-code" class="login-code" style="float:left;" type="text" placeholder="请输入验证码" required>',
         '<img id="mui-login-img" title="如果看不清验证码，请点图片刷新" style="width:35%;margin-top: 4%"/>',
         '</div>,*/
        '<br>',
        '<div class="mui-error-message"></div>',
        '<div class="space-1"></div>',
        '<div class="mui-btn mui-btn--raised mui-btn--brown mui-col-xs32-12" style="height: 40px;font-size: 17rem" id="mui-login-submit">登录</div>',
        '<div class="space-3"></div>',
        '<div style="text-align: center;color: #999999">还没帐号？<span style="color: #d1be74" onclick="window.location.href=\'/mobile/register.jsp\'">立即注册</span></div>',
        '<div class="space-2"></div>',
        '</div>',
        '</div>',
        '<div style="text-align: center;">',
        '       <div class="phone-footer">',
        '           亚博娱乐持有菲律宾 PAGCOR 合法博彩执照',
        '       </div>',
        '</div>',
        '</div>',

        '</div>'
    ].join('');

    //登出 html
    var _logoutModelHtml = [
        '<div id="mui-logout-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1">',
        '<div class="mui-overlay-title"><div class="mui-overlay-title-text flaticon-logout13">会员登出</div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel">',
        '<div class="mui-overlay-message">确定要登出？</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--brown block" id="mui-logout-submit">退出</div>',
        // '<span class="space-1"></span>',
        // '<div class="mui-btn mui-btn--raised mui-btn--pink block" id="mui-logout-cancel">取消</div>',
        '</div>',
        '</div>'
    ].join('');

    //电话回拨 html
    var _makeCallModelHtml = [
        '<div id="mui-makeCall-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1">',
        /*'<div class="mui-overlay-title"><div class="mui-overlay-title-text flaticon-phone41">电话回拨</div><div class="mui-overlay-close "></div></div>',*/
        '<div class="mui-panel">',
        '<div class="space-3"></div>',
        '<div class="mui-overlay-message"></div>',
        '<div class="mui-textfield mui-textfield--float-label mui-col-xs32-11">',
        /*'<div class="message">1 若回拨给注册电话，直接点回拨即可</div>',*/
        '<div class="message">* 请输入手机号码后，再点击电话回拨</div>',
        '<div class="space-1"></div>',
        '<input id="mui-makeCall-phone" type="text" placeholder="这里输入联系号码">',
        '</div>',
        '<div class="space-2"></div>',
        '<div class="mui-overlay-message"></div>',
        '<div class="mui-btn mui-btn--raised mui-btn--brown mui-col-xs32-6 right" id="mui-makeCall-submit">电话回拨</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--gray mui-col-xs32-6 left" id="mui-makeCall-cancel">取消</div>',
        '</div>',
        '</div>'
    ].join('');


    //修改密码 html
    var _modifyPasswordModelHtml = [
        '<div id="mui-modifyPassword-model">',
        '<div class="main-top-header"></div>',
        '<div class="mui-panel content-box mui-col-xs32-12" style="height: 100%">',
        '<div class="space-1"></div>',
        '<div class="mui-error-message"></div>',

        '<div class="space-2"></div>',
        '<div class="mui-col-xs32-12">',
        '<div class="title mui-col-xs32-4">旧密码</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="mui-modifyPassword-password" type="password" placeholder="密码为8-12位数字或英文字母" required>',
        '</div>',
        '</div>',

        '<div class="space-2"></div>',
        '<div class="mui-col-xs32-12">',
        '<div class="title mui-col-xs32-4">新密码</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="mui-modifyPassword-newPassword" type="password" placeholder="密码为8-12位数字或英文字母" required>',
        '</div>',
        '</div>',

        '<div class="space-2"></div>',
        '<div class="mui-col-xs32-12">',
        '<div class="title mui-col-xs32-4">确认密码</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="mui-modifyPassword-confirmPassword" type="password" required placeholder="再次输入密码，确认新密码无误">',
        '</div>',
        '</div>',

        '<div class="mui-col-xs32-12">',
        '<div class="space-2"></div>',
        '<div class="title mui-col-xs32-4">密保问题</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="account-question" type="text" readonly>',
        '</div>',
        '</div>',

        '<div class="mui-col-xs32-12" id="question-show" style="display: none">',
        '<div class="space-2"></div>',
        '<div class="title mui-col-xs32-4">密保问题</div>',
        '<div class="input-msg mui-select mui-col-xs32-8">',
        '<select id="mui-question-question"></select>',
        '</div>',
        '</div>',

        '<div class="mui-col-xs32-12"  id="answer-show" style="display:none;">',
        '<div class="space-2"></div>',
        '<div class="title mui-col-xs32-4">你的回答</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="mui-question-answer" type="text" required>',
        '</div>',
        '</div>',

        '<div class="space-2"></div>',
        '<div class="mui-btn mui-col-xs32-12">',
        '<div class="mui-btn mui-col-xs32-12 mui-btn--raised mui-btn--brown block" id="mui-modifyPassword-submit">修改',
        '</div>',
        '</div>',

        '<div class="space-1"></div>',
        '<div class="mui-btn mui-col-xs32-12">',
        '<div class="mui-btn mui-overlay-close mui-col-xs32-12 mui-btn--raised mui-btn--gray block"  id="mui-modifyPassword-cancel">返回',
        '</div>',
        '</div>',


        '</div>',
        '</div>'
    ].join('');


    //密保问题 html
    var _questionModelHtml = [
        '<div id="mui-question-model" >',
        '<div class="main-top-header"></div>',
        '<div class="mui-panel mui-col-xs32-12" style="height: 100%">',
        '<div class="mui-error-message"></div>',

        '<div class="mui-col-xs32-12">',
        '<div class="space-2"></div>',
        '<div class="title mui-col-xs32-4">密保问题</div>',
        '<div class="input-msg mui-select mui-col-xs32-8">',
        '<select id="mui-question-question"></select>',
        '</div>',
        '</div>',

        '<div class="mui-col-xs32-12">',
        '<div class="space-2"></div>',
        '<div class="title mui-col-xs32-4">你的回答</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="mui-question-answer" type="text" required>',
        '</div>',
        '</div>',

        '<div class="space-2"></div>',
        '<div class="mui-col-xs32-12">',
        '<div class="title mui-col-xs32-4">登录密码</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="mui-question-password" type="password" required>',
        '</div>',
        '</div>',


        '<div class="space-2"></div>',
        '<div class="mui-btn mui-col-xs32-12">',
        '<div class="mui-btn mui-col-xs32-12 mui-btn--raised mui-btn--brown block" id="mui-question-submit">设定',
        '</div>',
        '</div>',

        '<div class="space-1"></div>',
        '<div class="mui-btn mui-col-xs32-12">',
        '<div class="mui-btn mui-col-xs32-12 mui-btn--raised mui-btn--gray block" id="mui-question-cancel">返回',
        '</div>',
        '</div>',

        '</div>'
    ].join('');

    //新闻动态 html
    var _newsModelHtml = [
        '<div id="mui-news-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1">',
        '<div class="mui-overlay-title"><div id="mui-news-title" class="mui-overlay-title-text flaticon-speechbubble96"></div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel">',
        '<div id="mui-news-message" class="mui-overlay-message"></div>',
        '<div class="mui-btn mui-btn--raised mui-btn--primary right" id="mui-news-next">下一条</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--primary right" id="mui-news-last">上一条</div>',
        '</div>',
        '</div>'
    ].join('');


    //银行卡/支付宝绑定 html
    var _bankBindModelHtml = [
        '<div id="mui-bankBind-model" >',
        '<div class="main-top-header"></div>',
        //'<div class="mui-overlay-title"><div class="mui-overlay-title-text flaticon-closed">银行卡绑定</div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel user-info2 content-box mui-col-xs32-12" style="height:100%;">',

        '<div class="space-2"></div>',
        '<div class="mui-col-xs32-12">',
        '<div class="title mui-col-xs32-4">绑定类型</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="mui-bankBind-bankName" type="text" readonly>',
        '</div>',
        '</div>',

        '<div class="space-2"></div>',
        '<div class="mui-col-xs32-12">',
        '<div class="title mui-col-xs32-4">银行卡号</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="mui-bankBind-cardNo" type="text" placeholder="请您输入正确的银行卡将自动识别" required>',
        '</div>',
        '</div>',

        '<div class="mui-col-xs32-12">',
        '<div class="space-2"></div>',
        '<div class="title mui-col-xs32-4">密保问题</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="account-question" type="text" readonly>',
        '</div>',
        '</div>',


        '<div class="mui-col-xs32-12"  id="question-show" style="display: none">',
        '<div class="space-2"></div>',
        '<div class="title mui-col-xs32-4">密保问题</div>',
        '<div class="input-msg mui-select mui-col-xs32-8">',
        '<select id="mui-question-question"></select>',
        '</div>',
        '</div>',

        '<div class="mui-col-xs32-12" id="answer-show" style="display:none;">',
        '<div class="space-2"></div>',
        '<div class="title mui-col-xs32-4">你的回答</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="mui-question-answer" type="text" required>',
        '</div>',
        '</div>',

        '<div class="space-2"></div>',
        '<div class="mui-col-xs32-12">',
        '<div class="title mui-col-xs32-4">游戏账户密码</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="mui-bankBind-password" type="password" required autocomplete="new-password">',
        '</div>',
        '</div>',


        /*'<div class="space-1"></div>',
         '<div class="mui-textfield">',
         '<input id="mui-bankBind-bindingCode" type="text" required>',
         '<label>验证码</label>',
         '</div>',*/
        '<div id="mui-bankBind-buttons" class="mui-buttons center">',
        '<div class="mui-message">支付宝账户需透过语音/短信验证取得验证码才可绑定！</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--qranges small" id="mui-bankBind-voice">语音验证</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--qranges small" id="mui-bankBind-sms">短信验证</div>',
        '</div>',

        '<div class="space-2"></div>',
        '<div class="mui-btn mui-col-xs32-12">',
        '<div class="mui-btn mui-col-xs32-12 mui-btn--raised mui-btn--brown block" id="mui-bankBind-submit">确认绑定',
        '</div>',
        '</div>',

        '<div class="space-1"></div>',
        '<div class="mui-btn mui-col-xs32-12">',
        '<div class="mui-btn mui-overlay-close mui-col-xs32-12 mui-btn--raised mui-btn--gray block">返回',
        '</div>',
        '</div>',

        '<div class="space-3"></div>',
        '<div class="space-3"></div>',
        '</div>',
        '</div>'
    ].join('');

    //解除银行卡 html
    var _UnbankModelHtml = [
        '<div id="mui-bankBind-model" class="mui-col-xs32-12">',
        '<div class="main-top-header"></div>',
        //'<div class="mui-overlay-title"><div class="mui-overlay-title-text flaticon-closed">银行卡绑定</div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel content-box mui-col-xs32-12" style="height:100%;">',
        '<div>',

        '<div class="space-2"></div>',
        '<div class="mui-col-xs32-12">',
        '<div class="title mui-col-xs32-4">解除绑定银行</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<div id="withdrawal-bankName"></div>',
        '</div>',
        '</div>',



        '<div class="mui-col-xs32-12">',
        '<div class="space-2"></div>',
        '<div class="title mui-col-xs32-4">密保问题</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="account-question" type="text" readonly>',
        '</div>',
        '</div>',

        '<div class="mui-col-xs32-12" id="question-show" style="display: none">',
        '<div class="space-2"></div>',
        '<div class="title mui-col-xs32-4">密保问题</div>',
        '<div class="input-msg mui-select mui-col-xs32-8">',
        '<select id="mui-question-question"></select>',
        '</div>',
        '</div>',

        '<div class="mui-col-xs32-12"   id="answer-show" style="display:none;">',
        '<div class="space-2"></div>',
        '<div class="title mui-col-xs32-4">你的回答</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="mui-question-answer" type="text" required>',
        '</div>',
        '</div>',

        '<div class="mui-col-xs32-12">',
        '<div class="space-2"></div>',
        '<div class="title mui-col-xs32-4">游戏账户密码</div>',
        '<div class="input-msg mui-textfield mui-col-xs32-8">',
        '<input id="mui-bankBind-password" type="password" required>',
        '</div>',
        '</div>',

        '<div class="space-1"></div>',
        '<div class="mui-btn mui-col-xs32-12">',
        '<div class="mui-btn mui-overlay-close mui-col-xs32-12 mui-btn--raised mui-btn--brown block" id="mui-bankBind-submit">确认解除绑定',
        '</div>',
        '</div>',

        '<div class="space-1"></div>',
        '<div class="mui-btn mui-col-xs32-12">',
        '<div class="mui-btn mui-overlay-close mui-col-xs32-12 mui-btn--raised mui-btn--gray block">返回',
        '</div>',
        '</div>',
        '</div>'
    ].join('');


    //进入游戏 html
    var _goGameModelHtml = [
        '<div id="mui-goGame-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1">',
        '<div class="mui-overlay-title"><div id="mui-goGame-title" class="mui-overlay-title-text"></div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel">',
        '<div class="mui-error-message"></div>',
        '<div id="mui-goGame-message" class="mui-overlay-message"></div>',
        '<div class="mui-btn mui-btn--raised mui-btn--pink right" id="mui-goGame-cancel">取消</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--primary right" id="mui-goGame-submit">进入游戏</div>',
        '</div>',
        '</div>'
    ].join('');


    //签到 html
    var _signModelHtml = [
        '<div id="mui-sign-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1">',
        '<div class="mui-overlay-title"><div class="mui-overlay-title-text flaticon-hand132">签到有奖，惊喜不断</div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel">',
        '<div class="mui-overlay-message">',
        '本月总存款：<font id="mui-sign-money" color="red"></font>元<br>',
        '签到余额：<font id="mui-sign-signMoney" color="red"></font>元<br><br>',
        '签到条件：',
        '<p style="font-size:80%">当月存款满<font color="red">100</font>以上，即可进行活动。</p><br>',
        '签到方式：',
        '<p style="font-size:80%">1.由下方"签到"按钮直接签到。</p><br>',
        '<p style="font-size:80%">2.至账户中心点击"签到"。</p><br>',
        '详细活动内容，请至 <div style="color:#2C6AE0;text-decoration: underline;display: inline-block;" onclick="mobileManage.redirect(\'preferential\')">优惠活动</div>查询。',
        '</div>',
        '<div class="mui-buttons">',
        '<div class="mui-btn mui-btn--raised mui-btn--pink" id="mui-sign-submit">签到</div>',
        '</div>',
        '</div>',
        '</div>'
    ].join('');


    //支付宝扫描账号绑定
    var _zfbBindModelHtml = [
        '<div id="mui-zfbBind-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1 mui-col-xs48-8 mui-col-xs48-offset-2 mui-col-xs64-6 mui-col-xs64-offset-3 mui-col-sm-6 mui-col-sm-offset-3 mui-col-md-4 mui-col-md-offset-4">',
        '<div class="mui-overlay-title"><div class="mui-overlay-title-text flaticon-closed">支付宝扫描账号绑定</div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel">',
        '<div class="mui-error-message"></div>',
        '<div class="mui-message"><font color="red" style="font-size:80%;">注：支付宝“二维码”扫描存款，必须用您绑定的支付宝账号进行存款，否则无法实时到账;每位会员只能绑定一个支付宝账号</font></div>',
        '<div class="mui-textfield mui-textfield--float-label">',
        '<input id="mui-zfbBind-alipayAccount" type="text" required>',
        '<label>支付宝存款账号</label>',
        '</div>',
        '<div class="mui-textfield mui-textfield--float-label">',
        '<input id="mui-zfbBind-password" type="password" required>',
        '<label>游戏账户密码</label>',
        '</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--primary block" id="mui-zfbBind-confirm">绑定</div>',
        '</div>',
        '</div>'
    ].join('');

    //确认html
    var _confirmModelHtml = [
        '<div id="mui-confirm-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1 mui-col-xs48-8 mui-col-xs48-offset-2 mui-col-xs64-6 mui-col-xs64-offset-3 mui-col-sm-6 mui-col-sm-offset-3 mui-col-md-4 mui-col-md-offset-4">',
        '<div class="mui-overlay-title"><div id="mui-confirm-title" class="mui-overlay-title-text"></div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel">',
        '<div id="mui-confirm-message" class="mui-overlay-message" ></div>',
        '<div class="mui-buttons">',
        '<div class="mui-btn mui-btn--raised mui-btn--primary" id="mui-confirm-submit">确定</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--pink" id="mui-confirm-cancel">取消</div>',
        '</div>',
        '</div>',
        '</div>'
    ].join('');

    //闯关报名
    var _emigratedModelHtml = [
        '<div id="mui-emigrated-model" class="mui-overlay-model mui-col-xs32-12">',
        '<div class="mui-overlay-title"><div class="mui-overlay-title-text">全民闯关报名</div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel">',
        '<div class="mui-error-message"></div>',
        '<div class="mui-select">',
        '<label>闯关等级</label>',
        '<select id="mui-emigrated-level"></select>',
        '</div>',
        '<span class="space-1"></span>',
        '<div class="mui-buttons">',
        '<div class="mui-btn mui-btn--raised mui-btn--brown right" id="mui-emigrated-submit">报名</div>',
        '</div>',
        '</div>',

        '</div>'
    ].join('');


    //闯关报名
    var _fightTeamModelHtml = [
        '<div id="mui-fightTeam-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1 mui-col-xs64-8 mui-col-xs64-offset-2 mui-col-sm-6 mui-col-sm-offset-3 mui-col-md-4 mui-col-md-offset-4">',
        '<div class="mui-overlay-title"><div class="mui-overlay-title-text">全民闯关报名</div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel">',
        '<div class="mui-error-message"></div>',
        '<div class="mui-select">',
        '<select id="mui-fightTeam-type"></select>',
        '<label>团战门派</label>',
        '</div>',
        '<div class="mui-buttons">',
        '<div class="mui-btn mui-btn--raised mui-btn--pink " id="mui-fightTeam-submit">报名</div>',
        '</div>',
        '</div>',
        '</div>'
    ].join('');


    //代理商转入游戏
    var _transferGameModelHtml = [
        '<div id="mui-bankBind-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1">',
        '<div class="mui-overlay-title"><div class="mui-overlay-title-text flaticon-closed">转入游戏</div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel">',
        '<div class="mui-error-message">温馨提示 : 游戏账号必须和代理账号开户名字一致。</div>',
        '<div class="mui-textfield mui-textfield--float-label">',
        '<input id="gameUserToBind" type="text" required>',
        '<label>游戏账号</label>',
        '</div>',
        '<div class="mui-textfield mui-textfield--float-label">',
        '<input id="agentPassword" type="password" required>',
        '<label>代理密码</label>',
        '</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--primary block" id="mui-transferGame-submit">绑定</div>',
        '</div>',
        '</div>'
    ].join('');

    //檔案下载 html   安卓PT老虎机客户端
    var _downloadModelHtml = [
        '<div id="mui-download-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1">',
        //'<div class="mui-overlay-title"><div id="mui-download-title" class="mui-overlay-title-text"></div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel" style="padding: 0">',
        '<div class="mui-overlay-close "></div>',
        '<div class="download-content">',
        '<div id="mui-download-img" class="mui-overlay-img"></div>',
        '<div id="mui-download-message" class="mui-overlay-message"></div>',
        '</div>',
        '<div class="mui-btn mui-col-xs32-12 mui-btn--raised mui-btn--green block" id="mui-download-submit" style="height: 50px; line-height: 3.5;">网页游戏</div>',
        '</div>',
    ].join('');

    //进入游戏或下载游戏客户端 html DT eBET真人 AG国际厅 N2真人
    var _goGameOrdownloadModelHtml = [
        '<div id="mui-download-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1 mui-col-xs48-8 mui-col-xs48-offset-2 mui-col-xs64-6 mui-col-xs64-offset-3 mui-col-sm-6 mui-col-sm-offset-3 mui-col-md-4 mui-col-md-offset-4">',
        //'<div class="mui-overlay-title"><div id="mui-download-title" class="mui-overlay-title-text"></div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel" style="padding: 0">',
        '<div class="mui-overlay-close "></div>',
        '<div class="download-content">',
        '<div id="mui-download-img" class="mui-overlay-img"></div>',
        '<div id="mui-download-message" class="mui-overlay-message"></div>',
        '</div>',
        '<div class="mui-btn mui-col-xs32-12 mui-btn--raised mui-btn--green block" id="mui-goGame-submit" style="height: 50px; line-height: 3.5;">安卓客户端</div>',

        '</div>',
        '</div>'
    ].join('');

    //进入游戏或下载游戏客户端 html DT
    var _goGameOrdownloadDTModelHtml = [
        '<div id="mui-download-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1 mui-col-xs48-8 mui-col-xs48-offset-2 mui-col-xs64-6 mui-col-xs64-offset-3 mui-col-sm-6 mui-col-sm-offset-3 mui-col-md-4 mui-col-md-offset-4">',
        //'<div class="mui-overlay-title"><div id="mui-download-title" class="mui-overlay-title-text"></div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel" style="padding: 0">',
        '<div class="mui-overlay-close "></div>',
        '<div class="download-content">',
        '<div id="mui-download-img" class="mui-overlay-img"></div>',
        '<div id="mui-download-message" class="mui-overlay-message"></div>',
        '</div>',
        '<div class="download-btn-box mui-col-xs32-12">',
        '<div class="mui-btn mui-btn--raised mui-btn--brown mui-col-xs32-6 left" id="mui-download-submit" style="height: 50px; line-height: 3.5;">苹果客户端</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--green mui-col-xs32-6 left" id="mui-goGame-submit" style="height: 50px; line-height: 3.5;">安卓客户端</div>',
        '</div>',
        '</div>',
        '</div>'
    ].join('');

    //進入遊戲或試玩遊戲html TTG老虎机
    var _goGameOrFunGameModelHtml = [
        '<div id="mui-confirm-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1 mui-col-xs48-8 mui-col-xs48-offset-2 mui-col-xs64-6 mui-col-xs64-offset-3 mui-col-sm-6 mui-col-sm-offset-3 mui-col-md-4 mui-col-md-offset-4">',
        //'<div class="mui-overlay-title"><div id="mui-goGameOrFunGame-title" class="mui-overlay-title-text"></div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel" style="padding: 0">',
        '<div class="mui-overlay-close "></div>',
        '<div class="download-content">',
        '<div id="mui-goGameOrFunGame-img" class="mui-overlay-img"></div>',
        '<div id="mui-goGameOrFunGame-message" class="mui-overlay-message"></div>',
        '</div>',
        '<div class="download-btn-box mui-col-xs32-12">',
        '<div class="mui-btn mui-btn--raised mui-btn--green mui-col-xs32-6 left" id="mui-goGameOrFunGame-go" style="height: 50px; line-height: 3.5;">进入游戏</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--brown mui-col-xs32-6 left" id="mui-goGameOrFunGame-fun" style="height: 50px; line-height: 3.5;">试玩游戏</div>',
        '</div>',
        '</div>',

        '</div>'
    ].join('');

    //進入遊戲或試玩遊戲html TTG老虎机
    var _goGameOrDownloadGameModelHtml = [
        '<div id="mui-confirm-model" class="mui-overlay-model mui-col-xs32-10 mui-col-xs32-offset-1 mui-col-xs48-8 mui-col-xs48-offset-2 mui-col-xs64-6 mui-col-xs64-offset-3 mui-col-sm-6 mui-col-sm-offset-3 mui-col-md-4 mui-col-md-offset-4">',
        //'<div class="mui-overlay-title"><div id="mui-goGameOrFunGame-title" class="mui-overlay-title-text"></div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel" style="padding: 0">',
        '<div class="mui-overlay-close "></div>',
        '<div class="download-content">',
        '<div id="mui-goGameOrDownloadGame-img" class="mui-overlay-img"></div>',
        '<div id="mui-goGameOrDownloadGame-message" class="mui-overlay-message"></div>',
        '</div>',
        '<div class="download-btn-box mui-col-xs32-12">',
        '<div class="mui-btn mui-btn--raised mui-btn--green mui-col-xs32-6 left" id="mui-goGameOrDownloadGame-go" style="height: 50px; line-height: 3.5;">进入游戏</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--brown mui-col-xs32-6 left" id="mui-goGameOrDownloadGame-fun" style="height: 50px; line-height: 3.5;">下载客户端</div>',
        '</div>',
        '</div>',

        '</div>'
    ].join('');
    //提款确认html
    var _withdrawalConfirmModelHtml = [
        '<div id="mui-confirm-model" class="mui-overlay-model mui-col-xs32-12">',
        '<div class="mui-overlay-title"><div id="mui-withdrawalConfirm-title" class="mui-overlay-title-text"></div><div class="mui-overlay-close "></div></div>',
        '<div class="mui-panel">',
        '<table>',
        '<tr><td height="30px">账户姓名&nbsp:&nbsp&nbsp&nbsp&nbsp</td><td><div id="mui-withdrawalConfirm-name"></div></td></tr>',
        '<tr><td height="30px">银行名称&nbsp:</td><td><div id="mui-withdrawalConfirm-bankName"></div></td></tr>',
        '<tr><td height="30px">银行账号&nbsp:</td><td><div id="mui-withdrawalConfirm-bankAccount"></div></td></tr>',
        '<tr><td height="30px">提款金额&nbsp:</td><td><div id="mui-withdrawalConfirm-withdrawalMoney"></div></td></tr>',
        '</table>',
        '<div class="mui-buttons mui-col-xs32-12">',
        '<div class="mui-btn mui-btn--raised mui-btn--brown right mui-col-xs32-12" id="mui-withdrawalConfirm-submit" style="margin: 0;padding: 0">确定</div>',
        '<div class="mui-btn mui-btn--raised mui-btn--green right mui-col-xs32-12" id="mui-withdrawalConfirm-cancel" style="margin: 5px 0 0 0;padding: 0">取消</div>',
        '</div>',
        '<div class="mui-overlay-message" ><font color="red">温馨提示: 如您的注册姓名与您的收款账户姓名不一致，将导致提款失败!</br>请您联系在线客服!</font></div>',
        '</div>',
        '</div>'
    ].join('');

    /**
     * 开启弹窗
     * @param {string} actionName
     * @param {array} argsArray
     */
    that.open = function (name, argsArray) {
        if (typeof _actionFn[name] !== 'function') {
            alert(name + ' model 不存在！')
            return;
        }
        //不重复生成
        if (_$currentId == name) {
            return;
        }
        if (argsArray && argsArray instanceof Array) {
            _$currentModel = _actionFn[name].apply(null, argsArray);
        } else {
            _$currentModel = _actionFn[name].apply(null, []);
        }
        _$currentId = name;

        _$currentModel.find('.mui-overlay-close').one('click', that.close);

        muiObj.overlay('on', _$currentModel[0], {
            onclose: function () {
                _$currentModel.find('.mui-overlay-close').unbind('click', that.close);
                _$currentModel = false;
                _$currentId = false;
            }
        });

        _checkHeight(_$currentModel);
    };
    /**
     * 关闭
     */
    that.close = function () {
        muiObj.overlay('off');
    };

    /**
     * 取得 登录视窗 物件
     * @param {string} redirect 登录后，转址Key，使用mobileManage.redirect
     */
    function _getLogin(redirect, param) {
        if (!_$loginModel) {
            initLoginModel();
        }
        _$loginModel.find('input').removeClass('mui--is-dirty');
        _$loginModel.find('input').removeClass('mui--is-not-empty');
        _$loginModel.find('input').addClass('mui--is-empty');
        _$loginModel.redirect = redirect;
        _$loginModel.param = param;
        _$loginModel.$account.val('');
        _$loginModel.$password.val('');
        /*_$loginModel.$code.val('');*/
        _$loginModel.$errorMessage.html('');
        /* _$loginModel.$image.attr('src', manage.getSecurityCodeUrl() + '?' + Math.random());*/

        return _$loginModel;
    };

    /**
     * 开启登出视窗
     *
     */
    function _getLogout() {
        if (!_$logoutModel) {
            initLogoutModel();
        }
        return _$logoutModel;
    };


    /**
     * 开启电话回波
     *
     */
    function _getMakeCall() {
        if (!_$makeCallModel) {
            initMakeCallModel();
        }
        _$makeCallModel.$phone.val('');
        return _$makeCallModel;
    };


    /**
     * 修改密码视窗
     */
    function _getModifyPassword() {
        if (!_$modifyPasswordModel) {
            initModifyPasswordModel();
        }
        _$modifyPasswordModel.find('input').removeClass('mui--is-dirty');
        _$modifyPasswordModel.find('input').removeClass('mui--is-not-empty');
        _$modifyPasswordModel.find('input').addClass('mui--is-empty');
        _$modifyPasswordModel.$password.val('');
        _$modifyPasswordModel.$newPassword.val('');
        _$modifyPasswordModel.$confirmPassword.val('');
        _$modifyPasswordModel.$errorMessage.html('');

        return _$modifyPasswordModel;
    };

    /**
     * 设定密保问题
     */
    function _getQuestion() {
        if (!_$questionModel) {
            initQuestionModel();
        }
        _$questionModel.find('input').removeClass('mui--is-dirty');
        _$questionModel.find('input').removeClass('mui--is-not-empty');
        _$questionModel.find('input').addClass('mui--is-empty');
        _$questionModel.$question.val('1');
        _$questionModel.$answer.val('');
        _$questionModel.$password.val('');
        _$questionModel.$errorMessage.html('');

        return _$questionModel;
    };


    /**
     * 开启公告视窗
     * @param {object} data 传入公告资料
     * @param {integer} active 显示该则公告
     *
     */
    function _getNews(data, active) {
        if (!_$newsModel) {
            initNewsModel();
        }
        _$newsModel.data = data;
        _$newsModel.active = active;
        _$newsModel.$title.html(_$newsModel.data[_$newsModel.active].title);
        var content = _$newsModel.data[_$newsModel.active].content;
        content = content ? content.replace(/\n/g, "<br/>") : '';
        _$newsModel.$message.html(content);

        return _$newsModel;
    };

    /**
     * 檔案下载
     */
    function _getDownload(data) {
        if (!_$downloadModel) {
            initDownloadModel();
        }


        _$downloadModel.data = data;

        _$downloadModel.$title.html(_$downloadModel.data.title);
        _$downloadModel.$message.html(_$downloadModel.data.content);


        var data_img = '';
        var img = _$downloadModel.data.img;
        if (img) {
            data_img = '<img src="' + img + '">';
        }
        else {
            data_img = '';
        }
        _$downloadModel.$img.html(data_img);


        return _$downloadModel;
    };

    /**
     * 绑定银行卡/支付宝
     */
    function _getBankBind() {
        if (!_$bankBindModel) {
            initBankBindModel();
        }
        _$bankBindModel.find('input').removeClass('mui--is-dirty');
        _$bankBindModel.find('input').removeClass('mui--is-not-empty');
        _$bankBindModel.find('input').addClass('mui--is-empty');
        _$bankBindModel.$password.val('');
        _$bankBindModel.$bankName.val('');
        _$bankBindModel.$cardNo.val('');
        _$bankBindModel.$bindingCode.val('');
        _$bankBindModel.$errorMessage.html('');
        _$bankBindModel.$bindingCode.parent().css('display', 'none');
        _$bankBindModel.$buttons.css('display', 'none');

        return _$bankBindModel;
    };

    /**
     * 解除银行卡/支付宝
     */
    function _getUnBank() {
        if (!_$UnbankModel) {
            initUnBankModel();
        }
        _$UnbankModel.find('input').removeClass('mui--is-dirty');
        _$UnbankModel.find('input').removeClass('mui--is-not-empty');
        _$UnbankModel.find('input').addClass('mui--is-empty');
        _$UnbankModel.$password.val('');
        _$UnbankModel.$bankName.val('');

        return _$UnbankModel;
    };

    /**
     * 支付宝扫马绑定
     */
    function _getZfbBind(config) {
        if (!_$zfbDepositBindModel) {
            initZfbBindModel();
        }
        var _config = {
            callback: false
        };
        $.extend(_config, config);
        _$zfbDepositBindModel.config = _config;
        _$zfbDepositBindModel.find('input').removeClass('mui--is-dirty');
        _$zfbDepositBindModel.find('input').removeClass('mui--is-not-empty');
        _$zfbDepositBindModel.find('input').addClass('mui--is-empty');
        _$zfbDepositBindModel.$alipayAccount.val('');
        _$zfbDepositBindModel.$password.val('');

        return _$zfbDepositBindModel;
    }


    /**
     * 进入游戏
     */
    function _getGoGame(data) {
        if (!_$goGameModel) {
            initGoGameModel();
        }

        _$goGameModel.data = data;
        _$goGameModel.$title.html(_$goGameModel.data.title);
        _$goGameModel.$message.html(_$goGameModel.data.content);
        _$goGameModel.$error.html(_$goGameModel.data.error);

        return _$goGameModel;
    };

    /**
     * 取得 签到 物件
     * @param {Object} param 参数
     */
    function _getSign(param) {
        if (!_$signModel) {
            initSignModel();
        }
        _$signModel.$money.html(param.money);
        _$signModel.$signMoney.html(param.signMoney);

        return _$signModel;
    };

    /**
     * 取得 确认 物件
     * @param {Object} param 参数
     */
    function _getConfirm(config) {
        if (!_$confirmModel) {
            initConfirmModel();
        }
        var _config = {
            title: '输入标题',
            message: '内容',
            callback: false
        };
        $.extend(_config, config);
        _$confirmModel.config = _config;
        _$confirmModel.$title.html(_config.title);
        _$confirmModel.$message.html(_config.message);
        return _$confirmModel;
    };

    function _getEmigrated(config) {
        if (!_$emigratedModel) {
            initEmigratedModel();
        }
        _$emigratedModel.$level.val('');
        return _$emigratedModel;
    }

    function _getFightTeam(config) {
        if (!_$fightTeamModel) {
            initFightTeamModel();
        }
        _$fightTeamModel.$type.val('');
        return _$fightTeamModel;
    }

    /**
     * 取得 进入游戏或测试游戏 物件
     * @param {Object} param 参数
     */
    function _getGoGameOrFunGame(config) {
        if (!_$goGameOrFunGameModel) {
            initGoGameOrFunGameModel();
        }
        var _config = {
            title: '输入标题',
            message: '内容',
            img: '图片',
            goGame: false,
            goFun: false
        };

        $.extend(_config, config);
        _$goGameOrFunGameModel.config = _config;
        _$goGameOrFunGameModel.$title.html(_config.title);
        _$goGameOrFunGameModel.$title.html(_config.title);

        var data_img = '';
        var img = _config.img;
        if (img) {
            data_img = '<img src="' + img + '">';
        }
        else {
            data_img = '';
        }

        _$goGameOrFunGameModel.$img.html(data_img);
        _$goGameOrFunGameModel.$message.html(_config.message);
        return _$goGameOrFunGameModel;
    };

    /**
     * 取得 进入游戏或Download游戏 物件
     * @param {Object} param 参数
     */
    function _goGameOrDownloadGame(config) {
        if (!_$goGameOrDownloadGameModel) {
            initGoGameOrDownloadGameModel();
        }
        var _config = {
            title: '输入标题',
            message: '内容',
            img: '图片',
            goGame: false,
            goFun: false
        };

        $.extend(_config, config);
        _$goGameOrDownloadGameModel.config = _config;
        _$goGameOrDownloadGameModel.$title.html(_config.title);
        _$goGameOrDownloadGameModel.$title.html(_config.title);

        var data_img = '';
        var img = _config.img;
        if (img) {
            data_img = '<img src="' + img + '">';
        }
        else {
            data_img = '';
        }

        _$goGameOrDownloadGameModel.$img.html(data_img);
        _$goGameOrDownloadGameModel.$message.html(_config.message);
        return _$goGameOrDownloadGameModel;
    };

    /**
     * 确认model height 没有超过荧幕高度，超过则不使用置中
     * @param {object} $model 要检查的对象
     */
    function _checkHeight($model) {
        if (($('#mui-overlay').height() - 100) <= $model.height()) {
            $model.addClass('top');
        } else {
            $model.removeClass('top');
        }
    }

    function _getGameAccountBind() {
        if (!_$transferGameModel) {
            initTransferGameModel();
        }
        return _$transferGameModel;
    }

    function initTransferGameModel() {
        _$transferGameModel = $(_transferGameModelHtml);
        _$transferGameModel.$account = _$transferGameModel.find('#gameUserToBind');
        _$transferGameModel.$password = _$transferGameModel.find('#agentPassword');
        _$transferGameModel.$submit = _$transferGameModel.find('#mui-transferGame-submit');

        _$transferGameModel.$submit.click(function () {

            var gameUserToBind = $.trim(_$transferGameModel.$account.val());
            var agentPassword = _$transferGameModel.$password.val();

            if (gameUserToBind == '') {
                alert('要绑定的账号不能为空,请重新输入');
                return;
            }
            if (agentPassword == '') {
                alert("清输入您的密码");
                return;
            }
            if (!confirm("您确定要绑定游戏账号：" + gameUserToBind + "吗？")) {
                return;
            }

            manage.getLoader().open("转入中");
            manage.ajax({
                url: '/asp/agentUserBindGameUser.php',
                param: {
                    loginnameGame: gameUserToBind,
                    password: agentPassword
                },
                callback: function (result) {
                    alert(result.message);
                    manage.getLoader().close();
                    if (result.success) {
                        $("#gameUser").val(gameUserToBind);
                        that.close();
                    }
                }
            });
        });
    }

    /**
     * 登录 Model 初始化
     */
    function initLoginModel() {
        _$loginModel = $(_loginModelHtml);
        _$loginModel.$account = _$loginModel.find('#mui-login-account');
        _$loginModel.$password = _$loginModel.find('#mui-login-password');
        /*_$loginModel.$code = _$loginModel.find('#mui-login-code');
         _$loginModel.$image = _$loginModel.find('#mui-login-img');*/
        _$loginModel.$errorMessage = _$loginModel.find('.mui-error-message');

        /*_$loginModel.$image.click(function () {
         _$loginModel.$image.attr('src', manage.getSecurityCodeUrl() + '?' + Math.random());
         });*/

        _$loginModel.$submit = _$loginModel.find('#mui-login-submit');

        _$loginModel.$submit.click(function () {
            var formData = {
                account: _$loginModel.$account.val(),
                password: _$loginModel.$password.val()/*,
                 imageCode: _$loginModel.$code.val()*/
            };
            manage.getLoader().open('验证中');
            manage.getUserManage().login(formData, function (result) {
                if (result.success) {
//					alert(result.message);
//					that.close();
                    manage.redirect(_$loginModel.redirect ? _$loginModel.redirect : 'index', _$loginModel.param);
                } else {
                    /*_$loginModel.$code.val('');*/
                    /*_$loginModel.$image.attr('src', manage.getSecurityCodeUrl() + '?' + Math.random());*/
                    _$loginModel.$errorMessage.html(result.message);
                    _checkHeight(_$loginModel);
//					alert(result.message);
                }
                manage.getLoader().close();
                formData = null;
            });
        });

        _$loginModel.bind("keyup", function (e) {
            if (e.which == '13' && _$loginModel.find('input').is(":focus")) {
                _$loginModel.$submit.click();
            }
        });

    }

    /**
     * 登出 Model 初始化
     */
    function initLogoutModel() {
        _$logoutModel = $(_logoutModelHtml);

        _$logoutModel.find('#mui-logout-cancel').click(function () {
            that.close();
        });
        _$logoutModel.find('#mui-logout-submit').click(function () {
            manage.getLoader().open('登出中');
            manage.getUserManage().logout(function (data) {
                if (data.success) {
                    that.close();
                    manage.redirect('index');
                } else {
                    alert(data.message);
                    manage.getLoader().close();
                }
            });
        });
    }

    /**
     * 电话回拨 Model 初始化
     */
    function initMakeCallModel() {
        _$makeCallModel = $(_makeCallModelHtml);
        _$makeCallModel.$phone = _$makeCallModel.find('#mui-makeCall-phone');

        _$makeCallModel.find('#mui-makeCall-cancel').click(function () {
            that.close();
        });
        _$makeCallModel.$submit = _$makeCallModel.find('#mui-makeCall-submit');
        _$makeCallModel.$submit.click(function () {
            var formData = {
                phone: _$makeCallModel.$phone.val()
            };
            if (formData.phone == '' || formData.phone.length < 11) {
                alert('请输入合法的手机号码');
                return;
            }
            manage.getLoader().open('处理中');
            manage.getUserManage().makeCall(formData, function (result) {
                if (result.success) {
                    alert(result.message);
                } else {
                    alert(result.message);
                }
                manage.getLoader().close();
                formData = null;
            });
        });

        _$makeCallModel.bind("keyup", function (e) {
            if (e.which == '13' && _$makeCallModel.find('input').is(":focus")) {
                _$makeCallModel.$submit.click();
            }
        });
    }

    /**
     * 修改密码 Model 初始化
     */
    function initModifyPasswordModel() {
        _$modifyPasswordModel = $(_modifyPasswordModelHtml);
        _$modifyPasswordModel.$password = _$modifyPasswordModel.find('#mui-modifyPassword-password');
        _$modifyPasswordModel.$newPassword = _$modifyPasswordModel.find('#mui-modifyPassword-newPassword');
        _$modifyPasswordModel.$confirmPassword = _$modifyPasswordModel.find('#mui-modifyPassword-confirmPassword');
        _$modifyPasswordModel.$errorMessage = _$modifyPasswordModel.find('.mui-error-message');
        _$modifyPasswordModel.$account = _$modifyPasswordModel.find('#account-question');
        _$modifyPasswordModel.$question = _$modifyPasswordModel.find('#mui-question-question');
        _$modifyPasswordModel.$answer = _$modifyPasswordModel.find('#mui-question-answer');

        _$modifyPasswordModel.find('#mui-modifyPassword-cancel').click(function () {
            that.close();
        });

        //查询密保问题
        var questionNames = {
            '1': true,
            '2': true,
            '3': true,
            '4': true,
            '5': true,
            '6': true
        };
        //查询密保问题
        mobileManage.getUserManage().getQuestion(function (result) {
            if (result.success && questionNames[result.data.questionId]) {
                _$modifyPasswordModel.$account.val('已设置');
                $('#question-show').css("display", "block");
                $('#answer-show').css("display", "block");
                var questionData = [
                    {value: '1', name: '您最喜欢的明星名字？'},
                    {value: '2', name: '您最喜欢的职业？'},
                    {value: '3', name: '您最喜欢的城市名称？'},
                    {value: '4', name: '对您影响最大的人名字是？'},
                    {value: '5', name: '您就读的小学名称？'},
                    {value: '6', name: '您最熟悉的童年好友名字是？'}
                ];
                var optionHtml = '<option value="{0}">{1}</option>';
                var options = new Array();

                for (var i = 0; i < questionData.length; i++) {
                    options.push(String.format(optionHtml, questionData[i]['value'], questionData[i]['name']));
                }
                _$modifyPasswordModel.$question.append(options);

            } else {
                _$modifyPasswordModel.$account.val('尚未设置');

                _$modifyPasswordModel.$account.parent().append('<div id="account-question-button">设定密保</div>');
                _$modifyPasswordModel.$questionButton = _$modifyPasswordModel.find('#account-question-button');
                _$modifyPasswordModel.$questionButton.click(function () {
                    manage.getModel().open('question');
                });
            }
        });


        _$modifyPasswordModel.$submit = _$modifyPasswordModel.find('#mui-modifyPassword-submit');
        _$modifyPasswordModel.$submit.click(function () {
            var formData = {
                password: _$modifyPasswordModel.$password.val(),
                newPassword: _$modifyPasswordModel.$newPassword.val(),
                confirmPassword: _$modifyPasswordModel.$confirmPassword.val(),
                questionId: _$modifyPasswordModel.$question.val(),
                answer: _$modifyPasswordModel.$answer.val()

            };

            console.log(formData);
            manage.getLoader().open("修改中");
            manage.getUserManage().changePassword(formData, function (result) {
                manage.getLoader().close();
                if (result.success) {
                    alert(result.message);
                    that.close();
                    window.location.href = '/index.jsp';
                } else {
                    _$modifyPasswordModel.$errorMessage.html(result.message);
                    _checkHeight(_$modifyPasswordModel);
                    alert(result.message);
                }
            });
        });

        _$modifyPasswordModel.bind("keyup", function (e) {
            if (e.which == '13' && _$modifyPasswordModel.find('input').is(":focus")) {
                _$modifyPasswordModel.$submit.click();
            }
        });
    }

    //查询密保问题
    /**
     * 密保问题 Model 初始化
     */
    function initQuestionModel() {
        var questionData = [
            {value: '1', name: '您最喜欢的明星名字？'},
            {value: '2', name: '您最喜欢的职业？'},
            {value: '3', name: '您最喜欢的城市名称？'},
            {value: '4', name: '对您影响最大的人名字是？'},
            {value: '5', name: '您就读的小学名称？'},
            {value: '6', name: '您最熟悉的童年好友名字是？'}
        ];
        var optionHtml = '<option value="{0}">{1}</option>';
        var options = new Array();

        _$questionModel = $(_questionModelHtml);
        _$questionModel.$question = _$questionModel.find('#mui-question-question');
        _$questionModel.$answer = _$questionModel.find('#mui-question-answer');
        _$questionModel.$password = _$questionModel.find('#mui-question-password');
        _$questionModel.$errorMessage = _$questionModel.find('.mui-error-message');

        for (var i = 0; i < questionData.length; i++) {
            options.push(String.format(optionHtml, questionData[i]['value'], questionData[i]['name']));
        }
        _$questionModel.$question.append(options);

        _$questionModel.find('#mui-question-cancel').click(function () {
            that.close();
        });
        _$questionModel.$submit = _$questionModel.find('#mui-question-submit');
        _$questionModel.find('#mui-question-submit').click(function () {
            var formData = {
                password: _$questionModel.$password.val(),
                answer: _$questionModel.$answer.val(),
                questionId: _$questionModel.$question.val()
            };
            manage.getLoader().open("设置中");
            manage.getUserManage().saveQuestion(formData, function (result) {
                manage.getLoader().close();
                if (result.success) {
                    window.location.reload();
                    alert(result.message);
                    that.close();
                } else {
                    alert(result.message);
                    _$questionModel.$errorMessage.html(result.message);
                    _checkHeight(_$questionModel);
                }
            });
        });

        _$questionModel.bind("keyup", function (e) {
            if (e.which == '13' && _$questionModel.find('input').is(":focus")) {
                _$questionModel.$submit.click();
            }
        });
        optionHtml = options = questionData = null;
    }

    /**
     * 公告信息 Model 初始化
     */
    function initNewsModel() {
        _$newsModel = $(_newsModelHtml);
        _$newsModel.$title = _$newsModel.find('#mui-news-title');
        _$newsModel.$message = _$newsModel.find('#mui-news-message');

        _$newsModel.find('#mui-news-last').click(function () {
            if (_$newsModel.active >= 0) {
                _$newsModel.active--;
            }
            if (!_$newsModel.data[_$newsModel.active]) {
                _$newsModel.$title.html('公告');
                _$newsModel.$message.html('无上一条公告');
            } else {
                _$newsModel.$title.html(_$newsModel.data[_$newsModel.active].title);
                var content = _$newsModel.data[_$newsModel.active].content;
                content = content ? content.replace(/\n/g, "<br/>") : '';
                _$newsModel.$message.html(content);
            }
            _checkHeight(_$newsModel);
        });

        _$newsModel.find('#mui-news-next').click(function () {
            if (_$newsModel.active < _$newsModel.data.length) {
                _$newsModel.active++;
            }
            if (!_$newsModel.data[_$newsModel.active]) {
                _$newsModel.$title.html('公告');
                _$newsModel.$message.html('无下一条公告');
            } else {
                _$newsModel.$title.html(_$newsModel.data[_$newsModel.active].title);
                var content = _$newsModel.data[_$newsModel.active].content;
                content = content ? content.replace(/\n/g, "<br/>") : '';
                _$newsModel.$message.html(content);
            }
            _checkHeight(_$newsModel);
        });
    }

    /**
     * 檔案下载 Model 初始化
     */
    function initDownloadModel() {

        _$downloadModel = $(_downloadModelHtml);
        _$downloadModel.$title = _$downloadModel.find('#mui-download-title');
        _$downloadModel.$img = _$downloadModel.find('#mui-download-img');
        _$downloadModel.$message = _$downloadModel.find('#mui-download-message');

        _$downloadModel.find('#mui-download-cancel').click(function () {
            that.close();
        });
        _$downloadModel.find('#mui-download-submit').click(function (e) {
            if ($.isFunction(_$downloadModel.data.handler)) {
                _$downloadModel.data.handler(null, [e, _$downloadModel]);
            } else {
                window.location.href = _$downloadModel.data.url;
                that.close();
            }
        });
    }

    /**
     * 绑定支付宝 Model 初始化
     */
    function initBankBindModel() {
        /*var bankBindData = [
         {value: '', name: '请选择'},
         {value: '工商银行', name: '工商银行'},
         {value: '招商银行', name: '招商银行'},
         {value: '上海农村商业银行', name: '上海农村商业银行'},
         {value: '农业银行', name: '农业银行'},
         {value: '建设银行', name: '建设银行'},
         {value: '交通银行', name: '交通银行'},
         {value: '民生银行', name: '民生银行'},
         {value: '光大银行', name: '光大银行'},
         {value: '兴业银行', name: '兴业银行'},
         {value: '上海浦东银行', name: '上海浦东银行'},
         {value: '广东发展银行', name: '广东发展银行'},
         {value: '深圳发展银行', name: '深圳发展银行'},
         {value: '中国银行', name: '中国银行'},
         {value: '中信银行', name: '中信银行'},
         {value: '邮政银行', name: '邮政银行'}
         ];*/
        var optionHtml = '<option value="{0}">{1}</option>';
        var options = new Array();

        _$bankBindModel = $(_bankBindModelHtml);
        _$bankBindModel.$bankName = _$bankBindModel.find('#mui-bankBind-bankName');
        _$bankBindModel.$cardNo = _$bankBindModel.find('#mui-bankBind-cardNo');
        _$bankBindModel.$password = _$bankBindModel.find('#mui-bankBind-password');
        _$bankBindModel.$bindingCode = _$bankBindModel.find('#mui-bankBind-bindingCode');
        _$bankBindModel.$buttons = _$bankBindModel.find('#mui-bankBind-buttons');
        _$bankBindModel.$errorMessage = _$bankBindModel.find('.mui-error-message');
        _$bankBindModel.$account = _$bankBindModel.find('#account-question');
        _$bankBindModel.$question = _$bankBindModel.find('#mui-question-question');
        _$bankBindModel.$answer = _$bankBindModel.find('#mui-question-answer');


        //查询密保问题
        var questionNames = {
            '1': true,
            '2': true,
            '3': true,
            '4': true,
            '5': true,
            '6': true
        };

        mobileManage.getUserManage().getQuestion(function (result) {
            if (result.success && questionNames[result.data.questionId]) {
                _$bankBindModel.$account.val('已设置');
                $('#question-show').css("display", "block");
                $('#answer-show').css("display", "block");
                var questionData = [
                    {value: '1', name: '您最喜欢的明星名字？'},
                    {value: '2', name: '您最喜欢的职业？'},
                    {value: '3', name: '您最喜欢的城市名称？'},
                    {value: '4', name: '对您影响最大的人名字是？'},
                    {value: '5', name: '您就读的小学名称？'},
                    {value: '6', name: '您最熟悉的童年好友名字是？'}
                ];
                var optionHtml = '<option value="{0}">{1}</option>';
                var options = new Array();

                for (var i = 0; i < questionData.length; i++) {
                    options.push(String.format(optionHtml, questionData[i]['value'], questionData[i]['name']));
                }
                _$bankBindModel.$question.append(options);

            } else {
                _$bankBindModel.$account.val('尚未设置');

                _$bankBindModel.$account.parent().append('<div id="account-question-button" >设定密保</div>');
                _$bankBindModel.$questionButton = _$bankBindModel.find('#account-question-button');
                _$bankBindModel.$questionButton.click(function () {
                    manage.getModel().open('question');
                });
            }
        });

        /* for (var i = 0; i < bankBindData.length; i++) {
         options.push(String.format(optionHtml, bankBindData[i]['value'], bankBindData[i]['name']));
         }*/
        _$bankBindModel.$bankName.append(options);

        _$bankBindModel.$bindingCode.parent().css('display', 'none');
        _$bankBindModel.$buttons.css('display', 'none');

        _$bankBindModel.$bankName.bind('change', function () {
            if (this.value == '支付宝') {
                _$bankBindModel.$bindingCode.parent().css('display', 'block');
                _$bankBindModel.$buttons.css('display', 'block');
            } else {
                _$bankBindModel.$bindingCode.parent().css('display', 'none');
                _$bankBindModel.$buttons.css('display', 'none');
            }
        });

        _$bankBindModel.find('#mui-bankBind-cancel').click(function () {
            that.close();
        });
        _$bankBindModel.find('#mui-bankBind-voice').click(function () {
            //点触验证
            manage.openTouClick(function (tResult) {
                if (tResult.success) {
                    manage.getLoader().open("发送中");
                    manage.ajax({
                        url: 'mobi/sendAlipayPhoneVoiceCode.php',
                        param: {
                            bankName: _$bankBindModel.$bankName.val(),
                            checkAddress: tResult.data.checkAddress.toString(),
                            checkKey: tResult.data.token,
                            sid: tResult.data.sid
                        },
                        callback: function (result) {
                            _$bankBindModel.$errorMessage.html(result.message);
                            alert(result.message)
                            _checkHeight(_$bankBindModel);
                            manage.getLoader().close();
                        }
                    });
                } else {
                    alert(tResult.message);
                }
            });
        });

        _$bankBindModel.find('#mui-bankBind-sms').click(function () {
            //点触验证
            manage.openTouClick(function (tResult) {
                if (tResult.success) {
                    manage.getLoader().open("发送中");
                    manage.ajax({
                        url: 'mobi/sendAlipayPhoneSmsCode.php',
                        param: {
                            bankName: _$bankBindModel.$bankName.val(),
                            checkAddress: tResult.data.checkAddress.toString(),
                            checkKey: tResult.data.token,
                            sid: tResult.data.sid
                        },
                        callback: function (result) {
                            _$bankBindModel.$errorMessage.html(result.message);
                            alert(result.message)
                            _checkHeight(_$bankBindModel);
                            manage.getLoader().close();
                        }
                    });
                } else {
                    alert(tResult.message);
                }
            });
        });
        _$bankBindModel.$submit = _$bankBindModel.find('#mui-bankBind-submit');

        _$bankBindModel.$submit.click(function () {

            // var chechCardNo = $('#mui-bankBind-cardNo').val();
            // if (chechCardNo) {
            //     if (!/^\d+[.]?\d*$/.test(chechCardNo)) {
            //         $('#mui-bankBind-cardNo').val(/^\d+[.]?\d*/.exec($('#mui-bankBind-cardNo').val()));
            //         alert('请输入正确卡号')
            //         return false;
            //     }
            //
            // }

            var formData = {
                cardNo: _$bankBindModel.$cardNo.val(),
                bankName: _$bankBindModel.$bankName.val(),
                password: _$bankBindModel.$password.val(),
                addr: 'none',
                bindingCode: _$bankBindModel.$bindingCode.val(),
                questionId: _$bankBindModel.$question.val(),
                answer: _$bankBindModel.$answer.val()
            };
            manage.getLoader().open("绑定中");
            manage.getBankManage().bindBankNo(formData, function (result) {
                manage.getLoader().close();
                if (result.success) {
                    alert(result.message);
                    window.location.href = "/mobile/account.jsp";
                    that.close();
                } else {
                    alert(result.message);
                    _$bankBindModel.$errorMessage.html(result.message);
                    _checkHeight(_$bankBindModel);
                    window.location.href = "/mobile/account.jsp";
                }
            });
        });

        _$bankBindModel.$blur = _$bankBindModel.find('#mui-bankBind-cardNo');

        _$bankBindModel.$blur.on('change', function () {

            var identifycode = $('#mui-bankBind-cardNo').val();

            console.log(identifycode);
            if (identifycode.length < 10) {
                alert('请您输入正确的银行卡号');
                return;
            } else {
                $.post("/asp/getBankInfo.php", {"bankno": identifycode},
                    function (returnedData) {
                        if (returnedData == "我们不支持此银行卡") {
                            alert(returnedData);
                        } else if (returnedData == "您输入的银行卡信息错误") {
                            alert('您所输入的银行卡位数不正确!');
                        } else {
                            // $('#mui-bankBind-bankName option').each(function () {
                            //     var bankName = $(this).val();
                            //     if (bankName == returnedData.issuebankname) {
                            //         $(this).attr('selected', true);
                            //         return;
                            //     } else {
                            //         $(this).attr('selected', false);
                            // });
                            if (returnedData.issuebankname != '久安钱包') {
                                $('#mui-bankBind-bankName').val(returnedData.issuebankname);
                            }
                        }
                    });
            }

        });


        _$bankBindModel.bind("keyup", function (e) {
            if (e.which == '13' && _$bankBindModel.find('input').is(":focus")) {
                _$bankBindModel.$submit.click();
            }
        });
        optionHtml = options = bankBindData = null;
    }


    /**
     * 解除绑定支付宝 Model 初始化
     */

    function initUnBankModel() {

        $queryBankInfoUrl = '/asp/getBankcard.php';
        $.get($queryBankInfoUrl, function (result) {
            var num = 0;
            $('#withdrawal-bankName').empty();
            for (var i in result) {
                var item = result[i];

                //银行卡号处理
                var bankNo1 = item.bankno.substr(0, 4);
                var bankNo2 = item.bankno.substr(-4);
                var bankNo = bankNo1 + '*****' + bankNo2;

                var cardTpl = '<div class="bankBtn {{active}} bankName" data-id="' + item.id + '">' + item.bankname + '<br/>' + bankNo + '</div>';
                var cardHtml = "";

                cardHtml = cardTpl.replace(/\{\{active\}\}/g, "");

                if (item.bankname == '久安钱包') {
                    //$("#jnBank").find("option[value='久安钱包']").attr("selected", "selected");
                    //$("#j-bindJiuanAttr").val(item.bankno);
                } else {
                    $('#withdrawal-bankName').append(cardHtml);
                    num++;
                }

            }
        }, 'json');


        var options = new Array();
        _$UnbankModel = $(_UnbankModelHtml);

        _$UnbankModel.$bankName = _$UnbankModel.find('#mui-Unbank-bankName');
        _$UnbankModel.$account = _$UnbankModel.find('#account-question');
        _$UnbankModel.$question = _$UnbankModel.find('#mui-question-question');
        _$UnbankModel.$answer = _$UnbankModel.find('#mui-question-answer');
        _$UnbankModel.$password = _$UnbankModel.find('#mui-bankBind-password');





        //查询密保问题
        mobileManage.getUserManage().getQuestion(function (result) {
            if (result.success && questionNames[result.data.questionId]) {
                _$UnbankModel.$account.val('已设置');
                $('#question-show').css("display", "block");
                $('#answer-show').css("display", "block");
                var questionData = [
                    {value: '1', name: '您最喜欢的明星名字？'},
                    {value: '2', name: '您最喜欢的职业？'},
                    {value: '3', name: '您最喜欢的城市名称？'},
                    {value: '4', name: '对您影响最大的人名字是？'},
                    {value: '5', name: '您就读的小学名称？'},
                    {value: '6', name: '您最熟悉的童年好友名字是？'}
                ];
                var optionHtml = '<option value="{0}">{1}</option>';
                var options = new Array();

                for (var i = 0; i < questionData.length; i++) {
                    options.push(String.format(optionHtml, questionData[i]['value'], questionData[i]['name']));
                }
                _$UnbankModel.$question.append(options);

            } else {
                _$UnbankModel.$account.val('尚未设置');

                _$UnbankModel.$account.parent().append('<div id="account-question-button">设定密保</div>');
                _$UnbankModel.$questionButton = _$UnbankModel.find('#account-question-button');
                _$UnbankModel.$questionButton.click(function () {
                    manage.getModel().open('question');
                });
            }
        });

        _$UnbankModel.$bankName.append(options);
        _$UnbankModel.$submit = _$UnbankModel.find('#mui-bankBind-submit');


        //送出按钮
        _$UnbankModel.$submit.click(function () {

            var $selectedTkBank = $('#withdrawal-bankName .bankBtn.active');
            var BankId = $selectedTkBank.attr('data-id');

       
            if(BankId == undefined ||BankId == ''||BankId == 'null'){
                alert('请选择银行卡');
                return false;
            }

            $.post("/asp/getBankcard.php", function (result) {

                for (var i in result) {
                    var item = result[i];
                    if (BankId == item.id) {
                        var formData = {
                            bankName: item.bankname,
                            questionId: _$UnbankModel.$question.val(),
                            answer: _$UnbankModel.$answer.val(),
                            password: _$UnbankModel.$password.val()
                        };

                        manage.getLoader().open("解除绑定中");
                        manage.getBankManage().UnBankNo(formData, function (result) {
                            manage.getLoader().close();
                           
                            if (result.success) {
                                alert(result.message);
                                //that.close();
                                window.location.href = "/mobile/account.jsp";
                            } else {
                                alert(result.message);
                                //_$UnbankModel.$errorMessage.html(result.message);
                                _checkHeight(_$UnbankModel);
                            }
                        });
                    }
                }
            });
        });

        /*_$UnbankModel.bind("keyup", function (e) {
         if (e.which == '13' && _$UnbankModel.find('input').is(":focus")) {
         _$UnbankModel.$submit.click();
         }
         });*/
    }

    /**
     * 进入游戏 Model 初始化
     */
    function initGoGameModel() {

        _$goGameModel = $(_goGameModelHtml);
        _$goGameModel.$title = _$goGameModel.find('#mui-goGame-title');
        _$goGameModel.$message = _$goGameModel.find('#mui-goGame-message');
        _$goGameModel.$error = _$goGameModel.find('.mui-error-message');

        _$goGameModel.find('#mui-goGame-cancel').click(function () {
            that.close();
        });

        _$goGameModel.find('#mui-goGame-submit').click(function (e) {

            if (_$goGameModel.data.onSubmit) {
                _$goGameModel.data.onSubmit.apply(_$goGameModel, [e, _$goGameModel]);
            } else {
                if (!_$goGameModel.data || !_$goGameModel.data.url) {
                    _$goGameModel.$error.html('游戏路径不存在！');
                    alert('游戏路径不存在！');
                    return;
                }
                window.location.href = _$goGameModel.data.url;
                that.close();
            }
        });
    }


    /**
     * 签到 Model 初始化
     */
    function initSignModel() {
        _$signModel = $(_signModelHtml);
        _$signModel.$money = _$signModel.find('#mui-sign-money');
        _$signModel.$signMoney = _$signModel.find('#mui-sign-signMoney');

        _$signModel.find('#mui-sign-cancel').click(function () {
            that.close();
        });
        _$signModel.find('#mui-sign-submit').click(function () {
            manage.getLoader().open('处理中');
            manage.getSignManage().doSign(function (result) {
                if (result.success) {
                    alert(result.message);
                    that.close();
                } else {
                    alert(result.message);
                }
                manage.getLoader().close();
            });
        });
    }


    /**
     * 支付宝扫马 Model 初始化
     */
    function initZfbBindModel() {
        _$zfbDepositBindModel = $(_zfbBindModelHtml);
        _$zfbDepositBindModel.$errorMessage = _$zfbDepositBindModel.find('.mui-error-message');
        _$zfbDepositBindModel.$alipayAccount = _$zfbDepositBindModel.find("#mui-zfbBind-alipayAccount");
        _$zfbDepositBindModel.$password = _$zfbDepositBindModel.find("#mui-zfbBind-password");
        _$zfbDepositBindModel.$submit = _$zfbDepositBindModel.find("#mui-zfbBind-confirm");

        _$zfbDepositBindModel.find('#mui-zfbBind-cancel').click(function () {
            that.close();
        });

        _$zfbDepositBindModel.$submit.click(function () {
            manage.getLoader().open("绑定中");
            manage.getBankManage().bindZFBQR({
                account: _$zfbDepositBindModel.$alipayAccount.val(),
                password: _$zfbDepositBindModel.$password.val()
            }, function (result) {
                manage.getLoader().close();
                _$zfbDepositBindModel.$errorMessage.html(result.message);
                _checkHeight(_$zfbDepositBindModel);
                alert(result.message);
                if (typeof _$zfbDepositBindModel.config.callback === 'function') {
                    _$zfbDepositBindModel.config.callback(result);
                }
            });
        });

        _$zfbDepositBindModel.bind("keyup", function (e) {
            if (e.which == '13' && _$zfbDepositBindModel.find('input').is(":focus")) {
                _$zfbDepositBindModel.$submit.click();
            }
        });
    }

    /**
     * 确认 Model 初始化
     */
    function initConfirmModel() {
        _$confirmModel = $(_confirmModelHtml);
        _$confirmModel.$title = _$confirmModel.find('#mui-confirm-title');
        _$confirmModel.$message = _$confirmModel.find('#mui-confirm-message');

        _$confirmModel.find('#mui-confirm-cancel').click(function () {
            that.close();
            if (typeof _$confirmModel.config.callback === 'function') {
                _$confirmModel.config.callback(false);
            }
        });

        _$confirmModel.find('#mui-confirm-submit').click(function () {
            that.close();
            if (typeof _$confirmModel.config.callback === 'function') {
                _$confirmModel.config.callback(true);
            }
        });
    }


    /**
     * 闯关 Model 初始化
     */
    function initEmigratedModel() {
        _$emigratedModel = $(_emigratedModelHtml);
        _$emigratedModel.$errorMessage = _$emigratedModel.find('.mui-error-message');
        _$emigratedModel.find('#mui-emigrated-submit').click(function () {
            mobileManage.getLoader().open('处理中');
            mobileManage.getEmigratedManage().apply({emigratedeLevel: _$emigratedModel.$level.val()}, function (result) {
                mobileManage.getLoader().close();
                _$emigratedModel.$errorMessage.html(result.message);
                alert(result.message);
            });
        });

        var data = [
            {value: '', name: '请选择'},
            {value: '1', name: '初级'},
            {value: '2', name: '中级'},
            {value: '3', name: '高级'},
            {value: '4', name: '黄金'},
            {value: '5', name: '白金'},
            {value: '6', name: '钻石'},
            {value: '7', name: '至尊'}
        ]
        var optionHtml = '<option value="{0}">{1}</option>';
        var options = new Array();

        _$emigratedModel.$level = _$emigratedModel.find('#mui-emigrated-level');
        for (var i = 0; i < data.length; i++) {
            options.push(String.format(optionHtml, data[i]['value'], data[i]['name']));
        }
        _$emigratedModel.$level.append(options);
        data = optionHtml = options = null;


    }


    /**
     * 全民团战 Model 初始化
     */
    function initFightTeamModel() {
        _$fightTeamModel = $(_fightTeamModelHtml);
        _$fightTeamModel.$errorMessage = _$fightTeamModel.find('.mui-error-message');
        _$fightTeamModel.find('#mui-fightTeam-submit').click(function () {
            mobileManage.getLoader().open('处理中');
            mobileManage.getFightTeamManage().apply({fightTeameType: _$fightTeamModel.$type.val()}, function (result) {
                mobileManage.getLoader().close();
                _$fightTeamModel.$errorMessage.html(result.message);
                alert(result.message);
            });
        });

        var data = [
            {value: '', name: '请选择'},
            {value: '1', name: '武当派'},
            {value: '2', name: '少林派'},
            {value: '3', name: '峨嵋派'},
            {value: '4', name: '华山派'}
        ]
        var optionHtml = '<option value="{0}">{1}</option>';
        var options = new Array();

        _$fightTeamModel.$type = _$fightTeamModel.find('#mui-fightTeam-type');
        for (var i = 0; i < data.length; i++) {
            options.push(String.format(optionHtml, data[i]['value'], data[i]['name']));
        }
        _$fightTeamModel.$type.append(options);
        data = optionHtml = options = null;
    }

    /**
     * 进入游戏或下载客户端
     */
    function _getGoOrDownloadGame(data) {
        if (!_$goOrDownloadGameModel) {
            initGoOrDownloadGameModel();
        }

        _$goOrDownloadGameModel.data = data;
        _$goOrDownloadGameModel.$title.html(_$goOrDownloadGameModel.data.title);
        _$goOrDownloadGameModel.$message.html(_$goOrDownloadGameModel.data.content);
        var data_img = '';
        var img = _$goOrDownloadGameModel.data.img;
        if (img) {
            data_img = '<img src="' + img + '">';
        }
        else {
            data_img = '';
        }

        _$goOrDownloadGameModel.$img.html(data_img);
        _$goOrDownloadGameModel.$goGame.html(_$goOrDownloadGameModel.data.goGameText || '网页游戏');
        _$goOrDownloadGameModel.$download.html(_$goOrDownloadGameModel.data.downloadText || '下载客户端');
        return _$goOrDownloadGameModel;
    }

    /**
     * 初始化 进入游戏或下载APP Model
     */
    function initGoOrDownloadGameModel() {
        _$goOrDownloadGameModel = $(_goGameOrdownloadModelHtml);
        _$goOrDownloadGameModel.$title = _$goOrDownloadGameModel.find('#mui-download-title');
        _$goOrDownloadGameModel.$message = _$goOrDownloadGameModel.find('#mui-download-message');
        _$goOrDownloadGameModel.$img = _$goOrDownloadGameModel.find('#mui-download-img');
        _$goOrDownloadGameModel.$goGame = _$goOrDownloadGameModel.find('#mui-goGame-submit');
        _$goOrDownloadGameModel.$download = _$goOrDownloadGameModel.find('#mui-download-submit');

        _$goOrDownloadGameModel.$download.click(function (e) {
            if ($.isFunction(_$goOrDownloadGameModel.data.goDownloadFn)) {
                _$goOrDownloadGameModel.data.goDownloadFn.apply(null, [e, _$goOrDownloadGameModel]);
            } else {
                window.location.href = _$goOrDownloadGameModel.data.download_url;
                that.close();
            }
        });
        _$goOrDownloadGameModel.$goGame.click(function (e) {
            if ($.isFunction(_$goOrDownloadGameModel.data.goGameFn)) {
                _$goOrDownloadGameModel.data.goGameFn.apply(null, [e, _$goOrDownloadGameModel]);
            } else {
                window.location.href = _$goOrDownloadGameModel.data.game_url;
                that.close();
            }
        });
    }


    /**
     * 进入游戏或下载客户端 --DT
     */
    function _getGoOrDownloadGameDT(data) {
        if (!_$goOrDownloadDTGameModel) {
            initGoOrDownloadGameDTModel();
        }

        _$goOrDownloadDTGameModel.data = data;
        _$goOrDownloadDTGameModel.$title.html(_$goOrDownloadDTGameModel.data.title);
        _$goOrDownloadDTGameModel.$message.html(_$goOrDownloadDTGameModel.data.content);

        var data_img = '';
        var img = _$goOrDownloadDTGameModel.data.img;
        if (img) {
            data_img = '<img src="' + img + '">';
        }
        else {
            data_img = '';
        }

        _$goOrDownloadDTGameModel.$img.html(data_img);

        _$goOrDownloadDTGameModel.$goGame.html(_$goOrDownloadDTGameModel.data.goGameText || '苹果客户端');
        _$goOrDownloadDTGameModel.$download.html(_$goOrDownloadDTGameModel.data.downloadText || '安卓客户端');
        return _$goOrDownloadDTGameModel;
    }

    /**
     * 初始化 进入游戏或下载APP Model --DT
     */
    function initGoOrDownloadGameDTModel() {
        _$goOrDownloadDTGameModel = $(_goGameOrdownloadDTModelHtml);
        _$goOrDownloadDTGameModel.$title = _$goOrDownloadDTGameModel.find('#mui-download-title');
        _$goOrDownloadDTGameModel.$message = _$goOrDownloadDTGameModel.find('#mui-download-message');
        _$goOrDownloadDTGameModel.$img = _$goOrDownloadDTGameModel.find('#mui-download-img');
        _$goOrDownloadDTGameModel.$goGame = _$goOrDownloadDTGameModel.find('#mui-goGame-submit');
        _$goOrDownloadDTGameModel.$download = _$goOrDownloadDTGameModel.find('#mui-download-submit');

        _$goOrDownloadDTGameModel.$download.click(function (e) {
            if ($.isFunction(_$goOrDownloadDTGameModel.data.goDownloadFn)) {
                _$goOrDownloadDTGameModel.data.goDownloadFn.apply(null, [e, _$goOrDownloadDTGameModel]);
            } else {
                window.location.href = _$goOrDownloadDTGameModel.data.download_url;
                that.close();
            }
        });
        _$goOrDownloadDTGameModel.$goGame.click(function (e) {
            if ($.isFunction(_$goOrDownloadDTGameModel.data.goGameFn)) {
                _$goOrDownloadDTGameModel.data.goGameFn.apply(null, [e, _$goOrDownloadDTGameModel]);
            } else {
                window.location.href = _$goOrDownloadDTGameModel.data.game_url;
                that.close();
            }
        });
    }


    /**
     * 进入游戏或者试玩游戏 Model 初始化
     */
    function initGoGameOrFunGameModel() {
        _$goGameOrFunGameModel = $(_goGameOrFunGameModelHtml);
        _$goGameOrFunGameModel.$title = _$goGameOrFunGameModel.find('#mui-goGameOrFunGame-title');
        _$goGameOrFunGameModel.$img = _$goGameOrFunGameModel.find('#mui-goGameOrFunGame-img');
        _$goGameOrFunGameModel.$message = _$goGameOrFunGameModel.find('#mui-goGameOrFunGame-message');

        _$goGameOrFunGameModel.find('#mui-goGameOrFunGame-go').click(function () {
            that.close();
            if (typeof _$goGameOrFunGameModel.config.goGame === 'function') {
                _$goGameOrFunGameModel.config.goGame();
            }
        });

        _$goGameOrFunGameModel.find('#mui-goGameOrFunGame-fun').click(function () {
            that.close();
            if (typeof _$goGameOrFunGameModel.config.goFun === 'function') {
                _$goGameOrFunGameModel.config.goFun();
            }
        });
    }

    /**
     * 进入游戏或者下载游戏 Model 初始化
     */
    function initGoGameOrDownloadGameModel() {
        _$goGameOrDownloadGameModel = $(_goGameOrDownloadGameModelHtml);
        _$goGameOrDownloadGameModel.$title = _$goGameOrDownloadGameModel.find('#mui-goGameOrDownloadGame-title');
        _$goGameOrDownloadGameModel.$img = _$goGameOrDownloadGameModel.find('#mui-goGameOrDownloadGame-img');
        _$goGameOrDownloadGameModel.$message = _$goGameOrDownloadGameModel.find('#mui-goGameOrDownloadGame-message');

        _$goGameOrDownloadGameModel.find('#mui-goGameOrDownloadGame-go').click(function () {
            that.close();
            if (typeof _$goGameOrDownloadGameModel.config.goGame === 'function') {

                _$goGameOrDownloadGameModel.config.goGame();
            }
        });

        _$goGameOrDownloadGameModel.find('#mui-goGameOrDownloadGame-fun').click(function () {
            that.close();
            if (typeof _$goGameOrDownloadGameModel.config.goFun === 'function') {
                _$goGameOrDownloadGameModel.config.goFun();
            }
        });
    }

    /**
     * 提款确认 物件
     * @param {Object} param 参数
     */
    function _withdrawalConfirm(config) {
        if (!_$withdrawalConfirmModel) {
            initWithdrawalConfirmModel();
        }
        var _config = {
            title: '输入标题',
            name: 'xxx',
            bankName: '内容',
            bankAccount: '内容',
            withdrawalMoney: 'xxx',
            callback: false
        };
        $.extend(_config, config);
        _$withdrawalConfirmModel.config = _config;
        _$withdrawalConfirmModel.$title.html(_config.title);
        _$withdrawalConfirmModel.$name.html(_config.name);
        _$withdrawalConfirmModel.$bankName.html(_config.bankName);
        _$withdrawalConfirmModel.$bankAccount.html(_config.bankAccount);
        _$withdrawalConfirmModel.$withdrawalMoney.html(_config.withdrawalMoney);
        return _$withdrawalConfirmModel;
    };

    /**
     * 提款确认 Model 初始化
     */
    function initWithdrawalConfirmModel() {
        _$withdrawalConfirmModel = $(_withdrawalConfirmModelHtml);
        _$withdrawalConfirmModel.$title = _$withdrawalConfirmModel.find('#mui-withdrawalConfirm-title');
        _$withdrawalConfirmModel.$name = _$withdrawalConfirmModel.find('#mui-withdrawalConfirm-name');
        _$withdrawalConfirmModel.$bankName = _$withdrawalConfirmModel.find('#mui-withdrawalConfirm-bankName');
        _$withdrawalConfirmModel.$bankAccount = _$withdrawalConfirmModel.find('#mui-withdrawalConfirm-bankAccount');
        _$withdrawalConfirmModel.$withdrawalMoney = _$withdrawalConfirmModel.find('#mui-withdrawalConfirm-withdrawalMoney');

        _$withdrawalConfirmModel.find('#mui-withdrawalConfirm-cancel').click(function () {
            that.close();
            if (typeof _$withdrawalConfirmModel.config.callback === 'function') {
                _$withdrawalConfirmModel.config.callback(false);
            }
        });

        _$withdrawalConfirmModel.find('#mui-withdrawalConfirm-submit').click(function () {
            that.close();
            if (typeof _$withdrawalConfirmModel.config.callback === 'function') {
                _$withdrawalConfirmModel.config.callback(true);
            }
        });
    }


}