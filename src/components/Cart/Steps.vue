<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { useOrder } from '@/composables/useCart';

const { orderData } = useOrder();
const route = useRoute();
const nowStep = computed<number>(() => {
	let step = 1;
	if(route.name === 'order') {
		step = orderData.value.is_paid ? 3 : 2;
	}

	return step;
});
</script>

<template>
	<ul class="container cartPage_steps">
		<li
			v-for="i in 3"
			:key="i"
			:class="{ 'active': i <= nowStep }"
		>
			<div>
				<i>{{ i }}</i>
				<span>{{ $t('cart.steps', i - 1) }}</span>
			</div>
		</li>
	</ul>
</template>

<style lang="scss">
.cartPage {
	&_steps {
		display: flex;
		width: 100%;
		padding: 0 1rem;
		margin: 0 auto;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;

		i {
			position: relative;
			font-style: italic;
			font-size: 2.125rem;
			font-weight: 700;
			padding-right: 1.25rem;

			&::after {
				position: absolute;
				display: block;
				content: "";
				width: 3px;
				height: 100%;
				transform: rotate(30deg);
				background-color: #bbb;
				top: 0;
				right: 5px;
				border-radius: 1.5px;
			}
		}

		li {
			color: #bbb;

			div {
				white-space: nowrap;
				padding-right: 1.5rem;
			}

			+li {
				display: flex;
				align-items: center;
				flex: 1;

				&::before {
					display: block;
					content: "";
					width: 80%;
					height: 3px;
					border-radius: 1.5px;
					background-color: #eaeaea;
				}

				div {
					padding-left: 1.5rem;
				}
			}

			&.active {
				color: $primary;

				&::before {
					background-color: $primary;
				}

				i::after {
					background-color: $primary;
				}
			}
		}
	}
}
</style>
