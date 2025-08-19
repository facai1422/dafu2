!function () {
    var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    Math.uuid = function (e, r) {
        var i, a, o = t, s = [];
        if (r = r || o.length, e) for (i = 0; i < e; i++) s[i] = o[0 | Math.random() * r]; else for (s[8] = s[13] = s[18] = s[23] = "-", s[14] = "4", i = 0; i < 36; i++) s[i] || (a = 0 | 16 * Math.random(), s[i] = o[19 == i ? 3 & a | 8 : a]);
        return s.join("")
    }
}(), way.registerTransform("itemCountMultiply", function (t) {
    return Number(way.get("orderlist.itemcount") || 0) * Number(t || 0)
});
var formatBall = function (t, e) {
        var r = [], i = ["万", "千", "百", "十", "个"];
        return t && $.each(t, function (t, a) {
            1 == e && (a = i[a] || a), a && r.push(a)
        }), r.join(e ? "_" : " ")
    }, util_unique = function () {
        function t(t) {
            return t
        }

        function e(t) {
            return t.match(/./g).sort().join("")
        }

        function r(t) {
            return t.match(/.{2}/g).join(" ")
        }

        function i(t) {
            return t.match(/.{2}/g).sort().join(" ")
        }

        function a(t, e) {
            t.push(e)
        }

        function o(t, e) {
            e.charAt(0) == e.charAt(1) && e.charAt(0) == e.charAt(2) && e.charAt(1) == e.charAt(2) || t.push(e)
        }

        return function (s, n, c, l, u) {
            var m, d, y, f = [], p = {};
            for (m = 2 == c ? l ? i : r : l ? e : t, d = u ? o : a, console.time("util_unique.while.for"); y = n.exec(s);) {
                var w = y[0];
                p[w = m(w)] || (p[w] = 1, d(f, w))
            }
            return console.timeEnd("util_unique.while.for"), f
        }
    }(),
    arrzxhz = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 63, 69, 73, 75, 75, 73, 69, 63, 55, 45, 36, 28, 21, 15, 10, 6, 3, 1],
    arrzuxhz = [1, 2, 2, 4, 5, 6, 8, 10, 11, 13, 14, 14, 15, 15, 14, 14, 13, 11, 10, 8, 6, 5, 4, 2, 2, 1],
    arrzxhzex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    arrzuxhzex = [1, 1, 2, 2, 3, 3, 4, 4, 5, 4, 4, 3, 3, 2, 2, 1, 1],
    arrkuadusx = [10, 54, 96, 126, 144, 150, 144, 126, 96, 54], arrkuaduex = [10, 18, 16, 14, 12, 10, 8, 6, 4, 2],
    arrpl3hzzux = [1, 2, 2, 4, 5, 6, 8, 10, 11, 13, 14, 14, 15, 15, 14, 14, 13, 11, 10, 8, 6, 5, 4, 2, 2, 1];
