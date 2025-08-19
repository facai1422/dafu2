<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>{:GetVar('webtitle')}-线上官网</title>
<meta name="renderer" content="webkit" />
<link rel="stylesheet" type="text/css" href="__ROOT__/resources/css/new_index.css" />

<script>
<?php echo "var k3lotteryrates = ".json_encode($rates,JSON_UNESCAPED_UNICODE);?>
</script>
<script type="text/javascript" src="__ROOT__/resources/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="__ROOT__/resources/js/artDialog.js"></script>
<script type="text/javascript" src="__ROOT__/resources/main/ssc.js"></script>
<!--[if lt IE 9]>
<script src="__ROOT__/resources/js/html5shiv.js"></script>
<![endif]-->

</head>
<style type="text/css">
body {background-image: url(assets/bg3.jpg);}
</style>
<body>
 
<style>	
	.j_lottery_time .shij span{
		color: #fd4747;
		font-size: 60px;
	}

</style>
<style>
* {
    box-sizing: inherit;
}
</style>
<script type="text/javascript" src="__ROOT__/resources/js/way.min.js"></script>
<script type="text/javascript" src="__ROOT__/resources/js/jquery.history.js"></script>
<script type="text/javascript" src="__ROOT__/resources/main/common.js"></script>
<script type="text/javascript" src="__ROOT__/resources/main/index.js"></script>
<script type="text/javascript" src="__ROOT__/resources/js/member.page.js"></script>
<script type="text/javascript" src="__ROOT__/resources/js2/tabGameData.js"></script>
<script type="text/javascript" src="__ROOT__/resources/main/ssc.js"></script>
<script type="text/javascript" src="__ROOT__/resources/js2/tabGame.js"></script>
<script type="text/javascript" src="__ROOT__/resources/js2/bootstrap.min.js"></script>
<script type="text/javascript" src="__ROOT__/resources/js/jquery-ui.min.js"></script>
<!--<script src="__JS2__/require.js" data-main="__JS2__/homePage"></script>-->
<!--new-->
<div class="lottery-main">
  <div class="container-main">
    <div class="lottery_head">
      <div class="lottery_show">
        <div class="lottery_con clearfix">
          <div class="lottery_type fl inline">
            <div class="logo icon_cqssc"></div>
          </div>
          <div class="lottery-timeBox">
            <div class="lottery-history-box fl">
              <p class="lottery-current">当前在售<b class=""  id="f_lottery_info_number" way-data="showExpect.currFullExpect">----</b>期</p>
              <!--<p class="collecting"><span class="check"></span>收藏</p>-->
              <p class="betTime">投注时间<span class="soundBtn soundClickEvent soundon"></span></p>
            </div>
            <div class="undefined lottery_timeBox left">
              <div class="time-box">
                <div class="timeBox">
                  <div class="next_num">
                    <div class="num_left" way-data="gametimes.h">0</div>
                    <div class="num_right" way-data="gametimes.h">0</div>
                  </div>
                  <div class="current_num">
                    <div class="num_left" way-data="gametimes.h">0</div>
                    <div class="num_right" way-data="gametimes.h">0</div>
                  </div>
                </div>
                <span>:</span></div>
              <div class="time-box">
                <div class="timeBox">
                  <div class="next_num">
                    <div class="num_left" way-data="gametimes.m">0</div>
                    <div class="num_right" way-data="gametimes.m">0</div>
                  </div>
                  <div class="current_num">
                    <div class="num_left" way-data="gametimes.m">0</div>
                    <div class="num_right" way-data="gametimes.m">0</div>
                  </div>
                </div>
                <span>:</span></div>
              <div class="time-box">
                <div class="timeBox">
                  <div class="next_num">
                    <div class="num_left" way-data="gametimes.s">0</div>
                    <div class="num_right" way-data="gametimes.s">0</div>
                  </div>
                  <div class="current_num">
                    <div class="num_left" way-data="gametimes.s">0</div>
                    <div class="num_right" way-data="gametimes.s">0</div>
                  </div>
                </div>
                <span>:</span></div>
            </div>
          </div>
          <div class="lottery_timer fl inline">
            <div class="lottery_issue fl inline">
              <p class="lottery_history_issue" way-data="showExpect.lastFullExpect" id="f_lottery_info_lastnumber" firstissueno="" style="text-align:center">开奖号码</p>
              <!--<p class="winningReminder check"><span>中奖提醒</span><i></i></p>-->
            </div>
          </div>
          <div class="lottery_num fl inline lotterycqssc">
            <div class="lottery_num_box alias-cqssc">
			<input type="hidden" value="1,1,2" id="j_openNum"><!--开奖号码效果赋值-->
              <ul id="num" class="cqssc_ul history-codes-enter-active ssc_winning_sum">
                <li class="issueBox0"><span class="issueBox" way-data="showExpect.openCode1"></span></li>
                <li class="issueBox1"><span class="issueBox" way-data="showExpect.openCode2"></span></li>
                <li class="issueBox2"><span class="issueBox" way-data="showExpect.openCode3"></span></li>
                <li class="issueBox3"><span class="issueBox" way-data="showExpect.openCode4"></span></li>
                <li class="issueBox4"><span class="issueBox" way-data="showExpect.openCode5"></span></li>
              </ul>
            </div>
            <div class="rd2ffc">
              <div class="lottery_num_popup"><span class="popup_icon_sj"></span>
                <ul id="rd2_list">
                  <li class="num_popup_item"><span class="num_popup_item_text">万位：</span>
                    <div class="num_popup_item_kjnum"> = <span><em></em></span></div>
                  </li>
                  <li class="num_popup_item"><span class="num_popup_item_text">千位：</span>
                    <div class="num_popup_item_kjnum"> = <span><em></em></span></div>
                  </li>
                  <li class="num_popup_item"><span class="num_popup_item_text">百位：</span>
                    <div class="num_popup_item_kjnum"> = <span><em></em></span></div>
                  </li>
                  <li class="num_popup_item"><span class="num_popup_item_text">十位：</span>
                    <div class="num_popup_item_kjnum"> = <span><em></em></span></div>
                  </li>
                  <li class="num_popup_item"><span class="num_popup_item_text">个位：</span>
                    <div class="num_popup_item_kjnum"> = <span><em></em></span></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lottery-selectarea-main inline-block lottery-main-cqssc"><span>
      <div class="cf re w790">
        <div class="fl ssc-select-area">
          <div class="lotteryLeft">
            <div>
              <div>
                <div class="lotteryGroup cqssc" id="j_play_select">
                  <ul class="play_select_tit">
				  	<ul class="play_select_tit">
						<li lottery_code="5x" class="hover">五星</li>	
						<li lottery_code="4x">四星</li>
						<li lottery_code="q3">前三</li>
						<li lottery_code="z3">中三</li>
						<li lottery_code="h3">后三</li>
						<li lottery_code="q2">前二</li>
						<li lottery_code="h2">后二</li>
						<li lottery_code="1x">定位</li>
						<li lottery_code="dsds">大小单双</li>
						<li lottery_code="dsds">龙虎</li> 
						<li lottery_code="dsds">斗牛</li> 
						<li lottery_code="dsds">百家乐</li>
						<li lottery_code="dsds">梭哈</li>
					</ul>
                </div>
                <div class="lotteryMember relative">
                  <dl class="cWay">
                    <dt>后三直选</dt>
                    <dd class="hover">复式</dd>
                    <dd>单式</dd>
                    <dd>直选和值</dd>
                  </dl>
                  <dl class="cWay">
                    <dt>后三组选</dt>
                    <dd>组三</dd>
                    <dd>组六</dd>
                    <dd>混合组选</dd>
                    <dd>组选和值</dd>
                  </dl>
                  <dl>
                  </dl>
                  <div class="fandian absolute">
                    <select>
                      <option value="1">奖金 1800.00-7.8%</option>
                      <option value="2">奖金 1956.00-0.0%</option>
                    </select>
                  </div>
                </div>
                <div class="cf">
                  <div class="button-miss-container">
                    <div class="switcher"><span class="active">遗漏</span><span class="">冷热</span></div>
                    <div class="options"><span class="">当前遗漏</span><span class="">最大遗漏</span></div>
                  </div>
                  <a href="#/lottery/ssc/cq30s/cg" class="shortcut-link">极速版</a>
                  <div class="playf_dl"><span class="wfsm"><i class="icon_sm"></i>说明
                    <div class="desc-panel">从个、十、百位各选一个号码组成一注。</div>
                    </span><span class="help_exp"><i class="icon_sl"></i>示例
                    <div class="desc-panel">投注方案：345；<br>
                      开奖号码：345，<br>
                      即中后三直选一等奖</div>
                    </span><span class="help_help"><i class="icon_bz"></i>帮助
                    <div class="desc-panel">从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。</div>
                    </span></div>
                </div>
              </div>
            </div>
            <div class="lotteryView">
              <div class="each">
                <div class="inline-block codeBox">
                  <h4>百位</h4>
                  <ul class="nList">
                    <li class="">0</li>
                    <li class="">1</li>
                    <li class="">2</li>
                    <li class="">3</li>
                    <li class="">4</li>
                    <li class="">5</li>
                    <li class="">6</li>
                    <li class="">7</li>
                    <li class="">8</li>
                    <li class="">9</li>
                  </ul>
                  <ul class="cList">
                    <li>全</li>
                    <li>大</li>
                    <li>小</li>
                    <li>奇</li>
                    <li>偶</li>
                    <li>清</li>
                  </ul>
                </div>
              </div>
              <div class="each">
                <div class="inline-block codeBox">
                  <h4>十位</h4>
                  <ul class="nList">
                    <li class="">0</li>
                    <li class="">1</li>
                    <li class="">2</li>
                    <li class="">3</li>
                    <li class="">4</li>
                    <li class="">5</li>
                    <li class="">6</li>
                    <li class="">7</li>
                    <li class="">8</li>
                    <li class="">9</li>
                  </ul>
                  <ul class="cList">
                    <li>全</li>
                    <li>大</li>
                    <li>小</li>
                    <li>奇</li>
                    <li>偶</li>
                    <li>清</li>
                  </ul>
                </div>
              </div>
              <div class="each">
                <div class="inline-block codeBox">
                  <h4>个位</h4>
                  <ul class="nList">
                    <li class="">0</li>
                    <li class="">1</li>
                    <li class="">2</li>
                    <li class="">3</li>
                    <li class="">4</li>
                    <li class="">5</li>
                    <li class="">6</li>
                    <li class="">7</li>
                    <li class="">8</li>
                    <li class="">9</li>
                  </ul>
                  <ul class="cList">
                    <li>全</li>
                    <li>大</li>
                    <li>小</li>
                    <li>奇</li>
                    <li>偶</li>
                    <li>清</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="addOrderBox">
              <div class="currentBet">
                <p>已选 <span>0</span> 注</p>
                <p>共 <span class="money">0</span> 元</p>
                <br class="clearfix">
              </div>
              <div class="select-times">
                <div class="multipleCon fl relative"><span class="reduce">-</span>
                  <input maxlength="5" type="number" value="1">
                  <span class="add">+</span><span class="bei fr">倍</span></div>
              </div>
              <div class="select-modes expectMMc">
                <div class="ab"><span class="active">元</span><span class="">角</span><span class="">分</span><span class="">厘</span></div>
              </div>
              <div>
                <div class="min-chooseMsg">
                  <p class="lightning">一键投注</p>
                  <p class="addBetbtn addBtnDefault">+&nbsp;&nbsp;添加投注</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lotteryRight fl">
          <div class="fullHeight">
            <div class="recently-codes-plus-container">
              <div class="content">
                <h3>近期开奖<a target="_blank" href="/game/bonuscode?lotteryid=1&amp;issuecount=30">走势图</a></h3>
                <h2><span class="issue">期号</span><span class="codes">开奖号码</span><span class="form">三星组态</span></h2>
                <div class="history-codes c_cqssc" id="history-codes">
                  <div class="history-code-item">
                    <div class=" code-issue">0407-054</div>
                    <div class="code-number"><span class="disabled">4</span><span class="disabled">0</span><span class="active">5</span><span class="active">5</span><span class="active">1</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-053</div>
                    <div class="code-number"><span class="disabled">4</span><span class="disabled">1</span><span class="active">7</span><span class="active">2</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-052</div>
                    <div class="code-number"><span class="disabled">0</span><span class="disabled">1</span><span class="active">4</span><span class="active">8</span><span class="active">6</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-051</div>
                    <div class="code-number"><span class="disabled">4</span><span class="disabled">4</span><span class="active">2</span><span class="active">9</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-050</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">6</span><span class="active">7</span><span class="active">8</span><span class="active">3</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-049</div>
                    <div class="code-number"><span class="disabled">3</span><span class="disabled">8</span><span class="active">7</span><span class="active">8</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-048</div>
                    <div class="code-number"><span class="disabled">7</span><span class="disabled">8</span><span class="active">0</span><span class="active">5</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-047</div>
                    <div class="code-number"><span class="disabled">8</span><span class="disabled">2</span><span class="active">7</span><span class="active">5</span><span class="active">4</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-046</div>
                    <div class="code-number"><span class="disabled">0</span><span class="disabled">8</span><span class="active">7</span><span class="active">8</span><span class="active">7</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-045</div>
                    <div class="code-number"><span class="disabled">8</span><span class="disabled">7</span><span class="active">8</span><span class="active">9</span><span class="active">6</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-044</div>
                    <div class="code-number"><span class="disabled">2</span><span class="disabled">9</span><span class="active">4</span><span class="active">0</span><span class="active">5</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-043</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">8</span><span class="active">6</span><span class="active">4</span><span class="active">0</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-042</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">6</span><span class="active">6</span><span class="active">6</span><span class="active">6</span></div>
                    <div class="code-form"><span class="empty">-</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-041</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">5</span><span class="active">1</span><span class="active">6</span><span class="active">3</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-040</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">2</span><span class="active">0</span><span class="active">0</span><span class="active">4</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-039</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">2</span><span class="active">6</span><span class="active">3</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-038</div>
                    <div class="code-number"><span class="disabled">8</span><span class="disabled">7</span><span class="active">7</span><span class="active">6</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-037</div>
                    <div class="code-number"><span class="disabled">4</span><span class="disabled">7</span><span class="active">0</span><span class="active">1</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-036</div>
                    <div class="code-number"><span class="disabled">1</span><span class="disabled">9</span><span class="active">0</span><span class="active">9</span><span class="active">7</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-035</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">4</span><span class="active">6</span><span class="active">1</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-034</div>
                    <div class="code-number"><span class="disabled">5</span><span class="disabled">0</span><span class="active">7</span><span class="active">3</span><span class="active">3</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-033</div>
                    <div class="code-number"><span class="disabled">0</span><span class="disabled">3</span><span class="active">7</span><span class="active">0</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-032</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">3</span><span class="active">3</span><span class="active">0</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-031</div>
                    <div class="code-number"><span class="disabled">4</span><span class="disabled">7</span><span class="active">7</span><span class="active">3</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-030</div>
                    <div class="code-number"><span class="disabled">5</span><span class="disabled">9</span><span class="active">9</span><span class="active">4</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-029</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">2</span><span class="active">9</span><span class="active">1</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-028</div>
                    <div class="code-number"><span class="disabled">4</span><span class="disabled">7</span><span class="active">4</span><span class="active">8</span><span class="active">1</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-027</div>
                    <div class="code-number"><span class="disabled">0</span><span class="disabled">1</span><span class="active">6</span><span class="active">7</span><span class="active">1</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-026</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">9</span><span class="active">0</span><span class="active">0</span><span class="active">5</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-025</div>
                    <div class="code-number"><span class="disabled">4</span><span class="disabled">4</span><span class="active">3</span><span class="active">4</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-024</div>
                    <div class="code-number"><span class="disabled">8</span><span class="disabled">7</span><span class="active">0</span><span class="active">2</span><span class="active">0</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-023</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">5</span><span class="active">4</span><span class="active">7</span><span class="active">6</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-022</div>
                    <div class="code-number"><span class="disabled">2</span><span class="disabled">8</span><span class="active">2</span><span class="active">7</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-021</div>
                    <div class="code-number"><span class="disabled">2</span><span class="disabled">3</span><span class="active">1</span><span class="active">4</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-020</div>
                    <div class="code-number"><span class="disabled">7</span><span class="disabled">8</span><span class="active">9</span><span class="active">6</span><span class="active">4</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-019</div>
                    <div class="code-number"><span class="disabled">7</span><span class="disabled">3</span><span class="active">5</span><span class="active">8</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-018</div>
                    <div class="code-number"><span class="disabled">7</span><span class="disabled">5</span><span class="active">8</span><span class="active">8</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-017</div>
                    <div class="code-number"><span class="disabled">4</span><span class="disabled">3</span><span class="active">3</span><span class="active">8</span><span class="active">3</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-016</div>
                    <div class="code-number"><span class="disabled">1</span><span class="disabled">2</span><span class="active">6</span><span class="active">2</span><span class="active">3</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-015</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">0</span><span class="active">8</span><span class="active">5</span><span class="active">3</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-014</div>
                    <div class="code-number"><span class="disabled">1</span><span class="disabled">7</span><span class="active">6</span><span class="active">5</span><span class="active">6</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-013</div>
                    <div class="code-number"><span class="disabled">1</span><span class="disabled">1</span><span class="active">3</span><span class="active">4</span><span class="active">1</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-012</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">2</span><span class="active">4</span><span class="active">2</span><span class="active">1</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-011</div>
                    <div class="code-number"><span class="disabled">8</span><span class="disabled">7</span><span class="active">4</span><span class="active">3</span><span class="active">0</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-010</div>
                    <div class="code-number"><span class="disabled">3</span><span class="disabled">7</span><span class="active">1</span><span class="active">8</span><span class="active">3</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-009</div>
                    <div class="code-number"><span class="disabled">0</span><span class="disabled">0</span><span class="active">7</span><span class="active">3</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-008</div>
                    <div class="code-number"><span class="disabled">7</span><span class="disabled">7</span><span class="active">1</span><span class="active">9</span><span class="active">5</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-007</div>
                    <div class="code-number"><span class="disabled">8</span><span class="disabled">5</span><span class="active">5</span><span class="active">6</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-006</div>
                    <div class="code-number"><span class="disabled">7</span><span class="disabled">0</span><span class="active">4</span><span class="active">0</span><span class="active">7</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-005</div>
                    <div class="code-number"><span class="disabled">8</span><span class="disabled">2</span><span class="active">8</span><span class="active">7</span><span class="active">6</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-004</div>
                    <div class="code-number"><span class="disabled">8</span><span class="disabled">6</span><span class="active">7</span><span class="active">5</span><span class="active">3</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-003</div>
                    <div class="code-number"><span class="disabled">8</span><span class="disabled">0</span><span class="active">1</span><span class="active">9</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-002</div>
                    <div class="code-number"><span class="disabled">5</span><span class="disabled">5</span><span class="active">4</span><span class="active">9</span><span class="active">0</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0407-001</div>
                    <div class="code-number"><span class="disabled">3</span><span class="disabled">7</span><span class="active">4</span><span class="active">4</span><span class="active">6</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-059</div>
                    <div class="code-number"><span class="disabled">8</span><span class="disabled">2</span><span class="active">9</span><span class="active">8</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-058</div>
                    <div class="code-number"><span class="disabled">3</span><span class="disabled">0</span><span class="active">0</span><span class="active">4</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-057</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">2</span><span class="active">3</span><span class="active">4</span><span class="active">0</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-056</div>
                    <div class="code-number"><span class="disabled">2</span><span class="disabled">6</span><span class="active">5</span><span class="active">8</span><span class="active">1</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-055</div>
                    <div class="code-number"><span class="disabled">5</span><span class="disabled">6</span><span class="active">0</span><span class="active">2</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-054</div>
                    <div class="code-number"><span class="disabled">8</span><span class="disabled">2</span><span class="active">4</span><span class="active">3</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-053</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">3</span><span class="active">2</span><span class="active">4</span><span class="active">3</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-052</div>
                    <div class="code-number"><span class="disabled">5</span><span class="disabled">9</span><span class="active">1</span><span class="active">7</span><span class="active">6</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-051</div>
                    <div class="code-number"><span class="disabled">0</span><span class="disabled">7</span><span class="active">2</span><span class="active">3</span><span class="active">0</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-050</div>
                    <div class="code-number"><span class="disabled">1</span><span class="disabled">5</span><span class="active">9</span><span class="active">1</span><span class="active">4</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-049</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">1</span><span class="active">1</span><span class="active">6</span><span class="active">7</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-048</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">7</span><span class="active">2</span><span class="active">5</span><span class="active">0</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-047</div>
                    <div class="code-number"><span class="disabled">8</span><span class="disabled">2</span><span class="active">6</span><span class="active">2</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-046</div>
                    <div class="code-number"><span class="disabled">7</span><span class="disabled">3</span><span class="active">6</span><span class="active">2</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-045</div>
                    <div class="code-number"><span class="disabled">7</span><span class="disabled">6</span><span class="active">8</span><span class="active">4</span><span class="active">5</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-044</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">1</span><span class="active">9</span><span class="active">2</span><span class="active">3</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-043</div>
                    <div class="code-number"><span class="disabled">3</span><span class="disabled">1</span><span class="active">0</span><span class="active">9</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-042</div>
                    <div class="code-number"><span class="disabled">7</span><span class="disabled">6</span><span class="active">0</span><span class="active">4</span><span class="active">6</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-041</div>
                    <div class="code-number"><span class="disabled">3</span><span class="disabled">6</span><span class="active">6</span><span class="active">5</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-040</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">8</span><span class="active">7</span><span class="active">4</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-039</div>
                    <div class="code-number"><span class="disabled">5</span><span class="disabled">2</span><span class="active">3</span><span class="active">7</span><span class="active">6</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-038</div>
                    <div class="code-number"><span class="disabled">0</span><span class="disabled">5</span><span class="active">2</span><span class="active">9</span><span class="active">5</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-037</div>
                    <div class="code-number"><span class="disabled">3</span><span class="disabled">2</span><span class="active">5</span><span class="active">0</span><span class="active">3</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-036</div>
                    <div class="code-number"><span class="disabled">3</span><span class="disabled">4</span><span class="active">7</span><span class="active">5</span><span class="active">6</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-035</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">1</span><span class="active">4</span><span class="active">6</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-034</div>
                    <div class="code-number"><span class="disabled">0</span><span class="disabled">6</span><span class="active">4</span><span class="active">6</span><span class="active">6</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-033</div>
                    <div class="code-number"><span class="disabled">5</span><span class="disabled">9</span><span class="active">7</span><span class="active">2</span><span class="active">5</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-032</div>
                    <div class="code-number"><span class="disabled">1</span><span class="disabled">8</span><span class="active">6</span><span class="active">0</span><span class="active">6</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-031</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">0</span><span class="active">9</span><span class="active">1</span><span class="active">1</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-030</div>
                    <div class="code-number"><span class="disabled">5</span><span class="disabled">2</span><span class="active">1</span><span class="active">5</span><span class="active">1</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-029</div>
                    <div class="code-number"><span class="disabled">7</span><span class="disabled">7</span><span class="active">5</span><span class="active">4</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-028</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">6</span><span class="active">8</span><span class="active">5</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-027</div>
                    <div class="code-number"><span class="disabled">5</span><span class="disabled">3</span><span class="active">5</span><span class="active">3</span><span class="active">7</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-026</div>
                    <div class="code-number"><span class="disabled">1</span><span class="disabled">8</span><span class="active">1</span><span class="active">5</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-025</div>
                    <div class="code-number"><span class="disabled">1</span><span class="disabled">5</span><span class="active">8</span><span class="active">7</span><span class="active">1</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-024</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">3</span><span class="active">1</span><span class="active">1</span><span class="active">5</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-023</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">9</span><span class="active">8</span><span class="active">6</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-022</div>
                    <div class="code-number"><span class="disabled">7</span><span class="disabled">7</span><span class="active">9</span><span class="active">6</span><span class="active">9</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-021</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">4</span><span class="active">1</span><span class="active">3</span><span class="active">1</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-020</div>
                    <div class="code-number"><span class="disabled">9</span><span class="disabled">7</span><span class="active">8</span><span class="active">4</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_fc5d50">组三</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-019</div>
                    <div class="code-number"><span class="disabled">2</span><span class="disabled">2</span><span class="active">9</span><span class="active">8</span><span class="active">4</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-018</div>
                    <div class="code-number"><span class="disabled">0</span><span class="disabled">1</span><span class="active">6</span><span class="active">3</span><span class="active">8</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-017</div>
                    <div class="code-number"><span class="disabled">0</span><span class="disabled">4</span><span class="active">1</span><span class="active">9</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-016</div>
                    <div class="code-number"><span class="disabled">7</span><span class="disabled">1</span><span class="active">4</span><span class="active">1</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-015</div>
                    <div class="code-number"><span class="disabled">2</span><span class="disabled">2</span><span class="active">6</span><span class="active">7</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                  <div class="history-code-item">
                    <div class=" code-issue">0406-014</div>
                    <div class="code-number"><span class="disabled">6</span><span class="disabled">8</span><span class="active">1</span><span class="active">8</span><span class="active">2</span></div>
                    <div class="code-form"><span class="c_0b9fb9">组六</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </span></div>
    <div class="lottery-ssc-orderarea-main relative">
      <div>
        <div class="addList">
          <table cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="100%"><div class="lotteryList">
                    <table>
                      <thead>
                        <tr class="cleanall">
                          <th>玩法与投注号码</th>
                          <th>模式</th>
                          <th>资金模式</th>
                          <th width="10%">倍率</th>
                          <th>注数</th>
                          <th>金额</th>
                          <th><a class="deleteAll pointer">清空</a></th>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                  </div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="orderNow">
          <div class="trace-issues">
            <div class="trace-left">
              <div class="countdownBox">
                <div class="time-icon"></div>
                <div class="smallTime lottery_timeBox left">
                  <div class="time-box">
                    <div class="timeBox">
                      <div class="next_num">
                        <div class="num_left">0</div>
                        <div class="num_right">0</div>
                      </div>
                      <div class="current_num">
                        <div class="num_left">0</div>
                        <div class="num_right">0</div>
                      </div>
                    </div>
                    <span>:</span></div>
                  <div class="time-box">
                    <div class="timeBox">
                      <div class="next_num">
                        <div class="num_left">0</div>
                        <div class="num_right">9</div>
                      </div>
                      <div class="current_num">
                        <div class="num_left">0</div>
                        <div class="num_right">9</div>
                      </div>
                    </div>
                    <span>:</span></div>
                  <div class="time-box">
                    <div class="timeBox">
                      <div class="next_num">
                        <div class="num_left">3</div>
                        <div class="num_right">0</div>
                      </div>
                      <div class="current_num">
                        <div class="num_left">3</div>
                        <div class="num_right">1</div>
                      </div>
                    </div>
                    <span>:</span></div>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="traceIssuesBox">
                <div class="checkZhui fqzhBox"><span class="uncheck"></span><b class="fq">追号</b></div>
                <div class="checkZhui qxzhBox">取消</div>
              </div>
            </div>
            <div class="sendChoose"><a class="disabled">立即投注</a></div>
            <div class="clearfix"></div>
          </div>
          <div class="chooseAllMsg">
            <p>已选 <span class="num">0 </span>单 共计 <span class="num">0</span> 注</p>
            <p>总金额 <span class="num orange">0.000</span> 元</p>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="bettingRecord outer-con">
      <div class="warp lotteryHistory-container" id="close_bet-record_tc">
        <h3>投注记录 <a>刷新</a><i>...</i><span>更多</span></h3>
        <div class="lotteryHistoryBody">
          <table width="100%">
            <tbody>
              <tr>
                <th width="14%">投注时间</th>
                <th>彩种</th>
                <th width="12%">期号</th>
                <th>玩法</th>
                <th width="14%">投注内容</th>
                <th>投注金额</th>
                <th>奖金</th>
                <th width="12%">开奖号码</th>
                <th width="95">状态(点击查看)</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!--end-->
