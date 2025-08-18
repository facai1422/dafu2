<?php 

$api = 'http://vip.lkag3.com/K25cefa4949df10/AF11X5.josn';
$resource = file_get_contents_by_curl( $api );  
$data = json_decode( $resource , 1 );

header('Content-Type:text/json;charset=utf8');

$rq=$data[0]['issue'];
$hm=$data[0]['code'];
$sj=$data[0]['opendate'];

echo '{"sign":true,"msg":"\u6210\u529f","data":[{"title":"安徽11选5","name":"txffc","expect":"'.$rq.'","opencode":"'.$hm.'","opentime":"'.str_replace('/','-',$sj).'","source":"开彩采集","sourcecode":""}]}';

function file_get_contents_by_curl($url){
	file_put_contents("test3.txt", $url);
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_HEADER,0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);//禁止调用时就输出获取到的数据
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION,1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST,false);
	$result = curl_exec($ch);
	curl_close($ch);return $result;
}

 ?>