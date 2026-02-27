---
title: Feishu
description: Connect your BotDrop agent to Feishu (Lark).
---

## Create a Feishu Bot

1. Go to [Feishu Open Platform](https://open.feishu.cn/app)
2. Click **Create Custom App**
3. Fill in the app name and description
4. In **Credentials & Basic Info**, note down your **App ID** and **App Secret**

## Configure Permissions

Go to **Permissions & Scopes** and add:

- `im:message` — Send and receive messages
- `im:message.group_at_msg` — Receive group @ messages
- `im:resource` — Access message resources (images, files)

## Enable Bot Capability

1. Go to **Features** → **Bot**
2. Enable the bot capability
3. Configure the bot name and avatar

## Set Up Events

1. Go to **Events & Callbacks**
2. Add the event: `im.message.receive_v1` (Receive messages)
3. For the Request URL, you'll need a public endpoint. BotDrop handles this through its gateway.

## Configure in BotDrop

1. In the Channel step, select **Feishu**
2. Enter your **App ID** and **App Secret**
3. Tap **Connect**
4. BotDrop will provide a callback URL. Copy it back to the Feishu Open Platform's event subscription settings.

## Publish the App

1. Go to **Version Management & Release**
2. Create a new version
3. Submit for review (for organization-internal apps, this is usually instant)
4. Once approved, the bot is available in your Feishu workspace

## Tips

- Users can chat with the bot directly or @ it in group chats
- For organization-wide deployment, ask your Feishu admin to approve the app
- Feishu bots support rich content including cards, images, and interactive components
