import { computed } from 'vue';
import { useWindowSize, createGlobalState } from '@vueuse/core';

const { width } = useWindowSize();

export const useUtils = createGlobalState(() => {
	const isMobileWidth = computed<boolean>(() => width.value < 1024);

	return {
		isMobileWidth,
	};
});