<script setup lang="ts">
import Loading from '../Utils/Loading.vue';

import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useOrder } from '@/composables/useCart';
import { thousandthComma } from '@/assets/scripts/formatter';

const route = useRoute();
const { orderData, payOrder, loading, payOrderBtnDisabled } = useOrder();

const orderDetail = computed(() => {
	const commodities = Object.keys(orderData.value.products).map(elm => orderData.value.products[elm as keyof typeof orderData.value.products]);
	return commodities;
});

const recipientInfo = ['email', 'name', 'tel', 'address'];
const loadingLight = ref(true);
</script>

<template>
	<div class="orderPage">
		<div v-if="orderData.is_paid" class="card_top">
			<div class="card_topMsg shadow">
				<span>{{ $t('cart.isPaidMsg', 1) }}</span>
				<router-link
					:to="{ name: 'productList' }"
					class="card_topMsg_link"
				>
					<span v-html="$t('cart.isPaidMsg', 2)" />
				</router-link>
			</div>
			<div class="card_topIcon">
				<div class="animated-rubberBand">
					<font-awesome-icon :icon="['fas', 'check']" />
				</div>
			</div>
		</div>
		<div class="card shadow">
			<Loading
				v-if="loading"
				v-model:loading="loading"
				v-model:light="loadingLight"
			/>
			<template v-else>
				<div class="card_title">{{ $t('cart.orderDetail') }}</div>
				<table class="card_table">
					<thead>
						<tr>
							<th>{{ $t('cart.commodityName') }}</th>
							<th>{{ $t('cart.amount') }}</th>
							<th class="text-right">{{ $t('cart.uniPrice') }}</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="item in orderDetail"
							:key="item.id"
						>
							<td>{{ item.product.title }}</td>
							<td class="text-nowrap">{{ item.qty + '/' + item.product.unit }}</td>
							<td class="text-right text-nowrap">{{ item.product.price }}</td>
						</tr>
						<tr>
							<th>{{ $t('cart.total') }}</th>
							<td colspan="2" class="text-right text-strong">{{ thousandthComma(orderData.total) }}</td>
						</tr>
					</tbody>
				</table>
				<div class="card_title">{{ $t('cart.recipientInfo') }}</div>
				<table class="card_table">
					<tbody>
						<tr v-for="(item, i) in recipientInfo" :key="i">
							<th>{{ $t(`form.${item}`) }}</th>
							<td>{{ orderData.user[item] }}</td>
						</tr>
						<tr v-if="orderData.is_paid">
							<th>{{ $t('cart.paymentStatus') }}</th>
							<td class="text-success">{{ $t('cart.isPaid') }}</td>
						</tr>
					</tbody>
				</table>
			</template>
		</div>
		<div v-if="!orderData.is_paid" class="card_actionBlock--out">
			<button
				:disabled="payOrderBtnDisabled"
				type="button"
				class="btn btn-success"
				@click="payOrder(route.params.orderId as string)"
			>
				{{ $t('cart.goToPay') }}
			</button>
		</div>
	</div>
</template>

<style lang="scss">
.orderPage {
	width: 100%;
	max-width: 480px;
	margin: 0 auto;
	padding: 0 1rem 48px;

	.card_top {
		text-align: center;
		margin-bottom: -5px;
		position: relative;
		z-index: 1;

		&Msg {
			font-size: 1.25rem;
			font-weight: 600;
			background-color: #fff;
			border-radius: 10px;
			padding: 20px 1rem;
			display: inline-block;
			position: relative;

			&::before, &::after {
				display: block;
				content: "";
				background-color: #fff;
				margin: 0 auto;
				position: absolute;
			}

			&::before {
				width: 10px;
				height: 10px;
				border-bottom-left-radius: 3px;
				transform: rotate(-45deg);
				bottom: -5px;
				box-shadow: 0 2px 5px rgba(0,0,0,.25);
				left: calc(50% - 5px);
			}

			&::after {
				width: 1.25rem;
				height: 1rem;
				bottom: 0;
				left: calc(50% - .5rem);
			}

			&_link {
				color: $success;

				i {
					padding-left: 5px;
					position: relative;
					left: 0;
					transition: left ease .25s;
				}

				&:hover {
					i {
						left: 4px;
						transition: left ease .25s;
					}
				}
			}
		}

		&Icon {
			>div {
				font-size: 1.75rem;
				width: 60px;
				height: 60px;
				line-height: 60px;
				border-radius: 30px;
				background-color: $quaternary;
				color: #fff;
				position: relative;
				bottom: -32px;
				display: inline-block;
			}

			&::after {
				display: block;
				content: "";
				width: 100%;
				height: 5px;
				background-color: $quaternary;
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
			}
		}
	}
}
</style>
