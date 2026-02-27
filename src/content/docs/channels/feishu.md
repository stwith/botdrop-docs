---
title: Feishu
description: Connect your BotDrop agent to Feishu (Lark).
---

> Prerequisite: You have BotDrop installed and your AI model configured. This guide only covers connecting Feishu.

Two things to do: create a bot app on Feishu, then configure the Feishu plugin in OpenClaw. Once the event callback is connected, you're good to go.

---

## Part 1: Create App on Feishu Open Platform

### 1. Open the Developer Console

Go to [Feishu Open Platform](https://open.feishu.cn) and click "Developer Console" in the top right.

![Developer Console](/images/feishu/01-feishu-dev-console.png)

### 2. Create a Custom App

Click "Create Custom App".

![Create App Button](/images/feishu/02-create-app-button.png)

Fill in the app name (e.g. "BotDrop"), description, and pick an icon.

![Create App Form](/images/feishu/03-create-app-form.png)

### 3. Note Your App ID and App Secret

After creation, go to "Credentials & Basic Info". **Copy the App ID and App Secret — you'll need them later.**

![App Credentials](/images/feishu/04-app-credentials.png)

### 4. Add Bot Capability

Go to "Add App Capability" and click "Add" under "Bot".

![Add Bot](/images/feishu/05-add-bot-capability.png)

Once added, "Bot" appears in the left sidebar.

![Bot Added](/images/feishu/06-bot-added.png)

### 5. Configure Permissions

Go to "Permissions Management" and click "Add Permissions".

![Permission Management](/images/feishu/07-permission-management.png)

Search for `im:` and enable all IM-related permissions.

![Open IM Permissions](/images/feishu/08-open-im-permissions.png)

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

![Save Permissions](/images/feishu/11-save-permissions.png)

### 6. Create Version and Publish

Click "Create Version" at the top.

![Create Version](/images/feishu/09-create-version.png)

Fill in version number and release notes.

![Version Details](/images/feishu/10-version-details.png)

Click "Request Online Release".

![Publish Online](/images/feishu/12-publish-online.png)

### 7. Approve in Feishu Client

Open Feishu messages, find the approval notification, and tap "Approve".

![Approve](/images/feishu/13-approve-in-feishu.png)

After approval, the status shows green "Published".

![Published](/images/feishu/14-published-success.png)

---

## Part 2: Install Feishu Plugin in OpenClaw

### 1. Install the Plugin

```bash
openclaw plugins install @m1heng-clawd/feishu
```

### 2. Run the Config Wizard

```bash
openclaw config
```

Select "Channels".

![openclaw config](/images/feishu/15-openclaw-config.png)
![Select Channels](/images/feishu/16-select-channels.png)

Select "Configure/link" to add a channel.

![Configure/link](/images/feishu/17-configure-link.png)

Select "Feishu/Lark".

![Select Feishu](/images/feishu/18-select-feishu.png)

### 3. Enter Credentials

Enter the App ID and App Secret you saved earlier.

![Enter Credentials](/images/feishu/19-enter-credentials.png)

### 4. Select Domain

For China mainland users, select "Feishu (feishu.cn)".

![Select Domain](/images/feishu/20-select-domain.png)

### 5. Group Chat Policy

Select "Open" to allow @ mentions in groups.

![Group Policy](/images/feishu/21-group-chat-policy.png)

### 6. Finish Channel Config

Select "Finished (Done)".

![Finished](/images/feishu/22-finished-channels.png)

### 7. Configure DM Permissions

Select "Yes" to configure DM policy.

![DM Yes](/images/feishu/23-dm-access-yes.png)

Select "Open" to allow DMs.

![DM Open](/images/feishu/24-dm-open.png)

### 8. Complete All Configuration

Select "Continue (Done)".

![Continue Done](/images/feishu/25-continue-done.png)

### 9. Restart the Service

```bash
openclaw gateway restart
```

Check the logs for a successful Feishu connection.

![Restart OK](/images/feishu/26-restart-feishu-ok.png)

---

## Part 3: Set Up Event Callback

Go back to your app settings on the Feishu Open Platform.

### 1. Configure Event Subscription

Go to "Events & Callbacks" and click edit.

![Event Callback](/images/feishu/27-event-callback-edit.png)

Select "Use Long Connection to Receive Events" and save.

![Long Connection](/images/feishu/28-long-connection.png)

### 2. Add Message Receive Event

After saving, the "Add Event" button becomes clickable.

![Add Event Enabled](/images/feishu/29-add-event-enabled.png)

Search for "Receive Message", check `im.message.receive_v1`, and confirm.

![Add Receive Message](/images/feishu/30-add-receive-message.png)

### 3. Add Contact Permission

The system will prompt for contact info permission. Search for `contact:contact.base:readonly` and enable it.

![Contact Permission](/images/feishu/31-contact-permission.png)

### 4. Republish

Create a new version (e.g. 1.0.1) and publish. Same process as before.

![Republish](/images/feishu/32-republish-version.png)

---

## Done!

Search for your bot name in Feishu and start chatting.

![Search Bot](/images/feishu/33-search-bot-feishu.png)

Works on mobile too:

![Mobile Chat](/images/feishu/34-mobile-chat-demo.jpg)

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Plugin install shows `spawn npm ENOENT` | Known Windows issue. Add `shell: true` to spawn calls in OpenClaw source, or wait for a fix. |
| Bot doesn't reply | Check that event callback is set to long connection + `im.message.receive_v1` event is added. |
| Permission denied | Make sure all IM permissions are enabled and a new version is published. |
| No Feishu connection in gateway logs | Run `openclaw gateway restart` and verify App ID/Secret are correct. |
