<script setup lang="ts">
import Steps from '@/components/Cart/Steps.vue';
import CheckInfo from '@/components/Cart/CheckInfo/Index.vue';
import Order from '@/components/Cart/Order.vue';
import Loading from '@/components/Loading.vue';

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useCart, useOrder } from '@/composables/useCart';

const { getCart, cartCount, setCartEachQty, useCartFullPageLoading } = useCart();
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
	<Loading :loading="useCartFullPageLoading" full-page />

	<template v-if="cartCount || route.name === 'order'">
		<Steps />
		<component :is="$route.name === 'order' ? Order : CheckInfo" />
	</template>

	<div v-else class="container text-center cart-nothing">
		<div>{{ $t('cart.nothingInCart') }}</div>
		<router-link
			:to="{ name: 'productList' }"
			class="btn btn-success btn-outline"
		>
			<span v-html="$t('cart.goShopping')" />
		</router-link>
	</div>
</template>

<style lang="scss">
.cart-nothing {
	font-size: 1.25rem;
	
	>div {
		position: relative;
		padding-top: 10vh;

		&::before, &::after {
			display: block;
			content: "";
		}

		&::before {
			display: block;
			content: "";
			border-style: solid;
			border-color: #aaa transparent transparent transparent;
			border-width: .5rem;
			position: absolute;
			left: calc(50% - .5rem);
			bottom: -12px;
		}

		&::after {
			background-color: #bbb;
			width: 1px;
			height: 150px;
			margin: 1rem auto;
		}
	}

	.btn {
		font-size: 1.25rem;
		padding: 1rem 1.5rem;
		border-radius: 31px;
		
		i {
			position: relative;
			margin-left: 8px;
			left: 0;
			transition: left ease .35s;
		}

		&:hover {
			i {
				left: 3px;
				transition: left ease .25s;
			}
		}
	}
}
</style>
