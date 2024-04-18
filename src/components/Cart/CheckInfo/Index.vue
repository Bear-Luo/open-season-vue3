<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import Form from '@/components/Cart/CheckInfo/Form.vue';
import CartInfo from '@/components/Cart/CheckInfo/CartInfo.vue';

import { useI18n } from 'vue-i18n';

import { useOrder, useCart } from '@/composables/useCart';

const { t } = useI18n();
const continueShopping = {
	text: t('cart.continueShopping'),
	bind: {
		to: {
			name: 'productList',
		},
		class: ['btn', 'btn-quaternary', 'btn-outline'],
	},
};

const { useCartLoading } = useCart();
const { checkInfoSubmitDisable, submitOrder } = useOrder();
</script>

<template>
	<Loading :loading="useCartLoading" full-page />
	<div class="checkInfo">
		<div class="card shadow">
			<Form />
			<CartInfo />
		</div>

		<div class="card_actionBlock--out">
			<router-link v-bind="continueShopping.bind">{{ continueShopping.text }}</router-link>
			<button
				:disabled="!checkInfoSubmitDisable"
				type="button"
				class="btn btn-success"
				@click="submitOrder()"
			>
				{{ $t('cart.submitForm') }}
			</button>
		</div>
	</div>
</template>

<style lang="scss">
.checkInfo {
	max-width: 1140px;
	margin: 0 auto;
	padding: 0 1rem 48px;
	
	.card {
		display: flex;
		width: 100%;

		@include rwd(m) {
			flex-wrap: wrap;
			flex-direction: column-reverse;
		}

		> * {
			width: 50%;

			@include rwd(m) {
				width: 100%;
			}
		}
	}
}
</style>
