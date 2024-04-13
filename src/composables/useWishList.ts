import { createGlobalState, useStorage } from '@vueuse/core';

export const useWishList = createGlobalState(() => {
	const wishList = useStorage('wishList', JSON.parse(localStorage.wishList) || []);

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