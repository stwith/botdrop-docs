---
title: Telegram
description: Connect your BotDrop agent to Telegram.
---

## Create a Telegram Bot

1. Open Telegram and search for [@BotFather](https://t.me/BotFather)
2. Send `/newbot`
3. Follow the prompts to set a name and username
4. BotFather will give you a **bot token** (looks like `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)
5. Copy this token

## Configure in BotDrop

1. In the Channel step, select **Telegram**
2. Paste your bot token
3. Tap **Connect**

Your bot is now live on Telegram. Send it a message to test.

## Group chats

To use your bot in a group:

1. Add the bot to the group
2. Either mention the bot with `@yourbotname` or set it as a group admin
3. The bot will respond to messages that mention it

## Tips

- You can customize the bot's profile picture and description in BotFather with `/setuserpic` and `/setdescription`
- To allow the bot to read all messages in a group (not just mentions), disable privacy mode with `/setprivacy` in BotFather
