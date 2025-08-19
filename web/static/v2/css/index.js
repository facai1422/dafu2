$(document).ready(function () {

    //顶部全部游戏菜单
    if ($("#header .snav").size() > 0) { 
        $("#header .snav .snav_all").hover(function () {
            $(this).children(".snav_all_menu").show();
        }, function () {
            $(this).children(".snav_all_menu").hide();
        });

        //顶部我的账户触碰菜单
        $("#myaccount").hover(function () {
            $(this).children(".myaccount_list").show();
        }, function () {
            $(this).children(".myaccount_list").hide();
        });
    }
    //站内信效果
    if ($("#myInfo").size() > 0) {
        $("#myInfo").hover(function () {
            $(this).children(".messageShow").show();
        }, function () {
            $(this).children(".messageShow").hide();
        });

        //更新头部站内信信息
        ruiec_InsideLetter();
        setInterval(function () { ruiec_InsideLetter(); }, 30000);
        ruiec_Notice();
    };

     
    //首页低频彩滚动
    if ($(".ibox_gp").size() > 0) {
        var oDp_li = $(".ibox_gp ul li");
        var oCont1 = oDp_li.eq(0).find(".list_cont_wrap");
        var oCont2 = oDp_li.eq(1).find(".list_cont_wrap");
        var oCont3 = oDp_li.eq(2).find(".list_cont_wrap");
        var oTimer1 = setInterval(function () {
            oCont1.stop().animate({ "margin-top": "-18px" }, function () {
                $(this).append(oCont1.children("i").eq(0)).css({ "margin-top": "0px" }).children("i").removeClass("curr").eq(1).addClass("curr");
            });

        }, 1500);
        var oTimer2 = setInterval(function () {
            oCont2.stop().animate({ "margin-top": "-18px" }, function () {
                $(this).append(oCont2.children("i").eq(0)).css({ "margin-top": "0px" }).children("i").removeClass("curr").eq(1).addClass("curr");
            });

        }, 1500);
        var oTimer3 = setInterval(function () {
            oCont3.stop().animate({ "margin-top": "-18px" }, function () {
                $(this).append(oCont3.children("i").eq(0)).css({ "margin-top": "0px" }).children("i").removeClass("curr").eq(1).addClass("curr");
            });

        }, 1500);

    }

    //登录页面提示 
    if ($(".input_text").size() > 0) {
        var oInput = $(".input_text");
        var oInput_size = oInput.size();
        for (var a = 0; a < oInput_size; a++) {
            var oInput_ts = oInput.eq(a).attr("fn_ts");
            var oTs_width = oInput.eq(a).width();
            var oInput_insert = '<i class="ts">' + oInput_ts + '</i>';
            oInput_insert = $(oInput_insert);         //先把插入的元素转化成对象，然后再设置宽度
            oInput_insert.width(oTs_width);
            oInput.eq(a).after(oInput_insert);
        };
        $(".ts").click(function () {
            $(this).hide().siblings(".input_text").focus();;
        });
        oInput.blur(function () {
            if ($(this).val() == '') {
                $(this).siblings(".ts").show();
            };
        });
        setTimeout(function () {
            for (var a = 0; a < oInput_size; a++) {
                if (oInput.eq(a).val() == '') {
                    oInput.eq(a).siblings(".ts").show();
                }
                else {
                    oInput.eq(a).siblings(".ts").hide();
                };
            };
        }, 1000);
        oInput.keydown(function () {
            $(this).siblings(".ts").hide();
        });
    };

    //点击选择银行
    /*$(".choiceBank").click(function(){
		var oList=$(this).children(".c_list");
		var oList_item=oList.children(".icon_bank").size();
		if(oList_item>0)
		{
			oList.toggle();		
		}
		else
		{
			return false;	
		};	
	});
	$(".choiceBank .icon_bank").click(function(){
		var oVal=$(this).attr("val");	
		var oClass=$(this).attr("class");
		var oSelect="<span class='"+oClass+"'></span>" //插入到选中的银行项目
		$(this).siblings("#cband").val(oVal);
		$("#selectBank").empty().append(oSelect);
		$(this).parents(".choiceBank").find(".iconfont").css({"margin-top":"6px","font-size":"14px"});
	});*/

    //点击选择银行
    if ($(".choiceBank").size() > 0) {
        $(".choiceBank").click(function () {
            var oList = $(this).children(".c_list");
            var oList_item = oList.children(".icon_bank").size();
            if (oList_item > 0) {
                oList.toggle();
            }
            else {
                return false;
            };
        });

        $(".choiceBank .icon_bank").click(function () {
            var oVal = $(this).attr("val");
            var oName = $(this).attr("name");
            var cCode = $(this).attr("data-code");
            var oClass = $(this).attr("class");
            var oSelect = "<span class='" + oClass + "'></span>" //插入到选中的银行项目
            if ($("#fastIDVal").size() > 0) $("#fastIDVal").val(cCode);
            $(this).siblings(".cband").val(oName);
            $(this).siblings(".cband").attr("choiceName", oName)
            $(this).siblings(".cband").attr("data-code", cCode)
            $(this).parents('.choiceBank').find(".selectBank").empty().append(oSelect);
            $(this).parents(".choiceBank").find(".iconfont").css({ "margin-top": "6px", "font-size": "14px" });
            $(this).parents(".choiceBank").find(".icon_bank").css('width', '125px');
            var oWeb = $(this).attr("website");
            $(".jump").attr("website", oWeb);
            $("#bankcode").val(oName)
        });
    }
     
    //点击选择银行
    if ($(".choiceBank_tx").size() > 0) {
        $(".choiceBank_tx").click(function () {
            var oList = $(this).children(".c_list");
            var oList_item = oList.find("li").size();
            if (oList_item > 0) {
                oList.toggle();
            }
            else {
                return false;
            };
        });

        $(".choiceBank_tx ul li").click(function () {
        	$(this).children("input").prop("checked",true);
            var oVal = $(this).children(".icon_bank").attr("val");
            var oName = $(this).children(".icon_bank").attr("name");
            var oValue = $(this).children(".icon_bank").attr("value");
            var oClass = $(this).children(".icon_bank").attr("class");
            var oSelect = "<span class='" + oClass + "'></span>" //插入到选中的银行项目
            $(this).parents(".c_list").find(".cband").val(oValue);
            $(this).parents(".c_list").find(".cband").attr("choiceName", oName)
            $(this).parents('.choiceBank_tx').find(".selectBank").empty().append(oSelect);
            $(this).parents(".choiceBank_tx").find(".iconfont").css({ "margin-top": "6px", "font-size": "14px" });
            $(this).parents(".choiceBank_tx").find(".icon_bank").css('width', '125px');
            var oWeb = $(this).attr("website");
            $(".jump").attr("website", oWeb);
        });
    } 

    //转账限额
    $("#transfer_num").keyup(function () {
        var oMaxmoney = $(this).attr("tMax");  //最大限额
        var oVal = $(this).val();
        oVal = parseInt(oVal);
        if (oVal > oMaxmoney) {
            $(this).val(oMaxmoney);
        };
    });

    /*******************
     *  Date:2015-03-05
     *  Fn: 会员中心——展开收起  
     **********************/
    $(".invest .btn_zk").click(function () {
        var theStatue = $(this).attr("statue");
        var oText = $(this).html();
        if (theStatue == undefined || theStatue == "true") {
            $(this).empty().html("收起&and;");
            $(this).attr("statue", "false");
        }
        else {
            $(this).empty().html("展开&or;");
            $(this).attr("statue", "true");
        };
        $(this).parents(".invest").find(".toggle").toggle();
    });

    //开户中心条件btn切换
    $(".ty_item").click(function () {
        $(this).addClass("curr").siblings(".ty_item").removeClass("curr");
    });

    //开户中心彩种切换
    $(".table_setDetail th a").click(function () {
        $(this).addClass("curr").siblings("a").removeClass("curr");
        var oIndex = $(this).index();  //获取索引
        $(this).parents(".table_setDetail").find(".tab_item").removeClass("curr").eq(oIndex).addClass("curr");
    });

    //开户中心返点设置
    $(".ty_item").click(function () {
        var oHiddenFd = $(this).siblings("#setFD"); //隐藏返点值
        if (oHiddenFd.size() > 0) {
            var oVal = $(this).attr("oVal");
            oHiddenFd.val(oVal);
        };
    });
    $("#QuickSetup").click(function () {
        $(".tr_quick").show();
        $(".tr_detail").hide();
    });
    $("#DetailedSettings").click(function () {
        $(".tr_quick").hide();
        $(".tr_detail").show();
    });
    //开户中心点击”返点全满“,”零佣金“按钮对表单操作
    $(".table_setDetail .fd_btn").click(function () {
        var oCheck = $(this).parents(".table_setDetail").find(".check_detail");
        var oInputText = $(this).parents(".table_setDetail").find(".ty_text");
        for (var a = 0; a < oCheck.size() ; a++) {
            oCheck.eq(a)[0].checked = true;
        };

        var oId = $(this).attr("id");
        if (oId == 'fd_all') //返点全满
        {
            for (var b = 0; b < oInputText.size() ; b++) {
                var oMax = parseFloat(oInputText.eq(b).attr("maxvalue"));  //获取每个Input最大值
                if (oMax == 0 || isNaN(oMax)) {
                    oMax = parseFloat(oInputText.eq(b).attr("maxval"));
                }
                if(oMax>0)
                {
                	oMax = oMax.toFixed(1);
                }
                else
                {
                	oMax = 0.0;
                };
                oInputText.eq(b).val(oMax);
            };
        }
        else //零佣金
        {
            for (var b = 0; b < oInputText.size() ; b++) {
                oInputText.eq(b).val("0.0");
            };
        };

    });

    //会员中心站内信点击全选
    $("#check_letter").click(function () {
        var oCheck = $(".table_letter .ch");
        if ($(this)[0].checked == true) {
            for (var a = 0; a < oCheck.size() ; a++) {
                oCheck.eq(a)[0].checked = true;
            };
        }
        else {
            for (var a = 0; a < oCheck.size() ; a++) {
                oCheck.eq(a)[0].checked = false;
            };

        };
    });

    //会员中心站内信快捷回复
    $(".details_left .details_post_time a").click(function () {
        var postName = $(this).parent().next(".hideThis").val();
        var postTite = $(this).parent().prevAll(".details_title").children("a").text();
        if (postTite.indexOf("回复：") < 0) {
            postTite = "回复：" + postTite;
        }
        var str = "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"table_code\">";
         str += "<tr>";
         str += "<th scope=\"row\">主题：";
         str += "</th>";
         str += "<td>";
         str += "<input type=\"text\" class=\"ty_text\" maxlength=\"30\" id=\"msg_title\" name=\"title\" value=\"" + postTite + "\"/>";
         str += "<span class=\"c_6\">主题长度不得超过30字符</span>";
         str += "</td>";
         str += "</tr>";
         str += "<tr>";
         str += "<th scope=\"row\">正文：";
         str += "</th>";
         str += "<td>";
         str += "<textarea class=\"ty_textarea \" id=\"msg_textarea\" maxlength=\"300\" name=\"content\"></textarea>";
         str += "<span class=\"c_6\">正文长度不得超过300字符</span>";
         str += "</td>";
         str += "</tr>";
         str += "</table>";
        artDialog({
            title: "回复信息",
            content: str,
            ok: function () {
                var tite = $("#msg_title").val();
                var text = $("#msg_textarea").val();
                if (postName == undefined || postName == null || $.trim(postName) == "") {
                    alert("非法操作，请刷新界面后再操作！");
                    return false;
                }
                if (tite == undefined || tite == null || $.trim(tite) == "") {
                    alert("主题不允许为空！");
                    return false;
                } else if (tite.length > 30) {
                    alert("主题长度不得超过30字符！");
                    return false;
                }
                if (text == undefined || text == null || $.trim(text) == "") {
                    alert("正文不允许为空！");
                    return false;
                } else if (text.length > 30) {
                    alert("正文长度不得超过300字符！");
                    return false;
                }
                var oData = {};
                oData._title = tite;
                oData._content = text;
                oData.action = "postMail";
                oData.dt_ssc_users = postName;
                $.ajax({
                    type: "POST",
                    url: window.location.href,
                    data: oData,
                    dataType: "json",
                    success: function (data) {
                        var oCode = data.Code; //如果等于1则兑换成功，按钮变灰色
                        var oMessage = data.StrCode //提示信息
                        if (oCode == 1) {
                            artDialog({
                                lock: true,
                                icon: "success",
                                content: "回复成功",
                                ok: function () { location.href = window.location.href;}
                            })
                        } else {
                            artDialog({
                                lock: true,
                                icon: "warning",
                                content: oMessage,
                                ok: function () {}
                            })
                        }
                    }
                });
            },
            okMsg: "确定",
            cancel:"取消",
            lock: true
        });
    });

    //通用只能输入数字
    $(".onlyNum").onlyNum();

    ruiec_changeAlert();

    //首页模拟点击确认
    if ($("#login2").size() > 0) {
        $(document).keydown(function (event) {
            //移到外部处理
            //var oKeyCode = event.keyCode;
            //if (oKeyCode == 13) {
            //    $(".input_sub").trigger("click");
            //};
        });
    };

    //查看参与的合买用户的下拉效果  creat-time 2015 05 27 ； author ：ruiec_lrx
    if ($("#look_more_hemai").size() > 0) {
        $("#look_more_hemai").click(function () {
            $(".join_userlist").slideToggle();
        });
    }

    //点击未开放提示
    $(".unOpen").click(function () {
        artDialog({
            icon: "warning",
            content: "暂未开放此功能！",
            ok: function () {

            },
            lock: true

        });
    });

    //页面导航聚焦效果
    var this_Url = $(".nav_item").attr("value");
    if (this_Url == undefined) { this_Url == "index.aspx"; }
    var the_curr_obj = $(".nav_item a[href$='" + this_Url + "']").eq(0);
    if (the_curr_obj != undefined) {
        the_curr_obj.parent().siblings().find("a").removeClass("curr");
        the_curr_obj.addClass("curr");
    }

    //下级转账
    $(".table_code .fn_zzObj").click(function () {
        $(this).children(".transfer").removeAttr("disabled");
        $(this).siblings(".fn_zzObj").children(".transfer").attr("disabled", "disabled");
        var oVal = $(this).children(".transfer").attr("value");
        if (oVal == 2) {
            $("#child_user_infos").show();
        }
        else {
            $("#child_user_infos").hide();
        };

    });

    //转账添加下级用户
    $("#btn_addLow").click(function () {
        var oAddUser = $(this).attr("addUser");
        var oAddUser_arry = oAddUser.split(",");
        var oAddLabel = "";
        var oAddlabel_div = "";
        for (var a = 0; a < oAddUser_arry.length; a++) {
            oAddLabel = "<label lab='" + a + "'><input type='checkbox'/><a>" + oAddUser_arry[a] + "</a></label>";
            oAddlabel_div = oAddlabel_div + oAddLabel;
        };
        var oDiv = "<div id='transfer_choiceUser'>" +
					"<dl>" +
						"<dt><label>搜索用户：</label><input class='ty_text' type='text' id='serch_text'/><input class='ty_btn' type='button' value='搜索' id='serch_btn' /></dt>" +
						"<dd class='u_list'>" + oAddlabel_div + "</dd>" +
						"<dd class='u_ch'>" +
							"<span class='fl'><label><input name='ch' type='radio' id='choice_all'/>全选</label><label><input id='choice_none'  name='ch' type='radio'/>反选</label></span>" +
							"<span class='fr'><input class='ty_btn' id='choice_sub' type='button' value='添加'/></span>" +
						"</dd>" +
					"</dl>" +
				 "</div>"

        artDialog({
            title: "添加转账用户",
            content: oDiv, 
            lock: true 
        });
    });
     
    //添加转账用户效果
    $("body").on("click", "#serch_btn", function () {
        oTextval = $(this).siblings("#serch_text").val();
        var u_label = $(this).parents("#transfer_choiceUser").find(".u_list").children("label");
        var oP = "<p class='ts_text'><i class='iconfont'>&#xe63c;</i>找不到此玩家，请确认输入</p>"
        var oFind = 0; //是否找到该玩家
        if (oTextval !== '') {

            for (var a = 0; a < u_label.size() ; a++) {

                if (oTextval == u_label.eq(a).children("a").text()) {
                    u_label.hide().eq(a).show();

                    oFind = 1;
                }
            };
            if (oFind == 0) {
                u_label.hide();
                $(".ts_text").remove();
                $(this).parents("#transfer_choiceUser").find(".u_list").append(oP);
            }
            else {
                $(".ts_text").remove();
            };
        }
        else {
            $(".ts_text").remove();
            u_label.show();
        };
    });

    //转账用户全选功能
    $("body").on("click", "#choice_all", function () {
        $("#transfer_choiceUser .u_list label input").prop("checked", true);
    });

    //反选
    $("body").on("click", "#choice_none", function () {
        $("#transfer_choiceUser .u_list label input").prop("checked", false);
    });

    //提交添加账户用户
    $("body").on("click", "#choice_sub", function () {
        var oChoice = $("#transfer_choiceUser .u_list label");
        var oCarry = new Array();
        var oCarry_str = "";
        var oChoiceItem_a = "";
        for (a = 0; a < oChoice.length; a++) {
            if (oChoice.eq(a).children("input").prop("checked") == true) {
                var oChoiceItem = oChoice.eq(a).children("a").text(); 
                oChoiceItem_a += "<a class='a_item'><i class='i_val'>" + oChoiceItem + "</i><i class='iconfont'>&#xe626;</i></a>"; 
                oCarry.push(oChoiceItem); 
                oCarry_str += oChoiceItem + ",";  
            };
        }; 
        $("#insertWrap").empty().html(oChoiceItem_a);
        $("#hid").val(oCarry);

        if (oCarry.length != 0 && $(".aui_state_focus").size()>0) {
            $("body div").last().parent().remove();
            $(".aui_state_focus").remove();
        };
    });

    $("body").on("click", "#child_user_infos .a_item .iconfont", function () {
        $(this).parent(".a_item").remove(); 
        var _theInfos = new Array();
        $("#child_user_infos .a_item").each(function () {
            var oChoiceItem = $(this).children(".i_val").text();
            _theInfos.push(oChoiceItem);
        });
        $("#hid").val(_theInfos);
    });

    //登陆页效果
    if ($("#login2 .login_t .l_question").size() > 0) {
        $("#login2 .login_t .l_question").animate({ "top": "60px" }, function () {
            $(this).animate({ "top": "30px" }, 200, function () {
                $(this).animate({ "top": "45px" }, 100, function () {
                    $(this).animate({ "width": "210px" });
                });
            });
        });
    }

    //头部金额处理
    if ($("#get_money").size() > 0) {
        //头部显示我的余额
        $("#show_money i").click(function () {
            var theValue = $("#get_money").find("em").text() == undefined ? 0.00 : $("#get_money").find("em").text();
            theValue = isNaN(parseFloat(theValue).toFixed(2)) ? 0.00 : parseFloat(theValue).toFixed(2);
            $("#get_money").find("em").empty().text(theValue);
            $(this).parents("#show_money").hide().siblings("#get_money").show();
        });

        //头部显示我的余额
        $("#get_money").click(function () {
            $(this).stop(true).hide();
            $("#show_money").stop(true).show();
        });

        //更新我的金额
        $("#get_money .iconfont").click(function (event) {
            event.stopPropagation();
            ruiec_ajaxUpdateMoney();  //更新我的余额
        });
    }

    //==========================
    //开户中心--手动代理开户点击提交
    if ($("#openAgent_sd_btn").size() > 0) { 
        $("#openAgent_sd_btn").click(function () {
            var oInput_text = $(".table_setDetail .ty_text");
            var oIsPost = true;  //是否调取ajax
            var opoint_json = "";
            for (var a = 0; a < oInput_text.size() ; a++) {
                var opoint_val = $("#Rebate").val();// oInput_text.eq(a).val();
                var opoint_span = oInput_text.eq(a).siblings("span").attr("point_id");
                if (opoint_val == '') {
                    oInput_text.eq(a).addClass("error");
                    oIsPost = false;
                }
                else {
                    oInput_text.eq(a).removeClass("error");
                    if (a == oInput_text.size() - 1) {
                        opoint_json = opoint_json + opoint_span + "#" + opoint_val;
                    }
                    else {
                        opoint_json = opoint_json + opoint_span + "#" + opoint_val + "@";
                    }

                };
            };

            if (oIsPost == true) {
                var oData = {};
                if ($("#userAgent").hasClass("curr"))  //判断是代理还是玩家、如果是代理则为1，如果是玩家则为2
                {
                    oData.user_type_id = 1;
                }
                else {
                    oData.user_type_id = 2;
                };

                var userName = $("#userName1").val();
                oData.eff_time = $("#linkDays").val();
                oData.pointJson = opoint_json;
                oData.action = "addUser";
                oData.userName = userName; 

                $.ajax({
                    type: "POST",
                    url: "/aspx/ssc/user_account_proxy_openAgent_sd.aspx",
                    data: oData,
                    dataType: "json",
                    success: function (data) {
                        var oCode = data.code;
                        var oStrCode = data.StrCode;
                        if (oCode != 1) {
                            alert(oStrCode);
                        }
                        else {
                            alert("提交成功！")
                        };
                    }
                });

            }
            else {
                return false;
            };

        });
    }

    //开户中心--手动用户开户点击提交
    if ($("#openPlayer_sd_btn").size() > 0) { 
        $("#openPlayer_sd_btn").click(function () {
            var oInput_text = $(".table_setDetail .ty_text");
            var oIsPost = true;  //是否调取ajax
            var opoint_json = "";
            for (var a = 0; a < oInput_text.size() ; a++) {
                var opoint_val = $("#Rebate").val();// oInput_text.eq(a).val();
                var opoint_span = oInput_text.eq(a).siblings("span").attr("point_id");
                if (opoint_val == '') {
                    oInput_text.eq(a).addClass("error");
                    oIsPost = false;
                }
                else {
                    oInput_text.eq(a).removeClass("error");
                    if (a == oInput_text.size() - 1) {
                        opoint_json = opoint_json + opoint_span + "#" + opoint_val;
                    }
                    else {
                        opoint_json = opoint_json + opoint_span + "#" + opoint_val + "@";
                    }

                };
            };
            
            if (oIsPost == true) {
                var oData = {};
                if ($("#userAgent").hasClass("curr"))  //判断是代理还是玩家、如果是代理则为1，如果是玩家则为2
                {
                    oData.user_type_id = 1;
                }
                else {
                    oData.user_type_id = 2;
                };

                var userName = $("#userName1").val();
                oData.eff_time = $("#linkDays").val();
                oData.pointJson = opoint_json;
                oData.action = "addUser";
                oData.userName = userName;
                 
      
                $.ajax({
                    type: "POST",
                    url: "/aspx/ssc/user_account_proxy_openPlayer_sd.aspx",
                    data: oData,
                    dataType: "json",
                    success: function (data) {
                        var oCode = data.code;
                        var oStrCode = data.StrCode;
                        if (oCode != 1) {
                            alert(oStrCode);
                        }
                        else {
                            alert("提交成功！")
                        };
                    }
                });

            }
            else {
                return false;
            };

        });
    }

    //开户中心点击提交
    if ($("#openAgent_btn").size() > 0) {

        $("#openAgent_btn").click(function () {
            var oInput_text = $(".table_setDetail .ty_text");
            var oIsPost = true;  //是否调取ajax
            var opoint_json = "";
            for (var a = 0; a < oInput_text.size() ; a++) {
                var opoint_val = oInput_text.eq(a).val();
                var opoint_span = oInput_text.eq(a).siblings("span").attr("point_id");
                if (opoint_val == '') {
                    oInput_text.eq(a).addClass("error");
                    oIsPost = false;
                }
                else {
                    oInput_text.eq(a).removeClass("error");
                    if (a == oInput_text.size() - 1) {
                        opoint_json = opoint_json + opoint_span + "#" + opoint_val;
                    }
                    else {
                        opoint_json = opoint_json + opoint_span + "#" + opoint_val + "@";
                    }

                };
            };

            if (oIsPost == true) {
                var oData = {};
                if ($("#userAgent").hasClass("curr"))  //判断是代理还是玩家、如果是代理则为1，如果是玩家则为2
                {
                    oData.user_type_id = 1;
                }
                else {
                    oData.user_type_id = 2;
                };
                oData.eff_time = $("#linkDays").val();
                oData.pointJson = opoint_json;
                oData.action = "addUrl";
                $.ajax({
                    type: "POST",
                    url: "/aspx/ssc/user_account_proxy_openAgent.aspx",
                    data: oData,
                    dataType: "json",
                    success: function (data) {
                        var oCode = data.code;
                        var oStrCode = data.StrCode;
                        if (oCode != 1) {
                            alert(oStrCode);
                        }
                        else {
                            alert("提交成功！")
                        };
                    }
                });

            }
            else {
                return false;
            };

        });
    }

    //更改返点数据
    if ($("#saveOpenAgent_btn").size() > 0) {

        $("#saveOpenAgent_btn").click(function () {
            var oInput_text = $(".table_setDetail .ty_text");
            var oIsPost = true;  //是否调取ajax
            var msg = "";
            var opoint_json = "";
            for (var a = 0; a < oInput_text.size() ; a++) {
                var opoint_val = oInput_text.eq(a).val();
                var minval = oInput_text.eq(a).attr("minval");
                var opoint_span = oInput_text.eq(a).siblings("span").attr("point_id");
                if (opoint_val == '' || opoint_val<minval) {
                    oInput_text.eq(a).addClass("error");
                    if (oIsPost) {
                        msg = "返点配置存在不符合规则的，请看详情设置带红框的输入框！";
                    }
                    oIsPost = false;
                }
                else {
                    oInput_text.eq(a).removeClass("error");
                    if (a == oInput_text.size() - 1) {
                        opoint_json = opoint_json + opoint_span + "#" + opoint_val;
                    }
                    else {
                        opoint_json = opoint_json + opoint_span + "#" + opoint_val + "@";
                    }

                };
            };

            if (oIsPost == true) {
                var oData = {};
                oData.pointJson = opoint_json;
                oData.action = "editSave";
                $.ajax({
                    type: "POST",
                    url: window.location.href,
                    data: oData,
                    dataType: "json",
                    success: function (data) {
                        var oCode = data.code;
                        var oStrCode = data.StrCode;
                        if (oCode != 1) {
                            alert(oStrCode);
                        }
                        else {
                            alert("提交成功！")
                        };
                    }
                });

            }
            else {
                alert(msg);
                return false;
            };

        });
    }

    //注册页面区别代理注册
    if ($("#login3").size()>0&&$("#login3").attr("reg") == "true") {
        var oLink = window.location.href;
        var oLink_end = oLink.split("?")[1];
        var oForm_link = $(".login_m_form #form1").attr("action");
        var oForm_link_pre = oForm_link.split("?")[0];
        var oFormNew_link = oForm_link_pre + "?action=register_agent&" + oLink_end;
        if (oLink_end) {
            $(".login_m_form #form1").attr("action", oFormNew_link);
        } 
    }
     
    if ($("#header .nav").size() > 0) { 
        //内页头部隐藏
        var oHref = window.location.href;
        var oHref_split = oHref.split("/")
        var oHref_split_end = oHref_split[oHref_split.length - 1];
        var oHref_split_dir = oHref_split[oHref_split.length - 2];
        var oHref_split_end2 = oHref_split_end.split('.');
        var oIndex_link = "<a id='indexLink' href='/aspx/ssc/index.aspx' class='fl'>返回首页</a>";
        //if (oHref_split_end2.length > 0) {
        //    var oHref_split_end3 = oHref_split_end2[0];
        //}
        //else {
        //    var oHref_split_end3 = oHref_split_end2
        //};
        if (oHref_split_end2[0].toLowerCase() == "bet"
            || oHref_split_end2[0].toLowerCase() == "tender_chart") {
            //$("#header .nav").show();
            $("#header .snav .w1000 .snav_sub").append(oIndex_link);
        }
        else {
            //$("#header .nav").hide();
            $("#indexLink").remove();
        };
        
        //导航选中状态
        var oNav_item = $(".nav_item ul li");
        if(oNav_item.size()>0)
        {
        	for(var a =0; a<oNav_item.size();a++)
        	{
        		var oNav_item_link = oNav_item.eq(a).children("a").attr("href"); //导航对应每个项的链接
        		var oNav_item_link_split = oNav_item_link.split("/");
        		var oNav_item_link_last = oNav_item_link_split[oNav_item_link_split.length - 1];
        		var oNav_item_link_dir = oNav_item_link_split[oNav_item_link_split.length - 2];
        		if (oHref_split_dir == oNav_item_link_dir&&(oHref_split_end == oNav_item_link_last || oHref_split_end == oNav_item_link_last + "#"))
        		{
        		    oNav_item.children("a").removeClass("curr");
        		    oNav_item.eq(a).children("a").addClass("curr");
        		};
        	};
        };
    }

    //点击“恢复默认项”
    $("#btn_hf").click(function () {
        $(this).parents(".ty_table2").find("#intTime").find("a").eq(0).trigger("click");
        $(this).parents(".ty_table2").find("#state").find("a").eq(0).trigger("click");
        $(this).parents(".ty_table2").find("#lottery_code").val("-1");
    });

    /*活动左侧菜单效果*/
    var oActivityMenu = $("#activity_menu");
    var oActivityMenuItem = oActivityMenu.find("a");
    var oActivityFloor = $("#activity .floor");
    if (oActivityMenu.size() > 0) {
        oActivityMenu.animate({ "marginTop": "-200px" }, 700, function () {
            oActivityMenu.animate({ "marginTop": "-226px" }, 400);
        });
        oActivityMenuItem.click(function () {
            var oMove = $(this).attr("moveTo");
            var oMoveClass = "." + oMove;
            var oMoveTarget = $("#activity").find(oMoveClass);
            var oMoveTarget_top = oMoveTarget.offset().top;
            $("html,body").animate({ "scrollTop": oMoveTarget_top });
        });
        oActivityFloor.hover(function () {
            $(this).find(".img img").stop().animate({ "margin-top": "-15px" })
        }, function () {
            $(this).find(".img img").stop().animate({ "margin-top": "0px" })
        });
    };

    /*投注界面左侧活动菜单效果*/
    var oActivityMenu = $("#activity_bet");
    var oActivityMenuItem = oActivityMenu.find("a");
    if (oActivityMenu.size() > 0) {
        oActivityMenu.animate({ "marginTop": "-110px" }, 700);
        oActivityMenuItem.click(function () {
            var oMove = $(this).attr("moveTo");
            var oMoveClass = "." + oMove;
            var oMoveTarget = $("#activity").find(oMoveClass);
            var oMoveTarget_top = oMoveTarget.offset().top;
            $("html,body").animate({ "scrollTop": oMoveTarget_top });
        });
    };

    //活动先到先得效果
    if ($("#activity3").size() > 0) {
        $("#activity3 .a_list li").click(function () {

            var dateType = $("#activity3 .a_tit a.curr").index();
            dateType = dateType + 1;
            if (dateType > 0) {
                $(this).addClass("curr");
                $.ajax({
                    type: "POST",
                    url: "/aspx/ssc/activity_firstCome.aspx",
                    data: { "action": "ReceBonus", "dateType": dateType },
                    dataType: "json",
                    success: function (data) {
                        var StrCode = data.StrCode;
                        alert(StrCode);
                    }
                });
            }
            else {
                alert("还没到领奖时间，敬请期待");
            };

        });
        $("#activity3 .a_tit a").click(function () {
            var oCurr = $(this).hasClass("curr");
            var oText = $(this).text();
            if (oCurr == false) {
                alert(oText + "还没到领奖时间，敬请期待！")
            };
        });
        setInterval(function () {
            var oDate = new Date();
            var oHours = oDate.getHours();
            var oMinutes = oDate.getMinutes();
            var oAllMinutes = oHours * 60 + oMinutes; //总分钟数
            var b1 = 14 * 60;  /*上半场开始时间*/
            var e1 = 14 * 60 + 20;   /*上半场结束时间*/
            var b2 = 21 * 60;  /*下半场开始时间*/
            var e2 = 21 * 60 + 20;   /*下半场结束时间*/
            if (oAllMinutes >= b1 && oAllMinutes < e1) {
                $("#activity3 .a_tit a").removeClass("curr").eq(0).addClass("curr");
            }
            else if (oAllMinutes >= b2 && oAllMinutes < e2) {
                $("#activity3 .a_tit a").removeClass("curr").eq(1).addClass("curr");
            }
            else {
                $("#activity3 .a_tit a").removeClass("curr");
            };
        }, 1000)
    };

    //活动“每天快乐送”接口
    $("#activity2 .a_cont table td.td3 .btn").click(function () {
        var happyday_id = $(this).attr('happyday_id');
        $.ajax({
            type: "POST",
            url: "/aspx/ssc/activity_joyful.aspx",
            data: { "action": "ReceBonus", "happyday_id": happyday_id },
            dataType: "json",
            success: function (data) {
                if (data) {
                    var StrCode = data.StrCode;
                    artDialog({
                        icon: "warning",
                        content: StrCode,
                        ok: function () {

                        },
                        lock: true
                    });
                };
            }
        });
    });

    if ($("#activity1").size() > 0) {
        var oDH = parseInt($("#activity1 #dh_money").text());
        if (oDH > 0) {
            $("#activity1 #dh_btn").addClass('curr')
        }
        else {
            $("#activity1 #dh_btn").removeClass('curr');
        };
        //活动“积分兑换”接口
        $("#activity1 #dh_btn.curr").click(function () {
            var me = this;
            $("#activity1 #dh_btn").removeClass('curr');
            $.ajax({
                type: "POST",
                url: "/aspx/ssc/activity_score.aspx",
                data: { "action": "ReceBonus" },
                dataType: "json",
                success: function (data) {
                    var oCode = data.Code; //如果等于1则兑换成功，按钮变灰色
                    var oMessage = data.StrCode //提示信息
                    if (oCode == 1) {
                        artDialog({
                            lock: true,
                            icon: "success",
                            content: oMessage,
                            ok: function () { }
                        })
                    } else {
                        artDialog({
                            icon: "warning",
                            content: oMessage,
                            ok: function () {

                            },
                            lock: true
                        });
                    }
                }
            });
        });
    };
 
	//会员中心的标题
	if($(".userBox .uc_tit h3").size()>0)
	{
		var oTitle = $(".userBox .uc_tit h3").text();
		$("title").text(oTitle);
	};

	//合买详情页面号码多时处理
	if($(".zhDetail").size()>0)
	{
		var zhDetail_line= $(".zhDetail .zh_list");
		for(var a = 0;a<zhDetail_line.size(); a++)
		{
			var betting_number = zhDetail_line.eq(a).find(".betting_number");
			var betting_number_val = betting_number.attr("title");
			if(betting_number_val!=""&&betting_number_val!=undefined)
			{
				var betting_number_val_length = betting_number_val.length;
				if(betting_number_val_length>20)
				{
					betting_number.text(betting_number_val.substring(0,20));
					betting_number.after("<a class='alink'>详情</a>")
				};
			};
		};
	};
	
	$(".zhDetail").on("click",".alink",function(){
		var show_betting_number = $(this).siblings(".betting_number").attr("title");
		var oTop = $(this).offset().top-15;
		var oLeft= $(this).offset().left;
		art.dialog({
		    left: oLeft,
		    top: oTop,
		    content: show_betting_number,
		    width:"200px",
		});
	});
	
	//重置密码提交
	$("#foget_btn").click(function(){
		var foget_type = $("#foget_type").val();/*验证类型*/
		var foget_name = $("#foget_name").val();/*用户名*/
		var foget_par1 = $("#foget_par1").val();/*密文参数1*/
		var foget_par2 = $("#foget_par2").val();/*密文参数2*/
		var foget_paw1 = $("#foget_paw1").val(); /*密码*/
		var foget_paw2 = $("#foget_paw2").val(); /*密码2*/
		var oData ={};
		oData.pas1 = foget_paw1;
		oData.pas2 = foget_paw2;
		oData.type = foget_type;
		oData.action = "updatePassword";
		if(foget_type==1)
		{
			oData.par1 = foget_par1;
			oData.par2 = foget_par2;
			oData.user_name = foget_name;
		}
		var oLink = window.location.href;
		$.ajax({
		    type: "POST",
		    url: "/tools/ssc_ajax.ashx",
		    data:oData,
	        dataType: "json",
	        success: function(data){
	        	var aData=data;
	        	var aCode = aData.Code;
	        	var aStrCode = aData.StrCode;
	        	if (aCode == 1) {
	        	    alert(aStrCode);
	        	    var _localtionName = window.location.host == undefined ? '/aspx/ssc/index.aspx' : window.location.host;
	        	    setTimeout(function () {
	        	        window.location.href = "http://" + _localtionName + "/aspx/ssc/login.aspx";
	        	    },2000)
	        	    //window.open("forgetPaw7.html", "_self");
	        	} else {
	        	    alert(aStrCode);
	        	} 
	        }    
	    });
	});
	
	//银行卡管理增加绑定
	$("#btn_zjbd").click(function(){
		var oCurr = $(this).hasClass("curr");
		if(oCurr == true)
		{
			return false;
		}
		else
		{
			var oHref = $(this).attr("href");
			window.open(oHref,"_self");
		};
	});
	
    //公告通知
    /*var _theUrls = "/platform_announcement_list.html";
	$.ajax({
	    type: "POST",
	    url: _theUrls,
	    data: {"action":"getDataTop1"},
        dataType: "json",
        success: function(data){
        	var oCode = data.Code; //获取状态值，如果是1则获取成功
        	if(oCode == 1)
        	{
        	    
                ////只显示一条公告
        		//var add_time = data.Data.Data[0].add_time; //获取公告时间
        		//var title = data.Data.Data[0].title; //获取公告时间
        		//var url = data.Data.Data[0].url; //获取公告时间
        		//ruiec_showNotice(title, url, add_time); //调取公告展示效果
                
        	    //显示多条公告
        	    var oNotice_insert = "<div id='notice2' class=\"list_cont\" style='height:50px; overflow:hidden;'><ul>";
        	    for (var i = 0; i < data.Data.Data.length; i++) {
        	        var add_time = data.Data.Data[i].add_time;
        	        var msg = data.Data.Data[i].title;
        	        var link = data.Data.Data[i].url;
        	        if (add_time == "" || add_time == undefined) {
        	            add_time = "";
        	        }
        	        else {
        	            add_time = add_time;
        	        };
        	        if (msg == "" || msg == undefined) {
        	            var oMsg = "多赢娱乐公告";
        	        }
        	        else {
        	            //var oMsg = msg+"["+add_time+"]";
        	            var oMsg = msg;
        	        };
        	        if (link == "" || link == undefined) {
        	            var oLink = "#";
        	        }
        	        else {
        	            var oLink = link;
        	        };
        	        oNotice_insert += "<li><a href='" + oLink + "'><i class='iconfont'>&#xe63c;</i>" + oMsg + "</a></li>";
        	    }
        	    oNotice_insert += "</ul></div>";
        	    ruiec_showNoticeMore(oNotice_insert);
        	    //滚动
        	    ruiec_animateNoticeMore();
        	};
            
        }    
	});
    */

	//活动——消费佣金领取
	if($("#btn_yjlq").size()>0)
	{
		$("#btn_yjlq").click(function(){
			$.ajax({
				type:"POST",
				url: "/aspx/ssc/user_account_activity_brokerage.aspx",
				data:{"action":"ReceBonus"},
				dataType:"json",
				success:function(data){
					if(data)
					{
						var oCode = data.Code; //返回值的状态值
						var StrCode = data.StrCode //返回值的提示
						if(oCode ==1)
						{
							artDialog({
								lock:true,
								icon:"success",
								content:StrCode,
								ok:function(){}
							})
						}
						else
						{
							artDialog({
								lock:true,
								icon:"warning",
								content:StrCode,
								ok:function(){}
							})
						};
					};
				}
			})
		});
	};
	
	//安全中心等级判断
	if($(".u_safe .star").size()>0)
	{
		var safe_item = $(".u_safe .safe_list li.curr");
		var safe_item_size = 5-safe_item.size();
		var star =$(".u_safe .star .iconfont");
		for(var a =0; a<star.size(); a++)
		{
			if(a<safe_item_size)
			{
				star.eq(a).addClass("curr")
			}
			else
			{
				star.eq(a).removeClass("curr")
			};
			if(a<2)
			{
				$("#safe_text").text("低");
			}
			else if(a>=2 && a<4)
			{
				$("#safe_text").text("中");
			}
			else
			{
				$("#safe_text").text("高");
			};
		};
	};
	
	//代理红包领取
	if($("#agent_btn").size()>0)
	{
		$("#agent_btn").click(function(){
			var oThis = $(this);
			$.ajax({
				type:"POST",
				url: "/aspx/ssc/activity_agent.aspx",
				data:{"action":"ReceBonus"},
				dataType:"json",
				success:function(data){
					if(data)
					{
						var oCode = data.Code; //获取返回的状态值
						var StrCode = data.StrCode //获取返回的提示
						if(oCode==1)
						{
							artDialog({
								icon:"success",
								lock:"true",
								content:StrCode,
								ok:function(){
									oThis.removeClass("curr")
								},
								close:function(){
									oThis.removeClass("curr");
								}
							});
						}
						else
						{
							artDialog({
								icon:"warning",
								lock:"true",
								content:StrCode,
								ok:function(){}
							});
						};
						
						////console.log(data);	
					};
					
				}
			});
		});
	};
	

	if ($("#order_table").size()) {
	    //查看详细
	    $("#order_table").off().on("click", ".look_mores", function () {
	        var theValue = $(this).attr("value");
	        alert(theValue);
	    });
	} 

	//投注页面右侧浮动倒计时操作
	if($("#fixedCountDown").size()>0)
	{
		var oWindow_width = parseInt($(window).width());
		var oRight = parseInt((oWindow_width-1000)/2)-25;
		$("#fixedCountDown").css({"right":oRight});
		$("#fixedCountDown .c_right").click(function(){
			$(this).siblings(".c_left").toggle();
		});
		var oShowTop = $("#j_play_select").offset().top;
		$(window).scroll(function(){
			var sTop = parseInt($(window).scrollTop());
			if(sTop>oShowTop)
			{
				$("#fixedCountDown").show();
			}
			else
			{
				$("#fixedCountDown").hide();
			};
		});
	};
});

