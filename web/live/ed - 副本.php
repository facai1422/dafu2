<?php
date_default_timezone_set("PRC");
session_start();
$C_Patch = $_SERVER['DOCUMENT_ROOT'];
include ($C_Patch . '/live/ApiBi/BiApi.class.php');
$mysqli=new Mysqli('127.0.0.1','root','0k55eVI670zpUl0J','cpswf');
$mysqli->query('set names utf8');
$zztype = isset($_POST['zz_type']) ? $_POST['zz_type'] : '';
$yy = isset($_POST['zz_money']) ? trim($_POST['zz_money']) : '';
$username = $_GET['username'];
$sql="select balance,username from caipiao_member where username='$username'";
$res = $mysqli->query($sql);
$row = $res->fetch_array();
$conver = doubleval($yy);
if (($zztype == '11' || $zztype == '12' || $zztype == '13') && ($conver > $row["balance"])) {
    echo '转账金额不能大于账户余额，请重新输入。';
    exit;
}
$gametype = '';
if ($zztype == '11' || $zztype == '21') {
    $gametype = 'AG';
    if ($zztype == '11') {
        $about = "主账户->AG视讯";
    } else if ($zztype == '21') {
        $about = "AG视讯->主账户";
    }
} else if ($zztype == '12' || $zztype == '22') {
    $gametype = 'KY';
    if ($zztype == '12') {
        $about = "主账户->开元棋牌";
    } else if ($zztype == '22') {
        $about = "开元棋牌->主账户";
    }
} else if ($zztype == '13' || $zztype == '23') {
    $gametype = 'EG';
    if ($zztype == '13') {
        $about = "主账户->EG彩票";
    } else if ($zztype == '23') {
        $about = "EG彩票->主账户";
    }
}
$username = $_GET['username'];
$sqlc = "select balance,username from caipiao_member where username='$username'";
$result = $mysqli->query($sqlc);
$row = $result->fetch_array();
$mon = $row['balance'];
$serialNumber = strtotime(date("Y-m-d H:i:s",time()));

if ($zztype == '11' || $zztype == '12' || $zztype == '13') {
    if ($yy > $mon) {
        echo "主钱包余额不足";
        exit;
    }
    $res = new BiApi();
    $result = $res->zzmoney($gametype, $username, 'IN', $yy);
    //var_dump($result);die;
    if ($result) { //充值成功
        $res_money = $mon - $yy;
       // $billNO = $username . date('YmdHis', time());
		//$billNO = $serialNumber;
        //$about="转入".$gametype;
       
        $sql = "update caipiao_member set balance=$res_money where username='$username'";
		//print_r(	$username);
        $arr = $mysqli->query($sql);
        $mysqli->commit();
        echo '转入成功';
        exit;
    } else {
        echo '转入失败';
        exit;
    }
} else if ($zztype == '21' || $zztype == '22' || $zztype == '23') {
    $res = new BiApi();
    if ($zztype == '21') {
        $gameName = 'AG';
    } elseif ($zztype == '22') {
        $gameName = 'KY';
    } elseif ($zztype == '23') {
        $gameName = 'EG';
    }
    $gameMon = $res->balances($gameName, $username);
    if ($yy > $gameMon) {
        echo '额度转出失败';
        exit;
    }
    $result = $res->zzmoney($gametype, $username, 'OUT', $yy);
    if ($result) {
        $res_money = $mon + $yy;
        $billNO = $username . date('YmdHis', time());
        $sql1 = "insert into blast_money_log(`user_id`,`order_num`,`about`,`update_time`,`type`,`order_value`,`assets`,`balance`) values('" . $row["uid"] . "','$billNO','$about','" . date("Y-m-d H:i:s") . "','真人转账','" . abs($yy) . "','" . $row["money"] . "'," . ($row["money"] - abs($yy)) . ")";
        $mysqli->query($sql1);

		$billNO = $serialNumber ;
		
		$sql2 = "insert into blast_money_log_api(`uid`,`extfield1`,`info`,`actionTime`,`type`,`money`,`extfield2`,`usermoney`,`PTAPI`,liqType)
			values('" . $row["uid"] . "','$billNO','$about','".$serialNumber. "','0','" . abs($yy) . "','" . $row["money"] . "'," . ($row["money"] + abs($yy)) . ",'". $gameName ."',".$zztype.")";
		
		$mysqli->query($sql2);



        if ($zztype == 21) {
            $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $_REQUEST["zz_type"] . ",'BB转出', " . time() . ",'转帐成功','$billNO')";
        } elseif ($zztype == 23) {
            $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $_REQUEST["zz_type"] . ",'AB转出', " . time() . ",'转帐成功','$billNO')";
        } else {
            $sql2 = "insert into blast_zz_info(uid,username,old_money,status,amount,new_money,type,info,actionTime,result,billNO) values(" . $row["uid"] . ",'$username',$mon,1,$yy,$res_money," . $_REQUEST["zz_type"] . ",'AG转出', " . time() . ",'转帐成功','$billNO')";
        }
        $mysqli->query($sql2);
        $sql = "update caipiao_member set coin=$res_money where username='$username'";
        $arr = $mysqli->query($sql);
        $mysqli->commit();
        echo '转出成功';
        exit;
    } else {
        echo '转出失败';
    }
}
?>