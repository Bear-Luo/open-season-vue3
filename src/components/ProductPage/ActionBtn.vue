<script setup lang="ts">
import { ref, computed } from 'vue';

import { useWishList } from '@/composables/useWishList';
import { useCart } from '@/composables/useCart';

const props = defineProps({
	id: String,
	unit: String,
});

const { wishList, addToWishList, removeWishList } = useWishList();
const isInWishList = computed<boolean>(() => wishList.value.includes(props.id));
const heart = computed<string[]>(() => isInWishList.value ? ['fas', 'heart'] : ['far', 'heart']);

const { addToCart, useCartLoading } = useCart();
const count = ref<number>(1);
</script>

<template>
	<div class="productPage_actionBlock">
		<select v-model="count">
			<option
				v-for="i in 10"
				:key="i"
				:value="i"
			>
				{{ $t('productPage.select', { value: i }) + props.unit }}
			</option>
		</select>
		<div>
			<button
				type="button"
				class="btn btn-danger btn-outline"
				@click="isInWishList ? removeWishList(`${ props.id }`) : addToWishList(`${ props.id }`)"
			>
				<font-awesome-icon :icon="heart" />
				{{ $t('productPage.addToWishList') }}
			</button>
			<button
				type="button"
				class="btn btn-success btn-outline"
				@click="addToCart({ qty: count, product_id: `${ props.id }`, mode: 'add' })"
			>
				<font-awesome-icon
					v-if="useCartLoading"
					:icon="['fas', 'spinner']"
					spin-pulse
				/>
				<font-awesome-icon
					v-else
					:icon="['fas', 'basket-shopping']"
				/>
				{{ $t('productPage.addToCart') }}
			</button>
		</div>
	</div>
</template>

<style lang="scss">
.productPage {
	&_actionBlock {
		margin-top: 1rem;

		select {
			width: 100%;
			margin-bottom: 30px;

			+div {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
			}
		}

		button {
			font-size: 1.125rem;
			margin-bottom: 10px;

			@include rwd(m) {
				font-size: 1rem;
			}
		}
	}
}
</style>
