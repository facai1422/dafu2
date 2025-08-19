<include file="Public/1header" />
<link rel="stylesheet" href="__CSS__/userHome.css">
<link rel="stylesheet" href="/Template/Mobile/khddcs/gr.css">
<!--<link rel="stylesheet" href="http://wap.zxgj112.com/static/css/chunk-libs.55dfaaaf.css">-->
<script>
$(document).bind("contextmenu", function () { return false; });//禁止右键
document.oncontextmenu = function () { return false; };
document.onkeydown = function () {
if (window.event && window.event.keyCode == 123) {
event.keyCode = 0;
event.returnValue = false;
return false;
}
};//禁止F12
</script>
<script>
    document.onkeydown = function () {
        if (window.event && window.event.keyCode == 123) {
            alert("操作无效");
            event.keyCode = 0;
            event.returnValue = false;
        }
        if (window.event && window.event.keyCode == 13) {
            window.event.keyCode = 505;
        }
        if (window.event && window.event.keyCode == 8) {
            alert(str + "\n请使用Del键进行字符的删除操作！");
            window.event.returnValue = false;
        }
    }


</script>
<body>

<div class="my_header">
    <div data-v-1adf6eb1="" class="personalMain">
    <div data-v-1adf6eb1="" class="personalMain-user">
        <div data-v-1adf6eb1="" class="avatar avatar-lg"><img data-v-1adf6eb1="" src="__ROOT__{$userinfo['face']}" style="width: calc(96% - .05333rem);border-radius: 1.4rem;"></div>
        <div data-v-1adf6eb1="" class="personalMain-info">
            <h5 data-v-1adf6eb1="">账号：<em>{$userinfo.username}</h5>
            欢迎来到 A9 中国
        </div>
        <div>
            <a href="javascript:if(confirm('是否退出？'))location='{:U('Public/LoginOut')}'" class="am-cf">
        <!----><img data-v-1adf6eb1="" src="/khddimg/setting.ca37e339.png" class="setting-icon"></div></a>
    </div>
    <div data-v-1adf6eb1="" class="personalMain-wallet"><a data-v-1adf6eb1="" href="javascript:;" class="personalMain-wallet-amount">
            <p data-v-1adf6eb1=""> 中心钱包 <img data-v-1adf6eb1="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAYAAACNBsqdAAABlklEQVRIS7XWv0sDMRQH8PeuV13cilPPwUUo1JtE0K1SsQWdXV0EwcHVf8FRcOni7KxLC0XRQREcpD8o6OZddXIQQaq93pPe0cP02l5yiRmT8MmXhJcE4Z8aDtwrIv2n+VoEIprKpss5REdmTQ/uo98N+5qIVj0M4SGpa4V8xniPi3twpW5vuuReMAhiLanjWlzchxvtLdftnYfSSeDBVnQa1h0QLKnCg8OrtuxU16FLIDJV4AHcx1TiDKwSD8Gq8JGwCnwsLItPhGXwSDguzgXHwblhUVwIjsIR8XF6xljJzWNHGI7CAbS9ommUYsFEhJW6dUoAO8P3CgIeFsy5I2HYR+0SAe2GUfhIaAlzPZt+EYInoYD4qYFW2FhM3/qPEGcTQblhUZQLjoNGwnHRibAMOhaWRUfCKtAQrAplYJUoA5dr1gkB7Y/4UzAVxVlPfuWVm9Yy9eheFRokrtTb2y71zhh4qPZ5kw7meYlvnt9mvzpOi4hS3oAkyuxxtWUvdB046HcmdTjOZ4wn0ZR/53PfbqKL/AK442U0AmKW6wAAAABJRU5ErkJggg==" width="5.5px" style="margin-left: 5px;"></p>
            <h6 data-v-1adf6eb1=""><span data-v-1adf6eb1="" style="font-size: 12px; margin-right: 5px;"></span>
            <span data-v-1adf6eb1="" style="font-size: 14px;">{$userinfo['balance']}</span></h6>
        </a><a data-v-1adf6eb1="" href="javascript:;" class="personalMain-wallet-amount">
            <p data-v-1adf6eb1=""> 信用分 <img data-v-1adf6eb1="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAYAAACNBsqdAAABlklEQVRIS7XWv0sDMRQH8PeuV13cilPPwUUo1JtE0K1SsQWdXV0EwcHVf8FRcOni7KxLC0XRQREcpD8o6OZddXIQQaq93pPe0cP02l5yiRmT8MmXhJcE4Z8aDtwrIv2n+VoEIprKpss5REdmTQ/uo98N+5qIVj0M4SGpa4V8xniPi3twpW5vuuReMAhiLanjWlzchxvtLdftnYfSSeDBVnQa1h0QLKnCg8OrtuxU16FLIDJV4AHcx1TiDKwSD8Gq8JGwCnwsLItPhGXwSDguzgXHwblhUVwIjsIR8XF6xljJzWNHGI7CAbS9ommUYsFEhJW6dUoAO8P3CgIeFsy5I2HYR+0SAe2GUfhIaAlzPZt+EYInoYD4qYFW2FhM3/qPEGcTQblhUZQLjoNGwnHRibAMOhaWRUfCKtAQrAplYJUoA5dr1gkB7Y/4UzAVxVlPfuWVm9Yy9eheFRokrtTb2y71zhh4qPZ5kw7meYlvnt9mvzpOi4hS3oAkyuxxtWUvdB046HcmdTjOZ4wn0ZR/53PfbqKL/AK442U0AmKW6wAAAABJRU5ErkJggg==" width="5.5px" style="margin-left: 5px;"></p>
            <h6 data-v-1adf6eb1=""><span data-v-1adf6eb1="" style="font-size: 12px; margin-right: 5px;"></span>
            <span data-v-1adf6eb1="" style="font-size: 14px;">900</span></h6>
        </a>
        <a data-v-1adf6eb1="" href="{:U('Account/rechargeList')}" class="personalMain-wallet-operation">
            <img data-v-1adf6eb1="" src="/khddimg/recharge.2cd0a5ea.png">
            <p data-v-1adf6eb1="">存款</p>
        </a>
        <a data-v-1adf6eb1="" href="{:U('Account/withdrawals')}" class="personalMain-wallet-operation">
            <img data-v-1adf6eb1="" src="/khddimg/withdraw.7f2d4ce2.png">
            <p data-v-1adf6eb1="">取款</p>
        </a>
        </div>
