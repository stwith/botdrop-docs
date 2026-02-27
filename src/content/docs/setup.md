---
title: Setup
description: Configure your AI bot in BotDrop.
---

BotDrop guides you through 4 steps to get your bot running.

## Step 1: Auth

Enter your AI provider API key. Supported providers:

- **Anthropic** — Get your key at [console.anthropic.com](https://console.anthropic.com/)
- **OpenAI** — Get your key at [platform.openai.com](https://platform.openai.com/)
- **Google Gemini** — Get your key at [aistudio.google.com](https://aistudio.google.com/)
- **OpenRouter** — Get your key at [openrouter.ai](https://openrouter.ai/) (access 100+ models with one key)
- **Custom endpoint** — Any OpenAI-compatible API

## Step 2: Agent

Pick which bot framework to install. Currently OpenClaw is supported, with more coming soon.

## Step 3: Install

BotDrop will automatically download and set up the bot framework, Node.js, and all dependencies. This takes a few minutes on first run.

## Step 4: Channel

Connect a chat platform so you can talk to your bot. Pick one:

- [Telegram →](/channels/telegram/)
- [Discord →](/channels/discord/)
- [Feishu →](/channels/feishu/)

Once a channel is connected, your bot starts running. It stays alive in the background and auto-restarts if needed.
