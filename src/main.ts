import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy, faHeart as farFaHeart, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faXmark, faCheck, faHeart, faBasketShopping, faLocationDot, faPhone, faClock, faUpLong, faDownLong, faCircleExclamation, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import i18n from './i18n/index';
import { defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';

const app = createApp(App);

library.add(faCopy, faSpinner, faXmark, faCheck, faHeart, faBasketShopping, faLocationDot, faPhone, faClock, faUpLong, faDownLong, faCircleExclamation, faFacebookF, faInstagram, faQuestionCircle, farFaHeart, faUpRightFromSquare);

// Make the validat aggressive to show case validators
configure({
	validateOnInput: true,
	generateMessage: localize({ zh_TW: zhTW }),
});
setLocale('zh_TW');
Object.keys(AllRules).forEach(rule => {
	defineRule(rule, (AllRules as any)[rule]);
});

app.use(router);
app.use(i18n);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