</div>
    </div>
    <div data-v-1adf6eb1="" class="personalNav" style="margin-bottom: 10px;">
    <h5 data-v-1adf6eb1="" class="personalNav-title">常用功能</h5>
    <div data-v-1adf6eb1="" class="personalNav-nav">
        <a data-v-1adf6eb1="" href="{:U('Account/dealRecord')}" class="">
        <img data-v-1adf6eb1="" src="/khddimg/transactionRecords.404c0a67.png">
            <p data-v-1adf6eb1="">交易记录</p>
        </a><a data-v-1adf6eb1="" href="{:U('Member/betRecord')}" class="">
            <img data-v-1adf6eb1="" src="/khddimg/betRecords.8d1c1936.png">
            <p data-v-1adf6eb1="">投注记录</p>
        </a><a data-v-1adf6eb1="" href="{:U('Member/agent')}" class="">
            <img data-v-1adf6eb1="" src="/khddimg/VIP.651d931d.png">
            <p data-v-1adf6eb1="">代理中心</p>
        </a><a data-v-1adf6eb1="" href="/Activity.index.do" class="">
            <img data-v-1adf6eb1="" src="/khddimg/agent.b71c44a1.png">
            <p data-v-1adf6eb1="">活动中心</p>
        </a></div>
</div>

