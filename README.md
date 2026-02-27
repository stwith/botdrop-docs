# botdrop-docs

Documentation site for [BotDrop](https://github.com/zhixianio/botdrop-android).

Built with [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/).

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/content/docs/          # English docs (root locale)
src/content/docs/zh/       # 简体中文
```

## Note

Node 25 requires `--no-experimental-strip-types` for Starlight. This is already configured in `package.json` scripts.
