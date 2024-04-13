<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import Index from '@/components/WishList/Index.vue';

import { onMounted } from 'vue';

import { useProducts } from '@/composables/useProducts';
import { useCart } from '@/composables/useCart';

const { loading, getProductList, productList } = useProducts();
const { getCart } = useCart();

onMounted(async () => {
	if(productList.value.length === 0) await getProductList();
	await getCart();
});
</script>

<template>
	<Loading :loading="loading" full-page />
	<Index v-if="productList.length" />
</template>
