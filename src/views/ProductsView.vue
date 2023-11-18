<script setup lang="ts">
import ProductCategory from '../components/product/ProductCategory.vue';
import { useProductsStore } from '@/stores/ProductsStore.ts';

const store = useProductsStore();
</script>

<template>
	<main class="flex flex-col justify-around items-center gap-8">
		<section
			class="self-end flex flex-col justify-end items-start bg-stone-800 rounded-b-lg border-x border-b border-dashed border-pink-400 w-40 p-1 px-4"
		>
			<p class="text-xl font-extrabold">Total</p>
			<p class="self-end text-lg text-right pt-2 pb-1">
				<span>{{ store.totalOrder }}</span
				><span>$</span>
			</p>
		</section>

		<ProductCategory
			v-for="(category, index) in store.categories"
			:key="index"
			:category="category"
			class="flex-1 self-stretch"
		></ProductCategory>
	</main>
</template>
