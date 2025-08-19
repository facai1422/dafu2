<?php

namespace Api\Controller;

use Think\Controller;

class ContractController extends CommonController
{
	public function addcontractlogs()
	{
		if(!IS_POST){
			return '';
		}
		echo "<pre>";
		print_r($_POST);
		print_r($this->userinfo);
	}
}
