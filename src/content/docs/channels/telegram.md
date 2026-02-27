---
title: Telegram
description: Connect your BotDrop agent to Telegram.
---

> Prerequisite: You have BotDrop installed and your AI model configured. This guide only covers connecting Telegram.

Two things to do: create a Telegram bot via BotFather, then enter the token in BotDrop.

---

## Part 1: Create a Telegram Bot

### 1. Find BotFather

Open Telegram and search for `@BotFather`. Select the verified account.

![Search BotFather](/images/telegram/01-search-botfather.png)

### 2. Create a New Bot

Send `/newbot` to BotFather.

![/newbot command](/images/telegram/02-newbot-command.png)

Follow the prompts:
1. Enter a **display name** for your bot (e.g. "BotDrop AI")
2. Enter a **username** (must end with `_bot`, e.g. `my_botdrop_bot`)

BotFather will respond with your **bot token**. **Copy and save it — you'll need it in BotDrop.**

![Bot created with token](/images/telegram/03-set-bot-name.png)

:::caution
Keep your token safe. Don't share it or post it publicly.
:::

---

## Part 2: Configure in BotDrop

1. In the Channel setup step, select **Telegram**
2. Paste the bot token from BotFather
3. Tap **Connect**

BotDrop will start the gateway and connect to Telegram.

---

## Part 3: Start Chatting

### First Message & Pairing

Open the bot chat in Telegram (click the link BotFather gave you, or search for your bot's username). Tap **Start**.

The bot will send a **pairing code** on first contact. Approve it in BotDrop to complete the connection.

![Pairing code](/images/telegram/04-open-bot-chat.png)

Once paired, you can start chatting.

![Bot responding](/images/telegram/06-pairing-code.png)

---

## Group Chats

To use the bot in a group:

1. Add the bot to the group
2. Mention it with `@yourbotname` or set it as a group admin
3. The bot responds to messages that mention it

:::tip
To let the bot read all group messages (not just @mentions), send `/setprivacy` to BotFather and set it to **Disabled**.
:::

## Customization

You can customize your bot in BotFather:

| Command | What it does |
|---------|-------------|
| `/setuserpic` | Set the bot's profile picture |
| `/setdescription` | Set the short description shown in the bot's profile |
| `/setabouttext` | Set the "About" text |
| `/setcommands` | Define slash commands |

## Getting Your Telegram User ID

If BotDrop asks for your Telegram User ID during setup:

1. Search for `@userinfobot` in Telegram
2. Tap **Start**
3. It will reply with your User ID — copy and paste it into BotDrop

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Bot doesn't respond after /start | Check that the gateway is running in BotDrop. Verify the token is correct. |
| "Access not configured" message | You need to approve the pairing code in BotDrop. |
| Bot doesn't reply in groups | Check privacy mode: send `/setprivacy` to BotFather and set to Disabled. |
| Can't find the bot | Search by the exact username you set (with `_bot` suffix). |
