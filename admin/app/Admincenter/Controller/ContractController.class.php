<?php
namespace Admincenter\Controller;
use Think\Controller;
class ContractController extends CommonController {
	public function __construct(){
		parent::__construct();
	}
	function details(){
		
		if( IS_POST) {
			$data = array(
				'days' => $_POST['days'],
				'mues' => $_POST['mues'],
				'yues' => $_POST['yues'],
				'ratio' => $_POST['ratio'],
				'views' => $_POST['views'],
				'status' => $_POST['status'],
			);
			$int = M("Contract")->where('id=1')->save($data);
			$int?$this->success('操作成功'):$this->error('操作失败');
		} else {
			$res  = M("Contract")->where('id = 1')->find();
			if( !empty($res)){
				
				$res['days'] = $res['days'];
				$res['mues'] = $res['mues'];
				$res['yues'] = $res['yues'];
			}
			$this->assign('res', $res);
			$this->display();
		}
	}

	function users()
	{
		$map = array();
		$this->_db  = M('ContractLog');
		$_pagasize  = 10;
		$count      = $this->_db->where($map)->count();
		$Page       = new \Think\Page($count,$_pagasize);
		$show       = $Page->show();
		$list       = $this->_db->where($map)->limit($Page->firstRow.','.$Page->listRows)->order('add_time desc')->select();
		$jishu = 0;
		foreach($list as $key=>$val) {
			
			if($val['days'] == 1){
				$jishu +=1;
			}
			if($val['mues'] == 1){
				$jishu +=1;
			}
			if($val['yues'] == 1){
				$jishu +=1;
			}
			$list[$key]['user'] = M("Member")->where('id='.$val['member_id'])->find();
			$list[$key]['days_start'] =  !empty($val['days_time']) ?  date("Y-m-d",$val['days_time']) : '';
			$list[$key]['days_end'] =  !empty($val['days_time']) ?  date("Y-m-d",strtotime("+1 day",$val['days_time'])) : '';
			
			$list[$key]['mues_start'] =  !empty($val['mues_time']) ? date("Y-m-d",$val['mues_time']): '';
			$list[$key]['mues_end'] =  !empty($val['mues_time']) ? date("Y-m-d",strtotime("+1 week",$val['mues_time'])): '';
			
			$list[$key]['yues_start'] =  !empty($val['yues_time']) ? date("Y-m-d",$val['yues_time']): '';
			$list[$key]['yues_end'] =  !empty($val['yues_time']) ? date("Y-m-d",strtotime("+1 month",$val['yues_time'])): '';
			$list[$key]['views'] =  $jishu;
		}

		$this->assign('totalcount',$count);
		$this->assign('list',$list);
		$this->assign('page',$show);

		$this->display();
	}
	
	function drawshare()
	{		
		$map = array();
		$this->_db  = M('ContractDrawshare');
		$_pagasize  = 10;
		$count      = $this->_db->where($map)->count();
		$Page       = new \Think\Page($count,$_pagasize);
		$show       = $Page->show();
		$list       = $this->_db->where($map)->limit($Page->firstRow.','.$Page->listRows)->order('add_time desc')->select();
		foreach($list as $key=>$val){
			$list[$key]['user'] = M("Member")->where('id='.$val['member_id'])->find();
			
			$list[$key]['start_time'] =  !empty($val['start_time']) ?  date("Y-m-d",$val['start_time']) : '';
			$list[$key]['end_time'] =  !empty($val['end_time']) ?  date("Y-m-d",$val['end_time']) : '';

		}
		$this->assign('totalcount',$count);
		$this->assign('list',$list);
		$this->assign('page',$show);

		$this->display();
	}
	
	function  drawshareedit()
	{
		if( !IS_POST){
			$id = I("get.id");
			$this->assign('id',$id);
			$this->display();
			exit;
		}
		$id       = I("post.id");
		$remarks = I("post.remarks");
		$status = I("post.status");
		/*Array ( [id] => 9090 [remarks] => sdfsf [status] => 2 )*/
		$res = M("ContractDrawshare")->where('id='.$id)->find();
		if( empty($res)){
			$this->error('找不到领取记录');
		}
		$memberInfo = M("Member")->where("id=".$res['member_id'])->find();
		if( empty($memberInfo)){
			$this->error('没有此用户');
		}
		$data = array(
			'status' => $status,
			'remarks' => $remarks
		);
		$bool = M('ContractDrawshare')->where('id='.$id)->save($data);
		if( $bool && $status == 1){
			//计算上帐
			$balance = $memberInfo['balance']+$res['drawshare_amount'];
			$mbdata['balance'] = $balance;
			$mbool = M("Member")->where("id=".$res['member_id'])->save($mbdata);
			if( $mbool ){
				//可以重新签定
				//is_type` tinyint(2) unsigned NOT NULL DEFAULT '0' COMMENT '0->日契约  1->周契约 2->月契约',
				$dblwamp = array();
				if($res['is_type'] == 0){
					$dblwamp['days'] = 0;
					$dblwamp['days_time'] = '';
				} else if($res['is_type'] == 1){
					$dblwamp['mues'] = 0;
					$dblwamp['mues_time'] = '';
				}else if($res['is_type'] == 2){
					$dblwamp['yues'] = 0;
					$dblwamp['yues_time'] = '';
				}
				M("ContractLog")->where("member_id=".$res['member_id'])->save($dblwamp);
			}
			$this->success("已经审核成功");
		} else if($bool && $status == 2){
			$this->success("已经审核成功");
		} else {
			$this->error('审核失败');
		}
		
	}
}