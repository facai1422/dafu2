<?php
ini_set("display_errors", "On"); 
session_start();
include('ApiBi/BiApi.class.php');
$game=$_GET['target'];
$user=$_GET['user'];
if($game!=''){
	$api=new BiApi();
	$res=$api->balances($game,$user);
	echo $res;
	
}
?>