//页面加载成功后隔一段时间把loading效果去掉
window.onload=function(){
	setTimeout(function(){
		$("#loading").remove();
	},1000);
	
};

/*********************** 
* function：更新头部站内信信息
* Parameters:  
* callBack：
*************************/
function ruiec_InsideLetter() {
    var oUrl = "/tools/user_account_msg_letter.ashx";
   $.ajax({
	    type: "POST",
	    url: oUrl,
	    data: {"action":"getUserMess"},
        dataType: "json",
        success: function(data){
            var oCode = data.Code; //返回状态，1时为成功
            var msg="";
            if(oCode == 1)
            {
                var NoReadCount = parseInt(data.Data.NoReadCount); //获取未读的站内信
                var messageList = data.Data.Data == undefined ? [] : data.Data.Data; //获取站内信消息列表
                if (messageList!=null&&messageList.length > 0)
                {
                    var oInsertList = "";
                    //生成站内信列表
                    for(var a = 0; a<messageList.length; a++)
                    {
                        var messageList_title = messageList[a].title; //列表标题
                        var messageList_url = messageList[a].url; //列表链接
                        var oInsertList_item = '<p class="mList"><a href="' + messageList_url + '">【用户邮件】 ' + messageList_title + '</a></p>'
                        if (msg == "") {
                            msg = oInsertList_item;
                        }
                        oInsertList = oInsertList + oInsertList_item;
                    };
            		
                    $("#myInfo .messageShow dd").empty().html(oInsertList);
            		
                };
                //给头部站内信数值赋值
                if(NoReadCount>0)
                {
                    $("#myInfo #message_num").text(NoReadCount);
                    $("#myInfo .messageShow dt small").text(NoReadCount);
                }
                else
                {
                    $("#myInfo #message_num").text(0);
                    $("#myInfo .messageShow dt small").text(0);
                };
                //$("#userName").text(data.Data.userName);
                //有新加的消息播放声音--apollo
                if (data.Data.hasNew == "y")
                {
                    //在右下角显示最新消息
                    art.dialog({
                        id: 'myInfo_msg',
                        title: '新未读消息',
                        content: msg,
                        width: 300,
                        padding: "10px",
                        left: '100%',
                        top: '100%',
                        fixed: true,
                        drag: false,
                        resize: false,
                        cancel: false
                    }).time(10);//提示信息10秒后關閉
                    dewp_play();
                }

                if ($("#ul_fangan_scroll").size())
                    {
                        //显示合并提醒
                        var hm_msg_List2 = data.Data2 == undefined ? [] : data.Data2; //获取站内信消息列表
                        if (hm_msg_List2 != null && hm_msg_List2.length > 0) {
                            var oInsertList2 = "";
                            //生成站内信列表
                            for (var b = 0; b < hm_msg_List2.length; b++) {
                                var hm_messageList_title = hm_msg_List2[b].scheme_title; //列表标题
                                var hm_messageList_url = hm_msg_List2[b].url; //列表链接
                                var lotteryName = hm_msg_List2[b].lotteryName;
                                var oInsertList_item2 = '<li style="height:26px;"  ><a style="color:#f39700 !important;" href="' + hm_messageList_url + '">【合买】 ' + lotteryName + ' :' + hm_messageList_title + '</a></li>'

                                oInsertList2 = oInsertList2 + oInsertList_item2;
                            };
                            $("#ul_fangan_scroll").empty().html(oInsertList2);

                            //多盈合买推荐轮播
                            if ($("#ul_fangan_scroll").size() > 0) {
                                var noUl = $("#ul_fangan_scroll");
                                var noLi = noUl.children("li");
                                var noLi_height = noLi.height();
                                setInterval(function () {
                                    noUl.stop().animate({ "marginTop": -noLi_height }, function () {
                                        $(this).append(noUl.children("li").eq(0)).css({ "marginTop": "0px" });
                                    });
                                }, 5000);
                            }
                            $("#hm_notice_croll").show();
                        }
                        else {
                            //没有合买提示不显示
                            if ($("#hm_notice_croll").size() > 0) {
                                $("#hm_notice_croll").hide();
                            }
                        };
                };
            } else if (oCode == -2) {
                art.dialog({
                    title: '提示',
                    content: "你帐号被踢出或者在异地登录，如非本人操作，请联系客服。",
                    lock: true,
                    okVal: "确定",
                    ok: function () { window.location.href = '/index.aspx'; }
                });
                
            }
        }    
    });
}

