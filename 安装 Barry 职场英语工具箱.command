#!/usr/bin/env bash
# Barry Workplace English Toolkit · Mac 双击启动安装
#
# 学员双击此文件 → 自动弹出终端窗口跑安装
# 不需要学员自己开终端 / cd / 跑命令

# 切换到脚本所在目录(toolkit 仓库根)
cd "$(dirname "${BASH_SOURCE[0]}")" || exit 1

clear
echo ""
echo "════════════════════════════════════════════"
echo "  Barry Workplace English Toolkit · 安装程序"
echo "════════════════════════════════════════════"
echo ""

# 跑实际的 install.sh
./scripts/install.sh
EXIT_CODE=$?

echo ""
echo "════════════════════════════════════════════"
if [ "$EXIT_CODE" -eq 0 ]; then
  echo "  🎉 安装完成!"
  echo ""
  echo "  下一步:"
  echo "  1. 关闭此窗口"
  echo "  2. 打开(或重启)Claude Code"
  echo "  3. 在 Claude Code 里输入:开始"
  echo "     (或输入 /barry-onboarding)"
  echo ""
  echo "  AI 会带你跑完 30-50 分钟的引导流程。"
else
  echo "  ❌ 安装失败,请截图上方错误信息"
  echo "  反馈给 Barry。"
fi
echo "════════════════════════════════════════════"
echo ""
echo "按任意键关闭此窗口..."
read -n 1 -s
