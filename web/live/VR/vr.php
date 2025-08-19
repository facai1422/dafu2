<?php
//Define API Key
define("KEY", "66J4XHNZ82T266PH442D8NDLBX266DBT");
//Define VR API Server Url
define("VR_SERVER", "http://fe.vrbetdemo.com");
//Define Merchant Id
define("MERCHANT_ID", "YCH");
$C_Patch=$_SERVER['DOCUMENT_ROOT'];
include($C_Patch.'/live/ApiBi/BiApi.class.php');
function GetUserInfo($playerName, $zz_type, $zz_money) {
    $mysqli = new Mysqli('127.0.0.1', 'root', 'root', 'd_xingcai_n');
    $mysqli->query('set names utf8');
    $zztype = isset($zz_type) ? $zz_type : '';
    $yy = isset($zz_money) ? trim($zz_money) : '';
    $user = $_SESSION['username'];
    $sql = "select * from blast_members where username='$user'";
    $res = $mysqli->query($sql);
    $row = $res->fetch_array();
    $conver = doubleval($yy);
    if (($zztype == '11' || $zztype == '13' || $zztype == '15' || $zztype == '12' || $zztype == '701') && ($conver > $row["coin"])) {
        echo '转账金额不能大于账户余额，请重新输入。';
        exit;
    }
    $gametype = '';
    if ($zztype == '11' || $zztype == '21') {
        $gametype = 'BB';
        if ($zztype == '11') {
            $about = "主账户->BB娱乐";
        } else if ($zztype == '21') {
            $about = "BB娱乐->主账户";
        }
    } else if ($zztype == '13' || $zztype == '23') {
        $gametype = 'AB';
        if ($zztype == '13') {
            $about = "主账户->AB娱乐";
        } else if ($zztype == '23') {
            $about = "AB娱乐->主账户";
        }
    } else if ($zztype == '15' || $zztype == '25') {
        $gametype = 'MW';
        if ($zztype == '15') {
            $about = "主账户->MW娱乐";
        } else if ($zztype == '25') {
            $about = "MW娱乐->主账户";
        }
    } else if ($zztype == '12' || $zztype == '22') {
        $gametype = 'MW';
        if ($zztype == '12') {
            $about = "主账户->AG娱乐";
        } else if ($zztype == '22') {
            $about = "AG娱乐->主账户";
        }
    } else if ($zztype == '701' || $zztype == '702') {
        $gametype = 'VR';
        if ($zztype == '701') {
            $about = "主账户-VR真人彩";
        } else if ($zztype == '702') {
            $about = "VR真人彩->主账户";
        }
    }
    $username = $_SESSION['username'];
    $sqlc = "select * from blast_members where username='$username'";
    $result = $mysqli->query($sqlc);
    $row = $result->fetch_array();
    $mon = $row['coin'];
	$serialNumber = strtotime(date("Y-m-d H:i:s",time()));
    if ($zztype == '11' || $zztype == '13' || $zztype == '15' || $zztype == '12' || $zztype == '701') {
        if ($yy > $mon) {
            echo "主钱包余额不足";
            exit;
        }
        if ($zz_type == '701') {
            $type = 0;
        } else {
            $type = 1;
        }
		
        $data = transaction($playerName, $zz_money, $type, $serialNumber ); 
        $result = json_decode($data, true);
        if ($result['state'] == 0) { //充值成功
            $res_money = $mon - $yy;
            $billNO = $serialNumber;
            //$about="转入".$gametype;
            $sql1 = "insert into blast_coin_log_api(`uid`,`extfield1`,`info`,`actionTime`,`type`,`coin`,`extfield2`,`userCoin`,`PTAPI`,liqType)
			values('" . $row["uid"] . "','$billNO','$about','".$serialNumber. "','0','" . -abs($yy) . "','" . $row["coin"] . "'," . ($row["coin"] - abs($yy)) . ",'VR',701)";
            $mysqli->query($sql1);
            if ($zztype == 11) {
                $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $zztype . ",'转入BB', " . time() . ",'转帐成功','$billNO')";
            } else if ($zztype == 13) {
                $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $zztype . ",'转入AB', " . time() . ",'转帐成功','$billNO')";
            } else if ($zztype == 15) {
                $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $zztype . ",'转入MW', " . time() . ",'转帐成功','$billNO')";
            } else if ($zztype == 701) {
                $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $zztype . ",'转入VR', " . time() . ",'转帐成功','$billNO')";
            } else {
                $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $zztype . ",'转入AG', " . time() . ",'转帐成功','$billNO')";
            }
            $mysqli->query($sql2);
            $sql = "update blast_members set coin=$res_money where username='$username'";
            $arr = $mysqli->query($sql);
            $mysqli->commit();
            echo '转入成功';
            exit;
        } else {
            echo '转入失败';
            exit;
        }
    } else if ($zztype == '21' || $zztype == '23' || $zztype == '25' || $zztype == '26' || $zztype == '702') {
        if ($zztype == '21') {
            $gameName = 'BB';
        } elseif ($zztype == '23') {
            $gameName = 'IBC';
        } elseif ($zztype == '25') {
            $gameName = 'MW';
        } elseif ($zztype == '26') {
            $gameName = 'AG';
        } elseif ($zztype == '702') {
            $gameName = 'VR';
        }
        $data = UserWallet($playerName);
        $json_obj = json_decode($data, true);
        $gameMon = $json_obj['balance'];
        if ($yy > $gameMon) {
            echo '额度转出失败';
            exit;
        }
        $data = transaction($playerName, $zz_money, 1, $serialNumber); //$res->zzmoney($gametype, $username, 'IN', $yy);
        $result = json_decode($data, true);
        if ($result['state'] == 0) {
            $res_money = $mon + $yy;
            $billNO = $serialNumber ;
           // $sql1 = "insert into blast_money_log(`user_id`,`order_num`,`about`,`update_time`,`type`,`order_value`,`assets`,`balance`) values('" . $row["uid"] . "','$billNO','$about','" . date("Y-m-d H:i:s") . "','真人转账','" . abs($yy) . "','" . $row["coin"] . "'," . ($row["coin"] - abs($yy)) . ")";

			$sql1 = "insert into blast_coin_log_api(`uid`,`extfield1`,`info`,`actionTime`,`type`,`coin`,`extfield2`,`userCoin`,`PTAPI`,liqType)
			values('" . $row["uid"] . "','$billNO','$about','".$serialNumber. "','0','" . abs($yy) . "','" . $row["coin"] . "'," . ($row["coin"] + abs($yy)) . ",'VR',702)";

            $mysqli->query($sql1);
            if ($zztype == 21) {
                $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $zztype . ",'BB转出', " . time() . ",'转帐成功','$billNO')";
            } elseif ($zztype == 23) {
                $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $zztype . ",'AB转出', " . time() . ",'转帐成功','$billNO')";
            } else if ($zztype == 25) {
                $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $zztype . ",'MW转出', " . time() . ",'转帐成功','$billNO')";
            } else if ($zztype == 702) {
                $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $zztype . ",'VR转出', " . time() . ",'转帐成功','$billNO')";
            } else {
                $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $zztype . ",'AG转出', " . time() . ",'转帐成功','$billNO')";
            }
            $st = $mysqli->query($sql2);
            $udata = array('uid' => $row["uid"], 'type' => 101, 'liqType' => 101, 'info' => $info,
            //'extfield0'=>$mysqli->mysqli_insert_id(),
            'extfield1' => $billNO, 'coin' => - $zz_money,);
            // print_r($udata);
            $sql = "update blast_members set coin=$res_money where username='$username'";
            $arr = $mysqli->query($sql);
            $mysqli->commit();
            echo '转出成功';
            exit;
        } else {
            echo '转出失败';
        }
    }
}
//玩家钱包余额查询
function UserWallet($playerName) {
    $version = "1.0";
    $id = MERCHANT_ID;
    $data = array("playerName" => $playerName);
    $json_data = json_encode($data);
    $json_encrypt_data = apiEncode($json_data);
    $url = VR_SERVER . "/UserWallet/Balance";
    $post_fields_data = array("version" => $version, "id" => $id, "data" => $json_encrypt_data);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields_data);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    $curl_res = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);
    if ($error) {
        //Return an error message
        return $error;
    } else {
        //Return a successful message
        $curl_res = apiDecode($curl_res);
        return $curl_res;
    }
}
//新增玩家帳戶
function createUser($playerName) {
    $version = "1.0";
    $id = MERCHANT_ID;
    $data = array("playerName" => $playerName);
    $json_data = json_encode($data);
    $json_encrypt_data = apiEncode($json_data);
    $url = VR_SERVER . "/Account/CreateUser";
    $post_fields_data = array("version" => $version, "id" => $id, "data" => $json_encrypt_data);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields_data);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    $curl_res = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);
    if ($error) {
        //Return an error message
        return $error;
    } else {
        //Return a successful message
        $curl_res = apiDecode($curl_res);
        return $curl_res;
    }
}
//玩家登入
function createLoginUrl($playerName, $playerOdds = 1950, $channelId = NULL) {
    $version = "1.0";
    $id = MERCHANT_ID;
    $walletDepositUrl = "http://www.ych088.com/index.php/cash/center";
    $walletWithdrawUrl = "http://www.ych088.com/index.php/cash/usertoCash";
    $walletUrl = "http://www.ych088.com/index.php/team/gameRecord";
    $departureUrl = "http://www.ych088.com/index.php/user/login";
    $other = "&walletDepositUrl=" . $walletDepositUrl . "&walletWithdrawUrl=" . $walletWithdrawUrl . "&walletUrl=" . $walletUrl . "&departureUrl=" . $departureUrl;
    $data = "playerName=" . $playerName . $other . "&playerOdds=" . $playerOdds . "&loginTime=" . gmdate("Y-m-d\TH:i:s\Z");
    //$data = "playerName=".$playerName."&playerOdds=".$playerOdds."&loginTime=".gmdate("Y-m-d\TH:i:s\Z");
    if (!is_null($channelId)) {
        $data.= "&channelId=" . $channelId;
    }
    $encrypt_data = apiEncode($data);
    $url = VR_SERVER . "/Account/LoginValidate";
    $loginUrl = $url . "?version=" . $version . "&id=" . $id . "&data=" . urlencode($encrypt_data);
    return $loginUrl;
}



