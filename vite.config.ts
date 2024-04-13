import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				// additionalData: `@import "@/assets/css/variables/color.scss";@import "@/assets/css/variables/rwd.scss";@import "@/assets/css/reset.scss";@import "@/assets/css/custom.scss";@import "@/assets/css/header.scss";@import "@/assets/css/product-list.scss";`,
				additionalData: `@import "@/assets/css/variables/color.scss";@import "@/assets/css/variables/rwd.scss";`,
			},
		},
	},
});
