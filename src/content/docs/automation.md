---
title: Automation
description: Enable automation features in BotDrop using Shizuku and u2 service.
---

BotDrop's automation features require **Shizuku** (for system-level permissions) and **u2 service** (for UI automation). This guide walks you through enabling them without a computer.

:::note[Requirements]
- Android 11 or higher (for wireless debugging)
- BotDrop installed and gateway running
:::

## Step 1: Open Automation Panel

From the BotDrop dashboard, tap the **Automation** button.

<img class="phone" src="/images/automation/01-dashboard-automation.png" alt="Dashboard with Automation button" />

You'll see the Automation Panel with Shizuku and u2 Service status.

<img class="phone" src="/images/automation/02-automation-panel.png" alt="Automation Panel" />

## Step 2: Set Up Shizuku

If Shizuku shows "not running", tap **Open Shizuku Home** to enter the Shizuku configuration page.

<img class="phone" src="/images/automation/03-shizuku-home.png" alt="Shizuku home" />

### Enable Developer Options (if not enabled)

If Developer Options aren't enabled on your device yet:

1. Go to **Settings → About phone**
2. Find **Build number** (or MIUI version, Software version, etc.)
3. **Tap it 7 times** until you see "You are now a developer"
4. Go back to **Settings → System** (or "Additional settings"), find **Developer options**
5. Enable **USB debugging**
6. Enable **Wireless debugging** (available on Android 11+)

:::tip[Xiaomi/MIUI Users]
On Xiaomi phones, Developer options is in **Settings → Additional settings → Developer options**. Some MIUI versions require signing in to your Mi account and waiting before wireless debugging becomes available.
:::

### Pair with Wireless Debugging

On the Shizuku home page, tap the **Pairing** button to enter the pairing guide.

<div class="phone-row">
  <img class="phone" src="/images/automation/04-shizuku-tap-pairing.png" alt="Tap Pairing button" />
  <img class="phone" src="/images/automation/05-pairing-guide.png" alt="Pairing guide page" />
</div>

1. Tap **Developer options** to jump to system settings

2. Turn on the **Wireless debugging** toggle, then tap the text to enter the detail page

<div class="phone-row">
  <img class="phone" src="/images/automation/05-developer-options.png" alt="Developer options" />
  <img class="phone" src="/images/automation/06-wireless-debugging.png" alt="Wireless debugging settings" />
</div>

3. Tap **Pair device with pairing code**, a 6-digit code will appear

<img class="phone" src="/images/automation/07-pairing-code.png" alt="Pairing code dialog" />

4. There are two ways to enter the pairing code:

**Option A: Popup input**

If a Shizuku input box appears at the top of your screen, enter the pairing code there and tap the send button.

<img class="phone" src="/images/automation/08a-pairing-popup.png" alt="Popup input for pairing code" />

**Option B: From notification shade**

If no popup appears, pull down the notification shade, find the Shizuku notification showing "Pairing service found", tap **"Enter pairing code"** and enter it.

<img class="phone" src="/images/automation/08b-pairing-notification.png" alt="Enter pairing code from notification" />

:::caution[Xiaomi/MIUI Users - Important]
MIUI's default notification style doesn't support entering the pairing code in notifications. You need to switch the notification style first:

1. Go to **Settings → Notifications & status bar → Notification shade style**
2. Select **"Native style"** (not "Classic style")

<div class="phone-row">
  <img class="phone" src="/images/automation/miui-02-notification-settings.jpg" alt="MIUI Notification settings" />
  <img class="phone" src="/images/automation/miui-03-native-style.jpg" alt="Select Native style" />
</div>

After switching, you'll be able to see the pairing code input field.
:::

5. After successful input, you'll see **"Pairing successful"**

<img class="phone" src="/images/automation/09-pairing-success.png" alt="Pairing successful" />

### Start Shizuku

Return to the Shizuku home page and tap the **Start** button.

<img class="phone" src="/images/automation/10-shizuku-tap-start.png" alt="Shizuku home page, tap Start" />

A terminal window shows the startup process.

<img class="phone" src="/images/automation/11-shizuku-starting.png" alt="Shizuku starting log" />

Once complete, you'll see **"Shizuku is running"** with version info.

<img class="phone" src="/images/automation/12-shizuku-running.png" alt="Shizuku running" />

## Step 3: Grant Permission to BotDrop

Return to BotDrop's Automation Panel. It now shows **"Shizuku precheck passed"**. Tap **Check Shizuku Permission**.

<img class="phone" src="/images/automation/13-automation-check-permission.png" alt="Tap Check Shizuku Permission" />

A dialog asks to allow BotDrop access to Shizuku. Tap **"Allow all the time"** for permanent access.

<img class="phone" src="/images/automation/14-shizuku-permission-dialog.png" alt="Grant Shizuku permission" />

## Step 4: Start u2 Service

After granting permission, tap **Start u2 Service**.

<img class="phone" src="/images/automation/15-u2-installing.png" alt="u2 service installing dependencies" />

:::caution[Please be patient]
The u2 service needs to download and install dependencies on first launch. **This may take 3-10 minutes or longer** depending on your network. Keep the screen on and don't switch to other apps or lock the phone.
:::

## Step 5: Done

When complete, both services show green status:
- **Shizuku permission granted** ✓
- **u2 service running** ✓

<img class="phone" src="/images/automation/16-all-running.png" alt="All services running" />

Your bot now has full automation capabilities.

---

## After Device Restart

Shizuku stops when your device restarts. To re-enable:

1. Open BotDrop → Automation Panel → **Open Shizuku Home**
2. Tap **Start** (no need to pair again if wireless debugging is still enabled)
3. Return to Automation Panel → **Start u2 Service**

:::tip
Keep wireless debugging enabled in Developer options so you only need to tap "Start" after reboots.
:::

## Troubleshooting

### "Shizuku binder not ready"
- Make sure Shizuku is running (green status in Shizuku app)
- Try restarting Shizuku from its home screen

### u2 service fails to start
- Ensure Shizuku permission is granted
- Check if there's enough storage space
- Try stopping and starting u2 service again

### Pairing code doesn't work
- Make sure you're entering the code within 60 seconds
- The pairing port and connection port are different (both shown on screen)
- Try generating a new pairing code

### Xiaomi phones don't show pairing popup
- Settings → Apps → Manage apps → BotDrop → Notifications → Enable "Floating notifications"
- Or just enter the code from the notification shade instead
