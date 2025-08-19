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
		<table class="table table-border table-bordered table-bg table-hover table-sort">
			<thead>
				<tr class="text-c">
					<th width="25"><input type="checkbox" name="" value=""></th>
					<th width="80">用户ID</th>
                    <th width="80">用户姓名</th>
                    <th class="80">日契约</th>
					<th width="80">周契约</th>
					<th width="80">月契约</th>
					<th width="80">签约个数</th>
					<th width="90">日签约时间</th>
					<th width="90">周签约时间</th>
					<th width="90">月签约时间</th>
				</tr>
			</thead>
			<tbody>
            	<?php $empty = "<tr class='text-c'><td colspan='20'>暂时没有数据</td></tr>";?>
				<?php foreach($list as $key=>$val) {?>
                <tr class="text-c">
					<td><input type="checkbox" class="checkids" value="{$vo.id}" name="ids[{$vo.id}]"></td>
					<td style="width:112px"><?php echo $val['member_id']?></td>
                    <td style="width:112px"><?php echo $val['user']['username']?></td>
                    <td style="width:112px"><?php echo $val['days'] == 1 ? "已签约":"未签约"?></td>
					<td style="width:112px"><?php echo $val['mues'] == 1 ? "已签约":"未签约"?></td>
					<td style="width:112px"><?php echo $val['yues'] == 1 ? "已签约":"未签约"?></td>
					<td style="width:112px"><?php echo $val['views']?></td>
					<td style="width:112px"><?php echo $val['days_start']?> - <?php echo $val['days_end']?></td>
					<td style="width:112px" ><?php echo $val['mues_start']?> - <?php echo $val['mues_end']?></td>
					<td style="width:112px"><?php echo $val['yues_start']?> - <?php echo $val['yues_end']?></td>
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