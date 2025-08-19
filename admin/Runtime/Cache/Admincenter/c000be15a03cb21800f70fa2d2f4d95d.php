<?php if (!defined('THINK_PATH')) exit();?><!--_meta 作为公共模版分离出去-->
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<LINK rel="Bookmark" href="/favicon.ico" >
<LINK rel="Shortcut Icon" href="/favicon.ico" />
<!--[if lt IE 9]>
<script type="text/javascript" src="../Template/admin/resources/ui/lib/html5.js"></script>
<script type="text/javascript" src="../Template/admin/resources/ui/lib/respond.min.js"></script>
<script type="text/javascript" src="../Template/admin/resources/ui/lib/PIE_IE678.js"></script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/static/h-ui/css/H-ui.min.css" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/static/h-ui.admin/css/H-ui.admin.css" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/lib/Hui-iconfont/1.0.7/iconfont.css" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/lib/icheck/icheck.css" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/static/h-ui.admin/skin/green/skin.css" id="skin" />
<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/static/h-ui.admin/css/style.css" />
<!--[if IE 6]>
<script type="text/javascript" src="../Template/admin/resources/ui/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<!--/meta 作为公共模版分离出去-->

<link rel="stylesheet" type="text/css" href="../Template/admin/resources/ui/lib/bootstrap-Switch/bootstrapSwitch.css" />
<style>
	.border-danger-outline{
		border:1px solid #dd514c;
	}
	.border-success-outline{
		border:1px solid #5eb95e;
	}
	.tabBar1 {border-bottom: 2px solid #19a97b}
	.tabBar1 span {background-color: #e8e8e8;cursor: pointer;display: inline-block;float: left;
		font-weight: bold;height: 30px;line-height: 30px;padding: 0 15px}
	.tabBar1 span.current{background-color: #19a97b;color: #fff}
</style>
<title>玩法管理</title>
</head>
<body>

<nav class="breadcrumb">
	<!--<a href="javascript:;" layer-url="<?php echo U('wanfaadd');?>" title="添加玩法" class="btn btn-primary radius"><i class="Hui-iconfont">&#xe600;</i> 添加玩法</a>&nbsp;&nbsp;&nbsp;-->
	<a class="btn btn-success radius r btn-refresh" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
<div class="page-container">
	<div id="tab-oldPlay" class="HuiTab">
		<div class="tabBar cl">
            <?php if(is_array($playList)): $i = 0; $__LIST__ = $playList;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$play): $mod = ($i % 2 );++$i;?><span><?php echo ($play['title']); ?></span><?php endforeach; endif; else: echo "" ;endif; ?>
            <a class="allshow" style="text-decoration: none;float: right">全部展开</a></div>


		<!--六合彩-->
        <?php if(is_array($playList)): $i = 0; $__LIST__ = $playList;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$play): $mod = ($i % 2 );++$i; $typeid = $key; ?>
		<div class="tabCon">
			<table class="table table-border table-bordered table-hover">
				<?php if(is_array($play['list'])): $i = 0; $__LIST__ = $play['list'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$list): $mod = ($i % 2 );++$i;?><thead>
				<tr>
					<th colspan="10" bgcolor="#f9f9f9"><div class="l"><?php echo ($key); ?></div><a class="tabbtn" style="float:right;font-weight:bolder;text-decoration: none;font-size:13px;">+</a></th>
				</tr>
				</thead>
				<tbody class="tbaodyshow" style="display:none;">
				<?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$item): $mod = ($i % 2 );++$i;?><tr>
					<td><?php echo ($item['class2'] ? $item['class2']: $item['class3']); ?>：<input id="class3-<?php echo ($item["id"]); ?>" defaultValue="<?php echo ($item['class3']); ?>" class="input-text size-S input-change" type="text" style="width:80px;" name="class3" value="<?php echo ($item['class3']); ?>">
						<input class="input-text size-S input-change" style="width:80px;" id="typeid-<?php echo ($item["id"]); ?>" type="hidden" name="typeid" value="<?php echo ($typeid); ?>" defaultValue="<?php echo ($typeid); ?>">
                    </td>
                    <td colspan="2" style="display:block">赔率：<input id="rate-<?php echo ($item["id"]); ?>" defaultValue="<?php echo ($item['rate']); ?>" class="input-text size-S input-change" type="text" style="width:60px;" name="rate" value="<?php echo ($item['rate']); ?>"></td>
					<td>最高注数：<input id="totalzs-<?php echo ($item["id"]); ?>" defaultValue="<?php echo ($item['totalzs']); ?>" class="input-text size-S input-change" type="text" style="width:60px;" name="totalzs" value="<?php echo ($item['totalzs']); ?>"></td>
					<td>最低消费：<input id="minxf-<?php echo ($item["id"]); ?>" defaultValue="<?php echo ($item['minxf']); ?>" class="input-text size-S input-change" type="text" style="width:60px;" name="minxf" value="<?php echo ($item['minxf']); ?>"></td>
					<td>最高消费消费：<input id="maxxf-<?php echo ($item["id"]); ?>" defaultValue="<?php echo ($item['maxxf']); ?>" class="input-text size-S input-change" type="text" style="width:60px;" name="maxxf" value="<?php echo ($item['maxxf']); ?>"></td>
                    <td>排序：<input id="sort-<?php echo ($item["id"]); ?>" defaultValue="<?php echo ($item['sort']); ?>" class="input-text size-S input-change" type="text" style="width:60px;" name="sort" value="<?php echo ($item['sort']); ?>"></td>
					<td><a id="<?php echo ($item['typeid']); ?>_<?php echo ($item["id"]); ?>" typeid="<?php echo ($item['typeid']); ?>" playid="<?php echo ($item["id"]); ?>" remark="<?php echo ($item['remark']); ?>" title="<?php echo ($item['remark']); ?>" class="btn btn-success size-MINI radius modelwfts" onClick="modelwfts(this)">玩法提示</a></td>
					<td>
						<?php if($item['isopen'] == 1): ?><span class="label label-success radius" status-url="<?php echo url('setoldwfstatus',['typeid'=>$item['typeid'],'id'=>$item['id'],'name'=>'isopen']);?>">启用</span>
						<?php else: ?>
						<span class="label label-defaunt radius" status-url="<?php echo url('setoldwfstatus',['typeid'=>$item['typeid'],'id'=>$item['id'],'name'=>'isopen']);?>">禁用</span><?php endif; ?>
					</td>
					<td><button onClick="baocun('<?php echo ($item["id"]); ?>');" class="btn btn-secondary-outline radius size-S">保存</button></td>
				</tr><?php endforeach; endif; else: echo "" ;endif; ?>
				</tbody><?php endforeach; endif; else: echo "" ;endif; ?>
			</table>
		</div><?php endforeach; endif; else: echo "" ;endif; ?>
	</div>
