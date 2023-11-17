<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue';
import ProductCategory from '../components/product/ProductCategory.vue';

const categories = ref(new Array());
const order = ref(new Array());

// a computed ref
const totalOrder = computed(() => {
	return order.value.length
		? order.value
				.map((product) => product.priceClient * product.quantity)
				.reduce((accumulator, price) => (accumulator += price))
				.toLocaleString()
		: 0;
});

// Lifecycle
onBeforeMount(() => {
	categories.value = [
		{
			name: 'Comida',
			products: [
				{
					name: 'Pizza Champiñones',
					priceClient: 60,
					priceUwu: 60,
				},
				{
					name: 'Pizza Peperonni',
					priceClient: 60,
					priceUwu: 60,
				},
				{
					name: 'Pizza Doble Peperonni',
					priceClient: 60,
					priceUwu: 60,
				},
				{
					name: 'Pizza Pesto',
					priceClient: 60,
					priceUwu: 60,
				},
				{
					name: 'Yatekomo',
					priceClient: 60,
					priceUwu: 60,
				},
			],
		},
		{
			name: 'Bebidas',
			products: [
				{
					name: 'Agua',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Café',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'CocaCola',
					priceClient: 220,
					priceUwu: 60,
				},
				{
					name: 'Estrella',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Voll-Damm',
					priceClient: 300,
					priceUwu: 60,
				},
				{
					name: 'Litrona',
					priceClient: 600,
					priceUwu: 60,
				},
				{
					name: 'Cóctel',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Caipiriña',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Cubata de Ron',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Cubata de Tequila',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Cubata de Vodka',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Cubata de Whisky',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Mojito',
					priceClient: 250,
					priceUwu: 60,
				},
			],
		},
		{
			name: 'Batidos',
			products: [
				{
					name: 'Batido de Café',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Cereza',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Chicle',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Chocolate',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Extra de Chocolate',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Frambuesa',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Fresa',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Limón',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Menta',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Vainilla',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido Frapé',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido Salado',
					priceClient: 200,
					priceUwu: 60,
				},
			],
		},
		{
			name: 'Helados',
			products: [
				{
					name: 'Helado de Amor',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Cereza',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Chocolate',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Frambuesa',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Fresa',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Limón',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Nuez',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Pistacho',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Trozos de Chocolate',
					priceClient: 70,
					priceUwu: 60,
				},
			],
		},
		{
			name: 'Postres',
			products: [
				{
					name: 'Donut',
					priceClient: 100,
					priceUwu: 60,
				},
				{
					name: 'Donut Caramelo',
					priceClient: 100,
					priceUwu: 60,
				},
				{
					name: 'Donut de Chocolate',
					priceClient: 100,
					priceUwu: 60,
				},
				{
					name: 'Galleta de Helado',
					priceClient: 100,
					priceUwu: 60,
				},
			],
		},
	];
});

function addToCart(product) {
	order.value.push(product);
}
</script>

<template>
	<section class="flex justify-end items-center gap-2 py-2 pb-4">
		<div class="bg-stone-800 p-2 rounded-lg w-32">
			<p class="text-xl font-extrabold border-b">Total</p>
			<p class="text-right pt-2">
				<span>{{ totalOrder }}</span
				><span>$</span>
			</p>
		</div>
	</section>
	<main class="flex flex-col justify-around items-center gap-8">
		<ProductCategory
			v-for="(category, index) in categories"
			:key="index"
			:category="category"
			class="flex-1 self-stretch"
			@add="addToCart"
		></ProductCategory>
	</main>
</template>
