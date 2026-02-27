---
title: Telegram
description: Connect your BotDrop agent to Telegram.
---

Two steps to connect Telegram: create a bot to get a token, then get your User ID from the BotDrop Setup Bot.

---

## Step 1: Create a Bot & Get Token

### Find BotFather

Open Telegram and search for `@BotFather`. Select the verified account.

<img class="phone" src="/images/telegram/01-search-botfather.png" alt="Search BotFather" />

### Create a New Bot

Send `/newbot` to BotFather.

<img class="phone" src="/images/telegram/02-newbot-command.png" alt="/newbot command" />

Follow the prompts:
1. Enter a **name** for your bot (e.g. "BotDrop AI")
2. Enter a **username** (must end with `bot`, e.g. `TetrisBot` or `tetris_bot`)

BotFather will respond with your **Bot Token**. Copy it.

<img class="phone" src="/images/telegram/03-set-bot-name.png" alt="Bot created with token" />

:::caution
Keep your token safe. Don't share it or post it publicly.
:::

Paste the Bot Token into the **Bot Token** field in BotDrop.

---

## Step 2: Get Your User ID

In BotDrop's Telegram setup screen, tap **OPEN @BOTDROPSETUPBOT**. This opens the BotDrop Setup Assistant in Telegram.

Send `/start` to the bot. It will reply with your **User ID**.

<img class="phone" src="/images/telegram/04-setup-bot-userid.png" alt="Setup Bot User ID" />

Tap the User ID to copy it, then paste it into the **Your User ID** field in BotDrop.

<img class="phone" src="/images/telegram/05-telegram-filled.png" alt="Telegram config filled" />

Tap **CONNECT & START**. Done.

---

## Group Chats

To use the bot in a group:

1. Add the bot to the group
2. Mention it with `@yourbotname` or set it as a group admin

:::tip
To let the bot read all group messages (not just @mentions), send `/setprivacy` to BotFather and set it to **Disabled**.
:::

## Customization

| Command | What it does |
|---------|-------------|
| `/setuserpic` | Set the bot's profile picture |
| `/setdescription` | Set the short description |
| `/setabouttext` | Set the "About" text |
| `/setcommands` | Define slash commands |

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Bot doesn't respond | Check that the gateway is running in BotDrop. Verify the token is correct. |
| Bot doesn't reply in groups | Send `/setprivacy` to BotFather and set to Disabled. |
| Can't find the bot | Search by the exact username you set (with `_bot` suffix). |