<include file="Public/footer" />

<div id="submitComfirebox" style="display:none">
    <div class="submitComfire">	<ul class="ui-form"><li><label for="question1" class="ui-label">彩种：</label><span class="ui-text-info" way-data="showExpect.shortname">--</span></li>		<li><label for="question1" class="ui-label">期号：</label><span class="ui-text-info">第 <span way-data="showExpect.currFullExpect" class="mark">---</span> 期</span></li>		<li><label for="answer1" class="ui-label">详情：</label>		<div id="Orderdetaillist" class="textarea" style="font-size:12px;">		</div>		</li>		<li><label for="question2" class="ui-label">付款总金额：</label><span class="ui-text-info"><span id="Orderdetailtotalprice" class="mark">0.00</span>元</span></li>		<li><label for="question2" class="ui-label">付款帐号：</label><span way-data="user.username" class="ui-text-info mark">---</span></li>	</ul>	<p class="text-note">	</p>	<p class="text-note">	</p></div>
</div>

<div id="submitComfireboxaaa" style="display:none">
    <div class="submitComfire">
    <ul class="ui-form">
    <li>
        <label for="question1" class="ui-label">彩种：</label>
        <span class="ui-text-info" way-data="showExpect.shortname">--</span>
    </li>
    <li>
        <label for="question1" class="ui-label">期号：</label>
        <span class="ui-text-info">第 <span way-data="showExpect.currFullExpect" class="mark">---</span> 期</span>
    </li>
    <li>
        <label for="answer1" class="ui-label">详情：</label>
        <div id="Orderdetaillist" class="textarea" style="font-size:12px;">		</div>
    </li>
    <li>
        <label for="question2" class="ui-label">付款总金额：</label>
        <span class="ui-text-info"><span id="Orderdetailtotalprice" class="mark">0.00</span>元</span>
    </li>
    <li>
        <label for="question2" class="ui-label">付款帐号：</label>
        <span way-data="user.username" class="ui-text-info mark">---</span>
    </li>
    </ul>
    </div>
