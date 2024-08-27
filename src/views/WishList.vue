<script setup lang="ts">
import Loading from '@/components/Utils/Loading.vue';
import Index from '@/components/WishList/Index.vue';

import { onMounted, ref } from 'vue';

import { useProducts } from '@/composables/useProducts';
import { useWishList } from '@/composables/useWishList';

const { loading, getProductList, productList } = useProducts();
const { wishList } = useWishList();

const loadingFullPage = ref(true);

onMounted(async () => {
	if(productList.value.length === 0) await getProductList();
});
</script>

<template>
	<div>
		<Loading
			v-model:loading="loading"
			v-model:full-page="loadingFullPage"
		/>
		<template v-if="!loading">
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
		</template>
	</div>
</template>
