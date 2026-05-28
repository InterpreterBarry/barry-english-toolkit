# Barry 职场英语工具箱 · 一行安装引导(Windows PowerShell)
#
# 用户只需粘贴这一行:
#   irm https://raw.githubusercontent.com/InterpreterBarry/barry-english-toolkit/main/scripts/bootstrap.ps1 | iex
#
# 它做什么:① 把仓库下载到 %USERPROFILE%\Barry-English-Toolkit ② 自动跑 install.ps1

$ErrorActionPreference = "Stop"
$repo   = "InterpreterBarry/barry-english-toolkit"
$branch = "main"
$dest   = Join-Path $HOME "Barry-English-Toolkit"

Write-Host ""
Write-Host "  下载 Barry 职场英语工具箱 ($repo) ..."
Write-Host ""

if (Get-Command git -ErrorAction SilentlyContinue) {
  if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
  git clone --depth 1 --branch $branch "https://github.com/$repo.git" $dest
} else {
  Write-Host "  (未检测到 git,改用 zip 下载)"
  $tmp = Join-Path $env:TEMP "barry-toolkit-dl"
  if (Test-Path $tmp) { Remove-Item -Recurse -Force $tmp }
  New-Item -ItemType Directory -Path $tmp | Out-Null
  $zip = Join-Path $tmp "src.zip"
  Invoke-WebRequest -Uri "https://github.com/$repo/archive/refs/heads/$branch.zip" -OutFile $zip
  Expand-Archive -Path $zip -DestinationPath $tmp -Force
  if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
  Move-Item (Join-Path $tmp "barry-english-toolkit-$branch") $dest
  Remove-Item -Recurse -Force $tmp
}

Write-Host ""
Write-Host "  下载完成 -> $dest"
Write-Host "  开始安装 ..."
Write-Host ""
powershell -ExecutionPolicy Bypass -File (Join-Path $dest "scripts\install.ps1")