</div>

<div id="getBillInfobox" style="display:none">
<div class="submitComfire">
<ul class="ui-form">
<li style="width:50%; float:left"><label for="question1" class="ui-label">彩种：</label><span class="mark" way-data="BillInfo.cptitle">--</span></li>
<li style="width:50%; float:left"><label for="question1" class="ui-label">期号：</label><span class="mark">第 <span way-data="BillInfo.expect" class="mark">--</span> 期</span></li>	
<li style="width:50%; float:left"><label for="question1" class="ui-label">玩法：</label><span class="mark" way-data="BillInfo.playtitle">--</span></li>
<li style="width:50%; float:left"><label for="question1" class="ui-label">赔率：</label><span way-data="BillInfo.mode" class="mark">--</span></li>	
<li style="width:50%; float:left"><label for="question1" class="ui-label">玩法模式：</label><span way-data="BillInfo.yjf_m" class="mark">--</span></li>	
<li><label for="answer1" class="ui-label">投注号码：</label><span class="mark" way-data="BillInfo.tzcode">--</span></li>	
<li style="width:50%; float:left"><label for="question2" class="ui-label">单注金额：</label><span class="mark" way-data="BillInfo.amount">--</span></li><li style="width:50%; float:left"><label for="question2" class="ui-label">投注注数：</label><span class="mark" way-data="BillInfo.itemcount">--</span></li>
<li style="width:50%; float:left"><label for="question2" class="ui-label">中奖金额：</label><span class="mark" way-data="BillInfo.okamount">--</span></li><li style="width:50%; float:left"><label for="question2" class="ui-label">中奖注数：</label><span class="mark" way-data="BillInfo.okcount">--</span></li>


