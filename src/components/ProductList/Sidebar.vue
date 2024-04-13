<script setup lang="ts">
import { computed } from 'vue';

import { useProducts } from '@/composables/useProducts';
import { useUtils } from '@/composables/useUtils';

const { category, clickCategory } = useProducts();
const { isMobileWidth } = useUtils();
const sidebarStyle = computed(() => isMobileWidth.value ? 'productList_sidebar--mb' : 'productList_sidebar--pc');
</script>

<template>
	<div :class="{ 'productList_sidebar_container': isMobileWidth }">
		<ul :class="sidebarStyle">
			<li
				v-for="(item, i) in category"
				:key="i"
				:class="{ 'active': item.active }"
				@click="clickCategory(i)"
			>
				{{ item.text }}
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
.productList {
    &_sidebar {
		&--pc {
			width: 220px;
			position: relative;

			&::before {
				content: "";
				display: block;
				width: 3px;
				height: 100%;
				position: absolute;
				background-color: rgba($color: $primary, $alpha: .15);
				border-radius: 1.5px;
				left: 0;
				top: 0;
			}

			li {
				display: block;
				color: rgba($color: $primary, $alpha: .7);
				font-size: 1.125rem;
				padding: 1.125rem 0 1.125rem 1.75rem;
				cursor: pointer;
				margin: 1px 0;
				position: relative;

				&::before {
					content: "";
					display: block;
					background-color: rgba($color: $primary, $alpha: .35);
					width: 3px;
					height: 0;
					border-radius: 1.5px;
					position: absolute;
					left: 0;
					top: -1px;
					transition: height .35s ease;
				}

				&::after {
					content: "";
					display: block;
					background-color: rgba($color: $primary, $alpha: .35);
					position: absolute;
					width: 0;
					left: 3px;
					top: 50%;
					height: 1px;
					transition: width .35s ease;
				}

				&:hover:not(.active) {
					color: rgba($color: $primary, $alpha: .85);
					background-color: rgba($color: #fff, $alpha: .8);

					&::before {
						height: calc(100% + 2px);
						transition: height .25s ease;
					}

					&::after {
						width: 1rem;
						transition: width .25s ease;
					}
				}

				&.active {
					color: $primary;

					&::before{
						height: calc(100% + 2px);
						background-color: $primary;
					}

					&::after {
						width: 1rem;
						background-color: $primary;
					}
				}
			}
		}

		&_container {
			overflow: hidden;
			width: 100%;
			height: 50px;
			margin-bottom: 1rem;
			padding: 0 15px;
		}

		&--mb {
			display: flex;
			width: 100%;
			overflow: overlay;
			height: 80px;

			li {
				display: block;
				border: 1px solid rgba($color: $secondary, $alpha: .4);
				color: rgba($color: $secondary, $alpha: .65);
				border-radius: 5px;
				height: 48px;
				line-height: 48px;
				width: 100%;
				padding: 0 2rem;
				text-align: center;
				font-weight: 600;
				cursor: pointer;
				white-space: nowrap;

				@include rwd(m) {
					padding: 0 1.5rem;
				}

				&.active {
					background-color: rgba($color: $secondary, $alpha: .65);
					color: #fff;
				}

				+li {
					margin-left: 10px;
				}
			}
		}
	}
}
</style>
