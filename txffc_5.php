<?php
date_default_timezone_set('PRC');//设置为中华人民共和国
require ("curl_http.php");
function BuLings ( $num ) {
	if ( $num<10 ) {
		$num = '000'.$num;
	}
	if ( $num>=10 && $num<100 ) {
		$num = '00'.$num;
	}
	if ( $num>=100 && $num<1000 ) {
		$num = '0'.$num;
	}
	return $num;
}
$curl = new Curl_HTTP_Client();
$curl->set_referrer("https://www.pk103.com/draw-cq_ssc-today.html");
$curl->set_user_agent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.3.4000 Chrome/30.0.1599.101");
$ccc = $curl->fetch_url("http://tx-ssc.com/api/getData");
if($ccc){
$content=json_decode($ccc,true);
$expect=$content[0]["issue"];
}

$content = $curl->fetch_url("http://77tj.org/api/tencent/onlineim");

if($content){
$data=json_decode($content,true);
$kjtime=substr($data[0]["onlinetime"],-8);

$arr = str_split($data[0]["onlinenumber"]);
$sum=substr(array_sum($arr),-1);
$opencode = "$sum,$arr[5],$arr[6],$arr[7],$arr[8]";

//var_dump($data);exit;
$opentime = $data[0]["onlinetime"];

}
//header("Content-type: application/xml");
echo'<?xml version="1.0" encoding="utf-8"?>';
echo '<xml><row expect="'."$expect".'" opencode="'."$opencode".'" opentime="'."$opentime".'" /></xml>';
ob_end_flush();
;echo '
'
?>