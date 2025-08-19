<!DOCTYPE html>
<html>
<head>
    <title>额度转换 - 手机版</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <script src="/static/js/jquery.js"></script>
    <script src="/static/js/m/iscroll.js"></script>
    <script src="/static/js/m/common.js"></script>
    <link href="/static/css/m/user.css" rel="stylesheet">
    <script src="/static/js/m/layer.js"></script><link href="http://xdp1.xdpvip.com/static/js/m/need/layer.css?2.0" type="text/css" rel="styleSheet" id="layermcss">

</head>
<body>
<?php
ini_set("display_errors", "On"); 
  session_start();
  $username=$_GET['username'];



  $mysqli=new Mysqli('127.0.0.1','root','3020x63032979','vip2018xc');
  $mysqli->query('set names utf8');
  $sql="select money,username from myr_users where username='$username'";
  $res=$mysqli->query($sql); 

  $arr=$res->fetch_array();
//print_r(  $arr);

  $usermoney=$arr['money'];
  $user_info["user_name"] =$arr['username'];


?>

<div class="main_bg">
    <!-- main start -->
    <div class="hs_main" id="hs_main">
        <div class="header">

            <a href="/mobile/member/memberinfo.html" class="leftmenu"></a>

            <div class="wanfaname">
                额度转换

            </div>

            <div class="rightmenu"></div>
            <div class="clear"></div>
        </div>

        <div id="wrapper">

            <div class="userwarp">

                <div class="form">

                  <p style="
    padding: 10px;
    color: red;
">*转账需知:第一次转账时,请先登录游戏,否则,会转账失败!</p>
                    <!--row start-->
                    <div class="row form-row">
                        <div class="form-item form-title">
                            <label>用户余额</label>
                        </div>
                        <div class="form-item form-input">
                            <span id="user-money">0.00</span>
                        </div>
                    </div>
                    <div class="row form-row">
                        <div class="form-item form-title">
                            <label>AG余额</label>
                        </div>
                        <div class="form-item form-input">
                            <span id="ag_money">0.00</span>
                        </div>
                    </div>
                    <div class="row form-row">
                        <div class="form-item form-title">
                            <label>BBIN余额</label>
                        </div>
                        <div class="form-item form-input">
                            <span id="bb_money">0.00</span>
                        </div>
                    </div>
                    <div class="row form-row">
                        <div class="form-item form-title">
                            <label>沙巴体育余额</label>
                        </div>
                        <div class="form-item form-input">
                            <span id="ibc_money">0.00</span>
                        </div>
                    </div>
                    <!--row end-->
                    <!--row start-->
                    <div class="row form-row">
                        <div class="form-item form-title">
                            <label>转账选择</label>
                        </div>
                        <div class="form-item form-input">
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
                        </div>
                    </div>
                    <!--row end-->
                    <!--row start-->
                    <!--row end-->
                    <!--row start-->
                    <div class="row">
                        <div class="form-item form-title">
                            <label>转账金额</label>
                        </div>
                        <div class="form-item form-input">
                            <input type="text" name="zz_money" id="zz_money">
        &nbsp;<span class="money-tip">*最低转账金额:1 </span>
                        </div>
                    </div>
                    <!--row end-->
                    <!--row start-->
                    <!--row end-->

                </div>

                <!--page-option start-->
                <div class="dis-select page-option">
                    <div class="item">
                        <input type="submit"  class="tpui-button" onclick="confirmChangeMoney()" value="确认转账" id="submitLinkButton">
                    </div>
                </div>
                <!--page-option end-->


            </div>

        </div>

    </div>
</div>



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

<style type="text/css">
  .form .form-title {
    width: 110px;
}
</style>

</body>
</html>