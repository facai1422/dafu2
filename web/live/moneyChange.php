<?php
ini_set("display_errors", "On"); 
	session_start();
	$username=$_GET['username'];



	$mysqli=new Mysqli('127.0.0.1','root','3020x63032979','vip2018xc');
	$mysqli->query('set names utf8');
	$sql="select coin,username from z4r5jk12_members where username='$username'";
	$res=$mysqli->query($sql); 

	$arr=$res->fetch_array();
//print_r(	$arr);

	$usermoney=$arr['coin'];
	$user_info["user_name"] =$arr['username'];


?>
<style>
tr {
	line-height:40px;
}
.money-tip {
	color:#e43636;
	font-size:13px;
}
#money-btn {
	cursor:pointer;
}
</style>
<table class="MMain MNoBorder" style="width: auto;">
  <tbody>
    <tr> <span class="money-tip">*转账需知:第一次转账时,请先登录游戏,否则,会转账失败!</span> </tr>
    <tr>
      <td nowrap="" class="">用户余额：</td>
      <td class=""><span id="user-money">0.00</span> </td>
    </tr>
     <tr>
      <td nowrap="" class="">&nbsp;&nbspAG余额：</td>
      <td class=""><span id="ag_money">0.00</span> </td>
    </tr>
   <tr>
      <td nowrap="" class="">&nbsp;&nbspBBIN余额：</td>
      <td class=""><span id="bb_money">0.00</span> </td>
    </tr>
	<tr>
      <td nowrap="" class="">&nbsp;&nbsp沙巴体育余额：</td>
      <td class=""><span id="ibc_money">0.00</span> </td>
    </tr>
     <!--<tr>
      <td nowrap="" class="">&nbsp;&nbspIBC余额：</td>
      <td class=""><span id="ibc_money">0.00</span> </td>
    </tr>
    <tr>
      <td nowrap="" class="">&nbsp;&nbspMW余额：</td>
      <td class=""><span id="mw_money">0.00</span> </td>
    </tr>
    -->
    <tr>
      <td nowrap=""> 转账选择： </td>
      <td>
        <select name="zz_type" id="zz_type">
          <option value="11"  >主账户-&gt;AG娱乐场</option>
          <option value="21"  >AG娱乐场-&gt;主账户</option> 
		  <option value="12">主账户-&gt;BBIN娱乐场</option>
          <option value="22">BBIN娱乐场-&gt;主账户</option>
          <option value="13">主账户-&gt;沙巴体育</option>
          <option value="23">沙巴体育-&gt;主账户</option>		  
          <!--    
          <option value="15">主账户-&gt;MW娱乐场</option>
          <option value="25">MW娱乐场-&gt;主账户</option>
		  -->
        </select>
      </td>
    </tr>
    <tr>
      <td nowrap=""> 转账金额： </td>
      <td><input type="text" name="zz_money" id="zz_money">
        &nbsp;<span class="money-tip">*最低转账金额:1 </span> </td>
    </tr>
    <tr>
      <td nowrap=""></td>
      <td><input type="button" onclick="confirmChangeMoney()" value="确认转账" id="money-btn">
      </td>
    </tr>
  </tbody>
</table>
<script src="../js/jquery-1.7.1.min.js"></script>
<script>
	function confirmChangeMoney(){
       if(confirm("你确定转账吗?")){
		 
		   if(!$("#zz_money").val()){
                alert("请输入转账金额。");
                return;
			}
            var regu = /^[-]{0,1}[0-9]{1,}$/;
            if(!regu.test($("#zz_money").val())){
                alert('请输入整数。');
                return;
            }
            if( ($("#zz_money").val()<1)){
                alert("小于最低转账金额，请重新输入。");
                return;
            } 
			$('#money-btn').attr('disabled','disabled');
			    var url ="/live/ed.php?&username=<?=$user_info["user_name"]?>";
				type =$("#zz_type").val();
				if(parseInt(type)>700) {url ='/live/vr/index.php'; }
				$.post(url,{'target':'trans','zz_type':$("#zz_type").val(),'zz_money':$("#zz_money").val()},function(data){
				alert(data);
				window.location.reload(true) 
			});
	   }
    }
</script>

<script>
	var usermoney="<?php echo $usermoney;?>";
	$(document).ready(function(){
		$('#user-money').html(usermoney);
		$.get('/live/vr/index.php?target=Wallet',function(data){
			$('#vr_money').html(data);
		});
	});
</script>

<script>
function ag_money(){$.get("/live/balance.php?target=AG&user=<?=$user_info["user_name"]?>",{},function(reg){$("#ag_money").html(reg)},'text')};ag_money();
function bb_money(){$.get("/live/balance.php?target=BB&user=<?=$user_info["user_name"]?>",{},function(reg){$("#bb_money").html(reg)},'text')};bb_money();
function ibc_money(){$.get("/live/balance.php?target=IBC&user=<?=$user_info["user_name"]?>",{},function(reg){$("#ibc_money").html(reg)},'text')};ibc_money();



</script>
