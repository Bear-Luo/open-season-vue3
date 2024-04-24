<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import Index from '@/components/ProductPage/Index.vue';

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useProducts } from '@/composables/useProducts';

const route = useRoute();
const { productPageLoading, getProduct, getProductList, productPageData } = useProducts();

onMounted(async () => {
	await getProduct(`${ route.params.id }`);
	await getProductList();
});
</script>

<template>
	<Loading :loading="productPageLoading" full-page />
	<Index v-if="Object.keys(productPageData).length" />
</template>
