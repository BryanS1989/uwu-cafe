import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			redirect: '/products',
		},
		{
			path: '/products',
			name: 'products',
			component: () => import('@/views/ProductsView.vue'),
		},
		{
			path: '/order',
			name: 'order',
			component: () => import('../views/OrderView.vue'),
		},
	],
});

export default router;
