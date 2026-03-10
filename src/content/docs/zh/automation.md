---
title: 自动化
description: 在 BotDrop 中启用 Shizuku 和 u2 服务实现自动化功能。
---

BotDrop 的自动化功能需要 **Shizuku**（系统级权限）和 **u2 服务**（UI 自动化）。本指南教你在手机上完成配置，无需连接电脑。

:::note[系统要求]
- Android 11 或更高版本（用于无线调试）
- BotDrop 已安装且网关运行中
:::

## 第一步：打开自动化面板

在 BotDrop 主界面，点击 **Automation** 按钮。

<img class="phone" src="/images/automation/01-dashboard-automation.png" alt="主界面的 Automation 按钮" />

进入自动化面板，可以看到 Shizuku 和 u2 服务的状态。

<img class="phone" src="/images/automation/02-automation-panel.png" alt="自动化面板" />

## 第二步：配置 Shizuku

如果 Shizuku 显示 "not running"，点击 **Open Shizuku Home** 进入 Shizuku 配置页面。

<img class="phone" src="/images/automation/03-shizuku-home.png" alt="Shizuku 主页" />

### 开启开发者选项（如未开启）

如果你的手机还没有开启开发者选项，需要先执行以下步骤：

1. 进入 **设置 → 关于手机**
2. 找到 **版本号**（或 MIUI 版本、软件版本等）
3. **连续点击 7 次**，直到提示"您已进入开发者模式"
4. 返回 **设置 → 系统**（或"更多设置"），找到 **开发者选项**
5. 开启 **USB 调试**
6. 开启 **无线调试**（Android 11+ 可用）

:::tip[小米/MIUI 用户]
小米手机的开发者选项在 **设置 → 更多设置 → 开发者选项**。部分 MIUI 版本还需要登录小米账号并等待一段时间才能使用无线调试。
:::

### 配对无线调试

在 Shizuku 主页点击 **Pairing** 按钮，进入配对指南页面。

<div class="phone-row">
  <img class="phone" src="/images/automation/04-shizuku-tap-pairing.png" alt="点击 Pairing 按钮" />
  <img class="phone" src="/images/automation/05-pairing-guide.png" alt="配对指南页面" />
</div>

1. 点击 **Developer options** 跳转到系统开发者选项

2. 先打开 **无线调试** 的开关，然后点击文字进入详情页

<div class="phone-row">
  <img class="phone" src="/images/automation/05-developer-options.png" alt="开发者选项" />
  <img class="phone" src="/images/automation/06-wireless-debugging.png" alt="无线调试设置" />
</div>

3. 点击 **使用配对码配对设备**，屏幕会显示 6 位配对码

<img class="phone" src="/images/automation/07-pairing-code.png" alt="配对码对话框" />

4. 输入配对码有两种方式：

**方式一：弹窗直接输入**

如果屏幕顶部弹出了 Shizuku 的输入框，直接在那里输入配对码并点击发送按钮。

<img class="phone" src="/images/automation/08a-pairing-popup.png" alt="弹窗直接输入配对码" />

**方式二：从通知栏输入**

如果没有弹窗，下拉通知栏，找到 Shizuku 通知（显示 "Pairing service found"），点击 **"输入配对码"** 并输入。

<img class="phone" src="/images/automation/08b-pairing-notification.png" alt="从通知栏输入配对码" />

:::caution[小米/MIUI 用户必读]
MIUI 默认的通知样式不支持在通知中输入配对码。你需要先切换通知样式：

1. 进入 **设置 → 通知与状态栏 → 通知样式设置**
2. 选择 **"原生样式"**（不是"经典样式"）

<div class="phone-row">
  <img class="phone" src="/images/automation/miui-02-notification-settings.jpg" alt="MIUI 通知与状态栏设置" />
  <img class="phone" src="/images/automation/miui-03-native-style.jpg" alt="选择原生样式" />
</div>

切换后才能正常看到配对码输入框。
:::

5. 输入成功后会显示 **"Pairing successful"**

<img class="phone" src="/images/automation/09-pairing-success.png" alt="配对成功" />

### 启动 Shizuku

返回 Shizuku 主页，点击 **Start** 按钮启动服务。

<img class="phone" src="/images/automation/10-shizuku-tap-start.png" alt="Shizuku 主页点击 Start" />

终端窗口会显示启动过程。

<img class="phone" src="/images/automation/11-shizuku-starting.png" alt="Shizuku 启动日志" />

完成后显示 **"Shizuku is running"** 和版本信息。

<img class="phone" src="/images/automation/12-shizuku-running.png" alt="Shizuku 运行中" />

## 第三步：授权 BotDrop

返回 BotDrop 自动化面板，此时显示 **"Shizuku precheck passed"**。点击 **Check Shizuku Permission** 按钮。

<img class="phone" src="/images/automation/13-automation-check-permission.png" alt="点击 Check Shizuku Permission" />

弹窗询问是否允许 BotDrop 访问 Shizuku，点击 **"Allow all the time"** 永久授权。

<img class="phone" src="/images/automation/14-shizuku-permission-dialog.png" alt="授权 Shizuku 权限" />

## 第四步：启动 u2 服务

授权完成后，点击 **Start u2 Service**。

<img class="phone" src="/images/automation/15-u2-installing.png" alt="u2 服务安装依赖" />

:::caution[请耐心等待]
u2 服务首次启动需要下载和安装依赖，**可能需要 3~10 分钟甚至更久**，取决于网络状况。请保持屏幕常亮，不要切换到其他应用或锁屏。
:::

## 第五步：完成

全部完成后，两个服务都显示绿色状态：
- **Shizuku permission granted** ✓
- **u2 service running** ✓

<img class="phone" src="/images/automation/16-all-running.png" alt="所有服务运行中" />

你的 Bot 现在具备完整的自动化能力了。

---

## 重启手机后

手机重启后 Shizuku 会停止。重新启用：

1. 打开 BotDrop → 自动化面板 → **Open Shizuku Home**
2. 点击 **Start**（如果无线调试还开着，不用重新配对）
3. 返回自动化面板 → **Start u2 Service**

:::tip
保持开发者选项中的无线调试开启，这样重启后只需点一下 "Start"。
:::

## 常见问题

### "Shizuku binder not ready"
- 确认 Shizuku 正在运行（Shizuku 应用中显示绿色状态）
- 尝试在 Shizuku 主页重启服务

### u2 服务启动失败
- 确认已授予 Shizuku 权限
- 检查存储空间是否充足
- 尝试停止再重新启动 u2 服务

### 配对码不生效
- 确保在 60 秒内输入配对码
- 配对端口和连接端口不同（屏幕上都有显示）
- 尝试重新生成配对码

### 小米手机看不到配对弹窗
- 设置 → 应用设置 → 应用管理 → BotDrop → 通知管理 → 开启"悬浮通知"
- 或者直接从通知栏找 Shizuku 的通知输入配对码
