{include file="Public/meta" /}
<title>签约审核</title>
</head>
<body>
<article class="page-container">
	<form action="" method="post" class="form form-horizontal validate-form" id="AjaxPostForm">
        <input name="id" type="hidden" value="<?php echo $id?>">
        
        <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>审核说明</label>
			<div class="formControls col-xs-8 col-sm-9">
				<textarea name="remarks" style="width:320px; height:265px;"></textarea>
			</div>
		</div>
        
        <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>审核状态</label>
			<div class="formControls col-xs-8 col-sm-9">
				<select class="select" name="status" style="width:320px; height:35px;">
                <option value="1">审核通过</option>
                <option value="2">审核拒绝</option>
			</select>
			</div>
		</div>
        <div class="row cl" style="color:red">
		<label class="form-label col-xs-4 col-sm-3"></label>
			<div class="formControls col-xs-8 col-sm-9">
				管理员注意：分红审核发放时间，必须按照契约结束时间为准，才可发放分红。
			</select>
			</div>
			</div>

        
		<div class="row cl">
			<div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-3">
				<input class="btn btn-primary radius" type="submit" value="&nbsp;&nbsp;提交审核&nbsp;&nbsp;">
			</div>
		</div>
	</form>
</article>

{include file="Public/footer" /}

</body>
</html>