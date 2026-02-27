---
title: Discord
description: Connect your BotDrop agent to Discord.
---

## Create a Discord Bot

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **New Application**, give it a name
3. Go to the **Bot** tab
4. Click **Reset Token** and copy the **bot token**
5. Under **Privileged Gateway Intents**, enable:
   - **Message Content Intent**
   - **Server Members Intent** (optional, for member info)

## Invite the Bot to Your Server

1. Go to the **OAuth2** tab
2. Under **OAuth2 URL Generator**, select the `bot` scope
3. Under **Bot Permissions**, select:
   - Send Messages
   - Read Message History
   - Embed Links
   - Attach Files
   - Add Reactions
4. Copy the generated URL and open it in your browser
5. Select your server and authorize

## Configure in BotDrop

1. In the Channel step, select **Discord**
2. Paste your bot token
3. Tap **Connect**

Your bot is now online in your Discord server.

## Tips

- The bot responds when mentioned with `@botname`
- You can restrict the bot to specific channels using Discord's channel permissions
- For DMs, users can message the bot directly from the server member list
