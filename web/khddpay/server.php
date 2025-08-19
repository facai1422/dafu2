<?php
header("Content-Type: text/html;charset=utf-8");

  $returnArray = array( // 返回字段
        "memberid" => $_REQUEST["memberid"], // 商户ID
        "orderid" =>  $_REQUEST["orderid"], // 订单号
        "amount" =>  $_REQUEST["amount"], // 交易金额
        "datetime" =>  $_REQUEST["datetime"], // 交易时间
        "transaction_id" =>  $_REQUEST["transaction_id"], // 支付流水号
        "returncode" => $_REQUEST["returncode"],
    );
    $md5key = "hv0soompj16uuir36iz9iff4bfteib0f";
    ksort($returnArray);
    reset($returnArray);
    $md5str = "";
    foreach ($returnArray as $key => $val) {
        $md5str = $md5str . $key . "=" . $val . "&";
    }
    
    $sign = strtoupper(md5($md5str . "key=" . $md5key));
    
    if ($sign == $_REQUEST["sign"]) {
        if ($_REQUEST["returncode"] == "00") {
                $str = "交易成功！订单号：".$_REQUEST["orderid"]."金额：".$_REQUEST["amount"];
                file_put_contents("success.txt",$str."\n", FILE_APPEND);
                $paym = $_REQUEST["amount"];
                
                $servername = "localhost";
                $username = "khddcs";
                $password = "khddcs";
                $dbname = "khddcs";
                 
                // 创建连接
                $conn = new mysqli($servername, $username, $password, $dbname);
                // Check connection
                if ($conn->connect_error) {
                    die("连接失败: " . $conn->connect_error);
                } 
                $no = $_REQUEST["orderid"];
                $sql = "SELECT * FROM caipiao_recharge where trano='$no'";
                $result = $conn->query($sql);
                 
                if ($result->num_rows > 0) {
                    // 输出数据
                    while($row = $result->fetch_assoc()) {
                        $uid = $row['uid'];
                    }
                }else {
                    // echo "0 结果";
                }
                
                $sql = "SELECT * FROM caipiao_member where id='$uid'";
                $result = $conn->query($sql);
                 
                if ($result->num_rows > 0) {
                    // 输出数据
                    while($row = $result->fetch_assoc()) {
                        $balance = $row['balance'];
                    }
                }else {
                    // echo "0 结果";
                }
                
                $newm = $balance + $paym;
                $ss = mysqli_query($conn,"UPDATE caipiao_recharge SET state=1
                WHERE trano='$no'");
                if ($ss) {
                    mysqli_query($conn,"UPDATE caipiao_member SET balance='$newm'
                WHERE id='$uid'");
                    // echo "<script> alert('充值成功！');location.href='http://wap.621339.com/Account.dealRecord2.do'; </script>"; 
                    // echo "充值成功!请手动返回";
                } else {
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }
                
            // $state = 1;
           
            // $url = "http://".$_SERVER['SERVER_NAME']."/Account.yydskhdd.do?t=1&no=".$_REQUEST["orderid"]."&m=".$_REQUEST["amount"];
    //          var_dump($url);
    // die;
    // Header("Location:$url"); 
            // header("Location: $url");
            exit("ok");
        }
    }
?>