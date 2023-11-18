import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useProductsStore = defineStore('products', () => {
	// ref()s become state properties
	const products = ref([
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
	]);
	const order = ref(new Array());

	// computed()s become getters
	const totalOrder = computed(() => {
		return order.value.length
			? order.value
				.map((product) => product.priceClient * product.quantity)
				.reduce((accumulator, price) => (accumulator += price))
				.toLocaleString()
			: 0;
	});

	// function()s become actions
	function addProduct(productToAdd) {
		const productIndex = order.value.findIndex((product) => product.name === productToAdd.name);

		if (productIndex != -1) {
			order.value[productIndex].quantity = productToAdd.quantity;
		} else {
			order.value.push(productToAdd);
		}
	}

	function removeProduct(productToRemove) {
		order.value = order.value.filter((product) => product.name !== productToRemove.name);
		// const productIndex = order.value.findIndex((product) => product.name === productToAdd.name);

		// if (productIndex != -1) {
		// 	order.value[productIndex].quantity = productToAdd.quantity;
		// } else {
		// 	order.value.push(productToAdd);
		// }
	}

	return {
		products,
		order,
		totalOrder,
		addProduct,
		removeProduct,
	};
});
