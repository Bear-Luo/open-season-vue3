import { createI18n } from 'vue-i18n';

import zhTw from './zh-tw.json';

type MessageSchema = typeof zhTw

const i18n = createI18n<[MessageSchema], 'zh-tw'>({
	legacy: false, // 要把 legacy 設為 false，才可以使用 Composition API
	locale: 'zh-tw',
	fallbackLocale: 'zh-tw',
	globalInjection: true,
	messages: {
		'zh-tw': zhTw,
	},
});

export default i18n;
