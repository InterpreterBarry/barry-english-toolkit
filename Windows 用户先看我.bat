@echo off
chcp 65001 >nul
REM Barry 职场英语工具箱 · Windows 双击启动安装
REM
REM 学员双击此文件 → 自动 cd + PowerShell Bypass + 跑 install.ps1
REM 学员零思考,不用懂"执行策略"

cd /d "%~dp0"
cls

echo.
echo ════════════════════════════════════════════
echo   Barry 职场英语工具箱 · Windows 安装程序
echo ════════════════════════════════════════════
echo.
echo   提示:如果杀毒软件弹出提示,请选"允许"或"信任"
echo   这是安装脚本,不会修改系统设置。
echo.

REM 跑 PowerShell -ExecutionPolicy Bypass 直接调 install.ps1
PowerShell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\install.ps1"
set EXIT_CODE=%ERRORLEVEL%

echo.
echo ════════════════════════════════════════════
if "%EXIT_CODE%"=="0" (
  echo   🎉 安装完成!
  echo.
  echo   下一步:
  echo   1. 关闭此窗口
  echo   2. 打开/重启 Claude Code
  echo   3. 在 Claude Code 里输入:开始
  echo      (或输入 /barry-onboarding)
  echo.
  echo   AI 会带你跑完 30-50 分钟的引导流程。
) else (
  echo   ❌ 安装失败,请截图上方错误信息
  echo   反馈给 Barry。
  echo.
  echo   常见原因:
  echo   1. 杀毒软件拦截 - 请允许后重试
  echo   2. Claude Code 未安装 - 先去 claude.com/claude-code 装
  echo   3. 文件夹路径含特殊字符 - 把整个文件夹移到桌面纯英文路径再试
)
echo ════════════════════════════════════════════
echo.
pause