</div>
<!--_footer 作为公共模版分离出去-->
<script type="text/javascript" src="../Template/admin/resources/ui/lib/jquery/1.9.1/jquery.min.js"></script> 
<script type="text/javascript" src="../Template/admin/resources/ui/lib/layer/2.1/layer.js"></script> 
<script type="text/javascript" src="../Template/admin/resources/ui/static/h-ui/js/H-ui.js"></script> 
<script type="text/javascript" src="../Template/admin/resources/ui/static/h-ui.admin/js/H-ui.admin.js"></script> 
<script type="text/javascript" src="../Template/admin/resources/ui/lib/My97DatePicker/WdatePicker.js"></script> 
<script type="text/javascript" src="../Template/admin/resources/ui/lib/icheck/jquery.icheck.min.js"></script> 
<script type="text/javascript" src="../Template/admin/resources/ui/lib/jquery.validation/1.14.0/jquery.validate.min.js"></script> 
<script type="text/javascript" src="../Template/admin/resources/ui/lib/jquery.validation/1.14.0/validate-methods.js"></script> 
<script type="text/javascript" src="../Template/admin/resources/ui/lib/jquery.validation/1.14.0/messages_zh.min.js"></script>
<!--/_footer /作为公共模版分离出去-->

<!--请在下方写此页面业务相关的脚本-->
<script type="text/javascript">
$(function(){
	$('.skin-minimal input').iCheck({
		checkboxClass: 'icheckbox-blue',
		radioClass: 'iradio-blue',
		increaseArea: '20%'
	});
	$.Huitab("#tab-system .tabBar span","#tab-system .tabCon","current","click","6");
});

