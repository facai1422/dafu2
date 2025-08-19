#!/bin/bash

# 设置终端标题（在支持的终端中显示）
echo -ne "\033]0;k3.sh\007"

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "执行 k3.php..."
php "$SCRIPT_DIR/k3.php"

echo "重新启动 k3.sh..."
# 启动新的脚本实例
exec "$SCRIPT_DIR/k3.sh"