/*********************** 
* function：更新头部公告
* Parameters:  
* callBack：
*************************/
function ruiec_Notice() {
    var oUrl = "/tools/user_account_msg_letter.ashx";
    $.ajax({
        type: "POST",
        url: oUrl,
        data: { "action": "getUserAnnounce" },
        dataType: "json",
        success: function (data) {
            if (Number(data) > 0) {
                $(".noticedot").css("display", "block");
            }
        }
    });
}

/*********************** 
* function：获取我的余额进行更新
* Parameters:  
* callBack：
*************************/
function ruiec_ajaxUpdateMoney() {
    var getMoney = "查询中...";
    $("#get_money em").empty().text(getMoney);
    $("#ky_money").empty().text(getMoney);
    $.ajax({
        type: "POST",
        url: "/tools/ssc_ajax.ashx",
        data: { "action": "get_user_money" },
        dataType: "json",
        success: function (data) {
            var oMoney = data.Data ; //获取余额
            oMoney = parseFloat(oMoney).toFixed(2);
            if (isNaN(oMoney)) { oMoney = 0.00; }
            setTimeout(function () {
                $("#get_money em").empty().text(oMoney);
                $("#ky_money").empty().text(oMoney);
            }, 1000);
        },
        error: function (data) {
            alert(data);
            return false;
        }
    });
}

