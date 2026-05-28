# Barry Workplace English Toolkit · 开发状态

> 内部状态表,给共建者 / 维护者看,不是面向学员。
> 学员视角的"快速开始"在主 [README.md](../README.md)。

---

## 组件版本

| 组件 | 状态 | 备注 |
|---|---|---|
| 学员档案 schema | v0.4 | 4 Section 框架定型;Section 2 增加"音标偏好"字段 |
| `barry-onboarding` SKILL.md | v0.1 | 统一入口,串联 profile → assessment → solution |
| `barry-profile` SKILL.md | v0.1 | Section 1 收集(基本情况) |
| `barry-assessment` SKILL.md | v0.5 | 5 步流程:标化考试问询 → 中翻英晋级制 → 听力 5 题阶梯 → 综合定级 → 写档案 |
| `barry-solution` SKILL.md | v0.3 | 5 步流程 + Node.js 检测 + Mac/Windows 双轨脚本 + Quiz Web 资源随 Skill ship + IPA 偏好 pre-check + 训练 Skill 模板 inline 5 个方法库(每个含完整评分模板) |
| Quiz Web (`skills/barry-solution/quiz-web/`) | v2.0 | 独立实现,定位:**每日训练词汇复习工具**;server.js + index.html;TTS 三引擎(Google 默认 / System / Browser fallback);findAvailablePort + `QUIZ_PORT` env override + `.quiz-port` 端口自适应;Daily 5 题(en2cn 4 选 1 + cn2en 字母格拼写)/ Sessions(flashcard 翻面)/ Free Study / My Reviews 4 视图;中英文界面 i18n(默认中文)|
| `barry-coach` SKILL.md | v0.1 | 常驻 Q&A 教练,RAG 模式读 `methodology/wiki/` 答方法论问题;4 类场景路由(英文表达 / 方法论 / 训练困惑 / 情况变化);Barry 风格;A 类答完追加 fancy-vocab;主题地图 + 4 个评估相关页关系图 |
| `barry-logic-training` SKILL.md | v0.1(2026-05-15 加入) | 任务驱动训练:逻辑思维独立训练,2 模式(探索 / 梳理),苏格拉底式追问。链 wiki `01-逻辑思维-想清楚/` |
| `barry-speech-training` SKILL.md | v0.1(2026-05-15 加入) | 任务驱动训练:公众演讲独立训练,2 模式(教练 / 快速),核心差异点=深度受众分析。链 wiki `03-公众演讲-说清楚/` |
| `barry-translation-training` SKILL.md | v0.1(2026-05-15 加入) | 任务驱动训练:翻译技巧独立训练,2 模式(教练 5 步 / 快速),脱壳深度按学员水平自适应。链 wiki `02-翻译能力/软实力/` |
| `barry-logic-to-speech` SKILL.md | v0.1(2026-05-15 加入) | 编排器,串联 barry-logic-training → barry-speech-training → barry-translation-training,一条龙产出英文演讲稿。两通道(标准 / 快速) |
| `methodology/` (toolkit 自带 wiki) | v1.0 | 108 页方法论 wiki 随 toolkit ship,从 Barry 私库 `方法论/wiki/` 单向 sync;含 sanitize 预检 |
| `scripts/sync-methodology.sh` | v0.2 | 单向 sync 脚本:私库 wiki → toolkit/methodology/。Layer 1 = Hard Blocker grep(18 个 pattern,含学员姓名 / 邮箱 / 凭证 / 内部路径)abort;Layer 2 = 自动 rewrite 内部 `raw/barry/<file>` / `raw/external/<file>` 引用为通用占位符 |
| `scripts/install.sh` + `install.ps1` | v0.2 | Mac/Linux/WSL + Windows 一键安装脚本:复制 9 SKILL 到 `~/.claude/skills/` + 复制 methodology wiki 到 `~/.barry-english/methodology/` + 验证 |
| `marketplace.json` (一行命令安装) | 待开发 | 学员 fallback 用 `cp -R skills/* ~/.claude/skills/` |
| Linux / WSL 启动脚本 (`Barry-Quiz.sh`) | 未支持 | 当前 README 已声明 Mac / Windows;Linux 学员可手动 `cd ~/.barry-english/quiz-web && node server.js` |

---

## 已知缺口(待办)

1. **GitHub 一行命令安装**:目前学员需手动跑 `./scripts/install.sh` / `.\scripts\install.ps1`,等 marketplace 上线后改成一行
2. **Linux/WSL 桌面快捷方式**:Mac/Windows 已有桌面双击启动(`Barry-Quiz.command` / `Barry-Quiz.bat`),Linux 学员当前需手动 `cd ~/.barry-english/quiz-web && node server.js`。后续可加 `Barry-Quiz.sh` 自动生成
3. **methodology wiki sync 自动化**:目前 Barry 改 wiki 后需手动跑 `scripts/sync-methodology.sh`,未来可加 file-watcher hook(私库 wiki 改动后自动 sync)
4. **Toolkit 仓库 clone 路径假设**:`barry-solution` Step 4 第 2 步 fallback `~/Desktop/Barry-English-Toolkit/`,学员 clone 到其他位置需要手动指定 `TOOLKIT_ROOT` 环境变量。学员直接用 `./scripts/install.sh` 走一键安装无此问题

---

## 数据流

```
barry-onboarding (orchestrator)
   ├─→ barry-profile     ── writes ── ~/.barry-english/profile.md  Section 1
   ├─→ barry-assessment  ── writes ── ~/.barry-english/profile.md  Section 2 + 3 (含"音标偏好")
   └─→ barry-solution    ── writes ── ~/.barry-english/profile.md  Section 4
                         ── installs ─ ~/.claude/skills/barry-daily-<slug>/SKILL.md
                         ── copies ── ~/.barry-english/quiz-web/  (从 ~/.claude/skills/barry-solution/quiz-web/)
                         ── creates ─ ~/Desktop/Barry-Quiz.command  (Mac)
                                      ~/Desktop/Barry-Quiz.bat       (Windows)

每日训练 (barry-daily-<slug>)
                         ── appends ── ~/.barry-english/training-log.md
                                       ~/.barry-english/fancy-vocab.md  (5 列含 IPA(<音标偏好>))

任务驱动训练(学员主动调用,4 个独立 SKILL)
   ├─→ barry-logic-training         独立逻辑梳理(探索 / 梳理 2 模式)
   ├─→ barry-speech-training        独立演讲准备(教练 / 快速 2 模式)
   ├─→ barry-translation-training   独立翻译训练(教练 5 步 / 快速 2 模式)
   └─→ barry-logic-to-speech        编排器,串联以上 3 个产出英文演讲稿
   (4 个都引用 ~/.barry-english/methodology/wiki/ 的对应板块作为理论锚)

Quiz Web (本地 server)
                         ── reads  ── ~/.barry-english/fancy-vocab.md
                         ── writes ── ~/.barry-english/.quiz-port           (实际监听端口)
```

---

## 方法论参考

工具箱设计基于 Barry 英文沟通方法论(MCES、Four Strands、Hearing vs Listening、被动 vs 主动词汇等)。

**2026-05-14 起 methodology wiki 完整 ship 进 toolkit**,在 `methodology/` 目录(108 页 / 8 个子目录 / 800K),`barry-coach` 通过 RAG 模式实时读取。Barry 私库 wiki 是 source of truth,toolkit 副本通过 `scripts/sync-methodology.sh` 单向同步(含 sanitize 预检)。
