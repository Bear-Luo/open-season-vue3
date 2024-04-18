<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import Index from '@/components/ProductPage/Index.vue';

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useProducts } from '@/composables/useProducts';
import { useCart } from '@/composables/useCart';

const route = useRoute();
const { productPageLoading, getProduct, getProductList } = useProducts();
const { getCart } = useCart();

onMounted(async () => {
	await getProduct(`${ route.params.id }`);
	await getCart();
	await getProductList();
});
</script>

<template>
	<Loading :loading="productPageLoading" full-page />
	<Index />
</template>
