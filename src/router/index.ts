import { createRouter, createWebHashHistory } from 'vue-router';
import i18n from '../i18n/index';
import { useTitle } from '@vueuse/core';

import ProductList from '@/views/ProductList.vue';
import ProductPage from '@/views/ProductPage.vue';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/:pathMatch(.*)*',
			name: 'notfound',
			component: () => import('@/views/NotFound.vue'),
			meta: {
				title: i18n.global.t('common.notFoundPage'),
			},
		},
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/Home.vue'),
			meta: {
				title: i18n.global.t('common.openSeason'),
			},
		},
		{
			path: '/product-list',
			name: 'productList',
			component: ProductList,
			meta: {
				title: i18n.global.t('header.productList'),
			},
		},
		{
			path: '/product-page/:id',
			name: 'productPage',
			props: true,
			component: ProductPage,
		},
		{
			path: '/cart',
			name: 'cart',
			component: () => import('@/views/Cart.vue'),
			meta: {
				title: i18n.global.t('cart.steps', 0),
			},
		},
		{
			path: '/order/:orderId',
			name: 'order',
			component: () => import('@/views/Cart.vue'),
		},
		{
			path: '/wish-list',
			name: 'wishList',
			component: () => import('@/views/WishList.vue'),
			meta: {
				title: i18n.global.t('common.wishList'),
			},
		},
	],
	scrollBehavior(to) {
		if(to.hash) {
			return {
				el: to.hash,
				top: 72,
				behavior: 'smooth',
			};
		} else {
			return {
				top: 0,
				behavior: 'smooth',
			};
		}
	},
});

router.beforeEach((to) => {
	const title = to.meta.title ?? i18n.global.t('common.openSeason');
	useTitle(`${ title }`);
});

export default router;
