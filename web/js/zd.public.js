// // public.js是所有子页面都要导入的js
// 首页js
function addFavorite(url, title) {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
        zdMessage.msg("由于浏览器功能限制，请按 Ctrl+D 手动收藏！");
    }
    else if (ua.indexOf("msie 8") > -1) {
        window.external.AddToFavoritesBar(url, title); //IE8
    }
    else if (document.all) {//IE类浏览器
        try {
            window.external.addFavorite(url, title);
        } catch (e) {
            zdMessage.msg('由于浏览器功能限制，请按 Ctrl+D 手动收藏！');
        }
    }
    else if (window.sidebar) {//firfox等浏览器；
        window.sidebar.addPanel(title, url, "");
    }
    else {
        zdMessage.msg('由于浏览器功能限制，请按 Ctrl+D 手动收藏！!');
    }
}

//保存到桌面
function toDesktop(sUrl, sName) {
    try {
        var WshShell = new ActiveXObject("WScript.Shell");
        var oUrlLink = WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop") + "\\" + sName + ".url");
        oUrlLink.TargetPath = sUrl;
        oUrlLink.Save();
    }
    catch (e) {
        zdMessage.msg("浏览器安全级别不允许操作！");
    }
}

$(function () {

    // 轮播图
    (function () {
        var i = 0;
        var clone = $(".banner .img li").first().clone();
        $(".banner .img").append(clone);
        var size = $(".banner .img li").size();
        /*轮播*/
        var t = setInterval(moveL, 5000)
        /*定时器*/
        $(".banner").hover(function () {
            clearInterval(t);
        }, function () {
            t = setInterval(moveL, 5000)
        })
        /*右边按钮*/
        $(".banner .btn-left").click(function () {
            moveL()
        })

        /*左边按钮*/
        $(".banner .btn-right").click(function () {
            moveR()
        })

		function addFavorite(url, title) {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
        zdMessage.msg("由于浏览器功能限制，请按 Ctrl+D 手动收藏！");
    }
    else if (ua.indexOf("msie 8") > -1) {
        window.external.AddToFavoritesBar(url, title); //IE8
    }
    else if (document.all) {//IE类浏览器
        try {
            window.external.addFavorite(url, title);
        } catch (e) {
            zdMessage.msg('由于浏览器功能限制，请按 Ctrl+D 手动收藏！');
        }
    }
    else if (window.sidebar) {//firfox等浏览器；
        window.sidebar.addPanel(title, url, "");
    }
    else {
        zdMessage.msg('由于浏览器功能限制，请按 Ctrl+D 手动收藏！!');
    }
}

//保存到桌面
function toDesktop(sUrl, sName) {
    try {
        var WshShell = new ActiveXObject("WScript.Shell");
        var oUrlLink = WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop") + "\\" + sName + ".url");
        oUrlLink.TargetPath = sUrl;
        oUrlLink.Save();
    }
    catch (e) {
        zdMessage.msg("浏览器安全级别不允许操作！");
    }
}


        function moveL() {
            i++
            if (i == size) {
                $(".banner .img").css({
                    left: 0
                })
                i = 1;
            }
            $(".banner .img").stop().animate({
                left: -i * 945
            }, 500)
            if (i == size - 1) {
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
            } else {
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
            }

            $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
        }

        function moveR() {
            i--
            if (i == -1) {
                $(".banner .img").css({
                    left: -(size - 1) * 945
                })
                i = size - 2;
            }
            $(".banner .img").stop().animate({
                left: -i * 945
            }, 500)
            $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
        }
    })();
    // 顶部的“信息”鼠标效果
    // $("#station-letters").hover(function () {
    //     $('.top-info').stop().slideDown("fast");
    //     $('.top-info').hover(function () {
    //         $(this).stop().slideDown("fast");
    //     }, function () {
    //         $(this).stop().slideUp("fast");
    //     })
    // }, function () {
    //     // $('.top-info').hide();
    //      $('.top-info').stop().slideUp("fast");
    // })
    // 顶部的“信息”鼠标效果
    //  $("#vip-center").hover(function () {
    //     $('.vip-info').stop().slideDown("fast");
    //     $('.vip-info').hover(function () {
    //         $(this).stop().slideDown("fast");
    //     }, function () {
    //         $(this).stop().slideUp("fast");
    //     })
    // }, function () {
    //      $('.vip-info').stop().slideUp("fast");
    // })
});

