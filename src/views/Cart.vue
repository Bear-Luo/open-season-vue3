<script setup lang="ts">
import Steps from '@/components/Cart/Steps.vue';
import CheckInfo from '@/components/Cart/CheckInfo/Index.vue';
import Order from '@/components/Cart/Order.vue';

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useCart, useOrder } from '@/composables/useCart';

const { getCart, cartCount, setCartEachQty } = useCart();
const { getOrder } = useOrder();
const route = useRoute();

onMounted(async () => {
	if(route.name === 'cart') {
		await getCart();
		setCartEachQty();
	} else if(route.name === 'order') {
		await getOrder(route.params.orderId as string);
	}
});
</script>

<template>
	<template v-if="cartCount || route.name === 'order'">
		<Steps />
		<component :is="$route.name === 'order' ? Order : CheckInfo" />
	</template>

	<div v-else class="container text-center nothing">
		<div>{{ $t('cart.nothingInCart') }}</div>
		<router-link
			:to="{ name: 'productList' }"
			class="btn btn-success btn-outline"
		>
			<span v-html="$t('cart.goShopping')" />
		</router-link>
	</div>
</template>
