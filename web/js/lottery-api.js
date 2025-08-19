/**
 * 彩票开奖数据API调用库
 * 提供获取最新开奖、历史开奖、走势数据等功能
 */

var LotteryAPI = {
    // API基础路径
    baseUrl: 'http://' + window.location.host + '/Api/Kaijiang/',
    
    /**
     * 获取最新开奖数据
     * @param {string} type 彩票类型
     * @param {function} callback 回调函数
     * @param {number} count 获取数量，默认10条
     */
    getLatest: function(type, callback, count) {
        count = count || 10;
        
        if (!type) {
            console.error('彩票类型不能为空');
            return;
        }
        
        $.ajax({
            url: this.baseUrl + 'getLatest',
            type: 'GET',
            data: {
                type: type,
                count: count
            },
            dataType: 'json',
            success: function(res) {
                if (res.code === 200) {
                    callback && callback(res.data, res.lottery_info);
                } else {
                    console.error('获取开奖数据失败:', res.msg);
                    callback && callback(null, null, res.msg);
                }
            },
            error: function(xhr, status, error) {
                console.error('请求失败:', error);
                callback && callback(null, null, '网络请求失败');
            }
        });
    },

    /**
     * 获取历史开奖数据
     * @param {string} type 彩票类型
     * @param {function} callback 回调函数
     * @param {object} options 选项 {page: 1, pageSize: 20, date: '2024-01-01'}
     */
    getHistory: function(type, callback, options) {
        options = options || {};
        
        var params = {
            type: type,
            page: options.page || 1,
            pageSize: options.pageSize || 20
        };
        
        if (options.date) {
            params.date = options.date;
        }
        
        $.ajax({
            url: this.baseUrl + 'getHistory',
            type: 'GET',
            data: params,
            dataType: 'json',
            success: function(res) {
                if (res.code === 200) {
                    callback && callback(res.data, res.pagination);
                } else {
                    console.error('获取历史开奖数据失败:', res.msg);
                    callback && callback(null, null, res.msg);
                }
            },
            error: function(xhr, status, error) {
                console.error('请求失败:', error);
                callback && callback(null, null, '网络请求失败');
            }
        });
    },

    /**
     * 获取走势数据
     * @param {string} type 彩票类型
     * @param {function} callback 回调函数
     * @param {number} count 获取数量，默认30条
     */
    getTrend: function(type, callback, count) {
        count = count || 30;
        
        $.ajax({
            url: this.baseUrl + 'getLotteryTrend',
            type: 'GET',
            data: {
                type: type,
                count: count
            },
            dataType: 'json',
            success: function(res) {
                if (res.code === 200) {
                    callback && callback(res.data);
                } else {
                    console.error('获取走势数据失败:', res.msg);
                    callback && callback(null, res.msg);
                }
            },
            error: function(xhr, status, error) {
                console.error('请求失败:', error);
                callback && callback(null, '网络请求失败');
            }
        });
    }
};

/**
 * 开奖数据显示器
 * 用于在页面上显示开奖数据
 */