way.options.persistent = !1, way.options.timeoutInput = 50, way.options.timeoutDOM = 500;
var Env = {
    price: 1, repoint: 0, money: 0, type: "digital", lottery: "cqssc", defaultCalculate: function (t) {
        return !1
    }
}, rule = {}, Lottery_Rule = function () {
    var curRule, shortName, initRepoint = function (t, e) {
        var r = t.length, i = [], a = [], o = {};
        r ? r > 1 ? ($.each(t, function (t, e) {
            e.length > 1 && null == e[0].location ? (i = e, Env.repoint = i[0].point, Env.money = i[0].money) : (a.push(e[0].money), o[e[0].location] = e[0].money)
        }), way.set("mapPrize." + e, o), Env.money = a.join("/"), Env.repoint = 0, console.log("多返点奖金：", Env.money, a)) : (i = t[0], Env.repoint = i[0].point, Env.money = i[0].money) : (Env.repoint = 0, Env.money = 0);
        var s = ["lottery", "repoint", Env.lottery].join("."), n = template("_t_repoint", {
            list: i, formatM: function (t) {
                return Number(t)
            }, formatP: function (t) {
                return Number(100 * t).toFixed(1) + "%"
            }
        });
        $("#dom_repoint").html(n).find("select").on("change", function () {
            var t = $(this).data("morePrize"), e = this.value;
            t || (Env.money = i[e].money, way.set("Lottery.prize", Env.money)), Env.repoint = i[e].point, way.set("Lottery.repoint", (100 * Env.repoint).toFixed(1)), store.set(s, e)
        }).data("morePrize", a.length > 1).val(store.get(s) || 0).change()
    }, chooseRule = function (t) {
        way.get("Lottery.context") && way.set("Lottery.context", ""), way.get("Lottery.contexts") && way.set("Lottery.contexts", ""), way.set("Lottery.count.places", ""), way.set("Lottery.balls.places", ""), $(".places_Lottery .cur").removeClass("cur");
        var e = curRule = Lottery_Rules[t] || {};
        $("#helpExp").html(e.betexample), $("#helpInfo").html(e.bethelp);
        var r = $(".game-choose"), i = $("#" + t), a = $("#textarea_Lottery");
        if (i.length > 0) r.find(".touzhu-ball").hide(), i.show(), a.hide(); else if (r.find(".touzhu-ball").hide(), e.pageHtml) r.append(e.pageHtml), way.registerBindings(), way.set("mapOmit", way.get("mapOmit")), way.set("mapHot", way.get("mapHot")), a.hide(), e.type = "digital", e.focusDefaultBalls && $(e.focusDefaultBalls).not(".cur").click(); else if (e.type = "input", a.show(), a.find("textarea").off("keypress.i input.i").on({
                "keypress.i": function (t) {
                    return e.changeContext && e.changeContext(t), t.returnValue
                }, "input.i": function () {
                    var t = this.value;
                    /[a-z]+/gi.test(t) && (t = t.replace(/[a-z]+/gi, ""), this.value = t)
                }
            }), e.isPlaces) {
            if (a.find(".places_Lottery").show(), e.focusPlacesArray) {
                var o = "#Lottery_places_";
                o += e.focusPlacesArray.join("," + o), $(o).not(".cur").click()
            }
        } else a.find(".places_Lottery").hide();
        e.vali && e.vali(), Env.lottery = shortName;
        var s = !1, n = [shortName, t].join("_"), c = rule[n];
        if (c) {
            var l = c.arrRepoint;
            initRepoint(l, t), s = !0
        } else doAjax("/ssc/getPrizeData.do", {shortName: shortName, ruleCode: t}, function (e) {
            if ("200" == e.code) {
                var r = e.data || [];
                rule[n] = {arrRepoint: r}, initRepoint(r, t)
            } else Modal.alert(e.msg || "服务器开小差")
        }, function (t) {
            if (401 != t.status) {
                var e = "当前玩法奖金加载失败，请选择其他玩法";
                e = [e, [t.status, t.statusText].join("-")].join("<br>"), Modal.alert(e)
            }
        }, function () {
            s = !0
        });
        var u = setInterval(function () {
            s && (clearInterval(u), way.set("Lottery.prize", Env.money), way.set("Lottery.repoint", (100 * Env.repoint).toFixed(1)), way.set("orderlist.lottery", Env.lottery), (curRule = Lottery_Rules[t]) && (curRule.isPlaces && way.set(curRule.rulecode + ".balls.places", way.get("Lottery.balls.places")), way.get("Lottery.times") || way.set("Lottery.times", 1), way.get("Lottery.yjf") || way.set("Lottery.yjf", 2), curRule.calculatePrize(curRule.rulecode)))
        }, 50)
    }, init = function (t) {
        list_clear(), shortName = t || (store.get("lottery.currentCode") || "cqssc"), store.set("lottery.currentCode", shortName), $(".lottery-logo").addClass(shortName);
        var e = 5;
        "txgwssc" == shortName ? (e = 5, $.getScript("../../assets/js/lottery/face/lt_ssc.js", function () {
            txsscPlayRules()
        })) : shortName.indexOf("ssc") > 0 || "ffc" == shortName || "3fc" == shortName || "5fc" == shortName || "mmc" == shortName || "jndbs" == shortName || "xjp2f" == shortName || "bj5f" == shortName || "tw5f" == shortName ? (e = 5, $.getScript("../../assets/js/lottery/face/lt_ssc.js", function () {
            sscPlayRules()
        })) : shortName.indexOf("11x5") > 0 ? (e = 5, $.getScript("../../assets/js/lottery/face/lt_syxw.js", function () {
            syxwPlayRules()
        })) : shortName.indexOf("pk10") > 0 ? (e = 10, $.getScript("../../assets/js/lottery/face/lt_pks.js", function () {
            pksPlayRules()
        })) : "fc3d" == shortName || "shssl" == shortName || "ff3d" == shortName || "hgxy3d" == shortName || "twxy3d" == shortName || "jndbsxy3d" == shortName ? (e = 3, $.getScript("../../assets/js/lottery/face/lt_dpc.js", function () {
            dpcPlayRules()
        })) : "pl35" == shortName ? (e = 5, $.getScript("../../assets/js/lottery/face/lt_pl35.js", function () {
            dpcPlayRules()
        })) : "jsk3" != shortName && "gxk3" != shortName && "hbk3" != shortName || (e = 3, $.getScript("../../assets/js/lottery/face/lt_k3.js", function () {
            k3PlayRules()
        })), ProgressControl.init(shortName, e);
        var r = store.get("lottery.yjf") || 2;
        r && way.set("Lottery.yjf", r), way.watch("orderlist.items", orderlistItemListener), way.watchAll(iwac_text);
        var i = $(document);
        i.on("click", ".s-numbers li", clickBall), i.on("click", ".s-numbers-ctrl li", clickBallButton), i.on("click", ".places_Lottery li", clickPlaces), i.on("click", "#btnAddOrder", function () {
            addOrder()
        }), i.on("click", "#buyPreBox .btnDel", function () {
            var t = this.parentNode.parentNode.id;
            return delOrder(t), !1
        }), i.on("click", "#btn_inputMoneyPay", inputMoneyPay), i.on("click", "#btn_allInPay", allInPay), i.on("click", "#btnFastBuy", fastPay), i.on("click", "#btnBuy", pre_buy), i.on("click", ".btn-clearlist", list_clear), way.set("orderlist.iwac.issues", "4"), way.set("orderlist.iwac.startTimes", "1"), way.set("orderlist.iwac.stepTimes", "1"), way.set("orderlist.iwac.plusTimes", "2"), way.set("orderlist.iwac.maxTimes", "100"), way.set("orderlist.iwac.minProfit", "50"), way.set("orderlist.iwac.stopAppend", "on"), i.on("click", ".btn-trace", list_appendCode), i.on("click", "#trace_info .tabs li", function () {
            var t = $(this), e = t.index(), r = $("#trace_info .hiddenInput");
            t.addClass("active").siblings(".active").removeClass("active"), e ? r.show() : r.hide()
        }), i.on("click", "#trace_info .btn_iwac_except", iwac_except2_button_click), i.on("click", "#trace_info tbody tr", function (t) {
            /input/gi.test(t.target.nodeName) || $(this).find(":checkbox").trigger("click")
        }), i.on("change", "#trace_info tbody :checkbox", iwac_checkbox), i.on("input", "#trace_info tbody :text", iwac_times), i.on("click", "#boxOrderHistory .btn_print", function () {
            var t = $(this).parents("tr").data("id");
            layer.open({
                type: 2,
                title: "订单出票",
                area: ["320px", "400px"],
                shadeClose: !0,
                content: ["/page/print.html?id=" + t, "no"],
                btn: "关闭"
            })
        }), i.on("click", "#boxOrderHistory .btn_detail", function () {
            var t = $(this).parents("tr").data("id");
            dialogOrderHistoryDetail(t)
        }), i.on("click", "#boxOrderHistory .btn_cancel", function () {
            var t = $(this).parents("tr").data("id");
            Modal.confirm("您确定要撤销该项投注吗？", function () {
                cancelOrderHistoryItem(t)
            }, void 0, {title: "撤销投注"})
        }), $(".lottery-yjf-mode>a").on("click", function () {
            var t = $(this), e = t.data("v");
            /^(0.[0]{0,2})?[12]$/.test(e) && (way.set("Lottery.yjf", e), t.addClass("active").siblings(".active").removeClass("active"))
        }).filter('[data-v="' + r + '"]').addClass("active"), $(".inputTimes, .inputTrace").on("input", function () {
            var t = this.value;
            /\D/g.test(t) && (t = t.replace(/\D/g, ""), this.value = t)
        }), $(".btnTimesPrev").on("click", function () {
            var t = Number(way.get("Lottery.times") || 1);
            t > 1 && way.set("Lottery.times", --t)
        }), $(".btnTimesNext").on("click", function () {
            var t = Number(way.get("Lottery.times") || 1);
            t < 99999 && way.set("Lottery.times", ++t)
        }), way.set("Lottery.count.places", ""), way.set("Lottery.balls.places", ""), $(".places_Lottery .cur").removeClass("cur"), $(".btn_text_format").on("click", function () {
            var t = way.get("Lottery.contexts") || [];
            way.set("Lottery.context", t.join(" "))
        }), $(".btn_text_upload").on("click", function () {
            $("#input_upload_file").trigger("click")
        }), $(".btn_text_clear").on("click", function () {
            way.set("Lottery.context", ""), way.set("Lottery.contexts", [])
        }), $("#input_upload_file").on("change.upload", function () {
            var t = this.value || "", e = $(this), r = e.parents("form");
            return 0 != t.length && (/\.txt$/gi.test(t) ? (LoadPlugin.show(), $("#" + r.attr("target")).off("load.upload error.upload").on({
                "load.upload": function () {
                    var t, r;
                    e.val("");
                    try {
                        r = this.contentWindow || this.contentDocument, t = r.document.body.innerText, t = JSON.parse(t)
                    } catch (e) {
                        t = {}
                    }
                    "200" == t.code ? way.set("Lottery.context", t.data || "") : Modal.alert(t.msg || "服务器开小差"), LoadPlugin.hide()
                }, "error.upload": function () {
                    e.val(""), Modal.alert("网络异常，请稍候再试"), LoadPlugin.hide()
                }
            }), e.attr("name", "uploadFile"), void r.attr({
                method: "post",
                action: "/common/upload.do",
                enctype: "multipart/form-data",
                encoding: "multipart/form-data"
            }).submit()) : (e.val(""), Modal.alert("文件格式异常，请选择.txt文件。"), !1))
        })
    }, orderlistItemListener = function (t) {
        var e, r = transformOrderShowData(t);
        e = template("_t_item", {list: r}), $("#buyPreBox").html(e)
    }, ballsRuleSort = ($a = ["w", "q", "b", "s", "g"], function (t, e) {
        var r = $a.indexOf(t.id), i = $a.indexOf(e.id);
        return -1 == r && "places" == t.id || (-1 != i || "places" != e.id) && (r >= 0 ? i >= 0 && r > i : i >= 0 || t.id > e.id)
    }), $a, transformOrderShowData = function (t, e) {
        var r = [];
        return $.each(t, function (t, e) {
            var i, a, o, s, n, c = Lottery_Rules[this.rulecode] || {};
            if (c.formatBalls) i = (i = c.formatBalls(this.balls)).replace(/,/g, "|").replace(/\s/g, ","); else {
                var l, u = [], m = [];
                $.each(this.balls, function (t, e) {
                    var r, i = e;
                    "places" == t && (r = [], i.sort(), $.each(i, function (t, e) {
                        r.push("万千百十个"[e])
                    }), i = [r.join("_")]), m.push({id: t, obj: i})
                }), m.sort(ballsRuleSort), $.each(m, function () {
                    u.push(this.obj.join(","))
                }), this.bigCodes && u.push(this.bigCodes), i = u.join("|")
            }
            c.replaceCode && (i = c.replaceCode(i)), (l = {
                id: t,
                title: c.realname,
                codes: i,
                times: this.times,
                nums: this.itemcount,
                repoint: this.repoint,
                prize: formatComma(this.prize),
                total: formatComma(this.total)
            }).yjf_text = (a = this.mode, s = (o = Number(a).toExponential().match(/(\d)/g))[0], n = o[1], ["2元", "2角", "2分", "2厘", "1元", "1角", "1分", "1厘"][n = Number(n) + s % 2 * 4]), r.push(l)
        }), r
    }, transformSubmitOrderData = function (t, e) {
        var r, i, a, o = way.get("orderlist"), s = {}, n = [];
        s.id = way.get("showExpect.currExpect"), s.shortName = o.lottery, s.total_nums = o.itemcount, s.total_money = Number(o.total), r = [], $.each(o.items, function () {
            var t, e, a = Lottery_Rules[this.rulecode] || {}, o = !1;
            if (a.formatBalls) t = (t = (t = (t = a.formatBalls(this.balls)).replace(/^(\W+_)+(\W+,)/g, "")).replace(/\s/g, "&").replace(/,/g, "|")).replace(/(^&|&$)/g, "").replace(/(&&)/g, "&").replace(/(&\|)|(\|&)/g, "|"), $.each(this.balls, function (t, r) {
                "places" == t && (r.sort(), e = r.join("&"))
            }); else {
                var s = [];
                this.bigCodes && (s.push(this.bigCodes.replace(/,/g, "&")), o = this.itemcount > 5e3);
                var c = [];
                $.each(this.balls, function (t, r) {
                    "places" == t ? (r.sort(), e = r.join("&")) : c.push({id: t, obj: r})
                }), c.sort(ballsRuleSort), $.each(c, function () {
                    s.push(this.obj.join("&"))
                }), t = s.join("|")
            }
            a.replaceCode && (t = a.replaceCode(t)), (i = {
                rulecode: this.rulecode,
                type: this.type,
                codes: t,
                position: e,
                nums: this.itemcount,
                times: this.times,
                money: this.total,
                mode: this.mode,
                point: this.doubleRepoint,
                curtimes: (new Date).getTime()
            }).rulecode = this.rulecode, o ? n.push(i) : r.push(i)
        }), s.items = r, s.trace_if = "no", t && (s.trace_if = "yes", s = transformTraceInfo(s, o.iwac)), n.length ? (a = new LZMA("/assets/plugins/lzma/lzma_worker.js"), function () {
            var t, r = arguments.callee;
            n.length ? (t = n.shift(), a.compress(t.codes, 6, function (e) {
                t.codes = convert_to_formated_hex(e), t.zip = 1, s.items.push(t), setTimeout(r, 0)
            })) : e && e(s)
        }()) : e && e(s)
    }, transformTraceInfo = function (t, e) {
        t = t || {}, e = e || way.get("orderlist.iwac") || {}, t.trace_stop = "on" != e.stopAppend ? "no" : "yes", t.trace_count = e.issueCount, t.trace_money = Number(e.total);
        var r = [];
        return $.each(e.item, function (t, e) {
            var i = t.split("_");
            r.push({id: i[1], times: this.times})
        }), t.trace_issues = r, t
    }, clickBall = function (t) {
        var e = t.target, r = $(e);
        "LI" != e.nodeName && (e = (r = r.parents("li"))[0]);
        var i = e.id.split("_"), a = i[0] + ".balls." + i[1], o = way.get(a);
        o || (o = [], way.set(a, o));
        var s = i[0] + ".count." + i[1], n = way.get(s) || 0, c = o.indexOf(i[2]);
        c >= 0 ? (o.splice(c, 1), way.set(s, n - 1), r.removeClass("cur")) : curRule.rowOnlyOne ? (r.addClass("cur").siblings(".cur").removeClass("cur"), o = [i[2]], way.set(a, o), way.set(s, 1)) : "dweid" != curRule.rulecode && "bjpk10qian1" != curRule.rulecode && "bjpk10qian2" != curRule.rulecode && "bjpk10qian3" != curRule.rulecode && "bjpk10dwd" != curRule.rulecode || 9 != n ? (r.addClass("cur"), o.push(i[2]), way.set(s, n + 1)) : Modal.msg("每位最多选9个号码"), curRule.vali(t)
    }, clickBallButton = function (e) {
        var ss = $(e.target).attr("datascope").split("_"), i, j, o, pre, item, sss = ss[3].split("-");
        for (pre = ss[0] + "_" + ss[1] + "_", i = eval(sss[0]), j = eval(sss[1]); i <= j; i++) sss[1] > 9 ? (o = i, o < 10 && (o = "0" + o), item = $("#" + pre + o)) : item = $("#" + pre + i), item.hasClass("cur") && item.trigger("click");
        if (i = eval(sss[0]), "big" == ss[2]) for (; i <= j; i++) sss[1] > 9 ? (o = i, o < 10 && (o = "0" + o), item = $("#" + pre + o)) : item = $("#" + pre + i), i <= (eval(sss[0]) + j) / 2 && item.hasClass("cur") ? item.trigger("click") : i > (eval(sss[0]) + j) / 2 && !item.hasClass("cur") && item.trigger("click"); else if ("sma" == ss[2]) for (; i <= j; i++) sss[1] > 9 ? (o = i, o < 10 && (o = "0" + o), item = $("#" + pre + o)) : item = $("#" + pre + i), i <= (eval(sss[0]) + j) / 2 && !item.hasClass("cur") ? item.trigger("click") : i > (eval(sss[0]) + j) / 2 && item.hasClass("cur") && item.trigger("click"); else if ("sin" == ss[2]) for (; i <= j; i++) sss[1] > 9 ? (o = i, o < 10 && (o = "0" + o), item = $("#" + pre + o)) : item = $("#" + pre + i), i % 2 != 1 || item.hasClass("cur") ? i % 2 == 0 && item.hasClass("cur") && item.trigger("click") : item.trigger("click"); else if ("dou" == ss[2]) for (; i <= j; i++) sss[1] > 9 ? (o = i, o < 10 && (o = "0" + o), item = $("#" + pre + o)) : item = $("#" + pre + i), i % 2 == 1 && item.hasClass("cur") ? item.trigger("click") : i % 2 != 0 || item.hasClass("cur") || item.trigger("click"); else if ("ful" == ss[2]) for (; i <= j; i++) sss[1] > 9 ? (o = i, o < 10 && (o = "0" + o), item = $("#" + pre + o)) : item = $("#" + pre + i), item.hasClass("cur") || item.trigger("click")
    }, clickPlaces = function (t) {
        var e = t.target, r = $(e), i = e.id.split("_"), a = "Lottery.balls." + i[1], o = "Lottery.count." + i[1],
            s = way.get(a);
        s || (s = [], way.set(a, s)), way.set(curRule.rulecode + ".balls." + i[1], s);
        var n, c = way.get(o) || 0;
        r.hasClass("cur") ? (r.removeClass("cur"), n = s.indexOf(i[2]), s.splice(n, 1), c -= 1) : (r.addClass("cur"), s.push(i[2]), c += 1), way.set(o, c), curRule.vali()
    }, addOrder = function (t) {
        if (way.get("Lottery.total") > 0) {
            var e = $.now() + "-" + Math.uuid(8), r = {
                rulecode: curRule.rulecode,
                type: curRule.type,
                total: Number(way.get("Lottery.total")),
                itemcount: Number(way.get("Lottery.itemcount")),
                times: Number(way.get("Lottery.times")),
                yjf: Number(way.get("Lottery.yjf")),
                repoint: Number(way.get("Lottery.repoint")),
                doubleRepoint: Env.repoint,
                balls: $.extend(!0, {}, way.get(curRule.rulecode + ".balls"))
            };
            r.mode = Env.price * r.yjf, way.get("Lottery.contexts") && (r.bigCodes = way.get("Lottery.contexts").join(",")), $.each(r.balls, function () {
                this.sort()
            });
            var i = !1, a = way.get("orderlist.items") || [];
            a.length;
            if ($.each(a, function (e, a) {
                    if (a.rulecode == r.rulecode && a.itemcount == r.itemcount && a.yjf == r.yjf && a.repoint == r.repoint && a.mode == r.mode) {
                        var o = !0;
                        if ($.each(a.balls, function (t, e) {
                                (r.balls[t] || []).join("") == e.join("") || (o = !1)
                            }), i = r.bigCodes && a.bigCodes ? r.bigCodes == a.bigCodes && o : o) {
                            var s = Number(a.times) + Number(r.times);
                            return refreshOrderTimes(e, s), t || Modal.msg("该投注已经存在，已直接为您加倍"), !1
                        }
                    }
                }), i) return curRule.clear(), void(t && t());
            way.set("orderlist.items." + e, r);
            var o = Number(way.get("iwac.cost") || 0);
            way.set("iwac.cost", Number(r.total / (r.times || 1) + o).toFixed(4));
            for (var s = (way.get("Lottery.prize") || "0").split("/"), n = 0, c = 0; c < s.length; c++) {
                var l = Number(s[c]);
                l > n && (n = l)
            }
            r.prize = Number(n * (r.yjf / 2)).toFixed(4);
            var u = Number(way.get("iwac.prize"));
            way.set("iwac.prize", u + Number(r.prize));
            var m = Number(way.get("orderlist.total"));
            m = (Number(r.total) + m).toFixed(4), way.set("orderlist.total", m), m = Number(way.get("orderlist.itemcount") || 0), m = Number(r.itemcount) + m, way.set("orderlist.itemcount", m), m = Number(way.get("orderlist.ordercount") || 0), way.set("orderlist.ordercount", ++m), curRule.clear(), t && t()
        } else {
            way.get("Lottery.times") < 1 ? Modal.msg("倍数不能小于1") : Modal.msg("号码不完整，请重新选择")
        }
    }, refreshOrderTimes = function (t, e) {
        var r, i, a, o = "orderlist.items." + t, s = way.get(o);
        r = Number(s.total), i = Number(s.times), a = Number(way.get("orderlist.total")), s.times = e, s.total = (e * r / i).toFixed(4), way.set(o, s), way.set("orderlist.total", Number(a - r + Number(s.total)).toFixed(4))
    }, fastPay = function () {
        way.get("Lottery.total") > 0 ? addOrder(pre_buy) : pre_buy()
    }, inputMoneyPay = function () {
        var t = way.get("Lottery.inputMoney");
        isNaN(t) || t < 0 ? Modal.msg("请输入投注金额") : (_calculate_inputMoneyPay(t), way.remove("Lottery.inputMoney"))
    }, allInPay = function () {
        var t = way.get("user.balance");
        _calculate_inputMoneyPay(t)
    }, _calculate_inputMoneyPay = function (t) {
        var e, r = Number(way.get("Lottery.itemcount")), i = Number(way.get("Lottery.yjf")),
            a = Number(way.get("Lottery.times")), o = Number(way.get("orderlist.total"));
        r < 1 ? Modal.msg("注单不完整，请选择号码") : (t = Number(t) - o, (e = Math.floor(t / (r * i))) < 1 || (way.set("Lottery.times", e), fastPay(), way.set("Lottery.times", a)))
    }, dialogOrderDetail = function (t) {
        var e = way.get("orderlist.items." + t) || {}, r = transformOrderShowData([e], !0),
            i = template("_t_orderDetail", {list: r}), a = $("#modalOrderAlert");
        a.find(".modal-detail").html(i), layer.open({
            type: 1,
            title: "订单详情",
            area: "400px",
            shadeClose: !0,
            btn: ["确定"],
            content: a
        })
    }, refreshOrderHistory = function () {
        var t, e = 0;
        return function (r) {
            var i = arguments.callee;
            t && clearTimeout(t), doAjax("/ssc/getBetHistory.do", {shortName: shortName}, function (a) {
                var o, s;
                if ("200" == a.code) {
                    o = a.data || [], s = template("_t_orderHistory_item", {
                        list: o,
                        formatComma: formatComma,
                        formatYjf: formatYjf,
                        formatCode: formatCode
                    }), $("#boxOrderHistory").html(s), r && r(o);
                    var n = !1;
                    $.each(o, function () {
                        if (2 == this.status) return n = !0, !1
                    }), n && (t = setTimeout(i, 5e3))
                } else Modal.alert(a.msg);
                e = 0
            }, function () {
                e += 1, t = setTimeout(i, 3e3 * e)
            })
        }
    }(), dialogOrderHistoryDetail = function (t) {
        doAjaxPack("/ssc/getBetDetail.do", {orderId: t}, function (e) {
            var r = $.extend({formatComma: formatComma, formatYjf: formatYjf, formatCode: formatCode}, e),
                i = template("_t_orderHistory_detail", r), a = $("<div>").hide().html(i).appendTo("body"), o = {
                    type: 1, title: "投注详情", area: "880px", shadeClose: !0, content: a, end: function () {
                        a.remove(), a = void 0
                    }
                }, s = layer.open(o);
            a.on("click.cd", ".btnClose", function () {
                layer.close(s)
            }), 0 == r.status && a.on("click.cd", ".btnCancel", function () {
                Modal.confirm("您确定要撤销该项投注吗？", function () {
                    cancelOrderHistoryItem(t, function () {
                        layer.close(s)
                    })
                }, void 0, {title: "撤销投注"})
            })
        })
    }, cancelOrderHistoryItem = (Cd = 0, function (t, e) {
        var r = (new Date).getTime();
        r < Cd || (Cd = r + 1500, doAjaxPack("/ssc/cancelBet.do", {orderId: t}, function (t) {
            Modal.msg("撤单成功"), refreshOrderHistory(), e && e()
        }))
    }), Cd, delOrder = function (id) {
        if (way.get("iwac.cost") && (way.get("orderlist.items." + id + ".times") && eval(way.get("orderlist.items." + id + ".times")) > 1 ? way.set("iwac.cost", eval(way.get("iwac.cost")) - eval(way.get("orderlist.items." + id + ".total")) / eval(way.get("orderlist.items." + id + ".times"))) : way.set("iwac.cost", eval(way.get("iwac.cost")) - eval(way.get("orderlist.items." + id + ".total")))), way.get("iwac.prize")) {
            var _temp = Number(way.get("iwac.prize")) - Number(way.get("orderlist.items." + id + ".prize"));
            way.set("iwac.prize", String(_temp))
        }
        way.get("orderlist.total") && way.set("orderlist.total", (eval(way.get("orderlist.total")) - eval(way.get("orderlist.items." + id + ".total"))).toFixed(4)), way.get("orderlist.itemcount") && way.set("orderlist.itemcount", eval(way.get("orderlist.itemcount")) - eval(way.get("orderlist.items." + id + ".itemcount"))), way.get("orderlist.ordercount") && way.set("orderlist.ordercount", eval(way.get("orderlist.ordercount") - 1)), way.get("orderlist.total") || way.set("orderlist.total", "0"), way.get("orderlist.itemcount") || way.set("orderlist.itemcount", "0"), way.get("orderlist.ordercount") || way.set("orderlist.ordercount", "0"), way.set("orderlist.items." + id, null)
    }, list_clear = function () {
        way.set("orderlist.items", {}), way.set("orderlist.total", "0"), way.set("iwac.cost", "0"), way.set("iwac.prize", "0"), way.set("orderlist.itemcount", "0"), way.set("orderlist.ordercount", "0"), way.set("orderlist.sumCount", "0")
    }, iwac_text = function (t, e) {
        if (/^orderlist\.iwac\.item\..+\.total$/.test(t)) {
            var r = 0, i = way.get("orderlist.iwac.item");
            $.each(i, function () {
                var t = Number(this.total || 0);
                r += t
            }), way.set("orderlist.iwac.total", r)
        } else if (/^orderlist\.iwac\.item\..+\.times$/.test(t)) {
            (t = (t = t.substr(0, t.length - 6)).substring(20, t.length)).indexOf("times_") >= 0 && (t = t.substring(6, t.length));
            var a = Number(e || 0);
            a = $("#" + t).prop("checked") && 0 != a ? Number(way.get("iwac.cost")) * a : 0, way.set("orderlist.iwac.item." + t + ".total", a), $("#total_" + t).html(formatComma(a))
        } else if (/^[^\.]+\.yjf$/.test(t)) curRule.calculatePrize(curRule.rulecode), curRule.vali(), store.set("lottery.yjf", String(e)); else if (/^[^\.]+\.times$/.test(t)) {
            var o = way.get("Lottery.times") || "";
            /\D/g.test(o) && (o = o.replace(/\D/g, ""), way.set("Lottery.times", o)), o < 1 && way.set("Lottery.times", 1), curRule.vali()
        } else if (/^Lottery.total$/.test(t)) {
            var s, n, c = way.get("Lottery") || {};
            e > 0 ? isNaN(c.prize) ? (n = (c.prize || "").split(/[^\d.]+/g), s = Math.min.apply(Math, n), s = Number(s) * Number(c.yjf) / 2 * c.times, c.prizeHtml = formatComma(s), c.prizeWin = formatComma(s - Number(e)), c.prizeHtml += " ~ ", c.prizeWin += " ~ ", s = Math.max.apply(Math, n), s = Number(s) * Number(c.yjf) / 2 * c.times, c.prizeHtml += formatComma(s), c.prizeWin += formatComma(s - Number(e))) : (s = Number(c.prize) * Number(c.yjf) / 2 * c.times, c.prizeHtml = formatComma(s), c.prizeWin = formatComma(s - Number(e))) : c.prizeHtml = c.prizeWin = formatComma(0), way.set("Lottery", c)
        } else /^[^\.]+\.context$/.test(t) && curRule.vali()
    }, iwac_checkbox = function (t) {
        var e = t.target, r = $(e), i = "orderlist.iwac.item." + e.id, a = i + ".times", o = way.get(a),
            s = $("#times_" + e.id), n = Number(way.get("orderlist.iwac.issueCount") || 0);
        e.checked ? (o || (o = 1), way.set(a, o), s.val(o), n ? n += 1 : n = 1, r.parents("tr").addClass("active")) : (n -= 1, s.val("0"), way.set(a, 0), way.set(i, void 0), r.parents("tr").removeClass("active")), way.set("orderlist.iwac.issueCount", n)
    }, iwac_times = function (t) {
        var e = $(t.target).attr("id") || "";
        e.indexOf("times_") >= 0 && (e = e.substring(6, e.length));
        var r = $(t.target).val();
        isNaN(r) ? way.set("orderlist.iwac.item." + e + ".times", "0") : way.set("orderlist.iwac.item." + e + ".times", parseInt(r))
    }, appencode_genTable = function (t) {
        way.set("orderlist.iwac.item", null), $("#trace_info tbody").html(""), doAjax("/ssc/getTraceInitData.do", {
            shortName: Env.lottery,
            pageSize: t
        }, function (t) {
            var e = t.data || [];
            if ("200" == t.code) {
                var r = template("_t_trace_item", {list: e});
                $("#trace_info tbody").html(r), way.set("iwac.tablecount", e.length)
            }
        }, void 0, void 0, {async: !1})
    }, list_appendCode = function () {
        if (way.get("orderlist.total") > 0) {
            way.set("orderlist.iwac.item", null), way.set("orderlist.iwac.total", "0"), way.set("orderlist.iwac.issueCount", "0"), way.set("orderlist.iwac.maxTimes", 100), way.set("orderlist.iwac.minProfit", 50);
            var t = $("#m_trace");
            way.get("orderlist.ordercount") > 1 ? t.find('[data-id="lrl"]').hide() : t.find('[data-id="lrl"]').show(), t.find("tbody").html(""), t.modal().show().addClass("in"), t.find(".radio-btn .btn-radio").off("click").on("click", function () {
                var t = $(this), e = t.data("id");
                way.set("orderlist.iwac.mode", e), t.addClass("active").siblings(".active").removeClass("active"), t.parent().next().find(".hiddenOne").hide().filter("." + e).show()
            }).filter('[data-id="fb"]').click(), t.find(".zh-qs a").off("click").on("click", function () {
                var t = $(this), e = t.data("id");
                way.set("orderlist.iwac.issues", e), t.addClass("active").siblings(".active").removeClass("active")
            }).first().click(), t.find(".btn_bet_trace").off("click").on("click", function () {
                list_buy(!0, function () {
                    $("#m_trace").modal("hide")
                })
            })
        } else Modal.msg("请先添加号码")
    }, pre_buy = function () {
        if (way.get("orderlist.ordercount") > 0) {
            var t;
            if (way.get("buyAndPrint")) {
                var e = transformOrderShowData(way.get("orderlist.items"));
                t = function (t) {
                    var r, i = (t[0] || {}).id, a = ["/page/print.html?id="];
                    a.push(i), e.length > 1 && (r = "beforePrintCache_" + Math.uuid(), store.set(r, e), a.push("&storeId="), a.push(r)), layer.open({
                        type: 2,
                        title: "打印出票",
                        area: ["320px", "400px"],
                        shadeClose: !0,
                        content: [a.join(""), "yes"],
                        btn: "关闭"
                    })
                }
            }
            list_buy(!1, t)
        } else Modal.msg("请先添加号码")
    }, list_buy = (re = 0, function (t, e) {
        var r;
        if (0 != (r = t ? Number(way.get("orderlist.iwac.total") || 0) : Number(way.get("orderlist.total") || 0))) if (Number(way.get("user.balance") || 0) < r) Modal.alert("账户余额不足!"); else {
            var i = (new Date).getTime();
            i < re || (re = i + 1500, LoadPlugin.show(), transformSubmitOrderData(t, function (t) {
                doAjaxPack("/ssc/bet.do", {arguments: JSON.stringify(t)}, function (t) {
                    Modal.msg("投注成功"), refreshBalance && refreshBalance(), list_clear(), ProgressControl.afterPay(), refreshOrderHistory(e)
                })
            }))
        }
    }), re, iwac_except2_button_click = function (e) {
        var _count = Number(way.get("orderlist.iwac.issues") || 0);
        _count < 1 ? (_count = 1, way.set("orderlist.iwac.issues", "1")) : _count > 60 && (_count = 60, way.set("orderlist.iwac.issues", "60"));
        var iwac_starttimes = Number(way.get("orderlist.iwac.startTimes") || 0);
        iwac_starttimes < 1 && (iwac_starttimes = 1, way.set("orderlist.iwac.startTimes", "1")), way.set("orderlist.iwac.issueCount", "0");
        var orderMoney = way.get("orderlist.total");
        if (0 != orderMoney) {
            appencode_genTable(_count);
            var _mode = way.get("orderlist.iwac.mode"), $rowArr = $("#trace_info tbody tr");
            if (/lrl/g.test(_mode)) {
                var iwac_maxTimes = Number(way.get("orderlist.iwac.maxTimes") || 0),
                    iwac_minprofit = Number(way.get("orderlist.iwac.minProfit") || 0),
                    iwac_cost = Number(way.get("iwac.cost") || 0);
                if (iwac_maxTimes < 1) return void Modal.alert("请添加正确的最大倍投！");
                if (iwac_minprofit < 1) return void Modal.alert("请添加正确的最低利润率！");
                var hisl = 0, fm = Number(way.get("iwac.prize")) - iwac_cost - iwac_cost * iwac_minprofit / 100;
                console.log("fm", fm), $rowArr.each(function (t) {
                    $(this);
                    var e = $(this).find(":checkbox");
                    if (Number(_count) <= t) e.prop("checked") && e.trigger("click"); else {
                        var r = Math.ceil(iwac_starttimes * hisl * (1 + iwac_minprofit / 100) / fm);
                        console.log(r, "=", iwac_starttimes, "*", hisl, "*", 1 + iwac_minprofit / 100, "/", fm), (r > iwac_maxTimes || r < 0) && (r = iwac_maxTimes), r && 0 != r || (r = iwac_starttimes), way.set("orderlist.iwac.item." + e.attr("id") + ".times", r), e.prop("checked") || e.trigger("click"), hisl += Number(way.get("orderlist.iwac.item." + e.attr("id") + ".total"))
                    }
                }), console.log("hisl", hisl)
            } else if (/fb/g.test(_mode)) {
                var iwac_plusTimes = Number(way.get("orderlist.iwac.plusTimes") || 0);
                if (isNaN(iwac_plusTimes) || iwac_plusTimes < 1) return iwac_plusTimes = 1, void way.get("orderlist.iwac.plusTimes", iwac_plusTimes);
                var iwac_stepIssue = Number(way.get("orderlist.iwac.stepTimes") || 0);
                if (isNaN(iwac_stepIssue) || iwac_stepIssue < 1) return iwac_stepIssue = 1, void way.get("orderlist.iwac.stepTimes", iwac_stepIssue);
                var btimes = iwac_starttimes;
                $rowArr.each(function (t) {
                    var e = $(this).find(":checkbox");
                    if (_count <= t) e.prop("checked") && e.trigger("click"); else {
                        var r = way.get("orderlist.iwac.item." + e.attr("id"));
                        r || (r = {}, way.set("orderlist.iwac.item." + e.attr("id"), r)), e.prop("checked") ? r.times != btimes && (r.times = btimes) : (r.times = btimes, e.trigger("click")), t % iwac_stepIssue == iwac_stepIssue - 1 && (btimes *= iwac_plusTimes)
                    }
                })
            } else $rowArr.each(function (index) {
                var $ckbox = $(this).find(":checkbox");
                eval(_count) <= index ? $ckbox.prop("checked") && $ckbox.trigger("click") : $ckbox.prop("checked") ? way.get("orderlist.iwac.item." + $ckbox.attr("id") + ".times") != iwac_starttimes && way.set("orderlist.iwac.item." + $ckbox.attr("id") + ".times", iwac_starttimes) : (way.set("orderlist.iwac.item." + $ckbox.attr("id") + ".times", iwac_starttimes), $ckbox.trigger("click"))
            })
        }
    }, movestring = function (t) {
        for (var e = "", r = "", i = "", a = "", o = !1, s = !1, n = 0; n < t.length; n++) 0 == o && (e += t.substr(n, 1)), 0 == o && "1" == t.substr(n, 1) ? s = !0 : 0 == o && 1 == s && "0" == t.substr(n, 1) ? o = !0 : 1 == o && (r += t.substr(n, 1));
        e = e.substr(0, e.length - 2);
        for (var c = 0; c < e.length; c++) "1" == e.substr(c, 1) ? i += e.substr(c, 1) : "0" == e.substr(c, 1) && (a += e.substr(c, 1));
        return (e = i + a) + "01" + r
    }, getCombination = function (t, e) {
        var r = t.length, i = new Array;
        new Array;
        if (e > r) return i;
        if (1 == e) return t;
        if (r == e) return i[0] = t.join(","), i;
        for (var a = "", o = "", s = "", n = 0; n < e; n++) a += "1", o += "1";
        for (var c = 0; c < r - e; c++) a += "0";
        for (var l = 0; l < e; l++) s += t[l] + ",";
        i[0] = s.substr(0, s.length - 1);
        var u = 1;
        for (s = ""; a.substr(a.length - e, e) != o;) {
            a = movestring(a);
            for (l = 0; l < r; l++) "1" == a.substr(l, 1) && (s += t[l] + ",");
            i[u] = s.substr(0, s.length - 1), s = "", u++
        }
        return i
    };
    return {
        chooseRule: chooseRule,
        init: init,
        refreshOrderHistory: refreshOrderHistory,
        getCombination: getCombination
    }
}(),

    ProgressControl = function () {
    var t, e, r, i;

    function a(t) {
        var e = t || "";
        return (e.length > 10 ? e.replace(/,/g, "").match(/(\w{2})/g) : e.match(/\w/g)).join(",")
    }

    var o, s, n, c = (o = $(".fixedCountDown"), s = !1, function (t) {
        if (t && s) return o.stop(!0, !0).fadeOut(100), void(s = !1);
        s && (o.stop(!0, !0).fadeOut(100), s = !1)
    }), l = function () {
        function t(t) {
            var e = [], r = a(t || "").split(",");
            return e.push("<i>"), e.push(r.join("</i><i>")), e.push("</i>"), e.join("")
        }

        function e(e) {
            return template("_t_openCode", {list: e, format: t})
        }

        return {
            domContainerSelector: ".lottery-history tbody", prepend: function (t, r) {
                var i, a = (t || "").split("-")[1] || t || "", o = $(this.domContainerSelector);
                new RegExp(a).test(o.html()) || (i = e([{
                    shortIssue: a,
                    winnumber: r
                }]), o.prepend(i).find("tr:last").remove())
            }, html: function (t) {
                var r = e(t);
                $(this.domContainerSelector).html(r)
            }
        }
    }(), u = function () {
        var t = {
            t5: "time5.wav",
            t_e: "timeEnd.mp3",
            b_o: "open.wav",
            0: "m_0.wav",
            1: "m_1.wav",
            2: "m_2.wav",
            3: "m_3.wav",
            4: "m_4.wav",
            5: "m_5.wav",
            6: "m_6.wav",
            7: "m_7.wav",
            8: "m_8.wav",
            9: "m_9.wav",
            10: "m_10.wav",
            11: "m_11.wav"
        };
        $.each(t, function (e, r) {
            var i = "/assets/media/" + r;
            t[e] = i, $.ajax(i)
        });
        var e = !!document.createElement("audio").canPlayType && !(window.ActiveXObject || "ActiveXObject" in window) ? function (t) {
            var e = document.createElement("audio");
            return e.autoplay = !0, e.src = t, e
        } : function (t) {
            var e = document.createElement("bgsound");
            return e.autostart = !0, e.src = t, e
        }, r = $("<div>");
        return r.appendTo("body"), {
            play: function (a) {
                var o = t[a];
                i && o && r.html(e(o))
            }, pause: function () {
                r.children().each(function () {
                    this.pause()
                })
            }
        }
    }(), m = function (t, e) {
        $("#clockTime").timeTo({seconds: t, fontSize: 34, height: 30}), $("#countdown_dashboard").timeTo({
            seconds: t,
            fontSize: 42,
            callback: e
        }), n && clearTimeout(n), t > 5 && (n = setTimeout(function () {
            u.play("t5")
        }, 1e3 * (t - 5)))
    }, d = function () {
        var r, i, o;

        function s(t, e) {
            var r = $(".lottery-result"), a = r.find(".boxOpen");
            10 == t && r.addClass("lottery-result-pk10"), i && clearTimeout(i);
            var o = Number("1e" + t), s = function (t) {
                return template("_t_code", t)
            };
            if (e) {
                if (0 == t) {
                    var n = s(e);
                    return void a.html(n)
                }
                s = function (t) {
                    return Array.prototype.unshift.apply(t, e), template("_t_code", t)
                }
            }
            !function () {
                for (var e = Math.floor(Math.random() * o) + ""; e.length < t;) e = "0" + e;
                var r = s(e.split(""));
                a.html(r), i = setTimeout(arguments.callee, 60)
            }()
        }

        function n(t, e, r) {
            var n, c;
            t && (t = a(t), n = t.split(","), c = [], 0 != r ? (u.play("b_o"), o = setTimeout(function () {
                i && clearTimeout(i), o && clearTimeout(o);
                var t = n.shift();
                c.push(t), u.play(String(Number(t))), s(n.length, c), n.length ? o = setTimeout(arguments.callee, 750) : e && e()
            }, 1700)) : (s(0, n), e && e()))
        }

        return {
            openMMC: function (t, r, i) {
                s(e), t && n(t, r, i)
            }, open: function (i, a) {
                var o = $(".lottery-result");
                s(e), o.children().hide().not(".waitOpen").show(), function () {
                    var e = arguments.callee, o = !0;
                    r && clearTimeout(r), doAjax("/ssc/getOpenWinCode.do", {shortName: t, issue: i}, function (t) {
                        var e, r;
                        "200" == t.code && (e = t.data || {}, (r = e.lastOpenCode) && way.get("showExpect.lastExpect") == i && (n(r, function () {
                            l.prepend(i, r), Lottery_Rule.refreshOrderHistory(), y()
                        }, a), o = !1))
                    }, void 0, function () {
                        o && (way.get("showExpect.lastExpect") == i && (r = setTimeout(e, 5e3)))
                    }, {timeout: 5e3})
                }()
            }, lazyOpen: function (t, e) {
                var r = this, i = $(".lottery-result.kj-number-new");
                i.children().hide(), i.find(".waitOpen").show(), setTimeout(function () {
                    r.open(t, !0)
                }, 1e3 * e)
            }
        }
    }(), y = function () {
        var e;

        function r() {
            var r = arguments.callee;
            doAjax("/ssc/getYlAndRL.do", {shortName: t}, function (t) {
                "200" == t.code && (t = t.data || {}, way.set("issue_omitAndHot", t.issue || " - "), way.set("mapOmit", t.ylMap), way.set("mapHot", t.lrMap))
            }, function (t) {
                401 != t.status && (e = setTimeout(r, 100 * e))
            })
        }

        return function () {
            way.set("issue_omitAndHot", "loading"), e && clearTimeout(e), e = setTimeout(r, 500)
        }
    }();

    function f(e) {
        doAjaxPack("/ssc/getOpenWinCodeHistory.do", {shortName: t, num: 8}, function (t) {
            e && e(t || []), Lottery_Rule.refreshOrderHistory()
        })
    }

    function p() {
        way.set("orderlist.iwac.item", null), way.set("orderlist.iwac.total", "0"), way.set("orderlist.iwac.issueCount", "0"), $("#trace_info tbody").html("")
    }

    function w(t) {
        f(function (e) {
            var r;
            (e = e || []).length ? (r = e[0] || {}, d.openMMC(r.winnumber, function () {
                l.html(e)
            }, t)) : d.openMMC("00000", void 0, !1)
        })
    }

    return {
        init: function (a, o) {
            t = a, e = o, m(1, void 0), "mmc" != a ? ($(".lottery-current,.lottery-result").addClass("game"), $(".btn-trace").show(), $(".btn-chart").show().on("click", function () {
                $("<form>").attr({
                    target: "_blank",
                    action: "/page/charts.html#" + t
                }).hide().appendTo("body").submit().remove()
            }), $(".btn-group.omitAndHot>.btn").on("click", function () {
                var t = $(this), e = $(".game-choose"), r = t.data("type");
                e.toggleClass(r), e.hasClass(r) ? (t.addClass("active"), y()) : t.removeClass("active")
            }), f(function (t) {
                l.html(t)
            }), i = !!store.get("CanPlaySound"), $(".btn-lottery-volume").each(function () {
                var t = $(this);
                t.children().hide().eq(i ? 0 : 1).show(), t.on("click", function () {
                    i = !i, store.set("CanPlaySound", i), i ? t.children().hide().eq(0).show() : (t.children().hide().eq(1).show(), u.pause())
                })
            }), $(window).on("scroll", function () {
                document.body.scrollTop > 90 ? r || (r = !0, c()) : r && (r = !1, c())
            }), function (e) {
                var r = arguments.callee;
                doAjax("/ssc/initSscData.do", {shortName: t}, function (t) {
                    var i;
                    "200" == t.code && (i = (t = t.data).cursitem.historyissue, way.set("showExpect.lastExpect", i), way.set("showExpect.currExpect", t.cursitem.issue), Number(t.remainTime) > 1 ? (m(t.remainTime, function () {
                        u.play("t_e"), r(p)
                    }), y()) : setTimeout(r, 1e3), t.remainOpenTime > 0 ? d.lazyOpen(i, t.remainOpenTime) : d.open(i, !1), e && e())
                }, void 0, function (t) {
                    "200" != (t.responseJSON || {}).code && setTimeout(r, 1e3)
                })
            }()) : ($(".lottery-current,.lottery-result").addClass("mmc"), $(".btn-trace").hide(), $(".btn-chart").hide(), d.openMMC("00000", void 0, !1), w(!1), way.set("showExpect.currExpect", "1"))
        }, afterPay: function () {
            "mmc" == t && (d.openMMC(), w(!0))
        }
    }
}();