function Schedule($playerName, $startTime, $endTime, $recordPage, $channelId = NULL) {

	$version = "1.0";
    $id = MERCHANT_ID;
    $version = "1.0";
    $id = MERCHANT_ID;
    $data = array("startTime" => $startTime,
		"endTime" => $endTime,
		"channelId" => -1,	 
		"playerName" => $playerName,
		"serialNumber" => "",
		"state" => - 1,	
		"recordPage" => 0,
		"recordCountPerPage" => 500, 

	);   //  "playerOdds" => 0,
    if (!is_null($channelId)) {
        //$data .= "&channelId=".$channelId;        
    }
	// PRINT_R($data);
    $json_data = json_encode($data);
    $json_encrypt_data = apiEncode($json_data);
    $url = VR_SERVER . "/MerchantQuery/Schedule";
    $post_fields_data = array("version" => $version, "id" => $id, "data" => $json_encrypt_data);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields_data);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    $curl_res = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);
    if ($error) {
        //Return an error message
        return $error;
    } else {
        //Return a successful message
        $curl_res = apiDecode($curl_res);
        return $curl_res;
    }

}



function GetBetlist($playerName, $startTime, $endTime, $recordPage, $channelId = NULL) {
    $version = "1.0";
    $id = MERCHANT_ID;
    $data = array("startTime" => $startTime, "endTime" => $endTime, "channelId" => - 1,
		"issueNumber" => "",  //20161014282
		"playerName" => $playerName, "serialNumber" => "", "state" => - 1, "isUpdateTime" => false, "recordCountPerPage" => 10000, "recordPage" => 0);
    if (!is_null($channelId)) {
        //$data .= "&channelId=".$channelId;
        
    }

	PRINT_R($data);


    $json_data = json_encode($data);
    $json_encrypt_data = apiEncode($json_data);
    $url = VR_SERVER . "/MerchantQuery/Bet";
    $post_fields_data = array("version" => $version, "id" => $id, "data" => $json_encrypt_data);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields_data);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    $curl_res = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);
    if ($error) {
        //Return an error message
        return $error;
    } else {
        //Return a successful message
        $curl_res = apiDecode($curl_res);
        return $curl_res;
    }
}
function getplayerOdds($username) {
    $max = 1960;
    $tmax = 13;
    $mysqli = new Mysqli('127.0.0.1', 'root', 'root', 'd_xingcai_n');
    $mysqli->query('set names utf8');
    $sql = "select coin,username,fanDian from blast_members where username='$username'";
    $res = $mysqli->query($sql);
    $arr = $res->fetch_array();
    $fanDian = $arr['fanDian'];
    // echo $fanDian .'------';
    $newfanDian = $max - (13 - $arr['fanDian']) * 2 * 10;
    return $newfanDian;
}
//玩家钱包转点
function transaction($playerName, $zz_money, $type,$serialNumber) {
    $data["serialNumber"] =   date('YmdHis');
    $data["playerName"] = $playerName;
    $data["type"] = (int)$type;
    $data["amount"] = (int)$zz_money;
    $data["createTime"] = gmdate("Y-m-d\TH:i:s\Z");
    $json_data = json_encode($data);
    $json_encrypt_data = apiEncode($json_data);
    $version = "1.0";
    $id = MERCHANT_ID;
    $post_fields_data = array("version" => $version, "id" => $id, "data" => $json_encrypt_data);
    $url = VR_SERVER . "/UserWallet/Transaction";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields_data);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    $curl_res = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);
    //	print_r($error); die;
    if ($error) {
        //Return an error message
        return $error;
    } else {
        //Return a successful message
        $curl_res = apiDecode($curl_res);
        return $curl_res;
    }
}

