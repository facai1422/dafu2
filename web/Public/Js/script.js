function iapiLogin(a, b, c, d) {
    return iapiLoginModeDownload = !1, iapiLoginModeFlash = !1, iapiBaseLogin(a, b, c, d), iapiERR_OK
}
function iapiLaunchClient(a, b, c, d, e, f) {
    if (iapiConf["clientUrl_" + a]) {
        var g = iapiConf["clientUrl_" + a];
        if (b && (g = iapiAddUrlParams(g, "game=" + b)), c && (g = iapiAddUrlParams(g, "preferedmode=" + c)), iapiClientParams["clientParams_" + a] && (g = iapiAddUrlParams(g, iapiClientParams["clientParams_" + a])), iapiLoginModeFlash)return void(document.location = g);
        var h = "width=800,height=600";
        if (void 0 != e && void 0 != f)if (-1 == e && -1 == f) {
            h = "", ("Microsoft Internet Explorer" == navigator.appName || navigator.userAgent.indexOf("Safari") >= 0 && navigator.userAgent.indexOf("Chrome") < 0) && (h = "left=0,top=0,");
            var i = screen.width, j = screen.height;
            void 0 != screen.availWidth && (i = screen.availWidth, j = screen.availHeight), "number" == typeof innerWidth && "number" == typeof outerWidth && (i -= outerWidth - innerWidth, j -= outerWidth - innerWidth), h += "width=" + i + ",height=" + j
        } else h = "width=" + e + ",height=" + f; else if (iapiConf["windowSize_" + a]) {
            var k = iapiConf["windowSize_" + a][b];
            void 0 == k && (k = iapiConf["windowSize_" + a]["default"]), void 0 != k && iapiConf.windowSizes[k] && (h = iapiConf.windowSizes[k])
        }
        if (null != d && d.length > 0) {
            var l = document.getElementById(d);
            if (l)return l.src = g, iapiERR_OK
        } else d = "";
        windowParams = h + ",toolbar=no,menubar=no,scrollbars=no,resizable=no";
        var m = window.open(g, d, windowParams);
        return null == m || m.closed ? iapiERR_BLOCKED : iapiERR_OK
    }
    return iapiERR_NOK
}
function iapiSetClientParams(a, b) {
    iapiClientParams["clientParams_" + a] = b
}
function iapiRequestTemporaryToken(a, b, c) {
    iapiClearRedirectRequests(iapiCALLOUT_TEMPORARYTOKEN, a);
    var d = "GetTemporaryAuthenticationToken.php?casinoname=" + iapiConf.casinoname;
    return d += void 0 != c ? "&serviceType=" + c : "&serviceType=" + iapiConf.serviceType, d += void 0 != b ? "&systemId=" + b : "&systemId=" + iapiConf.systemId, void 0 != a && (d += "&realMode=" + a), iapiGWMode && (jsonObject = new Object, jsonObject.ID = 30001, void 0 != c ? jsonObject.serviceType = c : jsonObject.serviceType = iapiConf.serviceType, void 0 != b ? jsonObject.systemId = b : jsonObject.systemId = iapiConf.systemId, d = iapiEncodeGWJson(jsonObject, a)), iapiMakeRedirectRequest(d, null, iapiCALLOUT_TEMPORARYTOKEN), iapiERR_OK
}
function iapiDownloadLogin(a, b, c, d) {
    return iapiLoginModeDownload = !0, iapiLoginModeFlash = !1, iapiBaseLogin(a, b, c, d), iapiERR_OK
}
function iapiFlashLogin(a, b, c, d, e, f) {
    return iapiLoginModeFlash = !0, iapiLoginModeDownload = !1, iapiFlashLoginClientType = e, iapiFlashLoginGameType = f, iapiBaseLogin(a, b, c, d), iapiERR_OK
}
function iapiLogout(a, b) {
    iapiUsername = null, iapiPassword = null, iapiClearRedirectRequests(iapiCALLOUT_LOGIN, b), 1 == b ? iapiWriteClientCookie("loginSuccess=0&errorCode=0&expire=-1", 1) : iapiWriteClientCookie("loginSuccess=0&errorCode=0&expire=-1", 0);
    var c = "Logout.php?allSessions=" + a + "&casinoname=" + iapiConf.casinoname;
    return void 0 != b && (c += "&realMode=" + b), iapiGWMode && (jsonObject = new Object, jsonObject.ID = 31013, c = iapiEncodeGWJson(jsonObject, b)), iapiMakeRedirectRequest(c, null, iapiCALLOUT_LOGOUT), iapiERR_OK
}
function iapiSetCallout(a, b) {
    return iapiCalloutFunctions[a] = b, iapiERR_OK
}
function iapiGetWaitingMessages(a, b) {
    iapiClearRedirectRequests(iapiCALLOUT_MESSAGES, 0), iapiClearRedirectRequests(iapiCALLOUT_MESSAGES, 1), a || (a = "login,bonus,alert");
    var c = "GetWaitingMessages.php?messageTypes=" + a + "&casinoname=" + iapiConf.casinoname + "&realMode=" + b;
    return iapiGWMode && (jsonObject = new Object, jsonObject.ID = 31013, jsonObject.messageTypes = a, c = iapiEncodeGWJson(jsonObject, b)), iapiMakeRedirectRequest(c, null, iapiCALLOUT_MESSAGES), iapiERR_OK
}
function iapiBonusConfirmation(a, b, c) {
    var d = "SubmitDialog.php?dialogType=BonusConfirmation&casinoname=" + iapiConf.casinoname;
    void 0 != c && (d += "&realMode=" + c);
    var e = [];
    return e.bonusIdentifier = a, b ? e.accept = 1 : e.accept = 0, iapiGWMode && (jsonObject = new Object, jsonObject.ID = 31022, b ? jsonObject.accept = "true" : jsonObject.accept = "false", jsonObject.bonusIdentifier = a, d = iapiEncodeGWJson(jsonObject, c)), iapiMakeRedirectRequest(d, e, iapiCALLOUT_SUBMITDIALOG), iapiERR_OK
}
function iapiValidateTCVersion(a, b, c) {
    var d = "ValidateLoginSession.php?validationType=TCVersion&casinoname=" + iapiConf.casinoname;
    void 0 != c && (d += "&realMode=" + c);
    var e = [];
    return e.termVersionReference = a, b ? e.accept = 1 : e.accept = 0, iapiGWMode && (jsonObject = new Object, jsonObject.ID = 31011, b ? jsonObject.accept = "true" : jsonObject.accept = "false", jsonObject.termVersionReference = a, d = iapiEncodeGWJson(jsonObject, c)), iapiMakeRedirectRequest(d, e, iapiCALLOUT_SESSIONVALIDATION), iapiERR_OK
}
function iapiValidatePasswordChange(a, b, c, d) {
    var e = "ValidateLoginSession.php?validationType=PasswordChange&casinoname=" + iapiConf.casinoname;
    void 0 != d && (e += "&realMode=" + d);
    var f = [];
    return f.oldPassword = a, f.newPassword = b, c && (f.changePassword = 1), iapiGWMode && (jsonObject = new Object, jsonObject.ID = 31028, jsonObject.newPassword = b, jsonObject.oldPassword = a, e = iapiEncodeGWJson(jsonObject, d)), iapiMakeRedirectRequest(e, f, iapiCALLOUT_SESSIONVALIDATION), iapiERR_OK
}
function iapiForgotPassword(a, b, c, d) {
    var e = "ForgotPassword.php?casinoname=" + iapiConf.casinoname + "&realMode=" + d, f = [];
    return f.username = a, f.email = b, f.birthDate = c, iapiGWMode && (jsonObject = new Object, jsonObject.ID = 31058, jsonObject.userName = a, jsonObject.email = b, jsonObject.birthDate = c, e = iapiEncodeGWJson(jsonObject, d)), iapiMakeRedirectRequest(e, f, iapiCALLOUT_FORGOTPASSWORD), iapiERR_OK
}
function iapiGetLoggedInPlayer(a) {
    var b = "GetLoggedInPlayer.php?casinoname=" + iapiConf.casinoname + "&realMode=" + a;
    return iapiGWMode && (jsonObject = new Object, jsonObject.ID = 60006, b = iapiEncodeGWJson(jsonObject, a)), iapiMakeRedirectRequest(b, null, iapiCALLOUT_GETLOGGEDINPLAYER), iapiERR_OK
}
function iapiSetAuthenticationType(a) {
    iapiConf.authenticationType = a
}
function iapiSetClientSkin(a) {
    iapiConf.clientSkin = a
}
function iapiSetClientType(a) {
    iapiConf.clientType = a
}
function iapiSetClientVersion(a) {
    iapiConf.clientVersion = a
}
function iapiSetClientPlatform(a) {
    iapiConf.clientPlatform = a
}
function iapiSetSystemId(a) {
    iapiConf.systemId = a
}
function iapiSetServiceType(a) {
    iapiConf.serviceType = a
}
function iapiCallbackWaitingMessages(a) {
    var b = iapiGetRequest(iapiWaitingMessagesId);
    if (b) {
        var c = {errorCode: 6, errorText: "Invalid response.", playerMessage: ""};
        if (a ? c = a.errorCode ? {
                errorCode: a.errorCode,
                errorText: a.errorText,
                playerMessage: a.playerMessage
            } : null : a = c, c && 6 == c.errorCode && b[3].length < iapiConf.loginDomainRetryCount) {
            var d = (new Date).getTime() + Math.round(1e6 * Math.random()), e = setTimeout("iapiRequestFailed(" + d + ")", 1e3 * iapiConf.loginDomainRetryInterval);
            return void iapiRegisterRequestId(d, iapiCALLOUT_MESSAGES, e, b[3], b[4], b[5])
        }
        iapiCalloutFunctions[iapiCALLOUT_MESSAGES] && setTimeout(function () {
            iapiCalloutFunctions[iapiCALLOUT_MESSAGES](a)
        }, iapiEVENT_TIMER)
    }
}
function iapiBaseLogin(a, b, c, d) {
    return iapiHasRedirectRequest(iapiCALLOUT_LOGIN) && iapiRealMode != c ? (iapiNextLogin = [a, b, c, d], iapiERR_OK) : (iapiUsername = a, iapiPassword = b, iapiRealMode = 1 == c ? 1 : 0, iapiLanguageCode = d, iapiLoginSuccess = !1, iapiWriteClientCookie("loginInProgress=1", iapiRealMode), iapiContinueLogin(), iapiERR_OK)
}
function iapiContinueLogin() {
    iapiClearRedirectRequests(iapiCALLOUT_LOGIN, 0), iapiClearRedirectRequests(iapiCALLOUT_LOGIN, 1);
    var a = "Login.php?casinoname=" + iapiConf.casinoname + "&clientType=" + iapiConf.clientType + "&clientVersion=" + iapiConf.clientVersion + "&languageCode=" + iapiLanguageCode;
    a += iapiLoginModeDownload ? "&clientPlatform=download" : iapiConf.clientPlatform ? "&clientPlatform=" + iapiConf.clientPlatform : "&clientPlatform=flash", iapiConf.clientSkin && (a += "&clientSkin=" + iapiConf.clientSkin), a += 1 == iapiRealMode ? "&realMode=1" : "&realMode=0";
    var b = [];
    b.username = iapiUsername, iapiConf.authenticationType && "externalToken" == iapiConf.authenticationType ? b.externalToken = iapiPassword : b.password = iapiPassword, iapiGWMode && (jsonObject = new Object, jsonObject.ID = 31001, jsonObject.userName = iapiUsername, iapiConf.authenticationType && "externalToken" == iapiConf.authenticationType ? jsonObject.externalToken = iapiPassword : jsonObject.password = iapiPassword, jsonObject.clientVersion = iapiConf.clientVersion, jsonObject.languageCode = iapiLanguageCode, a = iapiEncodeGWJson(jsonObject, iapiRealMode)), iapiMakeRedirectRequest(a, b, iapiCALLOUT_LOGIN)
}
function iapiWriteClientCookie(a, b) {
    if (!iapiLoginModeDownload) {
        var c = iapiConf.clientCookieUrl;
        if (c) {
            c.indexOf("://") < 0 && (c = location.protocol + "//" + c);
            var d = c + "?" + a + "&casinoname=" + iapiConf.casinoname + "&realMode=" + b, e = iapiRealCookieIframe;
            0 == b && (e = iapiFunCookieIframe), iapiCreateDiv(iapiDivname), iapiCreateIframe(iapiDivname, e), iapiGet(e, d)
        }
    }
}
function iapiCreateDiv(a) {
    if (!document.getElementById(a)) {
        var b = document.createElement("div");
        b.setAttribute("id", a), b.setAttribute("style", "DISPLAY:none;"), document.body.appendChild(b)
    }
}
function iapiCreateIframe(a, b) {
    var c = document.getElementById(a);
    if (document.getElementById(b)) {
        if (b == iapiIframename + "_" + iapiGetLoggedInPlayerRequestIdReal || b == iapiIframename + "_" + iapiGetLoggedInPlayerRequestIdFun)return !0;
        c.removeChild(document.getElementById(b))
    }
    var d;
    try {
        d = document.createElement("<iframe name='" + b + "'>")
    } catch (e) {
        d = document.createElement("iframe")
    }
    return d.setAttribute("id", b), d.setAttribute("name", b), d.setAttribute("style", "DISPLAY: none; LEFT: 0px; POSITION: absolute; TOP: 0px"), d.setAttribute("width", "0px"), d.setAttribute("height", "0px"), d.setAttribute("border", "0px"), d.setAttribute("frameborder", "0"), d.setAttribute("src", "javascript:false;"), c.appendChild(d), !1
}
function iapiPost(a, b, c) {
    var d, e = "<html><head></head><body><form id='formid' target='" + a + "' method='POST' action='" + b + "'>";
    for (d in c)"function" != typeof c[d] && (e += "<input type='hidden' name='" + d + "' value='" + c[d] + "'>");
    e += "</form><script type='text/javascript'>setTimeout(function(){document.getElementById('formid').submit();},100);</script></body></html>", iapiPostWindow(a, e)
}
function iapiPostWindow(a, b) {
    var c = document.getElementById(a);
    if (c)try {
        c.contentWindow.document.open(), c.contentWindow.document.write(b), c.contentWindow.document.close()
    } catch (d) {
        var e = "<script>document.domain='" + document.domain + "';</script>" + b, f = "javascript:'<script>window.onload=function(){var ed=\\'" + escape(escape(e)) + "\\';document.write(unescape(ed));document.close();};</script>'";
        c.src = f
    }
}
function iapiMakeRedirectRequest(a, b, c, d) {
    if (d) {
        if (d.length >= iapiConf.loginDomainRetryCount)return !1
    } else d = [];
    var e = iapiConf.loginServer.split("|");
    if (d.length < e.length) {
        var f;
        for (f in d) {
            var g, h = d[f];
            for (g in e)if (e[g] == h && "string" == typeof e[g]) {
                e.splice(g, 1);
                break
            }
        }
    }
    var i = e[Math.floor(Math.random() * e.length)];
    d.push(i), requestUrl = "https://" + i + "/" + a;
    var j = (new Date).getTime() + Math.round(1e6 * Math.random());
    c == iapiCALLOUT_GETLOGGEDINPLAYER && (j = a.indexOf("realMode=1") > 0 ? iapiGetLoggedInPlayerRequestIdReal : iapiGetLoggedInPlayerRequestIdFun), iapiConf.redirectUrl && c != iapiCALLOUT_MESSAGES ? requestUrl += "&redirectUrl=" + escape(location.protocol + "//" + location.hostname + iapiConf.redirectUrl + "#requestId=" + j) : requestUrl += "&cacheBreaker=" + (new Date).getTime();
    var k = setTimeout("iapiRequestFailed(" + j + ")", 1e3 * iapiConf.loginDomainRequestTimeout);
    if (iapiRegisterRequestId(j, c, k, d, a, b), iapiGWMode)return requestUrl = iapiMakeGWRequestUrl(j, a), iapiCallGW(j, requestUrl), !0;
    if (c == iapiCALLOUT_MESSAGES)iapiWaitingMessagesId = j, iapiJsonp(requestUrl, "iapiCallbackWaitingMessages"); else {
        var l = iapiIframename + "_" + j;
        iapiCreateDiv(iapiDivname);
        var m = iapiCreateIframe(iapiDivname, l);
        if (iapiMessagesSupported || initMessageListener(), iapiMessagesSupported && (requestUrl += "&messagesSupported=1", m && iapiMessagesAnswered)) {
            var n = document.getElementById(l);
            if (n.contentWindow.postMessage)return n.contentWindow.postMessage(c, "https://" + i), !0
        }
        b ? iapiPost(l, requestUrl, b) : iapiGet(l, requestUrl)
    }
    return !0
}
function iapiJsonp(a, b) {
    scriptElement = document.createElement("SCRIPT"), scriptElement.type = "text/javascript", scriptElement.src = a + "&jsoncallback=" + b + "&responseType=json", document.getElementsByTagName("HEAD")[0].appendChild(scriptElement)
}
function iapiGet(a, b) {
    var c = document.getElementById(a);
    c && (c.src = b)
}
function iapiAddUrlParams(a, b) {
    return a += a.indexOf("?") > 0 ? "&" : "?", a + b
}
function iapiLoginFailedActions(a) {
    iapiPassword = null, iapiLoginSuccess = !1, iapiSessionValid = 0;
    var b = a.errorCode;
    iapiWriteClientCookie("loginSuccess=0&errorCode=" + b, iapiRealMode), iapiCalloutFunctions.login && setTimeout(function () {
        iapiCalloutFunctions.login(0, 0, b, iapiRealMode)
    }, iapiEVENT_TIMER), iapiCalloutFunctions[iapiCALLOUT_LOGIN] && setTimeout(function () {
        iapiCalloutFunctions[iapiCALLOUT_LOGIN](a)
    }, iapiEVENT_TIMER), iapiLoginModeDownload && iapiDownloadHtcmd(0, 0, b, ""), iapiCheckNextLogin()
}
function iapiTokenFailedActions(a) {
    iapiCalloutFunctions.temporarytoken && setTimeout(function () {
        iapiCalloutFunctions.temporarytoken(0, null)
    }, iapiEVENT_TIMER), iapiCalloutFunctions[iapiCALLOUT_TEMPORARYTOKEN] && setTimeout(function () {
        iapiCalloutFunctions[iapiCALLOUT_TEMPORARYTOKEN](a)
    }, iapiEVENT_TIMER), iapiLoginModeDownload && iapiDownloadHtcmd(1, iapiSessionValid, 0, "")
}
function iapiCheckNextLogin() {
    if (null != iapiNextLogin) {
        var a = iapiNextLogin[0], b = iapiNextLogin[1], c = iapiNextLogin[2], d = iapiNextLogin[3];
        iapiNextLogin = null, setTimeout(function () {
            iapiLogin(a, b, c, d)
        }, iapiEVENT_TIMER)
    }
}
function iapiDownloadHtcmd(a, b, c, d) {
    if (a && d) {
        var e = "htcmd:login?";
        e = e + "username=" + encodeURIComponent(iapiUsername), e = e + "&password=" + encodeURIComponent(d), e = e + "&realmode=" + iapiRealMode, e += "&type=3", document.location = e
    }
}
function iapiRedirectCallback(wc) {
    var xc = String(wc.requestId), yc = wc.requestReady;
    if (yc)return void iapiSendToGWSucceeded(xc);
    var zc = iapiGetRequest(xc);
    if (zc) {
        var Ac = zc[1], Bc = null;
        try {
            Bc = JSON.parse(wc.redirectResponse)
        } catch (err) {
        }
        if (null == Bc)try {
            Bc = eval("(" + wc.redirectResponse + ")")
        } catch (err) {
        }
        var Cc = {errorCode: 6, errorText: "Invalid response.", playerMessage: ""};
        if (Bc ? Cc = Bc.errorCode ? {
                errorCode: Bc.errorCode,
                errorText: Bc.errorText,
                playerMessage: Bc.playerMessage
            } : null : Bc = Cc, Cc && 6 == Cc.errorCode && zc[3].length < iapiConf.loginDomainRetryCount) {
            var xc = (new Date).getTime() + Math.round(1e6 * Math.random()), Dc = setTimeout("iapiRequestFailed(" + xc + ")", 1e3 * iapiConf.loginDomainRetryInterval);
            return void iapiRegisterRequestId(xc, Ac, Dc, zc[3], zc[4], zc[5])
        }
        if (Ac == iapiCALLOUT_LOGIN)if (null == Cc) {
            iapiPassword = null, iapiLoginSuccess = !0, iapiError = null, iapiSessionValid = 1;
            var Ec = Bc.sessionValidationData;
            Ec && (iapiSessionValid = 0);
            var Fc = "loginSuccess=1&sessionValid=" + iapiSessionValid + "&loginDomain=" + iapiConf.loginServer;
            if (iapiWriteClientCookie(Fc, iapiRealMode), iapiCalloutFunctions.login && setTimeout(function () {
                    iapiCalloutFunctions.login(1, iapiSessionValid, 0, iapiRealMode)
                }, iapiEVENT_TIMER), iapiCalloutFunctions[iapiCALLOUT_LOGIN] && setTimeout(function () {
                    iapiCalloutFunctions[iapiCALLOUT_LOGIN](Bc)
                }, iapiEVENT_TIMER), iapiLoginModeDownload)iapiSessionValid ? iapiRequestTemporaryToken(iapiRealMode) : iapiDownloadHtcmd(1, 0, 0, ""); else if (iapiLoginModeFlash)if (iapiSessionValid) {
                var Gc = "real";
                iapiRealMode || (Gc = "fun"), iapiLaunchClient(iapiFlashLoginClientType, iapiFlashLoginGameType, Gc)
            } else iapiRedirectToWeblogin();
            iapiCheckNextLogin()
        } else iapiError = Cc, iapiLoginFailedActions(Bc); else Ac == iapiCALLOUT_TEMPORARYTOKEN ? null == Cc && Bc.sessionToken && Bc.sessionToken.sessionToken ? (iapiCalloutFunctions.temporarytoken && setTimeout(function () {
            iapiCalloutFunctions.temporarytoken(1, Bc.sessionToken.sessionToken)
        }, iapiEVENT_TIMER), iapiCalloutFunctions[iapiCALLOUT_TEMPORARYTOKEN] && setTimeout(function () {
            iapiCalloutFunctions[iapiCALLOUT_TEMPORARYTOKEN](Bc)
        }, iapiEVENT_TIMER), iapiLoginModeDownload && iapiDownloadHtcmd(1, 1, 0, Bc.sessionToken.sessionToken)) : iapiTokenFailedActions(Bc) : iapiCalloutFunctions[Ac] && setTimeout(function () {
            iapiCalloutFunctions[Ac](Bc)
        }, iapiEVENT_TIMER)
    }
}
function iapiRequestFailed(a) {
    var b = iapiGetRequest(a);
    if (b) {
        var c = b[1];
        if (!iapiMakeRedirectRequest(b[4], b[5], c, b[3])) {
            var d = {errorCode: 6, errorText: "Request timed out.", playerMessage: ""};
            c == iapiCALLOUT_LOGIN ? iapiCalloutFunctions[iapiCALLOUT_LOGIN] && iapiLoginFailedActions(d) : c == iapiCALLOUT_TEMPORARYTOKEN ? iapiCalloutFunctions[iapiCALLOUT_TEMPORARYTOKEN] && iapiTokenFailedActions(d) : iapiCalloutFunctions[c] && setTimeout(function () {
                iapiCalloutFunctions[c](d)
            }, iapiEVENT_TIMER)
        }
    }
}
function iapiRegisterRequestId(a, b, c, d, e, f) {
    iapiRequestIds.push([a, b, c, d, e, f])
}
function iapiGetRequest(a) {
    var b;
    for (b in iapiRequestIds)if (arr = iapiRequestIds[b], arr[0] == a) {
        iapiRequestIds.splice(b, 1), arr[2] && clearTimeout(arr[2]);
        var c = document.getElementById(iapiIframename + "_" + a);
        return c && a != iapiGetLoggedInPlayerRequestIdReal && a != iapiGetLoggedInPlayerRequestIdFun && document.getElementById(iapiDivname).removeChild(c), arr
    }
    return null
}
function iapiClearRedirectRequests(a, b) {
    for (var c = 0; c < iapiRequestIds.length;) {
        if (arr = iapiRequestIds[c], arr[1] == a) {
            var d = 0;
            if (arr[4].indexOf("realMode=1") > 0 && (d = 1), d == b) {
                iapiRequestIds.splice(c, 1), arr[2] && clearTimeout(arr[2]);
                var e = document.getElementById(iapiIframename + "_" + arr[0]);
                e && document.getElementById(iapiDivname).removeChild(e);
                continue
            }
        }
        c++
    }
}
function iapiHasRedirectRequest(a) {
    for (var b = 0; b < iapiRequestIds.length;) {
        if (arr = iapiRequestIds[b], arr[1] == a)return !0;
        b++
    }
    return !1
}
function initMessageListener() {
    "1" == iapiConf.useMessages && window.postMessage && (window.addEventListener ? (window.addEventListener("message", iapiOnMessage, !1), iapiMessagesSupported = !0) : window.attachEvent && (window.attachEvent("onmessage", iapiOnMessage), iapiMessagesSupported = !0))
}
function iapiOnMessage(a) {
    if (a.origin == "https://" + iapiConf.loginServer) {
        for (var b = a.data, c = b.split("&"), d = [], e = 0; e < c.length; e++) {
            var f = c[e].indexOf("=");
            f > 0 && (d[c[e].substring(0, f)] = decodeURIComponent(c[e].substring(f + 1).replace(/\+/g, "%20")))
        }
        if (document.getElementById(iapiDivname))for (e = 0; e < document.getElementById(iapiDivname).childNodes.length; e++)if (document.getElementById(iapiDivname).childNodes[e].contentWindow == a.source) {
            var g = document.getElementById(iapiDivname).childNodes[e].id.split("_");
            g.length > 0 && (d.requestId = g[1]);
            break
        }
        iapiMessagesAnswered = !0, iapiRedirectCallback(d)
    }
}
function iapiRedirectToWeblogin() {
}
function iapiCreateGW() {
    iapiCreateDiv(iapiDivname), iapiCreateIframe(iapiDivname, iapiIframename + "gw_" + iapiGWId);
    var a = iapiConf.gwUrl;
    a += "#redirectUrl=" + escape(location.protocol + "//" + location.hostname + iapiConf.redirectUrl + "#"), a += "&iframeName=" + iapiGWId, iapiGet(iapiIframename + "gw_" + iapiGWId, a)
}
function iapiCallGW(a, b) {
    iapiGWCreated || (iapiGWCreated = !0, iapiCreateGW()), iapiGWWaitingCalls.push([a, b]), iapiSendToGW()
}
function iapiEncodeGWJson(a, b) {
    1 == b ? a.realMode = 1 : a.realMode = 0, a.casinoName = iapiConf.casinoname;
    var c = null;
    try {
        c = JSON.stringify(a)
    } catch (d) {
    }
    if (null == c)try {
        c = iapiJsonStringify(a)
    } catch (d) {
    }
    var e = encodeURIComponent(c);
    return e
}
function iapiMakeGWRequestUrl(a, b) {
    var c = iapiConf.gwRedirectUrl;
    return c += "#jsonObject=" + b, c += "&UUID=" + a
}
function iapiSendToGW() {
    if (!iapiGWTimer && iapiGWWaitingCalls.length > 0) {
        var a = iapiGWWaitingCalls[0];
        iapiGWWaitingCalls.splice(0, 1);
        var b = (a[0], a[1]);
        iapiGWTimer = setTimeout("iapiSendToGWFailed(0)", 1e4), setTimeout(function () {
            window.open(b, iapiGWRedirectIframe)
        }, 10)
    }
}
function iapiSendToGWFailed(a) {
    iapiGWTimer = 0, iapiSendToGW()
}
function iapiSendToGWSucceeded(a) {
    clearTimeout(iapiGWTimer), iapiGWTimer = 0, iapiSendToGW()
}
function iapiJsonStringify(a) {
    var b = typeof a;
    if ("object" != b || null === a)return "string" == b && (a = '"' + a + '"'), String(a);
    var c, d, e = [], f = a && a.constructor == Array;
    for (c in a)d = a[c], b = typeof d, "string" == b ? d = '"' + d + '"' : "object" == b && null !== d && (d = JSON.stringify(d)), e.push((f ? "" : '"' + c + '":') + String(d));
    return (f ? "[" : "{") + String(e) + (f ? "]" : "}")
}
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length)return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.submit(function (b) {
                function d() {
                    var d;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
                }

                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        }, valid: function () {
            var b, c;
            return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function () {
                b = c.element(this) && b
            })), b
        }, removeAttrs: function (b) {
            var c = {}, d = this;
            return a.each(b.split(/\s/), function (a, b) {
                c[b] = d.attr(b), d.removeAttr(b)
            }), c
        }, rules: function (b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (b)switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                case"add":
                    a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                    break;
                case"remove":
                    return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
                        i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                    }), i) : (delete e[j.name], f)
            }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({required: h}, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {remote: h})), g
        }
    }), a.extend(a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + a(b).val())
        }, filled: function (b) {
            return !!a.trim("" + a(b).val())
        }, unchecked: function (b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
            })
        }), b)
    },a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (a, b) {
                (9 !== b.which || "" !== this.elementValue(a)) && ( this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a))
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    var c = a.data(this[0].form, "validator"), d = "on" + b.type.replace(/^validate/, ""), e = c.settings;
                    e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
                }

                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function (b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function (b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            }, form: function () {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)this.check(b[a]);
                return this.valid()
            }, element: function (b) {
                var c = this.clean(b), d = this.validationTargetFor(c), e = !0;
                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
            }, showErrors: function (b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b)this.errorList.push({message: b[c], element: this.findByName(c)[0]});
                    this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (a) {
                var b, c = 0;
                for (b in a)c++;
                return c
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid)try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {
                }
            }, findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                        return a.element.name === b.name
                    }).length && b
            }, elements: function () {
                var b = this, c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                })
            }, clean: function (b) {
                return a(b)[0]
            }, errors: function () {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            }, reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (a) {
                this.reset(), this.toHide = this.errorsFor(a)
            }, elementValue: function (b) {
                var c, d = a(b), e = b.type;
                return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
            }, check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(), g = a.map(f, function (a, b) {
                    return b
                }).length, h = !1, i = this.elementValue(b);
                for (d in f) {
                    e = {method: d, parameters: f[d]};
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1, "pending" === c)return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c)return this.formatAndAdd(b, e), !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
                    }
                }
                if (!h)return this.objectLength(f) && this.successList.push(b), !0
            }, customDataMessage: function (b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            }, customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            }, findDefined: function () {
                for (var a = 0; a < arguments.length; a++)if (void 0 !== arguments[a])return arguments[a];
                return void 0
            }, defaultMessage: function (b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            }, formatAndAdd: function (b, c) {
                var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                    message: d,
                    element: b,
                    method: c.method
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d
            }, addWrapper: function (a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            }, defaultShowErrors: function () {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++)c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (a = 0; this.successList[a]; a++)this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)for (a = 0, b = this.validElements(); b[a]; a++)this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (b, c) {
                var d, e, f, g = this.errorsFor(b), h = this.idOrName(b), i = a(b).attr("aria-describedby");
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id"), i ? i.match(new RegExp("\b" + f + "\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
                    c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
                }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
            }, errorsFor: function (b) {
                var c = this.idOrName(b), d = a(b).attr("aria-describedby"), e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
            }, idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            }, validationTargetFor: function (a) {
                return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
            }, checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            }, findByName: function (b) {
                return a(this.currentForm).find("[name='" + b + "']")
            }, getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case"select":
                        return a("option:selected", c).length;
                    case"input":
                        if (this.checkable(c))return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            }, depend: function (a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            }, dependTypes: {
                "boolean": function (a) {
                    return a
                }, string: function (b, c) {
                    return !!a(b, c.form).length
                }, "function": function (a, b) {
                    return a(b)
                }
            }, optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            }, startRequest: function (a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            }, stopRequest: function (b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(b, "remote")
                    })
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {}, d = a(b).attr("class");
            return d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        attributeRules: function (b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)"required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function (b) {
            var c, d, e = {}, f = a(b);
            for (c in a.validator.methods)d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
            return e
        },
        staticRules: function (b) {
            var c = {}, d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function (b, c) {
            return a.each(b, function (d, e) {
                if (e === !1)return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case"string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case"function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                }
            }), a.each(b, function (d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }), a.each(["minlength", "maxlength"], function () {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function () {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c))return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
            }, email: function (a, b) {
                return this.optional(b) || /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a)
            }, url: function (a, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            }, date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            }, dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            }, number: function (a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            }, digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            }, creditcard: function (a, b) {
                if (this.optional(b))return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a))return !1;
                var c, d, e = 0, f = 0, g = !1;
                if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19)return !1;
                for (c = a.length - 1; c >= 0; c--)d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                return e % 10 === 0
            }, minlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d
            }, maxlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || d >= e
            }, rangelength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            }, min: function (a, b, c) {
                return this.optional(b) || a >= c
            }, max: function (a, b, c) {
                return this.optional(b) || c >= a
            }, range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            }, equalTo: function (b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    a(c).valid()
                }), b === e.val()
            }, remote: function (b, c, d) {
                if (this.optional(c))return "dependency-mismatch";
                var e, f, g = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {url: d} || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: f,
                    context: e.currentForm,
                    success: function (d) {
                        var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    }), a.format = function () {
        throw"$.format has been deprecated. Please use $.validator.format instead."
    };
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function (d) {
        var e = ("mode"in d ? d : a.ajaxSettings).mode, f = ("port"in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a.extend(a.fn, {
        validateDelegate: function (b, c, d) {
            return this.bind(c, function (c) {
                var e = a(c.target);
                return e.is(b) ? d.apply(e, arguments) : void 0
            })
        }
    })
}), function (a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function () {
    "use strict";
    function a() {
        return Hc.apply(null, arguments)
    }

    function b(a) {
        Hc = a
    }

    function c(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function e(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c)d.push(b(a[c], c));
        return d
    }

    function f(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function g(a, b) {
        for (var c in b)f(b, c) && (a[c] = b[c]);
        return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function h(a, b, c, d) {
        return Ca(a, b, c, d, !0).utc()
    }

    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function j(a) {
        return null == a._pf && (a._pf = i()), a._pf
    }

    function k(a) {
        if (null == a._isValid) {
            var b = j(a);
            a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
        }
        return a._isValid
    }

    function l(a) {
        var b = h(NaN);
        return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
    }

    function m(a, b) {
        var c, d, e;
        if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = j(b)), "undefined" != typeof b._locale && (a._locale = b._locale), Jc.length > 0)for (c in Jc)d = Jc[c], e = b[d], "undefined" != typeof e && (a[d] = e);
        return a
    }

    function n(b) {
        m(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), Kc === !1 && (Kc = !0, a.updateOffset(this), Kc = !1)
    }

    function o(a) {
        return a instanceof n || null != a && null != a._isAMomentObject
    }

    function p(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function q(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = p(b)), c
    }

    function r(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && q(a[d]) !== q(b[d])) && g++;
        return g + f
    }

    function s() {
    }

    function t(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function u(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = t(a[f]).split("-"), b = e.length, c = t(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = v(e.slice(0, b).join("-")))return d;
                if (c && c.length >= b && r(e, c, !0) >= b - 1)break;
                b--
            }
            f++
        }
        return null
    }

    function v(a) {
        var b = null;
        if (!Lc[a] && "undefined" != typeof module && module && module.exports)try {
            b = Ic._abbr, require("./locale/" + a), w(b)
        } catch (c) {
        }
        return Lc[a]
    }

    function w(a, b) {
        var c;
        return a && (c = "undefined" == typeof b ? y(a) : x(a, b), c && (Ic = c)), Ic._abbr
    }

    function x(a, b) {
        return null !== b ? (b.abbr = a, Lc[a] = Lc[a] || new s, Lc[a].set(b), w(a), Lc[a]) : (delete Lc[a], null)
    }

    function y(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a)return Ic;
        if (!c(a)) {
            if (b = v(a))return b;
            a = [a]
        }
        return u(a)
    }

    function z(a, b) {
        var c = a.toLowerCase();
        Mc[c] = Mc[c + "s"] = Mc[b] = a
    }

    function A(a) {
        return "string" == typeof a ? Mc[a] || Mc[a.toLowerCase()] : void 0
    }

    function B(a) {
        var b, c, d = {};
        for (c in a)f(a, c) && (b = A(c), b && (d[b] = a[c]));
        return d
    }

    function C(b, c) {
        return function (d) {
            return null != d ? (E(this, b, d), a.updateOffset(this, c), this) : D(this, b)
        }
    }

    function D(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }

    function E(a, b, c) {
        return a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function F(a, b) {
        var c;
        if ("object" == typeof a)for (c in a)this.set(c, a[c]); else if (a = A(a), "function" == typeof this[a])return this[a](b);
        return this
    }

    function G(a, b, c) {
        var d = "" + Math.abs(a), e = b - d.length, f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }

    function H(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function () {
            return this[d]()
        }), a && (Qc[a] = e), b && (Qc[b[0]] = function () {
            return G(e.apply(this, arguments), b[1], b[2])
        }), c && (Qc[c] = function () {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }

    function I(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function J(a) {
        var b, c, d = a.match(Nc);
        for (b = 0, c = d.length; c > b; b++)Qc[d[b]] ? d[b] = Qc[d[b]] : d[b] = I(d[b]);
        return function (e) {
            var f = "";
            for (b = 0; c > b; b++)f += d[b]instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function K(a, b) {
        return a.isValid() ? (b = L(b, a.localeData()), Pc[b] = Pc[b] || J(b), Pc[b](a)) : a.localeData().invalidDate()
    }

    function L(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }

        var d = 5;
        for (Oc.lastIndex = 0; d >= 0 && Oc.test(a);)a = a.replace(Oc, c), Oc.lastIndex = 0, d -= 1;
        return a
    }

    function M(a) {
        return "function" == typeof a && "[object Function]" === Object.prototype.toString.call(a)
    }

    function N(a, b, c) {
        dd[a] = M(b) ? b : function (a) {
            return a && c ? c : b
        }
    }

    function O(a, b) {
        return f(dd, a) ? dd[a](b._strict, b._locale) : new RegExp(P(a))
    }

    function P(a) {
        return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
            return b || c || d || e
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function Q(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function (a, c) {
            c[b] = q(a)
        }), c = 0; c < a.length; c++)ed[a[c]] = d
    }

    function R(a, b) {
        Q(a, function (a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e)
        })
    }

    function S(a, b, c) {
        null != b && f(ed, a) && ed[a](b, c._a, c, a)
    }

    function T(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function U(a) {
        return this._months[a.month()]
    }

    function V(a) {
        return this._monthsShort[a.month()]
    }

    function W(a, b, c) {
        var d, e, f;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
            if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a))return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a))return d;
            if (!c && this._monthsParse[d].test(a))return d
        }
    }

    function X(a, b) {
        var c;
        return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), T(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }

    function Y(b) {
        return null != b ? (X(this, b), a.updateOffset(this, !0), this) : D(this, "Month")
    }

    function Z() {
        return T(this.year(), this.month())
    }

    function $(a) {
        var b, c = a._a;
        return c && -2 === j(a).overflow && (b = c[gd] < 0 || c[gd] > 11 ? gd : c[hd] < 1 || c[hd] > T(c[fd], c[gd]) ? hd : c[id] < 0 || c[id] > 24 || 24 === c[id] && (0 !== c[jd] || 0 !== c[kd] || 0 !== c[ld]) ? id : c[jd] < 0 || c[jd] > 59 ? jd : c[kd] < 0 || c[kd] > 59 ? kd : c[ld] < 0 || c[ld] > 999 ? ld : -1, j(a)._overflowDayOfYear && (fd > b || b > hd) && (b = hd), j(a).overflow = b), a
    }

    function _(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }

    function aa(a, b) {
        var c = !0;
        return g(function () {
            return c && (_(a + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
        }, b)
    }

    function ba(a, b) {
        od[a] || (_(b), od[a] = !0)
    }

    function ca(a) {
        var b, c, d = a._i, e = pd.exec(d);
        if (e) {
            for (j(a).iso = !0, b = 0, c = qd.length; c > b; b++)if (qd[b][1].exec(d)) {
                a._f = qd[b][0];
                break
            }
            for (b = 0, c = rd.length; c > b; b++)if (rd[b][1].exec(d)) {
                a._f += (e[6] || " ") + rd[b][0];
                break
            }
            d.match(ad) && (a._f += "Z"), va(a)
        } else a._isValid = !1
    }

    function da(b) {
        var c = sd.exec(b._i);
        return null !== c ? void(b._d = new Date(+c[1])) : (ca(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
    }

    function ea(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }

    function fa(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }

    function ga(a) {
        return ha(a) ? 366 : 365
    }

    function ha(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function ia() {
        return ha(this.year())
    }

    function ja(a, b, c) {
        var d, e = c - b, f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = Da(a).add(f, "d"), {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        }
    }

    function ka(a) {
        return ja(a, this._week.dow, this._week.doy).week
    }

    function la() {
        return this._week.dow
    }

    function ma() {
        return this._week.doy
    }

    function na(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function oa(a) {
        var b = ja(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function pa(a, b, c, d, e) {
        var f, g = 6 + e - d, h = fa(a, 0, 1 + g), i = h.getUTCDay();
        return e > i && (i += 7), c = null != c ? 1 * c : e, f = 1 + g + 7 * (b - 1) - i + c, {
            year: f > 0 ? a : a - 1,
            dayOfYear: f > 0 ? f : ga(a - 1) + f
        }
    }

    function qa(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }

    function ra(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function sa(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function ta(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = sa(a), a._w && null == a._a[hd] && null == a._a[gd] && ua(a), a._dayOfYear && (e = ra(a._a[fd], d[fd]), a._dayOfYear > ga(e) && (j(a)._overflowDayOfYear = !0), c = fa(e, 0, a._dayOfYear), a._a[gd] = c.getUTCMonth(), a._a[hd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b)a._a[b] = f[b] = d[b];
            for (; 7 > b; b++)a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[id] && 0 === a._a[jd] && 0 === a._a[kd] && 0 === a._a[ld] && (a._nextDay = !0, a._a[id] = 0), a._d = (a._useUTC ? fa : ea).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[id] = 24)
        }
    }

    function ua(a) {
        var b, c, d, e, f, g, h;
        b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = ra(b.GG, a._a[fd], ja(Da(), 1, 4).year), d = ra(b.W, 1), e = ra(b.E, 1)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = ra(b.gg, a._a[fd], ja(Da(), f, g).year), d = ra(b.w, 1), null != b.d ? (e = b.d, f > e && ++d) : e = null != b.e ? b.e + f : f), h = pa(c, d, e, g, f), a._a[fd] = h.year, a._dayOfYear = h.dayOfYear
    }

    function va(b) {
        if (b._f === a.ISO_8601)return void ca(b);
        b._a = [], j(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i, i = h.length, k = 0;
        for (e = L(b._f, b._locale).match(Nc) || [], c = 0; c < e.length; c++)f = e[c], d = (h.match(O(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), Qc[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), S(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
        j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[id] <= 12 && b._a[id] > 0 && (j(b).bigHour = void 0), b._a[id] = wa(b._locale, b._a[id], b._meridiem), ta(b), $(b)
    }

    function wa(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function xa(a) {
        var b, c, d, e, f;
        if (0 === a._f.length)return j(a).invalidFormat = !0, void(a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++)f = 0, b = m({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], va(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
        g(a, c || b)
    }

    function ya(a) {
        if (!a._d) {
            var b = B(a._i);
            a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], ta(a)
        }
    }

    function za(a) {
        var b = new n($(Aa(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
    }

    function Aa(a) {
        var b = a._i, e = a._f;
        return a._locale = a._locale || y(a._l), null === b || void 0 === e && "" === b ? l({nullInput: !0}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), o(b) ? new n($(b)) : (c(e) ? xa(a) : e ? va(a) : d(b) ? a._d = b : Ba(a), a))
    }

    function Ba(b) {
        var f = b._i;
        void 0 === f ? b._d = new Date : d(f) ? b._d = new Date(+f) : "string" == typeof f ? da(b) : c(f) ? (b._a = e(f.slice(0), function (a) {
            return parseInt(a, 10)
        }), ta(b)) : "object" == typeof f ? ya(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
    }

    function Ca(a, b, c, d, e) {
        var f = {};
        return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, za(f)
    }

    function Da(a, b, c, d) {
        return Ca(a, b, c, d, !1)
    }

    function Ea(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length)return Da();
        for (d = b[0], e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](d)) && (d = b[e]);
        return d
    }

    function Fa() {
        var a = [].slice.call(arguments, 0);
        return Ea("isBefore", a)
    }

    function Ga() {
        var a = [].slice.call(arguments, 0);
        return Ea("isAfter", a)
    }

    function Ha(a) {
        var b = B(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = y(), this._bubble()
    }

    function Ia(a) {
        return a instanceof Ha
    }

    function Ja(a, b) {
        H(a, 0, 0, function () {
            var a = this.utcOffset(), c = "+";
            return 0 > a && (a = -a, c = "-"), c + G(~~(a / 60), 2) + b + G(~~a % 60, 2)
        })
    }

    function Ka(a) {
        var b = (a || "").match(ad) || [], c = b[b.length - 1] || [], d = (c + "").match(xd) || ["-", 0, 0], e = +(60 * d[1]) + q(d[2]);
        return "+" === d[0] ? e : -e
    }

    function La(b, c) {
        var e, f;
        return c._isUTC ? (e = c.clone(), f = (o(b) || d(b) ? +b : +Da(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Da(b).local()
    }

    function Ma(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }

    function Na(b, c) {
        var d, e = this._offset || 0;
        return null != b ? ("string" == typeof b && (b = Ka(b)), Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ma(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? bb(this, Ya(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ma(this)
    }

    function Oa(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Pa(a) {
        return this.utcOffset(0, a)
    }

    function Qa(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ma(this), "m")), this
    }

    function Ra() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ka(this._i)), this
    }

    function Sa(a) {
        return a = a ? Da(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
    }

    function Ta() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ua() {
        if ("undefined" != typeof this._isDSTShifted)return this._isDSTShifted;
        var a = {};
        if (m(a, this), a = Aa(a), a._a) {
            var b = a._isUTC ? h(a._a) : Da(a._a);
            this._isDSTShifted = this.isValid() && r(a._a, b.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Va() {
        return !this._isUTC
    }

    function Wa() {
        return this._isUTC
    }

    function Xa() {
        return this._isUTC && 0 === this._offset
    }

    function Ya(a, b) {
        var c, d, e, g = a, h = null;
        return Ia(a) ? g = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = yd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: 0,
            d: q(h[hd]) * c,
            h: q(h[id]) * c,
            m: q(h[jd]) * c,
            s: q(h[kd]) * c,
            ms: q(h[ld]) * c
        }) : (h = zd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: Za(h[2], c),
            M: Za(h[3], c),
            d: Za(h[4], c),
            h: Za(h[5], c),
            m: Za(h[6], c),
            s: Za(h[7], c),
            w: Za(h[8], c)
        }) : null == g ? g = {} : "object" == typeof g && ("from"in g || "to"in g) && (e = _a(Da(g.from), Da(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ha(g), Ia(a) && f(a, "_locale") && (d._locale = a._locale), d
    }

    function Za(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b
    }

    function $a(a, b) {
        var c = {milliseconds: 0, months: 0};
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function _a(a, b) {
        var c;
        return b = La(b, a), a.isBefore(b) ? c = $a(a, b) : (c = $a(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
    }

    function ab(a, b) {
        return function (c, d) {
            var e, f;
            return null === d || isNaN(+d) || (ba(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Ya(c, d), bb(this, e, a), this
        }
    }

    function bb(b, c, d, e) {
        var f = c._milliseconds, g = c._days, h = c._months;
        e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && E(b, "Date", D(b, "Date") + g * d), h && X(b, D(b, "Month") + h * d), e && a.updateOffset(b, g || h)
    }

    function cb(a, b) {
        var c = a || Da(), d = La(c, this).startOf("day"), e = this.diff(d, "days", !0), f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse";
        return this.format(b && b[f] || this.localeData().calendar(f, this, Da(c)))
    }

    function db() {
        return new n(this)
    }

    function eb(a, b) {
        var c;
        return b = A("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +this > +a) : (c = o(a) ? +a : +Da(a), c < +this.clone().startOf(b))
    }

    function fb(a, b) {
        var c;
        return b = A("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +a > +this) : (c = o(a) ? +a : +Da(a), +this.clone().endOf(b) < c)
    }

    function gb(a, b, c) {
        return this.isAfter(a, c) && this.isBefore(b, c)
    }

    function hb(a, b) {
        var c;
        return b = A(b || "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +this === +a) : (c = +Da(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
    }

    function ib(a, b, c) {
        var d, e, f = La(a, this), g = 6e4 * (f.utcOffset() - this.utcOffset());
        return b = A(b), "year" === b || "month" === b || "quarter" === b ? (e = jb(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : p(e)
    }

    function jb(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
    }

    function kb() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function lb() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : K(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : K(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function mb(b) {
        var c = K(this, b || a.defaultFormat);
        return this.localeData().postformat(c)
    }

    function nb(a, b) {
        return this.isValid() ? Ya({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function ob(a) {
        return this.from(Da(), a)
    }

    function pb(a, b) {
        return this.isValid() ? Ya({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function qb(a) {
        return this.to(Da(), a)
    }

    function rb(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = y(a), null != b && (this._locale = b), this)
    }

    function sb() {
        return this._locale
    }

    function tb(a) {
        switch (a = A(a)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function ub(a) {
        return a = A(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
    }

    function vb() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function wb() {
        return Math.floor(+this / 1e3)
    }

    function xb() {
        return this._offset ? new Date(+this) : this._d
    }

    function yb() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function zb() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }

    function Ab() {
        return k(this)
    }

    function Bb() {
        return g({}, j(this))
    }

    function Cb() {
        return j(this).overflow
    }

    function Db(a, b) {
        H(0, [a, a.length], 0, b)
    }

    function Eb(a, b, c) {
        return ja(Da([a, 11, 31 + b - c]), b, c).week
    }

    function Fb(a) {
        var b = ja(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == a ? b : this.add(a - b, "y")
    }

    function Gb(a) {
        var b = ja(this, 1, 4).year;
        return null == a ? b : this.add(a - b, "y")
    }

    function Hb() {
        return Eb(this.year(), 1, 4)
    }

    function Ib() {
        var a = this.localeData()._week;
        return Eb(this.year(), a.dow, a.doy)
    }

    function Jb(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }

    function Kb(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
    }

    function Lb(a) {
        return this._weekdays[a.day()]
    }

    function Mb(a) {
        return this._weekdaysShort[a.day()]
    }

    function Nb(a) {
        return this._weekdaysMin[a.day()]
    }

    function Ob(a) {
        var b, c, d;
        for (this._weekdaysParse = this._weekdaysParse || [], b = 0; 7 > b; b++)if (this._weekdaysParse[b] || (c = Da([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a))return b
    }

    function Pb(a) {
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Kb(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function Qb(a) {
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }

    function Rb(a) {
        return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
    }

    function Sb(a, b) {
        H(a, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }

    function Tb(a, b) {
        return b._meridiemParse
    }

    function Ub(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    }

    function Vb(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function Wb(a, b) {
        b[ld] = q(1e3 * ("0." + a))
    }

    function Xb() {
        return this._isUTC ? "UTC" : ""
    }

    function Yb() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Zb(a) {
        return Da(1e3 * a)
    }

    function $b() {
        return Da.apply(null, arguments).parseZone()
    }

    function _b(a, b, c) {
        var d = this._calendar[a];
        return "function" == typeof d ? d.call(b, c) : d
    }

    function ac(a) {
        var b = this._longDateFormat[a], c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    }

    function bc() {
        return this._invalidDate
    }

    function cc(a) {
        return this._ordinal.replace("%d", a)
    }

    function dc(a) {
        return a
    }

    function ec(a, b, c, d) {
        var e = this._relativeTime[c];
        return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function fc(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
    }

    function gc(a) {
        var b, c;
        for (c in a)b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function hc(a, b, c, d) {
        var e = y(), f = h().set(d, b);
        return e[c](f, a)
    }

    function ic(a, b, c, d, e) {
        if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b)return hc(a, b, c, e);
        var f, g = [];
        for (f = 0; d > f; f++)g[f] = hc(a, f, c, e);
        return g
    }

    function jc(a, b) {
        return ic(a, b, "months", 12, "month")
    }

    function kc(a, b) {
        return ic(a, b, "monthsShort", 12, "month")
    }

    function lc(a, b) {
        return ic(a, b, "weekdays", 7, "day")
    }

    function mc(a, b) {
        return ic(a, b, "weekdaysShort", 7, "day")
    }

    function nc(a, b) {
        return ic(a, b, "weekdaysMin", 7, "day")
    }

    function oc() {
        var a = this._data;
        return this._milliseconds = Wd(this._milliseconds), this._days = Wd(this._days), this._months = Wd(this._months), a.milliseconds = Wd(a.milliseconds), a.seconds = Wd(a.seconds), a.minutes = Wd(a.minutes), a.hours = Wd(a.hours), a.months = Wd(a.months), a.years = Wd(a.years), this
    }

    function pc(a, b, c, d) {
        var e = Ya(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }

    function qc(a, b) {
        return pc(this, a, b, 1)
    }

    function rc(a, b) {
        return pc(this, a, b, -1)
    }

    function sc(a) {
        return 0 > a ? Math.floor(a) : Math.ceil(a)
    }

    function tc() {
        var a, b, c, d, e, f = this._milliseconds, g = this._days, h = this._months, i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * sc(vc(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = p(f / 1e3), i.seconds = a % 60, b = p(a / 60), i.minutes = b % 60, c = p(b / 60), i.hours = c % 24, g += p(c / 24), e = p(uc(g)), h += e, g -= sc(vc(e)), d = p(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
    }

    function uc(a) {
        return 4800 * a / 146097
    }

    function vc(a) {
        return 146097 * a / 4800
    }

    function wc(a) {
        var b, c, d = this._milliseconds;
        if (a = A(a), "month" === a || "year" === a)return b = this._days + d / 864e5, c = this._months + uc(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(vc(this._months)), a) {
            case"week":
                return b / 7 + d / 6048e5;
            case"day":
                return b + d / 864e5;
            case"hour":
                return 24 * b + d / 36e5;
            case"minute":
                return 1440 * b + d / 6e4;
            case"second":
                return 86400 * b + d / 1e3;
            case"millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a)
        }
    }

    function xc() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * q(this._months / 12)
    }

    function yc(a) {
        return function () {
            return this.as(a)
        }
    }

    function zc(a) {
        return a = A(a), this[a + "s"]()
    }

    function Ac(a) {
        return function () {
            return this._data[a]
        }
    }

    function Bc() {
        return p(this.days() / 7)
    }

    function Cc(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function Dc(a, b, c) {
        var d = Ya(a).abs(), e = ke(d.as("s")), f = ke(d.as("m")), g = ke(d.as("h")), h = ke(d.as("d")), i = ke(d.as("M")), j = ke(d.as("y")), k = e < le.s && ["s", e] || 1 === f && ["m"] || f < le.m && ["mm", f] || 1 === g && ["h"] || g < le.h && ["hh", g] || 1 === h && ["d"] || h < le.d && ["dd", h] || 1 === i && ["M"] || i < le.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, Cc.apply(null, k)
    }

    function Ec(a, b) {
        return void 0 === le[a] ? !1 : void 0 === b ? le[a] : (le[a] = b, !0)
    }

    function Fc(a) {
        var b = this.localeData(), c = Dc(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function Gc() {
        var a, b, c, d = me(this._milliseconds) / 1e3, e = me(this._days), f = me(this._months);
        a = p(d / 60), b = p(a / 60), d %= 60, a %= 60, c = p(f / 12), f %= 12;
        var g = c, h = f, i = e, j = b, k = a, l = d, m = this.asSeconds();
        return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }

    var Hc, Ic, Jc = a.momentProperties = [], Kc = !1, Lc = {}, Mc = {}, Nc = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Oc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Pc = {}, Qc = {}, Rc = /\d/, Sc = /\d\d/, Tc = /\d{3}/, Uc = /\d{4}/, Vc = /[+-]?\d{6}/, Wc = /\d\d?/, Xc = /\d{1,3}/, Yc = /\d{1,4}/, Zc = /[+-]?\d{1,6}/, $c = /\d+/, _c = /[+-]?\d+/, ad = /Z|[+-]\d\d:?\d\d/gi, bd = /[+-]?\d+(\.\d{1,3})?/, cd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, dd = {}, ed = {}, fd = 0, gd = 1, hd = 2, id = 3, jd = 4, kd = 5, ld = 6;
    H("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), H("MMM", 0, 0, function (a) {
        return this.localeData().monthsShort(this, a)
    }), H("MMMM", 0, 0, function (a) {
        return this.localeData().months(this, a)
    }), z("month", "M"), N("M", Wc), N("MM", Wc, Sc), N("MMM", cd), N("MMMM", cd), Q(["M", "MM"], function (a, b) {
        b[gd] = q(a) - 1
    }), Q(["MMM", "MMMM"], function (a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[gd] = e : j(c).invalidMonth = a
    });
    var md = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), nd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), od = {};
    a.suppressDeprecationWarnings = !1;
    var pd = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, qd = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], rd = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], sd = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = aa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), H(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), z("year", "y"), N("Y", _c), N("YY", Wc, Sc), N("YYYY", Yc, Uc), N("YYYYY", Zc, Vc), N("YYYYYY", Zc, Vc), Q(["YYYYY", "YYYYYY"], fd), Q("YYYY", function (b, c) {
        c[fd] = 2 === b.length ? a.parseTwoDigitYear(b) : q(b)
    }), Q("YY", function (b, c) {
        c[fd] = a.parseTwoDigitYear(b)
    }), a.parseTwoDigitYear = function (a) {
        return q(a) + (q(a) > 68 ? 1900 : 2e3)
    };
    var td = C("FullYear", !1);
    H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), z("week", "w"), z("isoWeek", "W"), N("w", Wc), N("ww", Wc, Sc), N("W", Wc), N("WW", Wc, Sc), R(["w", "ww", "W", "WW"], function (a, b, c, d) {
        b[d.substr(0, 1)] = q(a)
    });
    var ud = {dow: 0, doy: 6};
    H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), z("dayOfYear", "DDD"), N("DDD", Xc), N("DDDD", Tc), Q(["DDD", "DDDD"], function (a, b, c) {
        c._dayOfYear = q(a)
    }), a.ISO_8601 = function () {
    };
    var vd = aa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
        var a = Da.apply(null, arguments);
        return this > a ? this : a
    }), wd = aa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
        var a = Da.apply(null, arguments);
        return a > this ? this : a
    });
    Ja("Z", ":"), Ja("ZZ", ""), N("Z", ad), N("ZZ", ad), Q(["Z", "ZZ"], function (a, b, c) {
        c._useUTC = !0, c._tzm = Ka(a)
    });
    var xd = /([\+\-]|\d\d)/gi;
    a.updateOffset = function () {
    };
    var yd = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, zd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Ya.fn = Ha.prototype;
    var Ad = ab(1, "add"), Bd = ab(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Cd = aa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    H(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), H(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), Db("gggg", "weekYear"), Db("ggggg", "weekYear"), Db("GGGG", "isoWeekYear"), Db("GGGGG", "isoWeekYear"), z("weekYear", "gg"), z("isoWeekYear", "GG"), N("G", _c), N("g", _c), N("GG", Wc, Sc), N("gg", Wc, Sc), N("GGGG", Yc, Uc), N("gggg", Yc, Uc), N("GGGGG", Zc, Vc), N("ggggg", Zc, Vc), R(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
        b[d.substr(0, 2)] = q(a)
    }), R(["gg", "GG"], function (b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }), H("Q", 0, 0, "quarter"), z("quarter", "Q"), N("Q", Rc), Q("Q", function (a, b) {
        b[gd] = 3 * (q(a) - 1)
    }), H("D", ["DD", 2], "Do", "date"), z("date", "D"), N("D", Wc), N("DD", Wc, Sc), N("Do", function (a, b) {
        return a ? b._ordinalParse : b._ordinalParseLenient
    }), Q(["D", "DD"], hd), Q("Do", function (a, b) {
        b[hd] = q(a.match(Wc)[0], 10)
    });
    var Dd = C("Date", !0);
    H("d", 0, "do", "day"), H("dd", 0, 0, function (a) {
        return this.localeData().weekdaysMin(this, a)
    }), H("ddd", 0, 0, function (a) {
        return this.localeData().weekdaysShort(this, a)
    }), H("dddd", 0, 0, function (a) {
        return this.localeData().weekdays(this, a)
    }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), z("day", "d"), z("weekday", "e"), z("isoWeekday", "E"), N("d", Wc), N("e", Wc), N("E", Wc), N("dd", cd), N("ddd", cd), N("dddd", cd), R(["dd", "ddd", "dddd"], function (a, b, c) {
        var d = c._locale.weekdaysParse(a);
        null != d ? b.d = d : j(c).invalidWeekday = a
    }), R(["d", "e", "E"], function (a, b, c, d) {
        b[d] = q(a)
    });
    var Ed = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Fd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Gd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, function () {
        return this.hours() % 12 || 12
    }), Sb("a", !0), Sb("A", !1), z("hour", "h"), N("a", Tb), N("A", Tb), N("H", Wc), N("h", Wc), N("HH", Wc, Sc), N("hh", Wc, Sc), Q(["H", "HH"], id), Q(["a", "A"], function (a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a
    }), Q(["h", "hh"], function (a, b, c) {
        b[id] = q(a), j(c).bigHour = !0
    });
    var Hd = /[ap]\.?m?\.?/i, Id = C("Hours", !0);
    H("m", ["mm", 2], 0, "minute"), z("minute", "m"), N("m", Wc), N("mm", Wc, Sc), Q(["m", "mm"], jd);
    var Jd = C("Minutes", !1);
    H("s", ["ss", 2], 0, "second"), z("second", "s"), N("s", Wc), N("ss", Wc, Sc), Q(["s", "ss"], kd);
    var Kd = C("Seconds", !1);
    H("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), H(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), H(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), H(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), H(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), H(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), H(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), z("millisecond", "ms"), N("S", Xc, Rc), N("SS", Xc, Sc), N("SSS", Xc, Tc);
    var Ld;
    for (Ld = "SSSS"; Ld.length <= 9; Ld += "S")N(Ld, $c);
    for (Ld = "S"; Ld.length <= 9; Ld += "S")Q(Ld, Wb);
    var Md = C("Milliseconds", !1);
    H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
    var Nd = n.prototype;
    Nd.add = Ad, Nd.calendar = cb, Nd.clone = db, Nd.diff = ib, Nd.endOf = ub, Nd.format = mb, Nd.from = nb, Nd.fromNow = ob, Nd.to = pb, Nd.toNow = qb, Nd.get = F, Nd.invalidAt = Cb, Nd.isAfter = eb, Nd.isBefore = fb, Nd.isBetween = gb, Nd.isSame = hb, Nd.isValid = Ab, Nd.lang = Cd, Nd.locale = rb, Nd.localeData = sb, Nd.max = wd, Nd.min = vd, Nd.parsingFlags = Bb, Nd.set = F, Nd.startOf = tb, Nd.subtract = Bd, Nd.toArray = yb, Nd.toObject = zb, Nd.toDate = xb, Nd.toISOString = lb, Nd.toJSON = lb, Nd.toString = kb, Nd.unix = wb, Nd.valueOf = vb, Nd.year = td, Nd.isLeapYear = ia, Nd.weekYear = Fb, Nd.isoWeekYear = Gb, Nd.quarter = Nd.quarters = Jb, Nd.month = Y, Nd.daysInMonth = Z, Nd.week = Nd.weeks = na, Nd.isoWeek = Nd.isoWeeks = oa, Nd.weeksInYear = Ib, Nd.isoWeeksInYear = Hb, Nd.date = Dd, Nd.day = Nd.days = Pb, Nd.weekday = Qb, Nd.isoWeekday = Rb, Nd.dayOfYear = qa, Nd.hour = Nd.hours = Id, Nd.minute = Nd.minutes = Jd, Nd.second = Nd.seconds = Kd, Nd.millisecond = Nd.milliseconds = Md, Nd.utcOffset = Na, Nd.utc = Pa, Nd.local = Qa, Nd.parseZone = Ra, Nd.hasAlignedHourOffset = Sa, Nd.isDST = Ta, Nd.isDSTShifted = Ua, Nd.isLocal = Va, Nd.isUtcOffset = Wa, Nd.isUtc = Xa, Nd.isUTC = Xa, Nd.zoneAbbr = Xb, Nd.zoneName = Yb, Nd.dates = aa("dates accessor is deprecated. Use date instead.", Dd), Nd.months = aa("months accessor is deprecated. Use month instead", Y), Nd.years = aa("years accessor is deprecated. Use year instead", td), Nd.zone = aa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Oa);
    var Od = Nd, Pd = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, Qd = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, Rd = "Invalid date", Sd = "%d", Td = /\d{1,2}/, Ud = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Vd = s.prototype;
    Vd._calendar = Pd, Vd.calendar = _b, Vd._longDateFormat = Qd, Vd.longDateFormat = ac, Vd._invalidDate = Rd, Vd.invalidDate = bc, Vd._ordinal = Sd, Vd.ordinal = cc, Vd._ordinalParse = Td, Vd.preparse = dc, Vd.postformat = dc, Vd._relativeTime = Ud, Vd.relativeTime = ec, Vd.pastFuture = fc, Vd.set = gc, Vd.months = U, Vd._months = md, Vd.monthsShort = V, Vd._monthsShort = nd, Vd.monthsParse = W, Vd.week = ka, Vd._week = ud, Vd.firstDayOfYear = ma, Vd.firstDayOfWeek = la, Vd.weekdays = Lb, Vd._weekdays = Ed, Vd.weekdaysMin = Nb, Vd._weekdaysMin = Gd, Vd.weekdaysShort = Mb, Vd._weekdaysShort = Fd, Vd.weekdaysParse = Ob, Vd.isPM = Ub, Vd._meridiemParse = Hd, Vd.meridiem = Vb, w("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (a) {
            var b = a % 10, c = 1 === q(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), a.lang = aa("moment.lang is deprecated. Use moment.locale instead.", w), a.langData = aa("moment.langData is deprecated. Use moment.localeData instead.", y);
    var Wd = Math.abs, Xd = yc("ms"), Yd = yc("s"), Zd = yc("m"), $d = yc("h"), _d = yc("d"), ae = yc("w"), be = yc("M"), ce = yc("y"), de = Ac("milliseconds"), ee = Ac("seconds"), fe = Ac("minutes"), ge = Ac("hours"), he = Ac("days"), ie = Ac("months"), je = Ac("years"), ke = Math.round, le = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, me = Math.abs, ne = Ha.prototype;
    ne.abs = oc, ne.add = qc, ne.subtract = rc, ne.as = wc, ne.asMilliseconds = Xd, ne.asSeconds = Yd, ne.asMinutes = Zd, ne.asHours = $d, ne.asDays = _d, ne.asWeeks = ae, ne.asMonths = be, ne.asYears = ce, ne.valueOf = xc, ne._bubble = tc, ne.get = zc, ne.milliseconds = de, ne.seconds = ee, ne.minutes = fe, ne.hours = ge, ne.days = he, ne.weeks = Bc, ne.months = ie, ne.years = je, ne.humanize = Fc, ne.toISOString = Gc, ne.toString = Gc, ne.toJSON = Gc, ne.locale = rb, ne.localeData = sb, ne.toIsoString = aa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gc), ne.lang = Cd, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), N("x", _c), N("X", bd), Q("X", function (a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10))
    }), Q("x", function (a, b, c) {
        c._d = new Date(q(a))
    }), a.version = "2.10.6", b(Da), a.fn = Od, a.min = Fa, a.max = Ga, a.utc = h, a.unix = Zb, a.months = jc, a.isDate = d, a.locale = w, a.invalid = l, a.duration = Ya, a.isMoment = o, a.weekdays = lc, a.parseZone = $b, a.localeData = y, a.isDuration = Ia, a.monthsShort = kc, a.weekdaysMin = nc, a.defineLocale = x, a.weekdaysShort = mc, a.normalizeUnits = A, a.relativeTimeThreshold = Ec;
    var oe = a;
    return oe
}), function (a) {
    "use strict";
    function b(a) {
        return (a || "").toLowerCase()
    }

    var c = "2.1.6";
    a.fn.cycle = function (c) {
        var d;
        return 0 !== this.length || a.isReady ? this.each(function () {
            var d, e, f, g, h = a(this), i = a.fn.cycle.log;
            if (!h.data("cycle.opts")) {
                (h.data("cycle-log") === !1 || c && c.log === !1 || e && e.log === !1) && (i = a.noop), i("--c2 init--"), d = h.data();
                for (var j in d)d.hasOwnProperty(j) && /^cycle[A-Z]+/.test(j) && (g = d[j], f = j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b), i(f + ":", g, "(" + typeof g + ")"), d[f] = g);
                e = a.extend({}, a.fn.cycle.defaults, d, c || {}), e.timeoutId = 0, e.paused = e.paused || !1, e.container = h, e._maxZ = e.maxZ, e.API = a.extend({_container: h}, a.fn.cycle.API), e.API.log = i, e.API.trigger = function (a, b) {
                    return e.container.trigger(a, b), e.API
                }, h.data("cycle.opts", e), h.data("cycle.API", e.API), e.API.trigger("cycle-bootstrap", [e, e.API]), e.API.addInitialSlides(), e.API.preInitSlideshow(), e.slides.length && e.API.initSlideshow()
            }
        }) : (d = {
            s: this.selector,
            c: this.context
        }, a.fn.cycle.log("requeuing slideshow (dom not ready)"), a(function () {
            a(d.s, d.c).cycle(c)
        }), this)
    }, a.fn.cycle.API = {
        opts: function () {
            return this._container.data("cycle.opts")
        }, addInitialSlides: function () {
            var b = this.opts(), c = b.slides;
            b.slideCount = 0, b.slides = a(), c = c.jquery ? c : b.container.find(c), b.random && c.sort(function () {
                return Math.random() - .5
            }), b.API.add(c)
        }, preInitSlideshow: function () {
            var b = this.opts();
            b.API.trigger("cycle-pre-initialize", [b]);
            var c = a.fn.cycle.transitions[b.fx];
            c && a.isFunction(c.preInit) && c.preInit(b), b._preInitialized = !0
        }, postInitSlideshow: function () {
            var b = this.opts();
            b.API.trigger("cycle-post-initialize", [b]);
            var c = a.fn.cycle.transitions[b.fx];
            c && a.isFunction(c.postInit) && c.postInit(b)
        }, initSlideshow: function () {
            var b, c = this.opts(), d = c.container;
            c.API.calcFirstSlide(), "static" == c.container.css("position") && c.container.css("position", "relative"), a(c.slides[c.currSlide]).css({
                opacity: 1,
                display: "block",
                visibility: "visible"
            }), c.API.stackSlides(c.slides[c.currSlide], c.slides[c.nextSlide], !c.reverse), c.pauseOnHover && (c.pauseOnHover !== !0 && (d = a(c.pauseOnHover)), d.hover(function () {
                c.API.pause(!0)
            }, function () {
                c.API.resume(!0)
            })), c.timeout && (b = c.API.getSlideOpts(c.currSlide), c.API.queueTransition(b, b.timeout + c.delay)), c._initialized = !0, c.API.updateView(!0), c.API.trigger("cycle-initialized", [c]), c.API.postInitSlideshow()
        }, pause: function (b) {
            var c = this.opts(), d = c.API.getSlideOpts(), e = c.hoverPaused || c.paused;
            b ? c.hoverPaused = !0 : c.paused = !0, e || (c.container.addClass("cycle-paused"), c.API.trigger("cycle-paused", [c]).log("cycle-paused"), d.timeout && (clearTimeout(c.timeoutId), c.timeoutId = 0, c._remainingTimeout -= a.now() - c._lastQueue, (c._remainingTimeout < 0 || isNaN(c._remainingTimeout)) && (c._remainingTimeout = void 0)))
        }, resume: function (a) {
            var b = this.opts(), c = !b.hoverPaused && !b.paused;
            a ? b.hoverPaused = !1 : b.paused = !1, c || (b.container.removeClass("cycle-paused"), 0 === b.slides.filter(":animated").length && b.API.queueTransition(b.API.getSlideOpts(), b._remainingTimeout), b.API.trigger("cycle-resumed", [b, b._remainingTimeout]).log("cycle-resumed"))
        }, add: function (b, c) {
            var d, e = this.opts(), f = e.slideCount, g = !1;
            "string" == a.type(b) && (b = a.trim(b)), a(b).each(function (b) {
                var d, f = a(this);
                c ? e.container.prepend(f) : e.container.append(f), e.slideCount++, d = e.API.buildSlideOpts(f), c ? e.slides = a(f).add(e.slides) : e.slides = e.slides.add(f), e.API.initSlide(d, f, --e._maxZ), f.data("cycle.opts", d), e.API.trigger("cycle-slide-added", [e, d, f])
            }), e.API.updateView(!0), g = e._preInitialized && 2 > f && e.slideCount >= 1, g && (e._initialized ? e.timeout && (d = e.slides.length, e.nextSlide = e.reverse ? d - 1 : 1, e.timeoutId || e.API.queueTransition(e)) : e.API.initSlideshow())
        }, calcFirstSlide: function () {
            var a, b = this.opts();
            a = parseInt(b.startingSlide || 0, 10), (a >= b.slides.length || 0 > a) && (a = 0), b.currSlide = a, b.reverse ? (b.nextSlide = a - 1, b.nextSlide < 0 && (b.nextSlide = b.slides.length - 1)) : (b.nextSlide = a + 1, b.nextSlide == b.slides.length && (b.nextSlide = 0))
        }, calcNextSlide: function () {
            var a, b = this.opts();
            b.reverse ? (a = b.nextSlide - 1 < 0, b.nextSlide = a ? b.slideCount - 1 : b.nextSlide - 1, b.currSlide = a ? 0 : b.nextSlide + 1) : (a = b.nextSlide + 1 == b.slides.length, b.nextSlide = a ? 0 : b.nextSlide + 1, b.currSlide = a ? b.slides.length - 1 : b.nextSlide - 1)
        }, calcTx: function (b, c) {
            var d, e = b;
            return e._tempFx ? d = a.fn.cycle.transitions[e._tempFx] : c && e.manualFx && (d = a.fn.cycle.transitions[e.manualFx]), d || (d = a.fn.cycle.transitions[e.fx]), e._tempFx = null, this.opts()._tempFx = null, d || (d = a.fn.cycle.transitions.fade, e.API.log('Transition "' + e.fx + '" not found.  Using fade.')), d
        }, prepareTx: function (a, b) {
            var c, d, e, f, g, h = this.opts();
            return h.slideCount < 2 ? void(h.timeoutId = 0) : (!a || h.busy && !h.manualTrump || (h.API.stopTransition(), h.busy = !1, clearTimeout(h.timeoutId), h.timeoutId = 0), void(h.busy || (0 !== h.timeoutId || a) && (d = h.slides[h.currSlide], e = h.slides[h.nextSlide], f = h.API.getSlideOpts(h.nextSlide), g = h.API.calcTx(f, a), h._tx = g, a && void 0 !== f.manualSpeed && (f.speed = f.manualSpeed), h.nextSlide != h.currSlide && (a || !h.paused && !h.hoverPaused && h.timeout) ? (h.API.trigger("cycle-before", [f, d, e, b]), g.before && g.before(f, d, e, b), c = function () {
                h.busy = !1, h.container.data("cycle.opts") && (g.after && g.after(f, d, e, b), h.API.trigger("cycle-after", [f, d, e, b]), h.API.queueTransition(f), h.API.updateView(!0))
            }, h.busy = !0, g.transition ? g.transition(f, d, e, b, c) : h.API.doTransition(f, d, e, b, c), h.API.calcNextSlide(), h.API.updateView()) : h.API.queueTransition(f))))
        }, doTransition: function (b, c, d, e, f) {
            var g = b, h = a(c), i = a(d), j = function () {
                i.animate(g.animIn || {opacity: 1}, g.speed, g.easeIn || g.easing, f)
            };
            i.css(g.cssBefore || {}), h.animate(g.animOut || {}, g.speed, g.easeOut || g.easing, function () {
                h.css(g.cssAfter || {}), g.sync || j()
            }), g.sync && j()
        }, queueTransition: function (b, c) {
            var d = this.opts(), e = void 0 !== c ? c : b.timeout;
            return 0 === d.nextSlide && 0 === --d.loop ? (d.API.log("terminating; loop=0"), d.timeout = 0, e ? setTimeout(function () {
                d.API.trigger("cycle-finished", [d])
            }, e) : d.API.trigger("cycle-finished", [d]), void(d.nextSlide = d.currSlide)) : void 0 !== d.continueAuto && (d.continueAuto === !1 || a.isFunction(d.continueAuto) && d.continueAuto() === !1) ? (d.API.log("terminating automatic transitions"), d.timeout = 0, void(d.timeoutId && clearTimeout(d.timeoutId))) : void(e && (d._lastQueue = a.now(), void 0 === c && (d._remainingTimeout = b.timeout), d.paused || d.hoverPaused || (d.timeoutId = setTimeout(function () {
                d.API.prepareTx(!1, !d.reverse)
            }, e))))
        }, stopTransition: function () {
            var a = this.opts();
            a.slides.filter(":animated").length && (a.slides.stop(!1, !0), a.API.trigger("cycle-transition-stopped", [a])), a._tx && a._tx.stopTransition && a._tx.stopTransition(a)
        }, advanceSlide: function (a) {
            var b = this.opts();
            return clearTimeout(b.timeoutId), b.timeoutId = 0, b.nextSlide = b.currSlide + a, b.nextSlide < 0 ? b.nextSlide = b.slides.length - 1 : b.nextSlide >= b.slides.length && (b.nextSlide = 0), b.API.prepareTx(!0, a >= 0), !1
        }, buildSlideOpts: function (c) {
            var d, e, f = this.opts(), g = c.data() || {};
            for (var h in g)g.hasOwnProperty(h) && /^cycle[A-Z]+/.test(h) && (d = g[h], e = h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b), f.API.log("[" + (f.slideCount - 1) + "]", e + ":", d, "(" + typeof d + ")"), g[e] = d);
            g = a.extend({}, a.fn.cycle.defaults, f, g), g.slideNum = f.slideCount;
            try {
                delete g.API, delete g.slideCount, delete g.currSlide, delete g.nextSlide, delete g.slides
            } catch (i) {
            }
            return g
        }, getSlideOpts: function (b) {
            var c = this.opts();
            void 0 === b && (b = c.currSlide);
            var d = c.slides[b], e = a(d).data("cycle.opts");
            return a.extend({}, c, e)
        }, initSlide: function (b, c, d) {
            var e = this.opts();
            c.css(b.slideCss || {}), d > 0 && c.css("zIndex", d), isNaN(b.speed) && (b.speed = a.fx.speeds[b.speed] || a.fx.speeds._default), b.sync || (b.speed = b.speed / 2), c.addClass(e.slideClass)
        }, updateView: function (a, b, c) {
            var d = this.opts();
            if (d._initialized) {
                var e = d.API.getSlideOpts(), f = d.slides[d.currSlide];
                !a && b !== !0 && (d.API.trigger("cycle-update-view-before", [d, e, f]), d.updateView < 0) || (d.slideActiveClass && d.slides.removeClass(d.slideActiveClass).eq(d.currSlide).addClass(d.slideActiveClass), a && d.hideNonActive && d.slides.filter(":not(." + d.slideActiveClass + ")").css("visibility", "hidden"), 0 === d.updateView && setTimeout(function () {
                    d.API.trigger("cycle-update-view", [d, e, f, a])
                }, e.speed / (d.sync ? 2 : 1)), 0 !== d.updateView && d.API.trigger("cycle-update-view", [d, e, f, a]), a && d.API.trigger("cycle-update-view-after", [d, e, f]))
            }
        }, getComponent: function (b) {
            var c = this.opts(), d = c[b];
            return "string" == typeof d ? /^\s*[\>|\+|~]/.test(d) ? c.container.find(d) : a(d) : d.jquery ? d : a(d)
        }, stackSlides: function (b, c, d) {
            var e = this.opts();
            b || (b = e.slides[e.currSlide], c = e.slides[e.nextSlide], d = !e.reverse), a(b).css("zIndex", e.maxZ);
            var f, g = e.maxZ - 2, h = e.slideCount;
            if (d) {
                for (f = e.currSlide + 1; h > f; f++)a(e.slides[f]).css("zIndex", g--);
                for (f = 0; f < e.currSlide; f++)a(e.slides[f]).css("zIndex", g--)
            } else {
                for (f = e.currSlide - 1; f >= 0; f--)a(e.slides[f]).css("zIndex", g--);
                for (f = h - 1; f > e.currSlide; f--)a(e.slides[f]).css("zIndex", g--)
            }
            a(c).css("zIndex", e.maxZ - 1)
        }, getSlideIndex: function (a) {
            return this.opts().slides.index(a)
        }
    }, a.fn.cycle.log = function () {
        window.console && console.log && console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
    }, a.fn.cycle.version = function () {
        return "Cycle2: " + c
    }, a.fn.cycle.transitions = {
        custom: {}, none: {
            before: function (a, b, c, d) {
                a.API.stackSlides(c, b, d), a.cssBefore = {opacity: 1, visibility: "visible", display: "block"}
            }
        }, fade: {
            before: function (b, c, d, e) {
                var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
                b.API.stackSlides(c, d, e), b.cssBefore = a.extend(f, {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                }), b.animIn = {opacity: 1}, b.animOut = {opacity: 0}
            }
        }, fadeout: {
            before: function (b, c, d, e) {
                var f = b.API.getSlideOpts(b.nextSlide).slideCss || {};
                b.API.stackSlides(c, d, e), b.cssBefore = a.extend(f, {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }), b.animOut = {opacity: 0}
            }
        }, scrollHorz: {
            before: function (a, b, c, d) {
                a.API.stackSlides(b, c, d);
                var e = a.container.css("overflow", "hidden").width();
                a.cssBefore = {
                    left: d ? e : -e,
                    top: 0,
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }, a.cssAfter = {zIndex: a._maxZ - 2, left: 0}, a.animIn = {left: 0}, a.animOut = {left: d ? -e : e}
            }
        }
    }, a.fn.cycle.defaults = {
        allowWrap: !0,
        autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
        delay: 0,
        easing: null,
        fx: "fade",
        hideNonActive: !0,
        loop: 0,
        manualFx: void 0,
        manualSpeed: void 0,
        manualTrump: !0,
        maxZ: 100,
        pauseOnHover: !1,
        reverse: !1,
        slideActiveClass: "cycle-slide-active",
        slideClass: "cycle-slide",
        slideCss: {position: "absolute", top: 0, left: 0},
        slides: "> img",
        speed: 500,
        startingSlide: 0,
        sync: !0,
        timeout: 4e3,
        updateView: 0
    }, a(document).ready(function () {
        a(a.fn.cycle.defaults.autoSelector).cycle()
    })
}(jQuery), function (a) {
    "use strict";
    function b(b, d) {
        var e, f, g, h = d.autoHeight;
        if ("container" == h)f = a(d.slides[d.currSlide]).outerHeight(), d.container.height(f); else if (d._autoHeightRatio)d.container.height(d.container.width() / d._autoHeightRatio); else if ("calc" === h || "number" == a.type(h) && h >= 0) {
            if (g = "calc" === h ? c(b, d) : h >= d.slides.length ? 0 : h, g == d._sentinelIndex)return;
            d._sentinelIndex = g, d._sentinel && d._sentinel.remove(), e = a(d.slides[g].cloneNode(!0)), e.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"), e.css({
                position: "static",
                visibility: "hidden",
                display: "block"
            }).prependTo(d.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"), e.find("*").css("visibility", "hidden"), d._sentinel = e
        }
    }

    function c(b, c) {
        var d = 0, e = -1;
        return c.slides.each(function (b) {
            var c = a(this).height();
            c > e && (e = c, d = b)
        }), d
    }

    function d(b, c, d, e, f) {
        var g = a(e).outerHeight();
        c.container.animate({height: g}, c.autoHeightSpeed, c.autoHeightEasing)
    }

    function e(c, f) {
        f._autoHeightOnResize && (a(window).off("resize orientationchange", f._autoHeightOnResize), f._autoHeightOnResize = null), f.container.off("cycle-slide-added cycle-slide-removed", b), f.container.off("cycle-destroyed", e), f.container.off("cycle-before", d), f._sentinel && (f._sentinel.remove(), f._sentinel = null)
    }

    a.extend(a.fn.cycle.defaults, {
        autoHeight: 0,
        autoHeightSpeed: 250,
        autoHeightEasing: null
    }), a(document).on("cycle-initialized", function (c, f) {
        function g() {
            b(c, f)
        }

        var h, i = f.autoHeight, j = a.type(i), k = null;
        ("string" === j || "number" === j) && (f.container.on("cycle-slide-added cycle-slide-removed", b), f.container.on("cycle-destroyed", e), "container" == i ? f.container.on("cycle-before", d) : "string" === j && /\d+\:\d+/.test(i) && (h = i.match(/(\d+)\:(\d+)/), h = h[1] / h[2], f._autoHeightRatio = h), "number" !== j && (f._autoHeightOnResize = function () {
            clearTimeout(k), k = setTimeout(g, 50)
        }, a(window).on("resize orientationchange", f._autoHeightOnResize)), setTimeout(g, 30))
    })
}(jQuery), function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        caption: "> .cycle-caption",
        captionTemplate: "{{slideNum}} / {{slideCount}}",
        overlay: "> .cycle-overlay",
        overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
        captionModule: "caption"
    }), a(document).on("cycle-update-view", function (b, c, d, e) {
        if ("caption" === c.captionModule) {
            a.each(["caption", "overlay"], function () {
                var a = this, b = d[a + "Template"], f = c.API.getComponent(a);
                f.length && b ? (f.html(c.API.tmpl(b, d, c, e)), f.show()) : f.hide()
            })
        }
    }), a(document).on("cycle-destroyed", function (b, c) {
        var d;
        a.each(["caption", "overlay"], function () {
            var a = this, b = c[a + "Template"];
            c[a] && b && (d = c.API.getComponent("caption"), d.empty())
        })
    })
}(jQuery), function (a) {
    "use strict";
    var b = a.fn.cycle;
    a.fn.cycle = function (c) {
        var d, e, f, g = a.makeArray(arguments);
        return "number" == a.type(c) ? this.cycle("goto", c) : "string" == a.type(c) ? this.each(function () {
            var h;
            return d = c, f = a(this).data("cycle.opts"), void 0 === f ? void b.log('slideshow must be initialized before sending commands; "' + d + '" ignored') : (d = "goto" == d ? "jump" : d, e = f.API[d], a.isFunction(e) ? (h = a.makeArray(g), h.shift(), e.apply(f.API, h)) : void b.log("unknown command: ", d))
        }) : b.apply(this, arguments)
    }, a.extend(a.fn.cycle, b), a.extend(b.API, {
        next: function () {
            var a = this.opts();
            if (!a.busy || a.manualTrump) {
                var b = a.reverse ? -1 : 1;
                a.allowWrap === !1 && a.currSlide + b >= a.slideCount || (a.API.advanceSlide(b), a.API.trigger("cycle-next", [a]).log("cycle-next"))
            }
        }, prev: function () {
            var a = this.opts();
            if (!a.busy || a.manualTrump) {
                var b = a.reverse ? 1 : -1;
                a.allowWrap === !1 && a.currSlide + b < 0 || (a.API.advanceSlide(b), a.API.trigger("cycle-prev", [a]).log("cycle-prev"))
            }
        }, destroy: function () {
            this.stop();
            var b = this.opts(), c = a.isFunction(a._data) ? a._data : a.noop;
            clearTimeout(b.timeoutId), b.timeoutId = 0, b.API.stop(), b.API.trigger("cycle-destroyed", [b]).log("cycle-destroyed"), b.container.removeData(), c(b.container[0], "parsedAttrs", !1), b.retainStylesOnDestroy || (b.container.removeAttr("style"), b.slides.removeAttr("style"), b.slides.removeClass(b.slideActiveClass)), b.slides.each(function () {
                var d = a(this);
                d.removeData(), d.removeClass(b.slideClass), c(this, "parsedAttrs", !1)
            })
        }, jump: function (a, b) {
            var c, d = this.opts();
            if (!d.busy || d.manualTrump) {
                var e = parseInt(a, 10);
                if (isNaN(e) || 0 > e || e >= d.slides.length)return void d.API.log("goto: invalid slide index: " + e);
                if (e == d.currSlide)return void d.API.log("goto: skipping, already on slide", e);
                d.nextSlide = e, clearTimeout(d.timeoutId), d.timeoutId = 0, d.API.log("goto: ", e, " (zero-index)"), c = d.currSlide < d.nextSlide, d._tempFx = b, d.API.prepareTx(!0, c)
            }
        }, stop: function () {
            var b = this.opts(), c = b.container;
            clearTimeout(b.timeoutId), b.timeoutId = 0, b.API.stopTransition(), b.pauseOnHover && (b.pauseOnHover !== !0 && (c = a(b.pauseOnHover)), c.off("mouseenter mouseleave")), b.API.trigger("cycle-stopped", [b]).log("cycle-stopped")
        }, reinit: function () {
            var a = this.opts();
            a.API.destroy(), a.container.cycle()
        }, remove: function (b) {
            for (var c, d, e = this.opts(), f = [], g = 1, h = 0; h < e.slides.length; h++)c = e.slides[h], h == b ? d = c : (f.push(c), a(c).data("cycle.opts").slideNum = g, g++);
            d && (e.slides = a(f), e.slideCount--, a(d).remove(), b == e.currSlide ? e.API.advanceSlide(1) : b < e.currSlide ? e.currSlide-- : e.currSlide++, e.API.trigger("cycle-slide-removed", [e, b, d]).log("cycle-slide-removed"), e.API.updateView())
        }
    }), a(document).on("click.cycle", "[data-cycle-cmd]", function (b) {
        b.preventDefault();
        var c = a(this), d = c.data("cycle-cmd"), e = c.data("cycle-context") || ".cycle-slideshow";
        a(e).cycle(d, c.data("cycle-arg"))
    })
}(jQuery), function (a) {
    "use strict";
    function b(b, c) {
        var d;
        return b._hashFence ? void(b._hashFence = !1) : (d = window.location.hash.substring(1), void b.slides.each(function (e) {
            if (a(this).data("cycle-hash") == d) {
                if (c === !0)b.startingSlide = e; else {
                    var f = b.currSlide < e;
                    b.nextSlide = e, b.API.prepareTx(!0, f)
                }
                return !1
            }
        }))
    }

    a(document).on("cycle-pre-initialize", function (c, d) {
        b(d, !0), d._onHashChange = function () {
            b(d, !1)
        }, a(window).on("hashchange", d._onHashChange)
    }), a(document).on("cycle-update-view", function (a, b, c) {
        c.hash && "#" + c.hash != window.location.hash && (b._hashFence = !0, window.location.hash = c.hash)
    }), a(document).on("cycle-destroyed", function (b, c) {
        c._onHashChange && a(window).off("hashchange", c._onHashChange)
    })
}(jQuery), function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {loader: !1}), a(document).on("cycle-bootstrap", function (b, c) {
        function d(b, d) {
            function f(b) {
                var f;
                "wait" == c.loader ? (h.push(b), 0 === j && (h.sort(g), e.apply(c.API, [h, d]), c.container.removeClass("cycle-loading"))) : (f = a(c.slides[c.currSlide]), e.apply(c.API, [b, d]), f.show(), c.container.removeClass("cycle-loading"))
            }

            function g(a, b) {
                return a.data("index") - b.data("index")
            }

            var h = [];
            if ("string" == a.type(b))b = a.trim(b); else if ("array" === a.type(b))for (var i = 0; i < b.length; i++)b[i] = a(b[i])[0];
            b = a(b);
            var j = b.length;
            j && (b.css("visibility", "hidden").appendTo("body").each(function (b) {
                function g() {
                    0 === --i && (--j, f(k))
                }

                var i = 0, k = a(this), l = k.is("img") ? k : k.find("img");
                return k.data("index", b), l = l.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'), l.length ? (i = l.length, void l.each(function () {
                    this.complete ? g() : a(this).load(function () {
                        g()
                    }).on("error", function () {
                        0 === --i && (c.API.log("slide skipped; img not loaded:", this.src), 0 === --j && "wait" == c.loader && e.apply(c.API, [h, d]))
                    })
                })) : (--j, void h.push(k))
            }), j && c.container.addClass("cycle-loading"))
        }

        var e;
        c.loader && (e = c.API.add, c.API.add = d)
    })
}(jQuery), function (a) {
    "use strict";
    function b(b, c, d) {
        var e, f = b.API.getComponent("pager");
        f.each(function () {
            var f = a(this);
            if (c.pagerTemplate) {
                var g = b.API.tmpl(c.pagerTemplate, c, b, d[0]);
                e = a(g).appendTo(f)
            } else e = f.children().eq(b.slideCount - 1);
            e.on(b.pagerEvent, function (a) {
                b.pagerEventBubble || a.preventDefault(), b.API.page(f, a.currentTarget)
            })
        })
    }

    function c(a, b) {
        var c = this.opts();
        if (!c.busy || c.manualTrump) {
            var d = a.children().index(b), e = d, f = c.currSlide < e;
            c.currSlide != e && (c.nextSlide = e, c._tempFx = c.pagerFx, c.API.prepareTx(!0, f), c.API.trigger("cycle-pager-activated", [c, a, b]))
        }
    }

    a.extend(a.fn.cycle.defaults, {
        pager: "> .cycle-pager",
        pagerActiveClass: "cycle-pager-active",
        pagerEvent: "click.cycle",
        pagerEventBubble: void 0,
        pagerTemplate: "<span>&bull;</span>"
    }), a(document).on("cycle-bootstrap", function (a, c, d) {
        d.buildPagerLink = b
    }), a(document).on("cycle-slide-added", function (a, b, d, e) {
        b.pager && (b.API.buildPagerLink(b, d, e), b.API.page = c)
    }), a(document).on("cycle-slide-removed", function (b, c, d, e) {
        if (c.pager) {
            var f = c.API.getComponent("pager");
            f.each(function () {
                var b = a(this);
                a(b.children()[d]).remove()
            })
        }
    }), a(document).on("cycle-update-view", function (b, c, d) {
        var e;
        c.pager && (e = c.API.getComponent("pager"), e.each(function () {
            a(this).children().removeClass(c.pagerActiveClass).eq(c.currSlide).addClass(c.pagerActiveClass)
        }))
    }), a(document).on("cycle-destroyed", function (a, b) {
        var c = b.API.getComponent("pager");
        c && (c.children().off(b.pagerEvent), b.pagerTemplate && c.empty())
    })
}(jQuery), function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {
        next: "> .cycle-next",
        nextEvent: "click.cycle",
        disabledClass: "disabled",
        prev: "> .cycle-prev",
        prevEvent: "click.cycle",
        swipe: !1
    }), a(document).on("cycle-initialized", function (a, b) {
        if (b.API.getComponent("next").on(b.nextEvent, function (a) {
                a.preventDefault(), b.API.next()
            }), b.API.getComponent("prev").on(b.prevEvent, function (a) {
                a.preventDefault(), b.API.prev()
            }), b.swipe) {
            var c = b.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle", d = b.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
            b.container.on(c, function (a) {
                b._tempFx = b.swipeFx, b.API.next()
            }), b.container.on(d, function () {
                b._tempFx = b.swipeFx, b.API.prev()
            })
        }
    }), a(document).on("cycle-update-view", function (a, b, c, d) {
        if (!b.allowWrap) {
            var e = b.disabledClass, f = b.API.getComponent("next"), g = b.API.getComponent("prev"), h = b._prevBoundry || 0, i = void 0 !== b._nextBoundry ? b._nextBoundry : b.slideCount - 1;
            b.currSlide == i ? f.addClass(e).prop("disabled", !0) : f.removeClass(e).prop("disabled", !1), b.currSlide === h ? g.addClass(e).prop("disabled", !0) : g.removeClass(e).prop("disabled", !1)
        }
    }), a(document).on("cycle-destroyed", function (a, b) {
        b.API.getComponent("prev").off(b.nextEvent), b.API.getComponent("next").off(b.prevEvent), b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
    })
}(jQuery), function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {progressive: !1}), a(document).on("cycle-pre-initialize", function (b, c) {
        if (c.progressive) {
            var d, e, f = c.API, g = f.next, h = f.prev, i = f.prepareTx, j = a.type(c.progressive);
            if ("array" == j)d = c.progressive; else if (a.isFunction(c.progressive))d = c.progressive(c); else if ("string" == j) {
                if (e = a(c.progressive), d = a.trim(e.html()), !d)return;
                if (/^(\[)/.test(d))try {
                    d = a.parseJSON(d)
                } catch (k) {
                    return void f.log("error parsing progressive slides", k)
                } else d = d.split(new RegExp(e.data("cycle-split") || "\n")), d[d.length - 1] || d.pop()
            }
            i && (f.prepareTx = function (a, b) {
                var e, f;
                return a || 0 === d.length ? void i.apply(c.API, [a, b]) : void(b && c.currSlide == c.slideCount - 1 ? (f = d[0], d = d.slice(1), c.container.one("cycle-slide-added", function (a, b) {
                    setTimeout(function () {
                        b.API.advanceSlide(1)
                    }, 50)
                }), c.API.add(f)) : b || 0 !== c.currSlide ? i.apply(c.API, [a, b]) : (e = d.length - 1, f = d[e], d = d.slice(0, e), c.container.one("cycle-slide-added", function (a, b) {
                    setTimeout(function () {
                        b.currSlide = 1, b.API.advanceSlide(-1)
                    }, 50)
                }), c.API.add(f, !0)))
            }), g && (f.next = function () {
                var a = this.opts();
                if (d.length && a.currSlide == a.slideCount - 1) {
                    var b = d[0];
                    d = d.slice(1), a.container.one("cycle-slide-added", function (a, b) {
                        g.apply(b.API), b.container.removeClass("cycle-loading")
                    }), a.container.addClass("cycle-loading"), a.API.add(b)
                } else g.apply(a.API)
            }), h && (f.prev = function () {
                var a = this.opts();
                if (d.length && 0 === a.currSlide) {
                    var b = d.length - 1, c = d[b];
                    d = d.slice(0, b), a.container.one("cycle-slide-added", function (a, b) {
                        b.currSlide = 1, b.API.advanceSlide(-1), b.container.removeClass("cycle-loading")
                    }), a.container.addClass("cycle-loading"), a.API.add(c, !0)
                } else h.apply(a.API)
            })
        }
    })
}(jQuery), function (a) {
    "use strict";
    a.extend(a.fn.cycle.defaults, {tmplRegex: "{{((.)?.*?)}}"}), a.extend(a.fn.cycle.API, {
        tmpl: function (b, c) {
            var d = new RegExp(c.tmplRegex || a.fn.cycle.defaults.tmplRegex, "g"), e = a.makeArray(arguments);
            return e.shift(), b.replace(d, function (b, c) {
                var d, f, g, h, i = c.split(".");
                for (d = 0; d < e.length; d++)if (g = e[d]) {
                    if (i.length > 1)for (h = g, f = 0; f < i.length; f++)g = h, h = h[i[f]] || c; else h = g[c];
                    if (a.isFunction(h))return h.apply(g, e);
                    if (void 0 !== h && null !== h && h != c)return h
                }
                return c
            })
        }
    })
}(jQuery), function (a) {
    a.fn.hoverIntent = function (b, c, d) {
        var e = {interval: 100, sensitivity: 6, timeout: 0};
        e = "object" == typeof b ? a.extend(e, b) : a.isFunction(c) ? a.extend(e, {
            over: b,
            out: c,
            selector: d
        }) : a.extend(e, {over: b, out: b, selector: c});
        var f, g, h, i, j = function (a) {
            f = a.pageX, g = a.pageY
        }, k = function (b, c) {
            return c.hoverIntent_t = clearTimeout(c.hoverIntent_t), Math.sqrt((h - f) * (h - f) + (i - g) * (i - g)) < e.sensitivity ? (a(c).off("mousemove.hoverIntent", j), c.hoverIntent_s = !0, e.over.apply(c, [b])) : (h = f, i = g, c.hoverIntent_t = setTimeout(function () {
                k(b, c)
            }, e.interval), void 0)
        }, l = function (a, b) {
            return b.hoverIntent_t = clearTimeout(b.hoverIntent_t), b.hoverIntent_s = !1, e.out.apply(b, [a])
        }, m = function (b) {
            var c = a.extend({}, b), d = this;
            d.hoverIntent_t && (d.hoverIntent_t = clearTimeout(d.hoverIntent_t)), "mouseenter" === b.type ? (h = c.pageX, i = c.pageY, a(d).on("mousemove.hoverIntent", j), d.hoverIntent_s || (d.hoverIntent_t = setTimeout(function () {
                k(c, d)
            }, e.interval))) : (a(d).off("mousemove.hoverIntent", j), d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function () {
                l(c, d)
            }, e.timeout)))
        };
        return this.on({"mouseenter.hoverIntent": m, "mouseleave.hoverIntent": m}, e.selector)
    }
}(jQuery), function (a, b) {
    function c(b, c) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !!g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b)
    }

    function d(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
                return "hidden" === a.css(this, "visibility")
            }).length
    }

    var e = 0, f = /^ui-id-\d+$/;
    a.ui = a.ui || {}, a.extend(a.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        focus: function (b) {
            return function (c, d) {
                return "number" == typeof c ? this.each(function () {
                    var b = this;
                    setTimeout(function () {
                        a(b).focus(), d && d.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus), scrollParent: function () {
            var b;
            return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        }, zIndex: function (c) {
            if (c !== b)return this.css("zIndex", c);
            if (this.length)for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e))return e;
                f = f.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++e)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                f.test(this.id) && a(this).removeAttr("id")
            })
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
            return function (c) {
                return !!a.data(c, b)
            }
        }) : function (b, c, d) {
            return !!a.data(b, d[3])
        }, focusable: function (b) {
            return c(b, !isNaN(a.attr(b, "tabindex")))
        }, tabbable: function (b) {
            var d = a.attr(b, "tabindex"), e = isNaN(d);
            return (e || d >= 0) && c(b, !e)
        }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (c, d) {
        function e(b, c, d, e) {
            return a.each(f, function () {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }

        var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"], g = d.toLowerCase(), h = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + d] = function (c) {
            return c === b ? h["inner" + d].call(this) : this.each(function () {
                a(this).css(g, e(this, c) + "px")
            })
        }, a.fn["outer" + d] = function (b, c) {
            return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function () {
                a(this).css(g, e(this, b, !0, c) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function (a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
        return function (c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart"in document.createElement("div"), a.fn.extend({
        disableSelection: function () {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                a.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), a.extend(a.ui, {
        plugin: {
            add: function (b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d)f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
            }, call: function (a, b, c) {
                var d, e = a.plugins[b];
                if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)for (d = 0; e.length > d; d++)a.options[e[d][0]] && e[d][1].apply(a.element, c)
            }
        }, hasScroll: function (b, c) {
            if ("hidden" === a(b).css("overflow"))return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop", e = !1;
            return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
        }
    })
}(jQuery), function (a, b) {
    var c = 0, d = Array.prototype.slice, e = a.cleanData;
    a.cleanData = function (b) {
        for (var c, d = 0; null != (c = b[d]); d++)try {
            a(c).triggerHandler("remove")
        } catch (f) {
        }
        e(b)
    }, a.widget = function (c, d, e) {
        var f, g, h, i, j = {}, k = c.split(".")[0];
        c = c.split(".")[1], f = k + "-" + c, e || (e = d, d = a.Widget), a.expr[":"][f.toLowerCase()] = function (b) {
            return !!a.data(b, f)
        }, a[k] = a[k] || {}, g = a[k][c], h = a[k][c] = function (a, c) {
            return this._createWidget ? (arguments.length && this._createWidget(a, c), b) : new h(a, c)
        }, a.extend(h, g, {
            version: e.version,
            _proto: a.extend({}, e),
            _childConstructors: []
        }), i = new d, i.options = a.widget.extend({}, i.options), a.each(e, function (c, e) {
            return a.isFunction(e) ? (j[c] = function () {
                var a = function () {
                    return d.prototype[c].apply(this, arguments)
                }, b = function (a) {
                    return d.prototype[c].apply(this, a)
                };
                return function () {
                    var c, d = this._super, f = this._superApply;
                    return this._super = a, this._superApply = b, c = e.apply(this, arguments), this._super = d, this._superApply = f, c
                }
            }(), b) : (j[c] = e, b)
        }), h.prototype = a.widget.extend(i, {widgetEventPrefix: g ? i.widgetEventPrefix : c}, j, {
            constructor: h,
            namespace: k,
            widgetName: c,
            widgetFullName: f
        }), g ? (a.each(g._childConstructors, function (b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, h, c._proto)
        }), delete g._childConstructors) : d._childConstructors.push(h), a.widget.bridge(c, h)
    }, a.widget.extend = function (c) {
        for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++)for (e in g[h])f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
        return c
    }, a.widget.bridge = function (c, e) {
        var f = e.prototype.widgetFullName || c;
        a.fn[c] = function (g) {
            var h = "string" == typeof g, i = d.call(arguments, 1), j = this;
            return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, h ? this.each(function () {
                var d, e = a.data(this, f);
                return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : b) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
            }) : this.each(function () {
                var b = a.data(this, f);
                b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
            }), j
        }
    }, a.Widget = function () {
    }, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (b, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function () {
            return this.element
        },
        option: function (c, d) {
            var e, f, g, h = c;
            if (0 === arguments.length)return a.widget.extend({}, this.options);
            if ("string" == typeof c)if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; e.length - 1 > g; g++)f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                if (c = e.pop(), d === b)return f[c] === b ? null : f[c];
                f[c] = d
            } else {
                if (d === b)return this.options[c] === b ? null : this.options[c];
                h[c] = d
            }
            return this._setOptions(h), this
        },
        _setOptions: function (a) {
            var b;
            for (b in a)this._setOption(b, a[b]);
            return this
        },
        _setOption: function (a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (c, d, e) {
            var f, g = this;
            "boolean" != typeof c && (e = d, d = c, c = !1), e ? (d = f = a(d), this.bindings = this.bindings.add(d)) : (e = d, d = this.element, f = this.widget()), a.each(e, function (e, h) {
                function i() {
                    return c || g.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof h ? g[h] : h).apply(g, arguments) : b
                }

                "string" != typeof h && (i.guid = h.guid = h.guid || i.guid || a.guid++);
                var j = e.match(/^(\w+)\s*(.*)$/), k = j[1] + g.eventNamespace, l = j[2];
                l ? f.delegate(l, k, i) : d.bind(k, i)
            })
        },
        _off: function (a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
        },
        _delay: function (a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }

            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function (b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function (b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function (b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                }, focusout: function (b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)for (e in f)e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    }, a.each({show: "fadeIn", hide: "fadeOut"}, function (b, c) {
        a.Widget.prototype["_" + b] = function (d, e, f) {
            "string" == typeof e && (e = {effect: e});
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {duration: e}), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    })
}(jQuery), function (a) {
    var b = !1;
    a(document).mouseup(function () {
        b = !1
    }), a.widget("ui.mouse", {
        version: "1.10.3",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function (a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function (c) {
                return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (c) {
            if (!b) {
                this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                var d = this, e = 1 === c.which, f = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    d.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
                    return d._mouseMove(a)
                }, this._mouseUpDelegate = function (a) {
                    return d._mouseUp(a)
                }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0)) : !0
            }
        },
        _mouseMove: function (b) {
            return a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button ? this._mouseUp(b) : this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
        },
        _mouseUp: function (b) {
            return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
        },
        _mouseDistanceMet: function (a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery), function (a, b) {
    function c(a, b, c) {
        return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
    }

    function d(b, c) {
        return parseInt(a.css(b, c), 10) || 0
    }

    function e(b) {
        var c = b[0];
        return 9 === c.nodeType ? {
            width: b.width(),
            height: b.height(),
            offset: {top: 0, left: 0}
        } : a.isWindow(c) ? {
            width: b.width(),
            height: b.height(),
            offset: {top: b.scrollTop(), left: b.scrollLeft()}
        } : c.preventDefault ? {width: 0, height: 0, offset: {top: c.pageY, left: c.pageX}} : {
            width: b.outerWidth(),
            height: b.outerHeight(),
            offset: b.offset()
        }
    }

    a.ui = a.ui || {};
    var f, g = Math.max, h = Math.abs, i = Math.round, j = /left|center|right/, k = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, m = /^\w+/, n = /%$/, o = a.fn.position;
    a.position = {
        scrollbarWidth: function () {
            if (f !== b)return f;
            var c, d, e = a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), g = e.children()[0];
            return a("body").append(e), c = g.offsetWidth, e.css("overflow", "scroll"), d = g.offsetWidth, c === d && (d = e[0].clientWidth), e.remove(), f = c - d
        }, getScrollInfo: function (b) {
            var c = b.isWindow ? "" : b.element.css("overflow-x"), d = b.isWindow ? "" : b.element.css("overflow-y"), e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth, f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
            return {width: f ? a.position.scrollbarWidth() : 0, height: e ? a.position.scrollbarWidth() : 0}
        }, getWithinInfo: function (b) {
            var c = a(b || window), d = a.isWindow(c[0]);
            return {
                element: c,
                isWindow: d,
                offset: c.offset() || {left: 0, top: 0},
                scrollLeft: c.scrollLeft(),
                scrollTop: c.scrollTop(),
                width: d ? c.width() : c.outerWidth(),
                height: d ? c.height() : c.outerHeight()
            }
        }
    }, a.fn.position = function (b) {
        if (!b || !b.of)return o.apply(this, arguments);
        b = a.extend({}, b);
        var f, n, p, q, r, s, t = a(b.of), u = a.position.getWithinInfo(b.within), v = a.position.getScrollInfo(u), w = (b.collision || "flip").split(" "), x = {};
        return s = e(t), t[0].preventDefault && (b.at = "left top"), n = s.width, p = s.height, q = s.offset, r = a.extend({}, q), a.each(["my", "at"], function () {
            var a, c, d = (b[this] || "").split(" ");
            1 === d.length && (d = j.test(d[0]) ? d.concat(["center"]) : k.test(d[0]) ? ["center"].concat(d) : ["center", "center"]), d[0] = j.test(d[0]) ? d[0] : "center", d[1] = k.test(d[1]) ? d[1] : "center", a = l.exec(d[0]), c = l.exec(d[1]), x[this] = [a ? a[0] : 0, c ? c[0] : 0], b[this] = [m.exec(d[0])[0], m.exec(d[1])[0]]
        }), 1 === w.length && (w[1] = w[0]), "right" === b.at[0] ? r.left += n : "center" === b.at[0] && (r.left += n / 2), "bottom" === b.at[1] ? r.top += p : "center" === b.at[1] && (r.top += p / 2), f = c(x.at, n, p), r.left += f[0], r.top += f[1], this.each(function () {
            var e, j, k = a(this), l = k.outerWidth(), m = k.outerHeight(), o = d(this, "marginLeft"), s = d(this, "marginTop"), y = l + o + d(this, "marginRight") + v.width, z = m + s + d(this, "marginBottom") + v.height, A = a.extend({}, r), B = c(x.my, k.outerWidth(), k.outerHeight());
            "right" === b.my[0] ? A.left -= l : "center" === b.my[0] && (A.left -= l / 2), "bottom" === b.my[1] ? A.top -= m : "center" === b.my[1] && (A.top -= m / 2), A.left += B[0], A.top += B[1], a.support.offsetFractions || (A.left = i(A.left), A.top = i(A.top)), e = {
                marginLeft: o,
                marginTop: s
            }, a.each(["left", "top"], function (c, d) {
                a.ui.position[w[c]] && a.ui.position[w[c]][d](A, {
                    targetWidth: n,
                    targetHeight: p,
                    elemWidth: l,
                    elemHeight: m,
                    collisionPosition: e,
                    collisionWidth: y,
                    collisionHeight: z,
                    offset: [f[0] + B[0], f[1] + B[1]],
                    my: b.my,
                    at: b.at,
                    within: u,
                    elem: k
                })
            }), b.using && (j = function (a) {
                var c = q.left - A.left, d = c + n - l, e = q.top - A.top, f = e + p - m, i = {
                    target: {
                        element: t,
                        left: q.left,
                        top: q.top,
                        width: n,
                        height: p
                    },
                    element: {element: k, left: A.left, top: A.top, width: l, height: m},
                    horizontal: 0 > d ? "left" : c > 0 ? "right" : "center",
                    vertical: 0 > f ? "top" : e > 0 ? "bottom" : "middle"
                };
                l > n && n > h(c + d) && (i.horizontal = "center"), m > p && p > h(e + f) && (i.vertical = "middle"), i.important = g(h(c), h(d)) > g(h(e), h(f)) ? "horizontal" : "vertical", b.using.call(this, a, i)
            }), k.offset(a.extend(A, {using: j}))
        })
    }, a.ui.position = {
        fit: {
            left: function (a, b) {
                var c, d = b.within, e = d.isWindow ? d.scrollLeft : d.offset.left, f = d.width, h = a.left - b.collisionPosition.marginLeft, i = e - h, j = h + b.collisionWidth - f - e;
                b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
            }, top: function (a, b) {
                var c, d = b.within, e = d.isWindow ? d.scrollTop : d.offset.top, f = b.within.height, h = a.top - b.collisionPosition.marginTop, i = e - h, j = h + b.collisionHeight - f - e;
                b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
            }
        }, flip: {
            left: function (a, b) {
                var c, d, e = b.within, f = e.offset.left + e.scrollLeft, g = e.width, i = e.isWindow ? e.scrollLeft : e.offset.left, j = a.left - b.collisionPosition.marginLeft, k = j - i, l = j + b.collisionWidth - g - i, m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, o = -2 * b.offset[0];
                0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || h(k) > c) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || l > h(d)) && (a.left += m + n + o))
            }, top: function (a, b) {
                var c, d, e = b.within, f = e.offset.top + e.scrollTop, g = e.height, i = e.isWindow ? e.scrollTop : e.offset.top, j = a.top - b.collisionPosition.marginTop, k = j - i, l = j + b.collisionHeight - g - i, m = "top" === b.my[1], n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, p = -2 * b.offset[1];
                0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, a.top + n + o + p > k && (0 > d || h(k) > d) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, a.top + n + o + p > l && (c > 0 || l > h(c)) && (a.top += n + o + p))
            }
        }, flipfit: {
            left: function () {
                a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
            }, top: function () {
                a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, function () {
        var b, c, d, e, f, g = document.getElementsByTagName("body")[0], h = document.createElement("div");
        b = document.createElement(g ? "div" : "body"), d = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, g && a.extend(d, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (f in d)b.style[f] = d[f];
        b.appendChild(h), c = g || document.documentElement, c.insertBefore(b, c.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", e = a(h).offset().left, a.support.offsetFractions = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
    }()
}(jQuery), function (a) {
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function (b) {
            var c = this.options;
            return this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), this.handle ? (a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function () {
                a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(a(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                }, parent: this._getParentOffset(), relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
        },
        _mouseDrag: function (b, c) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1)return this._mouseUp({}), !1;
                this.position = d.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
        },
        _mouseStop: function (b) {
            var c = this, d = !1;
            return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "original" !== this.options.helper || a.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                c._trigger("stop", b) !== !1 && c._clear()
            }) : this._trigger("stop", b) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function (b) {
            return a("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (b) {
            return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function (b) {
            var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return d.parents("body").length || d.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d[0] === this.element[0] || /(fixed|absolute)/.test(d.css("position")) || d.css("position", "absolute"), d
        },
        _adjustOffsetFromHelper: function (b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left"in b && (this.offset.click.left = b.left + this.margins.left), "right"in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top"in b && (this.offset.click.top = b.top + this.margins.top), "bottom"in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var b, c, d, e = this.options;
            return e.containment ? "window" === e.containment ? void(this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void(this.containment = [0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void(this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void(d && (b = "hidden" !== c.css("overflow"), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c))) : void(this.containment = null)
        },
        _convertPositionTo: function (b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }), {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * d
            }
        },
        _generatePosition: function (b) {
            var c, d, e, f, g = this.options, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i = b.pageX, j = b.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: h.scrollTop(),
                left: h.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (d = this.relative_container.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, b.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), b.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), b.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), b.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f)),
            {
                top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (b, c, d) {
            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), "drag" === b && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function (b, c) {
            var d = a(this).data("ui-draggable"), e = d.options, f = a.extend({}, c, {item: d.element});
            d.sortables = [], a(e.connectToSortable).each(function () {
                var c = a.data(this, "ui-sortable");
                c && !c.options.disabled && (d.sortables.push({
                    instance: c,
                    shouldRevert: c.options.revert
                }), c.refreshPositions(), c._trigger("activate", b, f))
            })
        }, stop: function (b, c) {
            var d = a(this).data("ui-draggable"), e = a.extend({}, c, {item: d.element});
            a.each(d.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, "original" === d.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
            })
        }, drag: function (b, c) {
            var d = a(this).data("ui-draggable"), e = this;
            a.each(d.sortables, function () {
                var f = !1, g = this;
                this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (f = !0, a.each(d.sortables, function () {
                    return this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this !== g && this.instance._intersectsWith(this.instance.containerCache) && a.contains(g.instance.element[0], this.instance.element[0]) && (f = !1), f
                })), f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return c.helper[0]
                }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1)
            })
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var b = a("body"), c = a(this).data("ui-draggable").options;
            b.css("cursor") && (c._cursor = b.css("cursor")), b.css("cursor", c.cursor)
        }, stop: function () {
            var b = a(this).data("ui-draggable").options;
            b._cursor && a("body").css("cursor", b._cursor)
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function (b, c) {
            var d = a(c.helper), e = a(this).data("ui-draggable").options;
            d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity)
        }, stop: function (b, c) {
            var d = a(this).data("ui-draggable").options;
            d._opacity && a(c.helper).css("opacity", d._opacity)
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var b = a(this).data("ui-draggable");
            b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset())
        }, drag: function (b) {
            var c = a(this).data("ui-draggable"), d = c.options, e = !1;
            c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName ? (d.axis && "x" === d.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop + d.scrollSpeed : b.pageY - c.overflowOffset.top < d.scrollSensitivity && (c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop - d.scrollSpeed)), d.axis && "y" === d.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft + d.scrollSpeed : b.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft - d.scrollSpeed))) : (d.axis && "x" === d.axis || (b.pageY - a(document).scrollTop() < d.scrollSensitivity ? e = a(document).scrollTop(a(document).scrollTop() - d.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < d.scrollSensitivity && (e = a(document).scrollTop(a(document).scrollTop() + d.scrollSpeed))), d.axis && "y" === d.axis || (b.pageX - a(document).scrollLeft() < d.scrollSensitivity ? e = a(document).scrollLeft(a(document).scrollLeft() - d.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < d.scrollSensitivity && (e = a(document).scrollLeft(a(document).scrollLeft() + d.scrollSpeed)))), e !== !1 && a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b)
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function () {
            var b = a(this).data("ui-draggable"), c = b.options;
            b.snapElements = [], a(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)" : c.snap).each(function () {
                var c = a(this), d = c.offset();
                this !== b.element[0] && b.snapElements.push({
                    item: this,
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: d.top,
                    left: d.left
                })
            })
        }, drag: function (b, c) {
            var d, e, f, g, h, i, j, k, l, m, n = a(this).data("ui-draggable"), o = n.options, p = o.snapTolerance, q = c.offset.left, r = q + n.helperProportions.width, s = c.offset.top, t = s + n.helperProportions.height;
            for (l = n.snapElements.length - 1; l >= 0; l--)h = n.snapElements[l].left, i = h + n.snapElements[l].width, j = n.snapElements[l].top, k = j + n.snapElements[l].height, h - p > r || q > i + p || j - p > t || s > k + p || !a.contains(n.snapElements[l].item.ownerDocument, n.snapElements[l].item) ? (n.snapElements[l].snapping && n.options.snap.release && n.options.snap.release.call(n.element, b, a.extend(n._uiHash(), {snapItem: n.snapElements[l].item})), n.snapElements[l].snapping = !1) : ("inner" !== o.snapMode && (d = p >= Math.abs(j - t), e = p >= Math.abs(k - s), f = p >= Math.abs(h - r), g = p >= Math.abs(i - q), d && (c.position.top = n._convertPositionTo("relative", {
                    top: j - n.helperProportions.height,
                    left: 0
                }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                    top: k,
                    left: 0
                }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h - n.helperProportions.width
                }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: i
                }).left - n.margins.left)), m = d || e || f || g, "outer" !== o.snapMode && (d = p >= Math.abs(j - s), e = p >= Math.abs(k - t), f = p >= Math.abs(h - q), g = p >= Math.abs(i - r), d && (c.position.top = n._convertPositionTo("relative", {
                    top: j,
                    left: 0
                }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                    top: k - n.helperProportions.height,
                    left: 0
                }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: i - n.helperProportions.width
                }).left - n.margins.left)), !n.snapElements[l].snapping && (d || e || f || g || m) && n.options.snap.snap && n.options.snap.snap.call(n.element, b, a.extend(n._uiHash(), {snapItem: n.snapElements[l].item})), n.snapElements[l].snapping = d || e || f || g || m)
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function () {
            var b, c = this.data("ui-draggable").options, d = a.makeArray(a(c.stack)).sort(function (b, c) {
                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
            });
            d.length && (b = parseInt(a(d[0]).css("zIndex"), 10) || 0, a(d).each(function (c) {
                a(this).css("zIndex", b + c)
            }), this.css("zIndex", b + d.length))
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function (b, c) {
            var d = a(c.helper), e = a(this).data("ui-draggable").options;
            d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex)
        }, stop: function (b, c) {
            var d = a(this).data("ui-draggable").options;
            d._zIndex && a(c.helper).css("zIndex", d._zIndex)
        }
    })
}(jQuery), function (a) {
    function b(a) {
        return parseInt(a, 10) || 0
    }

    function c(a) {
        return !isNaN(parseInt(a, 10))
    }

    a.widget("ui.resizable", a.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function () {
            var b, c, d, e, f, g = this, h = this.options;
            if (this.element.addClass("ui-resizable"), a.extend(this, {
                    _aspectRatio: !!h.aspectRatio,
                    aspectRatio: h.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {}, c = 0; b.length > c; c++)d = a.trim(b[c]), f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({zIndex: h.zIndex}), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(e);
            this._renderAxis = function (b) {
                var c, d, e, f;
                b = b || this.element;
                for (c in this.handles)this.handles[c].constructor === String && (this.handles[c] = a(this.handles[c], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), a(this.handles[c]).length
            }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se")
            }), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show())
            }).mouseleave(function () {
                h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var b, c = function (b) {
                a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                position: b.css("position"),
                width: b.outerWidth(),
                height: b.outerHeight(),
                top: b.css("top"),
                left: b.css("left")
            }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
        },
        _mouseCapture: function (b) {
            var c, d, e = !1;
            for (c in this.handles)d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
            return !this.options.disabled && e
        },
        _mouseStart: function (c) {
            var d, e, f, g = this.options, h = this.element.position(), i = this.element;
            return this.resizing = !0, /absolute/.test(i.css("position")) ? i.css({
                position: "absolute",
                top: i.css("top"),
                left: i.css("left")
            }) : i.is(".ui-draggable") && i.css({
                position: "absolute",
                top: h.top,
                left: h.left
            }), this._renderProxy(), d = b(this.helper.css("left")), e = b(this.helper.css("top")), g.containment && (d += a(g.containment).scrollLeft() || 0, e += a(g.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: d,
                top: e
            }, this.size = this._helper ? {width: i.outerWidth(), height: i.outerHeight()} : {
                width: i.width(),
                height: i.height()
            }, this.originalSize = this._helper ? {width: i.outerWidth(), height: i.outerHeight()} : {
                width: i.width(),
                height: i.height()
            }, this.originalPosition = {left: d, top: e}, this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            }, this.originalMousePosition = {
                left: c.pageX,
                top: c.pageY
            }, this.aspectRatio = "number" == typeof g.aspectRatio ? g.aspectRatio : this.originalSize.width / this.originalSize.height || 1, f = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === f ? this.axis + "-resize" : f), i.addClass("ui-resizable-resizing"), this._propagate("start", c), !0
        },
        _mouseDrag: function (b) {
            var c, d = this.helper, e = {}, f = this.originalMousePosition, g = this.axis, h = this.position.top, i = this.position.left, j = this.size.width, k = this.size.height, l = b.pageX - f.left || 0, m = b.pageY - f.top || 0, n = this._change[g];
            return n ? (c = n.apply(this, [b, l, m]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), this.position.top !== h && (e.top = this.position.top + "px"), this.position.left !== i && (e.left = this.position.left + "px"), this.size.width !== j && (e.width = this.size.width + "px"), this.size.height !== k && (e.height = this.size.height + "px"), d.css(e), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(e) || this._trigger("resize", b, this.ui()), !1) : !1
        },
        _mouseStop: function (b) {
            this.resizing = !1;
            var c, d, e, f, g, h, i, j = this.options, k = this;
            return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && a.ui.hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
                width: k.helper.width() - f,
                height: k.helper.height() - e
            }, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
                top: i,
                left: h
            })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (a) {
            var b, d, e, f, g, h = this.options;
            g = {
                minWidth: c(h.minWidth) ? h.minWidth : 0,
                maxWidth: c(h.maxWidth) ? h.maxWidth : 1 / 0,
                minHeight: c(h.minHeight) ? h.minHeight : 0,
                maxHeight: c(h.maxHeight) ? h.maxHeight : 1 / 0
            }, (this._aspectRatio || a) && (b = g.minHeight * this.aspectRatio, e = g.minWidth / this.aspectRatio, d = g.maxHeight * this.aspectRatio, f = g.maxWidth / this.aspectRatio, b > g.minWidth && (g.minWidth = b), e > g.minHeight && (g.minHeight = e), g.maxWidth > d && (g.maxWidth = d), g.maxHeight > f && (g.maxHeight = f)), this._vBoundaries = g
        },
        _updateCache: function (a) {
            this.offset = this.helper.offset(), c(a.left) && (this.position.left = a.left), c(a.top) && (this.position.top = a.top), c(a.height) && (this.size.height = a.height), c(a.width) && (this.size.width = a.width)
        },
        _updateRatio: function (a) {
            var b = this.position, d = this.size, e = this.axis;
            return c(a.height) ? a.width = a.height * this.aspectRatio : c(a.width) && (a.height = a.width / this.aspectRatio), "sw" === e && (a.left = b.left + (d.width - a.width), a.top = null), "nw" === e && (a.top = b.top + (d.height - a.height), a.left = b.left + (d.width - a.width)), a
        },
        _respectSize: function (a) {
            var b = this._vBoundaries, d = this.axis, e = c(a.width) && b.maxWidth && b.maxWidth < a.width, f = c(a.height) && b.maxHeight && b.maxHeight < a.height, g = c(a.width) && b.minWidth && b.minWidth > a.width, h = c(a.height) && b.minHeight && b.minHeight > a.height, i = this.originalPosition.left + this.originalSize.width, j = this.position.top + this.size.height, k = /sw|nw|w/.test(d), l = /nw|ne|n/.test(d);
            return g && (a.width = b.minWidth), h && (a.height = b.minHeight), e && (a.width = b.maxWidth), f && (a.height = b.maxHeight), g && k && (a.left = i - b.minWidth), e && k && (a.left = i - b.maxWidth), h && l && (a.top = j - b.minHeight), f && l && (a.top = j - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) {
                var a, b, c, d, e, f = this.helper || this.element;
                for (a = 0; this._proportionallyResizeElements.length > a; a++) {
                    if (e = this._proportionallyResizeElements[a], !this.borderDif)for (this.borderDif = [], c = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], d = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")], b = 0; c.length > b; b++)this.borderDif[b] = (parseInt(c[b], 10) || 0) + (parseInt(d[b], 10) || 0);
                    e.css({
                        height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function () {
            var b = this.element, c = this.options;
            this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++c.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (a, b) {
                return {width: this.originalSize.width + b}
            }, w: function (a, b) {
                var c = this.originalSize, d = this.originalPosition;
                return {left: d.left + b, width: c.width - b}
            }, n: function (a, b, c) {
                var d = this.originalSize, e = this.originalPosition;
                return {top: e.top + c, height: d.height - c}
            }, s: function (a, b, c) {
                return {height: this.originalSize.height + c}
            }, se: function (b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            }, sw: function (b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            }, ne: function (b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            }, nw: function (b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            }
        },
        _propagate: function (b, c) {
            a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), a.ui.plugin.add("resizable", "animate", {
        stop: function (b) {
            var c = a(this).data("ui-resizable"), d = c.options, e = c._proportionallyResizeElements, f = e.length && /textarea/i.test(e[0].nodeName), g = f && a.ui.hasScroll(e[0], "left") ? 0 : c.sizeDiff.height, h = f ? 0 : c.sizeDiff.width, i = {
                width: c.size.width - h,
                height: c.size.height - g
            }, j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
            c.element.animate(a.extend(i, k && j ? {top: k, left: j} : {}), {
                duration: d.animateDuration,
                easing: d.animateEasing,
                step: function () {
                    var d = {
                        width: parseInt(c.element.css("width"), 10),
                        height: parseInt(c.element.css("height"), 10),
                        top: parseInt(c.element.css("top"), 10),
                        left: parseInt(c.element.css("left"), 10)
                    };
                    e && e.length && a(e[0]).css({
                        width: d.width,
                        height: d.height
                    }), c._updateCache(d), c._propagate("resize", b)
                }
            })
        }
    }), a.ui.plugin.add("resizable", "containment", {
        start: function () {
            var c, d, e, f, g, h, i, j = a(this).data("ui-resizable"), k = j.options, l = j.element, m = k.containment, n = m instanceof a ? m.get(0) : /parent/.test(m) ? l.parent().get(0) : m;
            n && (j.containerElement = a(n), /document/.test(m) || m === document ? (j.containerOffset = {
                left: 0,
                top: 0
            }, j.containerPosition = {left: 0, top: 0}, j.parentData = {
                element: a(document),
                left: 0,
                top: 0,
                width: a(document).width(),
                height: a(document).height() || document.body.parentNode.scrollHeight
            }) : (c = a(n), d = [], a(["Top", "Right", "Left", "Bottom"]).each(function (a, e) {
                d[a] = b(c.css("padding" + e))
            }), j.containerOffset = c.offset(), j.containerPosition = c.position(), j.containerSize = {
                height: c.innerHeight() - d[3],
                width: c.innerWidth() - d[1]
            }, e = j.containerOffset, f = j.containerSize.height, g = j.containerSize.width, h = a.ui.hasScroll(n, "left") ? n.scrollWidth : g, i = a.ui.hasScroll(n) ? n.scrollHeight : f, j.parentData = {
                element: n,
                left: e.left,
                top: e.top,
                width: h,
                height: i
            }))
        }, resize: function (b) {
            var c, d, e, f, g = a(this).data("ui-resizable"), h = g.options, i = g.containerOffset, j = g.position, k = g._aspectRatio || b.shiftKey, l = {
                top: 0,
                left: 0
            }, m = g.containerElement;
            m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio), g.position.top = g._helper ? i.top : 0), g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top, c = Math.abs((g._helper ? g.offset.left - l.left : g.offset.left - l.left) + g.sizeDiff.width), d = Math.abs((g._helper ? g.offset.top - l.top : g.offset.top - i.top) + g.sizeDiff.height), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f && (c -= g.parentData.left), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio))
        }, stop: function () {
            var b = a(this).data("ui-resizable"), c = b.options, d = b.containerOffset, e = b.containerPosition, f = b.containerElement, g = a(b.helper), h = g.offset(), i = g.outerWidth() - b.sizeDiff.width, j = g.outerHeight() - b.sizeDiff.height;
            b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            })
        }
    }), a.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var b = a(this).data("ui-resizable"), c = b.options, d = function (b) {
                a(b).each(function () {
                    var b = a(this);
                    b.data("ui-resizable-alsoresize", {
                        width: parseInt(b.width(), 10),
                        height: parseInt(b.height(), 10),
                        left: parseInt(b.css("left"), 10),
                        top: parseInt(b.css("top"), 10)
                    })
                })
            };
            "object" != typeof c.alsoResize || c.alsoResize.parentNode ? d(c.alsoResize) : c.alsoResize.length ? (c.alsoResize = c.alsoResize[0], d(c.alsoResize)) : a.each(c.alsoResize, function (a) {
                d(a)
            })
        }, resize: function (b, c) {
            var d = a(this).data("ui-resizable"), e = d.options, f = d.originalSize, g = d.originalPosition, h = {
                height: d.size.height - f.height || 0,
                width: d.size.width - f.width || 0,
                top: d.position.top - g.top || 0,
                left: d.position.left - g.left || 0
            }, i = function (b, d) {
                a(b).each(function () {
                    var b = a(this), e = a(this).data("ui-resizable-alsoresize"), f = {}, g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    a.each(g, function (a, b) {
                        var c = (e[b] || 0) + (h[b] || 0);
                        c && c >= 0 && (f[b] = c || null)
                    }), b.css(f)
                })
            };
            "object" != typeof e.alsoResize || e.alsoResize.nodeType ? i(e.alsoResize) : a.each(e.alsoResize, function (a, b) {
                i(a, b)
            })
        }, stop: function () {
            a(this).removeData("resizable-alsoresize")
        }
    }), a.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var b = a(this).data("ui-resizable"), c = b.options, d = b.size;
            b.ghost = b.originalElement.clone(), b.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: d.height,
                width: d.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper)
        }, resize: function () {
            var b = a(this).data("ui-resizable");
            b.ghost && b.ghost.css({position: "relative", height: b.size.height, width: b.size.width})
        }, stop: function () {
            var b = a(this).data("ui-resizable");
            b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
        }
    }), a.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var b = a(this).data("ui-resizable"), c = b.options, d = b.size, e = b.originalSize, f = b.originalPosition, g = b.axis, h = "number" == typeof c.grid ? [c.grid, c.grid] : c.grid, i = h[0] || 1, j = h[1] || 1, k = Math.round((d.width - e.width) / i) * i, l = Math.round((d.height - e.height) / j) * j, m = e.width + k, n = e.height + l, o = c.maxWidth && m > c.maxWidth, p = c.maxHeight && n > c.maxHeight, q = c.minWidth && c.minWidth > m, r = c.minHeight && c.minHeight > n;
            c.grid = h, q && (m += i), r && (n += j), o && (m -= i), p && (n -= j), /^(se|s|e)$/.test(g) ? (b.size.width = m, b.size.height = n) : /^(ne)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.top = f.top - l) : /^(sw)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.left = f.left - k) : (b.size.width = m, b.size.height = n, b.position.top = f.top - l, b.position.left = f.left - k)
        }
    })
}(jQuery), function (a) {
    var b, c, d, e, f = "ui-button ui-widget ui-state-default ui-corner-all", g = "ui-state-hover ui-state-active ", h = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", i = function () {
        var b = a(this);
        setTimeout(function () {
            b.find(":ui-button").button("refresh")
        }, 1)
    }, j = function (b) {
        var c = b.name, d = b.form, e = a([]);
        return c && (c = c.replace(/'/g, "\\'"), e = d ? a(d).find("[name='" + c + "']") : a("[name='" + c + "']", b.ownerDocument).filter(function () {
            return !this.form
        })), e
    };
    a.widget("ui.button", {
        version: "1.10.3",
        defaultElement: "<button>",
        options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}},
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, i), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var g = this, h = this.options, k = "checkbox" === this.type || "radio" === this.type, l = k ? "" : "ui-state-active", m = "ui-state-focus";
            null === h.label && (h.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(f).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                h.disabled || this === b && a(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                h.disabled || a(this).removeClass(l)
            }).bind("click" + this.eventNamespace, function (a) {
                h.disabled && (a.preventDefault(), a.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function () {
                g.buttonElement.addClass(m)
            }).bind("blur" + this.eventNamespace, function () {
                g.buttonElement.removeClass(m)
            }), k && (this.element.bind("change" + this.eventNamespace, function () {
                e || g.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (a) {
                h.disabled || (e = !1, c = a.pageX, d = a.pageY)
            }).bind("mouseup" + this.eventNamespace, function (a) {
                h.disabled || (c !== a.pageX || d !== a.pageY) && (e = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                return h.disabled || e ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (h.disabled || e)return !1;
                a(this).addClass("ui-state-active"), g.buttonElement.attr("aria-pressed", "true");
                var b = g.element[0];
                j(b).not(b).map(function () {
                    return a(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                return h.disabled ? !1 : (a(this).addClass("ui-state-active"), b = this, void g.document.one("mouseup", function () {
                    b = null
                }))
            }).bind("mouseup" + this.eventNamespace, function () {
                return h.disabled ? !1 : void a(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function (b) {
                return h.disabled ? !1 : void((b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active"))
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                a(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (b) {
                b.keyCode === a.ui.keyCode.SPACE && a(this).click()
            })), this._setOption("disabled", h.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var a, b, c;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", c)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(f + " " + g + " " + h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (a, b) {
            return this._super(a, b), "disabled" === a ? void(b ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
        },
        refresh: function () {
            var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? j(this.element[0]).each(function () {
                a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type)return void(this.options.label && this.element.val(this.options.label));
            var b = this.buttonElement.removeClass(h), c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(), d = this.options.icons, e = d.primary && d.secondary, f = [];
            d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : f.push("ui-button-text-only"), b.addClass(f.join(" "))
        }
    }), a.widget("ui.buttonset", {
        version: "1.10.3",
        options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},
        _create: function () {
            this.element.addClass("ui-buttonset");
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (a, b) {
            "disabled" === a && this.buttons.button("option", a, b), this._super(a, b)
        },
        refresh: function () {
            var b = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return a(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return a(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery), function (a, b) {
    function c() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, a.extend(this._defaults, this.regional[""]), this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function d(b) {
        var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return b.delegate(c, "mouseout", function () {
            a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
        }).delegate(c, "mouseover", function () {
            a.datepicker._isDisabledDatepicker(f.inline ? b.parent()[0] : f.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function e(b, c) {
        a.extend(b, c);
        for (var d in c)null == c[d] && (b[d] = c[d]);
        return b
    }

    a.extend(a.ui, {datepicker: {version: "1.10.3"}});
    var f, g = "datepicker";
    a.extend(c.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (a) {
            return e(this._defaults, a || {}), this
        },
        _attachDatepicker: function (b, c) {
            var d, e, f;
            d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
        },
        _newInst: function (b, c) {
            var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: e,
                input: b,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: c ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (b, c) {
            var d = a(b);
            c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, g, c), c.settings.disabled && this._disableDatepicker(b))
        },
        _attachments: function (b, c) {
            var d, e, f, g = this._get(c, "appendText"), h = this._get(c, "isRTL");
            c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.focus(this._showDatepicker), ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: e,
                title: e
            }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
                src: f,
                alt: e,
                title: e
            }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function () {
                return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
            }))
        },
        _autoSize: function (a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b, c, d, e, f = new Date(2009, 11, 20), g = this._get(a, "dateFormat");
                g.match(/[DM]/) && (b = function (a) {
                    for (c = 0, d = 0, e = 0; a.length > e; e++)a[e].length > c && (c = a[e].length, d = e);
                    return d
                }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
            }
        },
        _inlineDatepicker: function (b, c) {
            var d = a(b);
            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, g, c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (b, c, d, f, h) {
            var i, j, k, l, m, n = this._dialogInst;
            return n || (this.uuid += 1, i = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), n = this._dialogInst = this._newInst(this._dialogInput, !1), n.settings = {}, a.data(this._dialogInput[0], g, n)), e(n.settings, f || {}), c = c && c.constructor === Date ? this._formatDate(n, c) : c, this._dialogInput.val(c), this._pos = h ? h.length ? h : [h.pageX, h.pageY] : null, this._pos || (j = document.documentElement.clientWidth, k = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, m = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [j / 2 - 100 + l, k / 2 - 150 + m]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), n.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], g, n), this
        },
        _destroyDatepicker: function (b) {
            var c, d = a(b), e = a.data(b, g);
            d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, g), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function (b) {
            var c, d, e = a(b), f = a.data(b, g);
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function (a) {
                return a === b ? null : a
            }))
        },
        _disableDatepicker: function (b) {
            var c, d, e = a(b), f = a.data(b, g);
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function (a) {
                return a === b ? null : a
            }), this._disabledInputs[this._disabledInputs.length] = b)
        },
        _isDisabledDatepicker: function (a) {
            if (!a)return !1;
            for (var b = 0; this._disabledInputs.length > b; b++)if (this._disabledInputs[b] === a)return !0;
            return !1
        },
        _getInst: function (b) {
            try {
                return a.data(b, g)
            } catch (c) {
                throw"Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (c, d, f) {
            var g, h, i, j, k = this._getInst(c);
            return 2 === arguments.length && "string" == typeof d ? "defaults" === d ? a.extend({}, a.datepicker._defaults) : k ? "all" === d ? a.extend({}, k.settings) : this._get(k, d) : null : (g = d || {}, "string" == typeof d && (g = {}, g[d] = f), k && (this._curInst === k && this._hideDatepicker(), h = this._getDateDatepicker(c, !0), i = this._getMinMaxDate(k, "min"), j = this._getMinMaxDate(k, "max"), e(k.settings, g), null !== i && g.dateFormat !== b && g.minDate === b && (k.settings.minDate = this._formatDate(k, i)), null !== j && g.dateFormat !== b && g.maxDate === b && (k.settings.maxDate = this._formatDate(k, j)), "disabled"in g && (g.disabled ? this._disableDatepicker(c) : this._enableDatepicker(c)), this._attachments(a(c), k), this._autoSize(k), this._setDate(k, h), this._updateAlternate(k), this._updateDatepicker(k)), b)
        },
        _changeDatepicker: function (a, b, c) {
            this._optionDatepicker(a, b, c)
        },
        _refreshDatepicker: function (a) {
            var b = this._getInst(a);
            b && this._updateDatepicker(b)
        },
        _setDateDatepicker: function (a, b) {
            var c = this._getInst(a);
            c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
        },
        _getDateDatepicker: function (a, b) {
            var c = this._getInst(a);
            return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
        },
        _doKeyDown: function (b) {
            var c, d, e, f = a.datepicker._getInst(b.target), g = !0, h = f.dpDiv.is(".ui-datepicker-rtl");
            if (f._keyEvent = !0, a.datepicker._datepickerShowing)switch (b.keyCode) {
                case 9:
                    a.datepicker._hideDatepicker(), g = !1;
                    break;
                case 13:
                    return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
                case 27:
                    a.datepicker._hideDatepicker();
                    break;
                case 33:
                    a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                    break;
                case 34:
                    a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                    break;
                case 35:
                    (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
                    break;
                case 36:
                    (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
                    break;
                case 37:
                    (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                    break;
                case 38:
                    (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
                    break;
                case 39:
                    (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                    break;
                case 40:
                    (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
                    break;
                default:
                    g = !1
            } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
            g && (b.preventDefault(), b.stopPropagation())
        },
        _doKeyPress: function (c) {
            var d, e, f = a.datepicker._getInst(c.target);
            return a.datepicker._get(f, "constrainInput") ? (d = a.datepicker._possibleChars(a.datepicker._get(f, "dateFormat")), e = String.fromCharCode(null == c.charCode ? c.keyCode : c.charCode), c.ctrlKey || c.metaKey || " " > e || !d || d.indexOf(e) > -1) : b
        },
        _doKeyUp: function (b) {
            var c, d = a.datepicker._getInst(b.target);
            if (d.input.val() !== d.lastVal)try {
                c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
            } catch (e) {
            }
            return !0
        },
        _showDatepicker: function (b) {
            if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
                var c, d, f, g, h, i, j;
                c = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), d = a.datepicker._get(c, "beforeShow"), f = d ? d.apply(b, [b, c]) : {}, f !== !1 && (e(c.settings, f), c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function () {
                    return g |= "fixed" === a(this).css("position"), !g
                }), h = {
                    left: a.datepicker._pos[0],
                    top: a.datepicker._pos[1]
                }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), a.datepicker._updateDatepicker(c), h = a.datepicker._checkOffset(c, h, g), c.dpDiv.css({
                    position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }), c.inline || (i = a.datepicker._get(c, "showAnim"), j = a.datepicker._get(c, "duration"), c.dpDiv.zIndex(a(b).zIndex() + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[i] ? c.dpDiv.show(i, a.datepicker._get(c, "showOptions"), j) : c.dpDiv[i || "show"](i ? j : null), a.datepicker._shouldFocusInput(c) && c.input.focus(), a.datepicker._curInst = c))
            }
        },
        _updateDatepicker: function (b) {
            this.maxRows = 4, f = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b), b.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var c, d = this._getNumberOfMonths(b), e = d[1], g = 17;
            b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", g * e + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), b.yearshtml && (c = b.yearshtml, setTimeout(function () {
                c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
        },
        _checkOffset: function (b, c, d) {
            var e = b.dpDiv.outerWidth(), f = b.dpDiv.outerHeight(), g = b.input ? b.input.outerWidth() : 0, h = b.input ? b.input.outerHeight() : 0, i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()), j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
            return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
        },
        _findPos: function (b) {
            for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));)b = b[e ? "previousSibling" : "nextSibling"];
            return c = a(b).offset(), [c.left, c.top]
        },
        _hideDatepicker: function (b) {
            var c, d, e, f, h = this._curInst;
            !h || b && h !== a.data(b, g) || this._datepickerShowing && (c = this._get(h, "showAnim"), d = this._get(h, "duration"), e = function () {
                a.datepicker._tidyDialog(h)
            }, a.effects && (a.effects.effect[c] || a.effects[c]) ? h.dpDiv.hide(c, a.datepicker._get(h, "showOptions"), d, e) : h.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(h, "onClose"), f && f.apply(h.input ? h.input[0] : null, [h.input ? h.input.val() : "", h]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (b) {
            if (a.datepicker._curInst) {
                var c = a(b.target), d = a.datepicker._getInst(c[0]);
                (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (b, c, d) {
            var e = a(b), f = this._getInst(e[0]);
            this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
        },
        _gotoToday: function (b) {
            var c, d = a(b), e = this._getInst(d[0]);
            this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
        },
        _selectMonthYear: function (b, c, d) {
            var e = a(b), f = this._getInst(e[0]);
            f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
        },
        _selectDay: function (b, c, d, e) {
            var f, g = a(b);
            a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function (b) {
            var c = a(b);
            this._selectDate(c, "")
        },
        _selectDate: function (b, c) {
            var d, e = a(b), f = this._getInst(e[0]);
            c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (b) {
            var c, d, e, f = this._get(b, "altField");
            f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function () {
                a(this).val(e)
            }))
        },
        noWeekends: function (a) {
            var b = a.getDay();
            return [b > 0 && 6 > b, ""]
        },
        iso8601Week: function (a) {
            var b, c = new Date(a.getTime());
            return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
        },
        parseDate: function (c, d, e) {
            if (null == c || null == d)throw"Invalid arguments";
            if (d = "object" == typeof d ? "" + d : d + "", "" === d)return null;
            var f, g, h, i, j = 0, k = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff, l = "string" != typeof k ? k : (new Date).getFullYear() % 100 + parseInt(k, 10), m = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort, n = (e ? e.dayNames : null) || this._defaults.dayNames, o = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort, p = (e ? e.monthNames : null) || this._defaults.monthNames, q = -1, r = -1, s = -1, t = -1, u = !1, v = function (a) {
                var b = c.length > f + 1 && c.charAt(f + 1) === a;
                return b && f++, b
            }, w = function (a) {
                var b = v(a), c = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2, e = RegExp("^\\d{1," + c + "}"), f = d.substring(j).match(e);
                if (!f)throw"Missing number at position " + j;
                return j += f[0].length, parseInt(f[0], 10)
            }, x = function (c, e, f) {
                var g = -1, h = a.map(v(c) ? f : e, function (a, b) {
                    return [[b, a]]
                }).sort(function (a, b) {
                    return -(a[1].length - b[1].length)
                });
                if (a.each(h, function (a, c) {
                        var e = c[1];
                        return d.substr(j, e.length).toLowerCase() === e.toLowerCase() ? (g = c[0], j += e.length, !1) : b
                    }), -1 !== g)return g + 1;
                throw"Unknown name at position " + j
            }, y = function () {
                if (d.charAt(j) !== c.charAt(f))throw"Unexpected literal at position " + j;
                j++
            };
            for (f = 0; c.length > f; f++)if (u)"'" !== c.charAt(f) || v("'") ? y() : u = !1; else switch (c.charAt(f)) {
                case"d":
                    s = w("d");
                    break;
                case"D":
                    x("D", m, n);
                    break;
                case"o":
                    t = w("o");
                    break;
                case"m":
                    r = w("m");
                    break;
                case"M":
                    r = x("M", o, p);
                    break;
                case"y":
                    q = w("y");
                    break;
                case"@":
                    i = new Date(w("@")), q = i.getFullYear(), r = i.getMonth() + 1, s = i.getDate();
                    break;
                case"!":
                    i = new Date((w("!") - this._ticksTo1970) / 1e4), q = i.getFullYear(), r = i.getMonth() + 1, s = i.getDate();
                    break;
                case"'":
                    v("'") ? y() : u = !0;
                    break;
                default:
                    y()
            }
            if (d.length > j && (h = d.substr(j), !/^\s+/.test(h)))throw"Extra/unparsed characters found in date: " + h;
            if (-1 === q ? q = (new Date).getFullYear() : 100 > q && (q += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= q ? 0 : -100)), t > -1)for (r = 1, s = t; g = this._getDaysInMonth(q, r - 1), !(g >= s);)r++, s -= g;
            if (i = this._daylightSavingAdjust(new Date(q, r - 1, s)), i.getFullYear() !== q || i.getMonth() + 1 !== r || i.getDate() !== s)throw"Invalid date";
            return i
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (a, b, c) {
            if (!b)return "";
            var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, h = (c ? c.monthNames : null) || this._defaults.monthNames, i = function (b) {
                var c = a.length > d + 1 && a.charAt(d + 1) === b;
                return c && d++, c
            }, j = function (a, b, c) {
                var d = "" + b;
                if (i(a))for (; c > d.length;)d = "0" + d;
                return d
            }, k = function (a, b, c, d) {
                return i(a) ? d[b] : c[b]
            }, l = "", m = !1;
            if (b)for (d = 0; a.length > d; d++)if (m)"'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1; else switch (a.charAt(d)) {
                case"d":
                    l += j("d", b.getDate(), 2);
                    break;
                case"D":
                    l += k("D", b.getDay(), e, f);
                    break;
                case"o":
                    l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    l += j("m", b.getMonth() + 1, 2);
                    break;
                case"M":
                    l += k("M", b.getMonth(), g, h);
                    break;
                case"y":
                    l += i("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
                    break;
                case"@":
                    l += b.getTime();
                    break;
                case"!":
                    l += 1e4 * b.getTime() + this._ticksTo1970;
                    break;
                case"'":
                    i("'") ? l += "'" : m = !0;
                    break;
                default:
                    l += a.charAt(d)
            }
            return l
        },
        _possibleChars: function (a) {
            var b, c = "", d = !1, e = function (c) {
                var d = a.length > b + 1 && a.charAt(b + 1) === c;
                return d && b++, d
            };
            for (b = 0; a.length > b; b++)if (d)"'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1; else switch (a.charAt(b)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    c += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    e("'") ? c += "'" : d = !0;
                    break;
                default:
                    c += a.charAt(b)
            }
            return c
        },
        _get: function (a, c) {
            return a.settings[c] !== b ? a.settings[c] : this._defaults[c]
        },
        _setDateFromField: function (a, b) {
            if (a.input.val() !== a.lastVal) {
                var c = this._get(a, "dateFormat"), d = a.lastVal = a.input ? a.input.val() : null, e = this._getDefaultDate(a), f = e, g = this._getFormatConfig(a);
                try {
                    f = this.parseDate(c, d, g) || e
                } catch (h) {
                    d = b ? "" : d
                }
                a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function (a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function (b, c, d) {
            var e = function (a) {
                var b = new Date;
                return b.setDate(b.getDate() + a), b
            }, f = function (c) {
                try {
                    return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
                } catch (d) {
                }
                for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j;) {
                    switch (j[2] || "d") {
                        case"d":
                        case"D":
                            h += parseInt(j[1], 10);
                            break;
                        case"w":
                        case"W":
                            h += 7 * parseInt(j[1], 10);
                            break;
                        case"m":
                        case"M":
                            g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                            break;
                        case"y":
                        case"Y":
                            f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g))
                    }
                    j = i.exec(c)
                }
                return new Date(f, g, h)
            }, g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
            return g = g && "Invalid Date" == "" + g ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g)
        },
        _daylightSavingAdjust: function (a) {
            return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
        },
        _setDate: function (a, b, c) {
            var d = !b, e = a.selectedMonth, f = a.selectedYear, g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
            a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
        },
        _getDate: function (a) {
            var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return b
        },
        _attachHandlers: function (b) {
            var c = this._get(b, "stepMonths"), d = "#" + b.id.replace(/\\\\/g, "\\");
            b.dpDiv.find("[data-handler]").map(function () {
                var b = {
                    prev: function () {
                        a.datepicker._adjustDate(d, -c, "M")
                    }, next: function () {
                        a.datepicker._adjustDate(d, +c, "M")
                    }, hide: function () {
                        a.datepicker._hideDatepicker()
                    }, today: function () {
                        a.datepicker._gotoToday(d)
                    }, selectDay: function () {
                        return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    }, selectMonth: function () {
                        return a.datepicker._selectMonthYear(d, this, "M"), !1
                    }, selectYear: function () {
                        return a.datepicker._selectMonthYear(d, this, "Y"), !1
                    }
                };
                a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date, P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())), Q = this._get(a, "isRTL"), R = this._get(a, "showButtonPanel"), S = this._get(a, "hideIfNoPrevNext"), T = this._get(a, "navigationAsDateFormat"), U = this._getNumberOfMonths(a), V = this._get(a, "showCurrentAtPos"), W = this._get(a, "stepMonths"), X = 1 !== U[0] || 1 !== U[1], Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)), Z = this._getMinMaxDate(a, "min"), $ = this._getMinMaxDate(a, "max"), _ = a.drawMonth - V, aa = a.drawYear;
            if (0 > _ && (_ += 12, aa--), $)for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;)_--, 0 > _ && (_ = 11, aa--);
            for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; U[0] > w; w++) {
                for (x = "", this.maxRows = 4, y = 0; U[1] > y; y++) {
                    if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
                        if (B += "<div class='ui-datepicker-group", U[1] > 1)switch (y) {
                            case 0:
                                B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                                break;
                            case U[1] - 1:
                                B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                                break;
                            default:
                                B += " ui-datepicker-group-middle", A = ""
                        }
                        B += "'>"
                    }
                    for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++)D = (v + k) % 7, C += "<th" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
                    for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; H > J; J++) {
                        for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; 7 > v; v++)L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                        B += K + "</tr>"
                    }
                    _++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
                }
                u += x
            }
            return u += j, a._keyEvent = !1, u
        },
        _generateMonthYearHeader: function (a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"), r = this._get(a, "changeYear"), s = this._get(a, "showMonthAfterYear"), t = "<div class='ui-datepicker-title'>", u = "";
            if (f || !q)u += "<span class='ui-datepicker-month'>" + g[b] + "</span>"; else {
                for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)(!i || k >= d.getMonth()) && (!j || e.getMonth() >= k) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                u += "</select>"
            }
            if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)if (a.yearshtml = "", f || !r)t += "<span class='ui-datepicker-year'>" + c + "</span>"; else {
                for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function (a) {
                    var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                    return isNaN(b) ? m : b
                }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++)a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
            }
            return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
        },
        _adjustInstDate: function (a, b, c) {
            var d = a.drawYear + ("Y" === c ? b : 0), e = a.drawMonth + ("M" === c ? b : 0), f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0), g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
            a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" === c || "Y" === c) && this._notifyChange(a)
        },
        _restrictMinMax: function (a, b) {
            var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max"), e = c && c > b ? c : b;
            return d && e > d ? d : e
        },
        _notifyChange: function (a) {
            var b = this._get(a, "onChangeMonthYear");
            b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function (a) {
            var b = this._get(a, "numberOfMonths");
            return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
        },
        _getMinMaxDate: function (a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null)
        },
        _getDaysInMonth: function (a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
        },
        _getFirstDayOfMonth: function (a, b) {
            return new Date(a, b, 1).getDay()
        },
        _canAdjustMonth: function (a, b, c, d) {
            var e = this._getNumberOfMonths(a), f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
            return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
        },
        _isInRange: function (a, b) {
            var c, d, e = this._getMinMaxDate(a, "min"), f = this._getMinMaxDate(a, "max"), g = null, h = null, i = this._get(a, "yearRange");
            return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || h >= b.getFullYear())
        },
        _getFormatConfig: function (a) {
            var b = this._get(a, "shortYearCutoff");
            return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function (a, b, c, d) {
            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
        }
    }), a.fn.datepicker = function (b) {
        if (!this.length)return this;
        a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
        var c = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function () {
            "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
        }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
    }, a.datepicker = new c, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.10.3"
}(jQuery), function (a) {
    var b = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }, c = {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0};
    a.widget("ui.dialog", {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function (b) {
                    var c = a(this).css(b).offset().top;
                    0 > c && a(this).css("top", b.top - c)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && a.fn.draggable && this._makeDraggable(), this.options.resizable && a.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var b = this.options.appendTo;
            return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0)
        },
        _destroy: function () {
            var a, b = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: a.noop,
        enable: a.noop,
        close: function (b) {
            var c = this;
            this._isOpen && this._trigger("beforeClose", b) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || a(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function () {
                c._trigger("close", b)
                if(c.options.onClose){
                    c.options.onClose();
                }
            }))
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (a, b) {
            var c = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return c && !b && this._trigger("focus", a), c
        },
        open: function () {
            var b = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = a(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
                b._focusTabbable(), b._trigger("focus")
            }), void this._trigger("open"))
        },
        _focusTabbable: function () {
            var a = this.element.find("[autofocus]");
            a.length || (a = this.element.find(":tabbable")), a.length || (a = this.uiDialogButtonPane.find(":tabbable")), a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")), a.length || (a = this.uiDialog), a.eq(0).focus()
        },
        _keepFocus: function (b) {
            function c() {
                var b = this.document[0].activeElement, c = this.uiDialog[0] === b || a.contains(this.uiDialog[0], b);
                c || this._focusTabbable()
            }

            b.preventDefault(), c.call(this), this._delay(c)
        },
        _createWrapper: function () {
            this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function (b) {
                    if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE)return b.preventDefault(), void this.close(b);
                    if (b.keyCode === a.ui.keyCode.TAB) {
                        var c = this.uiDialog.find(":tabbable"), d = c.filter(":first"), e = c.filter(":last");
                        b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (e.focus(1), b.preventDefault()) : (d.focus(1), b.preventDefault())
                    }
                }, mousedown: function (a) {
                    this._moveToTop(a) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        },
        _createTitlebar: function () {
            var b;
            this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function (b) {
                    a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = a("<button></button>").button({
                label: this.options.closeText,
                icons: {primary: "ui-icon-closethick"},
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function (a) {
                    a.preventDefault(), this.close(a)
                }
            }), b = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(b), this.uiDialog.attr({"aria-labelledby": b.attr("id")})
        },
        _title: function (a) {
            this.options.title || a.html("&#160;"), a.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function () {
            var b = this, c = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (a.each(c, function (c, d) {
                var e, f;
                d = a.isFunction(d) ? {
                    click: d,
                    text: c
                } : d, d = a.extend({type: "button"}, d), e = d.click, d.click = function () {
                    e.apply(b.element[0], arguments)
                }, f = {
                    icons: d.icons,
                    text: d.showText
                }, delete d.icons, delete d.showText, a("<button></button>", d).button(f).appendTo(b.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function () {
            function b(a) {
                return {position: a.position, offset: a.offset}
            }

            var c = this, d = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (d, e) {
                    a(this).addClass("ui-dialog-dragging"), c._blockFrames(), c._trigger("dragStart", d, b(e))
                },
                drag: function (a, d) {
                    c._trigger("drag", a, b(d))
                },
                stop: function (e, f) {
                    d.position = [f.position.left - c.document.scrollLeft(), f.position.top - c.document.scrollTop()], a(this).removeClass("ui-dialog-dragging"), c._unblockFrames(), c._trigger("dragStop", e, b(f))
                }
            })
        },
        _makeResizable: function () {
            function b(a) {
                return {
                    originalPosition: a.originalPosition,
                    originalSize: a.originalSize,
                    position: a.position,
                    size: a.size
                }
            }

            var c = this, d = this.options, e = d.resizable, f = this.uiDialog.css("position"), g = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: d.maxWidth,
                maxHeight: d.maxHeight,
                minWidth: d.minWidth,
                minHeight: this._minHeight(),
                handles: g,
                start: function (d, e) {
                    a(this).addClass("ui-dialog-resizing"), c._blockFrames(), c._trigger("resizeStart", d, b(e))
                },
                resize: function (a, d) {
                    c._trigger("resize", a, b(d))
                },
                stop: function (e, f) {
                    d.height = a(this).height(), d.width = a(this).width(), a(this).removeClass("ui-dialog-resizing"), c._unblockFrames(), c._trigger("resizeStop", e, b(f))
                }
            }).css("position", f)
        },
        _minHeight: function () {
            var a = this.options;
            return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
        },
        _position: function () {
            var a = this.uiDialog.is(":visible");
            a || this.uiDialog.show(), this.uiDialog.position(this.options.position), a || this.uiDialog.hide()
        },
        _setOptions: function (d) {
            var e = this, f = !1, g = {};
            a.each(d, function (a, d) {
                e._setOption(a, d), a in b && (f = !0), a in c && (g[a] = d)
            }), f && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", g)
        },
        _setOption: function (a, b) {
            var c, d, e = this.uiDialog;
            "dialogClass" === a && e.removeClass(this.options.dialogClass).addClass(b), "disabled" !== a && (this._super(a, b), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({label: "" + b}), "draggable" === a && (c = e.is(":data(ui-draggable)"), c && !b && e.draggable("destroy"), !c && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && (d = e.is(":data(ui-resizable)"), d && !b && e.resizable("destroy"), d && "string" == typeof b && e.resizable("option", "handles", b), d || b === !1 || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var a, b, c, d = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), d.minWidth > d.width && (d.width = d.minWidth), a = this.uiDialog.css({
                height: "auto",
                width: d.width
            }).outerHeight(), b = Math.max(0, d.minHeight - a), c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none", "auto" === d.height ? this.element.css({
                minHeight: b,
                maxHeight: c,
                height: "auto"
            }) : this.element.height(Math.max(0, d.height - a)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var b = a(this);
                return a("<div>").css({
                    position: "absolute",
                    width: b.outerWidth(),
                    height: b.outerHeight()
                }).appendTo(b.parent()).offset(b.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (b) {
            return a(b.target).closest(".ui-dialog").length ? !0 : !!a(b.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var b = this, c = this.widgetFullName;
                a.ui.dialog.overlayInstances || this._delay(function () {
                    a.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (d) {
                        b._allowInteraction(d) || (d.preventDefault(), a(".ui-dialog:visible:last .ui-dialog-content").data(c)._focusTabbable())
                    })
                }), this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {mousedown: "_keepFocus"}), a.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function () {
            this.options.modal && this.overlay && (a.ui.dialog.overlayInstances--, a.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), a.ui.dialog.overlayInstances = 0, a.uiBackCompat !== !1 && a.widget("ui.dialog", a.ui.dialog, {
        _position: function () {
            var b, c = this.options.position, d = [], e = [0, 0];
            c ? (("string" == typeof c || "object" == typeof c && "0"in c) && (d = c.split ? c.split(" ") : [c[0], c[1]], 1 === d.length && (d[1] = d[0]), a.each(["left", "top"], function (a, b) {
                +d[a] === d[a] && (e[a] = d[a], d[a] = b)
            }), c = {
                my: d[0] + (0 > e[0] ? e[0] : "+" + e[0]) + " " + d[1] + (0 > e[1] ? e[1] : "+" + e[1]),
                at: d.join(" ")
            }), c = a.extend({}, a.ui.dialog.prototype.options.position, c)) : c = a.ui.dialog.prototype.options.position, b = this.uiDialog.is(":visible"), b || this.uiDialog.show(), this.uiDialog.position(c), b || this.uiDialog.hide()
        }
    })
}(jQuery), function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i)return i(g, !0);
                if (f)return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {exports: {}};
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)e(d[g]);
    return e
}({
    1: [function (a, b, c) {
        function d(a, b, c) {
        }

        function e(a, b, c) {
        }

        function f(a, b, c) {
        }

        function g(a, b, c) {
        }

        function h(a) {
            return a.replace(y, "&lt;").replace(z, "&gt;")
        }

        function i(a, b, c, d) {
            if (d = d || x, c = o(c), "href" === b || "src" === b) {
                if (c = v.trim(c), "#" === c)return "#";
                if ("http://" !== c.substr(0, 7) && "https://" !== c.substr(0, 8) && "mailto:" !== c.substr(0, 7) && "/" !== c[0])return ""
            } else if ("background" === b) {
                if (F.lastIndex = 0, F.test(c))return ""
            } else if ("style" === b) {
                if (G.lastIndex = 0, G.test(c))return "";
                if (H.lastIndex = 0, H.test(c) && (F.lastIndex = 0, F.test(c)))return "";
                c = d.process(c)
            }
            return c = p(c)
        }

        function j(a) {
            return a.replace(A, "&quot;")
        }

        function k(a) {
            return a.replace(B, '"')
        }

        function l(a) {
            return a.replace(C, function (a, b) {
                return "x" === b[0] || "X" === b[0] ? String.fromCharCode(parseInt(b.substr(1), 16)) : String.fromCharCode(parseInt(b, 10))
            })
        }

        function m(a) {
            return a.replace(D, ":").replace(E, " ")
        }

        function n(a) {
            for (var b = "", c = 0, d = a.length; d > c; c++)b += a.charCodeAt(c) < 32 ? " " : a.charAt(c);
            return v.trim(b)
        }

        function o(a) {
            return a = k(a), a = l(a), a = m(a), a = n(a)
        }

        function p(a) {
            return a = j(a), a = h(a)
        }

        function q() {
            return ""
        }

        function r(a, b) {
            function c(b) {
                return d ? !0 : -1 !== v.indexOf(a, b)
            }

            "function" != typeof b && (b = function () {
            });
            var d = !Array.isArray(a), e = [], f = !1;
            return {
                onIgnoreTag: function (a, d, g) {
                    if (c(a)) {
                        if (g.isClosing) {
                            var h = "[/removed]", i = g.position + h.length;
                            return e.push([f !== !1 ? f : g.position, i]), f = !1, h
                        }
                        return f || (f = g.position), "[removed]"
                    }
                    return b(a, d, g)
                }, remove: function (a) {
                    var b = "", c = 0;
                    return v.forEach(e, function (d) {
                        b += a.slice(c, d[0]), c = d[1]
                    }), b += a.slice(c)
                }
            }
        }

        function s(a) {
            return a.replace(I, "")
        }

        function t(a) {
            var b = a.split("");
            return b = b.filter(function (a) {
                var b = a.charCodeAt(0);
                return 127 === b ? !1 : 31 >= b ? 10 === b || 13 === b ? !0 : !1 : !0
            }), b.join("")
        }

        var u = a("cssfilter").FilterCSS, v = a("./util"), w = {
            a: ["target", "href", "title"],
            abbr: ["title"],
            address: [],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: ["autoplay", "controls", "loop", "preload", "src"],
            b: [],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite"],
            br: [],
            caption: [],
            center: [],
            cite: [],
            code: [],
            col: ["align", "valign", "span", "width"],
            colgroup: ["align", "valign", "span", "width"],
            dd: [],
            del: ["datetime"],
            details: ["open"],
            div: [],
            dl: [],
            dt: [],
            em: [],
            font: ["color", "size", "face"],
            footer: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            header: [],
            hr: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            ins: ["datetime"],
            li: [],
            mark: [],
            nav: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            section: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            table: ["width", "border", "align", "valign"],
            tbody: ["align", "valign"],
            td: ["width", "colspan", "align", "valign"],
            tfoot: ["align", "valign"],
            th: ["width", "colspan", "align", "valign"],
            thead: ["align", "valign"],
            tr: ["rowspan", "align", "valign"],
            tt: [],
            u: [],
            ul: [],
            video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
        }, x = new u, y = /</g, z = />/g, A = /"/g, B = /&quot;/g, C = /&#([a-zA-Z0-9]*);?/gim, D = /&colon;?/gim, E = /&newline;?/gim, F = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi, G = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, H = /u\s*r\s*l\s*\(.*/gi, I = /<!--[\s\S]*?-->/g;
        c.whiteList = w, c.onTag = d, c.onIgnoreTag = e, c.onTagAttr = f, c.onIgnoreTagAttr = g, c.safeAttrValue = i, c.escapeHtml = h, c.escapeQuote = j, c.unescapeQuote = k, c.escapeHtmlEntities = l, c.escapeDangerHtml5Entities = m, c.clearNonPrintableCharacter = n, c.friendlyAttrValue = o, c.escapeAttrValue = p, c.onIgnoreTagStripAll = q, c.StripTagBody = r, c.stripCommentTag = s, c.stripBlankChar = t, c.cssFilter = x
    }, {"./util": 4, cssfilter: 8}], 2: [function (a, b, c) {
        function d(a, b) {
            var c = new g(b);
            return c.process(a)
        }

        var e = a("./default"), f = a("./parser"), g = a("./xss");
        c = b.exports = d, c.FilterXSS = g;
        for (var h in e)c[h] = e[h];
        for (var h in f)c[h] = f[h];
        "function" == typeof define && define.amd && define(function () {
            return b.exports
        }), "undefined" != typeof window && (window.filterXSS = b.exports)
    }, {"./default": 1, "./parser": 3, "./xss": 5}], 3: [function (a, b, c) {
        function d(a) {
            var b = a.indexOf(" ");
            if (-1 === b)var c = a.slice(1, -1); else var c = a.slice(1, b + 1);
            return c = l.trim(c).toLowerCase(), "/" === c.slice(0, 1) && (c = c.slice(1)), "/" === c.slice(-1) && (c = c.slice(0, -1)), c
        }

        function e(a) {
            return "</" === a.slice(0, 2)
        }

        function f(a, b, c) {
            "user strict";
            var f = "", g = 0, h = !1, i = !1, j = 0, k = a.length, l = "", m = "";
            for (j = 0; k > j; j++) {
                var n = a.charAt(j);
                if (h === !1) {
                    if ("<" === n) {
                        h = j;
                        continue
                    }
                } else if (i === !1) {
                    if ("<" === n) {
                        f += c(a.slice(g, j)), h = j, g = j;
                        continue
                    }
                    if (">" === n) {
                        f += c(a.slice(g, h)), l = a.slice(h, j + 1), m = d(l), f += b(h, f.length, m, l, e(l)), g = j + 1, h = !1;
                        continue
                    }
                    if (('"' === n || "'" === n) && "=" === a.charAt(j - 1)) {
                        i = n;
                        continue
                    }
                } else if (n === i) {
                    i = !1;
                    continue
                }
            }
            return g < a.length && (f += c(a.substr(g))), f
        }

        function g(a, b) {
            "user strict";
            function c(a, c) {
                if (a = l.trim(a), a = a.replace(m, "").toLowerCase(), !(a.length < 1)) {
                    var d = b(a, c || "");
                    d && e.push(d)
                }
            }

            for (var d = 0, e = [], f = !1, g = a.length, j = 0; g > j; j++) {
                var n, o, p = a.charAt(j);
                if (f !== !1 || "=" !== p)if (f === !1 || j !== d || '"' !== p && "'" !== p || "=" !== a.charAt(j - 1))if (" " !== p); else {
                    if (f === !1) {
                        if (o = h(a, j), -1 === o) {
                            n = l.trim(a.slice(d, j)), c(n), f = !1, d = j + 1;
                            continue
                        }
                        j = o - 1;
                        continue
                    }
                    if (o = i(a, j - 1), -1 === o) {
                        n = l.trim(a.slice(d, j)), n = k(n), c(f, n), f = !1, d = j + 1;
                        continue
                    }
                } else {
                    if (o = a.indexOf(p, j + 1), -1 === o)break;
                    n = l.trim(a.slice(d + 1, o)), c(f, n), f = !1, j = o, d = j + 1
                } else f = a.slice(d, j), d = j + 1
            }
            return d < a.length && (f === !1 ? c(a.slice(d)) : c(f, k(l.trim(a.slice(d))))), l.trim(e.join(" "))
        }

        function h(a, b) {
            for (; b < a.length; b++) {
                var c = a[b];
                if (" " !== c)return "=" === c ? b : -1
            }
        }

        function i(a, b) {
            for (; b > 0; b--) {
                var c = a[b];
                if (" " !== c)return "=" === c ? b : -1
            }
        }

        function j(a) {
            return '"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1] ? !0 : !1
        }

        function k(a) {
            return j(a) ? a.substr(1, a.length - 2) : a
        }

        var l = a("./util"), m = /[^a-zA-Z0-9_:\.\-]/gim;
        c.parseTag = f, c.parseAttr = g
    }, {"./util": 4}], 4: [function (a, b, c) {
        b.exports = {
            indexOf: function (a, b) {
                var c, d;
                if (Array.prototype.indexOf)return a.indexOf(b);
                for (c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
                return -1
            }, forEach: function (a, b, c) {
                var d, e;
                if (Array.prototype.forEach)return a.forEach(b, c);
                for (d = 0, e = a.length; e > d; d++)b.call(c, a[d], d, a)
            }, trim: function (a) {
                return String.prototype.trim ? a.trim() : a.replace(/(^\s*)|(\s*$)/g, "")
            }
        }
    }, {}], 5: [function (a, b, c) {
        function d(a) {
            return void 0 === a || null === a
        }

        function e(a) {
            var b = a.indexOf(" ");
            if (-1 === b)return {html: "", closing: "/" === a[a.length - 2]};
            a = l.trim(a.slice(b + 1, -1));
            var c = "/" === a[a.length - 1];
            return c && (a = l.trim(a.slice(0, -1))), {html: a, closing: c}
        }

        function f(a) {
            a = a || {}, a.stripIgnoreTag && (a.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), a.onIgnoreTag = h.onIgnoreTagStripAll), a.whiteList = a.whiteList || h.whiteList, a.onTag = a.onTag || h.onTag, a.onTagAttr = a.onTagAttr || h.onTagAttr, a.onIgnoreTag = a.onIgnoreTag || h.onIgnoreTag, a.onIgnoreTagAttr = a.onIgnoreTagAttr || h.onIgnoreTagAttr, a.safeAttrValue = a.safeAttrValue || h.safeAttrValue, a.escapeHtml = a.escapeHtml || h.escapeHtml, a.css = a.css || {}, this.options = a, this.cssFilter = new g(a.css)
        }

        var g = a("cssfilter").FilterCSS, h = a("./default"), i = a("./parser"), j = i.parseTag, k = i.parseAttr, l = a("./util");
        f.prototype.process = function (a) {
            if (a = a || "", a = a.toString(), !a)return "";
            var b = this, c = b.options, f = c.whiteList, g = c.onTag, i = c.onIgnoreTag, m = c.onTagAttr, n = c.onIgnoreTagAttr, o = c.safeAttrValue, p = c.escapeHtml, q = b.cssFilter;
            if (c.stripBlankChar && (a = h.stripBlankChar(a)), c.allowCommentTag || (a = h.stripCommentTag(a)), c.stripIgnoreTagBody) {
                var r = h.StripTagBody(c.stripIgnoreTagBody, i);
                i = r.onIgnoreTag
            } else r = !1;
            var s = j(a, function (a, b, c, h, j) {
                var r = {sourcePosition: a, position: b, isClosing: j, isWhite: c in f}, s = g(c, h, r);
                if (!d(s))return s;
                if (r.isWhite) {
                    if (r.isClosing)return "</" + c + ">";
                    var t = e(h), u = f[c], v = k(t.html, function (a, b) {
                        var e = -1 !== l.indexOf(u, a), f = m(c, a, b, e);
                        if (!d(f))return f;
                        if (e)return b = o(c, a, b, q), b ? a + '="' + b + '"' : a;
                        var f = n(c, a, b, e);
                        return d(f) ? void 0 : f
                    }), h = "<" + c;
                    return v && (h += " " + v), t.closing && (h += " /"), h += ">"
                }
                var s = i(c, h, r);
                return d(s) ? p(h) : s
            }, p);
            return r && (s = r.remove(s)), s
        }, b.exports = f
    }, {"./default": 1, "./parser": 3, "./util": 4, cssfilter: 8}], 6: [function (a, b, c) {
        function d(a) {
            return void 0 === a || null === a
        }

        function e(a) {
            a = a || {}, a.whiteList = a.whiteList || f.whiteList, a.onAttr = a.onAttr || f.onAttr, a.onIgnoreAttr = a.onIgnoreAttr || f.onIgnoreAttr, this.options = a
        }

        var f = a("./default"), g = a("./parser");
        a("./util");
        e.prototype.process = function (a) {
            if (a = a || "", a = a.toString(), !a)return "";
            var b = this, c = b.options, e = c.whiteList, f = c.onAttr, h = c.onIgnoreAttr, i = g(a, function (a, b, c, g, i) {
                var j = e[c], k = !1;
                j === !0 ? k = j : "function" == typeof j ? k = j(g) : j instanceof RegExp && (k = j.test(g)), k !== !0 && (k = !1);
                var l = {position: b, sourcePosition: a, source: i, isWhite: k};
                if (k) {
                    var m = f(c, g, l);
                    return d(m) ? c + ":" + g : m
                }
                var m = h(c, g, l);
                return d(m) ? void 0 : m
            });
            return i
        }, b.exports = e
    }, {"./default": 7, "./parser": 9, "./util": 10}], 7: [function (a, b, c) {
        function d(a, b, c) {
        }

        function e(a, b, c) {
        }

        var f = {};
        f["align-content"] = !1, f["align-items"] = !1, f["align-self"] = !1, f["alignment-adjust"] = !1, f["alignment-baseline"] = !1, f.all = !1, f["anchor-point"] = !1, f.animation = !1, f["animation-delay"] = !1, f["animation-direction"] = !1, f["animation-duration"] = !1, f["animation-fill-mode"] = !1, f["animation-iteration-count"] = !1, f["animation-name"] = !1, f["animation-play-state"] = !1, f["animation-timing-function"] = !1, f.azimuth = !1, f["backface-visibility"] = !1, f.background = !0, f["background-attachment"] = !0, f["background-clip"] = !0, f["background-color"] = !0, f["background-image"] = !0, f["background-origin"] = !0, f["background-position"] = !0, f["background-repeat"] = !0, f["background-size"] = !0, f["baseline-shift"] = !1, f.binding = !1, f.bleed = !1, f["bookmark-label"] = !1, f["bookmark-level"] = !1, f["bookmark-state"] = !1, f.border = !0, f["border-bottom"] = !0, f["border-bottom-color"] = !0, f["border-bottom-left-radius"] = !0, f["border-bottom-right-radius"] = !0, f["border-bottom-style"] = !0, f["border-bottom-width"] = !0, f["border-collapse"] = !0, f["border-color"] = !0, f["border-image"] = !0, f["border-image-outset"] = !0, f["border-image-repeat"] = !0, f["border-image-slice"] = !0, f["border-image-source"] = !0, f["border-image-width"] = !0, f["border-left"] = !0, f["border-left-color"] = !0, f["border-left-style"] = !0, f["border-left-width"] = !0, f["border-radius"] = !0, f["border-right"] = !0, f["border-right-color"] = !0, f["border-right-style"] = !0, f["border-right-width"] = !0, f["border-spacing"] = !0, f["border-style"] = !0, f["border-top"] = !0, f["border-top-color"] = !0, f["border-top-left-radius"] = !0, f["border-top-right-radius"] = !0, f["border-top-style"] = !0, f["border-top-width"] = !0, f["border-width"] = !0, f.bottom = !1, f["box-decoration-break"] = !0, f["box-shadow"] = !0, f["box-sizing"] = !0, f["box-snap"] = !0, f["box-suppress"] = !0, f["break-after"] = !0, f["break-before"] = !0, f["break-inside"] = !0, f["caption-side"] = !1, f.chains = !1, f.clear = !0, f.clip = !1, f["clip-path"] = !1, f["clip-rule"] = !1, f.color = !0, f["color-interpolation-filters"] = !0, f["column-count"] = !1, f["column-fill"] = !1, f["column-gap"] = !1, f["column-rule"] = !1, f["column-rule-color"] = !1, f["column-rule-style"] = !1, f["column-rule-width"] = !1, f["column-span"] = !1, f["column-width"] = !1, f.columns = !1, f.contain = !1, f.content = !1, f["counter-increment"] = !1, f["counter-reset"] = !1, f["counter-set"] = !1, f.crop = !1, f.cue = !1, f["cue-after"] = !1,f["cue-before"] = !1,f.cursor = !1,f.direction = !1,f.display = !0,f["display-inside"] = !0,f["display-list"] = !0,f["display-outside"] = !0,f["dominant-baseline"] = !1,f.elevation = !1,f["empty-cells"] = !1,f.filter = !1,f.flex = !1,f["flex-basis"] = !1,f["flex-direction"] = !1,f["flex-flow"] = !1,f["flex-grow"] = !1,f["flex-shrink"] = !1,f["flex-wrap"] = !1,f["float"] = !1,f["float-offset"] = !1,f["flood-color"] = !1,f["flood-opacity"] = !1,f["flow-from"] = !1,f["flow-into"] = !1,f.font = !0,f["font-family"] = !0,f["font-feature-settings"] = !0,f["font-kerning"] = !0,f["font-language-override"] = !0,f["font-size"] = !0,f["font-size-adjust"] = !0,f["font-stretch"] = !0,f["font-style"] = !0,f["font-synthesis"] = !0,f["font-variant"] = !0,f["font-variant-alternates"] = !0,f["font-variant-caps"] = !0,f["font-variant-east-asian"] = !0,f["font-variant-ligatures"] = !0,f["font-variant-numeric"] = !0,f["font-variant-position"] = !0,f["font-weight"] = !0,f.grid = !1,f["grid-area"] = !1,f["grid-auto-columns"] = !1,f["grid-auto-flow"] = !1,f["grid-auto-rows"] = !1,f["grid-column"] = !1,f["grid-column-end"] = !1,f["grid-column-start"] = !1,f["grid-row"] = !1,f["grid-row-end"] = !1,f["grid-row-start"] = !1,f["grid-template"] = !1,f["grid-template-areas"] = !1,f["grid-template-columns"] = !1,f["grid-template-rows"] = !1,f["hanging-punctuation"] = !1,f.height = !0,f.hyphens = !1,f.icon = !1,f["image-orientation"] = !1,f["image-resolution"] = !1,f["ime-mode"] = !1,f["initial-letters"] = !1,f["inline-box-align"] = !1,f["justify-content"] = !1,f["justify-items"] = !1,f["justify-self"] = !1,f.left = !1,f["letter-spacing"] = !0,f["lighting-color"] = !0,f["line-box-contain"] = !1,f["line-break"] = !1,f["line-grid"] = !1,f["line-height"] = !1,f["line-snap"] = !1,f["line-stacking"] = !1,f["line-stacking-ruby"] = !1,f["line-stacking-shift"] = !1,f["line-stacking-strategy"] = !1,f["list-style"] = !0,f["list-style-image"] = !0,f["list-style-position"] = !0,f["list-style-type"] = !0,f.margin = !0,f["margin-bottom"] = !0,f["margin-left"] = !0,f["margin-right"] = !0,f["margin-top"] = !0,f["marker-offset"] = !1,f["marker-side"] = !1,f.marks = !1,f.mask = !1,f["mask-box"] = !1,f["mask-box-outset"] = !1,f["mask-box-repeat"] = !1,f["mask-box-slice"] = !1,f["mask-box-source"] = !1,f["mask-box-width"] = !1,f["mask-clip"] = !1,f["mask-image"] = !1,f["mask-origin"] = !1,f["mask-position"] = !1,f["mask-repeat"] = !1,f["mask-size"] = !1,f["mask-source-type"] = !1,f["mask-type"] = !1,f["max-height"] = !0,f["max-lines"] = !1,f["max-width"] = !0,f["min-height"] = !0,f["min-width"] = !0,f["move-to"] = !1,f["nav-down"] = !1,f["nav-index"] = !1,f["nav-left"] = !1,f["nav-right"] = !1,f["nav-up"] = !1,f["object-fit"] = !1,f["object-position"] = !1,f.opacity = !1,f.order = !1,f.orphans = !1,f.outline = !1,f["outline-color"] = !1,f["outline-offset"] = !1,f["outline-style"] = !1,f["outline-width"] = !1,f.overflow = !1,f["overflow-wrap"] = !1,f["overflow-x"] = !1,f["overflow-y"] = !1,f.padding = !0,f["padding-bottom"] = !0,f["padding-left"] = !0,f["padding-right"] = !0,f["padding-top"] = !0,f.page = !1,f["page-break-after"] = !1,f["page-break-before"] = !1,f["page-break-inside"] = !1,f["page-policy"] = !1,f.pause = !1,f["pause-after"] = !1,f["pause-before"] = !1,f.perspective = !1,f["perspective-origin"] = !1,f.pitch = !1,f["pitch-range"] = !1,f["play-during"] = !1,f.position = !1,f["presentation-level"] = !1,f.quotes = !1,f["region-fragment"] = !1,f.resize = !1,f.rest = !1,f["rest-after"] = !1,f["rest-before"] = !1,f.richness = !1,f.right = !1,f.rotation = !1,f["rotation-point"] = !1,f["ruby-align"] = !1,f["ruby-merge"] = !1,f["ruby-position"] = !1,f["shape-image-threshold"] = !1,f["shape-outside"] = !1,f["shape-margin"] = !1,f.size = !1,f.speak = !1,f["speak-as"] = !1,f["speak-header"] = !1,f["speak-numeral"] = !1,f["speak-punctuation"] = !1,f["speech-rate"] = !1,f.stress = !1,f["string-set"] = !1,f["tab-size"] = !1,f["table-layout"] = !1,f["text-align"] = !0,f["text-align-last"] = !0,f["text-combine-upright"] = !0,f["text-decoration"] = !0,f["text-decoration-color"] = !0,f["text-decoration-line"] = !0,f["text-decoration-skip"] = !0,f["text-decoration-style"] = !0,f["text-emphasis"] = !0,f["text-emphasis-color"] = !0,f["text-emphasis-position"] = !0,f["text-emphasis-style"] = !0,f["text-height"] = !0,f["text-indent"] = !0,f["text-justify"] = !0,f["text-orientation"] = !0,f["text-overflow"] = !0,f["text-shadow"] = !0,f["text-space-collapse"] = !0,f["text-transform"] = !0,f["text-underline-position"] = !0,f["text-wrap"] = !0,f.top = !1,f.transform = !1,f["transform-origin"] = !1,f["transform-style"] = !1,f.transition = !1,f["transition-delay"] = !1,f["transition-duration"] = !1,f["transition-property"] = !1,f["transition-timing-function"] = !1,f["unicode-bidi"] = !1,f["vertical-align"] = !1,f.visibility = !1,f["voice-balance"] = !1,f["voice-duration"] = !1,f["voice-family"] = !1,f["voice-pitch"] = !1,f["voice-range"] = !1,f["voice-rate"] = !1,f["voice-stress"] = !1,f["voice-volume"] = !1,f.volume = !1,f["white-space"] = !1,f.widows = !1,f.width = !0,f["will-change"] = !1,f["word-break"] = !0,f["word-spacing"] = !0,f["word-wrap"] = !0,f["wrap-flow"] = !1,f["wrap-through"] = !1,f["writing-mode"] = !1,f["z-index"] = !1,c.whiteList = f,c.onAttr = d,c.onIgnoreAttr = e
    }, {}], 8: [function (a, b, c) {
        function d(a, b) {
            var c = new f(b);
            return c.process(a)
        }

        var e = a("./default"), f = a("./css");
        c = b.exports = d, c.FilterCSS = f;
        for (var g in e)c[g] = e[g];
        "function" == typeof define && define.amd && define(function () {
            return b.exports
        }), "undefined" != typeof window && (window.filterCSS = b.exports)
    }, {"./css": 6, "./default": 7}], 9: [function (a, b, c) {
        function d(a, b) {
            function c() {
                if (!f) {
                    var c = e.trim(a.slice(g, h)), d = c.indexOf(":");
                    if (-1 !== d) {
                        var j = e.trim(c.slice(0, d)), k = e.trim(c.slice(d + 1));
                        if (j) {
                            var l = b(g, i.length, j, k, c);
                            l && (i += l + "; ")
                        }
                    }
                }
                g = h + 1
            }

            a = e.trimRight(a), ";" !== a[a.length - 1] && (a += ";");
            for (var d = a.length, f = !1, g = 0, h = 0, i = ""; d > h; h++) {
                var j = a[h];
                if ("/" === j && "*" === a[h + 1]) {
                    var k = a.indexOf("*/", h + 2);
                    if (-1 === k)break;
                    h = k + 1, g = h + 1, f = !1
                } else"(" === j ? f = !0 : ")" === j ? f = !1 : ";" === j ? f || c() : "\n" === j && c()
            }
            return e.trim(i)
        }

        var e = a("./util");
        b.exports = d
    }, {"./util": 10}], 10: [function (a, b, c) {
        b.exports = {
            indexOf: function (a, b) {
                var c, d;
                if (Array.prototype.indexOf)return a.indexOf(b);
                for (c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
                return -1
            }, forEach: function (a, b, c) {
                var d, e;
                if (Array.prototype.forEach)return a.forEach(b, c);
                for (d = 0, e = a.length; e > d; d++)b.call(c, a[d], d, a)
            }, trim: function (a) {
                return String.prototype.trim ? a.trim() : a.replace(/(^\s*)|(\s*$)/g, "")
            }, trimRight: function (a) {
                return String.prototype.trimRight ? a.trimRight() : a.replace(/(\s*$)/g, "")
            }
        }
    }, {}]
}, {}, [2]), iapiConf = {
    loginServer: "login.greatfortune88.com",
    loginDomainRetryCount: "2",
    loginDomainRequestTimeout: "30",
    loginDomainRetryInterval: "1",
    casinoname: "greatfortune88",
    clientSkin: "greatfortune88",
    clientType: "casino",
    clientPlatform: "flash",
    clientVersion: "42",
    systemId: "423",
    serviceType: "GamePlay",
    redirectUrl: "/integration/integrationRedirect.html",
    useMessages: "1",
    clientUrl_casino: "http://cache.download.banner.greatfortune88.com/casinoclient.html",
    windowSizes: {0: "width=800,height=624", 1: "width=1024,height=768"},
    windowSize_casino: {"default": "0", bjl: "1"}
};
var iapiVersion = "13.2.22.0", iapiERR_OK = 0, iapiERR_NOK = -1, iapiERR_BLOCKED = -2, iapiCALLOUT_LOGIN = "Login", iapiCALLOUT_TEMPORARYTOKEN = "GetTemporaryAuthenticationToken", iapiCALLOUT_SESSIONVALIDATION = "ValidateLoginSession", iapiCALLOUT_MESSAGES = "GetWaitingMessages", iapiCALLOUT_SUBMITDIALOG = "SubmitDialog", iapiCALLOUT_FORGOTPASSWORD = "ForgotPassword", iapiCALLOUT_GETLOGGEDINPLAYER = "GetLoggedInPlayer", iapiCALLOUT_LOGOUT = "Logout", iapiEVENT_TIMER = 10, iapiUsername = null, iapiPassword = null, iapiRealMode = 1, iapiLanguageCode = null, iapiDivname = "iapidiv", iapiIframename = "iapiiframe", iapiRealCookieIframe = "iapirealcookieiframe", iapiFunCookieIframe = "iapifuncookieiframe", iapiGetLoggedInPlayerRequestIdReal = 1234567890, iapiGetLoggedInPlayerRequestIdFun = 9876543210, iapiClientParams = [], iapiWaitingMessagesId = 0, iapiCalloutFunctions = [], iapiRequestIds = [], iapiLoginSuccess = !1, iapiSessionValid = 0, iapiNextLogin = null, iapiLoginModeDownload = !1, iapiLoginModeFlash = !1, iapiFlashLoginClientType = null, iapiFlashLoginGameType = null, iapiMessagesSupported = !1, iapiMessagesAnswered = !1, iapiGWWaitingCalls = [], iapiGWTimer = 1, iapiGWId = (new Date).getTime() + Math.round(1e4 * Math.random()), iapiGWRedirectIframe = "gwredirect_" + iapiGWId, iapiGWMode = !1, iapiGWCreated = !1;
iapiConf.gwUrl && (iapiGWMode = !0);
var afterTranCore, getQueryString, isLogin, openWindow, resultHandle, showError, showPopUp, validBase;
afterTranCore = function () {

    var a, b, c, d, e, f;
    return e = function () {
        return true;/* iapiSetCallout("Login", function (a) {
            return console.log(a), a.errorCode ? dialog.info("PT游戏登录失败，请联系在线客服，错误信息:" + (a.playerMessage || a.errorText)) : $.cookie("pt_status", "true")
        }) , iapiLogin("IG99TEST50", "123456", 1, "zh-cn")*/
    }, b = function (b) {
        return this.each(function () {
            var c, d, e;
            return c = $(this), d = c.data("bs.button"), e = "object" == typeof b && b, d || c.data("bs.button", d = new a(this, e)), "toggle" === b ? d.toggle() : b ? d.setState(b) : void 0
        })
    }, d = void 0, $(".language,.page-header-language").hoverIntent(function () {
        return $(this).find(".language-list").show(), clearTimeout(d)
    }, function () {
        var a;
        return a = $(this), clearTimeout(d), d = setTimeout(function () {
            return a.find(".language-list").hide()
        }, 200)
    }), $(".language-list").mouseenter(function () {
        return clearTimeout(d)
    }).mouseleave(function () {
        return $(this).fadeOut(200)
    }), $(".header-login-con").keyup(function (a) {

    }), $(".header-login").click(function () {
        var a, b, c, d;
        b = $(".header-form"), d = b.find("[name=custCode]").val(), c = b.find("[name=passwd]").val(), a = b.find("[name=validateCode]").val();
        return 0 === d.length ? (dialog.info($.t("base:valid.1")), !1) : 0 === c.length ? (dialog.info($.t("base:valid.2")), !1) : 0 === a.length ? (dialog.info($.t("base:valid.3")), !1) : ($(this).commit($(".header-form"), "/login", function () {
            return $.cookie("pt_status", "false"), location.reload(),window.location.href="/";
        }, function (a) {
            return $.extend({}, a, {custCode: d, passwd: c})
        }, null, function () {
            return $(".header-code").trigger("click").prev().val("")
        }), !1)
    }), $(document).on("click", ".header-code", function () {
        return $(this).attr("src", "/validateCode?" + (new Date).getTime())
    }), $(".header-more-left").css("left", function () {
        return -($(window).width() - 980) / 2
    }), $(".header-more-right").css("right", function () {
        return -($(window).width() - 980) / 2
    }), c = void 0, $(document).on("mouseenter", ".header .link", function () {
        return clearTimeout(c), $(".header-block:visible").hide(), $(this).parent().find(".header-block").stop().fadeIn()
    }).on("mouseleave", ".header li", function () {
        var a;
        return a = $(this), c = setTimeout(function () {
            return a.parent().find(".header-block").stop().fadeOut()
        }, 200)
    }), $(document).on("mouseenter", ".header-block", function () {
        return clearTimeout(c), $(this).show()
    }).on("mouseleave", ".header-block", function () {
        return $(this).stop().fadeOut()
    }), $(document).on("click", ".browser-updatetips span", function () {
        return $(this).parents(".browser-updatetips").remove()
    }), $("#user_status1").text() ? "false" === $.cookie("pt_status") && e() : $.cookie("pt_status", "false"), $.validator.addMethod("chinese", function (a, b) {
        return this.optional(b) || /^[A-Za-z0-9\u4E00-\u9FA5]+$/.test(a)
    }, $.t("base:valid.4")), $.validator.addMethod("string", function (a, b) {
        return this.optional(b) || /^[A-Za-z0-9]+$/.test(a)
    }, $.t("base:valid.5")), $.validator.addMethod("zh", function (a, b) {
        return this.optional(b) || /^[A-Za-z\u4E00-\u9FA5]+$/.test(a)
    }, $.t("base:valid.6")), $.validator.addMethod("en", function (a, b) {
        return this.optional(b) || /^[A-Za-z]+$/.test(a)
    }, $.t("base:valid.7")), $.validator.addMethod("date", function (a, b) {
        return this.optional(b) || /^\d{4}-\d{2}-\d{2}$/.test(a)
    }, $.t("base:valid.8")), $.validator.addMethod("qq", function (a, b) {
        return this.optional(b) ||  /^[1-9]\d{5,12}$/.test(a)
    }, $.t("base:valid.9")), $.validator.addMethod("phone", function (a, b) {
        return this.optional(b) || /^\d{11,16}$/.test(a)
    }, $.t("base:valid.10")), $.validator.addMethod("cardno", function (a, b) {
        return this.optional(b) || /^\S{9,18}$/.test(a)
    }, $.t("base:valid.11")), $.validator.addMethod("zh_num", function (a, b) {
        return this.optional(b) || /^[A-Za-z0-9\u4E00-\u9FA5]+$/.test(a)
    }, $.t("base:valid.15")), $.validator.addMethod("point", function (a, b) {
        return this.optional(b) || /^(([1-9]\d{0,9})|0)(\.\d{1,2})?$/.test(a)
    }, $.t("base:valid.16")), $.validator.addMethod("num", function (a, b) {
        return this.optional(b) || /^[0-9]+$/.test(a)
    }, $.t("base:valid.14")), $.validator.addMethod("notEqual", function (a, b, c) {
        var d;
        return d = $(c), a !== d.val()
    },  $.t("base:valid.12")), $.fn.extend({
        form: function () {
            var a, b, c;
            b = this.serializeArray(), c = {};
            for (a in b)c[b[a].name] = filterXSS(b[a].value);
            return c
        }, commit: function (a, b, c, d, e, f) {
            var g, h;
            return a.valid() ? d && !d() ? !1 : (g = $(this), g.btn("loading"), h = a.form(), e && (h = e(h)), $.post(b, h).success(function (a) {
                return "200" === a.code ? c(a) : (showError(a.msg), f && f()), g.btn("reset")
            })) : void 0
        }, commitWithError: function (a, b, c, d) {
            var e, f;
            return a.valid() ? (e = $(this), e.btn("loading"), f = a.form(), $.post(b, f).success(function (a) {
                return "200" === a.code ? c(a) : (d && d(), showError(a.msg)), e.btn("reset")
            })) : void 0
        }
    }), a = function (b, c) {
        return this.$element = $(b), this.options = $.extend({}, a.DEFAULTS, c), this.isLoading = !1
    }, a.DEFAULTS = {loadingText: $.t("base:valid.13")}, a.prototype.setState = function (a) {
        var b, c, d, e;
        return c = "disabled", b = this.$element, e = b.is("input") ? "val" : "html", d = b.data(), a += "Text", null == d.resetText && b.data("resetText", b[e]()), setTimeout($.proxy(function () {
            return b[e](null == d[a] ? this.options[a] : d[a]), "loadingText" === a ? (this.isLoading = !0, b.addClass(c).attr(c, c)) : this.isLoading ? (this.isLoading = !1, b.removeClass(c).removeAttr(c)) : void 0
        }, this), 0)
    }, f = $.fn.button, $.fn.btn = b, $.fn.btn.Constructor = a, $.fn.btn.noConflict = function () {
        return $.fn.btn = f, this
    }, window.dialog = {
        openned: !1, close: function () {
            return $("#dialog").dialog("close").remove(), dialog.openned = !1
        }, _getHTML: function (a) {
            return a.join ? "<div class='msg'><p>" + a.join("</p><p>") + "</p></div>" : "<div class='msg'><p>" + a + "</p></div>"
        }, _show: function (a, b, c) {
            var d, e;
            return e = void 0, c.each ? (e = {}, c.each(function () {
                var a;
                return a = $(this).attr("href"), e[$(this).html()] = function () {
                    return window.location.href = a
                }
            })) : e = c, dialog.close(), d = $('<div id="dialog"></div>'), d.html('<div class="field-c">' + b + "</div>"), d.dialog({
                resizable: !1,
                modal: !0,
                buttons: e,
                title: a,
                dialogClass: "dialog",
                minWidth: 360,
                onClose: dialog.onClose,
                minHeight: 200
            }), dialog.openned = !0
        }, info: function (a, b,onClose) {
            var c;
            dialog.onClose = onClose;
            return c = {}, b ? c[$.t("base:button.ok")] = function () {
                return b(), dialog.close()
            } : c[$.t("base:button.ok")] = function () {
                return dialog.close()
            }, dialog._show($.t("base:button.info"), '<span class="icon true"></span>' + dialog._getHTML(a), c)
        }, error: function (a, b) {
            return null == b && (b = {}, b[$.t("base:button.ok")] = function () {
                return dialog.close()
            }), dialog._show($.t("base:button.error"), '<span class="icon error"></span>' + dialog._getHTML(a), b)
        }, custom: function (a, b, c) {
            return dialog._show(a, '<span class="icon confirm"></span>' + dialog._getHTML(b), c)
        }
    }, $("#user-multiple").val() ? dialog.info($("#user-multiple").val()) : void 0
}, showError = function (a) {
    var temp = "base:msg." + a;
    return dialog.error($.t(temp));
}, getQueryString = function (a) {
    var b, c;
    return c = new RegExp("(^|&)" + a + "=([^&]*)(&|$)"), b = window.location.search.substr(1).match(c), null != b ? unescape(b[2]) : null
}, resultHandle = function (a, b) {
    if(typeof a === 'string' && a.indexOf("text/javascript") != -1){
        a=a.replace('<script type="text/javascript" charset="utf-8">',"").replace("</script>","");
        eval(a);
    }
    return "200" !== a.code ? showError(a.msg) : b ? b(a) : void 0
}, openWindow = function (a, b, c, d, e, f) {
    var g, h, i, j, k, l;
    return k = a, i = b, l = c, g = d, h = "" === String(e) ? (window.screen.availWidth - 10 - c) / 2 : e, j = "" === String(f) ? (window.screen.availHeight - 40 - d) / 2 : f, window.open(k, i, "depended=yes,resizable=yes,width=" + l + ",height=" + g + ",left=" + h + ",top=" + j)
}, isLogin = function () {
    return $("#user_status").text() ? !0 : (dialog.info($.t("base:login_text")), !1)
}, showPopUp = function (a, b, c, d, e) {
    var f;
    $("#popup").remove(), f = $('<div id="popup"></div>'), f.html(a), f.css("width", c), f.find("iframe").css("width", c), f.dialog({
        height: d,
        width: c,
        resizable: !1,
        modal: !0,
        title: b,
        dialogClass: "popup",
        close: e
    })
    return f;
}, validBase = {
    debug: !0, success: function (a) {
        return a.addClass("success")
    }, unhighlight: function (a) {
        return $(a).parent().addClass("ok").removeClass("red"), $(a).parent().find("b").length ? void 0 : $(a).parent().append("<b></b>")
    }, highlight: function (a, b) {
        return $(a).parent().addClass("red").removeClass("ok").find("." + b).removeClass("success"), $(a).parent().find("b").length ? void 0 : $(a).parent().append("<b></b>")
    }, errorPlacement: function (a, b) {
        return a.appendTo(b.parent())
    }
};