<!--AJAX POST表单提交-->
$("#AjaxPostForm,.AjaxPostForm").submit(function(){
	var $this    = $(this);
	var $confirm = $this.attr('confirm');
	var url      = $this.attr('action');
 
	var defaultsubvalue = $("#AjaxPostForm,.AjaxPostForm").find("[type='submit']").val();
 
	layer.confirm('您确定需要操作吗？', {
	  btn: ['确定','取消'] 
	}, function(index){
	  	layer.close(index);
		$("#AjaxPostForm,.AjaxPostForm").find("[type='submit']").val('正在提交...').attr("disabled","disabled");
		$.post(url,$this.serialize(), function(json){
			if(json.status==1){
				layer.msg(json.info,{icon:1,time:2000});
				$("#AjaxPostForm,.AjaxPostForm").find("[type='submit']").val(defaultsubvalue).removeAttr("disabled");
			 
				setTimeout("parentrefresh()", 2000);
			}else if(json.status==0){
				$("#AjaxPostForm,.AjaxPostForm").find("[type='submit']").val(defaultsubvalue).removeAttr("disabled");
				layer.msg(json.info,{icon:2,time:3000});
			}
			
		}, "json");
	}, function(index){
	  layer.close(index);
	});
	
	return false;
});
function parentrefresh(index){
	var index = parent.layer.getFrameIndex(window.name);
	if(window.name==''){
		window.location.reload();
	}else{
		parent.location.reload();
	}
	parent.layer.close(index);
 
 
}
$(document).on("click", "[layer-url]", function() {
	var title = $(this).attr('title')?$(this).attr('title'):'窗口信息',
		url   = $(this).attr('layer-url'),
		w     = $(this).attr('layer-width'),
		h     = $(this).attr('layer-height');
	if(w=='100%'){
		var layerindex = layer.open({
		  type: 2,
		  content: url,
		  area: ['320px', '195px'],
		  maxmin: true
		});
		layer.full(layerindex);
	}else{
		layer_show(title,url,w,h);
	}
});
$(document).on("click", "[status-url]", function() {
	var obj       = $(this);
	var url       = $(this).attr('status-url');
	var title     = obj.attr('title')?$(this).attr('title'):'您确认操作吗？';
	var issuccess = obj.hasClass('label-success');
	layer.confirm(title,function(index){
		$.getJSON(url, function(json){
			if(json.status==1){
				if(issuccess){
					obj.removeClass('label-success').addClass('label-defaunt').text('禁用');
				}else{
					obj.removeClass('label-defaunt').addClass('label-success').text('启用');
				}
				layer.msg('操作成功',{icon: 1,time:1000});
			}else{
				layer.msg(json.info,{icon: 2,time:2000});
			};
		});
	});
});
$(document).on("click", "[layer-del-url]", function() {
	var obj       = $(this);
	var url       = obj.attr('layer-del-url');
	var title     = '您确认删除吗？';
	var issuccess = obj.hasClass('label-success');
	layer.confirm(title,function(index){
		$.getJSON(url, function(json){
			if(json.status==1){
				obj.parents("tr").remove();
				layer.msg('已删除!',{icon:1,time:1000});
			}else{
				layer.msg(json.info,{icon: 2,time:2000});
			};
		});
	});
});
$(document).on("click", "[layer-alt-url]", function() {
	var obj       = $(this);
	var url       = obj.attr('layer-alt-url');
	var title     = '您确认操作吗？';
	var issuccess = obj.hasClass('label-success');
	layer.confirm(title,function(index){
		$.getJSON(url, function(json){
			if(json.status==1){
				 
				layer.msg('操作成功!',{icon:1,time:1000});
			}else{
				layer.msg(json.info,{icon: 2,time:2000});
			};
		});
	});
});

$(document).on("click", "[deleteall-url]", function() {
	if($("input.checkids:checked").length<1){
		layer.msg('请勾选操作的数据行',{icon:5,time:3000});
		return false;
	}
	var obj       = $(this),
		url       = obj.attr('deleteall-url'),
		form      = obj.parents('form');
	form.attr('action',url)
	layer.confirm('确定批量删除吗？',function(index){
		$.post(url,form.serialize(), function(json){
			if(json.status==1){
				layer.msg(json.info,{icon:1,time:2000});
				setTimeout("window.location.reload()", 2000);
			}else if(json.status==0){
				layer.msg(json.info,{icon:2,time:3000});
			}
			
		}, "json");
	});
});

$(document).on("click", "[listorder-url]", function() {
	if($("input.checkids:checked").length<1){
		layer.msg('请勾选操作的数据行',{icon:5,time:3000});
		return false;
	}
	var obj       = $(this),
		url       = obj.attr('listorder-url'),
		form      = obj.parents('form');
	form.attr('action',url)
	layer.confirm('确定排序吗？',function(index){
		$.post(url,form.serialize(), function(json){
			if(json.status==1){
				layer.msg(json.info,{icon:1,time:2000});
				setTimeout("window.location.reload()", 2000);
			}else if(json.status==0){
				layer.msg(json.info,{icon:2,time:3000});
			}
			
		}, "json");
	});
});

</script>
<!--/请在上方写此页面业务相关的脚本-->

