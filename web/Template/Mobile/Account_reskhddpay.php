<?php

error_reporting(0);
header("Content-type: text/html; charset=utf-8");
$pay_memberid = "211056583";   //商户ID
$pay_orderid = 'KH'.date("YmdHis").rand(100000,999999);    //订单号
$pay_amount = $money;    //交易金额
$pay_applydate = date("Y-m-d H:i:s");  //订单时间
$pay_notifyurl = "http://".$_SERVER['SERVER_NAME']."/khddpay/server.php";   //服务端返回地址
$pay_callbackurl = "http://".$_SERVER['SERVER_NAME']."/khddpay/page.php";  //页面跳转返回地址
$Md5key = "hv0soompj16uuir36iz9iff4bfteib0f";   //密钥
$tjurl = "http://".$_SERVER['SERVER_NAME']."/Account.reskhddpay.do";   //提交地址
$pay_bankcode = "902";   //银行编码
//扫码
$native = array(
    "pay_memberid" => $pay_memberid,
    "pay_orderid" => $pay_orderid,
    "pay_amount" => $pay_amount,
    "pay_applydate" => $pay_applydate,
    "pay_bankcode" => $pay_bankcode,
    "pay_notifyurl" => $pay_notifyurl,
    "pay_callbackurl" => $pay_callbackurl,
);
ksort($native);
$md5str = "";
foreach ($native as $key => $val) {
    $md5str = $md5str . $key . "=" . $val . "&";
}
// echo($md5str . "key=" . $Md5key);
$sign = strtoupper(md5($md5str . "key=" . $Md5key));
$native["pay_md5sign"] = $sign;
$native['pay_attach'] = "khddpay";
$native['pay_productname'] ='在线充值';
?>
<include file="Public/header" />
<link rel="stylesheet" href="__CSS__/userHome.css">
<!--<script type="text/javascript" src="__ROOT__/resources/js/way.min.js"></script>-->
<body>
	<header data-am-widget="header"class="am-header am-header-default header nav_bg am-header-fixed">
		<div class="am-header-left am-header-nav">
			<a href="javascript:history.back(-1);" class="">
				<i class="iconfont icon-arrow-left"></i>
			</a>
      	</div>

		<h1 class="am-header-title activity_h1">
			选择支付方式
		</h1>

	</header>

	<div class="bank_recharge">
		<form class="form-inline" method="post" action="<?php echo $tjurl; ?>">
		    <ul class="bank_form_list">
				<li class="am-cf">
					<span class="bank_form_left am-fl">支付方式</span>
					<div class="am-fr bank_right_input">
						<img src="http://5b0988e595225.cdn.sohucs.com/images/20180727/02df1aef7fc047859421fab99a283855.jpeg" style="width:30%">
					</div>
				</li>
				<li class="am-cf">
					<span class="bank_form_left am-fl">充值金额</span>
					<div class="am-fr bank_right_input">
						<input type="text" value="<?php echo $money; ?>" readonly="readonly" class="input_txt">
					</div>
				</li>
			</ul>
                <?php
                
                foreach ($native as $key => $val) {
                    echo '<input type="hidden" name="' . $key . '" value="' . $val . '">';
                }
                ?>
                <!--<button type="submit" class="am-btn am-btn-danger am-radius am-btn-block">确定支付</button>-->
			<button class="am-btn am-btn-danger am-radius am-btn-block nextbtn" type="submit">确定支付</button>
		</form>	
		<div class="bottom_explain">
			{$Allmsg['remark']}
		</div>
	</div>
	
	<include file="Public/footer" />

</body>
</html>