<div data-v-1adf6eb1="" class="cell">
    <div data-v-1adf6eb1="" class="cellItem" onclick="location='{:U('Member/personalInfo')}'">
        <div data-v-1adf6eb1="" class="cellItem-icon">
            <img data-v-1adf6eb1="" src="ui2022/1.png"></div>
        <div data-v-1adf6eb1="" class="cellItem-title">个人资料<span data-v-1adf6eb1=""></span></div>
        <i data-v-1adf6eb1="" class="arrow van-icon van-icon-arrow">
            <!----></i>
    </div>
    <div data-v-1adf6eb1="" class="cellItem" onclick="location='{:U('Member/setting')}'">
        <div data-v-1adf6eb1="" class="cellItem-icon">
            <img data-v-1adf6eb1="" src="data:image/png;base64,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"></div>
        <div data-v-1adf6eb1="" class="cellItem-title">账户与安全<span data-v-1adf6eb1="">完善账户信息，更安全</span></div>
        <i data-v-1adf6eb1="" class="arrow van-icon van-icon-arrow">
            <!----></i>
    </div>
    <div data-v-1adf6eb1="" class="cellItem" onclick="location='{:U('Member/xinnum')}'">
        <div data-v-1adf6eb1="" class="cellItem-icon">
            <img data-v-1adf6eb1="" src="ui2022/2.png"></div>
        <div data-v-1adf6eb1="" class="cellItem-title">我的信用分<span data-v-1adf6eb1=""></span></div>
        <i data-v-1adf6eb1="" class="arrow van-icon van-icon-arrow">
            <!----></i>
    </div>
    <div data-v-1adf6eb1="" class="cellItem" onclick="location='{:U('Member/qiyue')}'">
        <div data-v-1adf6eb1="" class="cellItem-icon">
            <img data-v-1adf6eb1="" src="khddimg/xiazailogo.png"></div>
        <div data-v-1adf6eb1="" class="cellItem-title">契约合同<i data-v-1adf6eb1="" class="van-icon van-icon-sort">
                  </i><span data-v-1adf6eb1=""></span></div>
                <i data-v-1adf6eb1="" class="arrow van-icon van-icon-arrow">
            <!----></i>
    </div>
    <div data-v-1adf6eb1="" class="cellItem" onclick="location='{:GetVar('kefuthree')}'">
        <div data-v-1adf6eb1="" class="cellItem-icon">
            <img data-v-1adf6eb1="" src="ui2022/3.png"></div>
        <div data-v-1adf6eb1="" class="cellItem-title">客服中心<span data-v-1adf6eb1="">客服在线咨询</span></div>
        <i data-v-1adf6eb1="" class="arrow van-icon van-icon-arrow">
            <!----></i>
    </div>
</div>

<div data-v-1adf6eb1="" class="cell">
    <div data-v-1adf6eb1="" class="cellItem" onclick="location='{:U('Member/Message')}'">
        <div data-v-1adf6eb1="" class="cellItem-icon">
            <img data-v-1adf6eb1="" src="data:image/png;base64,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"></div>
        <div data-v-1adf6eb1="" class="cellItem-title">我的消息<span data-v-1adf6eb1=""><em class="message_number" style="color: red;">0</em></span></div>
        <i data-v-1adf6eb1="" class="arrow van-icon van-icon-arrow">
            <!----></i>
    </div>
    <div data-v-1adf6eb1="" class="cellItem" onclick="location='{:U('Account/todayLoss')}'">
        <div data-v-1adf6eb1="" class="cellItem-icon">
           <img data-v-1adf6eb1="" src="khddimg/wenhao.png"></div>
        <div data-v-1adf6eb1="" class="cellItem-title">今日盈亏<span data-v-1adf6eb1=""></span></div>
        <i data-v-1adf6eb1="" class="arrow van-icon van-icon-arrow">
            <!----></i>
    </div>
    

<include file="Public/footer" />
<audio id="audio" src=""></audio>
<span class='message_number' style="display: none;"></span>

<script>


   function playMusic(path) {
    var audioEle = document.getElementById("audio");
    audioEle.src=path;
    audioEle.load();
    if (audioEle.paused){ /*如果已经暂停*/
        audioEle.play();   //播放
    }else {
        audioEle.pause();  //暂停
    }
}
    /*获取消息*/
    function get_message(){
        $.ajax({
          url: '/Apijiekou.get_message.do',
          type: 'get',
          // 设置的是请求参数
          data: {},
          // 用于设置响应体的类型 注意 跟 data 参数没关系！！！
          dataType: 'json',
          success: function (res) {
            // 一旦设置的 dataType 选项，就不再关心 服务端 响应的 Content-Type 了
            // 客户端会主观认为服务端返回的就是 JSON 格式的字符串
            $('.message_number').html(res.number);
            if(res.number>0){
                 playMusic('/msg.mp3');
            }
            
          }
        //   alert(res);
        })
    }
    get_message();
    setInterval('get_message()',20000);

</script>
<script>
var e = "%c";

var n = "color:red;text-shadow:5px 5px 2px #fff, 5px 5px 2px #373E40, 5px 5px 5px #A2B4BA, 5px 5px 10px #82ABBA;font-weight:bolder;font-size:55px"

var r = "color:#495A80;text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 1px 0 #bbb;font-size:20px";



</script>
</body>
</html>