<?php
namespace Kaijiang\Controller;
use Think\Controller;
class KjController extends Controller {
	public $_parent = array();
	//sxzhixfsq
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
	function _title($title='启动结算任务'){
		echo "\n";
		echo $this->_t(str_pad('-',5,'-').$title,22,'-');
		echo "\n";
	}
	function check($totalzxnum=0,$runcount=0){
		$playidArr = ['tmlmda','tmlmxiao','tmlmdan','tmlmshuang','tmlmdadan','tmlmdashuang','tmlmxiaodan','tmlmxiaoshuang','tmlmheda','tmlmhexiao','tmlmhedan','tmlmheshuang','tmlmweida','tmlmweixiao','tmlmjiaqin','tmlmyeshou','tmlmhongbo','tmlmlvbo','tmlmlanbo',
			'zm1lmda','zm1lmxiao','zm1lmdan','zm1lmshuang','zm1lmdadan','zm1lmdashuang','zm1lmxiaodan','zm1lmxiaoshuang','zm1lmheda','zm1lmhexiao','zm1lmhedan','zm1lmheshuang','zm1lmweida', 'zm1lmweixiao','zm1lmjiaqin','zm1lmyeshou','zm1lmhongbo','zm1lmlvbo','zm1lmlanbo',
			'zm2lmda','zm2lmxiao','zm2lmdan','zm2lmshuang','zm2lmdadan','zm2lmdashuang','zm2lmxiaodan','zm2lmxiaoshuang','zm2lmheda','zm2lmhexiao','zm2lmhedan','zm2lmheshuang','zm2lmweida','zm2lmweixiao','zm2lmjiaqin','zm2lmyeshou','zm2lmhongbo','zm2lmlvbo','zm2lmlanbo',
			'zm3lmda','zm3lmxiao','zm3lmdan','zm3lmshuang','zm3lmdadan','zm3lmdashuang','zm3lmxiaodan','zm3lmxiaoshuang','zm3lmheda','zm3lmhexiao','zm3lmhedan','zm3lmheshuang','zm3lmweida','zm3lmweixiao','zm3lmjiaqin','zm3lmyeshou','zm3lmhongbo','zm3lmlvbo','zm3lmlanbo',
			'zm4lmda','zm4lmxiao','zm4lmdan','zm4lmshuang','zm4lmdadan','zm4lmdashuang','zm4lmxiaodan','zm4lmxiaoshuang','zm4lmheda','zm4lmhexiao','zm4lmhedan','zm4lmheshuang','zm4lmweida','zm4lmweixiao','zm4lmjiaqin','zm4lmyeshou','zm4lmhongbo','zm4lmlvbo','zm4lmlanbo',
			'zm5lmda','zm5lmxiao','zm5lmdan','zm5lmshuang','zm5lmdadan','zm5lmdashuang','zm5lmxiaodan','zm5lmxiaoshuang','zm5lmheda','zm5lmhexiao','zm5lmhedan','zm5lmheshuang','zm5lmweida','zm5lmweixiao','zm5lmjiaqin','zm5lmyeshou','zm5lmhongbo','zm5lmlvbo','zm5lmlanbo',
			'zm6lmda','zm6lmxiao','zm6lmdan','zm6lmshuang','zm6lmdadan','zm6lmdashuang','zm6lmxiaodan','zm6lmxiaoshuang','zm6lmheda','zm6lmhexiao','zm6lmhedan','zm6lmheshuang','zm6lmweida','zm6lmweixiao','zm6lmjiaqin','zm6lmyeshou','zm6lmhongbo','zm6lmlvbo','zm6lmlanbo',
		];
	    if($runcount==0){
			$this->_title();
		}
		$memberdb    = D('member');
		$fuddetaildb = D('fuddetail');
		$touzhudb    = D('touzhu');
		$DB_PREFIX = C('DB_PREFIX');
		$sql = "select a.*,b.name,b.expect,b.opencode from {$DB_PREFIX}touzhu as a left join {$DB_PREFIX}kaijiang as b on a.cpname = b.name and a.expect = b.expect where a.isdraw = 0 and b.opencode!='' order by a.id desc limit 10";
		$touzhulist = M()->query($sql);

		$_ZJARRAY = [];
		foreach($touzhulist as $k=>$item){
			// file_put_contents("touzhu.txt", json_encode($touzhulist));
//            $this->log(json_encode($item));
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
                    $opencodes = explode(',',$item['opencode']);
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
            $item['iszjcount'] = $item['iszjokcount'];
			if($item['iszjcount']>=1){
			//中
				$_typeid0 = $item['typeid'];
				if(strstr($item["mode"],'|')){
					$num = count(explode('|',$item['mode']));
					for($i=0;$i<$num;$i++){
						if($item["iszjcount"][$i]>0){
							$item['zjcount'] += $item["iszjcount"][$i];
						}
					}
				}else{
					$item['zjcount']=$item['iszjokcount'];
				}
				$okamount = self::$_typeid0($item);
				$userinfo = [];
				$userbalance = $memberdb->where(['id'=>$item['uid']])->getField('balance');
				//事务开始
				$memberdb->startTrans();
				$memint = $memberdb->where(['id'=>$item['uid']])->setInc('balance',$okamount);//账户增加金额
				//修改投注为中奖状态
				$touzhuint = $touzhudb->where(['id'=>$item['id']])->setField(['isdraw'=>1,'okcount'=>$item['zjcount'],'okamount'=>$okamount,'opencode'=>$item['opencode']]);

				//账变记录
				$fdata = [];
				$fdata['trano'] = $item['trano'];
				$fdata['uid'] = $item['uid'];
				$fdata['username'] = $item['username'];
				$fdata['type'] = 'reward';
				$fdata['typename'] = '返奖';
				$fdata['amount'] = $okamount;
				$fdata['amountbefor'] = $userbalance;
				$fdata['amountafter'] = $userbalance + $okamount;
				$fdata['oddtime'] = time();
				$fdata['remark'] = $item['cptitle'] .'第'. $item['expect'] . '期-' . $item['playtitle'];
				$fudint = $fuddetaildb->data($fdata)->add();

				if($memint && $touzhuint && $fudint){
					$memberdb->commit();//提交事物
					$_ZJARRAY[] = $item['username'] . "-" .$item['cptitle'] .'第'. $item['expect'] . '期-' . "中奖金额：".$okamount;
				}else{
					$memberdb->rollback();//事物回滚
				}
				// --------start
				$memberinfo = M('member')->field('parentid,fandian')->where(['username'=>$item['username']])->find();
				
				 if($memberinfo['parentid'] !='0'){
			$i = 1;

			$this->dailifandian($memberinfo['parentid'],$memberinfo['fandian'],$item['amount'],$item['trano'],$item['id'],$item['username'],$memberinfo['fandian'],$i);
             foreach($this->_parent as $k => $v){
				$dailidata['uid'] = $v['uid'];
				$dailidata['username'] = $v['username'];
				$dailidata['amount'] = $v['fandianjine'];
				$dailidata['touzhujine'] = $v['touzhujine'];
				$dailidata['trano'] = $v['trano'];
				$dailidata['fandian'] = $v['fandian'];
				$dailidata['shenhe'] = 1;
				$dailidata['xiajiid'] = $v['xiajiid'];
				$dailidata['xiajiuser'] = $v['xiajiuser'];
				$dailidata['xiajifandian'] = $v['xiajifandian'];
				$dailidata['oddtime'] = time();
				M('dailifandian')->add($dailidata);

				$amountbefor = M('Member')->where("id='{$dailidata['uid']}'")->getField('balance');
				M('member')->where("id='{$dailidata['uid']}'")->setInc('balance',$dailidata['amount']);
				//添加会员账户明细
				$fuddetaildata = [];
				$fuddetaildata['trano']      = $dailidata['trano'];
				$fuddetaildata['uid']      = $dailidata['uid'];
				$fuddetaildata['username'] =  $dailidata['username'];
				$fuddetaildata['type']     = 'yongjinshenhe';
				$fuddetaildata['typename']     = '佣金发放通过';
				$fuddetaildata['remark']       = $remark?$remark:'佣金发放通过';
				$fuddetaildata['oddtime']     = NOW_TIME;
				$fuddetaildata['amount']   = $dailidata['amount'];
				$fuddetaildata['amountbefor']   = $amountbefor;
				$fuddetaildata['amountafter']   = $amountbefor + $dailidata['amount'];
				M('fuddetail')->data($fuddetaildata)->add();

			   }
			}
			//洗码
			$memdb = M('member');
			$memberinfo = M('member')->field('id,xima')->where(['username'=>$item['username']])->find();
			if($memberinfo['xima']>0){
                                    $ximaamount = $item['amount'];
                                    if($item['amount']>$memberinfo['xima']){
                                        $ximaamount = $memberinfo['xima'];
                                    }
                                    $memdb->where(['id'=>$memberinfo['id']])->setDec('xima',$ximaamount);
                                    $fuddetail_data = array();
                                    $fuddetail_data['trano'] = $item['trano'];
                                    $fuddetail_data['uid'] = $memberinfo['id'];
                                    $fuddetail_data['username'] = $item['username'];
                                    $fuddetail_data['amount'] = abs($ximaamount);
                                    $fuddetail_data['amountbefor'] = $memberinfo['xima'];
                                    $fuddetail_data['amountafter'] = $memberinfo['xima']-abs($ximaamount);
                                    $fuddetail_data['oddtime'] = time();
                                    $fuddetail_data['remark'] = "投注减，彩种:{$item['cptitle']},{$item['expect']}";
                                    $fuddetail_data['type'] = 'xima';
                                    $fuddetail_data['typename'] = C('fuddetailtypes.xima');
                                    M('fuddetail')->data($fuddetail_data)->add();
                                }else{
                                    $memdb->where(['id'=>$memberinfo['id']])->setField('xima',0);
                                }
			// --------end
			}else if($item['iszjcount']<1){//未中
				$okamount = -$item['amount'];
				$touzhuint = $touzhudb->where(['id'=>$item['id']])->setField(['isdraw'=>-1,'okcount'=>0,'okamount'=>0,'opencode'=>$item['opencode']]);
				$_ZJARRAY[] = $item['username'] . "-" .$item['cptitle'] .'第'. $item['expect'] . '期-' . "未中奖,输：".$okamount;

				// --------start
				$memberinfo = M('member')->field('parentid,fandian')->where(['username'=>$item['username']])->find();
				$parent_memberinfo = M('member')->where(['id'=>$memberinfo['parentid']])->find();
				 if($memberinfo['parentid'] !='0'&&$parent_memberinfo){
			$i = 1;

			$this->dailifandian($memberinfo['parentid'],$memberinfo['fandian'],$item['amount'],$item['trano'],$item['id'],$item['username'],$memberinfo['fandian'],$i);
             foreach($this->_parent as $k => $v){
				$dailidata['uid'] = $v['uid'];
				$dailidata['username'] = $v['username'];
				$dailidata['amount'] = $v['fandianjine'];
				$dailidata['touzhujine'] = $v['touzhujine'];
				$dailidata['trano'] = $v['trano'];
				$dailidata['fandian'] = $v['fandian'];
				$dailidata['shenhe'] = 1;
				$dailidata['xiajiid'] = $v['xiajiid'];
				$dailidata['xiajiuser'] = $v['xiajiuser'];
				$dailidata['xiajifandian'] = $v['xiajifandian'];
				$dailidata['oddtime'] = time();
				M('dailifandian')->add($dailidata);

				$amountbefor = M('Member')->where("id='{$dailidata['uid']}'")->getField('balance');
				M('member')->where("id='{$dailidata['uid']}'")->setInc('balance',$dailidata['amount']);
				//添加会员账户明细
				$fuddetaildata = [];
				$fuddetaildata['trano']      = $dailidata['trano'];
				$fuddetaildata['uid']      = $dailidata['uid'];
				$fuddetaildata['username'] =  $dailidata['username'];
				$fuddetaildata['type']     = 'yongjinshenhe';
				$fuddetaildata['typename']     = '佣金发放通过';
				$fuddetaildata['remark']       = $remark?$remark:'佣金发放通过';
				$fuddetaildata['oddtime']     = NOW_TIME;
				$fuddetaildata['amount']   = $dailidata['amount'];
				$fuddetaildata['amountbefor']   = $amountbefor;
				$fuddetaildata['amountafter']   = $amountbefor + $dailidata['amount'];
				M('fuddetail')->data($fuddetaildata)->add();

			   }
			}

			//洗码
			$memdb = M('member');
			$memberinfo = M('member')->field('id,xima')->where(['username'=>$item['username']])->find();
			if($memberinfo['xima']>0){
				
                                    $ximaamount = $item['amount'];
                                    if($item['amount']>$memberinfo['xima']){
                                        $ximaamount = $memberinfo['xima'];
                                    }
                                    
                                    $memdb->where(['id'=>$memberinfo['id']])->setDec('xima',$ximaamount);
                                    
                                    $fuddetail_data = array();
                                    $fuddetail_data['trano'] = $item['trano'];
                                    $fuddetail_data['uid'] = $memberinfo['id'];
                                    $fuddetail_data['username'] = $item['username'];
                                    $fuddetail_data['amount'] = abs($ximaamount);
                                    $fuddetail_data['amountbefor'] = $memberinfo['xima'];
                                    $fuddetail_data['amountafter'] = $memberinfo['xima']-abs($ximaamount);
                                    $fuddetail_data['oddtime'] = time();
                                    
                                    $fuddetail_data['remark'] = "投注减，彩种:{$item['cptitle']},{$item['expect']}";
                                    $fuddetail_data['type'] = 'xima';
                                  
                                    $fuddetail_data['typename'] = C('fuddetailtypes.xima');
                                    M('fuddetail')->data($fuddetail_data)->add();
                                }else{
                                    $memdb->where(['id'=>$memberinfo['id']])->setField('xima',0);
                                }
			// --------end

			}
			$touzhulist[$k] = $item;
		}
		if($_ZJARRAY){
			$return = implode("\n",$_ZJARRAY);
		}else{
			 $return =  "未结算 -- cgcgame";
		}
		 echo auto_charset($return."\n",'utf-8','gbk');
		 sleep(5);
		$runcount++;
		if($runcount==10){
			$runcount=0;
			echo auto_charset("休眠3s",'utf-8','gbk');
			sleep(3);
		}
		if($totalzxnum<120){
			self::check($totalzxnum+1,$runcount);
		}
	}
   protected function lhc($res){
		$okamount = 0;
		/*$rules = M('wanfa')->where(['typeid'=>$res['typeid'],'playid'=>$res['playid']])->find();
		if($rules){
			$defaultfandian = 0.13;
			$userinfo = [];
			$userinfo = M('member')->where(['id'=>$res['uid']])->find();
			$fandian = $userinfo['fandian'];
			if($rules['rate']>0){
				$amount = $res['mode']*$res['yjf']*$res['beishu'];
				$okamount = $amount*$res['zjcount'];
			}else{
				$amount = (($rules['maxjj']/2) - ($defaultfandian-($fandian/100-$res['repoint']/100)) * $rules['totalzs'])*$res['yjf']*$res['beishu'];
				$okamount = $amount*$res['zjcount'];
			}
		}else{

		}*/
//		投注金额/投注注数*奖金*中奖注数
//print_r($res);
//die();
//exit('('.$res['amount'].'/'.$res['itemcount'].')*'.$res['mode'].'*'.$res['zjcount']);
		if(is_array($res['iszjokcount'])){
			
			foreach($res['iszjokcount'] as $v){
				$iszjokcount+=$v;
			}
		}else{
			$iszjokcount=$res['iszjokcount'];
		}
		$okamount = ($res['amount']/$res['itemcount'])*$res['mode']*$res['beishu']*$iszjokcount;
		//echo "ID:".$res['id']." : (".$res['amount']."/".$res['itemcount'].")*".$res['mode']."*".$res['beishu']."*".$iszjokcount."=".$okamount;
		//die();
        //var_dump( $res['zjcount']);exit;
		//$okamount =$res['mode']*$res['zjcount']*$res['beishu']*$res['yjf'];
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

	// 递归处理代理返点
	function dailifandian($parentid,$fandian,$amount,$trano,$xiajiid,$xiajiuser,$xiajifandian,$i){
		//查找上级的返点
		$where['id'] = $parentid;
		$daili = M('member')->field('id,parentid,fandian,username')->where($where)->find();
		$fandianjine = ((($daili['fandian']-$fandian)/100))*$amount;          //第一次反点金额 (代理返点-下级返点)/100*下级投注金额
		$this->_parent[$i]["fandianjine"] = $fandianjine;
		$this->_parent[$i]["uid"] = $daili['id'];
		$this->_parent[$i]["fandian"] = $daili['fandian'];
		$this->_parent[$i]["xiajiid"] = $xiajiid;
		$this->_parent[$i]["xiajiuser"] = $xiajiuser;
		$this->_parent[$i]["xiajifandian"] = $xiajifandian;
		$this->_parent[$i]["username"] = $daili['username'];
		$this->_parent[$i]["touzhujine"]  = $amount;
		$this->_parent[$i]["trano"] = $trano;
		$this->_parent[$i]["oddtime"] = time();
		$i++;
		$parent_memberinfo = M('member')->where(['id'=>$daili['parentid']])->find();
		if($daili['parentid']!='0'&&$parent_memberinfo){
			$this->dailifandian($daili['parentid'],$daili['fandian'],$amount,$trano,$daili['id'],$daili['username'],$daili['fandian'],$i);
		}
	}
}