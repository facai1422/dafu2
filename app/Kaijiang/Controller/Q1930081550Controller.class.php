<?php
namespace Kaijiang\Controller;
use Think\Controller;
// 利润控制文件，判断当前是否中奖，返回1表示中奖，0表示当前号码未中奖
class Q201583864Controller extends Controller {
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
    public $pk10_xyp_playidArr = [
        'lmp_d1m_da','lmp_d1m_xiao','lmp_d1m_dan','lmp_d1m_shuang','lmp_d1m_long','lmp_d1m_hu',
        'lmp_d2m_da','lmp_d2m_xiao','lmp_d2m_dan','lmp_d2m_shuang','lmp_d2m_long','lmp_d2m_hu',
        'lmp_d3m_da','lmp_d3m_xiao','lmp_d3m_dan','lmp_d3m_shuang','lmp_d3m_long','lmp_d3m_hu',
        'lmp_d4m_da','lmp_d4m_xiao','lmp_d4m_dan','lmp_d4m_shuang','lmp_d4m_long','lmp_d4m_hu',
        'lmp_d5m_da','lmp_d5m_xiao','lmp_d5m_dan','lmp_d5m_shuang','lmp_d5m_long','lmp_d5m_hu',
        'lmp_d6m_da','lmp_d6m_xiao','lmp_d6m_dan','lmp_d6m_shuang','lmp_d6m_long','lmp_d6m_hu',
        'lmp_d7m_da','lmp_d7m_xiao','lmp_d7m_dan','lmp_d7m_shuang','lmp_d7m_long','lmp_d7m_hu',
        'lmp_d8m_da','lmp_d8m_xiao','lmp_d8m_dan','lmp_d8m_shuang','lmp_d8m_long','lmp_d8m_hu',
        'lmp_d9m_da','lmp_d9m_xiao','lmp_d9m_dan','lmp_d9m_shuang','lmp_d9m_long','lmp_d9m_hu',
        'lmp_d10m_da','lmp_d10m_xiao','lmp_d10m_dan','lmp_d10m_shuang','lmp_d10m_long','lmp_d10m_hu',
        'gyh_hm3','gyh_hm10','gyh_hm17','gyh_hm4','gyh_hm11','gyh_hm18','gyh_hm5','gyh_hm12','gyh_hm19','gyh_hm6','gyh_hm13','gyh_da','gyh_hm7','gyh_hm14','gyh_xiao','gyh_hm8','gyh_hm15','gyh_dan','gyh_hm9','gyh_hm16','gyh_shuang',
        'yzwm_d1m_hm1','yzwm_d1m_hm2','yzwm_d1m_hm3','yzwm_d1m_hm4','yzwm_d1m_hm5','yzwm_d1m_hm6','yzwm_d1m_hm7','yzwm_d1m_hm8','yzwm_d1m_hm9','yzwm_d1m_hm10',
        'yzwm_d2m_hm1','yzwm_d2m_hm2','yzwm_d2m_hm3','yzwm_d2m_hm4','yzwm_d2m_hm5','yzwm_d2m_hm6','yzwm_d2m_hm7','yzwm_d2m_hm8','yzwm_d2m_hm9','yzwm_d2m_hm10',
        'yzwm_d3m_hm1','yzwm_d3m_hm2','yzwm_d3m_hm3','yzwm_d3m_hm4','yzwm_d3m_hm5','yzwm_d3m_hm6','yzwm_d3m_hm7','yzwm_d3m_hm8','yzwm_d3m_hm9','yzwm_d3m_hm10',
        'yzwm_d4m_hm1','yzwm_d4m_hm2','yzwm_d4m_hm3','yzwm_d4m_hm4','yzwm_d4m_hm5','yzwm_d4m_hm6','yzwm_d4m_hm7','yzwm_d4m_hm8','yzwm_d4m_hm9','yzwm_d4m_hm10',
        'yzwm_d5m_hm1','yzwm_d5m_hm2','yzwm_d5m_hm3','yzwm_d5m_hm4','yzwm_d5m_hm5','yzwm_d5m_hm6','yzwm_d5m_hm7','yzwm_d5m_hm8','yzwm_d5m_hm9','yzwm_d5m_hm10',
        'yzwm_d6m_hm1','yzwm_d6m_hm2','yzwm_d6m_hm3','yzwm_d6m_hm4','yzwm_d6m_hm5','yzwm_d6m_hm6','yzwm_d6m_hm7','yzwm_d6m_hm8','yzwm_d6m_hm9','yzwm_d6m_hm10',
        'yzwm_d7m_hm1','yzwm_d7m_hm2','yzwm_d7m_hm3','yzwm_d7m_hm4','yzwm_d7m_hm5','yzwm_d7m_hm6','yzwm_d7m_hm7','yzwm_d7m_hm8','yzwm_d7m_hm9','yzwm_d7m_hm10',
        'yzwm_d8m_hm1','yzwm_d8m_hm2','yzwm_d8m_hm3','yzwm_d8m_hm4','yzwm_d8m_hm5','yzwm_d8m_hm6','yzwm_d8m_hm7','yzwm_d8m_hm8','yzwm_d8m_hm9','yzwm_d8m_hm10',
        'yzwm_d9m_hm1','yzwm_d9m_hm2','yzwm_d9m_hm3','yzwm_d9m_hm4','yzwm_d9m_hm5','yzwm_d9m_hm6','yzwm_d9m_hm7','yzwm_d9m_hm8','yzwm_d9m_hm9','yzwm_d9m_hm10',
        'yzwm_d10m_hm1','yzwm_d10m_hm2','yzwm_d10m_hm3','yzwm_d10m_hm4','yzwm_d10m_hm5','yzwm_d10m_hm6','yzwm_d10m_hm7','yzwm_d10m_hm8','yzwm_d10m_hm9','yzwm_d10m_hm10',
    ];
	public function _initialize(){
		header("Content-type: text/html; charset=utf-8");
// 		if(!IS_CLI)exit('IS NOT CMD_CLI,ERROR...');
	}
	function _t($str='',$num=20,$pad =' '){
		$str = iconv('UTF-8','gbk',$str);
		return str_pad($str,$num,$pad);
	}

