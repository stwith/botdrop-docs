---
title: 设置
description: 手机安装 OpenClaw 后的配置指南。4 步完成 AI Bot 部署。
---

手机安装 OpenClaw 后，BotDrop 引导你通过 4 步完成配置。

## 第一步：选择 Agent

选择要安装的 Bot 框架。点击 OpenClaw 旁边的 **INSTALL**。

<img class="phone" src="/images/setup/01-choose-agent.png" alt="选择 Agent" />

BotDrop 自动配置环境、验证 Node.js 并安装 OpenClaw，大约需要 3~5 分钟，请耐心等待。

<img class="phone" src="/images/setup/02-installing.png" alt="安装中" />

## 第二步：选择 AI 模型

选择 AI 供应商并输入 API Key。

<img class="phone" src="/images/setup/03-choose-model.png" alt="选择模型" />

点击 **SELECT**，搜索你的供应商（比如 OpenRouter），输入 API Key。

<img class="phone" src="/images/setup/04-api-key.png" alt="输入 API Key" />

支持的供应商：

- **Anthropic** — [console.anthropic.com](https://console.anthropic.com/)
- **OpenAI** — [platform.openai.com](https://platform.openai.com/)
- **Google Gemini** — [aistudio.google.com](https://aistudio.google.com/)
- **Kimi (月之暗面)** — [platform.moonshot.cn](https://platform.moonshot.cn/)
- **通义千问** — [dashscope.console.aliyun.com](https://dashscope.console.aliyun.com/)
- **MiniMax** — [platform.minimaxi.com](https://platform.minimaxi.com/)
- **DeepSeek** — [platform.deepseek.com](https://platform.deepseek.com/)
- **智谱 GLM** — [open.bigmodel.cn](https://open.bigmodel.cn/)
- **OpenRouter** — [openrouter.ai](https://openrouter.ai/)（一个 Key 访问 100+ 模型）
- **自定义接口** — 任何 OpenAI 兼容 API

## 第三步：连接聊天频道

选择一个聊天平台和你的 Bot 对话，可以连接一个或多个：

- [Telegram →](/zh/channels/telegram/)
- [Discord →](/zh/channels/discord/)
- [飞书 →](/zh/channels/feishu/)

<img class="phone" src="/images/setup/05-channel-empty.png" alt="Telegram 设置" />

输入所需凭证，点击 **CONNECT & START**。

<img class="phone" src="/images/setup/06-channel-filled.png" alt="Telegram 已填写" />

也可以点 **SKIP FOR NOW**，之后再配置频道。

## 第四步：完成

连接后，仪表盘显示网关状态。绿色表示运行中。

<img class="phone" src="/images/setup/07-dashboard.png" alt="仪表盘" />

在仪表盘中你可以：
- 启动 / 停止 / 重启网关
- 更换 AI 模型
- 查看日志
- 打开 Web UI