function Insert_OherBets($codes) {
	//print_r($codes);
    $mysqli = new Mysqli('127.0.0.1', 'root', 'root', 'd_xingcai_n');
    $mysqli->query('set names utf8');
    foreach ($codes['betRecords'] as $code) {
        $serialNumber = $code['serialNumber'];
        $tsql = " select  id ,lotteryNo from  blast_bets_api where  serializeId='$serialNumber'   ";

		//echo  $tsql ;
        $res_bat = $mysqli->query($tsql);
        $row_bats = $res_bat->fetch_array();

		//print_r($code['betTypeName']);
       
   
        if (!$row_bats['id']) {

            $username = $code['playerName'];
            $sqlc = "select * from blast_members where username='$username'";
            $result = $mysqli->query($sqlc);
            $row = $result->fetch_array();
            $code['uid'] = $row['uid'];
            /* 新增 */
            $code['weiShu'] = 0;
            $code['playedGroup'] = 0;
            $code['playedId'] = 0;
            $code['actionNo'] = $code['issueNumber'];
            $code['actionTime'] =  strtotime($code['createTime'])   ; 
            $code['kjTime'] =  strtotime($code['updateTime'])   ;
            $code['actionNum'] = $code['count'];
            $code['amount'] = 0;
            $code['zjCount'] = count( $code['prizeDetail']);
            $code['bonus'] = $code['playerPrize'];
            $code['betType'] = 0;
            $code['actionAmount'] = 0; 
			$code['actionName']  =  $code['betTypeName'];

			if( $code['state']==1) { $code['isDelete'] =1; } else {   $code['isDelete'] =0;   }
			
            $sql2 = " INSERT INTO `blast_bets_api` (`wjorderId`, `orderId`, `serializeId`, `uid`, `username`,  ";
            $sql2.= " `type`, `playedGroup`, `playedId`, `actionNo`, `actionTime`,  ";
            $sql2.= " `actionNum`, `actionData`, `weiShu`,`mode`, `beiShu`, ";
            $sql2.= " `amount`,  `lotteryNo`, `kjTime`,   `zjCount`,`bonus`, ";

            $sql2.= "  `betType`,   `actionAmount` ,`isDelete`,`PTAPI` ,`actionName`) ";
            $sql2.= " VALUES('" . $code['serialNumber'] . "','" . $code['serialNumber'] . "','" . $code['serialNumber'] . "','" . $code['uid'] . "','" . $code['playerName'] . "',";
            $sql2.= " '" . $code['channelId'] . "','" . $code['playedGroup'] . "','" . $code['playedId'] . "','" . $code['actionNo'] . "','" . $code['actionTime'] . "',";
            $sql2.= "'" . $code['actionNum'] . "','" . $code['number'] . "','" . $code['weiShu'] . "','" . $code['unit'] . "','" . $code['multiple'] . "',";
            $sql2.= "'" . $code['amount'] . "','" . $code['winningNumber'] . "','" . $code['kjTime'] . "','" . $code['zjCount'] . "','" . $code['bonus'] . "',";
            $sql2.= "'" . $code['betType'] . "','" . $code['actionAmount'] . "'   ,'" . $code['isDelete'] . "'   ,'VR'  ,'".  $code['actionName']  ."'  )";            
			//echo $sql2;  die;			
			$arr = $mysqli->query($sql2);

			$insert_id = $mysqli->insert_id ;


			//记录投注部分
			$yy = $code['cost'];
            $sqlcoin = "insert into blast_coin_log_api(`uid`,`extfield0`,`extfield1`,`info`,`actionTime`,`type`,`coin`,`extfield2`,`userCoin`,`PTAPI`,liqType)
			values('" . $row["uid"] . "' ,'".$insert_id. "','".$code['serialNumber']. "','投注','".$code['actionTime']. "','" . $code['channelId'] . "','" . -abs($yy) . "','" . $row["coin"] . "'," . ($row["coin"] - abs($yy)) . ",'VR',101)";
		//	echo $sqlcoin;
			$arr = $mysqli->query($sqlcoin);

        }
		
	    if (!$row_bats['lotteryNo']) { 
		    //更新 
			$username = $code['playerName'];
            $sqlc = "select * from blast_members where username='$username'";
            $result = $mysqli->query($sqlc);
            $row = $result->fetch_array();
            $code['uid'] = $row['uid'];
            /* 新增 */
            $code['weiShu'] = 0;
            $code['playedGroup'] = 0;
            $code['playedId'] = 0;
            $code['actionNo'] = $code['issueNumber'];
            $code['actionTime'] =  strtotime($code['createTime'])   ; 
            $code['kjTime'] =  strtotime($code['updateTime'])   ;
            $code['actionNum'] = $code['count'];
            $code['amount'] = 0;
            $code['zjCount'] =  count( $code['prizeDetail']);
            $code['bonus'] = $code['playerPrize'];
            $code['betType'] = 0;
            $code['actionAmount'] = 0;
			if( $code['state']==1)  $code['isDelete'] =1;
		 
			
			$sql2 = " update   `blast_bets_api` set ";
			$sql2.= " `wjorderId` = '". $code['serialNumber']  ."' , "; 
			$sql2.= " `orderId` = '". $code['serialNumber']  ."' ,   "; 
			$sql2.= " `serializeId` = '". $code['serialNumber']  ."' ,   "; 
			$sql2.= " `uid` = '". $code['uid']  ."' ,   "; 
			$sql2.= " `username` = '". $code['playerName']  ."' ,   "; 
			$sql2.= " `type` = '". $code['channelId']  ."' ,   "; 
			$sql2.= " `playedGroup` = '". $code['playedGroup']  ."' ,   "; 
			$sql2.= " `playedId` = '". $code['playedId']  ."' ,   "; 
			$sql2.= " `actionNo` = '". $code['actionNo']  ."' ,   "; 
			$sql2.= " `actionTime` = '". $code['actionTime']  ."' ,   "; 
			$sql2.= " `actionNum` = '". $code['actionNum']  ."' ,   "; 
			$sql2.= " `actionData` = '". $code['number']  ."' ,  "; 
			$sql2.= "  `weiShu` = '". $code['weiShu']  ."' ,  "; 
			$sql2.= " `mode` = '". $code['unit']  ."' ,   "; 
			$sql2.= " `beiShu` = '". $code['multiple']  ."' ,  "; 
			$sql2.= " `amount` = '". $code['amount']  ."' ,   "; 
			$sql2.= " `lotteryNo` = '". $code['winningNumber']  ."' ,   "; 
			$sql2.= " `kjTime` = '". $code['kjTime']  ."' ,     "; 
			$sql2.= " `zjCount` = '". $code['zjCount']  ."' ,  "; 
			$sql2.= " `bonus` = '". $code['bonus']  ."' , ";
            $sql2.= "  `betType` = '". $code['betType']  ."' ,    "; 
		    $sql2.= "  isDelete = '". $code['isDelete']  ."' ,    ";


			$sql2.= "  `actionAmount`  = '". $code['actionAmount']  ."'   "; 			
			$sql2.= " where  serializeId ='". $code['serialNumber']  ."' ";   
			
			//echo $sql2;
            $arr = $mysqli->query($sql2);			
			
			if($code['zjCount']>0){
				//记录投注部分
				$yy = $code['bonus'];
				$sqlcoin = "insert into blast_coin_log_api(`uid`,`extfield1`,`info`,`actionTime`,`type`,`coin`,`extfield2`,`userCoin`,`PTAPI`,liqType)
				values('" . $row["uid"] . "','".$code['serialNumber']. "','中奖奖金','".$code['actionTime']. "','" . $code['channelId'] . "','" . abs($yy) . "','" . $row["coin"] . "'," . ($row["coin"] + abs($yy)) . ",'VR',6)";
			    //echo $sqlcoin;
				$arr = $mysqli->query($sqlcoin);
				//返点
				//$yy = $code['cost'];
				//setUpFanDian($yy,$row_bats['id'],$row["uid"]);
			}

			if( $code['state']==2   || $code['state']==3 ) {
				//返点
				$yy = $code['cost'];
				setUpFanDian($yy,$row_bats['id'],$row["uid"]); 
		    }




			//撤单流水     if (!$row_bats['id']) {

			if( $code['state']==1 && $row_bats['isDelete']==0)
			{
			  $yy = -$code['cost'];
			  $sqlce = "insert into blast_coin_log_api(`uid`,`extfield1`,`info`,`actionTime`,`type`,`coin`,`extfield2`,`userCoin`,`PTAPI`,liqType) values('" .
				  $row["uid"] . "','".$code['serialNumber']. "','撤单','".$code['actionTime']. "','" . $code['channelId'] . "','" . abs($yy) . "','" . $row["coin"] . "'," . ($row["coin"] + abs($yy)) . ",'VR',6)";

			   $arr = $mysqli->query($sqlce);
		    }
		
		}
		 
		
    }
	
	
	echo '操作成功！';
}
function Insert_OherBetsSchedule($codes,$Sche) {
	//print_r($codes);
    $mysqli = new Mysqli('127.0.0.1', 'root', 'root', 'd_xingcai_n');
    $mysqli->query('set names utf8');
    foreach ($codes['betRecords'] as $code) {
		$serialNumber = $code['serialNumber'];
		if($Sche=="Schedule" ){
			$serialNumber =$serialNumber.'-'.$code['issueSerialNumber'];
			$mainserialNumber= $serialNumber ;
		}		
        $tsql = " select  id ,lotteryNo,wjorderId,serializeId  from  blast_bets_api where  wjorderId='$mainserialNumber'  or `serializeId` ='$serialNumber' ";
		//echo  $tsql .";<br/>";
        $res_bat = $mysqli->query($tsql);
        $row_bats = $res_bat->fetch_array();
		//print_r($code['betTypeName']);      
   
        if (!$row_bats['id']) {
			//echo 1111111111111;
            $username = $code['playerName'];
            $sqlc = "select * from blast_members where username='$username'";
            $result = $mysqli->query($sqlc);
            $row = $result->fetch_array();
            $code['uid'] = $row['uid'];
            /* 新增 */
            $code['weiShu'] = 0;
            $code['playedGroup'] = 0;
            $code['playedId'] = 0;
            $code['actionNo'] = $code['issueSerialNumber'];
            $code['actionTime'] =  strtotime($code['createTime'])   ; 
            $code['kjTime'] =  strtotime($code['updateTime'])   ;
            $code['actionNum'] = $code['count'];
            $code['amount'] = 0;
            $code['zjCount'] = count( $code['prizeDetail']);
            $code['bonus'] = $code['playerPrize'];
            $code['betType'] = 0;
            $code['actionAmount'] = 0; 
			$code['actionName']  =  $code['betTypeName'];

			if( $code['state']==1) { $code['isDelete'] =1; } else {   $code['isDelete'] =0;   }

			if($code['betSerialNumber']!="" ){
				$mainserialNumber = $code['betSerialNumber'];
			}
			
            $sql2 = " INSERT INTO `blast_bets_api` (`wjorderId`, `orderId`, `serializeId`, `uid`, `username`,  ";
            $sql2.= " `type`, `playedGroup`, `playedId`, `actionNo`, `actionTime`,  ";
            $sql2.= " `actionNum`, `actionData`, `weiShu`,`mode`, `beiShu`, ";
            $sql2.= " `amount`,  `lotteryNo`, `kjTime`,   `zjCount`,`bonus`, ";

            $sql2.= "  `betType`,   `actionAmount` ,`isDelete`,`PTAPI` ,`actionName`) ";
            $sql2.= " VALUES('" . $mainserialNumber . "','" . $code['serialNumber'] . "','" . $serialNumber. "','" . $code['uid'] . "','" . $code['playerName'] . "',";
            $sql2.= " '" . $code['channelId'] . "','" . $code['playedGroup'] . "','" . $code['playedId'] . "','" . $code['actionNo'] . "','" . $code['actionTime'] . "',";
            $sql2.= "'" . $code['actionNum'] . "','" . $code['number'] . "','" . $code['weiShu'] . "','" . $code['unit'] . "','" . $code['multiple'] . "',";
            $sql2.= "'" . $code['amount'] . "','" . $code['winningNumber'] . "','" . $code['kjTime'] . "','" . $code['zjCount'] . "','" . $code['bonus'] . "',";
            $sql2.= "'" . $code['betType'] . "','" . $code['actionAmount'] . "'   ,'" . $code['isDelete'] . "'   ,'VR'  ,'".  $code['actionName']  ."'  )";            
			
			$arr = $mysqli->query($sql2);
			//echo $sql2 ."<br/>";  
			//记录投注部分
			$yy = $code['cost'];
            $sqlcoin = "insert into blast_coin_log_api(`uid`,`extfield1`,`info`,`actionTime`,`type`,`coin`,`extfield2`,`userCoin`,`PTAPI`,liqType)
			values('" . $row["uid"] . "','".$code['serialNumber']. "','投注','".$code['actionTime']. "','" . $code['channelId'] . "','" . -abs($yy) . "','" . $row["coin"] . "'," . ($row["coin"] - abs($yy)) . ",'VR',101)";		 
			$arr = $mysqli->query($sqlcoin);
        }else{

		$username = $code['playerName'];
        $sqlc = "select * from blast_members where username='$username'";
        $result = $mysqli->query($sqlc);
        $row = $result->fetch_array();
        $code['uid'] = $row['uid'];

		if(( $code['state']==1)  || ( $code['state']== 3))  {
			  $code['isDelete'] =1;				
			  $sqlstate1 = "update `blast_bets_api` set  isDelete = '". $code['isDelete']."' where    serializeId ='". $serialNumber  ."'  "    ;  
			  echo $sqlbetu .";<br/>";
			  $arr = $mysqli->query($sqlstate1);
			  $sqlts = "select * from blast_coin_log_api where `extfield1`='$serialNumber'";
			  $resultsl = $mysqli->query($sqlts);
              $ts_row = $resultsl->fetch_array();
			  if($ts_row['id']==''){
				  //撤单流水     if (!$row_bats['id']) {	
				  $yy = -$code['currentAmount'];
				  $sqlce = "insert into blast_coin_log_api(`uid`,`extfield1`,`info`,`actionTime`,`type`,`coin`,`extfield2`,`userCoin`,`PTAPI`,liqType,`extfield0`) values('" .
					  $row["uid"] . "','".$serialNumber. "','撤单','".strtotime($code['createTime']). "','" . $code['channelId'] . "','" . abs($yy) . "','" . $row["coin"] . "'," . ($row["coin"] + abs($yy)) . ",'VR',7,'". $row_bats['id'] ."')";
				 // echo  $sqlce;
				  $arr = $mysqli->query($sqlce);
			  }
		}		
	    if ($code['betSerialNumber']!='') {				
		    //更新 			
			//print_r( $row_bats);
			if ( $row_bats['wjorderId']==$row_bats['serializeId']) {
				//zhengchang 
				//if ( $code['state']==2) {
					if($code['betSerialNumber']!='' )
					{
						$sqlbetu = "update   `blast_bets_api` set  wjorderId = '". $code['betSerialNumber']."' where  serializeId ='". $serialNumber."'  "    ;  
						//echo $sqlbetu .";<br/>";
						$arr = $mysqli->query($sqlbetu);
					}
				//}
			}
			/// chedan	
			/*            
            $code['weiShu'] = 0;
            $code['playedGroup'] = 0;
            $code['playedId'] = 0;
            $code['actionNo'] = $code['issueNumber'];
            $code['actionTime'] =  strtotime($code['createTime'])   ; 
            $code['kjTime'] =  strtotime($code['updateTime'])   ;
            $code['actionNum'] = $code['count'];
            $code['amount'] = 0;
            $code['zjCount'] =  count( $code['prizeDetail']);
            $code['bonus'] = $code['playerPrize'];
            $code['betType'] = 0;
            $code['actionAmount'] = 0;
			if( $code['state']==1)  $code['isDelete'] =1;
			if($code['betSerialNumber']!='' )
			{
              	$sqlbetu = " update   `blast_bets_api` set  wjorderId = '". $code['betSerialNumber']."' where    serializeId ='". $serialNumber."'  "    ;  
				echo $sqlbetu .";<br/>";
				$arr = $mysqli->query($sqlbetu);
			}		 
			
			$sql2 = " update   `blast_bets_api` set ";
			$sql2.= " `wjorderId` = '". $code['betSerialNumber']  ."' , "; 
			$sql2.= " `orderId` = '". $code['serialNumber']  ."' ,   "; 
			$sql2.= " `serializeId` = '". $code['serialNumber']  ."' ,   "; 
			$sql2.= " `uid` = '". $code['uid']  ."' ,   "; 
			$sql2.= " `username` = '". $code['playerName']  ."' ,   "; 
			$sql2.= " `type` = '". $code['channelId']  ."' ,   "; 
			$sql2.= " `playedGroup` = '". $code['playedGroup']  ."' ,   "; 
			$sql2.= " `playedId` = '". $code['playedId']  ."' ,   "; 
			$sql2.= " `actionNo` = '". $code['actionNo']  ."' ,   "; 
			$sql2.= " `actionTime` = '". $code['actionTime']  ."' ,   "; 
			$sql2.= " `actionNum` = '". $code['actionNum']  ."' ,   "; 
			$sql2.= " `actionData` = '". $code['number']  ."' ,  "; 
			$sql2.= "  `weiShu` = '". $code['weiShu']  ."' ,  "; 
			$sql2.= " `mode` = '". $code['unit']  ."' ,   "; 
			$sql2.= " `beiShu` = '". $code['multiple']  ."' ,  "; 
			$sql2.= " `amount` = '". $code['amount']  ."' ,   "; 
			$sql2.= " `lotteryNo` = '". $code['winningNumber']  ."' ,   "; 
			$sql2.= " `kjTime` = '". $code['kjTime']  ."' ,     "; 
			$sql2.= " `zjCount` = '". $code['zjCount']  ."' ,  "; 
			$sql2.= " `bonus` = '". $code['bonus']  ."' , ";
            $sql2.= "  `betType` = '". $code['betType']  ."' ,    "; 
		    $sql2.= "  isDelete = '". $code['isDelete']  ."' ,    ";
			$sql2.= "  `actionAmount`  = '". $code['actionAmount']  ."'   "; 			
			$sql2.= " where  serializeId ='". $code['serialNumber']  ."' ";  			
			//echo $sql2;
            $arr = $mysqli->query($sql2);			
			
			if($code['zjCount']>0){
				//记录投注部分
				$yy = $code['bonus'];
				$sqlcoin = "insert into blast_coin_log_api(`uid`,`extfield1`,`info`,`actionTime`,`type`,`coin`,`extfield2`,`userCoin`,`PTAPI`,liqType)
				values('" . $row["uid"] . "','".$code['serialNumber']. "','中奖奖金','".$code['actionTime']. "','" . $code['channelId'] . "','" . abs($yy) . "','" . $row["coin"] . "'," . ($row["coin"] + abs($yy)) . ",'VR',6)";
			    //echo $sqlcoin;
				$arr = $mysqli->query($sqlcoin);
			}

			//撤单流水     if (!$row_bats['id']) {

			if( $code['state']==1 && $row_bats['isDelete']==0)
			{
			  $yy = -$code['cost'];
			  $sqlce = "insert into blast_coin_log_api(`uid`,`extfield1`,`info`,`actionTime`,`type`,`coin`,`extfield2`,`userCoin`,`PTAPI`,liqType) values('" .
				  $row["uid"] . "','".$code['serialNumber']. "','撤单','".$code['actionTime']. "','" . $code['channelId'] . "','" . abs($yy) . "','" . $row["coin"] . "'," . ($row["coin"] + abs($yy)) . ",'VR',6)";

			   $arr = $mysqli->query($sqlce);
		    }

			*/
		}
		}
		 
		
    }
	
	
	echo '操作成功！';
}

