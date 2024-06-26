import { ref, computed } from 'vue';
import { createGlobalState, useSorted, useTitle, useDebounceFn } from '@vueuse/core';
import { apiHandler } from '@/assets/scripts/api-handler';
import { type Product, type Category } from './types';
import { useI18n } from 'vue-i18n';

export const useProducts = createGlobalState(() => {
	const loading = ref<boolean>(true);

	const productList = ref<Product[]>([]);
	const getProductList = async () => {
		loading.value = true;
		const res = await apiHandler('get', 'products/all');
    
		if(res.success && res.products?.length) {
			productList.value = res.products;
		}
		loading.value = false;
	};

	const { t } = useI18n();
	const activeCategoryIndex = ref<number>(0);
	const category = computed<Category[]>(() => {
		const arr = [
			{
				text: t('productList.all'),
				active: false,
			},
		];
		if(productList.value.length) {
			productList.value.forEach((product) => {
				if(arr.findIndex((elm) => elm.text === product.category) === -1) {
					arr.push({
						text: product.category,
						active: false,
					});
				}
			});
			arr[activeCategoryIndex.value].active = true;
		}

		return arr;
	});
	const clickCategory = (index: number) => {
		activeCategoryIndex.value = index;
		changeSortPrice(true);
	};

	const sortPrice = ref<'inactive' | 'lowToHigh' | 'highToLow'>('inactive');
	const changeSortPrice = (reset?: boolean) => {
		if(reset) {
			sortPrice.value = 'inactive';
			return;
		}
		sortPrice.value = sortPrice.value === 'inactive' || sortPrice.value === 'highToLow' 
			? 'lowToHigh' : 'highToLow';
	};

	const keyword = ref<string>('');
	const finalKeyword = ref<string>('');
	const setFinalKeyword = useDebounceFn(() => {
		finalKeyword.value = keyword.value;
	}, 500);
	const filterProductList = computed<Product[]>(() => {
		let returnList = activeCategoryIndex.value
			? productList.value.filter((elm) => elm.category === category.value[activeCategoryIndex.value].text)
			: productList.value;

		if(finalKeyword.value !== '') {
			returnList = returnList.filter(elm => elm.title.includes(keyword.value));
		}

		if(sortPrice.value === 'lowToHigh') {
			returnList = useSorted(returnList, (a, b) => Number(a.price) - Number(b.price)).value;
		} else if(sortPrice.value === 'highToLow') {
			returnList = useSorted(returnList, (a, b) => Number(b.price) - Number(a.price)).value;
		}

		return returnList;
	});

	const productPageLoading = ref(true);
	const productPageData = ref({} as Product);
	const getProduct = async (id: string) => {
		productPageLoading.value = true;

		const { success, product } = await apiHandler(
			'get',
			`/product/${ id }`,
		);
		if(success) {
			productPageData.value = product as Product;
			useTitle(`${ productPageData.value.title }`);
		}
		productPageLoading.value = false;
	};

	return {
		loading,
		productList, getProductList,
		category, clickCategory,
		keyword, setFinalKeyword,
		sortPrice, changeSortPrice,
		filterProductList,
		productPageLoading, getProduct, productPageData,
	};
});
