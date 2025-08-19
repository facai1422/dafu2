{include file="Public/meta" /}
<title>站内信列表</title>
</head>
<body>
    <nav class="breadcrumb">
<a href="javascript:;" layer-url="{:U('Message/add')}" title="发送站内信" class="btn btn-primary radius"><i class="Hui-iconfont">&#xe600;</i> 发送站内信</a>&nbsp;&nbsp;&nbsp;
<a class="btn btn-success radius r btn-refresh" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
<div class="page-container">
	<div class="mt-5">
    <form method="post" action="">
	<table class="table table-border table-bordered table-hover table-bg table-sort">
		<thead>
			<tr class="text-c">
				<th width="25"><input type="checkbox" name="" value=""></th>
                <th width="30">ID</th>
				<th width="">标题</th>
				<th width="">内容</th>
				<th width="">会员ID</th>
				<th width="">时间</th>
				<th width="">发信管理员</th>
				<th width="60">操作</th> 
			</tr>
		</thead>
		<tbody>
			{volist name="list" id="vo"}
            <tr class="text-c">
                <td><input type="checkbox" class="checkids" value="{$vo.id}" name="ids[{$vo.id}]"></td>
				<td>{$vo.id}</td>
                <td>{$vo.title}</td>
                <td>{$vo.msg}</td>
                <td>{$vo.uid}</td>
                <td>{$vo.time|date="Y-m-d H:i:s",###}</td>
                <td>{$vo.admin}</td>
				<td class="td-manage">
                <a style="text-decoration:none" class="ml-5" layer-del-url="{:U('msgdelete',['id'=>$vo['id']])}" href="javascript:;" title="删除"><i class="Hui-iconfont">&#xe6e2;</i></a>
                </td>
			</tr>
            {/volist}
		</tbody>
	</table>
    <div class="cl pd-5 bg-1 bk-gray mt-20"> <span class="l"><a href="javascript:;" deleteall-url="{:U('deleteall')}" title="删除" class="btn btn-danger-outline radius">删除</a>&nbsp;&nbsp;</span> <span class="r">共有数据：<strong>{:count($totalcount)}</strong> 条</span> </div>
    </form>
	</div>
</div>
{include file="Public/footer" /}
</body>
</html>