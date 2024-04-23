import { computed } from 'vue';
import { useWindowSize, createGlobalState } from '@vueuse/core';

const { width } = useWindowSize();

export const useUtils = createGlobalState(() => {
	const isMobileWidth = computed<boolean>(() => width.value < 1024);

	const setBodyLocked = (v: boolean) => {
		const body = document.querySelector('body') || null;
		if(v && body !== null) {
			body.classList.add('locked');
		} else if(!v && body !== null) {
			body.classList.remove('locked');
		}
	};

	return {
		isMobileWidth,
		setBodyLocked,
	};
});