import { createGlobalState } from '@vueuse/core';
import { ref } from 'vue';

import { type Messages, type MessagesParams } from './types';

export const useNotify = createGlobalState(() => {
	const messages = ref<Messages[]>([]);

	const setMessage = (v: MessagesParams) => {
		const timeStamp = Date.now();
		messages.value.push({ ...v, timeStamp, top: '8px' });

		setTimeout(() => {
			if(v.class === 'danger') return;
			deleteMessage(timeStamp);
		}, 3000);

		setTimeout(() => {
			const index = messages.value.findIndex(elm => elm.timeStamp === timeStamp);
			messages.value[index].top = '0';
		}, 50);
	};

	const deleteMessage = (v: number) => {
		const index = messages.value.findIndex(elm => elm.timeStamp === v);
		if(index < 0) return;
		messages.value.splice(index, 1);
	};

	return {
		messages,
		setMessage,
		deleteMessage,
	};
});