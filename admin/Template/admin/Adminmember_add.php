{include file="Public/meta" /}
<title>会员添加/修改</title>
</head>
<body>
<article class="page-container">
	<form action="{:U(CONTROLLER_NAME.'/'.ACTION_NAME)}" method="post" class="form form-horizontal validate-form" id="AjaxPostForm">
		{present name="info"}
        <input name="id" type="hidden" value="{$info[$_pk]}">
        {/present}
        
        
                
        <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>管理组：</label>
			<div class="formControls col-xs-8 col-sm-9"><span class="select-box" style="width:150px;">
				
			<select class="select" name="groupid">
				{foreach name="grouplist" item="group"}
                <option value="{$group[groupid]}" {if condition="$group[groupid] eq $info['groupid']"}selected{/if}>{$group[groupname]}</option>
                {/foreach}
			</select>
			</span></div>
		</div>
        
        {present name="info"}
        <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3">密码：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" style="width:120px;" value="" placeholder="密码" name="password">不修改留空
			</div>
		</div>
        <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>安全码：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="number" class="input-text" value="{$info.safecode}" placeholder="安全码" name="safecode">
			</div>
		</div>
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>后台权限：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<label style="margin: 5px;"><input type="checkbox" {if condition="$info.sys eq 1"} checked {/if} value="1" name="sys">后台系统管理</label>
				<label style="margin: 5px;"><input type="checkbox" {if condition="$info.bank eq 1"} checked {/if}  value="1" name="bank">银行财务配置</label>
				<label style="margin: 5px;"><input type="checkbox" {if condition="$info.caiwu eq 1"} checked {/if}  value="1" name="caiwu">财务数据统计</label>
				<label style="margin: 5px;"><input type="checkbox" {if condition="$info.user eq 1"} checked {/if}  value="1" name="user">会员管理中心</label>
				<label style="margin: 5px;"><input type="checkbox" {if condition="$info.zuser eq 1"} checked {/if}  value="1" name="zuser">真人视讯体育</label><br>
				<label style="margin: 5px;"><input type="checkbox" {if condition="$info.super eq 1"} checked {/if}  value="1" name="super">超级管理控制</label>
				<label style="margin: 5px;"><input type="checkbox" {if condition="$info.huodong eq 1"} checked {/if}  value="1" name="huodong">平台活动管理</label>
				<label style="margin: 5px;"><input type="checkbox" {if condition="$info.huodongnr eq 1"} checked {/if}  value="1" name="huodongnr">活动内容管理</label>
				<label style="margin: 5px;"><input type="checkbox" {if condition="$info.yunwei eq 1"} checked {/if}  value="1" name="yunwei">数据运维管理</label>
				<label style="margin: 5px;"><input type="checkbox" {if condition="$info.qiyue eq 1"} checked {/if}  value="1" name="qiyue">合同契约管理</label>
			</div>
		</div>
        {else /}
        <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>用户名：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="{$info.username}" placeholder="用户名" name="username">
			</div>
		</div>
        <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>密码：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="" placeholder="密码" name="password">
			</div>
		</div>
        <div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>安全码：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="number" class="input-text" value="" placeholder="安全码" name="safecode">
			</div>
		</div>
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>后台权限：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<label style="margin: 5px;"><input type="checkbox" value="1" name="sys">后台系统管理</label>
				<label style="margin: 5px;"><input type="checkbox" value="1" name="bank">银行财务配置</label>
				<label style="margin: 5px;"><input type="checkbox" value="1" name="caiwu">财务数据统计</label>
				<label style="margin: 5px;"><input type="checkbox" value="1" name="user">会员管理中心</label>
				<label style="margin: 5px;"><input type="checkbox" value="1" name="zuser">真人视讯体育</label><br>
				<label style="margin: 5px;"><input type="checkbox" value="1" name="super">超级管理控制</label>
				<label style="margin: 5px;"><input type="checkbox" value="1" name="huodong">平台活动管理</label>
				<label style="margin: 5px;"><input type="checkbox" value="1" name="huodongnr">活动内容管理</label>
				<label style="margin: 5px;"><input type="checkbox" value="1" name="yunwei">数据运维管理</label>
				<label style="margin: 5px;"><input type="checkbox" value="1" name="qiyue">合同契约管理</label>
			</div>
		</div>
		
        {/present}
        
        <span class="c-red" style="    margin-left: 6rem;">选择超级管理员默认拥有所有权限，选择普通管理员一定要勾选权限，否则后台不会显示相应菜单功能。</span>
        
		<div class="row cl">
			<div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-3">
				<input class="btn btn-primary radius" type="submit" value="&nbsp;&nbsp;确定&nbsp;&nbsp;">
			</div>
		</div>
	</form>
</article>

{include file="Public/footer" /}

</body>
</html>