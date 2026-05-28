<div align="center">

# Barry 职场英语工具箱 · Barry Workplace English Toolkit

**让 AI 当你的私人职场英语教练 —— 测水平、找卡点、出专属方案,每天 10 分钟练听说。**

**跑在 Claude Code、Codex 等任意能安装并读取 skill 的 AI Agent 工具里。**

*An AI workplace-English coach you run inside your AI agent — Claude Code, Codex, or any tool that can install and read skills. It assesses your level, finds your blockers, builds a plan tailored to you, then trains you 10 minutes a day.*

[安装 Install](#-安装--install) · [怎么用 Usage](#-怎么用--how-to-use) · [原理 How it works](#-原理--how-it-works) · [English](#-english)

</div>

---

## 这是什么

很多职场人英文「考试没问题,一开口开会就卡」。这套工具箱不教你背单词、刷题,而是把 Barry(同传出身)多年的英文沟通方法论,做成一组 **Agent Skill** —— 在 Claude Code、Codex 等任意能安装并读取 skill 的 AI Agent 工具里都能用:

1. 🩺 **AI 教练帮你诊断** —— 当前听说水平 + 具体卡在哪
2. 🎯 **出一个为你定制的方案** —— 不是网上 generic 那种
3. ⚙️ **自动给你装一个专属的「每日训练」Skill + 词汇 Quiz 网页**
4. 🏃 **之后每天 10–60 分钟**,跟 AI 完成训练,词汇自动沉淀、间隔重复复习

**适合**:已经工作、英文不太够用、想真正把职场听说提上来的中国职场人。

---

## ⚡ 安装 · Install

这套工具箱本质是一组**可移植的 Agent Skill**。现在推荐用标准 Skill 安装器安装：一行命令，同时安装到 Claude Code、Codex、Cursor 等支持的 Agent。

> 前置：需要 [Node.js](https://nodejs.org/) / npm，因为 `npx` 随 npm 提供。Quiz 词汇网页也需要 Node.js。

### 推荐安装方式

在终端 / PowerShell 粘贴：

```bash
npx -y skills add InterpreterBarry/barry-english-toolkit -g --all
```

`-g --all` 会把工具箱安装到已支持的全局 Agent skills 目录里。装完后**完全退出并重开你的 AI Agent**，然后输入：

```text
开始
```

### 备用安装方式

如果你暂时没有 Node.js / npm，或者只想先装到 Claude Code，可以继续用传统脚本：

**Mac / Linux / WSL**

```bash
curl -fsSL https://raw.githubusercontent.com/InterpreterBarry/barry-english-toolkit/main/scripts/bootstrap.sh | bash
```

**Windows(PowerShell)**

```powershell
irm https://raw.githubusercontent.com/InterpreterBarry/barry-english-toolkit/main/scripts/bootstrap.ps1 | iex
```

> 不想碰命令行？可以把这个仓库地址发给你的 AI Agent，让它先读 [`INSTALL_FOR_AI.md`](INSTALL_FOR_AI.md) 再安装。

## 🚀 怎么用 · How to use

| 场景 | 怎么做 |
|---|---|
| **第一次 / 情况大变化** | 新开 session → 输入 `开始`(或 `/barry-onboarding`)→ 跟 AI 走 30–55 分钟建档 + 测评 + 出方案 |
| **每天训练** | 新开 session → 输入 `每日训练` → 按你设的时长练(10–60 分钟) |
| **随时答疑** | `/barry-coach` —— 英文怎么说、某概念什么意思、这个怎么练,随时问 |
| **临时任务来了** | 下周英文演讲 → `/barry-speech-training`;一段中文要翻 → `/barry-translation-training`;想法要理清 → `/barry-logic-training`;一条龙出英文演讲稿 → `/barry-logic-to-speech` |
| **背单词** | 双击桌面 `Barry-Quiz.command`(Mac)/ `Barry-Quiz.bat`(Windows),浏览器打开 SM-2 间隔重复 Quiz |

> 不同 Agent 的 Skill 触发方式略有差异。Claude Code 通常可用 `/barry-xxx`;在 Codex / Cursor 等 Agent 里,按对应方式唤起同名 skill 即可。

跑完 onboarding 后,你的所有学习产物都在 `~/.barry-english/`:专属档案、词库、训练日志、Quiz 网页。

---

## 🧩 工具箱里有什么

**10 个随安装 Skill：9 个用户会直接用，另有 1 个 `barry-methodology` 资源包给 coach 读取 wiki。**

**用户会直接用的 Skill 分两类:**

**一、建档 + 答疑(日常主要用这 3 个)**

| Skill | 角色 |
|---|---|
| `barry-onboarding` | 统一入口:新人欢迎 + 串联建档三步;老人重测入口 |
| `barry-coach` | 常驻 Q&A 教练,RAG 读方法论 wiki 回答任何英文 / 方法论问题 |
| `barry-daily-<你的昵称>` | onboarding 后**自动生成**的专属每日训练 Skill |

> 其余 `barry-profile` / `barry-assessment` / `barry-solution` 由 onboarding 内部串联,你不用单独调。

**二、任务驱动训练(有具体任务时单独调)**

| Skill | 触发场景 |
|---|---|
| `barry-logic-training` | 用金字塔结构把一段想法理清楚 |
| `barry-speech-training` | 搭英文演讲框架 + 准备 Delivery |
| `barry-translation-training` | 一段中文练翻成地道英文(脱壳 / KISS / 文化适配) |
| `barry-logic-to-speech` | 一条龙:想法 → 逻辑 → 演讲结构 → 英文稿 |

**外加**：`barry-methodology` 内置 Barry 英文沟通方法论 wiki(100+ 页，`barry-coach` 用 RAG 实时读)+ SM-2 间隔重复词汇 Quiz 网页(三引擎 TTS)。

---

## 🛠 原理 · How it works

```
npx skills add ... -g --all
   └─→ 安装 skills/ 下的全部 Barry Skill
        ├─→ 9 个用户入口 Skill
        ├─→ barry-methodology 资源包(内置 100+ 页 methodology wiki)
        └─→ barry-solution/quiz-web/ 词汇 Quiz 网页源码

输入「开始」→ barry-onboarding 串联:
   profile(基本情况) → assessment(测水平 + 卡点) → solution(出方案)
                                                      └─→ 自动生成 barry-daily-<昵称> + Quiz 网页

每天「每日训练」→ barry-daily-<昵称> → 追加 training-log.md + fancy-vocab.md
Quiz 网页 → 读 fancy-vocab.md,SM-2 间隔重复复习
```

学员的所有产物都集中在 `~/.barry-english/`,跟 Skill 解耦,重装不丢数据。

## 系统要求

- **一个支持 Skill 的 AI Agent**(Claude Code / Codex / Cursor 等)
- **Node.js / npm**(`npx skills` 安装和 Quiz 网页都需要；没有 Node.js 时可用备用脚本先装 Claude Code 版)
- **操作系统**:Mac / Windows 完全等价;Linux / WSL 可手动启动 Quiz(`cd ~/.barry-english/quiz-web && node server.js`)

---

## 🤝 反馈 / 贡献 / License

- 🐛 Bug / 建议 → [GitHub Issues](https://github.com/InterpreterBarry/barry-english-toolkit/issues)
- 📐 学员档案 schema → [docs/学员档案-schema.md](docs/学员档案-schema.md)
- 📜 **License**:[CC BY-NC-ND 4.0](LICENSE) —— 方法论与全部内容版权归 Barry 所有。**可免费安装使用、原样转发(须署名 Barry),但禁止商业用途、禁止改编后再分发。** 请不要直接 PR 改 wiki 正文,先开 Issue 讨论。

---

<a name="-english"></a>

## 🌏 English

### What is this

Plenty of working professionals can pass English exams but freeze the moment a meeting starts. This toolkit doesn't drill flashcards — it turns Barry's communication methodology (he's a former simultaneous interpreter) into a set of portable **agent skills** that run in any AI agent which can install and read skills — Claude Code, Codex, and more:

1. 🩺 **An AI coach diagnoses** your current speaking/listening level and your specific blockers
2. 🎯 **Builds a plan tailored to you** — not generic internet advice
3. ⚙️ **Auto-installs a personal "daily training" Skill** + a vocabulary Quiz web app
4. 🏃 **10–60 min a day** with the AI; vocab is captured automatically and reviewed with spaced repetition

**For**: working professionals (originally Chinese-speaking) whose English isn't quite enough yet and who want to genuinely level up workplace listening & speaking.

### One-line install

Install with the standard Skills installer:

```bash
npx -y skills add InterpreterBarry/barry-english-toolkit -g --all
```

Then fully quit and reopen your AI agent so it picks up the new Skills, and type `开始` (or `/barry-onboarding`).

Fallback installers:

```bash
curl -fsSL https://raw.githubusercontent.com/InterpreterBarry/barry-english-toolkit/main/scripts/bootstrap.sh | bash
```

```powershell
irm https://raw.githubusercontent.com/InterpreterBarry/barry-english-toolkit/main/scripts/bootstrap.ps1 | iex
```

### Daily use

- **First time / big change** → type `开始` → 30–55 min guided onboarding (profile → assessment → plan)
- **Every day** → type `每日训练` → train for your chosen duration
- **Ask anything** → `/barry-coach`
- **Task-driven** → `/barry-speech-training`, `/barry-translation-training`, `/barry-logic-training`, `/barry-logic-to-speech`
- **Vocabulary** → double-click `Barry-Quiz.command` (Mac) / `Barry-Quiz.bat` (Windows)

All your learning artifacts live in `~/.barry-english/` — decoupled from the Skills, so reinstalling never loses your data.

### Feedback

Bugs & ideas → [GitHub Issues](https://github.com/InterpreterBarry/barry-english-toolkit/issues). Methodology authored by Barry; please open an issue before PRing wiki content.

**License**: [CC BY-NC-ND 4.0](LICENSE). Copyright © 2026 Barry. You may use, install, and share this toolkit **with attribution**, but **commercial use and derivative/modified redistribution are not permitted**.

---

<div align="center">
Made by <b>Barry</b> · 同传出身的职场英语博主
</div>
