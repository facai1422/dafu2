#!/bin/bash

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "开始启动各个服务..."

# 启动各个服务，在后台运行
echo "启动 api 服务..."
"$SCRIPT_DIR/run.sh" api &

echo "启动 xitong 服务..."
"$SCRIPT_DIR/run.sh" xitong &

echo "启动 k3 服务..."
"$SCRIPT_DIR/run.sh" k3 &

echo "启动 kj 服务..."
"$SCRIPT_DIR/run.sh" kj &

echo "等待10秒..."
sleep 10

echo "启动 auto 服务..."
"$SCRIPT_DIR/auto.sh" &

echo "所有服务已启动完成！"