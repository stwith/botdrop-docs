---
title: Discord
description: Connect your BotDrop agent to Discord.
---

Four steps to connect Discord.

---

## Step 1: Create a Bot & Get Token

### Create a New Application

Go to the [Discord Developer Portal](https://discord.com/developers/applications) and click **New Application**.

![New Application](/botdrop-docs/images/discord/01-new-application.png)

Enter a name (e.g. "BotDrop AI") and click **Create**.

![Create App](/botdrop-docs/images/discord/02-create-app-dialog.png)

### Get the Bot Token

Click **Bot** in the left sidebar, then click **Reset Token**. Copy and save the token.

![Reset Token](/botdrop-docs/images/discord/03-bot-reset-token.png)

:::caution
Keep your token safe. Don't share it or commit it to public repos.
:::

### Enable Privileged Intents

Scroll down to **Privileged Gateway Intents** and enable:

- **Message Content Intent** (required)
- **Server Members Intent** (recommended)
- **Presence Intent** (optional)

Click **Save Changes**.

![Privileged Intents](/botdrop-docs/images/discord/04-privileged-intents.png)

---

## Step 2: Invite the Bot to Your Server

### Generate an Invite URL

Click **OAuth2** in the sidebar, scroll to **OAuth2 URL Generator**.

Under **Scopes**, check `bot` and `applications.commands`.

![OAuth2 Scopes](/botdrop-docs/images/discord/05-oauth2-scopes.png)

Under **Bot Permissions**, check:
- View Channels
- Send Messages
- Read Message History
- Embed Links
- Attach Files
- Add Reactions

![Bot Permissions](/botdrop-docs/images/discord/06-bot-permissions.png)

### Add Bot to Server

Copy the **Generated URL** at the bottom, open it in your browser, select your server, and authorize.

![Select Server](/botdrop-docs/images/discord/07-authorize-select-server.png)

![Authorize](/botdrop-docs/images/discord/08-authorize-permissions.png)

---

## Step 3: Get Guild ID and Channel ID

Enable **Developer Mode** in Discord:
1. Open **User Settings** (gear icon) → **Advanced** → toggle on **Developer Mode**

Then:
- Right-click your **server icon** → **Copy Server ID** (this is the Guild ID)
- Right-click the **channel** you want the bot in → **Copy Channel ID**

---

## Step 4: Configure in BotDrop

In BotDrop's Discord setup screen, fill in:
1. **Bot Token** — the token from Step 1
2. **Discord Guild ID** — the server ID from Step 3
3. **Discord Channel ID** — the channel ID from Step 3

<img class="phone" src="/botdrop-docs/images/discord/10-botdrop-discord-setup.jpg" alt="BotDrop Discord setup" />

Tap **CONNECT & START**. Done.

---

## Tips

- The bot responds in the configured channel
- You can restrict bot access using Discord's channel permissions
- To add the bot to more channels, update the config in BotDrop

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Bot is offline | Check that the gateway is running in BotDrop. Verify the token. |
| Bot doesn't respond | Verify **Message Content Intent** is enabled in the developer portal. |
| "Invalid Token" error | Reset the token and re-enter it in BotDrop. |
| Bot can't see the channel | Check that the bot has View Channels permission for that channel. |
