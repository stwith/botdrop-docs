---
title: Feishu
description: Connect your BotDrop agent to Feishu (Lark).
---

Four steps to connect Feishu: create an app, connect in BotDrop, set up event subscription, then get your User ID.

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

<details>
<summary>📋 Reference configuration (click to expand)</summary>

```json
{
  "scopes": {
    "tenant": [
      "aily:file:read",
      "aily:file:write",
      "application:application.app_message_stats.overview:readonly",
      "application:bot.menu:write",
      "application:application:self_manage",
      "base:app:copy",
      "base:app:create",
      "base:app:read",
      "base:app:update",
      "base:collaborator:create",
      "base:collaborator:delete",
      "base:collaborator:read",
      "base:dashboard:copy",
      "base:dashboard:read",
      "base:field:create",
      "base:field:delete",
      "base:field:read",
      "base:field:update",
      "base:form:read",
      "base:form:update",
      "base:record:create",
      "base:record:delete",
      "base:record:read",
      "base:record:retrieve",
      "base:record:update",
      "base:role:create",
      "base:role:delete",
      "base:role:read",
      "base:role:update",
      "base:table:create",
      "base:table:delete",
      "base:table:read",
      "base:table:update",
      "base:view:read",
      "base:view:write_only",
      "base:workflow:read",
      "base:workflow:write",
      "cardkit:card:write",
      "contact:user.base:readonly",
      "contact:user.employee_id:readonly",
      "corehr:file:download",
      "docs:doc",
      "docs:document.content:read",
      "drive:drive",
      "event:ip_list",
      "im:chat",
      "im:chat.access_event.bot_p2p_chat:read",
      "im:chat.members:bot_access",
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.group_msg",
      "im:message.p2p_msg:readonly",
      "im:message:readonly",
      "im:message:send_as_bot",
      "im:resource",
      "sheets:spreadsheet",
      "wiki:wiki",
      "wiki:wiki:readonly"
    ],
    "user": [
      "aily:file:read",
      "aily:file:write",
      "contact:contact.base:readonly",
      "im:chat.access_event.bot_p2p_chat:read"
    ]
  }
}
```

</details>

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

<img class="phone" src="/botdrop-docs/images/feishu/13-approve-in-feishu.png" alt="Approve" />

After approval, the status shows green "Published".

![Published](/botdrop-docs/images/feishu/14-published-success.png)

---

## Step 2: Connect in BotDrop

In BotDrop, go to the **Feishu** tab under "Connect IM Channels".

Fill in:
1. **App ID** — from Step 1
2. **App Secret** — from Step 1

Leave the **Feishu User ID** field empty for now.

<img class="phone" src="/botdrop-docs/images/feishu/35-botdrop-feishu-empty.png" alt="BotDrop Feishu setup" />

Tap **CONNECT & START**.

---

## Step 3: Set Up Event Subscription

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

![Search Bot](/botdrop-docs/images/feishu/33-search-bot-feishu.png)



<img class="phone" src="/botdrop-docs/images/feishu/37-feishu-userid-reply.png" alt="Bot replies with User ID" />

Copy the User ID, go back to BotDrop, and paste it into the **Feishu User ID** field.

<img class="phone" src="/botdrop-docs/images/feishu/36-botdrop-feishu-filled.png" alt="BotDrop Feishu filled" />

Tap **CONNECT & START** again. Done.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Bot doesn't reply | Check that event subscription uses long connection and `im.message.receive_v1` event is added. |
| Permission denied | Make sure all IM permissions are enabled and a new version is published after changes. |
| Can't find the bot | Search by the exact bot name you set when creating the app. |