var LotteryDisplay = {
    
    /**
     * 显示最新开奖数据
     * @param {Array} data 开奖数据数组
     * @param {object} lotteryInfo 彩票信息
     * @param {string} containerId 容器ID
     */
    showLatest: function(data, lotteryInfo, containerId) {
        var container = $('#' + containerId);
        if (!container.length) {
            console.error('容器不存在:', containerId);
            return;
        }
        
        if (!data || data.length === 0) {
            container.html('<div class="no-data">暂无开奖数据</div>');
            return;
        }
        
        var latest = data[0];
        var html = '';
        
        html += '<div class="lottery-latest">';
        html += '  <div class="lottery-header">';
        html += '    <h3>' + (lotteryInfo ? lotteryInfo.title : '') + '</h3>';
        html += '  </div>';
        html += '  <div class="lottery-content">';
        html += '    <div class="lottery-item">';
        html += '      <span class="label">期号:</span>';
        html += '      <span class="value" id="lottery-expect">' + latest.expect + '</span>';
        html += '    </div>';
        html += '    <div class="lottery-item">';
        html += '      <span class="label">开奖号码:</span>';
        html += '      <span class="value lottery-numbers" id="lottery-opencode">';
        
        // 格式化开奖号码显示
        if (latest.opencode_array) {
            latest.opencode_array.forEach(function(num, index) {
                html += '<span class="number-ball">' + num + '</span>';
            });
        } else {
            html += latest.opencode;
        }
        
        html += '      </span>';
        html += '    </div>';
        html += '    <div class="lottery-item">';
        html += '      <span class="label">开奖时间:</span>';
        html += '      <span class="value" id="lottery-opentime">' + latest.opentime + '</span>';
        html += '    </div>';
        html += '  </div>';
        html += '</div>';
        
        container.html(html);
    },
    
    /**
     * 显示历史开奖列表
     * @param {Array} data 开奖数据数组
     * @param {object} pagination 分页信息
     * @param {string} containerId 容器ID
     */
    showHistory: function(data, pagination, containerId) {
        var container = $('#' + containerId);
        if (!container.length) {
            console.error('容器不存在:', containerId);
            return;
        }
        
        if (!data || data.length === 0) {
            container.html('<div class="no-data">暂无历史数据</div>');
            return;
        }
        
        var html = '';
        html += '<div class="lottery-history">';
        html += '  <table class="history-table">';
        html += '    <thead>';
        html += '      <tr>';
        html += '        <th>期号</th>';
        html += '        <th>开奖号码</th>';
        html += '        <th>开奖时间</th>';
        html += '      </tr>';
        html += '    </thead>';
        html += '    <tbody>';
        
        data.forEach(function(item) {
            html += '      <tr>';
            html += '        <td>' + item.expect + '</td>';
            html += '        <td class="opencode-cell">';
            
            if (item.opencode_array) {
                item.opencode_array.forEach(function(num) {
                    html += '<span class="number-ball small">' + num + '</span>';
                });
            } else {
                html += item.opencode;
            }
            
            html += '        </td>';
            html += '        <td>' + item.opentime + '</td>';
            html += '      </tr>';
        });
        
        html += '    </tbody>';
        html += '  </table>';
        
        // 添加分页信息
        if (pagination) {
            html += '  <div class="pagination-info">';
            html += '    第 ' + pagination.page + ' 页，共 ' + pagination.totalPages + ' 页';
            html += '    （总计 ' + pagination.total + ' 条记录）';
            html += '  </div>';
        }
        
        html += '</div>';
        
        container.html(html);
    }
};

/**
 * 便捷函数：获取最新开奖数据并显示
 * @param {string} type 彩票类型
 * @param {string} containerId 容器ID，默认为 'lottery-display'
 * @param {number} count 获取数量，默认10条
 */
function displayLatestLottery(type, containerId, count) {
    containerId = containerId || 'lottery-display';
    count = count || 10;
    
    LotteryAPI.getLatest(type, function(data, lotteryInfo, error) {
        if (error) {
            $('#' + containerId).html('<div class="error-message">获取数据失败: ' + error + '</div>');
            return;
        }
        
        LotteryDisplay.showLatest(data, lotteryInfo, containerId);
    }, count);
}

/**
 * 便捷函数：获取历史开奖数据并显示
 * @param {string} type 彩票类型
 * @param {string} containerId 容器ID，默认为 'lottery-history'
 * @param {object} options 选项
 */
function displayHistoryLottery(type, containerId, options) {
    containerId = containerId || 'lottery-history';
    options = options || {};
    
    LotteryAPI.getHistory(type, function(data, pagination, error) {
        if (error) {
            $('#' + containerId).html('<div class="error-message">获取数据失败: ' + error + '</div>');
            return;
        }
        
        LotteryDisplay.showHistory(data, pagination, containerId);
    }, options);
}

// 使用示例（注释掉的代码，实际使用时取消注释）
/*
// 获取重庆时时彩最新开奖
displayLatestLottery('cqssc', 'lottery-display');

// 获取北京快3历史开奖
displayHistoryLottery('bjk3', 'history-container', {
    page: 1,
    pageSize: 20,
    date: '2024-01-15'
});

// 使用API直接获取数据
LotteryAPI.getLatest('cqssc', function(data, lotteryInfo) {
    if (data && data.length > 0) {
        var latest = data[0];
        console.log('最新期号:', latest.expect);
        console.log('开奖号码:', latest.opencode);
        console.log('开奖时间:', latest.opentime);
    }
});
*/
