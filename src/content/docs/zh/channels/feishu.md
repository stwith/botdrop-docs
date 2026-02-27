---
title: 飞书
description: 将 BotDrop Agent 连接到飞书。
---

四步完成飞书连接：创建应用，在 BotDrop 中连接，设置事件回调，然后获取你的 User ID。

---

## 第一步：在飞书开放平台创建应用

### 打开开发者后台

打开[飞书开放平台](https://open.feishu.cn)，点击右上角"开发者后台"。

![开发者后台](/botdrop-docs/images/feishu/01-feishu-dev-console.png)

### 创建自建应用

点击"创建自建应用"。

![创建应用按钮](/botdrop-docs/images/feishu/02-create-app-button.png)

填写应用名称（比如 "BotDrop"）、描述，选个图标。

![创建应用表单](/botdrop-docs/images/feishu/03-create-app-form.png)

### 记录 App ID 和 App Secret

创建完成后，进入"凭证与基础信息"。**复制 App ID 和 App Secret。**

![应用凭证](/botdrop-docs/images/feishu/04-app-credentials.png)

### 添加机器人能力

进入"添加应用能力"，在"机器人"下点击"添加"。

![添加机器人](/botdrop-docs/images/feishu/05-add-bot-capability.png)

添加成功后，左侧栏出现"机器人"。

![机器人已添加](/botdrop-docs/images/feishu/06-bot-added.png)

### 配置权限

进入"权限管理"，点击"添加权限"。

![权限管理](/botdrop-docs/images/feishu/07-permission-management.png)

搜索 `im:`，开启所有 IM 相关权限。

![开启 IM 权限](/botdrop-docs/images/feishu/08-open-im-permissions.png)

**必选权限：**

| 权限 | 说明 |
|------|------|
| `contact:user.base:readonly` | 读取基本用户信息 |
| `im:message` | 收发消息 |
| `im:message.p2p_msg:readonly` | 读取私聊消息 |
| `im:message.group_at_msg:readonly` | 接收群 @ 消息 |
| `im:message:send_as_bot` | 以机器人身份发送消息 |
| `im:resource` | 上传/下载图片和文件 |

**可选（推荐）：**

| 权限 | 说明 |
|------|------|
| `im:message.group_msg` | 读取所有群消息 |
| `im:message:readonly` | 访问消息历史 |
| `im:message:update` | 编辑已发送消息 |
| `im:message:recall` | 撤回消息 |

保存权限。

<details>
<summary>📋 参考配置（点击展开）</summary>

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

![保存权限](/botdrop-docs/images/feishu/11-save-permissions.png)

### 创建版本并发布

点击顶部"创建版本"。

![创建版本](/botdrop-docs/images/feishu/09-create-version.png)

填写版本号和更新说明。

![版本详情](/botdrop-docs/images/feishu/10-version-details.png)

点击"申请线上发布"。

![申请发布](/botdrop-docs/images/feishu/12-publish-online.png)

### 在飞书客户端审批

打开飞书消息，找到审批通知，点击"通过"。

<img class="phone" src="/botdrop-docs/images/feishu/13-approve-in-feishu.png" alt="审批" />

审批通过后，状态显示绿色"已上线"。

![已发布](/botdrop-docs/images/feishu/14-published-success.png)

---

## 第二步：在 BotDrop 中连接

在 BotDrop 的频道设置中，选择 **FEISHU** 标签。

填入：
1. **App ID** — 第一步获取的
2. **App Secret** — 第一步获取的

**Feishu User ID** 先留空。

<img class="phone" src="/botdrop-docs/images/feishu/35-botdrop-feishu-empty.png" alt="BotDrop 飞书设置" />

点击 **CONNECT & START**。

---

## 第三步：设置事件回调

回到飞书开放平台的应用设置。

### 配置事件订阅

进入"事件与回调"，点击编辑。

![事件回调](/botdrop-docs/images/feishu/27-event-callback-edit.png)

选择"使用长连接接收事件"并保存。

![长连接](/botdrop-docs/images/feishu/28-long-connection.png)

### 添加消息接收事件

保存后，"添加事件"按钮变为可点击状态。

![添加事件](/botdrop-docs/images/feishu/29-add-event-enabled.png)

搜索"接收消息"，勾选 `im.message.receive_v1`，确认。

![添加接收消息事件](/botdrop-docs/images/feishu/30-add-receive-message.png)

### 添加通讯录权限

系统会提示需要通讯录权限。搜索 `contact:contact.base:readonly` 并开启。

![通讯录权限](/botdrop-docs/images/feishu/31-contact-permission.png)

### 重新发版

创建新版本（比如 1.0.1）并再次发布。

![重新发版](/botdrop-docs/images/feishu/32-republish-version.png)

---

## 第四步：获取你的 User ID

在飞书中搜索你的 Bot 名称，给它发一条消息。Bot 会回复你的 **Feishu User ID**。

![搜索 Bot](/botdrop-docs/images/feishu/33-search-bot-feishu.png)



<img class="phone" src="/botdrop-docs/images/feishu/37-feishu-userid-reply.png" alt="Bot 回复 User ID" />

复制 User ID，回到 BotDrop，粘贴到 **Feishu User ID** 输入框。

<img class="phone" src="/botdrop-docs/images/feishu/36-botdrop-feishu-filled.png" alt="BotDrop 飞书已填写" />

再次点击 **CONNECT & START**，搞定。

---

## 常见问题

| 问题 | 解决 |
|------|------|
| Bot 不回复 | 确认事件回调设为长连接，且已添加 `im.message.receive_v1` 事件 |
| 权限不足 | 确认所有 IM 权限已开启，改权限后需要重新发版 |
| 搜不到 Bot | 搜索创建应用时设置的完整名称 |
