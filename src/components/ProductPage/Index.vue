<script setup lang="ts">
import ActionBtn from './ActionBtn.vue';

import { computed } from 'vue';

import { useProducts } from '@/composables/useProducts';

const { productList, productPageData, getProduct } = useProducts();

const similarProduct = computed(() => productList.value.filter(elm => elm.category === productPageData.value?.category && elm.id !== productPageData.value.id));
</script>

<template>
	<div class="container productPage">
		<div class="productPage_info">
			<img :src="productPageData.imageUrl">

			<div class="productPage_info_main">
				<div class="productPage_info_title">{{ productPageData.title }}</div>
				<div class="productPage_info_content">
					<div>{{ productPageData.description }}</div>
					<div>{{ productPageData.content }}</div>
				</div>
				<div class="productPage_price">
					<div class="price-origin">{{ $t('common.originalPrice', { price: productPageData.origin_price }) }}</div>
					<div class="price-special">{{ $t('common.specialPrice', { price: productPageData.price }) }}</div>
				</div>
				<ActionBtn :id="productPageData.id" />
			</div>
		</div>
		
		<div class="productPage_title">
			<span>{{ $t('productPage.qa') }}</span>
		</div>
		<div
			v-for="i in 3"
			:key="i"
			class="productPage_qa"
		>
			<font-awesome-icon :icon="['far', 'question-circle']" />
			<div v-html="$t(`productPage.qa-${i}`)" />
		</div>

		<div class="productPage_title">
			<span>{{ $t('productPage.similar') }}</span>
		</div>
		<div class="productPage_similarList">
			<router-link
				v-for="item in similarProduct"
				:key="item.id"
				:to="{ name: 'productPage', params: { id: item.id }}"
				@click="getProduct(item.id)"
			>
				<div
					:style="`background-image: url(${ item.imageUrl })`"
					class="productPage_similarList_img"
				>
					<img src="/src/assets/images/similar.gif">
					<div>{{ item.title }}</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<style lang="scss">
.productPage {
	padding: 0 1rem;

	&_info {
		display: flex;
		padding-bottom: 35px;
		border-bottom: 1px dashed $tertiary;
		align-items: flex-start;

		@include rwd(s) {
			flex-direction: column-reverse;
		}

		img {
			width: 56%;
			height: auto;

			@include rwd(m) {
				width: 50%;
			}

			@include rwd(s) {
				width: 100%;
			}
		}

		&_main {
			width: 44%;
			padding-left: 30px;

			@include rwd(m) {
				width: 50%;
				padding-left: 1rem;
			}

			@include rwd(s) {
				width: 100%;
				padding: 0 0 1rem;
			}
		}
		
		&_title {
			font-size: 2rem;
			font-weight: 700;
			padding-bottom: 5px;
			color: $primary;
			margin-bottom: 20px;
			position: relative;

			@include rwd(m) {
				font-size: 1.5rem;
			}

			&::after {
				display: block;
				content: "";
				width: 100%;
				height: 4px;
				border-radius: 2px;
				background-color: $tertiary;
				position: absolute;
				bottom: -4px;
				left: 0px;
			}
		}

		&_content {
			color: $text-strong;

			>div {
				font-size: 1.125rem;
				padding-bottom: 30px;

				@include rwd(m) {
					font-size: 1rem;
					padding-bottom: 1rem;
				}
			}
		}
	}

	&_price {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: right;

		.price-original {
			font-size: 1.125rem;
		}

		.price-special {
			font-size: 1.375rem;
			flex: 1;

			@include rwd(m) {
				font-size: 1.125rem;
			}
		}
	}

	&_title {
		margin: 35px 0 25px;
		font-size: 1.5rem;
		font-weight: 700;
		color: $primary;

		>span {
			display: inline-block;
			padding-right: 3px;
			position: relative;
			line-height: 1.5;

			&::after {
				display: block;
				content: "";
				position: absolute;
				bottom: 0px;
				left: 0px;
				height: 3px;
				width: 100%;
				border-radius: 1.5px;
				background-color: $tertiary;
			}
		}
	}

	&_qa {
		display: flex;
		margin-top: 20px;
		line-height: 1.5;
		padding-left: 1rem;

		@include rwd(s) {
			padding-left: 0;
		}

		&_title {
			font-size: 1.125rem;
			font-weight: 700;
			color: #472d2a;
			margin-bottom: 5px;
		}

		.fa-circle-question {
			font-size: 1.5rem;
			color: $tertiary;

			+div {
				padding-left: 6px;
			}
		}
	}

	&_similarList {
		display: flex;
		width: 100%;
		padding: 0 .5rem 40px;
		flex-wrap: wrap;

		@include rwd(s) {
			padding: 0 0 40px;
		}

		a {
			display: block;
			width: calc(25% - 16px);
    		margin: 0px 8px 1rem;

			@include rwd(m) {
				width: calc(33.33% - 16px);
			}

			@include rwd(s) {
				width: calc(50% - 16px);
			}
		}

		&_img {
			background-size: cover;
			background-repeat: no-repeat;
			background-position: 50% center;
			position: relative;
			overflow: hidden;

			img {
				width: 100%;
				height: auto;
			}

			>div {
				font-size: 1.125rem;
				width: 100%;
				text-align: center;
				padding: 10px;
				color: #fff;
				position: absolute;
				left: 0;
				bottom: -50%;
				transition: bottom .25s ease;
				background-color: rgba($color: $primary, $alpha: .7);
				line-height: 1.5;
				z-index: 1;
			}

			&:hover {
				>div {
					bottom: 0;
					transition: bottom .35s ease;
				}
			}
		}
	}
}
</style>
