<script setup lang="ts">
import ActionBtn from './ActionBtn.vue';

import { useProducts } from '@/composables/useProducts';

const { filterProductList } = useProducts();
</script>

<template>
	<div class="productList_block">
		<div
			v-for="item in filterProductList"
			:key="item.id"
			class="productList_card_container"
		>
			<div class="productList_card">
				<div class="productList_card_img">
					<router-link
						:style="{ 'background-image': `url(${item.imageUrl})` }"
						:to="{ name: 'productPage', params: { id: item.id } }"
					/>
					<ActionBtn
						v-model:id="item.id"
						v-model:title="item.title"
					/>
				</div>
				<div>
					<router-link
						:to="{ name: 'productPage', params: { id: item.id } }"
						class="productList_card_title"
					>
						{{ item.title }}
					</router-link>
					<div class="productList_card_price">
						<span class="price-origin">{{ item.origin_price }}</span>
						<span class="price-special">{{ $t('common.dollar', { price: item.price }) }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
