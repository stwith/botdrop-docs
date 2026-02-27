---
title: 配置
description: 如何配置你的 BotDrop Agent。
---

## API 供应商设置

在认证步骤中配置你的 AI 供应商。随时可以在应用设置中修改。

### Anthropic

在 [console.anthropic.com](https://console.anthropic.com/) 获取 API key。

### OpenAI

在 [platform.openai.com](https://platform.openai.com/) 获取 API key。

### Google Gemini

在 [aistudio.google.com](https://aistudio.google.com/) 获取 API key。

### OpenRouter

在 [openrouter.ai](https://openrouter.ai/) 获取 API key。一个 key 即可访问 100+ 模型。

### 自定义接口

自托管或其他供应商，输入：
- Base URL（如 `http://localhost:11434/v1`）
- API key（如需要）
- 模型名称

## Agent 设置

- **名称** — Agent 的显示名称
- **模型** — 使用哪个 AI 模型
- **系统提示词** — 自定义 Agent 的个性和行为

## 频道设置

### Telegram
需要从 [@BotFather](https://t.me/BotFather) 获取 Telegram bot token。

### Discord
需要从 [Discord 开发者门户](https://discord.com/developers/applications) 获取 Discord bot token。

## 高级

BotDrop 将配置存储在 Termux 环境中。高级用户可以通过内置终端直接访问 OpenClaw 配置。
