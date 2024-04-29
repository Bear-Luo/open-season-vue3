import { ref, computed } from 'vue';
import { createGlobalState, useTitle } from '@vueuse/core';
import router from '@/router';
import { useI18n } from 'vue-i18n';

import { apiHandler } from '@/assets/scripts/api-handler';
import { useNotify } from './useNotify';
import { type CartData, type Order, type UseCartMode } from './types';

export const useCart = createGlobalState(() => {
	const { setMessage } = useNotify();
	const { t } = useI18n();

	const useCartLoading = ref(true);
	const setUseCartLoading = (v: boolean) => {
		useCartLoading.value = v;
	};

	const cart = ref<CartData>({} as CartData);
	const getCart = async () => {
		const { success, data } = await apiHandler(
			'get',
			'/cart',
		);
		if(success) {
			cart.value = data as CartData;
		}
	};
	
	const cartEachQty = ref<{[key: string]: number}>({});
	const setCartEachQty = () => {
		cart.value.carts.forEach(elm => {
			cartEachQty.value[elm.id] = elm.qty;
		});
	};

	const addToCart = async ({ qty, product_id, mode, title, id = '' }: { qty: number; product_id: string; mode: UseCartMode; title?: string, id?: string }) => {
		setUseCartLoading(true);
		repeatQty.value = 0;
		await getCart();
		await checkCartRepeat(({ id, product_id, mode }));

		let changeQty = qty;
		if(mode === 'add') {
			changeQty += repeatQty.value;

			if(repeatQty.value === 10) {
				setMessage({ text: t('common.purchaseReachedLimit', { product: title }), class: 'danger' });
				setUseCartLoading(false);
				return;
			} else if(changeQty > 10) {
				changeQty = 10;
				setMessage({ text: t('common.purchaseOverLimit', { product: title }), class: 'danger' });
			}
		}
		const data = {
			data: {
				qty: changeQty,
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
		setUseCartLoading(false);
	};

	const repeatQty = ref(0);
	const checkCartRepeat = async ({ id = '', product_id, mode }: { id: string; product_id: string; mode: UseCartMode }) => {
		const index = cart.value.carts.findIndex(elm => elm.product_id === product_id);
		if(index < 0) return;

		repeatQty.value = cart.value.carts[index].qty;
		if(repeatQty.value === 10 && mode === 'add') return;
		
		const repeatId = id === '' ? cart.value.carts[index].id : id;
		await removeCart({ id: repeatId, mode: 'add' });
	};

	const removeCart = async ({ id, mode }: { id: string; mode: 'add' | 'remove' }) => {
		setUseCartLoading(true);

		const { success, message } = await apiHandler(
			'delete',
			`/cart/${ id }`,
		);
		if(success && mode === 'remove') {
			await getCart();
			setMessage({ text: `${message}` });
		}
		setUseCartLoading(mode === 'add' ? true : false);
	};

	const cartCount = computed<number>(() => {
		let count = 0;
		if(Object.keys(cart.value).length) {
			cart.value.carts.forEach(elm => {
				count += Number(elm.qty);
			});
		}
		return count;
	});

	return {
		useCartLoading, setUseCartLoading,
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
