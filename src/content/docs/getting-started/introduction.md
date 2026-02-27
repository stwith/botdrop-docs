---
title: Introduction
description: What is BotDrop and how it works.
---

BotDrop is an Android app that lets you run AI agents on your phone. It wraps [OpenClaw](https://github.com/nicepkg/openclaw) into a user-friendly interface with a guided 4-step setup.

## Why BotDrop?

Running AI agents typically requires a terminal, CLI tools, and server infrastructure. BotDrop eliminates all of that. Install the APK, walk through the setup wizard, and your agent is live.

## Key Features

- **Guided 4-step setup** — Auth → Agent → Install → Channel. No terminal needed.
- **Multi-provider support** — Anthropic, OpenAI, Google Gemini, OpenRouter, and more.
- **Telegram & Discord integration** — Chat with your agent through your favorite messenger.
- **Background gateway** — Keeps your agent running with auto-restart.
- **Built on Termux** — Full Linux environment on Android, running Node.js and OpenClaw under the hood.

## Architecture

```
┌──────────────────────────────────┐
│        BotDrop UI (Android)      │
├──────────────────────────────────┤
│      Termux Core (Linux env)     │
├──────────────────────────────────┤
│     OpenClaw + Node.js + npm     │
└──────────────────────────────────┘
```

## Next Steps

Head to the [Quick Start](/getting-started/quick-start/) to install BotDrop and set up your first agent.
