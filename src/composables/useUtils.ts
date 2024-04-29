import { computed } from 'vue';
import { useWindowSize, createGlobalState } from '@vueuse/core';


export const useUtils = createGlobalState(() => {
	const { width } = useWindowSize();
	const isMobileWidth = computed<boolean>(() => width.value < 1025);

	const setBodyLocked = (v: boolean) => {
		const body = document.querySelector('body') || null;
		if(v && body !== null) {
			body.classList.add('locked');
		} else if(!v && body !== null) {
			body.classList.remove('locked');
		}
	};

	return {
		width,
		isMobileWidth,
		setBodyLocked,
	};
});