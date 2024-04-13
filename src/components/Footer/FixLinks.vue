<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { useCart } from '@/composables/useCart';

const { cartCount, useCartFullPageLoading } = useCart();
const route = useRoute();

const links = computed(() => {
	const arr = [
		{
			name: 'cart',
			visible: route.name !== 'home' && route.name !== 'cart' && route.name !== 'order' && !useCartFullPageLoading.value,
			icon: ['fas', 'basket-shopping'],
		},
		{
			name: 'wishList',
			visible: route.name !== 'home' && route.name !== 'wishList' && route.name !== 'order',
			icon: ['fas', 'heart'],
		},
	];

	return arr.filter(elm => elm.visible);
});
</script>

<template>
	<div class="fix_links">
		<router-link
			v-for="(item, i) in links"
			:key="i"
			:to="{ name: item.name }"
		>
			<font-awesome-icon :icon="item.icon" />
			<div
				v-if="item.name === 'cart' && cartCount"
				class="fix_links_badge"
			>
				{{ cartCount }}
			</div>
		</router-link>
	</div>
</template>

<style lang="scss">
.fix_links {
	position: fixed;
	right: 20px;
	bottom: 50px;

	a {
		font-size: 1.5rem;
		display: block;
		width: 60px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		border-radius: 50%;
		color: #fff;
		background-color: rgba($color: $quaternary, $alpha: .8);
		transition: background-color .25s ease;
		position: relative;

		&:hover {
			background-color: rgba($color: $quaternary, $alpha: 1);
			transition: background-color .35s ease;
		}

		+a {
			margin-top: 1rem;
		}
	}

	&_badge {
		background-color: $danger;
		color: #fff;
		font-size: .875rem;
		height: 1.5rem;
		min-width: 1.5rem;
		border-radius: 50%;
		line-height: 1.5rem;
		text-align: center;
		position: absolute;
		right: 0;
		top: -5px;
	}
}
</style>
