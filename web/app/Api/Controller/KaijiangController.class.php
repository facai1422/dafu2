<?php
namespace Api\Controller;
use Think\Controller;

class KaijiangController extends CommonController {
    protected $allowMethodList = array('getLatest', 'getHistory', 'getLotteryTrend');

    /**
     * 获取最新开奖数据
     * @param string $type 彩票类型
     * @param int $count 获取数量，默认10条
     */
    public function getLatest($apiparam = array()) {
        $apiparam = self::_cheacktoken($apiparam);
        if (!$apiparam['sign']) return $apiparam;

        $type = isset($apiparam['type']) ? $apiparam['type'] : '';
        $count = isset($apiparam['count']) ? intval($apiparam['count']) : 10;

        if (empty($type)) {
            return ['code' => 400, 'msg' => '彩票类型不能为空', 'data' => null];
        }

        // 验证彩票类型是否存在
        $lottery = M('caipiao')->where(['name' => $type, 'isopen' => 1])->find();
        if (!$lottery) {
            return ['code' => 404, 'msg' => '彩票类型不存在或未开启', 'data' => null];
        }

        // 获取最新开奖数据
        $data = M('kaijiang')
            ->where(['lotname' => $type])
            ->order('id desc')
            ->limit($count)
            ->select();

        if ($data) {
            // 格式化数据
            foreach ($data as &$item) {
                $item['opentime'] = date('Y-m-d H:i:s', $item['addtime']);
                // 格式化开奖号码显示
                $item['opencode_array'] = explode(',', $item['opencode']);
                unset($item['addtime']);
            }
        }

        return [
            'code' => 200,
            'msg' => 'success',
            'data' => $data ?: [],
            'lottery_info' => [
                'name' => $lottery['name'],
                'title' => $lottery['title'],
                'type' => $lottery['type']
            ]
        ];
    }

    /**
     * 获取历史开奖数据（分页）
     * @param string $type 彩票类型
     * @param int $page 页码
     * @param int $pageSize 每页数量
     * @param string $date 指定日期 Y-m-d
     */
    public function getHistory($apiparam = array()) {
        $apiparam = self::_cheacktoken($apiparam);
        if (!$apiparam['sign']) return $apiparam;

        $type = isset($apiparam['type']) ? $apiparam['type'] : '';
        $page = isset($apiparam['page']) ? max(1, intval($apiparam['page'])) : 1;
        $pageSize = isset($apiparam['pageSize']) ? min(50, max(1, intval($apiparam['pageSize']))) : 20;
        $date = isset($apiparam['date']) ? $apiparam['date'] : '';

        if (empty($type)) {
            return ['code' => 400, 'msg' => '彩票类型不能为空', 'data' => null];
        }

        $where = ['lotname' => $type];
        
        // 如果指定了日期
        if (!empty($date) && preg_match('/^\d{4}-\d{2}-\d{2}$/', $date)) {
            $startTime = strtotime($date . ' 00:00:00');
            $endTime = strtotime($date . ' 23:59:59');
            $where['addtime'] = ['between', [$startTime, $endTime]];
        }

        // 获取总数
        $total = M('kaijiang')->where($where)->count();
        
        // 获取数据
        $offset = ($page - 1) * $pageSize;
        $data = M('kaijiang')
            ->where($where)
            ->order('id desc')
            ->limit($offset, $pageSize)
            ->select();

        if ($data) {
            foreach ($data as &$item) {
                $item['opentime'] = date('Y-m-d H:i:s', $item['addtime']);
                $item['opencode_array'] = explode(',', $item['opencode']);
                unset($item['addtime']);
            }
        }

        return [
            'code' => 200,
            'msg' => 'success',
            'data' => $data ?: [],
            'pagination' => [
                'page' => $page,
                'pageSize' => $pageSize,
                'total' => $total,
                'totalPages' => ceil($total / $pageSize)
            ]
        ];
    }

    /**
     * 获取彩票走势数据
     * @param string $type 彩票类型
     * @param int $count 获取数量，默认30条
     */
    public function getLotteryTrend($apiparam = array()) {
        $apiparam = self::_cheacktoken($apiparam);
        if (!$apiparam['sign']) return $apiparam;

        $type = isset($apiparam['type']) ? $apiparam['type'] : '';
        $count = isset($apiparam['count']) ? min(100, max(10, intval($apiparam['count']))) : 30;

        if (empty($type)) {
            return ['code' => 400, 'msg' => '彩票类型不能为空', 'data' => null];
        }

        // 获取走势数据
        $data = M('kaijiang')
            ->field('expect, opencode, addtime')
            ->where(['lotname' => $type])
            ->order('id desc')
            ->limit($count)
            ->select();

        $trendData = [];
        if ($data) {
            foreach ($data as $item) {
                $codes = explode(',', $item['opencode']);
                $trendData[] = [
                    'expect' => $item['expect'],
                    'opencode' => $item['opencode'],
                    'codes' => $codes,
                    'opentime' => date('Y-m-d H:i:s', $item['addtime'])
                ];
            }
        }

        return [
            'code' => 200,
            'msg' => 'success',
            'data' => array_reverse($trendData), // 按时间正序返回，方便绘制走势图
            'count' => count($trendData)
        ];
    }
}
