<script setup lang="ts">
import Loading from '../Utils/Loading.vue';

import { computed, ref } from 'vue';

import { useWishList } from '@/composables/useWishList';
import { useCart } from '@/composables/useCart';
import { useProducts } from '@/composables/useProducts';
import { type Product } from '@/composables/types';

const { wishList, removeWishList } = useWishList();
const { addToCart, useCartLoading } = useCart();
const { productList } = useProducts();

const wishListData = computed(() => {
	const returnData: (Product | undefined)[] = [];
	if(wishList.value.length > 0) {
		wishList.value.forEach((id: string) => {
			const data = productList.value.find(elm => elm.id === id);
			returnData.push(data);
		});
	}

	return returnData;
});

const loadingFullPage = ref(true);
</script>

<template>
	<Loading
		v-model:loading="useCartLoading"
		v-model:full-page="loadingFullPage"
	/>
	<div class="wishList container">
		<div class="wishList_title">{{ $t('common.wishList') }}</div>
		<div class="card shadow">
			<ul
				v-if="wishListData.length > 0"
				class="card_list"
			>
				<li
					v-for="item in wishListData"
					:key="item?.id"
				>
					<router-link
						:style="`background-image: url(${ item?.imageUrl })`"
						:to="{ name: 'productPage', params: { id: item?.id } }"
						class="card_list_img"
					/>
					<div class="card_list_link">
						<router-link :to="{ name: 'productPage', params: { id: item?.id } }">
							{{ item?.title }}
						</router-link>
					</div>
					<div>{{ item?.price }}</div>
					<button
						class="btn btn-circle btn-success btn-outline"
						type="button"
						@click="addToCart({ qty: 1, product_id: `${ item?.id }`, mode: 'add', title: item?.title })"
					>
						<font-awesome-icon
							:icon="['fas', 'basket-shopping']"
						/>
					</button>
					<button
						type="button"
						class="card_btnCrosses"
						@click="removeWishList(`${ item?.id}`)"
					/>
				</li>
			</ul>
			<div v-else></div>
		</div>
	</div>
</template>

<style lang="scss">
.wishList {
	padding: 0 1rem 3rem;

	&_title {
		font-size: 1.75rem;
		color: $primary;
		text-align: center;
		margin-bottom: 1.5rem;
		font-weight: 500;
	}

	.card {
		width: 80%;
		margin: 0 auto;

		@include rwd(l) {
			width: 100%;
		}
		
		&_list {
			&_link {
				flex: 1;
			}
		}
	}
}
</style>
