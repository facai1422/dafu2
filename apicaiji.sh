#!/bin/bash

# 做了点微小的工作 By.Remilia http://remilia.cc/
# Linux版本的PHP循环执行脚本

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "开始循环执行 apicaiji.php..."
echo "脚本目录: $SCRIPT_DIR"
echo "按 Ctrl+C 可以停止执行"

# 无限循环执行PHP脚本
while true; do
    echo "$(date): 执行 apicaiji.php"
    php "$SCRIPT_DIR/apicaiji.php"
    
    # 可选：添加短暂延迟避免过度占用CPU
    # sleep 1
done