/*********************** 
* function：开户中心设置备注
* Parameters: obj点击当前元素
* callBack：
*************************/
function ruiec_setLink(obj) {
    
    var oInsertDiv = '<input type="text" class="ty_text" />'
    art.dialog({
        title: '添加备注',
        content: oInsertDiv,
        lock: true,
        ok: function () {
            //alert("12");
            var text_obj = $(".aui_content .ty_text").val();
            var attr_obj = $(obj).attr("invite_id");
            $.post("/aspx/ssc/user_account_proxy_managerurl.aspx", { action: "addCommt", commt: text_obj, invite_id: attr_obj }, function (data) {
                if (data.Code == 1) {
                    alert("提交成功");
                    $(obj).html('<i class="iconfont">&#xe64e;</i>' + text_obj);
                }
                else {
                    alert("提交失败")
                }
            })
        },
        cancel: function () { }
    });
}

/*********************** 
* function：开户中心删除链接列表
* Parameters: obj点击当前元素
* callBack：
*************************/
function ruiec_deleteLink(obj) {
    var oInsertDiv = '你确定删除该条注册链接？'
    art.dialog({
        title: '温馨提示',
        content: oInsertDiv,
        lock: true,
        ok: function () {
            var attr_obj = $(obj).attr("invite_id");
            $.post("/aspx/ssc/user_account_proxy_managerurl.aspx", { action: "delUrl", invite_id: attr_obj }, function (data) {
                if (data.Code == 1) {
                    alert("删除成功");
                    $(obj).parent().parent().empty();
                }
                else {
                    alert("删除失败")
                }
            })

        },
        cancel: function () { }
    });
}