	function check($expect='',$opencode='',$cpname='',$totalzxnum=0,$runcount=0){
			$opencode = strtolower(I('opencode'));
			$expect = strtolower(I('expect'));
			$cpname = strtolower(I('cpname'));
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
                }else if(in_array($playid,$this->pk10_xyp_playidArr) && $item['typeid'] == 'pk10'){
                    $opencodes = explode(',',$item['opencode']);
                    if(preg_match("/lmp_d\d*m_/",$playid)){
                        $playid_arr = explode('_',$playid);
                        $playsonid = $playid_arr[2];
                        $key = substr($playid_arr[1],1,strlen($playid_arr[1])-2);
                        $item['iszjokcount'] = $_obj->$playsonid($opencodes,$item['tzcode'],$key);
                    }
                    else if(preg_match("/gyh_hm/",$playid)){
                        $playsonid = "gyh";
                        $key = $my_string=substr($playid,6,strlen($playid)-1);
                        $item['iszjokcount'] = $_obj->$playsonid($opencodes,$item['tzcode'],$key);
                    }
                    else if(preg_match("/yzwm_d\d*m_hm/",$playid)){
                        $playid_arr = explode('_',$playid);
                        $playsonid = $playid_arr[0];
                        $key = substr($playid_arr[1],1,strlen($playid_arr[1])-2);
                        $num = substr($playid_arr[2],2,strlen($playid_arr[2]));
                        $item['iszjokcount'] = $_obj->$playsonid($opencodes[$key-1],$item['tzcode'],$num);
                    }else{
                        $item['iszjokcount'] = $_obj->$playid($opencodes,$item['tzcode']);
                    }
                }
				else{
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
				exit('1');
			}else{//未中
				exit('0');
			}
	}
	protected function lhc($res){
		$okamount = 0;
		if(strstr($res["mode"],'|')){
			$mode = explode('|',$res["mode"]);
			if($res['iszjokcount'][1]!="") {
				$okamount += $mode[1] * $res['iszjokcount'][1] * $res['beishu'] * $res['yjf'];
			}
			if($res['iszjokcount'][0]!=""){
				$okamount += $mode[0]*$res['iszjokcount'][0]*$res['beishu']*$res['yjf'];
			}
		}else{
			$okamount = ($res['amount']/$res['itemcount'])*$res['mode']*$res['zjcount'];
		}
		return $okamount;
	}
	protected function ssc($res){
	    if(in_array($res['playid'],$this->xyp_playidArr)){
            $okamount = ($res['amount']/$res['itemcount'])*$res['mode']*$res['zjcount'];
        }else{
            $okamount =$res['mode']*$res['zjcount']*$res['beishu']*$res['yjf'];
        }
		return $okamount;
	}
	protected function k3($res){
		$okamount = ($res['amount']/$res['itemcount'])*$res['mode']*$res['zjcount'];
		return $okamount;
	}
	protected function x5($res){
		$okamount = 0;
		if(strstr($res["mode"],'|')){
			$amount = explode('|',$res["mode"]);
			for($i=0;$i<count($amount);$i++){
				if($res['iszjokcount'][$i]!=0){
					$okamount = $amount[$i]*$res['iszjokcount'][$i]*$res['beishu']*$res['yjf'];
			 }
			}
		}else{
			$okamount =$res['mode']*$res['zjcount']*$res['beishu']*$res['yjf'];
		}
		return $okamount;
	}
	protected function pk10($res){
	    if(in_array($res['playid'],$this->pk10_xyp_playidArr)){
            $okamount = ($res['amount']/$res['itemcount'])*$res['mode']*$res['zjcount'];
        }
		else{
            $okamount =$res['mode']*$res['zjcount']*$res['beishu']*$res['yjf'];
        }
		return $okamount;
	}
	protected function dpc($res){
		$okamount =$res['mode']*$res['zjcount']*$res['beishu']*$res['yjf'];
		return $okamount;
	}
	protected function keno($res){
		$okamount = 0;
		if(strstr($res["mode"],'|')){
			$mode = explode('|',$res["mode"]);
			for($i=0;$i<count($mode);$i++){
				if($res['iszjokcount'][$i]!=""){
					$okamount += $mode[$i]*$res['iszjokcount'][$i]*$res['beishu']*$res['yjf'];
				}
			}
		}else{
			$okamount =$res['mode']*$res['zjcount']*$res['beishu']*$res['yjf'];
		}
		return $okamount;

	}
	protected function xy28($res){

	}
//删除两天前的开奖
	protected function delete2daykj(){
		$day = date('Y-m-d',time());
		$odaytime = strtotime($day)-86400*2;
		$map = [];
		$map['opentime'] = ['elt',$odaytime];
		M('kaijiang')->where($map)->delete();
	}
	protected function gettrano($rand=4){
		$rand = (intval($rand)>0 and intval($rand)<=6)?intval($rand):4;
		$trano = strtoupper(self::rand_string(3,0)).date('ymdHis').self::rand_string($rand,1);
		return $trano;
	}
	protected function rand_string($len=6,$type=0,$addChars='') {
		$String      = new \Org\Util\String;
		$randString  = $String->randString($len,$type,$addChars);
		return $randString;
	}

	function log($content){
        \Think\Log::record($content);
	}
}