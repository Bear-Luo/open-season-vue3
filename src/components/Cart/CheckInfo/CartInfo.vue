<script setup lang="ts">
import Coupon from './Coupon.vue';

import { useCart } from '@/composables/useCart';

const { cart, addToCart, removeCart, cartEachQty } = useCart();
</script>

<template>
	<div class="cartInfo">
		<ul class="card_list">
			<li
				v-for="item in cart.carts"
				:key="item.id"
			>
				<router-link
					:to="{ name: 'productPage', params: { id: item.id } }"
					:style="`background-image: url(${item.product.imageUrl})`"
					class="card_list_img"
				/>
				<div class="card_list_link">
					<router-link :to="{ name: 'productPage', params: { id: item.id } }">
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
				<div class="price">{{ $t('common.price', { price: item.final_total }) }}</div>
				<button
					type="button"
					class="card_btnCrosses"
					@click="removeCart({ id: item.id, mode: 'remove' })"
				/>
			</li>
			<li class="cartInfo_total">
				<div>{{ $t('cart.total') }}</div>
				<div class="price">{{ $t('common.price', { price: cart.total }) }}</div>
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
		width: 60px;
		text-align: right;
	}

	.card_list .cartInfo_total {
		font-weight: bold;
		color: $text-strong;
		padding-right: 38px;
		justify-content: space-between;
	}
}
</style>
