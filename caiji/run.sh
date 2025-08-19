#!/bin/bash

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 检查参数并执行相应的PHP脚本
case "$1" in
    "xitong")
        echo "执行系统采集脚本..."
        php "$SCRIPT_DIR/xitongcaiji.php"
        ;;
    "api")
        echo "执行API采集脚本..."
        php "$SCRIPT_DIR/apicaiji.php"
        ;;
    "k3")
        echo "执行k3脚本..."
        php "$SCRIPT_DIR/k3.php"
        ;;
    "kj")
        echo "执行开放接口脚本..."
        php "$SCRIPT_DIR/openkj.php"
        ;;
    *)
        echo "用法: $0 {xitong|api|k3|kj}"
        echo "参数说明:"
        echo "  xitong - 执行系统采集"
        echo "  api    - 执行API采集"
        echo "  k3     - 执行k3脚本"
        echo "  kj     - 执行开放接口"
        exit 1
        ;;
esac