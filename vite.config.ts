import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		createHtmlPlugin({
		  minify: true,
		  entry: 'src/main.ts',
		  inject: {
				data: {
					title: '角獵咖啡',
					injectScript: `<script src="./inject.js"></script>`,
				},
				tags: [
					{
						injectTo: 'head',
						tag: 'meta',
						attrs: {
							name: 'keyword',
							content: '角獵咖啡,台東親子餐廳,下午茶,早午餐,聚餐',
						},
					},
					{
						injectTo: 'head',
						tag: 'meta',
						attrs: {
							name: 'description',
							content: '角獵咖啡為座落於台東市區的親子餐廳，館內有兒童遊戲區可供玩耍，另有不定期舉辦的親子活動唷！',
						},
					},
					{
						injectTo: 'body-prepend',
						tag: 'div',
						attrs: {
							id: 'tag',
						},
					},
				],
		  },
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/assets/css/variables/color.scss";@import "@/assets/css/variables/rwd.scss";`,
			},
		},
	},
	build: {
		outDir: 'docs',
		rollupOptions: {
			output: {
			  	manualChunks: (id) => {
					if(id.includes('node_modules')) {
						const arr = id.toString().split('node_modules/')[1].split('/');
						switch(arr[0]) {
						case 'vue3-carousel':
						case '@vee-validate':
						case 'vue-waterfall-plugin-next':
							return arr[0];
						default:
							return;
						}
					}
				},
			},
		},
	},
});
