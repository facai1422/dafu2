/**
 * 获取余额
 */
function getMoney() {
    $.ajax({
        url: '/game/ajax_getmoney',
        dataType: 'json',
        success: function (res) {
            if (res.code == 1) {
                $(".money_user").html(res.money);
                $(".user-amount-refresh").removeClass('loading');
            }
        }
    })

    $.ajax({
        url: '/user/balance?target=ag',
        dataType: 'json',
        success: function (res) {
            $(".money_user_ag").html(res.money);
        }
    })

    $.ajax({
        url: '/user/balance?target=bb',
        dataType: 'json',
        success: function (res) {
            console.log(res)
            $(".money_user_bb").html(res.money);
        }
    })
    $.ajax({
        url: '/user/balance?target=ab',
        dataType: 'json',
        success: function (res) {
            console.log(res)
            $(".money_user_ab").html(res.money);
        }
    })

}



var clis =3 ;
var je =0;
$(".btn_balance_toggle").click(function () {
    if(clis%2==1){
        je =$(".hd_money_user").html();
        $(".hd_money_user").html("余额已隐藏");
        $(this).find("span").html("显示余额");
    }else{
        $(this).find("span").html("隐藏余额");
        $(".hd_money_user").html(je);
    }
    clis++;
    console.log("w3"+clis);
})

getMoney();
$(".user-amount-refresh").click(function () {
    layer.msg("正在刷新余额");
    getMoney();
    setTimeout(function () {
        layer.msg("刷新成功！");
    },1000)
})


$(".action-amount-refresh").click(function () {
    layer.msg("正在刷新该余额");
})

$(".wkf").click(function () {
    var that = $(this);
    layer.tips('等待开发', that, {
        tips: [1, '#0FA6D8'] //还可配置颜色
    });
})

$(".time_is_ck span").click(function (res) {
    $(".time_is_ck span").removeClass("active");
    $(this).addClass('active');
    var day = $(this).attr("data-days");
    var url ="";
    if(day==1){
        layer.msg("正在获取今天的数据~");

        url = "/demo/agent?begin="+GetDateStr(0)+"&end="+GetDateStr(1)+"&day=1";

    }else if(day==2){
        layer.msg("正在获取昨天的数据~");
        url = "/demo/agent?begin="+GetDateStr(-1)+"&end="+GetDateStr(0)+"&day=2";
    }else{
        layer.msg("正在获取最近七天的数据~");
        url = "/demo/agent?begin="+GetDateStr(-7    )+"&end="+GetDateStr(0)+"&day=3";
    }
    setTimeout(function () {
        window.location.href=url;
    },1000)
})



function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth()+1;//获取当前月份的日期
    if(m<10){
        m="0"+m;
    }
    var d = dd.getDate();
    return y+"-"+m+"-"+d;
}


