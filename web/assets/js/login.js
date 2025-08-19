/**
 * Created by L on 2015/11/9.
 * 前台登陆脚本
 *
 */
/// <reference path="jquery.d.ts" />
var login = (function () {
    function login(data) {
        this.currenturl = data.currenturl;
        this.submiturl = data.submiturl;
    }
    login.prototype.checkform = function () {
        var uname;
        var passwd;
        var vcode;
        //验证数据
        uname = $('#username').val();
        passwd = $('#password').val();
        vcode = $('#verifycode').val();
        if (!uname) {
            this.tips('请输入用户名', 0);
            return false;
        }
        if (!passwd) {
            this.tips('请输入密码', 0);
            return false;
        }
        /*if (!vcode) {
            this.tips('请输入验证码', 0);
            return false;
        }*/
        //返回数据
        var redata;
        redata = { username: uname, password: passwd, verifycode: vcode };
        return redata;
    };
    login.prototype.submitlogin = function () {
        var _this = this;
        var checkdata;
        checkdata = this.checkform();
        if (checkdata) {
            //console.info($.cookie("popped"));
            $.cookie("popped", null);
            //$('#main_login_btn').text('登陆中...');
            $.ajax({
                type: "POST",
                url: this.submiturl,
                data: checkdata,
                success: function (data) {
                    if (data.code == 1) {
                        //$('#main_login_btn').val(data.msg);
                        _this.tips(data.msg, 1);
                        // $('#main_login_btn').text('登陆成功');
                        setTimeout('window.location="' + _this.currenturl + '"', 2500);
                    }
                    else {
                        /*if (data.msg == '验证码错误') {
                            //重置验证码
                            $('#imgcode').trigger('click');
                        }*/
                        //$('#main_login_btn').text('立即登陆');
                        _this.tips(data.msg, 0);
                    }
                }
            });
        }
    };
    //提示信息
    login.prototype.tips = function (msg, type) {
        if (type == 1) {
            $('#foottips').addClass('success');
            $('.tips').addClass('green');
        }
        else {
            $('#foottips').addClass('error');
            $('.tips').addClass('red');
        }
        $('.tips').html(msg).show('fast');
        setTimeout("$('.tips').hide('slow')", 5000);
    };
    login.prototype.keydown = function (s) {
        var currKey, e;
        var e = 13;
        var s = s || window.event;
        currKey = s.keyCode || s.which || s.charCode;
        if (currKey == e)
            this.submitlogin();
    };
    return login;
}());
$(function () {
    var mylogin = new login(submitdata);
    $('#main_login_btn').click(function () { mylogin.submitlogin(); });
    document.onkeydown = function (s) { mylogin.keydown(s); };
});
