# 从这里开始 · Barry 职场英语工具箱

> 欢迎!这是一套跑在 Claude Code / Codex / Cursor 等 AI Agent 里的职场英语训练工具箱。
> 装好之后,AI 教练帮你测水平、找卡点、出专属训练方案,之后每天 10–60 分钟跟 AI 练听说。
>
> 完整介绍看 [README.md](README.md)(中英双语)。这一页只讲「怎么最快装好用上」。

---

## 1 分钟装好

### 前置

- 一个支持 Skill 的 AI Agent：Claude Code / Codex / Cursor 等
- Node.js / npm：安装命令用 `npx`，Quiz 网页也需要 Node.js。没装先去 https://nodejs.org/

### 推荐装法

打开终端或 PowerShell，粘贴：

```bash
npx -y skills add InterpreterBarry/barry-english-toolkit -g --all
```

装完后，完全退出并重开你的 AI Agent，然后输入：

```text
开始
```

AI 会带你走 onboarding：基本情况 → 测评诊断 → 出方案 + 自动装专属每日训练 Skill + Quiz 网页。

### 备用装法

如果你暂时没有 Node.js / npm，或者只想先装 Claude Code 版：

```bash
curl -fsSL https://raw.githubusercontent.com/InterpreterBarry/barry-english-toolkit/main/scripts/bootstrap.sh | bash
```

Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/InterpreterBarry/barry-english-toolkit/main/scripts/bootstrap.ps1 | iex
```

也可以把这句话丢给你的 AI Agent：

> "帮我安装 github.com/InterpreterBarry/barry-english-toolkit 这个工具箱，先读 INSTALL_FOR_AI.md 再操作。"

---

## 装完怎么用

1. **重开 AI Agent**，让它识别新装的 Skill
2. 新开一个 session，输入：
   ```text
   开始
   ```
   没触发的话，直接用 `/barry-onboarding`。

之后：

- **每天训练**：新开 session → 输入 `每日训练`
- **随时问问题**：`/barry-coach`(英文表达 / 方法论 / 训练困惑都能问)
- **任务来了**：`/barry-logic-to-speech`、`/barry-speech-training`、`/barry-translation-training`、`/barry-logic-training`
- **Quiz 词汇复习**：双击桌面 `Barry-Quiz.command`(Mac)/ `Barry-Quiz.bat`(Windows)

---

## 遇到问题

- 装完没有看到 Skill → 完全退出并重开 AI Agent，再试一次
- Coach 找不到方法论 wiki → 重跑 `npx -y skills add InterpreterBarry/barry-english-toolkit -g --all`
- Quiz 打不开 → 确认 Node.js 已安装，然后重跑 `/barry-solution`
- 其他 bug / 建议 → 提 [GitHub Issue](https://github.com/InterpreterBarry/barry-english-toolkit/issues)
