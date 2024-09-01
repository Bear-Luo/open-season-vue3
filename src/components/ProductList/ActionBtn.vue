<script setup lang="ts">
import ShareLink from '@/components/Utils/ShareLink.vue';

import { computed, ref } from 'vue';

import { useWishList } from '@/composables/useWishList';
import { useCart } from '@/composables/useCart';

const id = defineModel('id', { required: true, type: String, default: '' });
const title = defineModel('title', { required: true, type: String, default: '' });

const { wishList, addToWishList, removeWishList } = useWishList();
const isInWishList = computed<boolean>(() => wishList.value.includes(id.value));
const heart = computed<string[]>(() => isInWishList.value ? ['fas', 'heart'] : ['far', 'heart']);

const { addToCart } = useCart();

const loading = ref(false);
const clickCart = async ({ qty, product_id }: { qty: number, product_id: string }) => {
	loading.value = true;
	await addToCart({ qty, product_id, mode: 'add', title: title.value });
	loading.value = false;
};

const url = `${window.location.origin}/#/product-page/${id.value}`;
</script>

<template>
	<div class="productList_actionBtn">
		<ShareLink :url="url" />

		<button
			:class="{ 'active': isInWishList }"
			type="button"
			@click.stop="isInWishList ? removeWishList(id) : addToWishList(id)"
		>
			<font-awesome-icon :icon="heart" />
		</button>

		<button
			:disabled="loading"
			type="button"
			@click.stop="clickCart({ qty: 1, product_id: id });"
		>
			<font-awesome-icon
				v-if="loading"
				:icon="['fas', 'spinner']"
				spin-pulse
			/>
			<font-awesome-icon
				v-else
				:icon="['fas', 'basket-shopping']"
			/>
		</button>
	</div>
</template>
