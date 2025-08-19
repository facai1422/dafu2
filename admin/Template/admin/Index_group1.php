{if condition="$admininfo.sys eq 1"}
<dl id="menu-system">
    <dt><i class="Hui-iconfont">&#xe62e;</i> &#21518;&#21488;&#31995;&#32479;&#31649;&#29702;<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd style="display:block">
        <ul>
            <li><a href="{:U('System/setting')}" data-title="&#21518;&#21488;&#31995;&#32479;&#35774;&#32622;">&#21518;&#21488;&#31995;&#32479;&#35774;&#32622;</a></li>
            <li><a href="{:U('Caipiao/cptype')}" data-title="&#20840;&#23616;&#24425;&#31080;&#31649;&#29702;">&#20840;&#23616;&#24425;&#31080;&#31649;&#29702;</a></li>
            <li><a href="{:U('Caipiao/wanfa')}" data-title="&#23448;&#26041;&#29609;&#27861;&#35774;&#32622;">&#23448;&#26041;&#29609;&#27861;&#35774;&#32622;</a></li>
            <li><a href="{:U('Caipiao/oldWanfa')}" data-title="&#22806;&#22260;&#29609;&#27861;&#35774;&#32622;">&#22806;&#22260;&#29609;&#27861;&#35774;&#32622;</a></li>
            <li><a href="{:U('Caipiao/kaijiang')}" data-title="&#20840;&#23616;&#24320;&#22870;&#35774;&#32622;">&#20840;&#23616;&#24320;&#22870;&#35774;&#32622;</a></li>
            <li><a href="{:U('Caipiao/yukaijiang')}" data-title="&#31995;&#32479;&#24320;&#22870;&#39044;&#35774;">&#31995;&#32479;&#24320;&#22870;&#39044;&#35774;</a></li>
            <li><a href="{:U('Game/manage')}" data-title="&#24425;&#31080;&#25237;&#27880;&#35760;&#24405;">&#24425;&#31080;&#25237;&#27880;&#35760;&#24405;</a></li>
            <li><a href="{:U('Game/checkerrorder')}" data-title="&#25237;&#27880;&#39118;&#25511;&#31649;&#29702;">&#25237;&#27880;&#39118;&#25511;&#31649;&#29702;</a></li>
			
        </ul>
    </dd>
</dl>
{/if}

{if condition="$admininfo.bank eq 1"}
<dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe6f3;</i> &#38134;&#34892;&#36130;&#21153;&#37197;&#32622;<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="{:U('Sysbank/manage')}" data-title="&#25552;&#29616;&#38134;&#34892;&#31649;&#29702;">&#25552;&#29616;&#38134;&#34892;&#31649;&#29702;</a></li>
            <li><a href="{:U('Member/payset')}" data-title="&#20805;&#20540;&#38134;&#34892;&#31649;&#29702;">&#20805;&#20540;&#38134;&#34892;&#31649;&#29702;</a></li>
            <li><a href="{:U('Member/recharge')}" data-title="&#29992;&#25143;&#20805;&#20540;&#35760;&#24405;">&#29992;&#25143;&#20805;&#20540;&#35760;&#24405;</a></li>
            <li><a href="{:U('Member/withdraw')}" data-title="&#29992;&#25143;&#25552;&#29616;&#35760;&#24405;">&#29992;&#25143;&#25552;&#29616;&#35760;&#24405;</a></li>
			<li><a href="{:U('Member/withdraw')}" data-title="&#22865;&#32422;&#20998;&#32418;&#31649;&#29702;">&#22865;&#32422;&#20998;&#32418;&#31649;&#29702;</a></li>
			
        </ul>
    </dd>
</dl>
{/if}
{if condition="$admininfo.caiwu eq 1"}
<dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe61e;</i> 财务数据统计<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="{:U('Tongji/gaikuang')}" data-title="后台统计概况">后台统计概况</a></li>
            <li><a href="{:U('Tongji/yingkui')}" data-title="财务盈亏统计">财务盈亏统计</a></li>
            <li><a href="{:U('Tongji/user')}" data-title="用户统计概况">用户统计概况</a></li>
            <li><a href="{:U('Tongji/tdgaikuang')}" data-title="团队统计概况">团队统计概况</a></li>
            <li><a href="{:U('Tongji/cptouzhu3d')}" data-title="全局投注统计">全局投注统计</a></li>
            <li><a href="{:U('Tongji/chongti3d')}" data-title="充值提款统计">充值提款统计</a></li>
        </ul>
    </dd>
</dl>
{/if}

{if condition="$admininfo.user eq 1"}
<dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe60d;</i> 会员管理中心<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="{:U('Membergroup/manage')}" data-title="会员级别分组">会员级别分组</a></li>
            <li><a href="{:U('Member/manage')}" data-title="代理会员列表">代理会员列表</a></li>
            <li><a href="{:U('Member/sameipuser')}" data-title="异常登录地点">异常登录地点</a></li>
            <li><a href="{:U('Member/fuddetail')}" data-title="会员账变记录">会员账变记录</a></li>
            <li><a href="{:U('Member/banklist')}" data-title="会员银行信息">会员银行信息</a></li>
            <li><a href="{:U('Member/agentlink')}" data-title="代理注册链接">代理注册链接</a></li>
            <li><a href="{:U('Member/memlog')}" data-title="会员登录日志">会员登录日志</a></li>
            <li><a href="{:U('Member/khddmsg')}" data-title="站内消息列表">站内消息列表</a></li>
        </ul>
    </dd>
