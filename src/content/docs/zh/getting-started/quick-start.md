---
title: 快速开始
description: 安装 BotDrop，设置你的第一个 AI Agent。
sidebar:
  order: 2
---

四步在 Android 上运行你的 AI Agent。

## 1. 下载安装

从 [GitHub Releases](https://github.com/zhixianio/botdrop-android/releases) 下载最新 APK 并安装。

**要求：**
- Android 10+ (API level 29+)
- 至少 2GB 可用存储

## 2. 认证 — 添加 API Key

打开 BotDrop，输入你的 AI 供应商凭证。支持的供应商：

- Anthropic (Claude)
- OpenAI (GPT)
- Google Gemini
- OpenRouter
- 任何 OpenAI 兼容接口

## 3. Agent — 配置你的机器人

选择 Agent 的名称、模型和个性。BotDrop 会在后台自动安装 OpenClaw 和 Node.js。

## 4. 频道 — 连接通讯工具

将 Agent 连接到 Telegram 或 Discord，随时随地和它对话。

连接完成后，Agent 在后台运行并自动重启。搞定。

## 从源码构建

如果你想自己编译 APK：

```bash
git clone https://github.com/zhixianio/botdrop-android.git
cd botdrop-android
./gradlew assembleDebug
```

APK 在 `app/build/outputs/apk/debug/`。

**构建要求：** Android SDK (API 34+)、NDK r29+、JDK 17+。