function setUpFanDian ($amount,$batsid,$uid,$game='VR'){
    $mysqli = new Mysqli('127.0.0.1', 'root', 'root', 'd_xingcai_n');
    $mysqli->query('set names utf8');   
    $tsql = " select * from  blast_bets_api where  id='$batsid' ";	 
    $res_bat = $mysqli->query($tsql);
    $row_bats = $res_bat->fetch_array(); 	 
	// 取自己返点
	$t_hsql = " select fanDian, parentId, username  , userlevel , relevel,uid   from  blast_members where  uid=". $uid;	   
	$t_result = $mysqli->query($t_hsql);
    $t_row = $t_result->fetch_array();	
	$_parentId=$t_row['parentId'];
	$_fanDian=$t_row['fanDian'];
	$srcUserName =$t_row['username'];    
	while($_parentId){ 		
	  $s_hsql = " SELECT fanDian, parentId, username  , userlevel , relevel,uid ,coin FROM blast_members WHERE `uid`=".$_parentId;	
	  $s_result = $mysqli->query($s_hsql);
      $s_row = $s_result->fetch_array();	
	  $_parentId = $s_row['parentId']; 
	  $p_fanDian = $s_row['fanDian'];	
	  $uid       =  $s_row['uid'] ;
	   
	  if($p_fanDian > $_fanDian){
	    $info =   '下家['. $srcUserName . ']'. $game .'投注返点' ;
		$actionTime = time();
		$yy = $amount*($p_fanDian-$_fanDian)/100; 
		$sqlcoin = "insert into blast_coin_log_api(`uid`,`extfield1`,`info`,`actionTime`,`type`,`coin`,`extfield2`,`userCoin`,`PTAPI`,liqType,`extfield0`)
				values('" . $s_row["uid"] . "','".$row_bats['wjorderId']. "','".  $info ."','".$actionTime . "','" . $row_bats['type'] . "','" . abs($yy) . "','" . $s_row["coin"] . "'," . ($s_row["coin"] + abs($yy)) . ",'VR',2  ,'".$row_bats['id']. "'    )";
			    //echo $sqlcoin;
		$arr = $mysqli->query($sqlcoin);
	  
	  }  	  
	  $srcUserName = $s_row['username']."<=".$srcUserName;
	 // $_parentId =  $uid;
	  $_fanDian = $p_fanDian;	  
	  
	} 

}



//加密
function apiEncode($data) {
    //Pad for PKCS7
    $blockSize = mcrypt_get_block_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_ECB);
    $len = strlen($data);
    $pad = $blockSize - ($len % $blockSize);
    $data.= str_repeat(chr($pad), $pad);
    //Encrypt data
    $encData = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, KEY, $data, MCRYPT_MODE_ECB);
    return base64_encode($encData);
}
//解密
function apiDecode($base64_data) {
    $data = base64_decode($base64_data);
    //Decrypt data
    $plain_data = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, KEY, $data, MCRYPT_MODE_ECB);
    //Remove US-ASCII control character
    $plain_data = trim($plain_data, "\x00..\x1F");
    return $plain_data;
}
?> 