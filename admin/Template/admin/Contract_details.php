{include file="Public/meta" /}
<title>契约合同</title>
</head>
<body>
<article class="page-container">
<form action="" method="post" class="form form-horizontal validate-form" id="AjaxPostForm">
  <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>日契约</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="{$res.days}" placeholder="达到多少进行分红" name="days" style="width:220px; height:35px;">元
			</div>
		</div>
		 <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>周契约</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="{$res.mues}" placeholder="达到多少进行分红" name="mues" style="width:220px; height:35px;">元
			</div>
		</div>
		 <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>月契约</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="{$res.yues}" placeholder="达到多少进行分红" name="yues" style="width:220px; height:35px;">元
			</div>
		</div>
		 <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>契约比例</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="{$res.ratio}" placeholder="契约比例" name="ratio" style="width:220px; height:35px;">%
			</div>
		</div>
		 <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>可签个数</label>
			<div class="formControls col-xs-8 col-sm-9">
				<select class="select" name="views" style="width:220px; height:35px;">
                <option value="0" <?php if($res['views'] == 0) {?>selected<?php }?>>0个</option>
                <option value="1"  <?php if($res['views'] == 1) {?>selected<?php }?>>1个</option>
				<option value="2"  <?php if($res['views'] == 2) {?>selected<?php }?>>2个</option>
				<option value="3"  <?php if($res['views'] == 3) {?>selected<?php }?>>3个</option>
			</select>
			</div>
		</div>
		 <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>状态</label>
			<div class="formControls col-xs-8 col-sm-9">
				<select class="select" name="status" style="width:220px; height:35px;">
                <option value="0"  <?php if($res['status'] == 0) {?>selected<?php }?>>关闭</option>
                <option value="1"  <?php if($res['status'] == 1) {?>selected<?php }?>>开启</option>
			</select>
			</div>
		</div>
			<div class="row cl">
			<div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-3">
				<input class="btn btn-primary radius" type="submit" value="&nbsp;&nbsp;设置&nbsp;&nbsp;">
			</div>
		</div>
</form>
</article>

{include file="Public/footer" /}
</body>
</html>