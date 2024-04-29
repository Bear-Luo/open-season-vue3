<script setup lang="ts">
import Steps from '@/components/Cart/Steps.vue';
import CheckInfo from '@/components/Cart/CheckInfo/Index.vue';
import Order from '@/components/Cart/Order.vue';

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useCart, useOrder } from '@/composables/useCart';

const { getCart, cartCount, setCartEachQty, setUseCartLoading } = useCart();
const { getOrder } = useOrder();
const route = useRoute();

onMounted(async () => {
	if(route.name === 'cart') {
		setUseCartLoading(true);
		await getCart();
		setCartEachQty();
		setUseCartLoading(false);
	} else if(route.name === 'order') {
		await getOrder(route.params.orderId as string);
	}
});
</script>

<template>
	<Steps v-if="cartCount || route.name === 'order'" />
	<component :is="$route.name === 'order' ? Order : CheckInfo" />
</template>
