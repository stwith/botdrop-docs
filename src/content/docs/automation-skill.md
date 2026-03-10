---
title: Automation Skill
description: Use Python uiautomator2 to automate mobile UI operations with your AI bot.
---

:::caution[Experimental Feature]
Automation is an **exploratory feature**. You may encounter various issues:
- Unstable execution, sometimes fails
- The bot may act "dumb", tapping wrong spots or misunderstanding instructions
- Compatibility varies across different apps

**Recommendations:**
- Use smarter models (like Claude Sonnet/Opus, Codex-5.3) for better success rates
- Create custom Skills for frequently used workflows, so the bot follows fixed steps instead of improvising each time
:::

Once you've [enabled automation](/automation/), your AI bot gains the ability to control your phone's UI using Python and uiautomator2. This page explains how to use this skill.

## What It Does

The automation skill allows your bot to:
- Open and navigate apps
- Tap buttons and menu items
- Input text (including Chinese/CJK)
- Read screen content
- Perform complex multi-step workflows

## Prerequisites

Before using automation commands, ensure:

1. **Shizuku is running**
2. **u2 service is running**

## Basic Usage

:::tip[First Time Use]
Your bot needs to learn about its capabilities before it can perform automation. For first time use, tell it: "Read the botdrop-automation skill". The bot will read the skill documentation and understand how to use it.
:::

Simply tell your bot what you want to do on your phone. For example:

- "Open WeChat and send 'Hello' to John"
- "Take a screenshot of my current screen"
- "Open Settings and check my battery status"
- "Post a photo to Instagram with caption 'Beautiful sunset'"

The bot will break down complex tasks into step-by-step actions, observing the screen after each step.

## How It Works

The automation follows an **observe → act → observe** pattern:

1. **Observe**: Read current screen state (which app, what's visible)
2. **Act**: Perform one action (tap, type, swipe)
3. **Observe**: Check the result before next action

This step-by-step approach ensures reliability, especially for dynamic app UIs.

## Supported Operations

### Navigation
- Open apps by name
- Tap buttons, menu items, icons
- Swipe and scroll
- Press back/home buttons

### Text Input
- Type in search boxes, chat inputs, forms
- Supports Chinese and other languages via FastInputIME
- Clear and replace text

### Reading Screen
- Get current app and activity
- Check if elements exist
- Read text content from screen

## Examples

### Open an App
```
"Open Twitter"
```
The bot will find and launch the Twitter app.

### Send a Message
```
"Open WhatsApp, find the chat with Mom, and send 'I'll be home for dinner'"
```
The bot will:
1. Open WhatsApp
2. Search for Mom's chat
3. Tap to open the conversation
4. Type the message
5. Tap send

:::note
Messaging app automation is still experimental. Results may vary depending on the app. Feedback welcome!
:::

### Check Information
```
"Open Settings and tell me my phone's Android version"
```
The bot will navigate to About Phone and read the version info.

## Tips for Best Results

### Be Specific
Instead of "post something on social media", say "open Instagram, create a new post with the most recent photo, and add the caption 'Sunday vibes'".

### Allow Time
Complex flows take time. The bot waits for screens to load and verifies each step.

### Handle Errors Gracefully
If something goes wrong, the bot will try to recover or ask for guidance.

## Limitations

- **No password entry**: For security, avoid asking the bot to enter passwords
- **App-specific quirks**: Some apps have custom UIs that may need special handling
- **Network-dependent**: App actions require working internet connection
- **Screen must be on**: Automation requires an active display

## Troubleshooting

### "u2 service not running"
Go to Automation Panel and tap "Start u2 Service".

### Actions don't seem to work
- Make sure the target app is fully loaded
- Try being more specific about what to tap
- Check if the app needs to be updated

### Text input fails
- The bot will automatically try different input methods
- For Chinese text, FastInputIME is used for reliability

### Bot seems stuck
- Say "stop" or "cancel" to interrupt
- Check if the app is showing a popup or dialog