//头部会员中心


var notifyCommon = {
    addNotify: function (datas) {
        $("#J-notify-ul").empty();
        var isPlayWin = false;
        var isPlayMessage = false;
        for (var i = 0; i < datas.length; i++) {
            var data = datas[i];
            switch (data['type_id']) {
                case 5:
                    isPlayWin = true;
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 6:
                case 7:
                case 8:
                case 9:
                    isPlayMessage = true;
                    break;
            }
            if (data['type_id'] == 5) {
                isPlayWin = true;
            }
            $("#J-notify-ul").append("<li><span class=\"voice-icon\"></span>" + data['context'] + "</li>");
        }
        this.show();
        if (isPlayWin) {
            playVoice('win');
        }
        if (isPlayMessage) {
            playVoice('message');
        }
    },
    show: function () {
        $(".notice-win").show("fast");
        setTimeout(function () {
            $(".notice-win").hide("fast");
        }, 3000)
    }
};


// 中奖通告滚动
(function () {

    //点击注册切换按钮
    $('.registeredAnimate').click(function () {
        $('.main-box-login').addClass('hidden');
        $('.main-box-left-reg').addClass('active');
        $('.main-box-left-reg').removeClass('hidden');
    })
    //点击登录切换按钮
    $('.clicklogin').click(function () {
        $('.main-box-login').removeClass('hidden');
        $('.main-box-login').addClass('active');
        $('.main-box-left-reg').addClass('hidden');
    })


    var ul = $('.up-turn ul'),
        ulHeight = ul.height(),
        liHeight = ul.find('li').eq(0).outerHeight(true),
        num = liHeight;
    var setInt = setInterval(function () {
        ul.animate({
            'margin-top': -num + 'px',
        }, 1000);
        num += liHeight;
        if (num >= ul.height() - (liHeight * 4)) {
            ul.animate({
                'margin-top': 0 + 'px',
            }, 1);
            num = 0;
        }
    }, 2000)
})();

var ifVery = false;
//下拉
$(document).on('click', '.drop-down-show', function () {
    var _this = this.children[1];
    $('.drop-down-hide').each(function () {
        if (this != _this && $(this).css('display') == 'block') {
            $(this).slideToggle(100);
        }
    })
    $(this).find('.drop-down-hide').slideToggle(100);
});

$(document).on('click', '.drop-down-hide li', function () {
    $(this).parent().prev().text($(this).text());
});

 setInterval(function () {
        var d = new Date();
        var nian = d.getFullYear();
        var yue = d.getMonth() + 1;
        var dd = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var h = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        var m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        var s = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        var month = yue < 10 ? '0' + yue : yue;
        var str = nian + "-" + month + "-" + dd + " " + h + ":" + m + ":" + s
        $('.datetime').html(str);
    }, 1000);



$('html').click(function () {
    if (ifVery) {
        $('.drop-down-hide').each(function (i) {
            if ($(this).css('display') == 'block') {
                $(this).slideToggle(100);
            }
        });
        ifVery = false;
    }
})

$(document).on('mouseover', '.drop-down-show', function () {
    ifVery = false;
});
$(document).on('mouseout', '.drop-down-show', function () {
    ifVery = true;
})

function gotoup() {
    $("body,html").stop().animate({
        scrollTop: 0
    }, 300);
}

