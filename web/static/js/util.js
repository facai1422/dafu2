/**
 *
 */
//限制輸入數字
function NumberInput(el) {
    var $e;
    if (el instanceof Element) {
        $e = $(el);
    } else if (typeof el === "string") {
        $e = $('#' + el);
        if (!$e.get(0)) return;
    } else {
        return;
    }


    $e.keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
}

/**
 * 延迟不重复执行相同action
 * @param {string} name 动作名称
 * @param {int} delay 延迟时间
 * @param {function} fn 执行的方法
 *
 */
var delayAction = (function () {
    var _timers = {};
    return function (name, delay, fn) {
        //实际执行
        function excute() {
            fn();
            delete _timers[name];
        }

        return (function () {
            if (_timers[name]) {
                clearTimeout(_timers[name]);
                _timers[name] = setTimeout(excute, delay);
                return;
            }
            _timers[name] = setTimeout(excute, delay);
        })();
    };
})();

//判断Mobile装置
function isMobile() {
    return (/AppleWebKit.*Mobile/i.test(navigator.userAgent)
        || /Android/i.test(navigator.userAgent)
        || /BlackBerry/i.test(navigator.userAgent)
        || /IEMobile/i.test(navigator.userAgent)
        || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent)));
}

function getMobileKind() {
    if (navigator.userAgent.match(/Android/i))
        return 'Android';
    if (navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i))
        return 'IOS';
    if (navigator.userAgent.match(/Windows Phone/i))
        return 'Windows Phone';
    return 'other';
}


//使用form submit 轉頁
function doFormSubmit(url, formData, target, method) {
    var _target = target || '_self';
    var _method = method || 'post';
    var _formHtml = '<form action="{0}" method="{3}" target="{2}">{1}</form>';
//	var _formHtml = '<form action="{0}" method="{3}" target="{2}">{1}</form>';
    var _inputHtml = '<input type="hidden" name="{0}" value="{1}"/>';
    //mobileManage.getLoader().open('跳转中');
    try {
        var inputs = '';
        for (var name in formData) {
            inputs += String.format(_inputHtml, name, formData[name]);
        }
        var $form = $(String.format(_formHtml, url, inputs, _target, _method));
        $('body').append($form);
        $form.submit();

    } catch (e) {
        mobileManage.getLoader().close();
    }

    setTimeout(function () {
        $form.remove();
        inputs = $form = null;
    }, 1000);
}

//APP下载	
/*
function getAppDown() {
    var isEmpty = 0;
    var version = getMobileKind().toUpperCase();

    // step 1
    if (version == 'OTHER') {
        alert('请用安卓或者苹果设备打开！！');
        return false;
    }

    // step 2 判断代理域名
    $.getJSON('/asp/checkAgentURLogin.php', function (data) {
        if (false == data) {
            // step 3 获取代理包
            $.getJSON('/app/getAppVersionCustomInfo.php', function (data) {
                if (data.length > 0) {
                    // 代理域名，有代理包
                    $.each(data, function (i, obj) {
                        //根据移动平台获取下载链接
                        if (obj.plat.toUpperCase() === version) {
                            if (obj.packageUrl != "") {
                                isEmpty = 0;
                                webapp.redirect(obj.packageUrl);
                                return false;
                            } else {
                                isEmpty = 1;
                            }
                        } else {
                            isEmpty = 1;
                        }
                    });

                    if (isEmpty == 1) {
                        alert('您好，请先登录游戏账号，若无账号，请先进入网页注册!');
                        return false;
                    }
                } else {
                    // step 4 代理域名，无代理包
                    if ('true' == 'true') {
                        alert('您好，请先登录游戏账号，若无账号，请先进入网页注册!');
                        return false;
                    } else {
                        window.location.href = 'http://www.yabo920.com';
                    }
                }
            });
        } else {
            window.location.href = 'http://www.yabo920.com';
        }
    });
}
*/
