---
title: Configuration
description: How to configure your BotDrop agent.
---

## API Provider Settings

In the Auth step, you configure your AI provider. You can change this anytime from the app settings.

### Anthropic

Enter your API key from [console.anthropic.com](https://console.anthropic.com/).

### OpenAI

Enter your API key from [platform.openai.com](https://platform.openai.com/).

### Google Gemini

Enter your API key from [aistudio.google.com](https://aistudio.google.com/).

### OpenRouter

Enter your API key from [openrouter.ai](https://openrouter.ai/). This gives you access to 100+ models through a single key.

### Custom Endpoint

For self-hosted or alternative providers, enter:
- Base URL (e.g. `http://localhost:11434/v1`)
- API key (if required)
- Model name

## Agent Settings

- **Name** — Your agent's display name
- **Model** — Which AI model to use
- **System Prompt** — Customize your agent's personality and behavior

## Channel Settings

### Telegram
You'll need a Telegram bot token from [@BotFather](https://t.me/BotFather).

### Discord
You'll need a Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications).

## Advanced

BotDrop stores its configuration in the Termux environment. For advanced users, you can access the OpenClaw config directly through the built-in terminal.
