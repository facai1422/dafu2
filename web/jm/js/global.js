(function () {
    var toolbar = $('.toolbar');
    // 首页
    var listallgames = function(){
		GamesimulationCtrl.request('LIST_ALL_GAMES', {
            success: function (res) {
                if (res.error == 0){
					var data = res.data.gameList;
					var account_balance = 0;
					var $monyboxul = $(".top-link .mony-box ul");
					$monyboxul.empty();
					$monyboxul.append('<li>账户总余额：<span data-global="TotalBalance">加载中</span></li>');
					$.each(data, function (i, v) {
						var baccaratrefresh = function(){
							HttpRequest({
								url: '/api/game-simulation/query-balance',
								data:{gameId:v.id},
								success: function (res) {
									
									if(res.error==1){
										   var mony = '<li>'+v.name+'钱包：<span>**</span><a>未开通</a></li>'
									}else{
									  account_balance = Number(account_balance) + res.data.account_balance.toFixed(3);
									  var mony = '<li>'+v.name+'钱包：<span>'+res.data.account_balance.toFixed(3)+'</span><a data-command="transfer">转入<a></li>'
									  var lotteryBalance = +$('[data-global="lotteryBalance"]').html();
									  $('[data-global="TotalBalance"]').html(Number(account_balance) + Number(lotteryBalance));
									}
									$monyboxul.append(mony);
								},
							});
						}
						
						baccaratrefresh();
						
            		});
					
                }
                if (res.error == 1) {
                    if (noAlertMsg(res)) {
                        AlertUtils.alert({
                            icon: 'error',
                            content: res.message
                        });
                    }
                }
            },
        });
		
	}
	listallgames();	
    // 退出登录
    $('[data-command="logout"]').click(function () {
        MainCtrl.logout({
            success: function (res) {
                if (res.error == 0) {
                    store.clear(); // 清空数据
                    window.top.location.href = '/login.html';
                }
            }
        });
    });
	
    // 刷新数据
    var refreshBtn = $('[data-command="refresh"]');
    refreshBtn.click(function () {
        HttpRequest({
            url: '/api/web-ajax/loop-page',
            beforeSend: function () {
                refreshBtn.addClass('loading');
            },
            success: function (res) {
                if (res.error == 0) {
                    store.transact('PRIVATE:MsgCount', function (value) {
                        value = res.data.msgCount;
                    });
                    store.transact('PRIVATE:GameLotteryAccount', function (value) {
                        value.availableBalance = res.data.lotteryBalance;
                    });
                    updateDataGlobal();
					listallgames();
                }
            },
            complete: function () {
                refreshBtn.removeClass('loading');
            }
        });
    });

    // 设置时间
    var getTime = function () {
        toolbar.find('.date-time').html(moment().format('YYYY年M月D日 HH:mm:ss dddd'));
    };
    getTime();
    setInterval(getTime, 1000);
})();

var loopDataGlobal = function () {
    HttpRequest({
        url: '/api/web-ajax/loop-page',
        success: function (res) {
            if (res.error == 0) {
                store.transact('PRIVATE:MsgCount', function (value) {
                    value = res.data.msgCount;
                });
                store.transact('PRIVATE:GameLotteryAccount', function (value) {
                    value.availableBalance = res.data.lotteryBalance;
                });
                updateDataGlobal();
            }
        }
    });
};

if (isLogin && isLoop) {
    setInterval(loopDataGlobal, 10000);
}

var updateDataGlobal = function (i) {
	
    var Account = store.get('PRIVATE:Account');
    var MsgCount = store.get('PRIVATE:MsgCount');
    var GameLotteryAccount = store.get('PRIVATE:GameLotteryAccount');
	$('[data-global="username"]').html(Account.username);
	$('[data-field="nickname"]').html(Account.nickname);
    $('[data-global="msgCount"]').html(MsgCount);
    $('[data-global="lotteryBalance"]').html(GameLotteryAccount.availableBalance.toFixed(3));
    // 账户状态
	if(MsgCount!=0){
		$(".index-page-header .message").removeClass("hide")
	}
    if (Account.type == 1) {
        $('[data-visible="agent"]').removeClass('hide');
    }
};

updateDataGlobal();





var ChangePageCenterSrc = function (src) {
    $('.index-page-center > iframe').attr('src', src);
};

// 契约展示
(function () {
    var Account = store.get('PRIVATE:Account');
    if (Account.type == 1) {
        AgentCtrl.request('LOAD_CONTRACT_STATUS', {
            success: function (res) {
                if (res.error == 0) {
                    buildData(res.data);
                }
            }
        });
        var buildData = function (data) {
            if (data.salaryContract) {
                var thisData = data.salaryContract;
                $('[data-visible="contract"]').removeClass('hide');
                if (thisData.status == 0) {
                    if (isShowContractAlert) {
                        AlertUtils.confirm({
                            icon: 'question',
                            content: '您有新的契约需要同意，是否立即处理？',
                            confirmFn: function () {
								window.top.location.href = '/#member/agent-contract-mime-list.html';
								$('.index-page-center > iframe').attr('src', 'member/agent-contract-mime-list.html');
								$("#layui-layer-shade1").remove();
								$("#layui-layer-shade2").remove();
								$("#layui-layer2").remove();
								$("#layui-layer1").remove();
                            }
                        });
                    }
                }
                if (thisData.status == 1) {
                    $('[data-visible="contract-lower"]').removeClass('hide');
                    $('[data-visible="salary-contract"]').removeClass('hide');
                }
            }
            if (data.dividendContract) {
                var thisData = data.dividendContract;
                $('[data-visible="contract"]').removeClass('hide');
                if (thisData.status == 0) {
                    if (isShowContractAlert) {
                        AlertUtils.confirm({
                            icon: 'question',
                            content: '您有新的契约需要同意，是否立即处理？',
                            confirmFn: function () {
                                window.top.location.href = '/#member/agent-contract-mime-list.html';
								$('.index-page-center > iframe').attr('src', 'member/agent-contract-mime-list.html');
								$("#layui-layer-shade1").remove();
								$("#layui-layer-shade2").remove();
								$("#layui-layer2").remove();
								$("#layui-layer1").remove();
                            }
                        });
                    }
                }
                if (thisData.status == 1) {
                    $('[data-visible="contract-lower"]').removeClass('hide');
                    $('[data-visible="dividend-contract"]').removeClass('hide');
                }
            }
        };
    }
})();