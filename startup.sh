#!/bin/bash

# Linux一键启动脚本
# 将原Windows批处理文件转换为Linux shell脚本

echo "开始启动所有服务..."

# 启动各个脚本，使用后台运行方式
echo "启动 openkj.sh..."
./openkj.sh &

echo "启动 k3.sh..."
./k3.sh &

echo "启动 jihuarenwu.sh..."
./jihuarenwu.sh &

echo "启动 xitongcaiji.sh..."
./xitongcaiji.sh &

echo "启动 apicaiji.sh..."
./apicaiji.sh &

echo "所有脚本已在后台启动完成！"
echo "提示：如需查看运行状态，可使用 'ps aux | grep 脚本名' 命令"