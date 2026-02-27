---
title: 简介
description: BotDrop 是什么，它如何工作。
---

BotDrop 是一个 Android 应用，让你在手机上运行 AI Agent。它将 [OpenClaw](https://github.com/nicepkg/openclaw) 包装成友好的界面，通过引导式四步设置即可完成配置。

## 为什么选 BotDrop？

运行 AI Agent 通常需要终端、CLI 工具和服务器。BotDrop 把这些全省了。安装 APK，走完设置向导，你的 Agent 就上线了。

## 核心特性

- **引导式四步设置** — 认证 → Agent → 安装 → 频道。不需要终端。
- **多供应商支持** — Anthropic、OpenAI、Google Gemini、OpenRouter 等。
- **Telegram & Discord 集成** — 通过你喜欢的通讯工具和 Agent 对话。
- **后台网关** — 保持 Agent 持续运行，自动重启。
- **基于 Termux** — 在 Android 上提供完整 Linux 环境，底层运行 Node.js 和 OpenClaw。

## 架构

```
┌──────────────────────────────────┐
│      BotDrop UI (Android)        │
├──────────────────────────────────┤
│    Termux Core (Linux 环境)       │
├──────────────────────────────────┤
│    OpenClaw + Node.js + npm      │
└──────────────────────────────────┘
```

## 下一步

前往 [快速开始](/zh/getting-started/quick-start/) 安装 BotDrop 并设置你的第一个 Agent。
