
$(document).ready(function () {

    $('#txt_captcha').keydown(function (e) {
        if (e.keyCode == 13) {
            $(".login_comfirm").trigger("click");
        }
    });

    $("#LoginForm").submit(function () {
        return;
    });

    //登入提交表单
    $(".login_comfirm").click(function () {
        var txt_username = $("#txt_username").val();
        var txt_password = $("#txt_password").val();
        var txt_captcha = $("#txt_captcha").val();
        //alert(txt_username);
        //alert(txt_password);
        //alert(txt_captcha);
        if (txt_username != "" && txt_password != ""
         && txt_captcha != "") {

            $.ajax({
                type: 'post',
                url: '/account/login',
                data: {
                    userName: txt_username,
                    passWord: txt_password,
                    validateCode: txt_captcha
                },
                dataType: 'json',
                success: function (resp) {

                    if (resp.Success) {
                        //                        $(".login").hide();
                        //                        $(".logined").show();
                        //                        $("#txt_login_username").html(txt_username);
                        if ($("#returnUrl").val() == undefined) {
                            location.href = '/';
                        } else {
                            location.href = $("#returnUrl").val();
                        }
                    } else {
                        error(resp.Message);
                    }
                }
            });
        } else {
            var proptyText = "";
            if (txt_username == "") {
                proptyText = "用户名不能为空";
                $("#txt_username").focus();
            } else if (txt_password == "") {
                proptyText = "密码不能为空";
                $("#txt_password").focus();
            } else if (txt_captcha == "") {
                proptyText = "验证码不能为空";
                $("#txt_captcha").focus();
            }
            notify(proptyText);
        }
    });

     var _updateUserStatus = setInterval(updateUserStatus, 30000);
});


function updateUserStatus()
{
    $.get('/Ajax/UpdateStatus', function () { });
}


//demo 是否试玩，true为试玩，false为真钱
function loginGame(gameKey, gameCode, gameId, demo) {
    var deviceType = 0;
    if (demo || linkClick()) {
        var newTab;
        if (navigator.userAgent.toLowerCase().indexOf('sogoumobilebrowser') < 0) { //解决搜狗ios版浏览器兼容问题
            newTab = window.open('about:blank');
        }
        $.ajax({
            url: '/validate/canLoginGame',
            type: 'get',
            data: { gameKey: gameKey },
            dataType: 'text',
            success: function (resp) {
                if (resp == 'True' || demo) {
                    if (gameId == undefined) gameId = "";
                    if (gameCode == undefined) gameCode = "";
                    if (deviceType == undefined) deviceType = "";
                    if (demo == undefined) demo = false;
                    var url = '';
                    //if (gameKey == "pt")
                    //{ newTab.location.href = '/validate/LoginPT?gameKey=' + gameKey + '&gameCode=' + gameCode + '&gameId=' + gameId + '&deviceType=' + deviceType + ''; }
                    //else
                    if (gameKey == "CHG"||gameKey == "BBIN")
                    { url = '/validate/LoginGame?gameKey=' + gameKey + '&gamecode=' + gameCode + '&gameId=' + gameId + '&deviceType=' + deviceType + '&demo=' + demo; }
                    else
                    { url = '/Public/game.html?gameKey=' + gameKey + '&gamecode=' + gameCode + '&gameId=' + gameId + '&deviceType=' + deviceType + '&demo=' + demo; }

                    if (newTab == null) {
                        location.href = url;
                    } else {
                        newTab.location.href = url;
                    }
                } else {
                    setTimeout(function () {
                        newTab.close();
                    }, 200);
                    notify("登录限制");
                }
            }
        });
    }
}

function openwindow(url) {
    var url; //转向网页的地址;
    var name; //网页名称，可为空;
    var iWidth = 1200; //弹出窗口的宽度;
    var iHeight = 768; //弹出窗口的高度;
    var iTop = (window.screen.availHeight - 30 - iHeight) / 2; //获得窗口的垂直位置;
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; //获得窗口的水平位置;
    window.open(url, name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
}


function notify(msg, time) {
    if (time == undefined) {
        time = 1500;
    }
    jNotify(msg, {
        autoHide: true,
        TimeShown: time,
        VerticalPosition: 'center',
        HorizontalPosition: 'center',
        clickOverlay: false,
        ShowOverlay: true,
        ColorOverlay: '#35517c',
        OpacityOverlay: 0.6
    });
}
function success(msg) {

    jSuccess(msg, {
        VerticalPosition: 'center',
        HorizontalPosition: 'center',
        ShowOverlay: false,
        MinWidth: 120
    });
}
function error(msg) {
    jError(msg, {
        autoHide: true,
        TimeShown: 1200,
        VerticalPosition: 'center',
        HorizontalPosition: 'center',
        clickOverlay: false,
        ShowOverlay: true,
        ColorOverlay: '#35517c',
        OpacityOverlay: 0.6
    });
}