/*********************** 
* function：会员管理发点击发送信息
* Parameters: obj点击当前元素
* callBack：
*************************/
function ruiec_sendMsg(obj) {
    var oInsertDiv = '<div class="d_sendM">' +
						'<div class="d_sendM_tit"><label>主题：</label><input type="text" class="ty_text" maxlength="30"></div>' +
						'<div class="d_sendM_cont"><label>正文：</label><textarea  maxlength="300"></textarea></div>' +
					'</div>'
    art.dialog({
        title: '发送站内信息',
        content: oInsertDiv,
        lock: true,
        okVal: "发送",
        ok: function () { },
        cancel: function () { }
    });
}

/*********************** 
* function：input输入框只能输入数字（公用）,调用例子[$(".onlyNum").onlyNum()]
* Parameters: 
* callBack：
*************************/
$.fn.onlyNum = function () {
    $(this).keypress(function (event) {
        var eventObj = event || e;
        var keyCode = eventObj.keyCode || eventObj.which;
        if ((keyCode >= 48 && keyCode <= 57))
            return true;
        else
            return false;
    }).focus(function () {
        //禁用输入法
        this.style.imeMode = 'disabled';
    }).bind("paste", function () {
        //获取剪切板的内容
        var clipboard = window.clipboardData.getData("Text");
        if (/^\d+$/.test(clipboard))
            return true;
        else
            return false;
    });
};