!function () {
    var t = store.get("modeGameBody") || "bg6";
    t && ($("body").attr("class", t), $(".left-toolbar-tabs .modeChange a").filter(function () {
        return $(this).data("mode") == t
    }).addClass("active").siblings(".active").removeClass("active"))
}(), $(function () {
    var t, e, r, i = document, a = getQueryString("code");
    a || (a = store.get("lottery.currentCode") || "cqssc", history.replaceState("", "", "?code=" + a)), i.title = (t = a, (e = $(".left-menu .left-menu-dropdown a").filter(function () {
        return (this.href || "").indexOf("?code=" + t) > 0
    }).first().addClass("active")).parents("li").addClass("active"), r = e.text() || "投注页", way.set("GameName", r), r), Lottery_Rule.init(a), $(window).bind("scroll", function () {
        Math.max(document.body.scrollTop || document.documentElement.scrollTop) > 200 ? $(".clock-time").addClass("active") : $(".clock-time").removeClass("active")
    }), $(".kj-pre .dropdown").on("click", function () {
        $(this).toggleClass("hover")
    });
    var o = $(document);
    o.on("click", ".left-toolbar-tabs .btnChangeMode", function () {
        $(this).siblings(".modeChange").toggle()
    }), o.on("click", ".left-toolbar-tabs .modeChange a", function () {
        var t = $(this), e = t.data("mode") || "";
        $("body").attr("class", e), store.set("modeGameBody", e), t.addClass("active").siblings(".active").removeClass("active").parent().hide()
    }), o.on("click", ".game-hd span", function (t) {
        t.preventDefault(), $(this).addClass("cur").siblings().removeClass("cur")
    }), o.on("click", ".l-c-item li", function (t) {
        t.preventDefault(), $(".l-c-item .cur").removeClass("cur"), $(this).addClass("cur")
    })
});