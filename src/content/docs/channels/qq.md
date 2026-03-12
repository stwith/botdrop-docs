---
title: QQ Bot
description: Connect your BotDrop agent to QQ.
---

Connect your AI assistant to QQ for chatting. Supports Markdown, images, voice, files, and more. Works on both mobile and desktop QQ.

---

## Step 1: Login to QQ Bot Platform

Visit the [QQ Bot Setup Page](https://q.qq.com/qqbot/openclaw/login.html) and scan the QR code with your QQ app to login.

<img class="phone" src="/images/qq/01-qqbot-landing.png" alt="QQ Bot login page" />

---

## Step 2: Create a Bot

1. After login, click **Create Bot**
2. Give your bot a name (e.g. "My AI Assistant")
3. The system will generate an **App ID** and **App Secret**
4. Copy both values

<img class="phone" src="/images/qq/02-qqbot-create.png" alt="Create bot and get credentials" />

:::caution
The App Secret is only shown once. Save it securely. If you lose it, you'll need to reset it.
:::

---

## Step 3: Configure in BotDrop

1. Open BotDrop app
2. Go to **Connect IM Channel**
3. Select the **QQ** tab
4. Enter your App ID and App Secret
5. Tap **Connect & Start**

<img class="phone" src="/images/qq/04-botdrop-qq-setup.png" alt="BotDrop QQ setup" />

---

## Step 4: Add the Bot to QQ

1. Go back to the QQ Bot web page
2. Click **Scan to Chat** on your bot's card
3. Scan the QR code with your QQ app
4. Add the bot as a friend and start chatting

<img class="phone" src="/images/qq/03-qqbot-qrcode.png" alt="Scan to add bot" />

---

## Notes

- The bot is private to the creator. Group chat is not supported yet.
- Each account can create up to 5 bots.
- App Secret cannot be viewed again after creation. Reset it if lost.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Connection failed | Check that App ID and App Secret are correct. No extra spaces. |
| Bot doesn't respond | Make sure OpenClaw gateway is running (green status on Dashboard). |
| Can't find the bot | Use the QR code from the web page to add it. |
