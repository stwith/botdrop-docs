---
title: Setup
description: Configure your AI bot in BotDrop.
---

After granting permissions, BotDrop guides you through 4 steps.

## Step 1: Choose Your Agent

Select which bot framework to install. Tap **INSTALL** next to OpenClaw.

<img class="phone" src="/botdrop-docs/images/setup/01-choose-agent.png" alt="Choose agent" />

BotDrop will automatically set up the environment, verify Node.js, and install OpenClaw. This takes about 3–5 minutes. Please be patient.

<img class="phone" src="/botdrop-docs/images/setup/02-installing.png" alt="Installing" />

## Step 2: Choose Your AI Model

Select an AI provider and enter your API key.

<img class="phone" src="/botdrop-docs/images/setup/03-choose-model.png" alt="Choose model" />

Tap **SELECT**, search for your provider (e.g. OpenRouter), and enter your API key.

<img class="phone" src="/botdrop-docs/images/setup/04-api-key.png" alt="Enter API key" />

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

<img class="phone" src="/botdrop-docs/images/setup/05-channel-empty.png" alt="Telegram setup" />

Enter the required credentials and tap **CONNECT & START**.

<img class="phone" src="/botdrop-docs/images/setup/06-channel-filled.png" alt="Telegram filled" />

You can also tap **SKIP FOR NOW** and configure channels later.

## Step 4: Done

Once connected, the dashboard shows your gateway status. Green means running.

<img class="phone" src="/botdrop-docs/images/setup/07-dashboard.png" alt="Dashboard" />

From the dashboard you can:
- Start / Stop / Restart the gateway
- Change the AI model
- View logs
- Open the Web UI