<li style="width:50%; float:left"><label for="question2" class="ui-label">开奖号码：</label><span class="mark" way-data="BillInfo.opencode">--</span></li><li style="width:50%; float:left"><label for="question2" class="ui-label">中奖状态：</label><span id="BillInfo_isdraw" way-data="BillInfo.state">--</span></li>
</ul>
</div>
</div>
<div id="submitComfirebox" style="display:none">
    <div class="submitComfire">
		<ul class="ui-form">
			<li>
				<label for="question1" class="ui-label">彩种：</label>
				<span class="ui-text-info" way-data="showExpect.shortname">--</span>
			</li>
			<li>
				<label for="question1" class="ui-label">期号：</label>
				<span class="ui-text-info">第 <span way-data="showExpect.currFullExpect" class="mark">---</span> 期</span>
			</li>		
			<li>
				<label for="answer1" class="ui-label">详情：</label>
				<div id="Orderdetaillist" class="textarea" style="font-size:12px;"></div>		
			</li>		
			<li>
				<label for="question2" class="ui-label">付款总金额：</label>
				<span class="ui-text-info"><span id="Orderdetailtotalprice" class="mark">0.00</span>元</span>
			</li>		
			<li>
				<label for="question2" class="ui-label">付款帐号：</label>
				<span way-data="user.username" class="ui-text-info mark">---</span>
			</li>	
		</ul>	
		<p class="text-note">	</p>	<p class="text-note">	</p>
	</div>
