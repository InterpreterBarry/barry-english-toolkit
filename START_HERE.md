# 从这里开始 · Barry 职场英语工具箱

> 欢迎!这是一套跑在 **Claude Code** 上的 AI 职场英语训练工具箱。
> 装好之后,AI 教练帮你测水平、找卡点、出专属训练方案,之后每天 10–60 分钟跟 AI 练听说。
>
> 完整介绍看 [README.md](README.md)(中英双语)。这一页只讲「怎么最快装好用上」。

---

## 1 分钟装好

### 前置(必须有)

- **Claude Code** 已安装 —— 没装先去 https://claude.com/claude-code
- **Node.js**(可选,Quiz 词汇网页需要)—— 没装可以之后再补,https://nodejs.org/

### 三种装法,任选一种

**① 一行命令(最快)**

打开终端,粘贴对应系统的一行:

- **Mac / Linux / WSL**
  ```bash
  curl -fsSL https://raw.githubusercontent.com/InterpreterBarry/barry-english-toolkit/main/scripts/bootstrap.sh | bash
  ```
- **Windows(PowerShell)**
  ```powershell
  irm https://raw.githubusercontent.com/InterpreterBarry/barry-english-toolkit/main/scripts/bootstrap.ps1 | iex
  ```

它会自动下载工具箱 + 完成安装。

**② 让 Claude Code 帮你装**(不想碰终端)

打开 Claude Code,原话照搬:

> "帮我安装 github.com/InterpreterBarry/barry-english-toolkit 这个工具箱,跑里面的 `scripts/install.sh`"

**③ 手动**

```bash
git clone https://github.com/InterpreterBarry/barry-english-toolkit.git
cd barry-english-toolkit
bash scripts/install.sh        # Windows: powershell -ExecutionPolicy Bypass -File scripts\install.ps1
```

---

## 装完怎么用

1. **重开 Claude Code**(完全退出再打开,让它识别新装的 Skill)
2. 新开一个 session,输入:
   ```
   开始
   ```
   AI 会带你走 30–55 分钟的 onboarding(基本情况 → 测评诊断 → 出方案 + 自动装专属每日训练 Skill + Quiz 网页)。
   > 没触发的话,直接用 `/barry-onboarding`。

之后:

- **每天训练**:新开 session → 输入 `每日训练`
- **随时问问题**:`/barry-coach`(英文表达 / 方法论 / 训练困惑都能问)
- **任务来了**(下周英文演讲 / 一段中文要翻译):`/barry-logic-to-speech`、`/barry-speech-training`、`/barry-translation-training`、`/barry-logic-training`
- **Quiz 词汇复习**:双击桌面 `Barry-Quiz.command`(Mac)/ `Barry-Quiz.bat`(Windows)
  - 💡 发音默认走 Google TTS(音质好),访问不了会自动 fallback 到系统 TTS

---

## 遇到问题

- 装完 Quiz 打不开 → 多半是漏装了 `quiz-web/` 子目录,重跑一遍 `scripts/install.sh` 即可(安装脚本用 `cp -R` 会带上所有子目录)
- 其他 bug / 建议 → 提 [GitHub Issue](https://github.com/InterpreterBarry/barry-english-toolkit/issues)

祝你练得开心 💪
