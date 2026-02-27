---
title: 飞书
description: 将 BotDrop Agent 连接到飞书。
---

> 前提：你已经安装好 BotDrop，AI 模型也配好了。本文只讲怎么把飞书接进来。

两件事：飞书那边创建一个机器人应用，OpenClaw 这边装飞书插件并填入凭证。然后把事件回调打通，就能用了。

---

## 第一部分：飞书开放平台创建应用

### 1. 进入开发者后台

打开 [飞书开放平台](https://open.feishu.cn)，点击右上角「开发者后台」。

![进入开发者后台](/images/feishu/01-feishu-dev-console.png)

### 2. 创建企业自建应用

点击「创建企业自建应用」。

![创建应用](/images/feishu/02-create-app-button.png)

填写应用名称（比如 "BotDrop"）和描述，选个图标，点创建。

![填写应用信息](/images/feishu/03-create-app-form.png)

### 3. 记下 App ID 和 App Secret

创建完成后进入应用详情，在「凭证与基础信息」页面能看到 App ID 和 App Secret。**记下来，后面要用。**

![应用凭证](/images/feishu/04-app-credentials.png)

### 4. 添加机器人能力

进入「添加应用能力」，点击「机器人」下面的「添加」。

![添加机器人](/images/feishu/05-add-bot-capability.png)

添加成功后左侧菜单会多出「机器人」选项。

![机器人已添加](/images/feishu/06-bot-added.png)

### 5. 配置权限

进入「权限管理」，点击「开通权限」。

![权限管理](/images/feishu/07-permission-management.png)

搜索 `im:`，把即时通讯相关的权限全部勾选开通。

![开通 IM 权限](/images/feishu/08-open-im-permissions.png)

**必须开通的权限：**

| 权限 | 说明 |
|------|------|
| `contact:user.base:readonly` | 获取基础用户信息 |
| `im:message` | 收发消息 |
| `im:message.p2p_msg:readonly` | 读取私信 |
| `im:message.group_at_msg:readonly` | 接收群内 @消息 |
| `im:message:send_as_bot` | 以机器人身份发消息 |
| `im:resource` | 上传/下载图片文件 |

**可选权限（建议也开）：**

| 权限 | 说明 |
|------|------|
| `im:message.group_msg` | 读取群内所有消息 |
| `im:message:readonly` | 获取消息历史 |
| `im:message:update` | 编辑已发送消息 |
| `im:message:recall` | 撤回消息 |

保存权限申请。

![保存权限](/images/feishu/11-save-permissions.png)

### 6. 创建版本并发布

点击顶部「创建版本」。

![创建版本](/images/feishu/09-create-version.png)

填写版本号和更新说明。

![版本详情](/images/feishu/10-version-details.png)

点击「申请线上发布」。

![申请发布](/images/feishu/12-publish-online.png)

### 7. 在飞书客户端审批

打开飞书消息，找到审批通知，点「同意」。

![审批](/images/feishu/13-approve-in-feishu.png)

发布成功后会显示绿色「已发布」状态。

![发布成功](/images/feishu/14-published-success.png)

---

## 第二部分：OpenClaw 安装飞书插件并配置

### 1. 安装飞书插件

```bash
openclaw plugins install @m1heng-clawd/feishu
```

### 2. 运行配置向导

```bash
openclaw config
```

选择「Channels」。

![openclaw config](/images/feishu/15-openclaw-config.png)
![选择 Channels](/images/feishu/16-select-channels.png)

选择「Configure/link」来添加渠道。

![Configure/link](/images/feishu/17-configure-link.png)

选择「Feishu/Lark (飞书)」。

![选择飞书](/images/feishu/18-select-feishu.png)

### 3. 输入凭证

输入第一部分记下的 App ID 和 App Secret。

![输入凭证](/images/feishu/19-enter-credentials.png)

### 4. 选择域名

国内用户选「Feishu (feishu.cn)」。

![选择域名](/images/feishu/20-select-domain.png)

### 5. 群组聊天策略

选择「Open」，允许在群组中 @机器人使用。

![群组策略](/images/feishu/21-group-chat-policy.png)

### 6. 完成渠道配置

选择「Finished (Done)」。

![完成](/images/feishu/22-finished-channels.png)

### 7. 配置私信权限

选择「Yes」配置私信策略。

![DM Yes](/images/feishu/23-dm-access-yes.png)

选择「Open」允许私信。

![DM Open](/images/feishu/24-dm-open.png)

### 8. 完成所有配置

选择「Continue (Done)」。

![继续完成](/images/feishu/25-continue-done.png)

### 9. 重启服务

```bash
openclaw gateway restart
```

看到日志里出现飞书连接成功的信息，说明插件配好了。

![重启成功](/images/feishu/26-restart-feishu-ok.png)

---

## 第三部分：设置飞书事件回调

回到飞书开放平台的应用设置。

### 1. 配置事件订阅方式

进入「事件与回调」，点编辑订阅方式。

![事件回调](/images/feishu/27-event-callback-edit.png)

选择「使用长连接接收事件」，保存。

![长连接](/images/feishu/28-long-connection.png)

### 2. 添加消息接收事件

保存后「添加事件」按钮变为可点击。

![添加事件可用](/images/feishu/29-add-event-enabled.png)

搜索「接收消息」，勾选 `im.message.receive_v1`，确认添加。

![添加接收消息事件](/images/feishu/30-add-receive-message.png)

### 3. 补充通讯录权限

系统会提示需要通讯录基本信息权限，搜索 `contact:contact.base:readonly` 并开通。

![通讯录权限](/images/feishu/31-contact-permission.png)

### 4. 重新发布版本

创建新版本（比如 1.0.1），发布上线。流程和之前一样。

![重新发布](/images/feishu/32-republish-version.png)

---

## 大功告成

在飞书搜索你的机器人名称，就可以开始对话了。

![搜索机器人](/images/feishu/33-search-bot-feishu.png)

手机端也能用：

![手机聊天](/images/feishu/34-mobile-chat-demo.jpg)

---

## 常见问题

| 问题 | 解决 |
|------|------|
| 插件安装报 `spawn npm ENOENT` | Windows 平台已知问题，需要修改 OpenClaw 源码中 spawn 调用加 `shell: true`，或等官方修复 |
| 飞书机器人不回复 | 检查事件回调是否配了长连接 + `im.message.receive_v1` 事件 |
| 权限不足 | 确认 IM 相关权限都开了，且版本已重新发布 |
| Gateway 日志没有飞书连接 | `openclaw gateway restart` 后检查日志，确认 App ID/Secret 正确 |
