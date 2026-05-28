#!/usr/bin/env bash
# Barry Workplace English Toolkit · 一键安装(Mac / Linux / WSL)
#
# 用法(从 toolkit 仓库根目录跑):
#   ./scripts/install.sh
#
# 做什么:
#  1. 安装 5 个 Skill 到 ~/.claude/skills/
#  2. 安装 methodology wiki 到 ~/.barry-english/methodology/(coach 的 RAG 数据源)
#  3. 创建 ~/.barry-english/(学员产物根目录)
#
# 不做:
#  - 不装 Node.js(需要时让学员自己装)
#  - 不跑 onboarding(装完后让学员自己 `/barry-onboarding`)

set -euo pipefail

# === 0. 找到 toolkit 仓库根目录(脚本所在的上一层)===
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TOOLKIT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

echo ""
echo "  📦 Barry Workplace English Toolkit Installer"
echo "  ──────────────────────────────────"
echo ""
echo "  Toolkit root: $TOOLKIT_ROOT"
echo ""

# === 1. 预检查:必须在 toolkit 根目录跑,且 skills/ + methodology/ 都存在 ===
if [ ! -d "$TOOLKIT_ROOT/skills" ] || [ ! -d "$TOOLKIT_ROOT/methodology" ]; then
  echo "  ❌ Not a valid toolkit repo (expected skills/ + methodology/ at root)"
  echo "     Run this script from inside the toolkit repo root."
  exit 1
fi

# === 2. 安装 Skills ===
SKILLS_DIR="$HOME/.claude/skills"
mkdir -p "$SKILLS_DIR"

echo "  📥 Installing skills to $SKILLS_DIR ..."
for skill in barry-onboarding barry-profile barry-assessment barry-solution barry-coach barry-logic-training barry-speech-training barry-translation-training barry-logic-to-speech; do
  if [ -d "$TOOLKIT_ROOT/skills/$skill" ]; then
    # 删除旧版本(避免残留),然后 cp -R
    rm -rf "$SKILLS_DIR/$skill"
    cp -R "$TOOLKIT_ROOT/skills/$skill" "$SKILLS_DIR/$skill"
    echo "    ✓ $skill"
  else
    echo "    ⚠️  skipped (not found): $skill"
  fi
done

# === 3. 安装 methodology wiki 到 学员 home ===
BARRY_HOME="$HOME/.barry-english"
mkdir -p "$BARRY_HOME"

echo ""
echo "  📥 Installing methodology wiki to $BARRY_HOME/methodology ..."
# 删除旧版(确保是最新)
rm -rf "$BARRY_HOME/methodology"
cp -R "$TOOLKIT_ROOT/methodology" "$BARRY_HOME/methodology"
PAGES=$(find "$BARRY_HOME/methodology/wiki" -name '*.md' 2>/dev/null | wc -l | tr -d ' ')
echo "    ✓ $PAGES wiki pages installed"

# === 4. 验证 ===
echo ""
echo "  🔍 Verifying installation..."
ERRORS=0
for skill in barry-onboarding barry-profile barry-assessment barry-solution barry-coach barry-logic-training barry-speech-training barry-translation-training barry-logic-to-speech; do
  if [ ! -f "$SKILLS_DIR/$skill/SKILL.md" ]; then
    echo "    ❌ missing: $SKILLS_DIR/$skill/SKILL.md"
    ERRORS=$((ERRORS + 1))
  fi
done
if [ ! -f "$BARRY_HOME/methodology/index.md" ]; then
  echo "    ❌ missing: $BARRY_HOME/methodology/index.md"
  ERRORS=$((ERRORS + 1))
fi

if [ "$ERRORS" -gt 0 ]; then
  echo ""
  echo "  ❌ Installation incomplete ($ERRORS errors). Check messages above."
  exit 1
fi

# === 5. 完成 ===
echo ""
echo "  ✅ Installation complete!"
echo ""
echo "  Next step:"
echo "    1. Open Claude Code (or start a new session if already open)"
echo "    2. Type: /barry-onboarding"
echo "    3. Follow the guided 3-step setup (~30-55 min total)"
echo ""
echo "  Need Node.js for the Quiz Web? Install from https://nodejs.org/"
echo ""
