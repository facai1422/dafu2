<?php
namespace Lib\xitongcaiji;
class ydssc{
	public $xyp_playidArr = [
        'lmp_d1q_da', 'lmp_d1q_xiao', 'lmp_d1q_dan', 'lmp_d1q_shuang',
        'lmp_d2q_da', 'lmp_d2q_xiao', 'lmp_d2q_dan', 'lmp_d2q_shuang',
        'lmp_d3q_da', 'lmp_d3q_xiao', 'lmp_d3q_dan', 'lmp_d3q_shuang',
        'lmp_d4q_da', 'lmp_d4q_xiao', 'lmp_d4q_dan', 'lmp_d4q_shuang',
        'lmp_d5q_da', 'lmp_d5q_xiao', 'lmp_d5q_dan', 'lmp_d5q_shuang',
        'lmp_zongh_da', 'lmp_zongh_xiao', 'lmp_zongh_dan', 'lmp_zongh_shuang',
        'dan_d1q_eq1', 'dan_d1q_eq2', 'dan_d1q_eq3', 'dan_d1q_eq4', 'dan_d1q_eq5', 'dan_d1q_eq6', 'dan_d1q_eq7', 'dan_d1q_eq8', 'dan_d1q_eq9', 'dan_d1q_eq0',
        'dan_d2q_eq1', 'dan_d2q_eq2', 'dan_d2q_eq3', 'dan_d2q_eq4', 'dan_d2q_eq5', 'dan_d2q_eq6', 'dan_d2q_eq7', 'dan_d2q_eq8', 'dan_d2q_eq9', 'dan_d2q_eq0',
        'dan_d3q_eq1', 'dan_d3q_eq2', 'dan_d3q_eq3', 'dan_d3q_eq4', 'dan_d3q_eq5', 'dan_d3q_eq6', 'dan_d3q_eq7', 'dan_d3q_eq8', 'dan_d3q_eq9', 'dan_d3q_eq0',
        'dan_d4q_eq1', 'dan_d4q_eq2', 'dan_d4q_eq3', 'dan_d4q_eq4', 'dan_d4q_eq5', 'dan_d4q_eq6', 'dan_d4q_eq7', 'dan_d4q_eq8', 'dan_d4q_eq9', 'dan_d4q_eq0',
        'dan_d5q_eq1', 'dan_d5q_eq2', 'dan_d5q_eq3', 'dan_d5q_eq4', 'dan_d5q_eq5', 'dan_d5q_eq6', 'dan_d5q_eq7', 'dan_d5q_eq8', 'dan_d5q_eq9', 'dan_d5q_eq0',
        'lmp_qs_bz','lmp_qs_sz','lmp_qs_dz','lmp_qs_bs','lmp_qs_z6',
        'lmp_zs_bz','lmp_zs_sz','lmp_zs_dz','lmp_zs_bs','lmp_zs_z6',
        'lmp_hs_bz','lmp_hs_sz','lmp_hs_dz','lmp_hs_bs','lmp_hs_z6',
        'lmp_lh_l','lmp_lh_hu','lmp_lh_he'
    ];
	function __construct($url){
		$this->url    = $url;
		$this->title    = '二分彩';
	}
	function curl_file_get_contents($durl){
				  $cookie_file = dirname(__FILE__)."/cookie.txt";
				   $ch = curl_init();
				   curl_setopt($ch, CURLOPT_URL, $durl);
				   curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
				   curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie_file);
				   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
				   curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); 
				   $r = curl_exec($ch);
				   curl_close($ch);
				   return $r;
			}