<script>
	$(function(){
		 $('.tabbtn').each(function(i){
			 $('.tabbtn').eq(i).click(function(){
				 $('.tbaodyshow').eq(i).toggle();
				 if($(this).html() == "-"){
					 $(this).html('+');
				 }else{
					 $(this).html('-');
				 }

			 })
		 })
		$('.allshow').click(function(){
			if($('.allshow').html()=="全部展开"){
				$('.tbaodyshow').show();
				$('.allshow').html("全部收起");
				$('.tabbtn').html('-');
			}else{
				$('.tbaodyshow').hide();
				$('.allshow').html("全部展开");
				$('.tabbtn').html('+');
			}

		})
	})
</script>
<script type="text/javascript" src="../Template/admin/resources/ui/lib/bootstrap-modal/2.2.4/bootstrap-modalmanager.js"></script>
<script type="text/javascript" src="../Template/admin/resources/ui/lib/bootstrap-modal/2.2.4/bootstrap-modal.js"></script>

<div id="modalwfts_old" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-header">
		<p id="myModalLabel">玩法提示修改</p><a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>
	</div>
	<div class="modal-body">
		<p>
			<input id="_wfts_typeid" class="input-text size-S" type="hidden">
			<input id="_wfts_playid" class="input-text size-S" type="hidden">
			<textarea id="_wfts_remark" class="textarea radius" placeholder="玩法提示内容..."></textarea>
		</p>
	</div>
	<div class="modal-footer">
		<button class="btn btn-primary" onClick="editmodelwfts()">确定</button> <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
	</div>
</div>
<script type="text/javascript" src="../Template/admin/resources/ui/lib/bootstrap-Switch/bootstrapSwitch.js"></script>
<script>
	function editmodelwfts(){
		var playid = $("#_wfts_playid").val();
		var typeid = $("#_wfts_typeid").val();
		var remark = $("#_wfts_remark").val();
		layer.confirm('确定修改吗？',function(index){
			$.post("<?php echo url('editoldWfts');?>",{'typeid':typeid,'id':playid,'remark':remark},function(json){
				if(json.status==1){
					$("#_wfts_typeid").val('');$("#_wfts_playid").val('');$("#_wfts_remark").val('');
					$("#"+typeid+"_"+playid).attr({'remark':remark,'title':remark});
					$("#modalwfts_old").modal("hide");
					layer.msg(json.info,{icon:1,time:2000});
				}else if(json.status==0){
					layer.msg(json.info,{icon:2,time:3000});
				}

			}, "json");
		});
	}
	function modelwfts(obj){
		$("#_wfts_typeid").val($(obj).attr('typeid'));
		$("#_wfts_playid").val($(obj).attr('playid'));
		$("#_wfts_remark").val($(obj).attr('remark'));
		$("#modalwfts_old").modal("show");
	}
	$("input.input-change").blur(function(){
		var defaultvalue = $(this).attr('defaultValue'),
			value        = $(this).val();
		if(defaultvalue!=value){
			$(this).addClass('danger');
		}else{
			$(this).removeClass('danger');
		}
	});
	function baocun($id){
		var typeid = $("#typeid-"+$id),
			rate   = $("#rate-"+$id),
			minxf  = $("#minxf-"+$id),
			maxxf  = $("#maxxf-"+$id),
			class3  = $("#class3-"+$id),
			totalzs  = $("#totalzs-"+$id),
            sort  = $("#sort-"+$id),
			url       = "<?php echo url('oldWfSave');?>";
		layer.confirm('确定修改吗？'
			,{btn: ['确定','取消']}
			,function(index){
				$.post(
					url,
					{
						'id':$id,
						'typeid':typeid.val(),
						'rate':rate.val(),
						'minxf':minxf.val(),
						'maxxf':maxxf.val(),
						'totalzs':totalzs.val(),
						'class3':class3.val(),
                        'sort':sort.val()
					},
					function(json){
						if(json.status==1){
							rate.attr('defaultValue',rate.val()).removeClass('danger').addClass('success');
							minxf.attr('defaultValue',minxf.val()).removeClass('danger').addClass('success');
							maxxf.attr('defaultValue',maxxf.val()).removeClass('danger').addClass('success');
							class3.attr('defaultValue',class3.val()).removeClass('danger').addClass('success');
							typeid.attr('defaultValue',typeid.val()).removeClass('danger').addClass('success');
							totalzs.attr('defaultValue',totalzs.val()).removeClass('danger').addClass('success');
                            sort.attr('defaultValue',sort.val()).removeClass('danger').addClass('success');
							layer.msg(json.info,{icon:1,time:2000});
						}else if(json.status==0){
							layer.msg(json.info,{icon:2,time:3000});
						}

					}, "json");
			});
	};
    $.Huitab("#tab-oldPlay .tabBar span","#tab-oldPlay .tabCon","current","click","0");
 
</script>
</body>
</html>