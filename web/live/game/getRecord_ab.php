<?php
include_once($_SERVER['DOCUMENT_ROOT']."/live/ApiBi/Biapi.class.php");
header('Content-Type:text/html; charset=utf-8');
$mysqli=new Mysqli('localhost','root','root','d_xingcai_n');
$mysqli->query('set names utf8');
function SaveTime($jsonDate){
preg_match('/\d{10}/',$jsonDate,$matches);
return (date('Y-m-d H:i:s',$matches[0]));
}

$time=time();
$S_time=$time-60*60;
$E_time=$time;
$limit=100;
$PageIndex=0;
$platformCode='AB';
$api=new Biapi();
$data=$api->GetMerchantReport($platformCode,$S_time,$E_time,$time,$PageIndex,$limit);
 //var_dump($data);
// exit;
$count=0;
if(!empty($data['data'])){
	$count=$data['TotalCount'];
	$data =$data['data'];
	$data =array_reverse($data);
	foreach($data as $k=>$v){
		
		$sql = "select * from platform_records where billno='".$v['betNum']."' and account='".$v['client']."' and platform_id= '1' ";
		
		$res=$mysqli->query($sql);
		$arr=$res->fetch_array();
		
		if(!empty($arr)){
			if($arr['playoff'] != $v['winOrLoss']){
				$sql ="update platform_records set playoff='".$v['winOrLoss']."' where billno='".$v['betNum']."' and account='".$v['client']."' and platform_id= '1'";
				$mysqli->query($sql);
			}
		}else{
			$ctime =SaveTime($v['betTime']);
			$gametime=(int)strtotime($ctime);
			$palyoff =$v['winOrLoss'];
			if( $palyoff< 0){
				$status ='未中奖';
			}else if($palyoff >0){
				$status ='中奖';
			}else if($palyoff == 0){
				$status ='和局';
			}
			$sql = "insert into platform_records(platform_id,account,billno,game_time,game_type,bet_amount,playoff,validate_amount,created_at,updated_at,result) values ('1','".$v['client']."','".$v['betNum']."','".$ctime."','".$platformCode."','".$v['betAmount']."','".$palyoff ."','".$v['winOrLoss']."','".$gametime."','".$gametime."','".$status."')";
			
			$mysqli->query($sql);
		}
		
	}
}
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<style type="text/css">
body,td,th {
    font-size: 12px;
}
body {
    margin-left: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
}
</style>
</head>
<body>
<script>
var limit="300" 
if (document.images){ 
	var parselimit=limit
} 
function beginrefresh(){ 
if (!document.images) 
	return 
if (parselimit==1) 
	window.location.reload() 
else{ 
	parselimit-=1 
	curmin=Math.floor(parselimit) 
	if (curmin!=0) 
		curtime=curmin+"秒后自动获取!" 
	else 
		curtime=cursec+"秒后自动获取!" 
		timeinfo.innerText=curtime 
		setTimeout("beginrefresh()",1000) 
	} 
} 

window.onload=beginrefresh 
</script>
<table width="100%"border="0" cellpadding="0" cellspacing="0">
  <tr> 
    <td align="left">
      <input type=button name=button value="刷新" onClick="window.location.reload()">
            AB视讯:成功采集到<?=$count?>条数据
			<span id="timeinfo"></span>
      </td>
  </tr>
</table>
</body>
</html>