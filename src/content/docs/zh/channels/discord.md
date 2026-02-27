---
title: Discord
description: 将 BotDrop Agent 连接到 Discord。
---

三件事：创建 Discord Bot，邀请到服务器，然后在 BotDrop 里填入凭证。

---

## 第一步：创建 Bot 并获取 Token

### 创建新应用

打开 [Discord 开发者平台](https://discord.com/developers/applications)，点击 **New Application**。

![New Application](/botdrop-docs/images/discord/01-new-application.png)

输入名称（比如 "BotDrop AI"），点击 **Create**。

![Create App](/botdrop-docs/images/discord/02-create-app-dialog.png)

### 获取 Bot Token

左侧栏点击 **Bot**，点击 **Reset Token**。复制并保存 Token。

![Reset Token](/botdrop-docs/images/discord/03-bot-reset-token.png)

:::caution
请妥善保管 Token，不要泄露或提交到公开仓库。
:::

### 开启权限

下滑到 **Privileged Gateway Intents**，开启：

- **Message Content Intent**（必选）
- **Server Members Intent**（推荐）
- **Presence Intent**（可选）

点击 **Save Changes**。

![Privileged Intents](/botdrop-docs/images/discord/04-privileged-intents.png)

---

## 第二步：邀请 Bot 到服务器

### 生成邀请链接

左侧栏点击 **OAuth2**，下滑到 **OAuth2 URL Generator**。

**Scopes** 勾选 `bot` 和 `applications.commands`。

![OAuth2 Scopes](/botdrop-docs/images/discord/05-oauth2-scopes.png)

**Bot Permissions** 勾选：
- View Channels
- Send Messages
- Read Message History
- Embed Links
- Attach Files
- Add Reactions

![Bot Permissions](/botdrop-docs/images/discord/06-bot-permissions.png)

### 添加 Bot 到服务器

复制底部生成的 **Generated URL**，在浏览器打开，选择服务器并授权。

![选择服务器](/botdrop-docs/images/discord/07-authorize-select-server.png)

![授权](/botdrop-docs/images/discord/08-authorize-permissions.png)

---

## 第三步：获取 Guild ID 和 Channel ID

在 Discord 中开启**开发者模式**：
1. 打开 **用户设置**（头像旁齿轮图标）→ **高级** → 打开 **开发者模式**

然后：
- 右键点击**服务器图标** → **复制服务器 ID**（即 Guild ID）
- 右键点击目标**频道** → **复制频道 ID**（即 Channel ID）

:::tip
初次配置完成后，可以直接让 AI 帮你添加新的 Guild 或 Channel，无需再手动复制 ID。
:::

---

## 第四步：在 BotDrop 中配置

在 BotDrop 的 Discord 设置界面，填入：
1. **Bot Token** — 第一步获取的 Token
2. **Discord Guild ID** — 第三步的服务器 ID
3. **Discord Channel ID** — 第三步的频道 ID

<img class="phone" src="/botdrop-docs/images/discord/10-botdrop-discord-setup.jpg" alt="BotDrop Discord 设置" />

点击 **CONNECT & START**，搞定。

---

## 小贴士

- Bot 在配置的频道中响应
- 可以通过 Discord 频道权限控制 Bot 的访问
- 要添加更多频道，在 BotDrop 中更新配置

## 常见问题

| 问题 | 解决 |
|------|------|
| Bot 离线 | 确认 BotDrop 网关正在运行，检查 Token |
| Bot 不回复 | 确认开发者平台中已开启 **Message Content Intent** |
| "Invalid Token" 错误 | 重置 Token 并重新输入 |
| Bot 看不到频道 | 检查 Bot 在该频道是否有 View Channels 权限 |
