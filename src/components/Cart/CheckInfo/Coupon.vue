<script setup lang="ts">
import { ref } from 'vue';
import { useClipboard } from '@vueuse/core';

import { apiHandler } from '@/assets/scripts/api-handler';
import { useCart } from '@/composables/useCart';
import { useNotify } from '@/composables/useNotify';

const couponCode = '20percent';
const { copy } = useClipboard();

const inputCoupon = ref('');
const { getCart, setUseCartLoading } = useCart();
const useCoupon = async (coupon: string) => {
	const couponData = { data: { code: coupon } };
	const { success } = await apiHandler(
		'post',
		'/coupon',
		{ data: couponData },
	);

	if(success) {
		setUseCartLoading(true);
		await getCart();
		setUseCartLoading(false);
	} else {
		inputCoupon.value = '';
	}
};

const { setMessage } = useNotify();
</script>

<template>
	<div class="coupon_block">
		<div class="coupon_code">
			{{ $t('cart.copyCoupon') }}
			<button
				type="button"
				class="btn btn-sm btn-info"
				@click="copy(couponCode);setMessage({ text: $t('cart.copiedCoupon') })"
			>
				{{ couponCode }}
				<font-awesome-icon :icon="['far', 'copy']" />
			</button>
		</div>

		<div class="form_group form_group--inline">
			<input v-model="inputCoupon" type="text">
			<button
				type="button"
				class="btn btn-quaternary btn-outline"
				@click="useCoupon(inputCoupon)"
			>
				{{ $t('cart.useCoupon') }}
			</button>
		</div>
	</div>
</template>

<style lang="scss">
.coupon {
	&_block {
		margin-top: 1rem;
		line-height: 1.5;
		
		input {
			width: 100%;
		}
	}

	&_code {
		color: $text-strong;
		border: 1px solid $info;
		background-color: rgba($color: $info, $alpha: .05);
		padding: 1rem;
		border-radius: 1.25rem;
		border-bottom-left-radius: 0;
		margin-bottom: 10px;

		button {
			font-weight: 700;
		}
	}
}
</style>
