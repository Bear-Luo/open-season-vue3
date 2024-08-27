<script setup lang="ts">
import Loading from '@/components/Utils/Loading.vue';
import Form from '@/components/Cart/CheckInfo/Form.vue';
import CartInfo from '@/components/Cart/CheckInfo/CartInfo.vue';

import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

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

const { useCartLoading, cartCount, cart } = useCart();
const { checkInfoSubmitDisable, submitOrder } = useOrder();

const loadingFullPage = ref(true);
</script>

<template>
	<Loading
		v-model:loading="useCartLoading"
		v-model:full-page="loadingFullPage"
	/>
	<div v-if="cartCount" class="checkInfo">
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
	<div v-else-if="cartCount === 0 && Object.keys(cart).length" class="container text-center nothing">
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
