---
title: Discord
description: 将 BotDrop Agent 连接到 Discord。
---

> 前提：你已经安装好 BotDrop，AI 模型也配好了。本文只讲怎么把 Discord 接进来。

两件事：在 Discord 开发者平台创建一个 Bot，然后在 BotDrop 里输入 Bot Token。

---

## 第一部分：创建 Discord Bot

### 1. 创建新应用

打开 [Discord 开发者平台](https://discord.com/developers/applications)，点击 **New Application**。

![New Application](/botdrop-docs/images/discord/01-new-application.png)

输入名称（比如 "BotDrop AI"），点击 **Create**。

![Create App Dialog](/botdrop-docs/images/discord/02-create-app-dialog.png)

### 2. 获取 Bot Token

左侧栏点击 **Bot**，点击 **Reset Token** 生成新 Token。**复制并保存这个 Token，后面在 BotDrop 里要用。**

![Reset Token](/botdrop-docs/images/discord/03-bot-reset-token.png)

:::caution
请妥善保管 Token，不要泄露或提交到公开仓库。
:::

### 3. 开启权限

下滑到 **Privileged Gateway Intents**，开启：

- **Message Content Intent**（必选，让 Bot 能读取消息内容）
- **Server Members Intent**（推荐，用于角色匹配）
- **Presence Intent**（可选，用于状态更新）

点击 **Save Changes** 保存。

![Privileged Intents](/botdrop-docs/images/discord/04-privileged-intents.png)

### 4. 配置 OAuth2 权限

左侧栏点击 **OAuth2**，下滑到 **OAuth2 URL Generator**。

**Scopes** 勾选：
- `bot`
- `applications.commands`

![OAuth2 Scopes](/botdrop-docs/images/discord/05-oauth2-scopes.png)

**Bot Permissions** 勾选：
- View Channels
- Send Messages
- Read Message History
- Embed Links
- Attach Files
- Add Reactions

![Bot Permissions](/botdrop-docs/images/discord/06-bot-permissions.png)

### 5. 邀请 Bot 到服务器

复制页面底部生成的 **Generated URL**，在浏览器中打开。

选择你要添加 Bot 的服务器，点击 **继续**。

![选择服务器](/botdrop-docs/images/discord/07-authorize-select-server.png)

确认权限，点击 **授权**。

![授权](/botdrop-docs/images/discord/08-authorize-permissions.png)

Bot 会出现在服务器的成员列表中。

![Bot 已加入](/botdrop-docs/images/discord/09-bot-joined.png)

---

## 第二部分：在 BotDrop 中配置

1. 在频道设置步骤中，选择 **Discord**
2. 粘贴之前复制的 Bot Token
3. 点击 **连接**

BotDrop 会启动网关并连接 Discord。Bot 应该会在服务器中上线。

### 首次消息和配对

在 Discord 中给 Bot 发消息（私信或在频道里 @它）。首次联系时，OpenClaw 会发送一个 **配对码**。在 BotDrop 中批准配对即可完成连接。

---

## 小贴士

- Bot 在被 `@botname` 提及或收到私信时会回复
- 可以通过 Discord 的频道权限限制 Bot 在哪些频道响应
- 如果 Bot 显示离线，检查 BotDrop 中的网关是否在运行

## 常见问题

| 问题 | 解决 |
|------|------|
| Bot 在 Discord 中离线 | 确认 BotDrop 中网关正在运行，检查 Token 是否正确 |
| Bot 不回复消息 | 确认开发者平台中已开启 **Message Content Intent** |
| "Invalid Token" 错误 | 在开发者平台重置 Token，重新输入到 BotDrop |
| Bot 看不到某个频道的消息 | 检查 Discord 服务器设置中 Bot 的频道权限 |
