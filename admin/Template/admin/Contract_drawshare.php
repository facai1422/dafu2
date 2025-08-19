<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<!--[if lt IE 9]>
<script type="text/javascript" src="../Template/admin/resources/ui/lib/html5.js"></script>
<script type="text/javascript" src="../Template/admin/resources/ui/lib/respond.min.js"></script>
<script type="text/javascript" src="../Template/admin/resources/ui/lib/PIE_IE678.js"></script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/static/h-ui/css/H-ui.min.css" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/static/h-ui.admin/css/H-ui.admin.css" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/lib/Hui-iconfont/1.0.7/iconfont.css" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/lib/icheck/icheck.css" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/static/h-ui.admin/skin/default/skin.css" id="skin" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/static/h-ui.admin/css/style.css" />
<!--[if IE 6]>
<script type="text/javascript" src="../Template/admin/resources/ui/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<title>契约合同</title>
</head>
<body>
<nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页 <span class="c-gray en">&gt;</span> 信息管理 <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>

	<div class="mt-20">
	<!-- `member_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `is_type` tinyint(2) unsigned NOT NULL DEFAULT '0' COMMENT '0->日契约  1->周契约 2->月契约',
  `target` int(10) unsigned NOT NULL COMMENT '充值目标金额',
  `percent` varchar(10) NOT NULL COMMENT '分红百分比',
  `ramount` int(10) unsigned NOT NULL COMMENT '充值金额',
  `start_time` int(10) unsigned NOT NULL COMMENT '签约时间',
  `end_time` int(10) unsigned NOT NULL COMMENT '结束签约时间',
  `status` tinyint(2) unsigned NOT NULL DEFAULT '0' COMMENT '0->申请中  1->已经领取 2->已拒绝',-->
		<table class="table table-border table-bordered table-bg table-hover table-sort">
			<thead>
				<tr class="text-c">
					<th width="25"><input type="checkbox" name="" value=""></th>
					<th width="80">用户ID</th>
                    <th width="80">用户姓名</th>
                    <th class="80">契约类型</th>
					<th width="80">充值目标金额</th>
					<th width="80">达到充值金额</th>
					<th width="80">分红百分比</th>
					<th width="80">分红金额</th>
					<th width="90">签约时间</th>
					<th width="90">处理状态</th>
					<th width="90">操作</th>
				</tr>
			</thead>
			<tbody>
            	<?php $empty = "<tr class='text-c'><td colspan='20'>暂时没有数据</td></tr>";?>
				<?php foreach($list as $key=>$val) {?>
                <tr class="text-c">
					<td><input type="checkbox" class="checkids" value="{$vo.id}" name="ids[{$vo.id}]"></td>
					<td style="width:112px"><?php echo $val['member_id']?></td>
                    <td style="width:112px"><?php echo $val['user']['username']?></td>
                    <td style="width:112px"><?php if($val['is_type'] == 0) {echo "日契约";}else if($val['is_type'] == 1){echo "周契约";} else if($val['is_type'] == 1){echo "月契约";}?></td>
					<td style="width:112px"><?php echo $val['target']?>元</td>
					<td style="width:112px"><?php echo $val['ramount']?>元</td>
					<td style="width:112px"><?php echo $val['percent']?>%</td>
					<td style="width:112px"><?php echo $val['drawshare_amount']?>元</td>
					<td style="width:112px"><?php echo $val['start_time']?> - <?php echo $val['end_time']?></td>
					<td style="width:112px" ><?php if($val['status'] == 0) {echo "申请中";}else if($val['status'] == 1){echo "已经领取";} else if($val['status'] == 1){echo "已拒绝";}?></td>
					<td style="width:112px">
					 {if condition="$val['status'] eq 0"}
                <u style="cursor:pointer" class="text-primary" layer-url="{:U('drawshareedit',['id'=>$val['id']])}" title="契约合同领取审核状态">
                	<span style="color:red">审核</span>
                </u>
                {elseif condition="$val['status'] eq 1"/}
                	<span style="color:green">已审核</span>
                {elseif condition="$val['status'] eq 2"/}
               	 <span style="color:grey">已拒绝</span>
                {/if}

					</td>
				</tr>
               <?php }?>
                
					
				
			</tbody>
		</table>
	</div>
    <div class="cl pd-5 bg-1 bk-gray mt-20 text-c">
        <div class="l" style="padding:0"><a href="javascript:;" deleteall-url="{:U('deleteall')}" title="删除" class="btn btn-danger-outline radius">删除</a></div>
        <div class="r">
            <div class="pageNav l" style="padding:0">{$page}</div>
            <div class="r">共有数据：<strong>{$totalcount}</strong> 条 </div>
        </div>
    </div>	
 
</div>
{include file="Public/footer" /}
</body>
</html>