$(function () {
    if (!window.localStorage.skin) {
        window.localStorage.skin = "skin2.css";
    }
    // 回到顶部
    $(".rocket-top").click(function () {
        $('body,html').animate({scrollTop: 0}, 500);
    });

    //侧边栏点击显示隐藏
    $(document).on('click', '.in-side-toogle', function () {
        var in_sideul = $('.in-side');

        if (in_sideul.css('height') == "40px") {
            $('.in-side').animate({
                height: "100%"
            }, 500);
            $('.side-list').fadeIn(500);
        } else {
            $('.in-side').animate({
                height: "40px"
            }, 500);
            $('.side-list').fadeOut(300);
        }
    });

    function setChecked(name, checked) {
        $('#' + name).each(function () {
            $(this).attr('checked', checked);
        });
    }

    function setDefaultVoice() {
        var chk_open_voice = localStorage.getItem(currentUsername + '_chk_open_voice');
        var chk_win_voice = localStorage.getItem(currentUsername + '_chk_win_voice');
        var chk_message_voice = localStorage.getItem(currentUsername + '_chk_message_voice');
        if (chk_open_voice == null) {
            localStorage.setItem(currentUsername + '_chk_open_voice', 'true');
        }
        if (chk_win_voice == null) {
            localStorage.setItem(currentUsername + '_chk_win_voice', 'true');
        }
        if (chk_message_voice == null) {
            localStorage.setItem(currentUsername + '_chk_message_voice', 'true');
        }
    }

    $("#voice-set").click(function () {
        $('.voice-set-mask').fadeIn(300);
        $('.voice-model').slideDown(500);
        var chk_open_voice = localStorage.getItem(currentUsername + '_chk_open_voice');
        var chk_win_voice = localStorage.getItem(currentUsername + '_chk_win_voice');
        var chk_message_voice = localStorage.getItem(currentUsername + '_chk_message_voice');
        setChecked('checkbox-lottery', chk_open_voice == 'true');
        setChecked('checkbox-win', chk_win_voice == 'true');
        setChecked('checkbox-mes', chk_message_voice == 'true');
    });
    $("#checkbox-lottery").change(function () {
        if ($(this).is(':checked')) {
            localStorage.setItem(currentUsername + '_chk_open_voice', 'true');
        } else {
            localStorage.setItem(currentUsername + '_chk_open_voice', 'false');
        }

    });
    $("#checkbox-win").click(function () {
        if ($(this).is(':checked')) {
            localStorage.setItem(currentUsername + '_chk_win_voice', 'true');
        } else {
            localStorage.setItem(currentUsername + '_chk_win_voice', 'false');
        }
    });
    $("#checkbox-mes").click(function () {
        if ($(this).is(':checked')) {
            localStorage.setItem(currentUsername + '_chk_message_voice', 'true');
        } else {
            localStorage.setItem(currentUsername + '_chk_message_voice', 'false');
        }
    });
    $('.voice-close').click(function () {
        $('.voice-set-mask').fadeOut(300);
        $('.voice-model').slideUp(500);
    });
    setDefaultVoice();
    var feedbackContent = ' <div class="global-feedback-window-cont">\n' +
        '        <div style="display:flex;align-items:center;justify-content: space-between;"><div class="title-text">\n' +
        '            请选择类型：<select name="feedbackType" id="J-feedbackType">' +
        '           <option value="99" selected>意见反馈</option>' +
        '           <option value="3">充值类</option>' +
        '           <option value="4">提现类</option>' +
        '           <option value="5">游戏类</option>' +
        '       </select>\n' +
        '        </div>\n' +
        '        <div class="title-text" style="display: none;margin-left:20px;" id="J-div-orderNo">\n' +
        '            订 单 编 号：<input name="orderNo" style="margin-left:1px;width:171px;color:#333;" id="J-input-orderNo" type="text" value="" placeholder="请您输入订单编号">' +
        '        </div></div><br>\n' +
        '        <div>\n' +
        '            <textarea maxlength="1000" placeholder="请提出您对于正点游戏的意见和建议：(包括用户体验、界面、网络、活动政策等任何建议，1000字以内)" style="width: 100%;\n' +
        '    height: 206px;\n' +
        '    line-height: 20px;\n' +
        '    font-size: 12px;\n' +
        '    margin: 0px;\n' +
        '    padding: 5px 10px;\n' +
        '    border-width: 1px;\n' +
        '    border-style: solid;\n' +
        '    border-color: rgb(198, 198, 198);\n' +
        '    border-image: initial;\n' +
        '    border-radius: 3px;resize:none"  id="J-text-feedback-value" class="feedback-textarea"></textarea>\n' +
        '            <div class="tip-text-length"><span id="J-text-feedback-length">0</span>/1000</div>\n' +
        '        </div>\n' +
        '    </div>';
    $("#feedback").click(function () {
        zdMessage.open({
            title: '意见和建议',
            content: feedbackContent,
            area: ['500px'],
            btn: ['确定', '容我再想想'],
            yes: function (index, layero) {
                text = $('#J-text-feedback-value').val();
                if ($.trim(text) == '') {
                    alert('请输入您想对正点游戏的建议!');
                    $('#J-text-feedback-value').focus();
                    return false;
                }
                var postData = {
                    'comment': text,
                    '_token': $.trim($('#refreshAmountToken').val()),
                    'feedbackType': $("#J-feedbackType").val(),
                    'orderNo': $("#J-input-orderNo").val()
                };
                $.ajax({
                    url: '/suggestions/create',
                    dataType: 'json',
                    method: 'post',
                    data: postData,
                    beforeSend: function () {
                        zdMessage.close(index)
                    },
                    success: function (data) {
                        if (Number(data['isSuccess']) == 1) {
                            zdMessage.alert('感谢您的意见与反馈，正点将竭诚为您服务!', {icon: 1});
                        } else {
                            zdMessage.alert(data['Msg'], {icon: 2});
                        }
                    },
                    error: function (xhr, type) {
                        zdMessage.alert('提交失败:' + type, {icon: 2});
                    }
                });
                return false;
            },
            success: function () {
                $("#J-feedbackType").change(function () {
                    if ($(this).val() != 99) {
                        $("#J-div-orderNo").show();
                        $("#J-input-orderNo").focus();
                        $("#J-input-orderNo").select();
                    } else {
                        $("#J-div-orderNo").hide();
                        $("#J-div-orderNo").val('');
                    }
                });
                $(document).on('keyup', '.feedback-textarea', function () {
                    var v = this.value, len = v.length, maxlen = 1000;
                    $('#J-text-feedback-length').text(len);
                    if (len > maxlen) {
                        this.value = v.substr(0, maxlen);
                    }
                });
            }
        });
    });

    $('.hide').on('click', function () {
        $('.top-balance-show').css('display', $('.top-balance-show').css('display') == 'none' ? 'inline-block' : 'none');
        $('.top-balance-hide').css('display', $('.top-balance-hide').css('display') == 'none' ? 'inline-block' : 'none');
        if ($(this).attr('isShow') == 'true') {
            $(this).html('显示');
            $(this).attr('isShow', 'false');
        } else {
            $(this).html('隐藏');
            $(this).attr('isShow', 'true');
        }
    })
    // $('.top-nav-left .kind-right a').on('click', function () {
    //     $(this).parent().parent().parent().slideToggle("fast")
    // })
    // $('.top-nav-left li >a').on('click', function () {
    //     $(this).next().slideToggle("fast")
    // })

    // $('.top-nav-left li >a').hover(function () {
    //     $(this).next().stop().slideDown("fast");
    // }, function () {
    //     $(this).next().hide();
    // })
    // $('.top-nav-left .left-item').hover(function () {
    //     $(this).show();
    // }, function () {
    //     $(this).hide();
    // })
});

