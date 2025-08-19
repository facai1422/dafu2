/**
 *
 */
function FooterBar(config) {
    var that = this;
    var _config = {
        role: false
    };
    $.extend(_config, config);

    var _ROLE = _config.role;

    var _footerHtml = [
        '<footer class="common-footer">',
        '</footer>'
    ].join('');

    var _footerItemHtml = [
        '<div class="item {0}">',
        '	<div class="iconfont {1}"></div>',
        '	<div class="text">{2}</div>',
        '</div>'
    ].join('');

    var _footerItemHtml2 = [
        '<div class="item itemlogin {0}">',
        '	<div class="iconfont {1}"></div>',
        '	<div class="text">{2}</div>',
        '</div>'
    ].join('');

    var _footerItems = {
        'index': {id: 'index', text: '首页', icon: 'icon-tab_home'},
        'preferential': {id: 'preferential', text: '优惠', icon: 'icon-tab_discount'},
        'bbs': {id: 'bbs', text: '微社区', icon: 'icon-shequ1'},
        'vip': {id: 'vip', text: 'VIP', icon: 'icon-tab_news'},
        'email': {id: 'email', text: '站内信', icon: 'icon-mailopen'},
        'friend': {id: 'friend', text: '圈子', icon: 'icon--duihua'},
        'agent': {id: 'agent', text: '合作协议', icon: 'icon-tab_discount'},
        'agentUrl': {id: 'agentUrl', text: '立即推广', icon: 'icon-lijitu'},
        'agentJoin': {id: 'agentJoin', text: '立即加盟', icon: 'icon-tab_news'},
        'game': {id: 'game', text: '立即游戏', icon: 'icon-tab_game'},
        'fundsManage': {id: 'fundsManage', text: '我的', icon: 'icon-tab_mine'},
        'agentHistory': {id: 'agentHistory', text: '我的', icon: 'icon-tab_mine'},

        'register': {id: 'register', text: '注册', icon: 'icon-zhuce'},
        'login': {id: 'login', text: '登录', icon: 'icon-denglu'}
    };

    var _customFooterItemAuth = ['index', 'preferential', 'game', 'vip', 'fundsManage'];
    var _agentFooterItemAuth = ['index', 'agent', 'agentUrl', 'agentJoin', 'agentHistory'];
    var _defultFooterItemAuth = ['index', 'preferential', 'game', 'vip', 'fundsManage'];

    var _event = {};
    var _$body;
    var _$scrollWrap;
    var _delay = 200;

    that.renderItem = _renderItem;
    that.scrollHide = _scrollHide;
    that.active = _active;
    that.hide = _hide;
    that.show = _show;
    that.onHide = false;
    that.onShow = false;
    that.defHeight = 0;

    //产生 footer
    function _init() {
        _$body = $('body');
        if (_$body.find('footer[class="common-footer"]').length > 0) {
            return;
        }
        _$body.append(_footerHtml);
        that.$el = _$body.find('footer[class="common-footer"]');
        _renderItem();

        that.defHeight = that.$el.height();
    }

    //产生footer item
    function _renderItem() {
        var itemArray = new Array();
        var itemAuth = _getItemAuth();
        var obj, $item;
        for (var i = 0, l = itemAuth.length; i < l; i++) {
            obj = _footerItems[itemAuth[i]];
            if (itemAuth.length == '2') {
                $item = $(String.format(_footerItemHtml2, obj.id, obj.icon, obj.text));
                $item.bind('click', {itemObj: obj}, _getClickEvent);
                itemArray.push($item);
            }
            else if (obj) {
                $item = $(String.format(_footerItemHtml, obj.id, obj.icon, obj.text));
                $item.bind('click', {itemObj: obj}, _getClickEvent);
                itemArray.push($item);
            }
        }
        that.$el.append(itemArray);
        itemArray = itemAuth = obj = $item = null;
    }

    //取得item显示权限
    function _getItemAuth() {
        if (_ROLE == 'MONEY_CUSTOMER')
            return _customFooterItemAuth;
        if (_ROLE == 'AGENT')
            return _agentFooterItemAuth;
        return _defultFooterItemAuth;
    }

    //设定按钮事件
    function _getClickEvent(e) {
        switch (e.data.itemObj.id) {
            case 'index':
                window.location.href = '/mobile/index.jsp';
                break;
            case 'register':
                window.location.href = '/mobile/register.jsp';
                break;
            case 'login':
                window.location.href = '/mobile/login.jsp';
                break;
            case 'preferential':
                window.location.href = '/mobile/preferential.jsp';
                break;
            case 'agentUrl':
                window.location.href = '/mobile/agentpromotion.jsp';
                break;
            case 'game':
                window.location.href = '/mobile/app/slotGame.jsp?openMobile&platform=PTN';
                break;
            case 'bbs':
                window.location.href = 'http://wsq.discuz.com/?siteid=265079942&source=wap&c=index&a=index&mobile=2';
                break;
            case 'vip':
                window.location.href = '/mobile/vip.jsp';
                break;
            case 'email':
                if (!_ROLE) {
                    //mobileManage.getModel().open('login',['email']);
                    window.location.href = '/mobile/login.jsp';
                } else {
                    mobileManage.redirect('email');
                }
                break;
            case 'fundsManage':
                if (!_ROLE) {
                    //mobileManage.getModel().open('login',['fundsManage']);
                    window.location.href = '/mobile/login.jsp';
                } else if (_ROLE == 'AGENT') {
                    mobileManage.redirect('agent', {active: 1});
                } else {
                    mobileManage.redirect('fundsManage', {mode: 0, depositMode: 0});
                }
                break;
            case 'agentHistory':
                if (!_ROLE) {
                    //mobileManage.getModel().open('login',['agentHistory']);
                    window.location.href = '/mobile/login.jsp';
                } else if (_ROLE == 'AGENT') {
                    window.location.href = '/mobile/agentHistory.jsp';
                } else {
                    window.location.href = '/mobile/accountHistory.jsp';
                }
                break;
            case 'agentJoin':
                if (!_ROLE) {
                    //mobileManage.getModel().open('login',['agentHistory']);
                    window.location.href = '/mobile/login.jsp';
                } else if (_ROLE == 'AGENT') {
                    window.location.href = '/mobile/cooperationlogin.jsp?openMobile';
                } else {
                    window.location.href = '/mobile/cooperationlogin.jsp?openMobile';
                }
                break;
            case 'agent':
                if (!_ROLE) {
                    //mobileManage.getModel().open('login',['agentHistory']);
                    window.location.href = '/mobile/login.jsp';
                } else if (_ROLE == 'AGENT') {
                    window.location.href = '/mobile/app/yhagent/index.html?openMobile';
                } else {
                    window.location.href = '/mobile/app/yhagent/index.html?openMobile';
                }
                break;
            default:
        }
    }

    /**
     * 选取item by key
     */
    function _active(key) {
        _activeItem(_footerItems[key]);
    }

    /**
     * 选取item
     */
    function _activeItem(obj) {
        if (!obj || typeof obj !== 'object')return;
        var $active = that.$el.find('.' + obj.id);
        //console.log($active);
        if ($active.length == 0) {
            _activeItem(_footerItems['index']);
            return;
        }

        $active.addClass('active');
        $active.children('div:first-child').removeClass().addClass('iconfont ' + obj.icon + '_selecte');
        that.$el.scrollLeft($active.position().left - $active.width() * 2);
        $active = null;
    }


    /**
     * 滑动时隐藏
     * @param {Boolean} hide
     *
     */
    function _scrollHide(hide) {
        _$scrollWrap = _$body.find('>.main-wrap');
        if (hide) {
            _$scrollWrap.bind('scroll', _onScroll);
        } else {
            _$scrollWrap.unbind('scroll', _onScroll);
        }
    }

    /**
     *
     */
    function _onScroll(e) {
        delayAction('headerOnScorll', _delay, function () {
            var margin = _$body.find('>.main-wrap>.header-margin').height();
            if (_$body.find('>.main-wrap>.content').position().top == margin && that.$el.position().top != 0) {
                _show();
            } else if (_$body.find('>.main-wrap>.content').position().top != margin && that.$el.position().top == 0) {
                _hide();
            }
        });
    }

    /**
     * 绑定事件
     * @param {String} event 名称
     * @param {Function} 处理方法
     */
    function _bind(event, handler) {
        if (typeof event !== 'string') {
            alert('event 参数格式错误！');
            return;
        }
        if (typeof handler !== 'function') {
            alert('handler 参数格式错误！');
            return;
        }

        if (!_event[event]) {
            _event[event] = new Array();
        }
        _event.push(handler);
    }

    /**
     * 解绑定事件
     * @param {String} event 名称
     * @param {Function} 处理方法
     */
    function _unbind(event, handler) {
        if (typeof event !== 'string') {
            alert('event 参数格式错误！');
            return;
        }
        if (typeof handler !== 'function') {
            alert('handler 参数格式错误！');
            return;
        }

        if (_event[event]) {
            _event[event] = null;
        }
    }


    /**
     * 绑定事件
     * @param {String} event 名称
     */
    function _trigger(event) {
        if (typeof event !== 'string') {
            alert('event 参数格式错误！');
            return;
        }
        var array = _event[event];
        if (!array)return;

        for (var i = 0, l = array.length; i < l; i++) {
            array[i]();
        }
    }

    /**
     * 隐藏
     */
    function _hide() {
        that.$el.css('bottom', -that.defHeight);
        _trigger('hide');
    }

    /**
     * 显示
     */
    function _show() {
        that.$el.css('bottom', 0);
        _trigger('show');
    }

    _init();
}