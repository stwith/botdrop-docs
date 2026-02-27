---
title: Setup
description: Configure your AI bot in BotDrop.
---

After granting permissions, BotDrop guides you through 4 steps.

## Step 1: Choose Your Agent

Select which bot framework to install. Tap **INSTALL** next to OpenClaw.

![Choose agent](/botdrop-docs/images/setup/01-choose-agent.png)

BotDrop will automatically set up the environment, verify Node.js, and install OpenClaw. This takes about a minute.

![Installing](/botdrop-docs/images/setup/02-installing.png)

## Step 2: Choose Your AI Model

Select an AI provider and enter your API key.

![Choose model](/botdrop-docs/images/setup/03-choose-model.png)

Tap **SELECT**, search for your provider (e.g. OpenRouter), and enter your API key.

![Enter API key](/botdrop-docs/images/setup/04-api-key.png)

Supported providers:

- **Anthropic** — [console.anthropic.com](https://console.anthropic.com/)
- **OpenAI** — [platform.openai.com](https://platform.openai.com/)
- **Google Gemini** — [aistudio.google.com](https://aistudio.google.com/)
- **OpenRouter** — [openrouter.ai](https://openrouter.ai/) (100+ models with one key)
- **Custom endpoint** — Any OpenAI-compatible API

## Step 3: Connect a Channel

Pick a chat platform to talk to your bot. You can connect one or more:

- [Telegram →](/botdrop-docs/channels/telegram/)
- [Discord →](/botdrop-docs/channels/discord/)
- [Feishu →](/botdrop-docs/channels/feishu/)

![Telegram setup](/botdrop-docs/images/setup/05-channel-empty.png)

Enter the required credentials and tap **CONNECT & START**.

![Telegram filled](/botdrop-docs/images/setup/06-channel-filled.png)

You can also tap **SKIP FOR NOW** and configure channels later.

## Step 4: Done

Once connected, the dashboard shows your gateway status. Green means running.

![Dashboard](/botdrop-docs/images/setup/07-dashboard.png)

From the dashboard you can:
- Start / Stop / Restart the gateway
- Change the AI model
- View logs
- Open the Web UI
