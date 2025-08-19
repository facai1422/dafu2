/**
 * Created by L on 2015/11/17.
 * 通用函数列表  通用功能调用
 */
//通用函数,
/// <reference path="jquery.d.ts" />
var myr;
(function (myr) {
    var common = (function () {
        function common() {
        }
        //主页面载入开奖信息
        common.prototype.load_zhu_kjtime = function (config) {
            var _this = this;
            $('body').stopTime('advancetimer' + config.itemid);
            $('body').stopTime('kjtimer' + config.itemid);
            //获取开奖数据
            $.ajax({
                type: "post",
                data: { id: config.lotteryId },
                url: "/Mobile/Pkbetting/GetScheduleAndIssueNumber",
                dataType: "json",
                success: function (data) {
                    common.checklogintimeout(data);
                    //当前期号
                    var actionNo = data.actionNo;
                    //开奖期号
                    var lastNo = data.preIssueNumber;
                    //开奖剩余倒计时
                    var differ = data.differ;
                    //封单时间
                    var advance = data.advance;
                    //开奖号码
                    var preBonusNumber = data.preBonusNumber;
                    $('#' + config.itemid + ' .zhu_qihao span').text(actionNo);
                    $('#' + config.itemid + ' .zhu_title').text(config.zhu_title);
                    $('#' + config.itemid + ' .zhu_kjtimer').text('00:00:00');
                    $('#' + config.itemid + ' .zhu_betbtn').click(function () {
                        console.info(config);
                        if (config.lotteryId == '41') {
                            location.href = "/Mobile/index/pkmain";
                        }
                        else {
                            location.href = "/Mobile/Betting/type/id/" + config.lotteryId;
                        }
                    });
                    $('#' + config.itemid + ' .zhu_kjtimer').removeClass('fengdan');
                    $('body').everyTime('1s', 'kjtimer' + config.itemid, function () {
                        $('#' + config.itemid + ' .zhu_kjtimer').text(common.formatTime(differ));
                        if (differ <= 0) {
                            $('body').stopTime('kjtimer' + config.itemid);
                            $('#' + config.itemid + ' .zhu_kjtimer').addClass('fengdan');
                            $('#' + config.itemid + ' .zhu_kjtimer').html('封单开奖中:<span id="advance">' + advance + '</span>');
                            $('body').everyTime('1s', 'advancetimer' + config.itemid, function () {
                                $('#advance').text(advance);
                                if (advance <= 0) {
                                    _this.load_zhu_kjtime(config);
                                    $('body').stopTime('advancetimer' + config.itemid);
                                    return;
                                }
                                advance--;
                            });
                        }
                        differ--;
                    });
                }
            });
        };
        //主页面载入开奖信息
        common.prototype.load_pk10_kjtime = function (config) {
            var _this = this;
            $('body').stopTime('advancetimer' + config.itemid);
            $('body').stopTime('kjtimer' + config.itemid);
            //获取开奖数据
            $.ajax({
                type: "post",
                data: { id: config.lotteryId },
                url: "/Mobile/Pkbetting/GetScheduleAndIssueNumber",
                dataType: "json",
                success: function (data) {
                    common.checklogintimeout(data);
                    //当前期号
                    var actionNo = data.actionNo;
                    //开奖期号
                    var lastNo = data.preIssueNumber;
                    //开奖剩余倒计时
                    var differ = data.differ;
                    //封单时间
                    var advance = data.advance;
                    //开奖号码
                    var preBonusNumber = data.preBonusNumber;
                    if (preBonusNumber)
                        $('#' + config.itemid + ' #kjhao').text(preBonusNumber);
                    $('#' + config.itemid + ' .game-no span').text(actionNo);
                    $('#' + config.itemid + ' #lastno span').text(lastNo);
                    $('#' + config.itemid + ' .game-title').text(config.zhu_title);
                    $('#' + config.itemid + ' #game_time').text('00:00:00');
                    $('#' + config.itemid + ' #game_time').removeClass('fengdan');
                    $('body').everyTime('1s', 'kjtimer' + config.itemid, function () {
                        $('#' + config.itemid + ' #game_time').text(common.formatTime(differ));
                        if (differ <= 0) {
                            $('body').stopTime('kjtimer' + config.itemid);
                            $('#' + config.itemid + ' #game_time').addClass('fengdan');
                            $('#' + config.itemid + ' #game_time').html('封单开奖中:<span id="advance">' + advance + '</span>');
                            $('body').everyTime('1s', 'advancetimer' + config.itemid, function () {
                                $('#advance').text(advance);
                                if (advance <= 0) {
                                    _this.load_pk10_kjtime(config);
                                    $('body').stopTime('advancetimer' + config.itemid);
                                    return;
                                }
                                advance--;
                            });
                        }
                        differ--;
                    });
                }
            });
        };
        //只能输入数字
        common.digitOnly = function ($this) {
            var n = $($this);
            var r = /^\+?[1-9][0-9]*$/;
            if (!r.test(n.val())) {
                n.val("");
            }
        };
        common.prototype.set_main_menu_click = function () {
            $('#main_menu a').off().on('click', function () {
                var mode, btn, btnstr;
                var data = $(this).data();
                if (!data.url)
                    return;
                data.mode ? mode = data.mode : mode = 'get';
                btn = data.btn;
                if (!btn) {
                    btnstr = '';
                }
                else {
                    btnstr = {};
                    btnstr[btn] = true;
                }
                $.jBox(mode + ":" + data.url, {
                    top: data.top ? data.top : "20%",
                    border: 3,
                    title: data.title,
                    width: data.width,
                    height: data.height,
                    buttons: btnstr,
                    showScrolling: true,
                    ajaxData: function (h) { console.info(h); }
                });
            });
        };
        //JS操作cookies方法!
        //写cookies
        common.setCookie = function (name, value) {
            var Days = 30;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toUTCString();
        };
        //读取cookies
        common.getCookie = function (name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return decodeURIComponent(arr[2]);
            else
                return null;
        };
        //删除cookies
        common.delCookie = function (name) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = common.getCookie(name);
            if (cval != null)
                document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
        };
        //格式化小数
        common.formatFloat = function (src, pos) {
            return Number(src).toFixed(pos);
            //return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);
        };
        //    计算注数算法集
        /**
         * 全选号码
         *
         * @params            没有参数，函数的this指向$('#num-select')
         * @return            要求返回一个对象{actionData:"1,23,4,5,6",actionNum:2}
         * @throw            遇到不正常时请抛出，系统会自动处理
         */
        common.tzAllSelect = function () {
            var code = [], len = 1, codeLen = parseInt(this.attr('length')), delimiter = this.attr('delimiter') || "";
            //console.log(this.has('.checked'));
            if ($(this).has('.ball-number-current').length != codeLen) {
                throw ('请选' + codeLen + '位数字');
                //$.jBox.tip('请选'+codeLen+'位数字');
                //return false;
            }
            this.each(function (i) {
                //console.log(i);
                var $code = $('.ball-number-current', this);
                if ($code.length == 0) {
                    //throw('选择号码不正确');
                    code[i] = '-';
                }
                else {
                    len *= $code.length;
                    code[i] = [];
                    $code.each(function () {
                        code[i].push(this.innerHTML);
                    });
                    code[i] = code[i].join(delimiter);
                }
            });
            return { actionData: code.join(','), actionNum: len };
        };
        /**
         * 时时彩录入式投注
         * 这种方式投注时可共享DOM和length属性
         */
        common.tzSscInput = function () {
            var codeLen = parseInt(this.attr('length')), codes = [], str = $('.textarea-code', this).val().replace(/[^\d]/g, '');
            if (str.length && str.length % codeLen == 0) {
                if (/[^\d]/.test(str))
                    throw ('投注有错，不能有数字以外的字符。');
                codes = codes.concat(str.match(new RegExp('\\d{' + codeLen + '}', 'g')));
            }
            else {
                throw ('输入号码不正确');
            }
            codes = codes.map(function (code) {
                return code.split("").join(',');
            });
            return { actionData: codes.join('|'), actionNum: codes.length };
        };
        /**
         * 排列组选
         */
        common.tzPermutationSelect = function () {
            var codeLen = parseInt(this.attr('length')), codes = '', $select = $('.haomacontent .ball-number-current'), len;
            if ($select.length < codeLen)
                throw ('请选' + codeLen + '位数');
            var $wei_num, $proj_num = 1;
            $wei_num = $('.checked', $('#wei-shu')).length;
            var played = this.attr('played');
            var $wei_lenght = codeLen;
            if (played == '任选' && $wei_num < $wei_lenght) {
                throw ('请选' + $wei_lenght + '个位置以上');
            }
            else {
                if (played == '任选') {
                    $proj_num = common.factorial($wei_num) / (common.factorial($wei_num - $wei_lenght) * common.factorial($wei_lenght));
                }
            }
            $select.each(function () {
                codes += $(this).text();
            });
            len = common.permutation(codes.split(""), codeLen).length;
            return { actionData: codes, actionNum: len * $proj_num };
        };
        /**
         * 组合组选
         */
        common.tzCombineSelect = function () {
            var codeLen = parseInt(this.attr('length')), codes = '', $select = $('.haomacontent .ball-number-current'), len;
            if ($select.length < codeLen)
                throw ('请选' + codeLen + '位数');
            var $wei_num, $proj_num = 1;
            $wei_num = $('.checked', $('#wei-shu')).length;
            var played = this.attr('played');
            var $wei_lenght = codeLen;
            if (played == '任选' && $wei_num < $wei_lenght) {
                throw ('请选' + $wei_lenght + '个位置以上');
            }
            else {
                if (played == '任选') {
                    $proj_num = common.factorial($wei_num) / (common.factorial($wei_num - $wei_lenght) * common.factorial($wei_lenght));
                }
            }
            $select.each(function () {
                codes += $(this).text();
            });
            len = common.combine(codes.split(""), codeLen).length;
            return { actionData: codes, actionNum: len * $proj_num };
        };
        /**
         * 时时彩录入式组选位数投注
         * 这种方式投注时可共享DOM和length属性
         */
        common.tzSscZuWeiInput = function () {
            var codeLen = parseInt(this.attr('length')), codes = [], weiShu = [], str = $('.textarea-code', this).val().replace(/[^\d]/g, '');
            //if($(':checked',this.prev()).length!=codeLen) throw('请选'+codeLen+'位数');
            var $wei_num, $proj_num;
            $wei_num = $('.checked', $('#wei-shu')).length;
            var played = this.attr('played');
            var $wei_lenght = codeLen;
            if (played == '任选' && $wei_num < $wei_lenght) {
                throw ('请选' + $wei_lenght + '个位置以上');
            }
            else {
                $proj_num = common.factorial($wei_num) / (common.factorial($wei_num - $wei_lenght) * common.factorial($wei_lenght));
            }
            $(':checkbox.icheck', $('#wei-shu')).each(function (i) {
                if (!this.checked)
                    weiShu.push(i);
            });
            if (str.length && str.length % codeLen == 0) {
                if (/[^\d]/.test(str))
                    throw ('投注有错，不能有数字以外的字符。');
                codes = codes.concat(str.match(new RegExp('\\d{' + codeLen + '}', 'g')));
            }
            else {
                throw ('输入号码不正确');
            }
            codes.forEach(function (code) {
                if ((new RegExp("^(\\d)\\1{" + (codeLen - 1) + "}$")).test(code))
                    throw ('组选不能为豹子');
            });
            codes = codes.map(function (code) {
                code = code.split("");
                weiShu.forEach(function (v, i) {
                    code.splice(v, 0, '-');
                });
                return code.join(',');
            });
            return { actionData: codes.join('|'), actionNum: codes.length * $proj_num };
        };
        /**
         * 混合组选录入式投注
         */
        common.tzSscHhzxInput = function () {
            var codeList = $('.list-ball:visible .textarea-code').val(), // 输入号码列表
            played = this.attr('played'), // 玩法：前、后、任选
            z3 = [], // 分解出来的组三列表
            z6 = []; // 分解出来的组六列表
            var o = { "前": [16, 17], "中": [18, 19], "后": [19, 20], "任选": [22, 23] };
            //if(played=='任选' && $('#wei-shu .checked').length!=3) throw('请选3位数');
            var $wei_num, $proj_num = 1;
            $wei_num = $('.checked', $('#wei-shu')).length;
            var played = this.attr('played');
            var $wei_lenght = this.attr('length');
            if (played == '任选' && $wei_num < $wei_lenght) {
                throw ('请选' + $wei_lenght + '个位置以上');
            }
            else {
                if (played == '任选') {
                    $proj_num = common.factorial($wei_num) / (common.factorial($wei_num - $wei_lenght) * common.factorial($wei_lenght));
                }
            }
            codeList = codeList.replace(/[^\d]/gm, '');
            if (codeList.length == 0)
                throw ('请输入号码');
            if (codeList.length % 3)
                throw ('输入号码不正确');
            codeList.replace(/[^\d]/gm, '').match(/\d{3}/g).forEach(function (code) {
                var reg = /(\d)(.*)\1/;
                if (/(\d)\1{2}/.test(code)) {
                    throw ('组选不能为豹子');
                }
                else if (reg.test(code)) {
                    // 组三
                    //z3.push(code.replace(reg,'$1$2'));
                    z3.push(code);
                }
                else {
                    // 组六
                    z6.push(code);
                }
            });
            if (z3.length && z6.length) {
                return [{ playedId: o[played][0], playedName: played + '三组三', actionData: z3.join(','), actionNum: z3.length * $proj_num, isZ6: false },
                    { playedId: o[played][1], playedName: played + '三组六', actionData: z6.join(','), actionNum: z6.length * $proj_num, isZ6: true }];
            }
            else if (z3.length) {
                return { playedId: o[played][0], playedName: played + '三组三', actionData: z3.join(','), actionNum: z3.length * $proj_num, isZ6: false };
            }
            else if (z6.length) {
                return { playedId: o[played][1], playedName: played + '三组六', actionData: z6.join(','), actionNum: z6.length * $proj_num, isZ6: true };
            }
        };
        /**
         * 时时彩龙虎
         *
         * @params			没有参数，函数的this指向$('#num-select')
         * @return			要求返回一个对象{actionData:"1,23,4,5,6",actionNum:2}
         * @throw			遇到不正常时请抛出，系统会自动处理
         */
        common.tzssclh = function () {
            var code = [], len = 1, codeLen = parseInt(this.attr('length'));
            //console.log(this.has('.checked'));
            if ($(this).has('.ball-number-current').length != codeLen)
                throw ('请选' + codeLen + '位数字');
            this.each(function (i) {
                //console.log(i);
                var $code = $('.ball-number-current', this);
                if ($code.length == 0) {
                    //throw('选择号码不正确');
                    code[i] = '-';
                }
                else {
                    len *= $code.length;
                    code[i] = [];
                    $code.each(function () {
                        code[i].push(this.innerHTML);
                    });
                    code[i] = code[i].join("");
                }
            });
            return { actionData: code.join(','), actionNum: len };
        };
        /**
         * 五星定位胆选号
         *
         * @params			没有参数，函数的this指向$('#num-select')
         * @return			要求返回一个对象{actionData:"1,23,4,5,6",actionNum:2}
         * @throw			遇到不正常时请抛出，系统会自动处理
         */
        common.tz5xDwei = function () {
            var code = [], len = 0, delimiter = this.attr('delimiter') || "";
            //console.log(this.has('.checked'));
            //console.info(this.has('.on'));
            //if(this.has('.on').length!=codeLen) throw('请选'+codeLen+'位数字');
            this.each(function (i) {
                //console.log(i);
                var $code = $('.ball-number-current', this);
                if ($code.length == 0) {
                    //throw('选择号码不正确');
                    code[i] = '-';
                }
                else {
                    len += $code.length;
                    code[i] = [];
                    $code.each(function () {
                        code[i].push(this.innerHTML);
                    });
                    code[i] = code[i].join(delimiter);
                }
            });
            if (!len)
                throw ('至少选一个号码');
            return { actionData: code.join(','), actionNum: len };
        };
        /**
         * 不定胆选号
         *
         * @params			没有参数，函数的this指向$('#num-select')
         * @return			要求返回一个对象{actionData:"1,23,4,5,6",actionNum:2}
         * @throw			遇到不正常时请抛出，系统会自动处理
         */
        common.tz5xBDwei = function () {
            var code = "", len = 0, $code = $('.ball-number-current', this);
            len = $code.length;
            var $wei_num;
            var $proj_num = 1;
            $wei_num = $('.checked', $('#wei-shu')).length;
            var played = this.attr('played');
            var $wei_lenght = this.attr('length');
            if (!len)
                throw ('至少选一个号码');
            if (played == '任选' && $wei_num < $wei_lenght) {
                throw ('请选' + $wei_lenght + '个位置以上');
            }
            else {
                if (played == '任选') {
                    $proj_num = common.factorial($wei_num) / (common.factorial($wei_num - $wei_lenght) * common.factorial($wei_lenght));
                }
            }
            $code.each(function () {
                code += this.innerHTML;
            });
            //console.log(code);
            return { actionData: code, actionNum: len * $proj_num };
        };
        /**
         * 十一选五任选玩法投注
         */
        common.tz11x5Select = function () {
            var code = [], len = 1, codeLen = parseInt(this.attr('length')), sType = !!$('.dantuo :radio:checked').val();
            //console.log(this);
            if (sType) {
                // 胆拖方式
                var $d = $(this).filter(':visible:first'), $t = $d.next(), dLen = $('.on', $d).length;
                if (dLen == 0) {
                    throw ('至少选一位胆码');
                }
                else if (dLen >= codeLen) {
                    throw ('最多只能选择' + (codeLen - 1) + '个胆码');
                    //}else if(dLen==1){
                    //	$(':input:visible.code.checked').each(function(i,o){
                    //		code[i]=o.value;
                    //	});
                    //	if(code.length<codeLen) throw('胆码和拖码至少选择'+codeLen+'位数');
                    //
                    //	return {actionData:code.join(' '), actionNum:combine(code, codeLen).length};
                }
                else {
                    var dCode = [], tCode = [];
                    $('.on', $d).each(function (i, o) {
                        dCode[i] = o.innerHTML;
                    });
                    $('.on', $t).each(function (i, o) {
                        tCode[i] = o.innerHTML;
                    });
                    len = common.combine(tCode, codeLen - dCode.length).length;
                    return { actionData: '(' + dCode.join(' ') + ')' + tCode.join(' '), actionNum: len };
                }
            }
            else {
                // 普通方式
                $('.haomacontent .ball-number-current').each(function (i, o) {
                    code[i] = o.innerText;
                });
                if (code.length < codeLen)
                    throw ('至少选择' + codeLen + '位数');
                return { actionData: code.join(' '), actionNum: common.combine(code, codeLen).length };
            }
        };
        /**
         * 时时彩录入式选位数投注
         * 这种方式投注时可共享DOM和length属性
         */
        common.tzSscWeiInput = function () {
            var codeLen = parseInt(this.attr('length')), codes = [], weiShu = [], str = $('.textarea-code', this).val().replace(/[^\d]/g, '');
            var $wei_num, $proj_num;
            $wei_num = $('.checked', $('#wei-shu')).length;
            var played = this.attr('played');
            var $wei_lenght = codeLen;
            if (played == '任选' && $wei_num < $wei_lenght) {
                throw ('请选' + $wei_lenght + '个位置以上');
            }
            else {
                $proj_num = common.factorial($wei_num) / (common.factorial($wei_num - $wei_lenght) * common.factorial($wei_lenght));
            }
            //if($('.checked',$('#wei-shu')).length!=codeLen) throw('请选'+codeLen+'个位数');
            $(':checkbox.icheck', $('#wei-shu')).each(function (i) {
                if (!this.checked)
                    weiShu.push(i);
            });
            if (str.length && str.length % codeLen == 0) {
                if (/[^\d]/.test(str))
                    throw ('投注有错，不能有数字以外的字符。');
                codes = codes.concat(str.match(new RegExp('\\d{' + codeLen + '}', 'g')));
            }
            else {
                throw ('输入号码不正确');
            }
            codes = codes.map(function (code) {
                code = code.split("");
                weiShu.forEach(function (v, i) {
                    code.splice(v, 0, '-');
                });
                return code.join(',');
            });
            return { actionData: codes.join('|'), actionNum: codes.length * $proj_num };
        };
        /**
         * 时时彩录入式选位数投注
         * 这种方式投注时可共享DOM和length属性
         */
        common.lhctmInput = function () {
            var selectstr = new Array(), selectobj, money;
            selectobj = $(".input-text-main[value!='']");
            money = 0;
            selectobj.each(function (v, obj) {
                var inptval = $(obj).val();
                //var numid = $(obj).attr('name');
                var name = $(obj).data('name');
                selectstr.push(name + ':' + inptval);
                money = money + parseFloat(inptval);
            });
            return { actionData: selectstr.join('|'), actionNum: -1, actionMoney: money };
        };
        /**
         * 时时彩录入式选位数投注
         * 这种方式投注时可共享DOM和length属性
         */
        common.bjpk10_pk_Input = function () {
            var selectstr = new Array(), selectobj, money;
            selectobj = $(".pk10-pk[value!='']");
            money = 0;
            selectobj.each(function (v, obj) {
                console.info(obj);
                var inptval = $(obj).val();
                var name = $(obj).data('name');
                selectstr.push(name + ':' + inptval);
                money = money + parseFloat(inptval);
            });
            return { actionData: selectstr.join('|'), actionNum: -1, actionMoney: money };
        };
        /**
         * 排列组选2  除去对子和豹子
         */
        common.tzDesAlgorSelect = function () {
            var code = [], len = 1, codeLen = parseInt(this.attr('length')), delimiter = this.attr('delimiter') || "";
            //console.log(this.has('.checked'));
            if ($(this).has('.ball-number-current').length != codeLen)
                throw ('请选' + codeLen + '位数字');
            this.each(function (i) {
                //console.log(i);
                var $code = $('.ball-number-current', this);
                if ($code.length == 0) {
                    //throw('选择号码不正确');
                    code[i] = '-';
                }
                else {
                    //len*=$code.length;
                    code[i] = [];
                    $code.each(function () {
                        code[i].push($(this).data('h'));
                    });
                    code[i] = code[i].join(delimiter);
                }
            });
            code = code.join(',');
            // 笛卡尔乘取得所投的号码
            len = common.DescartesAlgorithm.apply(null, code.split(",").map(function (v) { return v.split(delimiter); }))
                .map(function (v) { return v.join(','); })
                .filter(function (v) { return (!common.isRepeat(v.split(","))); }) //v.match(/^(\\d)\\1{"+(codeLen-1)+"}/)
                .length;
            return { actionData: code, actionNum: len };
        };
        //是否有重复值
        common.isRepeat = function (arr) {
            var hash = {};
            for (var i in arr) {
                if (hash[arr[i]])
                    return true;
                hash[arr[i]] = true;
            }
            return false;
        };
        /**
         * 笛卡尔乘积算法
         *
         * @params 一个可变参数，原则上每个都是数组，但如果数组只有一个值是直接用这个值
         *
         * useage:
         * console.log(DescartesAlgorithm(2, [4,5], [6,0],[7,8,9]));
         */
        common.DescartesAlgorithm = function () {
            var i, j, a = [], b = [], c = [];
            if (arguments.length == 1) {
                if (!$.isArray(arguments[0])) {
                    return [arguments[0]];
                }
                else {
                    return arguments[0];
                }
            }
            if (arguments.length > 2) {
                for (i = 0; i < arguments.length - 1; i++)
                    a[i] = arguments[i];
                b = arguments[i];
                return arguments.callee(arguments.callee.apply(null, a), b);
            }
            if ($.isArray(arguments[0])) {
                a = arguments[0];
            }
            else {
                a = [arguments[0]];
            }
            if ($.isArray(arguments[1])) {
                b = arguments[1];
            }
            else {
                b = [arguments[1]];
            }
            for (i = 0; i < a.length; i++) {
                for (j = 0; j < b.length; j++) {
                    if ($.isArray(a[i])) {
                        c.push(a[i].concat(b[j]));
                    }
                    else {
                        c.push([a[i], b[j]]);
                    }
                }
            }
            return c;
        };
        /**
         * 组合算法
         *
         * @params Array arr		备选数组
         * @params Int num
         *
         * @return Array			组合
         *
         * useage:  combine([1,2,3,4,5,6,7,8,9], 3);
         */
        common.combine = function (arr, num) {
            var r = [];
            (function f(t, a, n) {
                if (n == 0)
                    return r.push(t);
                for (var i = 0, l = a.length; i <= l - n; i++) {
                    f(t.concat(a[i]), a.slice(i + 1), n - 1);
                }
            })([], arr, num);
            return r;
        };
        /**
         * 排列算法
         */
        common.permutation = function (arr, num) {
            var r = [];
            (function f(t, a, n) {
                if (n == 0)
                    return r.push(t);
                for (var i = 0, l = a.length; i < l; i++) {
                    f(t.concat(a[i]), a.slice(0, i).concat(a.slice(i + 1)), n - 1);
                }
            })([], arr, num);
            return r;
        };
        common.mycr = function (data, key, iv, id, iszhuihao) {
            if (!iszhuihao) {
                data = JSON.stringify(data);
            }
            if (!id)
                id = 0;
            var v_num = parseInt(5) + parseInt(id);
            var v_str = $.md5(key).substr(0, 5) + $.md5(iv).substr(5, 5) + '+';
            var re = Base64.encode(data);
            var c = re.substr(0, v_num) + v_str + re.substr(v_num);
            return c;
        };
        /**
         * 清除号码
         *
         * @params bool isSelected	是否只清除选中的项，默认false
         */
        common.RemoveAllCode = function (isSelected) {
            if (isSelected == true) {
                $('#J-balls-order-container li').remove();
            }
            $('.ball-list .ball-number').removeClass('ball-number-current');
            $('#js_btn_zhuiBet').removeData();
            $('#betnum').text('0');
            $('#betmoney').text('0.00');
            myr.gamebet.gameCalcAmount();
        };
        //将秒格式化为时间显示
        common.formatTime = function (second) {
            return [parseInt(second / 60 / 60), parseInt(second / 60 % 60), parseInt(second % 60)].join(":")
                .replace(/\b(\d)\b/g, "0$1");
        };
        //公用正确提示
        common.success = function (msg) {
            layer.open({
                content: msg,
                style: 'background-color:red; color:#fff; border:none;' //自定风格
                ,
                time: 3
            });
        };
        //公用错误提示
        common.error = function (msg) {
            layer.open({
                content: msg,
                style: 'background-color:green; color:#fff; border:none;' //自定风格
                ,
                time: 3
            });
        };
        //拆单
        common.cancelbet = function (id) {
            layer.open({
                content: '确定要取消该投注吗？',
                btn: ['撤单', '不要'],
                yes: function (index) {
                    layer.close(index);
                    $.post("/game/ajax_cancelbet", { id: id }, function (data) {
                        if (data.code == 1) {
                            common.success(data.msg);
                            location.reload();
                        }
                        else {
                            common.error(data.msg);
                        }
                    }, "json");
                }
            });
        };
        //积分兑换
        common.jifen_dh = function () {
            var coinpwd = $('#coinpwd').val();
            if (!coinpwd) {
                $.jBox.tip('请输入您的资金密码', 'error');
                return false;
            }
            var score = $('#score').val();
            var user_integral = $('#user_integral').val();
            if (score > user_integral) {
                $.jBox.tip('您的积分不够本次兑换', 'error');
                return false;
            }
            $.jBox.confirm("确定兑换吗？", "提示", function (v, h, f) {
                if (v == 'ok') {
                    $.post('/integral/doswap.html', { score: score, coinpwd: coinpwd }, function (data) {
                        if (data.status == 1) {
                            $.jBox.tip(data.info, 'success');
                            $('#jfdhlink').trigger('click');
                            //location.reload();
                        }
                        else {
                            $.jBox.tip(data.info, 'error');
                        }
                    }, 'json');
                }
                return true;
            }, { top: "35%" });
        };
        //播放音乐
        common.play_sound = function (mp3path, divid) {
            /*if($.browser.msie && $.browser.version=='8.0'){
                $('#'+divid).html('<embed src="'+mp3path+'"/>');
            }else{
                $('#'+divid).html('<audio autoplay="autoplay"><source src="'+mp3path+'"'  + 'type="audio/wav"/><source src="'+mp3path+'" type="audio/mpeg"/></audio>');
            }*/
            common.playVoice(mp3path, divid);
        };
        //播放声音
        common.playVoice = function (src, domId) {
            if (common.getVoiceStatus() == 'off')
                return;
            var $dom = $('#' + domId);
            if ($.browser.msie) {
                // IE用bgsound标签处理声音
                if ($dom.length) {
                    $dom[0].src = src;
                }
                else {
                    $('<bgsound>', { src: src, id: domId }).appendTo('body');
                }
            }
            else {
                // IE以外的其它浏览器用HTML5处理声音
                if ($dom.length) {
                    //$dom[0].play();
                }
                else {
                    //$('<audio>',{src:src, id:domId}).appendTo('body')[0].play();
                }
            }
        };
        common.setVoiceStatus = function (flag) {
            var session = (typeof sessionStorage != 'undefined');
            var key = 'voiceStatus';
            if (session) {
                if (!flag) {
                    sessionStorage.setItem(key, 'off');
                }
                else {
                    sessionStorage.removeItem(key);
                }
            }
            else {
                if (!flag) {
                    $.cookie(key, 'off');
                }
                else {
                    $.cookie(key, null);
                }
            }
        };
        common.getVoiceStatus = function () {
            var key = 'voiceStatus';
            if (typeof sessionStorage != 'undefined') {
                return sessionStorage.getItem(key);
            }
            else {
                return $.cookie(key);
            }
        };
        //更新用户金额
        common.update_money = function () {
            $.get("/game/ajax_getmoney", function (data) {
                if (data.status == 1) {
                    $('#GamePoint_id').text(data.info.money);
                    $('#AvailablePoint_id').text(data.info.fmoney);
                    $('#FreezePoint_id').text(data.info.integral);
                    //$('#user_money').text(data.info);
                }
            });
        };
        //验证是否登陆超时
        common.checklogintimeout = function (data) {
            //console.info(data.info );
            if ((data.status == 0 && data.info == '您未登录或登陆超时') || data.status == 99) {
                alert(data.info);
                location.href = '/Mobile';
                return;
            }
        };
        //计算阶乘
        common.factorial = function (num) {
            if (num <= 1) {
                return 1;
            }
            else {
                return num * common.factorial(num - 1);
            }
        };
        return common;
    }());
    myr.common = common;
})(myr || (myr = {}));
