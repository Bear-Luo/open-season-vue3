<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import Index from '@/components/ProductPage/Index.vue';

import { onMounted } from 'vue';

import { useProducts } from '@/composables/useProducts';

const { loading, getProductList, productList } = useProducts();

onMounted(async () => {
	if(productList.value.length === 0) await getProductList();
});
</script>

<template>
	<Loading :loading="loading" full-page />
	<Index />
</template>
