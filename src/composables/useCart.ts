import { ref, computed } from 'vue';
import { createGlobalState, useTitle } from '@vueuse/core';
import router from '@/router';
import { useI18n } from 'vue-i18n';

import { apiHandler } from '@/assets/scripts/api-handler';
import { useNotify } from './useNotify';
import { type CartData, type Order } from './types';

export const useCart = createGlobalState(() => {
	const { setMessage } = useNotify();
	const useCartLoading = ref(true);
	const cart = ref<CartData>({} as CartData);
	const getCart = async () => {
		useCartLoading.value = true;
		const { success, data } = await apiHandler(
			'get',
			'/cart',
		);
		if(success) {
			cart.value = data as CartData;
		}
		useCartLoading.value = false;
	};
	const cartEachQty = ref<{[key: string]: number}>({});
	const setCartEachQty = () => {
		cart.value.carts.forEach(elm => {
			cartEachQty.value[elm.id] = elm.qty;
		});
	};

	const addToCart = async ({ qty, product_id, mode, id = '' }: { qty: number, product_id: string, mode: 'change' | 'add', id?: string  }) => {
		useCartLoading.value = true;
		await checkCartRepeat(({ id, product_id }));
		const data = {
			data: {
				qty: mode === 'add'
					? repeatQty.value + qty
					: qty,
				product_id,
			},
		};
		
		const { success, message } = await apiHandler(
			'post',
			'/cart',
			{ data },
		);

		if(success) {
			await getCart();
			setCartEachQty();

			if(mode === 'add') setMessage({ text: `${ message }` });
		}
		useCartLoading.value = false;
	};

	const repeatQty = ref(0);
	const checkCartRepeat = async ({ id = '', product_id }: { id: string, product_id: string}) => {
		const index = cart.value.carts.findIndex(elm => elm.product_id === product_id);
		if(index < 0) return;
		const repeatId = id === '' ? cart.value.carts[index].id : id;
		repeatQty.value = cart.value.carts[index].qty;
		await removeCart({ id: repeatId, mode: 'add' });
	};

	const removeCart = async ({ id, mode }: { id: string, mode: 'add' | 'remove' }) => {
		useCartLoading.value = true;

		const { success, message } = await apiHandler(
			'delete',
			`/cart/${ id }`,
		);
		if(success && mode === 'remove') {
			await getCart();
			setMessage({ text: `${message}` });
		}
		useCartLoading.value = mode === 'add' ? true : false;
	};

	const cartCount = computed(() => {
		let count = 0;
		if(Object.keys(cart.value).length) {
			cart.value.carts.forEach(elm => {
				count += elm.qty;
			});
		}
		return count;
	});

	return {
		useCartLoading,
		cart, getCart,
		cartEachQty, setCartEachQty,
		addToCart,
		removeCart,
		cartCount,
	};
});

export const useOrder = createGlobalState(() => {
	const loading = ref(true);
	const recipientInfo = ref<{ [key: string]: string }>({
		email: '',
		name: '',
		tel: '',
		address: '',
		message: '',
	});

	const checkInfoSubmitDisable = ref(false);
	const setCheckInfoSubmitDisable = (v: boolean) => {
		checkInfoSubmitDisable.value = v;
	};

	const submitOrder = async () => {
		const { message, ...data } = recipientInfo.value;
		const payloadData = {
			data: {
				message,
				user: data,
			},
		};
		const { success, orderId } = await apiHandler(
			'post',
			'/order',
			{ data: payloadData },
		);

		if(success) {
			router.push({
				name: 'order',
				params: { orderId },
			});

			await getOrder(`${ orderId }`);
		}
	};

	const { t } = useI18n();
	const orderData = ref<Order>({} as Order);
	const getOrder = async (id: string) => {
		loading.value = true;
		const { success, order } = await apiHandler(
			'get',
			`/order/${id}`,
		);

		if(success) {
			orderData.value = order as Order;
		}
		useTitle(t('cart.steps', orderData.value.is_paid ? 2 : 1));
		loading.value = false;
	};

	const payOrder = async (id: string) => {
		loading.value = true;
		const { success } = await apiHandler(
			'post',
			`/pay/${id}`,
		);

		if(success) {
			await getOrder(id);
		}
		loading.value = false;
	};
	
	return {
		loading,
		recipientInfo,
		checkInfoSubmitDisable, setCheckInfoSubmitDisable,
		submitOrder,
		getOrder, orderData,
		payOrder,
	};
});
