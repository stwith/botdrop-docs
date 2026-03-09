# botdrop-docs

> BotDrop 文档站内部状态说明（维护版）

## 用途建议
- 该文件可继续保留，用于记录项目状态与关键决策。
- 如团队已有统一 PM 工具（Notion/Jira/Paperclip）且此文件长期无人维护，可考虑归档到 `docs/archive/`。

## 基本信息
- **代码路径**: `~/Codes/botdrop-docs`
- **技术栈**: Astro + Starlight
- **语言**: en（root）+ zh-CN

## 里程碑状态（更新于 2026-03-09）

| 阶段 | 内容 | 状态 |
|------|------|------|
| M0 | 项目初始化：技术选型、脚手架搭建 | ✅ |
| M1 | 核心文档内容：安装、配置、频道接入（中英双语） | ✅ |
| M2 | 部署上线与持续维护 | ⏳ |

## 当前验收结果
- ✅ `npm run build` 成功（15 pages）
- ✅ 主题切换（Starlight 内置 dark/light）
- ✅ i18n 语言切换
- ✅ 首页 + 核心文档页

## 技术决策记录
- 2026-02-27: 选型 Astro + Starlight，参考 owliabot/docs 结构
- 2026-02-27: Node 25 环境需要 `--no-experimental-strip-types`（已通过脚本固化）
- 2026-03-09: 构建脚本改为 `cross-env`，确保跨平台（macOS/Linux/Windows）可运行

## 待办建议
- [ ] 在 CI 增加 `npm run build` 校验
- [ ] 明确部署流程（域名、发布命令、回滚方案）
