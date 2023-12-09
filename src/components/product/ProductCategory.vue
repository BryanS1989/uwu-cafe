<script setup lang="ts">
import { ref, computed, watch, onBeforeMount } from 'vue';
import ProductItem from './ProductItem.vue';
import { useProductsStore } from '@/stores/ProductsStore.ts';

const store = useProductsStore();

// props
const props = defineProps({
	category: {
		type: String,
		required: true,
	},
});

// data
const expanded = ref(false);
const selectedItems = ref(0);

// a computed ref
const categoryIcon = computed(() => {
	let icon = '';
	switch (props.category) {
		case 'Packs':
			icon = 'box-open';
			break;

		case 'Comida':
			icon = 'pizza-slice';
			break;

		case 'Bebidas':
			icon = 'martini-glass-citrus';
			break;

		case 'Batidos':
			icon = 'blender';
			break;

		case 'Helados':
			icon = 'ice-cream';
			break;

		case 'Postres':
			icon = 'cake-candles';
			break;

		case 'Piruletas':
			icon = 'candy-cane';
			break;

		default:
			icon = 'star';
			break;
	}
	return icon;
});

// watch works directly on a ref
watch(store.order, () => {
	selectedItems.value = store.categorySelectedItems(props.category);
});

onBeforeMount(() => {
	selectedItems.value = store.categorySelectedItems(props.category);
});

function toggleExpand() {
	expanded.value = !expanded.value;
}
</script>

<template>
	<article class="border rounded-lg">
		<header
			class="flex p-4 gap-8"
			:class="[
				{
					'bg-stone-800 rounded-t-lg text-pink-400': selectedItems,
					'rounded-lg': !expanded,
				},
			]"
			@click="toggleExpand"
		>
			<h3 class="flex-1 flex justify-start items-center gap-4">
				<font-awesome-icon
					:icon="['fas', categoryIcon]"
					size="lg"
				/>
				{{ props.category }}
			</h3>

			<div
				v-if="selectedItems"
				class="flex justify-center items-center px-3 rounded-lg bg-pink-500"
			>
				<span class="font-bold text-stone-100">{{ selectedItems }}</span>
			</div>

			<div class="flex justify-center items-center">
				<font-awesome-icon
					:icon="['fas', `${expanded ? 'chevron-up' : 'chevron-down'}`]"
					size="xl"
				/>
			</div>
		</header>

		<ul
			v-show="expanded"
			class="py-4 px-2 border-t"
		>
			<li
				v-for="(product, index) in store.productsByCategory(props.category)"
				:key="index"
			>
				<ProductItem :product="product"></ProductItem>
			</li>
		</ul>
	</article>
</template>
