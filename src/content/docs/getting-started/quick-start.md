---
title: Quick Start
description: Install BotDrop and set up your first AI agent.
sidebar:
  order: 2
---

Get your AI agent running on Android in 4 steps.

## 1. Download & Install

Download the latest APK from [GitHub Releases](https://github.com/zhixianio/botdrop-android/releases) and install it on your Android device.

**Requirements:**
- Android 10+ (API level 29+)
- At least 2GB free storage

## 2. Auth — Add Your API Key

Open BotDrop and enter your AI provider credentials. Supported providers:

- Anthropic (Claude)
- OpenAI (GPT)
- Google Gemini
- OpenRouter
- Any OpenAI-compatible endpoint

## 3. Agent — Configure Your Bot

Choose your agent's name, model, and personality. BotDrop will install OpenClaw and Node.js automatically in the background.

## 4. Channel — Connect a Messenger

Link your agent to Telegram or Discord so you can chat with it from anywhere.

Once connected, your agent runs in the background with auto-restart. You're done.

## Build from Source

If you prefer to build the APK yourself:

```bash
git clone https://github.com/zhixianio/botdrop-android.git
cd botdrop-android
./gradlew assembleDebug
```

The APK will be at `app/build/outputs/apk/debug/`.

**Build requirements:** Android SDK (API 34+), NDK r29+, JDK 17+.
