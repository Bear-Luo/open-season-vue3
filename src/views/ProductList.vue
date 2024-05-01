<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import Sidebar from '@/components/ProductList/Sidebar.vue';
import List from '@/components/ProductList/List.vue';
import Filter from '@/components/ProductList/Filter.vue';

import { onMounted, ref } from 'vue';

import { useProducts } from '@/composables/useProducts';

const { loading, getProductList, productList } = useProducts();

const loadingFullPage = ref(true);

onMounted(async () => {
	await getProductList();
});
</script>

<template>
	<Loading
		v-model:loading="loading"
		v-model:full-page="loadingFullPage"
	/>
	<div v-if="productList.length" class="productList_page">
		<Sidebar />
		<div class="productList_container">
			<Filter />
			<List />
		</div>
	</div>
</template>
