<include file="Public/header" />
<link rel="stylesheet" href="__CSS__/userHome.css">
<link rel="stylesheet" href="/resources/js/layui/css/layui.css">
<script type="text/javascript" src="/resources/main/mobile_agent.js"></script>
<body>
<header data-am-widget="header"class="am-header am-header-default header nav_bg am-header-fixed">
<div class="am-header-left am-header-nav">
			<a href="javascript:history.back(-1);" class="">
				<i class="iconfont icon-arrow-left"></i>
			</a>
      	</div>
    <h1 class="am-header-title userHome_h1">
        契约合同
    </h1>
    
</header>
<div style="padding:0px; margin:0px; width:100%">
    <div style="padding:10px;  height:152px;  color:#FFFFFF; width:95%; margin-left:10px; margin-top:20px;background: linear-gradient(#9C27B0,#E91E63);">
    	<?php if($clres['days'] == 1){?>
		<span style="float:left; display:inline-block;font-size:13px;">
        	您已签定日契约，充值量需达到<?php echo $res['days']?>元，达到后可领取分红<?php echo $res['ratio']?>% 即<?php echo $res['days']?>乘<?php echo $res['ratio']?>% 
        </span>
        <span style="width:100%; float:left; display:inline-block">
        <div class="layui-progress layui-progress-big" lay-showpercent="true" style="background-color: #4CAF50;">
          <div class="layui-progress-bar" lay-percent="<?php echo $days_arr['percent']?>%" style="width:<?php echo $days_arr['percent']?>%; ">
		  <span class="layui-progress-text" style="width:150px;display: inline-block;text-align: left;"><?php echo $days_arr['transferIn']?> = <?php echo $days_arr['percent']?>%</span></div>
        </div>
        </span>
		 <?php }else {?>
		<span style="float:left; display:inline-block;font-size:13px;">
        	未签约，日契约充值量需达到 <?php echo $res['days']?> 元，达到后可领取分红<?php echo $res['ratio']?>% 即 <?php echo $res['days']?> 乘 <?php echo $res['ratio']?>%
        </span>
        <span style="width:100%; float:left; display:inline-block">
        <div class="layui-progress layui-progress-big" lay-showpercent="true" style="background-color: #00BCD4;">
          <div class="layui-progress-bar" lay-percent="0%" style="width:0%;">
		  <span class="layui-progress-text" style="width:150px;display: inline-block;text-align: left;">0 = 0%</span></div>
        </div>
        </span>
		<?php }?>
        <span style="float:left; display:inline-block; width:100%; margin-top:10px">
			<?php if($clres['days'] == 1 && $days_arr['percent'] < 100){?>
			<button class="layui-btn layui-btn-sm layui-btn-normal" style="background-color:#ff0057;cursor:pointer">已签约</button>
			<?php } else if($clres['days'] == 1 && $days_arr['percent'] >= 100  &&  $days_zufeData == true) {?> 
			<button class="layui-btn layui-btn-sm layui-btn-normal" style="background-color:#E91E63;cursor:pointer" onclick="drawshare('days');">领取分红</button>
			<?php } else if($days_zufeData == false) {?>
			<button class="layui-btn layui-btn-sm layui-btn-normal" style="background-color:#2196F3;cursor:pointer" onclick="contractLog('days',1);">契约已作废，请重新签订</button>
			<?php } else {?>
			<button class="layui-btn layui-btn-sm layui-btn-normal" style="background-color:#2196F3;cursor:pointer" onclick="contractLog('days',1);">未签约</button>
			<?php }?>
        </span>
		<span style="font-size:12px; float:left; display:inline-block; width:100%;">温馨提示：分红结算时间为契约签定时间开始至结束为准，超时契约到期自动取消</span>
    </div>
    
    <div style="padding:10px;  height:152px;  color:#FFFFFF; width:95%; margin-left:10px; margin-top:10px;background: linear-gradient(#E91E63,#9C27B0);">
    	<?php if($clres['mues'] == 1){?>
		<span style="float:left; display:inline-block;font-size:13px;">
        	您已签定周契约，充值量需达到<?php echo $res['mues']?>元，达到后可领取分红<?php echo $res['ratio']?>% 即<?php echo $res['mues']?>乘<?php echo $res['ratio']?>% 
        </span>
        <span style="width:100%; float:left; display:inline-block">
        <div class="layui-progress layui-progress-big" lay-showpercent="true" style="background-color: #4CAF50;">
          <div class="layui-progress-bar" lay-percent="<?php echo $mues_arr['percent']?>%" style="width:<?php echo $mues_arr['percent']?>%; ">
		  <span class="layui-progress-text" style="width:150px;display: inline-block;text-align: left;"><?php echo $mues_arr['transferIn']?> = <?php echo $mues_arr['percent']?>%</span></div>
        </div>
        </span>
		 <?php }else {?>
		<span style="float:left; display:inline-block;font-size:13px;">
        	未签约，周契约充值量需达到 <?php echo $mues['mues']?> 元，达到后可领取分红<?php echo $res['ratio']?>% 即 <?php echo $res['mues']?> 乘 <?php echo $res['ratio']?>%
        </span>
        <span style="width:100%; float:left; display:inline-block">
        <div class="layui-progress layui-progress-big" lay-showpercent="true" style="background-color: #00BCD4;">
          <div class="layui-progress-bar" lay-percent="%" style="width:0%; ">
		  <span class="layui-progress-text" style="width:150px;display: inline-block;text-align: left;">0 = 0%</span></div>
        </div>
        </span>
		<?php }?>
        <span style="float:left; display:inline-block; width:100%; margin-top:10px">
         	<?php if($clres['mues'] == 1 && $mues_arr['percent'] < 100){?>
			<button class="layui-btn layui-btn-sm layui-btn-normal" style="background-color:#FF9800;cursor:pointer">已签约</button>
			<?php } else if($clres['mues'] == 1 && $mues_arr['percent'] >= 100  &&  $mues_zufeData == true) {?> 
			<button class="layui-btn layui-btn-sm layui-btn-normal" style="background-color:#009688;cursor:pointer" onclick="drawshare('mues');">领取分红</button>
			<?php } else if($mues_zufeData == false) {?>
			<button class="layui-btn layui-btn-sm layui-btn-normal" style="background-color:#FF9800;cursor:pointer" onclick="contractLog('mues',1);">契约已作废，请重新签订</button>
			<?php } else {?>
			<button class="layui-btn layui-btn-sm layui-btn-normal" style="background-color:#FF9800;cursor:pointer" onclick="contractLog('mues',1);">未签约</button>
			<?php }?>
        </span>
		<span style="font-size:12px;float:left; display:inline-block; width:100%;">温馨提示：分红结算时间为契约签定时间开始至结束为准，超时契约到期自动取消</span>
    </div>
    <div style="padding:10px;  height:152px;  color:#FFFFFF; width:95%; margin-left:10px; margin-top:10px;background: linear-gradient(#9C27B0,#00BCD4);">
    	<?php if($clres['yues'] == 1){?>
		<span style="float:left; display:inline-block;font-size:13px;">
        	您已签定月契约，充值量需达到<?php echo $res['yues']?>元，达到后可领取分红<?php echo $res['ratio']?>% 即<?php echo $res['yues']?>乘<?php echo $res['ratio']?>% 
        </span>
        <span style="width:100%; float:left; display:inline-block">
        <div class="layui-progress layui-progress-big" lay-showpercent="true" style="background-color: #4CAF50;">
          <div class="layui-progress-bar" lay-percent="<?php echo $yues_arr['percent']?>%" style="width:<?php echo $yues_arr['percent']?>%; ">
		  <span class="layui-progress-text" style="width:150px;display: inline-block;text-align: left;"><?php echo $yues_arr['transferIn']?> = <?php echo $yues_arr['percent']?>%</span></div>
        </div>
        </span>
		 <?php }else {?>
		<span style="float:left; display:inline-block;font-size:13px;">
        	未签约，月契约充值量需达到 <?php echo $res['yues']?> 元，达到后可领取分红<?php echo $res['ratio']?>% 即 <?php echo $res['yues']?> 乘 <?php echo $res['ratio']?>%
        </span>
        <span style="width:100%; float:left; display:inline-block">
        <div class="layui-progress layui-progress-big" lay-showpercent="true" style="background-color: #00BCD4;">
          <div class="layui-progress-bar" lay-percent="%" style="width:0%;">
		  <span class="layui-progress-text" style="width:150px;display: inline-block;text-align: left;">0 = 0%</span></div>
        </div>
        </span>
		<?php }?>
        <span style="float:left; display:inline-block; width:100%; margin-top:10px">
            <?php if($clres['yues'] == 1 && $yues_arr['percent'] < 100){?>
			<button class="layui-btn layui-btn-sm layui-btn-normal" style="background-color:#E91E63;cursor:pointer">已签约</button>
			<?php } else if($clres['yues'] == 1 && $yues_arr['percent'] >= 100  &&  $yues_zufeData == true) {?> 
			<button class="layui-btn layui-btn-sm layui-btn-normal" style="background-color:#4CAF50;cursor:pointer" onclick="drawshare('yues');">领取分红</button>
			<?php } else if($yues_zufeData == false) {?>
			<button class="layui-btn layui-btn-sm layui-btn-normal" style="background-color:#E91E63;cursor:pointer" onclick="contractLog('yues',1);">契约已作废，请重新签订</button>
			<?php } else {?>
			<button class="layui-btn layui-btn-sm layui-btn-normal" style="background-color:#FF5722;cursor:pointer" onclick="contractLog('yues',1);">未签约</button>
			<?php }?>
        </span>
		<span style="font-size:12px;float:left; display:inline-block; width:100%;">温馨提示：分红结算时间为契约签定时间开始至结束为准，超时契约到期自动取消</span>
    </div>
</div>
<script type="text/javascript" src="/resources/js/layui/layui.js"></script>
</body>
  <style type="text/css">
body {background-image: url(assets/mig1.jpg);}
</style>
</html>