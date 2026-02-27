---
title: Discord
description: Connect your BotDrop agent to Discord.
---

> Prerequisite: You have BotDrop installed and your AI model configured. This guide only covers connecting Discord.

Two things to do: create a Discord bot on the developer portal, then enter the bot token in BotDrop.

---

## Part 1: Create a Discord Bot

### 1. Create a New Application

Go to the [Discord Developer Portal](https://discord.com/developers/applications) and click **New Application**.

![New Application](/botdrop-docs/images/discord/01-new-application.png)

Enter a name for your bot (e.g. "BotDrop AI") and click **Create**.

![Create App Dialog](/botdrop-docs/images/discord/02-create-app-dialog.png)

### 2. Get the Bot Token

In the left sidebar, click **Bot**, then click **Reset Token** to generate a new token. **Copy and save this token — you'll need it in BotDrop.**

![Reset Token](/botdrop-docs/images/discord/03-bot-reset-token.png)

:::caution
Keep your token safe. Don't share it or commit it to public repos.
:::

### 3. Enable Privileged Intents

Scroll down to **Privileged Gateway Intents** and enable:

- **Message Content Intent** (required, lets the bot read messages)
- **Server Members Intent** (recommended, for role-based access)
- **Presence Intent** (optional, for status updates)

Click **Save Changes**.

![Privileged Intents](/botdrop-docs/images/discord/04-privileged-intents.png)

### 4. Configure OAuth2 Permissions

In the left sidebar, click **OAuth2**, then scroll to **OAuth2 URL Generator**.

Under **Scopes**, check:
- `bot`
- `applications.commands`

![OAuth2 Scopes](/botdrop-docs/images/discord/05-oauth2-scopes.png)

Under **Bot Permissions**, check:
- View Channels
- Send Messages
- Read Message History
- Embed Links
- Attach Files
- Add Reactions

![Bot Permissions](/botdrop-docs/images/discord/06-bot-permissions.png)

### 5. Invite the Bot to Your Server

Copy the **Generated URL** at the bottom of the page and open it in your browser.

Select the server you want to add the bot to and click **Continue**.

![Select Server](/botdrop-docs/images/discord/07-authorize-select-server.png)

Review the permissions and click **Authorize**.

![Authorize](/botdrop-docs/images/discord/08-authorize-permissions.png)

The bot will appear in your server's member list.

![Bot Joined](/botdrop-docs/images/discord/09-bot-joined.png)

---

## Part 2: Configure in BotDrop

1. In the Channel setup step, select **Discord**
2. Paste the bot token you copied earlier
3. Tap **Connect**

BotDrop will start the gateway and connect to Discord. Your bot should come online in the server.

### First Message & Pairing

Send a message to the bot in Discord (via DM or by @mentioning it in a channel). On first contact, OpenClaw will send a **pairing code**. Approve it in BotDrop to complete the connection.

---

## Tips

- The bot responds when mentioned with `@botname` or via DM
- You can restrict the bot to specific channels using Discord's channel permissions
- If the bot shows as offline, check that the gateway is running in BotDrop

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Bot is offline in Discord | Make sure the gateway is running in BotDrop. Check that the token is correct. |
| Bot doesn't respond to messages | Verify that **Message Content Intent** is enabled in the developer portal. |
| "Invalid Token" error | Reset the token in the developer portal and re-enter it in BotDrop. |
| Bot can't see messages in a channel | Check the bot's channel permissions in Discord server settings. |