/*********************** 
* function：时间戳转日期时间（公用），调用例子[ruiec_DateToTime(1398250549490,true)]
* Parameters: oDate需要转化的时间戳,show=0时所有格式、show=1时转化成日期格式、show=2时转化为时间格式
* callBack：oCallBackTime 返回的时间 yyyy-MM-dd hh:mm:ss
*************************/
function ruiec_DateToTime(oDate,show) {
    // 例子，比如需要这样的格式：yyyy-MM-dd hh:mm:ss
    oDate=parseInt(oDate);
    var date = new Date(oDate);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())  + ' ';
    h = (date.getHours()<10 ? '0'+date.getHours():date.getHours()) + ':';
    m = (date.getMinutes()<10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
    s = (date.getSeconds()<10 ? '0'+date.getSeconds():date.getSeconds());
    if(show==1)
    {
    	var oCallBackTime = Y + M + D;
   	}else if(show==2)
    {
    	var oCallBackTime = h + m + s;
   	}
    else
    {
   		var oCallBackTime = Y + M + D + h + m + s
    }
    return oCallBackTime;
}


/*********************** 
* function：日期转化成时间戳（公用），调用例子[ruiec_TimeToDate('2014-04-23 18:55:49:123')]
* Parameters: oTime需要转化的时间格式，如'2014-04-23 18:55:49:123'
* callBack：oDate 返回的时间戳 
*************************/
function ruiec_TimeToDate(oTime) {
    // 例子：yyyy-MM-dd hh:mm:ss 》》1398250549490
    date = new Date(oTime);
    oDate = date.getTime();
    return oDate;
}

