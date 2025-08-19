<?php
namespace Admincenter\Controller;
use Think\Controller;
class AdmingroupController extends CommonController {
    public function __construct(){
        parent::__construct();
        $this->_db = D('Admingroup');
        $this->_pk = $this->_db->getPk();
    }

    function manage(){
        parent::_manage();
        $this->display();
    }
    function add(){
        if(IS_POST){
            parent::_adddosimp();
        }
        $this->display();
    }
    function edit(){
		$admininfo = $this->admininfo;
		if($admininfo['groupid']!=1){
			$this->error('只有超级管理员可以修改');
		}
        $id = I('id');
		if($id==1){
			$this->error('禁止超级管理员');
		}
        $info = $this->_db->where([$this->_pk=>$id])->find();
        if(!$info){
            $this->error('您修改的数据不存在！');
        }else{
            $this->assign('info',$info);
        }
        if(IS_POST){
            parent::_editdosimp();
        }
        $this->display('edit');
    }

    function delete(){
		$admininfo = $this->admininfo;
		if($admininfo['groupid']!=1){
			$this->error('只有超级管理员可以删除');
		}
        $id     = I('id');
		if($id==1){
			$this->error('超级管理员不能删除');
		}
        if(!$id)$this->error('非法操作！');
        $info = $this->_db->find($id);
        if(!$info)$this->error('您操作的数据不存在或已删除！');
        $int = $this->_db->where([$this->_pk=>$id])->delete();
        $int?$this->success('操作成功！'):$this->error('操作失败！');
    }
    function deleteall(){
        $this->error('为防止误操作，该功能已禁止！');exit;
        parent::_deleteall();
    }
    function listorder(){
        $this->error('为防止误操作，该功能已禁止！');exit;
        parent::_listorder();
    }
}