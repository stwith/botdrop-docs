---
title: QQ 机器人
description: 将 BotDrop 连接到 QQ。
---

通过 QQ 机器人与你的 AI 助手对话。支持 Markdown、图片、语音、文件等多媒体消息，手机端 QQ、桌面端 QQ 均可使用。

---

## 第一步：扫码登录

访问 [QQ Bot 绑定页面](https://q.qq.com/qqbot/openclaw/login.html)，用手机 QQ 扫描页面右侧二维码登录。

<img class="phone" src="/images/qq/01-qqbot-landing.png" alt="QQ Bot 登录页" />

---

## 第二步：创建机器人

1. 登录后点击「创建机器人」
2. 为你的机器人命名（如：小助手）
3. 系统会生成 **App ID** 和 **App Secret**
4. 复制这两个值

<img class="phone" src="/images/qq/02-qqbot-create.png" alt="创建机器人" />

:::caution
App Secret 只显示一次，请妥善保存。如果丢失，需要重置。
:::

---

## 第三步：在 BotDrop 中配置

1. 打开 BotDrop App
2. 进入「连接 IM 频道」步骤（Step 3/4）
3. 选择「QQ」标签页
4. 填入刚才复制的 App ID 和 App Secret
5. 点击「连接并启动」

<img class="phone" src="/images/qq/04-botdrop-qq-setup.png" alt="BotDrop QQ 配置" />

---

## 第四步：扫码添加机器人

1. 回到 QQ Bot 网页
2. 在你的机器人卡片右侧点击「扫码聊天」
3. 用手机 QQ 扫描二维码
4. 添加机器人为好友，即可开始对话

<img class="phone" src="/images/qq/03-qqbot-qrcode.png" alt="扫码添加机器人" />

---

## 注意事项

- 机器人仅供创建人使用，暂不支持进入群聊
- 每个账号最多可创建 5 个机器人
- App Secret 出于安全考虑不支持明文保存，二次查看将会强制重置

## 常见问题

| 问题 | 解决方案 |
|------|---------|
| 连接失败 | 检查 App ID 和 App Secret 是否正确复制，确保没有多余空格 |
| 机器人不回复 | 确认 BotDrop 的 OpenClaw 服务正在运行（Dashboard 显示绿色状态） |
| 找不到机器人 | 使用网页上的二维码扫码添加 |
