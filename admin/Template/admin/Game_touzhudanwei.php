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
			<input type="hidden" class="input-text" value="{$info.trano}" name="trano">
			<input type="hidden" class="input-text" value="{$info.yjf}" name="old_yjf">
			<input type="hidden" class="input-text" value="{$info.okamount}" name="okamount">
			<input type="hidden" class="input-text" value="{$info.mode}" name="mode">
			<input type="hidden" class="input-text" value="{$info.amount}" name="amount">
			<input type="hidden" class="input-text" value="{$info.amountafter}" name="amountafter">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>投注单位：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<select name="yjf">
				<option value="1" {if condition="$info['yjf'] eq 1"}selected{/if} >元</option>
				<option value="0.1" {if condition="$info['yjf'] eq 0.1"}selected{/if} >角</option>
				<option value="0.01" {if condition="$info['yjf'] eq 0.01"}selected{/if} >分</option>
				</select>
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