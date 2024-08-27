<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { useWishList } from '@/composables/useWishList';
import { useCart } from '@/composables/useCart';

const id = defineModel('id', { required: true, type: String, default: '' });
const unit = defineModel('unit', { required: true, type: String, default: '' });
const title = defineModel('title', { required: true, type: String, default: '' });

const { wishList, addToWishList, removeWishList } = useWishList();
const isInWishList = computed<boolean>(() => wishList.value.includes(id.value));
const heartControl = computed(() => ({
	icon: isInWishList.value ? ['fas', 'heart'] : ['far', 'heart'],
	text: isInWishList.value ? t('productPage.removeFromWishList') : t('productPage.addToWishList'),
}));

const { addToCart, useCartLoading, cart } = useCart();
const purchaseLimit = computed<number>(() => {
	let limit = 10;
	const index = cart.value.carts.findIndex(elm => elm.product_id === id.value);
	if(index >= 0) {
		limit = limit -= cart.value.carts[index].qty;
	}
	return limit;
});
const count = ref<number>(purchaseLimit.value === 0 ? 0 : 1);

const { t } = useI18n();
const tip = computed(() => ({
	class: purchaseLimit.value === 0 ? 'text-danger' : 'text-grey',
	text: purchaseLimit.value === 0
		? t('productPage.reachedLimit')
		: t('productPage.purchaseLimit', { unit: unit.value }),
}));

const clickAddToCart = async () => {
	await addToCart({
		qty: count.value,
		product_id: id.value,
		mode: 'add',
		title: title.value,
	});
	count.value = purchaseLimit.value === 0 ? 0 : 1;
};
</script>

<template>
	<div class="productPage_actionBlock">
		<select :disabled="purchaseLimit === 0" v-model="count">
			<option :value="0" disabled>{{ $t('productPage.selectQuantity') }}</option>
			<option
				v-for="i in 10"
				:key="i"
				:value="i"
				:disabled="i > purchaseLimit"
			>
				{{ $t('productPage.select', { value: i, unit }) }}
			</option>
		</select>
		<div :class="tip.class" class="productPage_tip">
			<font-awesome-icon :icon="['fas', 'circle-exclamation']" />
			{{ tip.text }}
		</div>
		<div class="productPage_actionBtns">
			<button
				type="button"
				class="btn btn-danger btn-outline"
				@click="isInWishList ? removeWishList(`${ id }`) : addToWishList(`${ id }`)"
			>
				<font-awesome-icon :icon="heartControl.icon" />
				<span>{{ heartControl.text }}</span>
			</button>
			<button
				:disabled="purchaseLimit === 0"
				type="button"
				class="btn btn-success btn-outline"
				@click="clickAddToCart()"
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
				<span>{{ $t('productPage.addToCart') }}</span>
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
			margin-bottom: 8px;
		}

		button {
			font-size: 1.125rem;
			margin-bottom: 10px;

			@include rwd(m) {
				font-size: 1rem;
			}
		}
	}

	&_actionBtns {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.btn span {
			padding-left: 6px;
		}
	}

	&_tip {
		font-size: .875rem;
		margin-bottom: 30px;

		.svg-inline--fa {
			margin-right: 2px;
		}
	}
}
</style>
