<script setup lang="ts">
import ProductCategory from '../components/product/ProductCategory.vue';
import { useProductsStore } from '@/stores/ProductsStore.ts';

const store = useProductsStore();
</script>

<template>
	<main class="flex flex-col justify-around items-center gap-8 py-8">
		<ProductCategory
			v-for="(category, index) in store.categories"
			:key="index"
			:category="category"
			class="flex-1 self-stretch"
		></ProductCategory>
	</main>
</template>