</dl>
{/if}
{if condition="$admininfo.zuser eq 1"}
<dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe6bb;</i> 真人视讯体育<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="{:U('Zhenren/transrecord')}" data-title="额度转换记录">额度转换记录</a></li>
            <li><a href="{:U('Zhenren/agztrecord')}" data-title="AG 投注记录">AG 投注记录</a></li>
            <li><a href="{:U('Zhenren/bbtzrecord')}" data-title="BB 投注记录">BB 投注记录</a></li>
            <li><a href="{:U('Zhenren/sstzrecord')}" data-title="KY 投注记录">KY 投注记录</a></li>
            <li><a href="{:U('Zhenren/agztreport')}" data-title="AG 会员报表">AG 会员报表</a></li>
            <li><a href="{:U('Zhenren/bbtzreport')}" data-title="BB 会员报表">BB 会员报表</a></li>
            <li><a href="{:U('Zhenren/sstzreport')}" data-title="KY 会员报表">KY 会员报表</a></li>
            <li><a href="{:U('Zhenren/getrecords')}" data-title="线路切换配置">线路切换配置</a></li>
			<li><a href="{:U('Zhenren/getrecords')}" data-title="WG 接口配置">WG 接口配置</a></li>
			<li><a href="{:U('Zhenren/getrecords')}" data-title="BI 接口配置">BI 接口配置</a></li>
			<li><a href="{:U('Zhenren/getrecords')}" data-title="开启额度免转">开启额度免转</a></li>
         
        </ul>
    </dd>
</dl>
{/if}
{if condition="$admininfo.super eq 1"}
<dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe62d;</i> 超级管理控制<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="{:U('Admingroup/manage')}" data-title="管理分组配置">管理分组配置</a></li>
            <li><a href="{:U('Adminmember/manage')}" data-title="超级管理列表">超级管理列表</a></li>
            <li><a href="{:U('Adminmember/memlog')}" data-title="股东管理人员">股东管理人员</a></li>
			<li><a href="{:U('Adminmember/memlog')}" data-title="财务管理人员">财务管理人员</a></li>
			<li><a href="{:U('Adminmember/memlog')}" data-title="日常管理人员">日常管理人员</a></li>
			<li><a href="{:U('Adminmember/memlog')}" data-title="开奖管理人员">开奖管理人员</a></li>
        </ul>
    </dd>
</dl>
{/if}
{if condition="$admininfo.syhuodongs eq 1"}
<dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe6bb;</i> 平台活动管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="{:U('System/zengsong')}" data-title="赠送活动">赠送活动管理</a></li>
            <li><a href="{:U('Member/fanshui')}" data-title="会员反水">会员反水管理</a></li>
            <li><a href="{:U('Member/jinjijiangli')}" data-title="晋级奖励">晋级奖励管理</a></li>
            <li><a href="{:U('Member/dailiyongjin')}" data-title="代理佣金">代理佣金管理</a></li>
        </ul>
    </dd>
</dl>
{/if}

{if condition="$admininfo.huodongnr eq 1"}
<dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe616;</i> 活动内容管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="{:U('News/category')}" data-title="资讯栏目">资讯栏目管理</a></li>
            <li><a href="{:U('News/manage')}" data-title="新闻资讯">新闻资讯管理</a></li>
            <li><a href="{:U('News/gonggao')}" data-title="公告管理">网站公告管理</a></li>
        </ul>
    </dd>
</dl>
{/if}
{if condition="$admininfo.yunwei eq 1"}
<dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe616;</i> 数据运维管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="{:U('Yunwei/caiji')}" data-title="采集设置">全局采集设置</a></li>
            <li><a href="{:U('Yunwei/dbclear')}" data-title="数据清理">管理数据清理</a></li>
            <li><a href="{:U('Database/index',['type'=>'export'])}" data-title="数据库备份">管理数据备份</a></li>
            <li><a href="{:U('Database/index',['type'=>'import'])}" data-title="数据库还原">管理数据还原</a></li>
            <!--<li><a href="{:U('Database/nization')}" data-title="数据备份同步">数据备份同步</a></li>-->
            <li><a href="{:U('Yunwei/jihua')}" data-title="计划任务">配置计划任务</a></li>
            <li><a href="{:U('Yunwei/yijianclear')}" data-title="一键清理数据">全局数据清理</a></li>
        </ul>
    </dd>
</dl>
{/if}
{if condition="$admininfo.qiyue eq 1"}
<dl id="menu-article">
    <dt><i class="Hui-iconfont">&#xe616;</i> 合同契约管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
    <dd>
        <ul>
            <li><a href="{:U('Contract/details')}" data-title="契约合同设置">契约合同设置</a></li>
			<li><a href="{:U('Contract/users')}" data-title="签约用户">签约用户管理</a></li>
			<li><a href="{:U('Contract/drawshare')}" data-title="分红领取">契约分红领取</a></li>
        </ul>
    </dd>
</dl>
{/if}


