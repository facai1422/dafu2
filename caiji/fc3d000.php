<?php
$api = 'https://api.api68.com/QuanGuoCai/getLotteryInfoList.do?lotCode=10041';
$resource = file_get_contents( $api );  
$data = json_decode( $resource , 1 );

$rq='20'.$data['result']['data']['preDrawIssue'];

$hm=$data['result']['data']['preDrawCode'];

$sj=$data['result']['data']['preDrawTime'];

//header('Content-Type:text/xml;charset=utf8');

$hm=substr($hm,0,59);

echo '{"sign":true,"message":"获取成功","data":[{"title":"福彩3D","name":"fc3d","expect":"'.$rq.'","opencode":"'.$hm.'","opentime":"'.$sj.'","source":"开彩采集","sourcecode":""}]}';