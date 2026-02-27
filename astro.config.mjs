// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.botdrop.app',
	integrations: [
		starlight({
			title: 'BotDrop',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				zh: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			favicon: '/favicon.png',
			social: [
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.gg/botdrop',
					attrs: { target: '_blank', rel: 'noopener noreferrer' },
				},
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/botdropapp',
					attrs: { target: '_blank', rel: 'noopener noreferrer' },
				},
				{
					icon: 'x.com',
					label: 'X',
					href: 'https://x.com/botdropapp',
					attrs: { target: '_blank', rel: 'noopener noreferrer' },
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					translations: { 'zh-CN': '开始使用' },
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Features',
					translations: { 'zh-CN': '功能' },
					autogenerate: { directory: 'features' },
				},
				{
					label: 'Guides',
					translations: { 'zh-CN': '使用指南' },
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
