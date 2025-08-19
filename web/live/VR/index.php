<?php
session_start();
$playerName =$_SESSION['username']; 

if($playerName=='' || empty($_SESSION['username'])) {
   echo '<script type="text/javascript" src="/skin/js/jquery-1.7.2.min.js"></script> 
   <script type="text/javascript" src="/skin/layer/layer.js"></script>
    <script type="text/javascript"> 
		  function nologin(){  
			   layer.msg("您尚未登录，请登陆后再试。<br>返回登录", {shift: -1},  function() {
						//history.go(-1);//返回上一页
				self.location="http://www.ych088.com/index.php/user/login";//转跳其它网页
				}); 				
		  } 
        </script>
   
   <script>nologin();</script>'; 
   die;
}  


include_once("vr.php");  
?>
<?php  
		
		$game= $_REQUEST['target'];   
			switch($game){
				  case 'Wallet':
				  {
					 $data =UserWallet($playerName); 
					 $json_obj = json_decode($data, true); 
					 exit($json_obj['balance']);
					 break;
				  }
				  case 'createUser':
				  {
					  $data  =   createUser($playerName);
					  break;
				  }
				  default:
				  case 'login':
				  { 
			
					  $data  =   createUser($playerName); 		  
					  $json_obj = json_decode($data, true);
					  if($json_obj['errorCode']==0 ||$json_obj['errorCode']==18 ){
						 $playerOdds =1950;			
						 $playerOdds =  getplayerOdds($playerName);		
						// echo $playerOdds; die;			
						 $channelId = "12";			
						 $data =   createLoginUrl($playerName,$playerOdds, $channelId); 
					  }
					  break;
				  } 
				 case 'trans': //(0:入款，1:提款) 
				  {
					   
					  $zz_type= $_REQUEST['zz_type'];  
					  $zz_money= $_REQUEST['zz_money'];   
					  $userinfo = GetUserInfo($playerName,$zz_type,$zz_money);	
					 
					  exit('操作成功'); 	     
					  break;
				  } 
				  case 'user': //(0:入款，1:提款) 
					  { 		   
					   $zz_type= $_REQUEST['zz_type'];  
					   $zz_money= $_REQUEST['zz_money'];  		  
					   if( $zz_type==100) {$type =0; } else {$type=1 ;}		  
					   $data =   transaction($playerName ,$zz_money,$type); 
					   $json_obj = json_decode($data, true); 
					   exit('操作成功'); 	     
					   break;
			
			
					  } 
				  case 'Bet': // 
					  { 
						  $startTime =  gmdate("Y-m-d\T00:00:00\Z");
						  $endTime= gmdate("Y-m-d\T23:59:59\Z");
						  $data =   GetBetlist($playerName,$startTime,  $endTime,   $channelId = NULL) ;						 
						  $json_obj = json_decode($data, true); 
						  Insert_OherBets($json_obj);   
						  return $json_obj;  
						  exit('操作成功'); 
						  break;
					 } 
				  case 'Schedule': // 
					  { 
						  $startTime =  gmdate("Y-m-d\T00:00:00\Z");
						  $endTime= gmdate("Y-m-d\T23:59:59\Z");
						  $data =   Schedule($playerName,$startTime,  $endTime,   $channelId = NULL) ;						 
						  $json_obj = json_decode($data, true);	
						  $yuanarry = $json_obj['records'] ;						
						  foreach( $yuanarry as $kh=>$vh){ 
						
								  unset($yuanarry[$kh]['detail']); 
								  $yuanarry[$kh]['mainstate'] =$yuanarry[$kh]['state'];
								  unset($yuanarry[$kh]['state']); 
								  unset($yuanarry[$kh]['multiple']); 
								  unset($yuanarry[$kh]['totalAmount']); 
								  unset($yuanarry[$kh]['cancelledAmount']); 						 
								  unset($yuanarry[$kh]['completedAmount']); 						 // print_r($yuanarry);
								  unset($yuanarry[$kh]['costPerIssue']); 
								  $neary = $json_obj['records'][$kh]['detail']; // DIE;
								  $newarray =array();
								  foreach($neary as $k=>$v){
									$newarray['betRecords'][$k] = array_merge($yuanarry[$kh], $v);
								  }							
								  Insert_OherBetsSchedule($newarray,'Schedule');  		

						  }

						  return $json_obj;  
						  exit('操作成功'); 
						  break;
					 }
					 
				 case 'ScheBet': 
					{
					      $startTime =  gmdate("Y-m-d\T00:00:00\Z");
						  $endTime= gmdate("Y-m-d\T23:59:59\Z");
						  $data =   Schedule($playerName,$startTime,  $endTime,   $channelId = NULL) ;						 
						  $json_obj = json_decode($data, true);	
						  $yuanarry = $json_obj['records'] ;						
						  foreach( $yuanarry as $kh=>$vh){ 
						
								  unset($yuanarry[$kh]['detail']); 
								  $yuanarry[$kh]['mainstate'] =$yuanarry[$kh]['state'];
								  unset($yuanarry[$kh]['state']); 
								  unset($yuanarry[$kh]['multiple']); 
								  unset($yuanarry[$kh]['totalAmount']); 
								  unset($yuanarry[$kh]['cancelledAmount']); 						 
								  unset($yuanarry[$kh]['completedAmount']); 						 // print_r($yuanarry);
								  unset($yuanarry[$kh]['costPerIssue']); 
								  $neary = $json_obj['records'][$kh]['detail']; // DIE;
								  $newarray =array();
								  foreach($neary as $k=>$v){
									$newarray['betRecords'][$k] = array_merge($yuanarry[$kh], $v);
								  }							
								  Insert_OherBetsSchedule($newarray,'Schedule');  		

						  }

						  $data =   GetBetlist($playerName,$startTime,  $endTime,   $channelId = NULL) ;						 
						  $json_obj = json_decode($data, true); 

						 


						  Insert_OherBets($json_obj);   
						  return $json_obj;  
						  exit('操作成功'); 
						  break;




					}



			 }      
		
		?> 

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>    
       <title>VR真人彩</title>
       <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
       <script type="text/javascript" src="/skin/js/jquery-1.7.2.min.js"></script> 
		<script type="text/javascript" src="/skin/layer/layer.js"></script>
        <script type='text/javascript'> 
		  function nologin(){  
			   layer.msg('您尚未登录，请登陆后再试。<br>返回登录', {shift: -1},  function() {
						//history.go(-1);//返回上一页
				self.location='http://www.baidu.com';//转跳其它网页
				}); 				
		  } 
        </script>  
	   </head>
     <!--  -->
       <frameset rows="0%,*,2%"  border= "0" >
	    <frame noresize="noresize" src="top.html" scrolling="auto" name="top" id ="top"> 
		<frame noresize="noresize" src="<?=$data?>"  frameborder="0"   name="main" id ="main">  
		<frame noresize="noresize" src="btom.html" scrolling="auto" name="btom" id ="btom">
	 </frameset><noframes></noframes> 	 
</html> 