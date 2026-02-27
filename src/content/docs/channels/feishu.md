---
title: Feishu
description: Connect your BotDrop agent to Feishu (Lark).
---

Three things to do: create a bot app on Feishu Open Platform, connect it in BotDrop, then set up the event callback.

---

## Step 1: Create App on Feishu Open Platform

### Open the Developer Console

Go to [Feishu Open Platform](https://open.feishu.cn) and click "Developer Console" in the top right.

![Developer Console](/botdrop-docs/images/feishu/01-feishu-dev-console.png)

### Create a Custom App

Click "Create Custom App".

![Create App Button](/botdrop-docs/images/feishu/02-create-app-button.png)

Fill in the app name (e.g. "BotDrop"), description, and pick an icon.

![Create App Form](/botdrop-docs/images/feishu/03-create-app-form.png)

### Note Your App ID and App Secret

After creation, go to "Credentials & Basic Info". **Copy the App ID and App Secret.**

![App Credentials](/botdrop-docs/images/feishu/04-app-credentials.png)

### Add Bot Capability

Go to "Add App Capability" and click "Add" under "Bot".

![Add Bot](/botdrop-docs/images/feishu/05-add-bot-capability.png)

Once added, "Bot" appears in the left sidebar.

![Bot Added](/botdrop-docs/images/feishu/06-bot-added.png)

### Configure Permissions

Go to "Permissions Management" and click "Add Permissions".

![Permission Management](/botdrop-docs/images/feishu/07-permission-management.png)

Search for `im:` and enable all IM-related permissions.

![Open IM Permissions](/botdrop-docs/images/feishu/08-open-im-permissions.png)

**Required permissions:**

| Permission | Description |
|------------|-------------|
| `contact:user.base:readonly` | Read basic user info |
| `im:message` | Send and receive messages |
| `im:message.p2p_msg:readonly` | Read direct messages |
| `im:message.group_at_msg:readonly` | Receive group @ messages |
| `im:message:send_as_bot` | Send messages as bot |
| `im:resource` | Upload/download images and files |

**Optional (recommended):**

| Permission | Description |
|------------|-------------|
| `im:message.group_msg` | Read all group messages |
| `im:message:readonly` | Access message history |
| `im:message:update` | Edit sent messages |
| `im:message:recall` | Recall messages |

Save permissions.

![Save Permissions](/botdrop-docs/images/feishu/11-save-permissions.png)

### Create Version and Publish

Click "Create Version" at the top.

![Create Version](/botdrop-docs/images/feishu/09-create-version.png)

Fill in version number and release notes.

![Version Details](/botdrop-docs/images/feishu/10-version-details.png)

Click "Request Online Release".

![Publish Online](/botdrop-docs/images/feishu/12-publish-online.png)

### Approve in Feishu Client

Open Feishu messages, find the approval notification, and tap "Approve".

![Approve](/botdrop-docs/images/feishu/13-approve-in-feishu.png)

After approval, the status shows green "Published".

![Published](/botdrop-docs/images/feishu/14-published-success.png)

---

## Step 2: Connect in BotDrop

In BotDrop, go to the **Feishu** tab under "Connect IM Channels".

Fill in:
1. **App ID** — from Step 1
2. **App Secret** — from Step 1

Leave the **Feishu User ID** field empty for now.

![BotDrop Feishu setup](/botdrop-docs/images/feishu/35-botdrop-feishu-empty.png)

Tap **CONNECT & START**.

---

## Step 3: Set Up Event Callback

Go back to your app settings on the Feishu Open Platform.

### Configure Event Subscription

Go to "Events & Callbacks" and click edit.

![Event Callback](/botdrop-docs/images/feishu/27-event-callback-edit.png)

Select "Use Long Connection to Receive Events" and save.

![Long Connection](/botdrop-docs/images/feishu/28-long-connection.png)

### Add Message Receive Event

After saving, the "Add Event" button becomes clickable.

![Add Event Enabled](/botdrop-docs/images/feishu/29-add-event-enabled.png)

Search for "Receive Message", check `im.message.receive_v1`, and confirm.

![Add Receive Message](/botdrop-docs/images/feishu/30-add-receive-message.png)

### Add Contact Permission

The system will prompt for contact info permission. Search for `contact:contact.base:readonly` and enable it.

![Contact Permission](/botdrop-docs/images/feishu/31-contact-permission.png)

### Republish

Create a new version (e.g. 1.0.1) and publish again.

![Republish](/botdrop-docs/images/feishu/32-republish-version.png)

---

## Step 4: Get Your User ID

Search for your bot name in Feishu and send it a message. The bot will reply with your **Feishu User ID**.

![Bot replies with User ID](/botdrop-docs/images/feishu/37-feishu-userid-reply.png)

![Search Bot](/botdrop-docs/images/feishu/33-search-bot-feishu.png)

Copy the User ID, go back to BotDrop, and paste it into the **Feishu User ID** field.

![BotDrop Feishu filled](/botdrop-docs/images/feishu/36-botdrop-feishu-filled.png)

Tap **CONNECT & START** again. Done.

---

## Tips

Works on mobile too:

![Mobile Chat](/botdrop-docs/images/feishu/34-mobile-chat-demo.jpg)

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Bot doesn't reply | Check that event callback is set to long connection and `im.message.receive_v1` event is added. |
| Permission denied | Make sure all IM permissions are enabled and a new version is published after changes. |
| Can't find the bot | Search by the exact bot name you set when creating the app. |
