<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import ProductCategory from '../components/product/ProductCategory.vue';
import { useProductsStore } from '@/stores/ProductsStore.ts';

const store = useProductsStore();
const categories = ref(new Array());

// Lifecycle
onBeforeMount(() => {
	categories.value = store.products;
});
</script>

<template>
	<main class="flex flex-col justify-around items-center gap-8">
		<section class="self-end flex justify-end items-center gap-2">
			<div class="bg-stone-800 p-2 rounded-lg w-32">
				<p class="text-xl font-extrabold border-b">Total</p>
				<p class="text-right pt-2">
					<span>{{ store.totalOrder }}</span
					><span>$</span>
				</p>
			</div>
		</section>

		<ProductCategory
			v-for="(category, index) in categories"
			:key="index"
			:category="category"
			class="flex-1 self-stretch"
		></ProductCategory>
	</main>
</template>
