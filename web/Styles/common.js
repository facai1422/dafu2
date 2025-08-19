//ajax方法
function ajax(_url, _data, _callback, _isWaiting, _waitingMsg, _type, _datatype) {
    if (_isWaiting == undefined) { _isWaiting = true; }
    $.ajax({
        type: _type == undefined ? "post" : _type,
        url: _url,
        data: _data,
        dataType: _datatype == undefined ? "json" : _datatype,
        timeout: 30000,
        beforeSend: function (XMLHttpRequest) { if (_isWaiting) { } },
        success: _callback != undefined ? _callback : function (data) { },
        error: function (XMLHttpRequest, textStatus, errorThrown) { },
        complete: function (XMLHttpRequest, textStatus) { if (_isWaiting) { } }
    });
}

//格式化
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}


function strToJson(str) {
    if (!/^\{.*/.test(str)) { return null }
    if (str) {
        var json = eval('(' + str + ')');
        return json;
    }
    else {
        return null;
    }
}


//验证是否为手机号
function isMobile(mobile) {
    if (mobile == "") {
        return false;
    }
    if (isNaN(mobile) || (mobile.length != 11)) {
        return false;
    }
    var reg = /^((1[34578][0-9]{1}))\d{8}$/;
    if (!reg.test(mobile)) {
        return false;
    } else {
        return true;
    }
}

//检查邮箱
function EmailCheck(emai1) {
    if (emai1 == "") {
        return false;
    }
    var myreg = /^[0-9a-zA-Z_\-\.]+@[0-9a-zA-Z_\-]+(\.[0-9a-zA-Z_\-]+)*$/;
    if (!myreg.test(emai1))
    { return false; }
    else {return true;}
}