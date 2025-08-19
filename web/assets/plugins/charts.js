!function (e, t) {
    var a = function () {
        var a, o, i = !1, n = !0, s = function () {
            return function (e, a) {
                for (var o, i, n, s, l, r, h, d, c, f, v, u, m, p, b, w, g, y, x = (e = e || []).length, C = [], A = 0; A < x; A += 1) i = e.eq(A), void 0, y = (g = i).position(), (l = {
                    width: parseInt(g.outerWidth()),
                    height: parseInt(g.outerHeight()),
                    left: parseInt(y.left),
                    top: parseInt(y.top)
                }).left += parseInt(l.width / 2), A > 0 && (r = n, h = s, d = l.left, c = l.top, f = a, v = void 0, void 0, void 0, void 0, void 0, w = void 0, u = Math.min(r, d) - 1, m = Math.min(h, c) - 1, p = Math.abs(Math.floor(r - d)) + 2, b = Math.abs(Math.floor(h - c)) + 2, (w = t.createElement("canvas")).width = p, w.height = b, w.style.top = m + "px", w.style.left = u + "px", (v = w.getContext("2d")).lineWidth = 2, v.strokeStyle = f || "#E4A8A8", v.moveTo(r - u, h - m - 1), v.lineTo(d - u, c - m + 1), v.stroke(), o = w, C.push(o)), n = l.left, s = l.top + l.height;
                return C
            }
        }();

        function l(n) {
            var s, l = e(".chartsTable");
            s = template("_t_charts_frame", {
                title: n.lotteryname,
                hideZero: i,
                codeArray: a,
                placeArray: o
            }), i ? l.addClass("small") : l.removeClass("small"), l.html(s), s = template("_t_charts_dataRow", {
                dataArray: n.reslist,
                lostArray: n.maxyl,
                timesArray: n.appearTimes,
                hideZero: i,
                codeArray: a,
                placeArray: o
            }), e(".canvasBox").hide(), l.find("tbody").html(s), setTimeout(r, 100), e.each(l.find(".lazyShow"), function (t) {
                var a = e(this);
                setTimeout(function () {
                    a.removeClass("lazyShow")
                }, 50 + 5 * t)
            }), t.title = n.lotteryname + "~走势图"
        }

        function r() {
            if (!n) return e(".canvasBox").slideUp(), !1;
            var t, a = e(".chartsTable .ball"), i = [];
            e.each(o, function (e, o) {
                t = s(a.filter("." + o.id), e % 2 ? "#f66" : "#69f"), i.push.apply(i, t)
            }), e(".canvasBox").html(i).slideDown()
        }

        return {
            refresh: function () {
                var t, n, s, r, h = location.hash || "";
                n = (t = (h = h.replace(/[^\w\/]/gi, "")).split("/"))[0] || "cqssc", s = t[1] || 10, (isNaN(s) || s < 0) && (s = 10), e(".tools .link").removeClass("active").filter("[data-size=" + s + "]").addClass("active"), /pk10/g.test(r = n) ? (i = !0, a = ["~", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10"], o = [{
                    id: "ww",
                    label: "冠军"
                }, {id: "qw", label: "亚军"}, {id: "bw", label: "季军"}, {id: "sw", label: "第四"}, {
                    id: "gw",
                    label: "第五"
                }]) : (/11x5/g.test(r) ? (i = !0, a = ["~", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]) : (i = !1, a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), o = [{
                    id: "ww",
                    label: "万位走势"
                }, {id: "qw", label: "千位走势"}, {id: "bw", label: "百位走势"}, {id: "sw", label: "十位走势"}, {
                    id: "gw",
                    label: "个位走势"
                }]), doAjaxPack("/test_api/zs_api.json", {shortName: n, num: s}, l)
            }, showLine: function (e) {
                n = e, r()
            }
        }
    }();
    e(window).off("load.page hashchange.page resize.page").on({
        "load.page hashchange.page": a.refresh,
        "resize.page": a.showLine
    }), e(function () {
        e("#chbOmit").on("change", function () {
            var t = e(".chartsTable");
            this.checked ? t.removeClass("hideSpan") : t.addClass("hideSpan")
        }), e("#chbLine").on("change", function () {
            a.showLine(this.checked)
        }), e(".link").on("click", function () {
            var t, a, o = location.hash || "", i = e(this).data("size");
            a = (t = o.match(/([a-z0-9]+)/gi)) ? t[0] : "cqssc", location.href = "#" + a + "/" + i
        }), function () {
            var a, o, i = e(t);

            function n(t, i) {
                o == i && a && clearTimeout(a), o = i, $allRow = t.parents("table").find("tbody tr").not(".total"), e.each($allRow, function () {
                    e(this).children().eq(i).addClass("active")
                })
            }

            i.on("mouseout", "td", function () {
                var t = e(this).parents("table").find("tbody .active");
                t.length && (a = setTimeout(function () {
                    t.removeClass("active")
                }, 50))
            }), i.on("mouseover", "thead td.hover", function () {
                var t = e(this);
                n(t, t.index() + 2)
            }), i.on("mouseover", "tbody td.normal,tbody .ball,tbody td.hover", function () {
                var t, a = e(this);
                a.hasClass("ball") && (a = a.parents("td")), t = a.index(), a.hasClass("hover") && (t += 1), n(a, t)
            }), i.on("mouseover", "tfoot td.hover", function () {
                var t = e(this);
                n(t, t.index())
            })
        }()
    })
}($, document);