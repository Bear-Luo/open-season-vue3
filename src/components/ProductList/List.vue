<script setup lang="ts">
import ActionBtn from './ActionBtn.vue';

import { useRouter } from 'vue-router';

import { useProducts } from '@/composables/useProducts';

const { filterProductList } = useProducts();

const router = useRouter();
const goToProductPage = (id: string) => {
	router.push({
		name: 'productPage',
		params: { id },
	});
};
</script>

<template>
	<div class="productList_block">
		<div
			v-for="item in filterProductList"
			:key="item.id"
			class="productList_card_container"
			@click="goToProductPage(item.id)"
		>
			<div class="productList_card">
				<div
					:style="{ 'background-image': `url(${item.imageUrl})` }"
					class="productList_card_img"
				>
					<ActionBtn
						v-model:id="item.id"
						v-model:title="item.title"
					/>
				</div>
				<div>
					<div class="productList_card_title">{{ item.title }}</div>
					<div class="productList_card_price">
						<span class="price-origin">{{ item.origin_price }}</span>
						<span class="price-special">{{ $t('common.dollar', { price: item.price }) }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
