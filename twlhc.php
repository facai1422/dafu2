<?php
$api = "https://083fed1d27812d7d3d76264a3bc69baa.lotterydata.net/";
$data = file_get_contents($api);
$data = json_decode($data,1);

$qh = $data["twlhc"]['opens'][0]["term"];
$hm = $data["twlhc"]['opens'][0]["number"];
$rq = $data["twlhc"]['opens'][0]["time"];



echo '{"sign":true,"message":"获取成功","data":[{"title":"台湾大乐透","name":"twlhc","expect":"'.$qh.'","opencode":"'.$hm.'","opentime":"'.$rq.'","source":"开彩采集","sourcecode":""}]}';