/**
 * 负责所有账户相关的操作
 */

function FightTeamManage(base_url){
	var that = this;
	var _base_url = base_url;
	var _urlObj = {
		getFightTeamStatus:'mobi/getFightTeamStatus.php',
		applyFightTeam:'mobi/applyFightTeam.php',
		getFightTeamAward:'mobi/getFightTeamAward.php',
		transferFightTeam:'mobi/transferFightTeam.php'
	};
	
	/**
	 * 查询全民团战状态
	 * @param {function} 回调
	 */
	that.getStatus = function(callback){
		mobileManage.ajax({
			url:getUrl('getFightTeamStatus'),
			callback:callback
		});
	};
	
	/**
	 * 参加全民团战
	 * @param {function} 回调
	 */
	that.apply = function(formData,callback){
		var _formData = {
			fightTeameType:''
		};
		$.extend(_formData,formData);
		//检查
		var err = _applyDataCheck(_formData);
		if(err){
			if(callback instanceof Function){
				callback({success:false,message:err});
			}
			return;
		}
		mobileManage.ajax({
			url:getUrl('applyFightTeam'),
			param:_formData,
			callback:callback
		});
	};

	/**
	 * 领取全民团战奖励
	 * @param {Function} callback 回调
	 */
	that.getAward = function(callback){
		mobileManage.ajax({
			url:getUrl('getFightTeamAward'),
			callback:callback
		});
	};

	/**
	 * 全民团战奖励转账
	 * @param {Object} formData 资料
	 * @param {Function} callback 回调
	 */
	that.transfer = function(formData,callback){
		var _formData = {
			platform:'',
			money:''
		};
		$.extend(_formData,formData);
		//检查
		var err = _transferFightTeamDataCheck(_formData);
		if(err){
			if(callback instanceof Function){
				callback({success:false,message:err});
			}
			return;
		}
		mobileManage.ajax({
			url:getUrl('transferFightTeam'),
			param:_formData,
			callback:callback
		});
	};
	
	//驗證資料
	function _applyDataCheck(formData){
		if(!formData.fightTeameType){
			return '[提示]请选择全民团战门派！';
		}
		return undefined;
	}
	
	function _transferFightTeamDataCheck(formData){
		if(!formData.platform){
			return '[提示]请选择转入平台！';
		}
		if(!formData.money){
			return '[提示]请选择转入金额！';
		}
		return undefined;
	}
	
	/**
	 * get action url
	 * @param {String} name actin name
	 */
	function getUrl(name){
		if(!_urlObj[name]){
			alert(name+' 路径不存在！');
			return;
		}
		return _base_url+_urlObj[name];
	};
}
