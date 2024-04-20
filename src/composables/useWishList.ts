import { createGlobalState, useStorage } from '@vueuse/core';

export const useWishList = createGlobalState(() => {
	const wishList = useStorage('wishList', [], localStorage, { mergeDefaults: true });

	const addToWishList = (id: string) => {
		wishList.value.push(id);
	};

	const removeWishList = (id: string) => {
		const index = wishList.value.indexOf(id);
		if(index >= 0) wishList.value.splice(index, 1);
	};

	return {
		wishList,
		addToWishList, removeWishList,
	};
});