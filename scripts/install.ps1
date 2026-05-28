# Barry Workplace English Toolkit · 一键安装(Windows PowerShell)
#
# 用法(从 toolkit 仓库根目录跑):
#   .\scripts\install.ps1
#
# 如果遇到执行策略问题:
#   PowerShell -ExecutionPolicy Bypass -File .\scripts\install.ps1

$ErrorActionPreference = 'Stop'

# === 0. 找到 toolkit 仓库根目录 ===
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ToolkitRoot = Split-Path -Parent $ScriptDir

Write-Host ""
Write-Host "  📦 Barry Workplace English Toolkit Installer"
Write-Host "  ──────────────────────────────────"
Write-Host ""
Write-Host "  Toolkit root: $ToolkitRoot"
Write-Host ""

# === 1. 预检查 ===
if (-not (Test-Path "$ToolkitRoot\skills") -or -not (Test-Path "$ToolkitRoot\methodology")) {
    Write-Host "  ❌ Not a valid toolkit repo (expected skills/ + methodology/ at root)" -ForegroundColor Red
    Write-Host "     Run this script from inside the toolkit repo root."
    exit 1
}

# === 2. 安装 Skills ===
$SkillsDir = "$env:USERPROFILE\.claude\skills"
New-Item -ItemType Directory -Force -Path $SkillsDir | Out-Null

Write-Host "  📥 Installing skills to $SkillsDir ..."
$Skills = @('barry-onboarding', 'barry-profile', 'barry-assessment', 'barry-solution', 'barry-coach', 'barry-logic-training', 'barry-speech-training', 'barry-translation-training', 'barry-logic-to-speech')
foreach ($skill in $Skills) {
    $src = "$ToolkitRoot\skills\$skill"
    $dst = "$SkillsDir\$skill"
    if (Test-Path $src) {
        if (Test-Path $dst) { Remove-Item -Recurse -Force $dst }
        Copy-Item -Recurse $src $dst
        Write-Host "    ✓ $skill"
    } else {
        Write-Host "    ⚠️  skipped (not found): $skill" -ForegroundColor Yellow
    }
}

# === 3. 安装 methodology wiki ===
$BarryHome = "$env:USERPROFILE\.barry-english"
New-Item -ItemType Directory -Force -Path $BarryHome | Out-Null

Write-Host ""
Write-Host "  📥 Installing methodology wiki to $BarryHome\methodology ..."
$WikiDst = "$BarryHome\methodology"
if (Test-Path $WikiDst) { Remove-Item -Recurse -Force $WikiDst }
Copy-Item -Recurse "$ToolkitRoot\methodology" $WikiDst
$Pages = (Get-ChildItem -Recurse -Filter '*.md' "$WikiDst\wiki" -ErrorAction SilentlyContinue).Count
Write-Host "    ✓ $Pages wiki pages installed"

# === 4. 验证 ===
Write-Host ""
Write-Host "  🔍 Verifying installation..."
$Errors = 0
foreach ($skill in $Skills) {
    if (-not (Test-Path "$SkillsDir\$skill\SKILL.md")) {
        Write-Host "    ❌ missing: $SkillsDir\$skill\SKILL.md" -ForegroundColor Red
        $Errors++
    }
}
if (-not (Test-Path "$BarryHome\methodology\index.md")) {
    Write-Host "    ❌ missing: $BarryHome\methodology\index.md" -ForegroundColor Red
    $Errors++
}

if ($Errors -gt 0) {
    Write-Host ""
    Write-Host "  ❌ Installation incomplete ($Errors errors). Check messages above." -ForegroundColor Red
    exit 1
}

# === 5. 完成 ===
Write-Host ""
Write-Host "  ✅ Installation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "  Next step:"
Write-Host "    1. Open Claude Code (or start a new session if already open)"
Write-Host "    2. Type: /barry-onboarding"
Write-Host "    3. Follow the guided 3-step setup (~30-55 min total)"
Write-Host ""
Write-Host "  Need Node.js for the Quiz Web? Install from https://nodejs.org/"
Write-Host ""
