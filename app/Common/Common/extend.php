<?php
function httpCurl($url, $timeout = 5)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    $rs = curl_exec($ch);
    curl_close($ch);
    $code = mb_detect_encoding($rs);
    if($code == 'UTF-8'){
        $rs = mb_convert_encoding($rs,'ASCII','UTF-8');
        $rs = str_replace('?','',$rs);
    }
    return $rs;
}