function getopencode(){
		$url   = $this->url;
		$co  = file_get_contents($url);
		$RES = json_decode($co,true);
		if(!$RES["data"]){
			return '未抓取到开奖数据：'.$url;
		}
		$RES["data"] = list_sort_by($RES["data"],'expect','asc');
		foreach($RES["data"] as $k=>$v){
			$data = [];
			$data = $v;
			$data['addtime'] = time();
			$data['isdraw'] = 0;
			$temp[] = $data;
			foreach($data as $k=>$v){
				if(strpos($v,'-')!==false && strpos($v,':')!==false)$data[$k] = strtotime($v);
			}
			if(!$kjinfo = M('kaijiang')->where("name='{$data['name']}' and expect='{$data['expect']}'")->find()){
				$xtclirun =M('setting')->where("name='xtclirun'")->find();
				$s = abs(substr(microtime(true),-2));
				// 利润控制概率值
				$jianye = $xtclirun['value'];
				$yushe_opencode = M('yukaijiang')->where("name='{$data['name']}' and expect='{$data['expect']}'")->find();
				if($s<$jianye && !$yushe_opencode){
					// 控制系统开始
					$this->title    = '系统彩控制打开,当前利润率为'.$jianye.'%,开始控制';
					
					$is_won = $this->opencode_check($data['expect'],$data['opencode'],$data['name']);
					//返回1表示中奖，0表示当前号码未中奖，即返回1中奖
					 if($is_won!=1){
					 	// 未中奖，直接用当前随机号码
						$_int = M('kaijiang')->data($data)->add();
						if($_int)$ints[] = $data['expect'].':'.$data['opencode'];	
						}else{
							// 这里需要重新生成号码，最多生成10次，如果全部都是中奖号码，那就用随机号码作为本次开奖号码
							$expect = $data['expect'];
							$is_val = 0;
							for($a = 0;$a<100;$a++){
								
								$opencode = $this->rand_keys('5');
								
								$is_won2  = $this->opencode_check($data['expect'],$opencode,$data['name']);
								//返回1表示中奖，0表示当前号码未中奖，即返回1中奖
					 			if($is_won2==1){ 
					 				$is_val++;
					 			}else{
					 				// 生成出不中奖的号码就加入数据库
					 				$data['opencode'] = $opencode;
					 				$_int = M('kaijiang')->data($data)->add();
									if($_int)$ints[] = $data['expect'].':'.$data['opencode'];
									break;
					 			}
					 			
							}
							// 最多生成10次，如果全部都是中奖号码，那就用随机号码作为本次开奖号码
							if($is_val >= 100){
								$_int = M('kaijiang')->data($data)->add();
								if($_int)$ints[] = $data['expect'].':'.$data['opencode'];
							}
							$this->title = '系统彩控制成功,当前用户订单中奖,重新生成开奖号码';
						} 
						// 控制系统结束

			   	}else{
			   		if($yushe_opencode){
			   			$data['opencode'] = $yushe_opencode['opencode'];
			   		}
					$_int = M('kaijiang')->data($data)->add();
					if($_int)$ints[] = $data['expect'].':'.$data['opencode'];	
				}
			}
		}
		if(count(array_filter($ints))>=1){
			return '采集成功-'.implode(';',$ints);
		}else{
			return '最后更新-'.$kjinfo['expect'].':'.$kjinfo['opencode'];
		}
	}

		protected function rand_keys($len = 5,$str='0123456789') {
		$rand = '';
		for ($x=0;$x<$len;$x++) {
			$rand .= ($rand != '' ? ',' : '').substr($str, rand(0, strlen($str) - 1), 1);
		}
		return $rand;
	}
	function opencode_check($expect,$opencode,$cpname){
			$playidArr = ['tmlmda','tmlmxiao','tmlmdan','tmlmshuang','tmlmdadan','tmlmdashuang','tmlmxiaodan','tmlmxiaoshuang','tmlmheda','tmlmhexiao','tmlmhedan','tmlmheshuang','tmlmweida','tmlmweixiao','tmlmjiaqin','tmlmyeshou','tmlmhongbo','tmlmlvbo','tmlmlanbo',
			'zm1lmda','zm1lmxiao','zm1lmdan','zm1lmshuang','zm1lmdadan','zm1lmdashuang','zm1lmxiaodan','zm1lmxiaoshuang','zm1lmheda','zm1lmhexiao','zm1lmhedan','zm1lmheshuang','zm1lmweida', 'zm1lmweixiao','zm1lmjiaqin','zm1lmyeshou','zm1lmhongbo','zm1lmlvbo','zm1lmlanbo',
			'zm2lmda','zm2lmxiao','zm2lmdan','zm2lmshuang','zm2lmdadan','zm2lmdashuang','zm2lmxiaodan','zm2lmxiaoshuang','zm2lmheda','zm2lmhexiao','zm2lmhedan','zm2lmheshuang','zm2lmweida','zm2lmweixiao','zm2lmjiaqin','zm2lmyeshou','zm2lmhongbo','zm2lmlvbo','zm2lmlanbo',
			'zm3lmda','zm3lmxiao','zm3lmdan','zm3lmshuang','zm3lmdadan','zm3lmdashuang','zm3lmxiaodan','zm3lmxiaoshuang','zm3lmheda','zm3lmhexiao','zm3lmhedan','zm3lmheshuang','zm3lmweida','zm3lmweixiao','zm3lmjiaqin','zm3lmyeshou','zm3lmhongbo','zm3lmlvbo','zm3lmlanbo',
			'zm4lmda','zm4lmxiao','zm4lmdan','zm4lmshuang','zm4lmdadan','zm4lmdashuang','zm4lmxiaodan','zm4lmxiaoshuang','zm4lmheda','zm4lmhexiao','zm4lmhedan','zm4lmheshuang','zm4lmweida','zm4lmweixiao','zm4lmjiaqin','zm4lmyeshou','zm4lmhongbo','zm4lmlvbo','zm4lmlanbo',
			'zm5lmda','zm5lmxiao','zm5lmdan','zm5lmshuang','zm5lmdadan','zm5lmdashuang','zm5lmxiaodan','zm5lmxiaoshuang','zm5lmheda','zm5lmhexiao','zm5lmhedan','zm5lmheshuang','zm5lmweida','zm5lmweixiao','zm5lmjiaqin','zm5lmyeshou','zm5lmhongbo','zm5lmlvbo','zm5lmlanbo',
			'zm6lmda','zm6lmxiao','zm6lmdan','zm6lmshuang','zm6lmdadan','zm6lmdashuang','zm6lmxiaodan','zm6lmxiaoshuang','zm6lmheda','zm6lmhexiao','zm6lmhedan','zm6lmheshuang','zm6lmweida','zm6lmweixiao','zm6lmjiaqin','zm6lmyeshou','zm6lmhongbo','zm6lmlvbo','zm6lmlanbo',
		];
		$memberdb    = D('member');
		$fuddetaildb = D('fuddetail');
		$touzhudb    = D('touzhu');
		$DB_PREFIX = C('DB_PREFIX');
		$sql = "select * from {$DB_PREFIX}touzhu where isdraw = '0' and expect ={$expect} and cpname = '{$cpname}' order by id desc limit 10";
		$touzhulist = M()->query($sql);
		$_ZJARRAY = [];
		$iszjcount = 0;

		foreach($touzhulist as $k=>$item){
			$item['opencode'] = $opencode;
			$_kjfile = $dir = COMMON_PATH. "Lib/kaijiang/{$item['typeid']}.class.php";
			if($_kjfile){
				$class = "\\Lib\\kaijiang\\{$item['typeid']}";
				$_obj  = new $class();
				$playid= $item['playid'];
				$item['iszjokcount'] = 0;
				
				if(in_array($playid,$playidArr) && $item['typeid']=='lhc'){
					if(strstr($playid,'tmlm')){
						$playsonid = substr($playid,2,(strlen($playid)-2));
						$key = 6;
					}else{
						$playsonid = substr($playid,3,(strlen($playid)-2));
						$key = substr($playid,2,1)-1;
					}
					$opencodes = explode(',',$item['opencode']);
					$item['iszjokcount'] = $_obj->$playsonid($opencodes[$key],$item['tzcode'],$playsonid);
					
				}
				else if(in_array($playid,$this->xyp_playidArr) && $item['typeid'] == 'ssc'){
                    $opencodes = explode(',',$opencode);
                    if(preg_match("/lmp_d\dq_/",$playid)){
                        $playsonid = substr($playid,8);
                        $key = substr($playid,5,1)-1;
                        $item['iszjokcount'] = $_obj->$playsonid($opencodes[$key],$item['tzcode'],$playsonid);
                    }else if(preg_match("/dan_d\dq_eq/",$playid)){
                        $key = substr($playid,5,1)-1;
                        $eqnum = substr($playid,10,1);
                        $item['iszjokcount'] = $_obj->danqiu($opencodes[$key],$item['tzcode'],$eqnum);//($eqnum == $item['tzcode'])?1:0;
                    }
                    else if(preg_match("/lmp_zongh_/",$playid)){
                        //总和
                        $playsonid = substr($playid,4);
                        $sum = 0;
                        //计算总和 
                        foreach($opencodes as $v) $sum+=$v;
                        $item['iszjokcount'] = $_obj->$playsonid($sum,$item['tzcode']);
                    }else{
                        if(method_exists($_obj,$playid)){//如果类方法存在
                            $item['iszjokcount'] = $_obj->$playid($item['opencode'],$item['tzcode']);
                        }
                    }
                }else{
					if(method_exists($_obj,$playid)){//如果类方法存在
						$item['iszjokcount'] = $_obj->$playid($item['opencode'],$item['tzcode']);
					}
				}
			}
			//处理中奖信息
			$memint = $touzhuint = $fudint = 0;
			$iskj = $touzhudb->where(['id'=>$item['id']])->getField('isdraw');
			
			if($iskj!=0){
				continue;
			}
            $iszjcount += $item['iszjokcount'];
			
			
		}
		
		if($iszjcount>=1){//中
				return '1';
			}else{//未中
				return '0';
			}
	}
}
?>