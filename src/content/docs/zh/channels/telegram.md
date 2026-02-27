---
title: Telegram
description: 将 BotDrop Agent 连接到 Telegram。
---

> 前提：你已经安装好 BotDrop，AI 模型也配好了。本文只讲怎么把 Telegram 接进来。

两件事：在 Telegram 里通过 BotFather 创建 Bot，然后在 BotDrop 里输入 Token。

---

## 第一部分：创建 Telegram Bot

### 1. 找到 BotFather

打开 Telegram，搜索 `@BotFather`，选择带蓝色认证标志的账号。

![搜索 BotFather](/images/telegram/01-search-botfather.png)

### 2. 创建新 Bot

给 BotFather 发送 `/newbot`。

![/newbot 命令](/images/telegram/02-newbot-command.png)

按提示操作：
1. 输入 Bot 的**显示名称**（比如 "BotDrop AI"）
2. 输入 Bot 的**用户名**（必须以 `_bot` 结尾，比如 `my_botdrop_bot`）

BotFather 会回复你的 **Bot Token**。**复制保存，后面在 BotDrop 里要用。**

![Bot 创建成功](/images/telegram/03-set-bot-name.png)

:::caution
请妥善保管 Token，不要泄露或公开发布。
:::

---

## 第二部分：在 BotDrop 中配置

1. 在频道设置步骤中，选择 **Telegram**
2. 粘贴 BotFather 给的 Bot Token
3. 点击 **连接**

BotDrop 会启动网关并连接 Telegram。

---

## 第三部分：开始聊天

### 首次消息和配对

在 Telegram 里打开 Bot 的对话（点 BotFather 给的链接，或搜索 Bot 用户名），点 **Start**。

首次联系时，Bot 会发送一个**配对码**。在 BotDrop 中批准配对即可完成连接。

![配对码](/images/telegram/04-open-bot-chat.png)

配对完成后就可以开始聊天了。

![Bot 回复](/images/telegram/06-pairing-code.png)

---

## 群聊

在群组中使用 Bot：

1. 把 Bot 添加到群组
2. 用 `@你的bot用户名` 提及它，或把它设为群管理员
3. Bot 会回复提及它的消息

:::tip
要让 Bot 读取群里的所有消息（不只是 @），给 BotFather 发 `/setprivacy`，设为 **Disabled**。
:::

## 自定义

在 BotFather 中自定义你的 Bot：

| 命令 | 作用 |
|------|------|
| `/setuserpic` | 设置头像 |
| `/setdescription` | 设置简介 |
| `/setabouttext` | 设置关于文本 |
| `/setcommands` | 定义斜杠命令 |

## 获取 Telegram User ID

如果 BotDrop 在设置时要求输入 Telegram User ID：

1. 在 Telegram 搜索 `@userinfobot`
2. 点 **Start**
3. 它会回复你的 User ID，复制粘贴到 BotDrop 即可

## 常见问题

| 问题 | 解决 |
|------|------|
| 点 /start 后 Bot 没反应 | 确认 BotDrop 中网关正在运行，检查 Token 是否正确 |
| 显示 "Access not configured" | 需要在 BotDrop 中批准配对码 |
| Bot 在群里不回复 | 检查隐私模式：给 BotFather 发 `/setprivacy`，设为 Disabled |
| 搜不到 Bot | 搜索你设置的完整用户名（带 `_bot` 后缀） |
