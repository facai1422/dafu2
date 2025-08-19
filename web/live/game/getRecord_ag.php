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
$S_time= strtotime('2017-11-10 22:38:11');
$E_time=$time;
$limit=100;
$PageIndex=0;
$platformCode='AG';
$api=new Biapi();
$data=$api->GetMerchantReport($platformCode,$S_time,$E_time,$time,$PageIndex,$limit);
// print_r($data); exit;
$count=0;
if(!empty($data['data'])){
	$count=$data['TotalCount'];
	$data =$data['data'];
	$data =array_reverse($data);
	foreach($data as $k=>$v){
		
		$sql = "select * from platform_records where billno='".$v['betOrderNo']."' and account='".$v['username']."' and platform_id= '1' ";
		
		$res=$mysqli->query($sql);
		$arr=$res->fetch_array();
		
		if(!empty($arr)){
			if($arr['playoff'] != $v['netPnl']){
				$sql ="update platform_records set playoff='".$v['netPnl']."' where billno='".$v['betOrderNo']."' and account='".$v['username']."' and platform_id= '1'";
				$mysqli->query($sql);
			}
		}else{
			$ctime =SaveTime($v['betTime']);
			$gametime=(int)strtotime($ctime);
			$palyoff =$v['netPnl'];
			if( $palyoff< 0){
				$status ='未中奖';
			}else if($palyoff >0){
				$status ='中奖';
			}else if($palyoff == 0){
				$status ='和局';
			}
			$sql = "insert into platform_records(platform_id,account,billno,game_time,game_type,bet_amount,playoff,validate_amount,created_at,updated_at,result) values ('1','".$v['username']."','".$v['betOrderNo']."','".$ctime."','".$v['platformType']."','".$v['betAmount']."','".$palyoff ."','".$v['validBetAmount']."','".$gametime."','".$gametime."','".$status."')";
			
			$mysqli->query($sql);



			/* 新增 */
            $code['weiShu'] = 0;
            $code['playedGroup'] = 0;
            $code['playedId'] = 0;
            $code['actionNo'] =$v['betOrderNo'];
            $code['actionTime'] =  strtotime($ctime )   ; 
            $code['kjTime'] = 0;// strtotime($code['updateTime'])   ;
            $code['actionNum'] = $v['betAmount']/2;
            $code['amount'] = $v['betAmount'];
            $code['zjCount'] = 0;
            $code['bonus'] = 0;
            $code['betType'] = 0;
            $code['actionAmount'] = 0; 
			$code['actionName']  =  '';
			$code['uid'] = 0;


			$code['playerName'] =$v['username'];

			$sql2 = " INSERT INTO `blast_bets_api` (`wjorderId`, `orderId`, `serializeId`, `uid`, `username`,  ";
            $sql2.= " `type`, `playedGroup`, `playedId`, `actionNo`, `actionTime`,  ";
            $sql2.= " `actionNum`, `actionData`, `weiShu`,`mode`, `beiShu`, ";
            $sql2.= " `amount`,  `lotteryNo`, `kjTime`,   `zjCount`,`bonus`, ";

            $sql2.= "  `betType`,   `actionAmount` ,`isDelete`,`PTAPI` ,`actionName`) ";
            $sql2.= " VALUES('" . $code['actionNo'] . "','" . $code['actionNo'] . "','" . $code['actionNo'] . "','" . $code['uid'] . "','" . $code['playerName'] . "',";
            $sql2.= " '" . $code['channelId'] . "','" . $code['playedGroup'] . "','" . $code['playedId'] . "','" . $code['actionNo'] . "','" . $code['actionTime'] . "',";
            $sql2.= "'" . $code['actionNum'] . "','" . $code['number'] . "','" . $code['weiShu'] . "','" . $code['unit'] . "','" . $code['multiple'] . "',";
            $sql2.= "'" . $code['amount'] . "','" . $code['winningNumber'] . "','" . $code['kjTime'] . "','" . $code['zjCount'] . "','" . $code['bonus'] . "',";
            $sql2.= "'" . $code['betType'] . "','" . $code['actionAmount'] . "'   ,'" . $code['isDelete'] . "'   ,'AG'  ,'".  $code['actionName']  ."'  )";            
			//echo $sql2;  die;			
			$arr = $mysqli->query($sql2);

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
            AG视讯:成功采集到<?=$count?>条数据
			<span id="timeinfo"></span>
      </td>
  </tr>
</table>
</body>
</html>

