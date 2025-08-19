{include file="Public/meta" /}
<title>投注编辑</title>
</head>
<body>
<article class="page-container">
	<form action="" method="post" class="form form-horizontal validate-form" id="AjaxPostForm">
		{present name="info"}
        <input name="id" type="hidden" value="{$info[$_pk]}">
        {/present}
        
		 <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>订单编号：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" disabled="disabled" class="input-text" value="{$info.trano}" placeholder="单号" name="trano">
				
			</div>
		</div>
		
		 <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>投注用户：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" disabled="disabled" class="input-text" value="{$info.username}" placeholder="用户名" name="username">
				
			</div>
		</div>
		
		 <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>彩种类型：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" disabled="disabled" class="input-text" value="{$info.cptitle}" placeholder="彩种类型" name="cptitle">
				
			</div>
		</div>
		
		 <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>投注期号：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" disabled="disabled" class="input-text" value="{$info.expect}" placeholder="期号" name="expect">
				
			</div>
		</div>
		
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>奖金赔率：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" disabled="disabled" class="input-text" value="{$info.mode}" placeholder="奖金/赔率" name="mode">
				
			</div>
		</div>
		
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>中奖金额：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" disabled="disabled" class="input-text" value="{$info.okamount}" placeholder="中奖金额" name="okamount">
				
			</div>
		</div>
		
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>中奖注数：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" disabled="disabled" class="input-text" value="{$info.okcount}" placeholder="中奖注数" name="okcount">
				
			</div>
		</div>
		
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>开奖号码：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" disabled="disabled" class="input-text" value="{$info.opencode}" placeholder="开奖号" name="opencode">
				
			</div>
		</div>
	
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>中奖状态：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" disabled="disabled" class="input-text" value="{if condition="$info['isdraw'] eq '1'"}{$zt = '中'}{elseif condition="$info['isdraw'] eq '0'" /}{$zt = '未开奖'}{elseif condition="$info['isdraw'] eq '-1'" /}{$zt = '未中'}{elseif condition="$info['isdraw'] eq '-2'" /}{$zt = '撤'}{/if}" placeholder="状态" name="expect">
				
			</div>
		</div>
		
		 <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>玩法模式：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" disabled="disabled" class="input-text" value="{$info.playtitle}" placeholder="玩法" name="playtitle">
				
			</div>
		</div>
		
		 <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>订单注数：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" disabled="disabled" class="input-text" value="{$info.itemcount}" placeholder="注数" name="itemcount">
				
			</div>
		</div>
		
        <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>投注内容：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<textarea style="font-size: 15px;" name="tzcode" rows="6" cols="70">{:trim($info['tzcode'])}</textarea>
			</div>
		</div>
        
		
                
        
        <div id="showtypetpl"></div>
        
		<div class="row cl">
			<div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-3">
				<input class="btn btn-primary radius" type="submit" value="&nbsp;&nbsp;提交&nbsp;&nbsp;">
			</div>
		</div>
	</form>
</article>

{include file="Public/footer" /}

<script type="text/html" id="catetype_1">
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3">绑定模型：</label>
			<div class="formControls col-xs-8 col-sm-9"><span class="select-box" style="width:150px;">
			<select class="select" name="model" {present name="info"}disabled readonly{/present}>
                {foreach name="modulelist" item="md" key="mdk"}
                <option value="{$md['name']}" {if condition="$info[model] eq $md['name']"}selected{/if}>{$md['title']}</option>
                {/foreach}
			</select>
			</span></div>
		</div>
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3">列表模版：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="{$info.listtpl}" placeholder="列表模版" name="listtpl">
			</div>
		</div>
        
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3">内容页模版：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="{$info.showtpl}" placeholder="内容页模版" name="showtpl">
			</div>
		</div>
</script>

<script type="text/html" id="catetype_2">
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3">单页模版：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="{$info.pagetpl}" placeholder="单页模版" name="pagetpl">
			</div>
		</div>
</script>

<script type="text/html" id="catetype_3">
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3">外部链接：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="{$info.url}" placeholder="外部链接" name="url">
			</div>
		</div>
</script>
<script>
$(function(){
	var tplid = $("input[name='catetype']:checked").val();
	changetypetpl(tplid);
});
$("input[name='catetype']").change(function(){
	var tplid = $("input[name='catetype']:checked").val();
	changetypetpl(tplid);
})
function changetypetpl(tplid){
	var html = $("#catetype_"+tplid).html();
	$("#showtypetpl").html(html);
}
</script>
</body>
</html>