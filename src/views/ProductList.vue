<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import Sidebar from '@/components/ProductList/Sidebar.vue';
import List from '@/components/ProductList/List.vue';
import Filter from '@/components/ProductList/Filter.vue';

import { onMounted } from 'vue';

import { useProducts } from '@/composables/useProducts';
import { useCart } from '@/composables/useCart';

const { loading, getProductList, productList } = useProducts();
const { getCart } = useCart();

onMounted(async () => {
	await getProductList();
	await getCart();
});
</script>

<template>
	<Loading :loading="loading" full-page />
	<div v-if="productList.length" class="productList_page">
		<Sidebar />
		<div class="productList_container">
			<Filter />
			<List />
		</div>
	</div>
</template>
