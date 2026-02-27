// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
	site: 'https://docs.botdrop.app',
	// base removed for custom domain
	markdown: {
		rehypePlugins: [
			[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		],
	},
	integrations: [
		starlight({
			title: 'BotDrop Docs',
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
			favicon: '/favicon.ico',
			social: [
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.gg/w8wdnMM6Vy',
					attrs: { target: '_blank', rel: 'noopener noreferrer' },
				},
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/zhixianio/botdrop-android',
					attrs: { target: '_blank', rel: 'noopener noreferrer' },
				},
				{
					icon: 'x.com',
					label: 'X',
					href: 'https://x.com/botdropapp',
					attrs: { target: '_blank', rel: 'noopener noreferrer' },
				},
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Introduction',
					translations: { 'zh-CN': '简介' },
					slug: 'introduction',
				},
				{
					label: 'Installation',
					translations: { 'zh-CN': '安装' },
					slug: 'installation',
				},
				{
					label: 'Configuration',
					translations: { 'zh-CN': '配置流程' },
					slug: 'setup',
				},
				{
					label: 'Channels',
					translations: { 'zh-CN': '聊天频道' },
					items: [
						{
							label: 'Telegram',
							slug: 'channels/telegram',
						},
						{
							label: 'Discord',
							slug: 'channels/discord',
						},
						{
							label: 'Feishu',
							translations: { 'zh-CN': '飞书' },
							slug: 'channels/feishu',
						},
					],
				},
			],
		}),
	],
});
