// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
	site: 'https://docs.botdrop.app',
	// base removed for custom domain
	server: { port: 4000 },
	markdown: {
		rehypePlugins: [
			[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		],
	},
	integrations: [
		starlight({
			title: 'BotDrop Docs',
			head: [
				// Page Agent - AI Assistant (demo mode)
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.jsdelivr.net/npm/page-agent@1.5.11/dist/iife/page-agent.demo.js',
						crossorigin: 'true',
					},
				},
				// Google Analytics
				{
					tag: 'script',
					attrs: {
						src: 'https://www.googletagmanager.com/gtag/js?id=G-HRRN0NER9P',
						async: true,
					},
				},
				{
					tag: 'script',
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-HRRN0NER9P');
					`,
				},
				// Structured Data - SoftwareApplication
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						"name": "BotDrop",
						"alternateName": "手机安装 OpenClaw",
						"applicationCategory": "UtilitiesApplication",
						"operatingSystem": "Android",
						"description": "The easiest way to install OpenClaw on your phone. One-tap install AI bots on Android, no server needed.",
						"url": "https://docs.botdrop.app",
						"downloadUrl": "https://botdrop.app",
						"softwareVersion": "0.2.9",
						"inLanguage": ["en", "zh-CN"],
						"author": {
							"@type": "Organization",
							"name": "BotDrop",
							"url": "https://botdrop.app"
						},
						"offers": {
							"@type": "Offer",
							"price": "0",
							"priceCurrency": "USD"
						},
						"keywords": "OpenClaw, AI bot, Android, mobile AI, telegram bot, 手机安装 OpenClaw"
					}),
				},
			],
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
						{
							label: 'QQ',
							translations: { 'zh-CN': 'QQ 机器人' },
							slug: 'channels/qq',
						},
					],
				},
				{
					label: 'Automation',
					translations: { 'zh-CN': '自动化' },
					items: [
						{
							label: 'Setup',
							translations: { 'zh-CN': '配置' },
							slug: 'automation',
						},
						{
							label: 'Automation Skill',
							translations: { 'zh-CN': '自动化技能' },
							slug: 'automation-skill',
						},
					],
				},
				{
					label: 'FAQ',
					translations: { 'zh-CN': '常见问题' },
					slug: 'faq',
				},
			],
		}),
	],
});
