<script setup lang="ts">
import Coupon from './Coupon.vue';

import { computed } from 'vue';

import { useCart } from '@/composables/useCart';
import { thousandthComma } from '@/assets/scripts/formatter';
import { type Carts } from '@/composables/types';

const { cart, addToCart, removeCart, cartEachQty } = useCart();

const carts = computed(() => {
	const arr: Carts[] = [];
	if(Object.keys(cart.value).length && cart.value.carts.length) {
		cart.value.carts.forEach(elm => {
			let item = { ...elm };
			item.final_total = thousandthComma(Number(item.final_total));
			arr.push(item);
		});
	}
	return arr;
});

const cartTotalPrice = computed(() => thousandthComma(cart.value.total));

</script>

<template>
	<div class="cartInfo">
		<ul class="card_list">
			<li
				v-for="item in carts"
				:key="item.id"
			>
				<router-link
					:to="{ name: 'productPage', params: { id: item.product_id } }"
					:style="`background-image: url(${item.product.imageUrl})`"
					class="card_list_img"
				/>
				<div class="card_list_link">
					<router-link :to="{ name: 'productPage', params: { id: item.product_id } }">
						{{ item.product.title }}
					</router-link>
				</div>
				<select
					v-model="cartEachQty[item.id]"
					@change="addToCart({ qty: cartEachQty[item.id], product_id: item.product_id, mode: 'change' })"
				>
					<option
						v-for="i in 10"
						:key="i"
						:value="i"
					>
						{{ i }}
					</option>
				</select>
				<div class="price">{{ item.final_total }}</div>
				<button
					type="button"
					class="card_btnCrosses"
					@click="removeCart({ id: item.id, mode: 'remove' })"
				/>
			</li>
			<li class="cartInfo_total">
				<div>{{ $t('cart.total') }}</div>
				<div class="price">{{ cartTotalPrice }}</div>
			</li>
		</ul>

		<Coupon />
	</div>
</template>

<style lang="scss">
.cartInfo {
	.card_list_link {
		flex: 1;
	}
	
	.price {
		width: 80px;
		text-align: right;
	}

	.card_list{
		input {
			width: 80px;
			text-align: right;
		}

		.cartInfo_total {
			font-weight: bold;
			color: $text-strong;
			padding-right: 38px;
			justify-content: space-between;
		}
	}
}
</style>
