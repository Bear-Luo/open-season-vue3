<script setup lang="ts">
import Loading from '@/components/Utils/Loading.vue';
import Index from '@/components/ProductPage/Index.vue';

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useProducts } from '@/composables/useProducts';

const route = useRoute();
const { productPageLoading, getProduct, getProductList, productPageData } = useProducts();

const loadingFullPage = ref(true);

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
