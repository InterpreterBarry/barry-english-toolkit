---
name: barry-methodology
description: Barry 英文沟通方法论资源包。给 barry-coach、barry-logic-training、barry-speech-training、barry-translation-training、barry-logic-to-speech 提供随 npx skills 一起安装的 methodology wiki。一般不直接调用。
---

# Barry Methodology Resource Pack

这是资源型 Skill，不是训练入口。学员一般不直接调用它。

## 给其他 Barry Skill 的读取约定

其他 Barry Skill 需要读取方法论 wiki 时：

1. 定位本 Skill 的安装目录 `barry-methodology`。
   常见位置：
   - `~/.agents/skills/barry-methodology/methodology`
   - `~/.claude/skills/barry-methodology/methodology`
   - `~/.codex/skills/barry-methodology/methodology`
   - `~/.cursor/skills/barry-methodology/methodology`
   - 当前项目 `.agents/skills/barry-methodology/methodology`
   - 当前 Barry Skill 目录的 sibling：`../barry-methodology/methodology`
2. 找到第一个包含 `wiki/_index.json` 的目录，记为 `METHODOLOGY_ROOT`。
3. 读 `METHODOLOGY_ROOT/wiki/_index.json`，用里面的 `ID → 相对路径` 映射找到具体 wiki 页。
4. 如找不到本资源包，可 fallback 到旧安装脚本落地的 `~/.barry-english/methodology`。

## 内容

- `methodology/index.md`：方法论总目录
- `methodology/wiki/_index.json`：wiki ID 到相对路径的索引
- `methodology/wiki/`：Barry 英文沟通方法论原子概念页

回答学员时不要暴露内部文件路径；理解原文后用 Barry 风格表达。
