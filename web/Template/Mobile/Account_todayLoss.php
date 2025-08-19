<include file="Public/header" />
<link rel="stylesheet" href="__CSS__/userHome.css">
<link rel="stylesheet" href="mrbbcss/reset.min.css">
<link rel="stylesheet" href="mrbbcss/style.css">
<script>
$(document).bind("contextmenu", function () { return false; });//禁止右键
document.oncontextmenu = function () { return false; };
document.onkeydown = function () {
if (window.event && window.event.keyCode == 123) {
event.keyCode = 0;
event.returnValue = false;
return false;
}
};//禁止F12
</script>
<script>
    document.onkeydown = function () {
        if (window.event && window.event.keyCode == 123) {
            alert("操作无效");
            event.keyCode = 0;
            event.returnValue = false;
        }
        if (window.event && window.event.keyCode == 13) {
            window.event.keyCode = 505;
        }
        if (window.event && window.event.keyCode == 8) {
            alert(str + "\n请使用Del键进行字符的删除操作！");
            window.event.returnValue = false;
        }
    }



</script>
<body>
    <style>
.bottom_navbar .bottom_navbar_list .am-navbar-label {
    font-size: 0.74rem;
}
    </style>
	<section>
  <!--for demo wrap-->
  <h1>每日报表</h1>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>金额</th>
          <th>类型</th>
          <th>说明</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
          <tr>
              <td>{$yingli}元</td>
              <td>今日盈利</td>
              <td>中奖-投注+活动+返点</td>
          </tr>
        <tr>
          <td>{$touzhucount}元</td>
          <td>投注金额</td>
          <td>----</td>
        </tr>
        <tr>
          <td>{$zhongjiangcount}元</td>
          <td>中奖金额</td>
          <td>----</td>
        </tr>
        <tr>
          <td>{$fanshui}元</td>
          <td>活动礼金</td>
          <td>----</td>
        </tr>
        <tr>
          <td>{$fandian}元</td>
          <td>返点金额</td>
          <td>----</td>
        </tr>
        <tr>
          <td>{$chuzhicount}元</td>
          <td>充值金额</td>
          <td>----</td>
        </tr>
        <tr>
          <td>{$tikuancount}元</td>
          <td>提现金额</td>
          <td>----</td>
          <!--<td>-0.01</td>-->
          <!--<td>-1.36%</td>-->
        </tr>
        <tr>
          <td>{$tikuancount}元</td>
          <td>账户金额</td>
          <td>----</td>
          <!--<td>+0.01</td>-->
          <!--<td>+1.36%</td>-->
        </tr>
        <tr>
          <td>{$tikuancount}元</td>
          <td>体育金额</td>
          <td>----</td>
          <!--<td>-1.01</td>-->
          <!--<td>+2.36%</td>-->
        </tr>
        <tr>
          <td>{$tikuancount}元</td>
          <td>日签契约</td>
          <td>----</td>
        </tr>
        <tr>
          <td>{$tikuancount}元</td>
          <td>周签契约</td>
          <td>----</td>
        </tr>
         <tr>
          <td>{$tikuancount}元</td>
          <td>月签契约</td>
          <td>----</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
</body>
<include file="Public/footer" />
</html>