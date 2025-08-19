function alertDetail(e) {
    var t = template("_t_msg_detail", e);
    $("#msg_detail").modal().find(".modal-body").html(t)
}

function getSysMsg() {
    // doAjaxPack("/sysMsg/indexShow.do", void 0, function (e) {
    //     var t = store.get("autoShowMsg");
    //     e.showMsg && 0 != t && alertDetail(e.showMsg)
    // })
}

function viewGameCountdown() {
    var e = store.get("lottery.currentCode") || "cqssc";
    // $(".lottery-logo").addClass(e), function () {
    //     var t = arguments.callee;
    //     doAjax("/ssc/initSscData.do", {shortName: e}, function (e) {
    //         "200" == e.code && (e = e.data, way.set("showExpect.currExpect", e.cursitem.issue), Number(e.remainTime) > 1 ? countDownTime(e.remainTime, t) : setTimeout(t, 1e3))
    //     }, void 0, function (e) {
    //         "200" != (e.responseJSON || {}).code && setTimeout(t, 1e3)
    //     })
    // }()
}

$(function () {
    getSysMsg(), viewGameCountdown()
});
var countDownTime = function () {
    var e;
    return function (t, o) {
        var a = (new Date).getTime() + 1e3 * t;
        e && clearTimeout(e), function () {
            var t, n, i, s = a - (new Date).getTime();
            s > 0 ? (s = Math.round(s / 1e3), t = (t = Math.floor(s / 3600 % 24)) < 10 ? "0" + t : t, n = (n = Math.floor(s / 60 % 60)) < 10 ? "0" + n : n, i = (i = Math.floor(s % 60)) < 10 ? "0" + i : i, way.set("gameTime", {
                h: t,
                m: n,
                s: i
            }), e = setTimeout(arguments.callee, 1e3)) : (way.set("gameTime", {h: "00", m: "00", s: "00"}), o && o())
        }()
    }
}();