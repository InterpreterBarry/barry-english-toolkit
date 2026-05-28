#!/usr/bin/env bash
# Barry 职场英语工具箱 · 一行安装引导(Mac / Linux / WSL)
#
# 用户只需粘贴这一行:
#   curl -fsSL https://raw.githubusercontent.com/InterpreterBarry/barry-english-toolkit/main/scripts/bootstrap.sh | bash
#
# 它做什么:① 把仓库下载到 ~/Barry-English-Toolkit ② 自动跑 install.sh

set -euo pipefail

REPO="InterpreterBarry/barry-english-toolkit"
BRANCH="main"
DEST="$HOME/Barry-English-Toolkit"

echo ""
echo "  ⬇️  下载 Barry 职场英语工具箱 ($REPO) ..."
echo ""

if command -v git >/dev/null 2>&1; then
  rm -rf "$DEST"
  git clone --depth 1 --branch "$BRANCH" "https://github.com/$REPO.git" "$DEST"
else
  echo "  (未检测到 git,改用 tarball 下载)"
  TMP="$(mktemp -d)"
  curl -fsSL "https://github.com/$REPO/archive/refs/heads/$BRANCH.tar.gz" | tar -xz -C "$TMP"
  rm -rf "$DEST"
  mv "$TMP/barry-english-toolkit-$BRANCH" "$DEST"
  rm -rf "$TMP"
fi

echo ""
echo "  ✅ 下载完成 → $DEST"
echo "  🔧 开始安装 ..."
echo ""
bash "$DEST/scripts/install.sh"