// zd.mainframe.js结束

// zd.common.js
function openwindow() {
    var name = '正点客服';
    var iWidth = '840';
    var iHeight = '630';
    var name; //网页名称，可为空;
    var iWidth; //弹出窗口的宽度;
    var iHeight; //弹出窗口的高度;
    //window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
    var iTop = (window.screen.height - 30 - iHeight) / 2; //获得窗口的垂直位置;
    var iLeft = (window.screen.width - 10 - iWidth) / 2; //获得窗口的水平位置;
    window.open(window.live800Url, name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
}

function openOtherWindow(url, name, iWidth, iHeight) {
    // var name = '正点客服';
    // var iWidth = '840';
    // var iHeight = '630';
    // var name; //网页名称，可为空;
    // var iWidth; //弹出窗口的宽度;
    // var iHeight; //弹出窗口的高度;
    //window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
    var iTop = (window.screen.height - 30 - iHeight) / 2; //获得窗口的垂直位置;
    var iLeft = (window.screen.width - 10 - iWidth) / 2; //获得窗口的水平位置;
    window.open(url, name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
}

function playVoice(type) {
    var mp3Address = '';
    var mp3Time = 0;
    switch (type) {
        case 'open':
            if (localStorage.getItem(currentUsername + '_chk_open_voice') != 'true') {
                return
            }
            mp3Address = '/v1/voices/open.mp3';
            mp3Time = 2;
            break;
        case 'message':
            if (localStorage.getItem(currentUsername + '_chk_message_voice') != 'true') {
                return
            }
            mp3Address = '/v1/voices/message.mp3';
            mp3Time = 2;
            break;
        case 'win':
            if (localStorage.getItem(currentUsername + '_chk_win_voice') != 'true') {
                return
            }
            mp3Address = '/v1/voices/win.wav';
            mp3Time = 10;
            break;
    }
    mp3Address = mp3Address + '?v=' + appVersion;
    if (/msie/.test(navigator.userAgent.toLowerCase())) {
        $('.video').html('<bgsound  src="' + mp3Address + '" loop="0"/>');
    } else {
        $('.video').html('<audio  src="' + mp3Address + '" autoplay="autoplay"/>');
    }

}

var zdMessage = {
    formatOption: function (option) {
        var skin = 'layui-layer-lan';
        var zdSkin = GetCookie('zd_skin_setting');
        var anim = 1;
        switch (zdSkin) {
            case 'zd.skin1':
                // skin = 'layui-layer-molv';
                anim = 1;
                break;
            case 'zd.skin2':
                anim = 1;
                break;
            case 'zd.skin3':
                // skin = 'layui-layer-molv';
                anim = 1;
                break;
            case 'zd.skin4':
                anim = 1;
                break;
            case 'zd.skin5':
                anim = 1;
                break;
        }
        if (option == undefined) {
            option = {skin: skin, anim: anim};
        } else {
            option.skin = skin;
            if (option.anim == undefined) {
                option.anim = anim;
            }
        }
        return option;
    },
    getTipsColor: function () {
        var color = '585568';
        var zdSkin = GetCookie('zd_skin_setting');
        switch (zdSkin) {
            case 'zd.skin1':
                color = '#585568';
                break;
            case 'zd.skin2':
                color = '#222f38';
                break;
            case 'zd.skin3':
                color = '#00b599';
                break;
            case 'zd.skin4':
                color = '#5d473a';
                break;
            case 'zd.skin5':
                color = '#E4332D';
                break;
        }
        return color;
    },
    tips: function (text, el) {
        if (window.event) event.preventDefault();
        var p = window.parent;
        if (p.layer) {
            return p.layer.tips(text, el, {
                tips: [2, this.getTipsColor()],
                area: ['auto', 'auto'],
                time: 0
            });
        } else {
            return layer.tips(text, el, {
                tips: [2, this.getTipsColor()],
                area: ['auto', 'auto'],
                time: 0
            });
        }
    },
    error: function (message, callback) {
        if (message.indexOf('pop-text') <= 0) {
            message = "<p class=\"pop-text\">" + message + "</p>";
        }
        var option = {
            icon: 2,area: ["25%",'auto'],maxWidth:600,maxHeight:400
        };
        this.alert(message,option , callback);
    },
    success: function (message, callback) {
        var option = {
            icon: 1,area: ["25%",'auto'],maxWidth:600,maxHeight:400
        };
        this.alert(message, option, callback);
    },
    alert: function (message, option, callback) {
        option = this.formatOption(option);
        if (window.event) event.preventDefault();
        var p = window.parent;
        if (callback && !$.isFunction(callback)) {
            if (p.layer) {
                return p.layer.alert(message, option);
            } else {
                return layer.alert(message, option);
            }

        } else {
            if (p.layer) {
                return p.layer.alert(message, option, callback);
            } else {
                return layer.alert(message, option, callback);
            }
        }
    },
    load: function () {
        if (window.event) event.preventDefault();
        var p = window.parent;
        if (p.layer) {
            return p.layer.load(2);
        } else {
            return layer.load(2);
        }
    },
    confirm: function (message, option, callback) {
        option = this.formatOption(option);
        if (window.event) event.preventDefault();
        var p = window.parent;
        if (callback && !$.isFunction(callback)) {
            if (p.layer) {
                return p.layer.confirm(message, option);
            } else {
                return layer.confirm(message, option);
            }
        } else {
            if (p.layer) {
                return p.layer.confirm(message, option, callback);
            } else {
                return layer.confirm(message, option, callback);
            }
        }
    },
    open: function (option, callback) {
        option = this.formatOption(option);
        if (window.event) event.preventDefault();
        var p = window.parent;
        if (callback && !$.isFunction(callback)) {
            if (p.layer) {
                return p.layer.open(option);
            } else {
                return layer.open(option);
            }
        } else {
            if (p.layer) {
                return p.layer.open(option, callback);
            } else {
                return layer.open(option, callback);
            }
        }
    },
    close: function (index) {
        if (window.event) event.preventDefault();
        var p = window.parent;
        if (p.layer) {
            return p.layer.close(index);
        } else {
            return layer.close(index);
        }
    },
    msg: function (message, option) {
        option = this.formatOption(option);
        if (window.event) event.preventDefault();
        var p = window.parent;
        if (p.layer) {
            return p.layer.msg(message);
        } else {
            return layer.msg(message);
        }
    },
    getLayer: function () {
        var p = window.parent;
        if (p.layer) {
            return p.layer;
        } else {
            return layer;
        }
    }
};

function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s;
}

function updateMessageTop(data) {
    if ($("#J-message-list").attr('md5') !== data['md5']) {
        $("#J-message-list").empty();
        for (var item in data) {
            if (data[item].toString() === '[object Object]') {
                var htmlArray = new Array();
                htmlArray.push('<li class="chat_item"  onclick="mailChat(' + data[item].id + ')" data-id="' + data[item].id + '" ' + (data[item].is_read == 1 ? 'class="read"' : "") + '><div class="mes-item-left"><i class="icon-email icon-email1"></i>');
                htmlArray.push('<span>[' + data[item].type + ']</span>');
                htmlArray.push('<p>' + data[item].title + '</p>');
                htmlArray.push('</div>');
                htmlArray.push('<div class="mes-item-right">');
                htmlArray.push(timestampToTime(data[item].updated_at) + '</div></li>');
                $("#J-message-list").append(htmlArray.join(''));
            }
        }

        $("#J-message-list").attr('md5', data['md5']);
    }
}

function updateMessageCount(count) {
    var p = window.parent;
    if (p.$) {
        if (p.$('.info_num').length == 0 && count != null && count != 0) {
            $("#station-letters").append('<span class="info_num"></span>');
        }
        if (count != null && count != 0) {
            if (count > 99) {
                count = '...';
            }
            p.$('.info_num').html(count);
            p.$('span[name="J-letters-message"]').html(count);
        } else {
            p.$('.info_num').remove();
        }
    }
}

function updateBalance(balance) {
    var p = window.parent;
    var domArray = ['em', 'span', 'p'];
    for (var i = 0; i < domArray.length; i++) {
        $(domArray[i]).each(function () {
            if ($(this).attr('name') == 'J-balls-statistics-balance') {
                $(this).html(balance);
            }
        });
    }
    if (p.$) {
        for (var i = 0; i < domArray.length; i++) {
            p.$(domArray[i]).each(function () {
                if ($(this).attr('name') == 'J-balls-statistics-balance') {
                    $(this).html(balance);
                }
            });
        }
    }
}

$(function () {
    // var ji = document.getElementById('J-add-fastorder');

    if ($('#popWindow').length) {
        $type = $('#popWindow').attr('type');
        var content = $('#popWindow').find('.pop-bd > .pop-content').html();
        var icon = 1;
        var option = {icon: icon};
        switch ($type) {
            case "success":
                option.title = '系统提醒';
                option.content = content;
                option.icon = 1;
                break;
            case 'system_error':
            case "error":
                option.title = '系统提醒';
                option.icon = 2;
                option.content = content;
                break;
        }
        zdMessage.getLayer().open(zdMessage.formatOption(option));
    }

    $("#n-hide").click(function () {
        $(this).hide();
        $("#m-show").hide();
        $("#m-show2").hide();
        $(".J-a-refreshAmount").hide();
        $("#m-hide").show();
        $("#s-hide").show();
    });
    $("#s-hide").click(function () {
        $(this).hide();
        $("#m-hide").hide();
        $("#m-show").show();
        $("#m-show2").show();
        $("#n-hide").show();
        $(".J-a-refreshAmount").show();
    });
    $(".J-a-refreshAmount").click(function (e) {
        e.stopPropagation();
        $(".c_check1").hide();
        $(".c_check2").show();
        $.ajax({
            url: '/users/refresh-amount',
            data: {'_token': $("#refreshAmountToken").val()},
            type: 'POST',
            dataType: 'json',
            success: function (data) {
                if (data['isSuccess']) {
                    var balance = data['data']['amount'];
                    updateBalance(balance);
                    updateMessageCount(data['data']['msg_count']);
                    notifyCommon.addNotify(data['data']['notify_message']);
                    updateMessageTop(data['data']['message'])
                }
                $(".c_check2").hide();
                $(".c_check1").show();
            }
        });
    });
    window.setTimeout(function () {
        $(".J-a-refreshAmount").click();
    }, 0);
    window.setInterval(function () {
        $(".J-a-refreshAmount").click();
    }, 5000);
});

function setSkin(skin) {
    $("#css2").attr("href", skin);
    $("#css2").attr('href', skin);
    $("#css1").attr('href', skin);
}

$('.skin .skin-button button').on('click', function () {
    var cookieName = $(this).parent().attr('cookieName');
    var cookieValue = $(this).attr('cookieValue');
    var skinSrc = $(this).attr('skinSrc');
    setSkin(skinSrc);
    SetCookie(cookieName, cookieValue);
});

function SetCookie(name, value) {
    var key = '';
    var exp = new Date();
    var domain = "";
    exp.setTime(exp.getTime() + 7 * 24 * 60 * 60 * 1000);
    if (key == null || key == "") {
        document.cookie = name + "=" + encodeURI(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=" + domain + ";";
    }
    else {
        var nameValue = GetCookie(name);
        if (nameValue == "") {
            document.cookie = name + "=" + key + "=" + encodeURI(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=" + domain + ";";
        }
        else {
            var keyValue = getCookie(name, key);
            if (keyValue != "") {
                nameValue = nameValue.replace(key + "=" + keyValue, key + "=" + encodeURI(value));
                document.cookie = name + "=" + nameValue + ";expires=" + exp.toGMTString() + ";path=/;domain=" + domain + ";";
            }
            else {
                document.cookie = name + "=" + nameValue + "&" + key + "=" + encodeURI(value) + ";expires=" + exp.toGMTString() + ";path=/;" + domain + ";";
            }
        }
    }
}

function GetCookie(name) {
    var nameValue = "";
    var key = "";
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        nameValue = decodeURI(arr[2]);
    }
    if (key != null && key != "") {
        reg = new RegExp("(^| |&)" + key + "=([^(;|&|=)]*)(&|$)");
        if (arr = nameValue.match(reg)) {
            return decodeURI(arr[2]);
        }
        else return "";
    }
    else {
        return nameValue;
    }
}

// zd.common.js结束

// 站内信聊天
function mailChat(dataId) {
    var maxCount = 280;
    var chatMain = ' <div id="J-chat-send">\n' +
        '        <div id="chat-main" class="chat-main">\n' +
        '            <div class="chat-title">' +
        '           <h5>与上级对话中</h5>' +
        '       </div>\n' +
        '        <ul id="chat-content" class="chat-content">\n' +
        '        </ul>' +
        '            <textarea id="chat-mes" style="resize: none" class="chat-msg" maxlength="' + maxCount +
        '         " placeholder="请输入信息内容，最多' + maxCount + '个字符"></textarea>\n' +
        '        <button id="sendbtn" class="sendbtn">发送</button>' +
        '            <p class="total inputNum"><span>0</span>/' + maxCount + '</p>\n' +
        '    </div></div>';
    var url = "/station-letters/readBy?id=" + dataId;
    var urlTo = "/station-letters/sendBy";
    layer.open({
        type: 1,
        title: false,
        //closeBtn: 0,
        area: ['750px', '452px'],
        //shadeClose: true,
        'content': chatMain,
        success: function (layero, index) {
            // 计算输入的个数
            $("#chat-mes").on('keyup', function () {
                var i, len, code;
                var Str = $(this).val();
                len = Str.length;
                for (i = 0; i < Str.length; i++) {
                    code = Str.charCodeAt(i);
                    if (code > 255) {
                        len++;
                    }
                }

                $(".chat-main .inputNum span").text(len);
                if (len > maxCount) {
                    $(".chat-main .inputNum span").text(maxCount);
                    $("#chat-mes").val($(this).val().substring(0, maxCount));
                }
            });
            // 计算输入的个数结束

            var input = document.getElementById('chat-mes'); //查找缓存

            //快捷键 发送
            document.onkeypress = function (event) {
                var e = event || window.event;
                var keycode = e.keyCode || e.which;
                if (keycode == 13) { //判断同时按下enter（13），ctrl 和enter（10）
                    $("#sendbtn").click();
                }
            }
            $("#sendbtn").click(function () {
                var content = $("#chat-mes").val();
                // var dataId = $(this).attr('data-id');
                if (dataId == '') {
                    layer.close(index);
                    zdMessage.msg('请选择对话');
                }
                content = content.replace(/<[^>]+>/g, "");
                if (content == '') {
                    zdMessage.msg('请输入信息内容,最多' + maxCount + '个字符');
                    $("#chat-mes").select();
                    $("#chat-mes").focus();
                    return;
                }
                $.ajax({
                    url: urlTo,
                    dataType: 'json',
                    method: 'post',
                    data: {
                        'content': content,
                        'id': dataId,
                        '_token': $.trim($('#refreshAmountToken').val())
                    },
                    success: function (data) {
                        $(".chat-main .inputNum span").text(0);
                        if (data.isSuccess) {
                            var htmlArray = new Array();
                            htmlArray.push('<div class="addbox-right"><div class="chat-face right"></div><div  class="dialog-box">');
                            htmlArray.push('<div class="chat-name right"><span class="chat-time" style="font-size:12px;color:#c4c4c3;">' + timestampToTime(data.data.created_at) + '</span>' + data.data.send_user + '</div><br>');
                            htmlArray.push('<div class="chat-msg-Content right chat-msg-Content-right">' + data.data.content + '</div></div></div>');
                            $('#chat-content').append(htmlArray.join(''));
                            var scrollHeight = $('#chat-content').prop("scrollHeight");
                            $('#chat-content').animate({scrollTop: scrollHeight}, 200);
                            $("#chat-mes").val('');
                            $("#chat-mes").select();
                            $("#chat-mes").focus();
                        } else {
                            zdMessage.msg(data.message);
                        }

                    },
                    error: function (xhr, type) {
                        zdMessage.msg('提交失败:' + type);
                    }
                });
            })
            var timestampToTime = function (timestamp) {
                var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                Y = date.getFullYear() + '-';
                M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                D = date.getDate() + ' ';
                h = date.getHours() + ':';
                m = date.getMinutes() + ':';
                s = date.getSeconds();
                return Y + M + D + (h < 10 ? '0' + h : h) + (m < 10 ? '0' + m : m) + (s < 10 ? '0' + s : s);
            };
            $.ajax({
                url: url,
                type: 'get',
                data: {id: dataId},
                dataType: 'json',
                success: function (data) {
                    if (data.isSuccess) {
                        data = data.data;
                        $(".chat-title").html(data.title);
                        for (var i = data.chats.length - 1; i >= 0; i--) {
                            var htmlArray = new Array();
                            htmlArray.push('<div class="addbox-right"><div class="chat-face ' + (data.chats[i].is_self ? 'right' : 'left') + '"></div><div  class="dialog-box">');
                            htmlArray.push('<div class="chat-name right"><span class="chat-time" style="font-size:12px;color:#c4c4c3;">' + timestampToTime(data.chats[i].created_at) + '</span>' + data.chats[i].send_user + '</div><br>');
                            htmlArray.push('<div class="chat-msg-Content right chat-msg-Content-right">' + data.chats[i].content + '</div></div></div>');
                            $('#chat-content').append(htmlArray.join(''));
                        }
                        var scrollHeight = $('#chat-content').prop("scrollHeight");
                        $('#chat-content').animate({scrollTop: scrollHeight}, 200);
                        $("#sendbtn").attr('data-id', dataId);
                    }
                }
            });
        }
    })
}

function refreshBetRecordFrame() {
    $('#record-iframe').attr("src", $("#game-record-section  >li.current").attr("srclink") + '?dt=' + (new Date().getTime()));
}


// 左侧浮动效果
$(document).ready(function () {
    var setSession = function (status) {
        $.post('/set-service-hide', 'status=' + status, function () {

        });
    };
    //隐藏
    $(".float-close").click(function () {
        $("#left-side").addClass("hidden");
        $("#float-open").addClass("active");
        $("#float-open").removeClass("hidden");
        setSession('CLOSE');

    });
    //显示
    $(".hidden-btn:eq(0)").click(function () {
        $("#float-open").addClass("hidden");
        $("#left-side").addClass("active");
        $("#left-side").removeClass("hidden");

        setSession('SHOW');
    });

});

// 左侧浮动效果结束


// 左侧浮动效果结束