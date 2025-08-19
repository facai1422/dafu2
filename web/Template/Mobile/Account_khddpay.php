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
			在线支付
		</h1>

	</header>

	<div class="bank_recharge">
		<form class="form-inline" method="post" action="{:U('Account/khddpay')}">
			  
			<ul class="bank_form_list">
				<li class="am-cf">
					<span class="bank_form_left am-fl">充值金额</span>
					<div class="am-fr bank_right_input">
						<input type="text" name="pay_amount" id="amount" placeholder="请输入充值金额" class="input_txt">
					</div>
				</li>
				<li class="am-cf">
					<span class="bank_form_left am-fl">充值方式</span>
					<div class="am-fr bank_right_input">
						<input type="text"  name="paytype"  value="khddpay" checked="checked" class="input_txt" style="display:none;">
						<img src="https://img.khdd.top/img/402" width="14%">
					</div>
				</li>
				
			</ul>
                <?php
                foreach ($native as $key => $val) {
                    echo '<input type="hidden" name="' . $key . '" value="' . $val . '">';
                }
                ?>
                <button type="submit" class="am-btn am-btn-danger am-radius am-btn-block">提交订单</button>
			<!--<button class="am-btn am-btn-danger am-radius am-btn-block nextbtn" type="submit"  >确定</button>-->
		</form>	
		<div class="bottom_explain">
			{$Allmsg['remark']}
		</div>
	</div>
	
	<include file="Public/footer" />

</body>
</html>