/*********************** 
* function：hoverDelay,Hover延迟事件
* Parameters: 
* callBack：
*************************/
(function ($) {
    $.fn.hoverDelay = function (options) {
        var defaults = {
            hoverDuring: 200,          //hover延迟时间
            outDuring: 200,
            hoverEvent: function () {
                $.noop();
            },
            outEvent: function () {
                $.noop();
            }
        };
        var sets = $.extend(defaults, options || {});
        var hoverTimer, outTimer, that = this;
        return $(this).each(function () {
            $(this).hover(function () {
                clearTimeout(outTimer);
                hoverTimer = setTimeout(function () { sets.hoverEvent.apply(that) }, sets.hoverDuring);
            }, function () {
                clearTimeout(hoverTimer);
                outTimer = setTimeout(function () { sets.outEvent.apply(that) }, sets.outDuring);
            });
        });
    }
	

})(jQuery);

/******************** 
* function：重置alert事件
* Parameters: ''
* callBack：调用了ruiec_wzh_alert()
*************************/
function ruiec_changeAlert() {
    var _alert = window.alert;
    MyAlert = function (text) {
        ruiec_NewAlert(text)
    };
    MyAlert.noConflict = function () {
        window.alert = _alert;
    };
    // expose API 
    window.alert = window.MyAlert = MyAlert;
}

/*********************** 
* function：重新定义alert弹出框
* Parameters: text弹出内容，callback成功后返回
* callBack： 
*************************/
function ruiec_NewAlert(text, callback) {
	//先将之前的弹窗删除
	var list = art.dialog.list;
	for (var i in list) {
		list[i].close();
	};
    if (!callback) {
        callback = function () { };
    }
    art.dialog({
        content: text,
        ok: callback,
        lock: true
    });
};

