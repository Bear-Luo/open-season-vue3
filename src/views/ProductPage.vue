<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import Index from '@/components/ProductPage/Index.vue';

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useProducts } from '@/composables/useProducts';

const route = useRoute();
const { productPageLoading, getProduct, getProductList, productPageData } = useProducts();

const loadingFullPage = true;

onMounted(async () => {
	await getProduct(`${ route.params.id }`);
	await getProductList();
});
</script>

<template>
	<Loading
		v-model:loading="productPageLoading"
		v-model:full-page="loadingFullPage"
	/>
	<Index v-if="Object.keys(productPageData).length && !productPageLoading" />
</template>
