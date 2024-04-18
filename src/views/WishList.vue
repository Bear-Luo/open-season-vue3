<script setup lang="ts">
import Loading from '@/components/Loading.vue';
import Index from '@/components/WishList/Index.vue';

import { onMounted } from 'vue';

import { useProducts } from '@/composables/useProducts';
import { useCart } from '@/composables/useCart';
import { useWishList } from '@/composables/useWishList';

const { loading, getProductList, productList } = useProducts();
const { getCart } = useCart();
const { wishList } = useWishList();

onMounted(async () => {
	if(productList.value.length === 0) await getProductList();
	await getCart();
});
</script>

<template>
	<div>
		<Loading :loading="loading" full-page />
		<Index v-if="productList.length && wishList.length" />
		<div v-else class="container text-center nothing">
			<div>{{ $t('common.nothingInWishList') }}</div>
			<router-link
				:to="{ name: 'productList' }"
				class="btn btn-success btn-outline"
			>
				<span v-html="$t('common.toFindWishList')" />
			</router-link>
		</div>
	</div>
</template>
