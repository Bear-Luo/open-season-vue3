import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/Home.vue'),
		},
		{
			path: '/product-list',
			name: 'productList',
			component: () => import('@/views/ProductList.vue'),
		},
		{
			path: '/product-page/:id',
			name: 'productPage',
			props: true,
			component: () => import('@/views/ProductPage.vue'),
		},
		{
			path: '/cart',
			name: 'cart',
			component: () => import('@/views/Cart.vue'),
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
		},
	],
	scrollBehavior(to, from) {
		if(to.hash) {
			return {
				el: to.hash,
				top: 72,
				behavior: 'smooth',
			};
		} else if(from.path === '/' && to.path === '/') {
			return {
				top: 0,
				behavior: 'smooth',
			};
		}
	},
});

export default router;
