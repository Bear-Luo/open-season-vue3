<script setup lang="ts">
import { computed } from 'vue';
import { useProducts } from '@/composables/useProducts';

const { keyword, sortPrice, changeSortPrice, setFinalKeyword } = useProducts();

const icon = computed(() => ([
	{
		visible: sortPrice.value === 'inactive' || sortPrice.value === 'lowToHigh',
		icon: ['fas', 'up-long'],
	},
	{
		visible: sortPrice.value === 'inactive' || sortPrice.value === 'highToLow',
		icon: ['fas', 'down-long'],
	},
]));
</script>

<template>
	<div class="productList_filter">
		<input
			:placeholder="`${$t('productList.searchPlaceHolder')}`"
			v-model="keyword"
			type="text"
			@input="setFinalKeyword"
		>
		<button
			type="button"
			class="btn btn-outline"
			@click="changeSortPrice()"
		>
			{{ $t('productList.sortPrice') }}
			
			<template
				v-for="(item, i) in icon"
				:key="i"
			>
				<font-awesome-icon
					v-show="item.visible"
					:icon="item.icon"
				/>
			</template>
		</button>
	</div>
</template>