</div>
<script>
	function winningScroll(obj) {
		var height = $(obj).find('li:first').outerHeight();
		var str = -height + 'px';
		var index = 0;

		$(obj).animate({'marginTop' : str},3000,function (){
			$(this).css('marginTop','0px').find('li:first').appendTo($(this));
		})
	}

	function openwindow(url,name,iWidth,iHeight) {
		var url; //转向网页的地址;
		var name; //网页名称，可为空;
		var iWidth; //弹出窗口的宽度;
		var iHeight; //弹出窗口的高度;
		//window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
		var iTop = (window.screen.height-30-iHeight)/2; //获得窗口的垂直位置;
		var iLeft = (window.screen.width-10-iWidth)/2; //获得窗口的水平位置;
		window.open(url,name,'height='+iHeight+',,innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
	}
	//玩法说明
	$('.helps').click(function () {
		openwindow("{:U('Game/howtoplay', array('name'=>$nowcpinfo['name'],'cz'=>ACTION_NAME))}",'',1058,870);
	})

	//中奖信息scroll
	var myar = setInterval("winningScroll('.ranking_scroll')",5000);
	$('.ranking_scroll').hover(function (){ 
		clearInterval(myar);
	},function () {
		myar = setInterval("winningScroll('.ranking_scroll')",5000);
	})
	// 我的账户信息
	var timer1 = null;
	$('.my_account,.user_login_info2_list').mouseover(function (){
		if(timer1){
			clearTimeout(timer1);
		}
		$('.user_login_info2_list').show();
	})
	$('.my_account,.user_login_info2_list').mouseout(function (){
		timer1 = setTimeout(function (){
			$('.user_login_info2_list').hide();
		},300)
	})
	// 全部彩票
	var timer2 = null;
	$('.allLottery,.backLeftLottery').mouseover(function (){
		if(timer2){
			clearTimeout(timer2);
		}
		$('.backLeftLottery').show();
	})
	$('.allLottery,.backLeftLottery').mouseout(function (){
		timer2 = setTimeout(function (){
			$('.backLeftLottery').hide();
		},300)
	})
	//余额切换
	$('.hide_money_btn').click(function () {
		$('.show_money').hide();
		$('.hide_money').show();
	})
	$('.show_money_btn').click(function () {
		$('.show_money').show();
		$('.hide_money').hide();
	})
	//余额刷新
	var index  = 0;
	$('.refresh_money').click(function () {
		index++;
		var sum = index*360;
		$(this).css('transform','rotate('+sum+'deg)');
	})
	//个人信息和昨日奖金榜以及中奖信息的名片显示
	/*$("[data-toggle='popover']").popover({
	trigger: "hover",
	delay: {hide: 100}
	}).on('shown.bs.popover', function (event) {
			var that = this;
			$('.popover').on('mouseenter', function () {
					$(that).attr('in', true);
			}).on('mouseleave', function () {
					$(that).removeAttr('in');
					$(that).popover('hide');
			});
	}).on('hide.bs.popover', function (event) {
			if ($(this).attr('in')) {
					event.preventDefault();
			}
	});*/
</script>
<style>
	.looding{
		width:100%;
		height:200%;
		z-index: 999;
		background: rgba(0,0,0,0.7);
		position: absolute;
		color:#333;
		top:0;
		left:0;
		text-align:center
	}
	.looding span{
		z-index: 9999;
		background: #ffffff;
		text-align:center;
		font-size:20px;
		color:#000;
		display: block;
		width:200px;
		height:50px;
		line-height: 50px;
		border-radius: 5px;
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top: -25px;
		margin-left: -100PX;
	}
</style>
<div class="looding"  style="display:none;">
	<span>正在处理数椐... <img src="__IMG__/addloading.gif" width="23" height="23" alt=""></span>

</div>
<style type="text/css">
body {background-image: url(assets/bg3.jpg);}
</style>
</body>
</html>