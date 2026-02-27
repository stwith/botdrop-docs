---
title: Discord
description: 将 BotDrop Agent 连接到 Discord。
---

## 创建 Discord Bot

1. 打开 [Discord 开发者门户](https://discord.com/developers/applications)
2. 点击 **New Application**，输入名称
3. 进入 **Bot** 标签页
4. 点击 **Reset Token**，复制 **Bot Token**
5. 在 **Privileged Gateway Intents** 下，开启：
   - **Message Content Intent**
   - **Server Members Intent**（可选，用于获取成员信息）

## 邀请 Bot 到服务器

1. 进入 **OAuth2** 标签页
2. 在 **OAuth2 URL Generator** 中，勾选 `bot` scope
3. 在 **Bot Permissions** 中，勾选：
   - Send Messages
   - Read Message History
   - Embed Links
   - Attach Files
   - Add Reactions
4. 复制生成的 URL，在浏览器中打开
5. 选择服务器并授权

## 在 BotDrop 中配置

1. 在频道步骤中，选择 **Discord**
2. 粘贴 Bot Token
3. 点击 **连接**

Bot 现在在你的 Discord 服务器上线了。

## 小贴士

- Bot 在被 `@botname` 提及时会回复
- 可以通过 Discord 的频道权限限制 Bot 在哪些频道中响应
- 用户可以从服务器成员列表直接给 Bot 发私信
