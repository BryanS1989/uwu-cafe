<script setup lang="ts">
import { ref, computed } from 'vue';
import ProductItem from './ProductItem.vue';

// props
const props = defineProps({
	category: {
		type: Object,
		required: true,
	},
});

// data
const expanded = ref(false);

function toggleExpand() {
	expanded.value = !expanded.value;
}

// a computed ref
const categoryIcon = computed(() => {
	let icon = '';
	switch (props.category?.name) {
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
		default:
			icon = 'star';
			break;
	}
	return icon;
});
</script>

<template>
	<article class="border rounded-lg">
		<header
			class="flex p-4 gap-2"
			:class="[{ 'bg-stone-800 rounded-t-lg': expanded }]"
			@click="toggleExpand"
		>
			<div class="flex justify-center items-center">
				<font-awesome-icon
					:icon="['fas', categoryIcon]"
					size="xl"
				/>
			</div>

			<h3 class="flex-1">
				{{ props.category?.name }}
			</h3>

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
				v-for="(product, index) in props.category?.products"
				:key="index"
			>
				<ProductItem :product="product"></ProductItem>
			</li>
		</ul>
	</article>
</template>