/*********************** 
* function：获取url参数值
* Parameters: name为参数名字
* callBack： 
*************************/
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

/*********************** 
* function：公告弹出消息框
* Parameters: msg,link,add_time提示消息，提示链接,添加时间
* callBack： 
*************************/
function ruiec_showNotice(msg,link,add_time){
	if(add_time =="" || add_time==undefined)
	{
		add_time ="";
	}
	else
	{
		add_time = add_time;
	};
	if(msg=="" || msg==undefined)
	{
		var oMsg = "多赢娱乐公告";
	}
	else
	{
		//var oMsg = msg+"["+add_time+"]";
		var oMsg = msg;
	};
	if(link=="" || link==undefined)
	{
		var oLink = "#";
	}
	else
	{
		var oLink = link;
	};
	var oNotice_insert="<div id='notice2'><a href='"+oLink+"'><i class='iconfont'>&#xe63c;</i>"+oMsg+"</a></div>"
	if(!getCookie("msg"))
	{
		//实时监测通知公告
		art.dialog({
		    id: 'msg',
		    title: '多盈娱乐公告',
		    content: oNotice_insert,
		    width: 300,
		    padding:"10px",
		    left: '100%',
		    top: '100%',
		    fixed: true,
		    drag: true,
		    resize: false,
		    close:function(){
		    	setCookie("msg","true",1800)	
		    }
		})
	};
	
};
/*********************** 
* function：公告弹出消息框
* Parameters: msg,link,add_time提示消息，提示链接,添加时间
* callBack： 
*************************/
function ruiec_showNoticeMore(oNotice_insert) {
    if (!getCookie("msg")) {
        //实时监测通知公告
        art.dialog({
            id: 'msg',
            title: '多盈娱乐公告',
            content: oNotice_insert,
            width: 300,
            padding: "10px",
            left: '100%',
            top: '100%',
            fixed: true,
            drag: true,
            resize: false,
            close: function () {
                setCookie("msg", "true", 1800)
            }
        })
    };

};
/*********************** 
* function：公告弹出消息框内容滚动
* callBack： 
*************************/
function ruiec_animateNoticeMore() {
    //多盈娱乐公告轮播
    if ($("#notice2").size() > 0) {
        var noUl = $("#notice2").find("ul");
        var noLi = noUl.children("li");
        var noLi_height = noLi.height();
        setInterval(function () {
            noUl.stop().animate({ "marginTop": -noLi_height }, function () {
                $(this).append(noUl.children("li").eq(0)).css({ "marginTop": "0px" });
            });
        }, 4000);
    }
}

function hadFlash() {
    var result = false;
    var obj = null;
    var activeXEnabled = function () {
        if (!window.ActiveXObject) return false;
        var external = window.external;
        try {
            if (external && typeof external.msActiveXFilteringEnabled != "undefined" && external.msActiveXFilteringEnabled()) {
                return false;
            }
        } catch (e) { }
        return true;
    };

    if (activeXEnabled()) {
        try {
            obj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            result = !!obj;
        }
        catch (e) { } finally { obj = null; }
    }
    else {
        if (navigator.plugins) result = navigator.plugins['Shockwave Flash'];
    }
    return !!result;
}
/*function ruiec_showNotice(msg,link,add_time){
	if(add_time =="" || add_time==undefined)
	{
		add_time ="";
	}
	else
	{
		add_time = add_time;
	};
	if(msg=="" || msg==undefined)
	{
		var oMsg = "多赢娱乐公告";
	}
	else
	{
		var oMsg = msg+"["+add_time+"]";
	};
	if(link=="" || link==undefined)
	{
		var oLink = "#";
	}
	else
	{
		var oLink = link;
	};
	
	var oNotice_insert="<div id='notice'><div class='w1000'><a href='"+oLink+"'><i class='iconfont'>&#xe63c;</i>"+oMsg+"</a><i class='iconfont close'>&#xe626;</i></div></div>"
	$("body").append($(oNotice_insert));
	setTimeout(function(){
		$("#notice").animate({"bottom":"0px"},600);
	},2000);
	$("#notice .close").click(function(){
		$(this).parents("#notice").remove();
	});
};*/

//取得cookie    
function getCookie(name) {    
 var nameEQ = name + "=";    
 var ca = document.cookie.split(';');    //把cookie分割成组    
 for(var i=0;i < ca.length;i++) {    
 var c = ca[i];                      //取得字符串    
 while (c.charAt(0)==' ') {          //判断一下字符串有没有前导空格    
 c = c.substring(1,c.length);      //有的话，从第二位开始取    
 }    
 if (c.indexOf(nameEQ) == 0) {       //如果含有我们要的name    
 return unescape(c.substring(nameEQ.length,c.length));    //解码并截取我们要值    
 }    
 }    
 return false;    
}    
    
//清除cookie    
function clearCookie(name) {    
 setCookie(name, "", -1);    
}    
    
//设置cookie    
function setCookie(name, value, seconds) {    
 seconds = seconds || 0;   //seconds有值就直接赋值，没有为0，这个根php不一样。    
 var expires = "";    
 if (seconds != 0 ) {      //设置cookie生存时间    
 var date = new Date();    
 date.setTime(date.getTime()+(seconds*1000));    
 expires = "; expires="+date.toGMTString();    
 }    
 document.cookie = name+"="+escape(value)+expires+"; path=/";   //转码并赋值    
}    

Number.prototype.toFixed = function (d) {
    var s = this + "";
    if (!d) d = 0;
    if (s.indexOf(".") == -1) s += ".";
    s += new Array(d + 1).join("0");
    if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (d + 1) + "})?)\\d*$").test(s)) {
        var s = "0" + RegExp.$2, pm = RegExp.$1, a = RegExp.$3.length, b = true;
        if (a == d + 2) {
            a = s.match(/\d/g);
            if (parseInt(a[a.length - 1]) > 4) {
                for (var i = a.length - 2; i >= 0; i--) {
                    a[i] = parseInt(a[i]) + 1;
                    if (a[i] == 10) {
                        a[i] = 0;
                        b = i != 1;
                    } else break;
                }
            }
            s = a.join("").replace(new RegExp("(\\d+)(\\d{" + d + "})\\d$"), "$1.$2");

        } if (b) s = s.substr(1);
        return (pm + s).replace(/\.$/, "");
    } return this + "";

};

function StringBuffer() {
    this.buffer = [];
}
StringBuffer.prototype.append = function append(val) {
    this.buffer.push(val);
    return this;
}
StringBuffer.prototype.toString = function toString() {
    return this.buffer.join("");
}
function popBettingList(url) {
    popWin.showWin("850", "490", "方案详情", url);
}

Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1,  //month   
        "d+": this.getDate(),     //day   
        "h+": this.getHours(),    //hour   
        "m+": this.getMinutes(),  //minute   
        "s+": this.getSeconds(), //second   
        "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter   
        "S": this.getMilliseconds() //millisecond   
    }
    var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(w+)/.test(format)) {
        format = fmt.replace(RegExp.$1, week[this.getDay()]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

/** 
*js中更改日期  
* y年， m月， d日， h小时， n分钟，s秒  
*/
Date.prototype.add = function (part, value) {
    value *= 1;
    if (isNaN(value)) {
        value = 0;
    }
    switch (part) {
        case "y":
            this.setFullYear(this.getFullYear() + value);
            break;
        case "m":
            this.setMonth(this.getMonth() + value);
            break;
        case "d":
            this.setDate(this.getDate() + value);
            break;
        case "h":
            this.setHours(this.getHours() + value);
            break;
        case "n":
            this.setMinutes(this.getMinutes() + value);
            break;
        case "s":
            this.setSeconds(this.getSeconds() + value);
            break;
        default:
    }
    return this;
}