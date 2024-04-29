<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { useOrder } from '@/composables/useCart';
import { useUtils } from '@/composables/useUtils';

const { orderData } = useOrder();
const route = useRoute();
const nowStep = computed<number>(() => {
	let step = 1;
	if(route.name === 'order') {
		step = orderData.value.is_paid ? 3 : 2;
	}

	return step;
});

const { t } = useI18n();
const { width } = useUtils();
const steps = computed<{ step: number; text: string }[]>(() => {
	let stepArr = [];
	if(width.value < 481) {
		stepArr.push({
			step: nowStep.value,
			text: t('cart.steps', nowStep.value - 1),
		});
	} else {
		for(let i = 0; i < 3; i++) {
			stepArr.push({
				step: i + 1,
				text: t('cart.steps', i + 1),
			});
		}
	}

	return stepArr;
});
</script>

<template>
	<ul class="container cartPage_steps">
		<li
			v-for="item in steps"
			:key="item.step"
			:class="{ 'active': item.step <= nowStep }"
		>
			<div>
				<i>{{ item.step }}</i>
				<span>{{ item.text }}</span>
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

		@include rwd(s) {
			justify-content: center;
		}

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
