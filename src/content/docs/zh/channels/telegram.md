---
title: Telegram
description: 将 BotDrop Agent 连接到 Telegram。
---

两步完成 Telegram 连接：创建 Bot 获取 Token，然后通过 BotDrop Setup Bot 获取你的 User ID。

---

## 第一步：创建 Bot 并获取 Token

### 找到 BotFather

打开 Telegram，搜索 `@BotFather`，选择带蓝色认证标志的账号。

<img class="phone" src="/images/telegram/01-search-botfather.png" alt="搜索 BotFather" />

### 创建新 Bot

给 BotFather 发送 `/newbot`。

<img class="phone" src="/images/telegram/02-newbot-command.png" alt="/newbot 命令" />

按提示操作：
1. 输入 Bot 的**名称**（比如 "BotDrop AI"）
2. 输入 Bot 的**用户名**（必须以 `bot` 结尾，比如 `TetrisBot` 或 `tetris_bot`）

BotFather 会回复你的 **Bot Token**。复制它。

<img class="phone" src="/images/telegram/03-set-bot-name.png" alt="Bot 创建成功" />

:::caution
请妥善保管 Token，不要泄露或公开发布。
:::

将 Bot Token 粘贴到 BotDrop 的 **Bot Token** 输入框。

---

## 第二步：获取你的 User ID

在 BotDrop 的 Telegram 设置界面，点击 **OPEN @BOTDROPSETUPBOT**，会在 Telegram 中打开 BotDrop Setup Assistant。

给它发送 `/start`，它会回复你的 **User ID**。

<img class="phone" src="/images/telegram/04-setup-bot-userid.png" alt="Setup Bot User ID" />

点击 User ID 复制，然后粘贴到 BotDrop 的 **Your User ID** 输入框。

<img class="phone" src="/images/telegram/05-telegram-filled.png" alt="Telegram 配置已填写" />

点击 **CONNECT & START**，搞定。

---

## 群聊

在群组中使用 Bot：

1. 把 Bot 添加到群组
2. 用 `@你的bot用户名` 提及它，或把它设为群管理员

:::tip
要让 Bot 读取群里的所有消息（不只是 @），给 BotFather 发 `/setprivacy`，设为 **Disabled**。
:::

## 自定义

| 命令 | 作用 |
|------|------|
| `/setuserpic` | 设置头像 |
| `/setdescription` | 设置简介 |
| `/setabouttext` | 设置关于文本 |
| `/setcommands` | 定义斜杠命令 |

## 常见问题

| 问题 | 解决 |
|------|------|
| Bot 没反应 | 确认 BotDrop 中网关正在运行，检查 Token 是否正确 |
| Bot 在群里不回复 | 给 BotFather 发 `/setprivacy`，设为 Disabled |
| 搜不到 Bot | 搜索你设置的完整用户名（带 `_bot` 后缀） |
