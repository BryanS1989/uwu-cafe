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
					category: 'Comida',
					priceClient: 60,
					priceUwu: 60,
				},
				{
					name: 'Pizza Peperonni',
					category: 'Comida',
					priceClient: 60,
					priceUwu: 60,
				},
				{
					name: 'Pizza Doble Peperonni',
					category: 'Comida',
					priceClient: 60,
					priceUwu: 60,
				},
				{
					name: 'Pizza Pesto',
					category: 'Comida',
					priceClient: 60,
					priceUwu: 60,
				},
				{
					name: 'Yatekomo',
					category: 'Comida',
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
					category: 'Bebidas',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Café',
					category: 'Bebidas',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'CocaCola',
					category: 'Bebidas',
					priceClient: 220,
					priceUwu: 60,
				},
				{
					name: 'Estrella',
					category: 'Bebidas',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Voll-Damm',
					category: 'Bebidas',
					priceClient: 300,
					priceUwu: 60,
				},
				{
					name: 'Litrona',
					category: 'Bebidas',
					priceClient: 600,
					priceUwu: 60,
				},
				{
					name: 'Cóctel',
					category: 'Bebidas',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Caipiriña',
					category: 'Bebidas',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Cubata de Ron',
					category: 'Bebidas',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Cubata de Tequila',
					category: 'Bebidas',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Cubata de Vodka',
					category: 'Bebidas',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Cubata de Whisky',
					category: 'Bebidas',
					priceClient: 250,
					priceUwu: 60,
				},
				{
					name: 'Mojito',
					category: 'Bebidas',
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
					category: 'Batidos',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Cereza',
					category: 'Batidos',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Chicle',
					category: 'Batidos',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Chocolate',
					category: 'Batidos',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Extra de Chocolate',
					category: 'Batidos',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Frambuesa',
					category: 'Batidos',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Fresa',
					category: 'Batidos',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Limón',
					category: 'Batidos',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Menta',
					category: 'Batidos',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido de Vainilla',
					category: 'Batidos',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido Frapé',
					category: 'Batidos',
					priceClient: 200,
					priceUwu: 60,
				},
				{
					name: 'Batido Salado',
					category: 'Batidos',
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
					category: 'Helados',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Cereza',
					category: 'Helados',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Chocolate',
					category: 'Helados',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Frambuesa',
					category: 'Helados',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Fresa',
					category: 'Helados',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Limón',
					category: 'Helados',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Nuez',
					category: 'Helados',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Pistacho',
					category: 'Helados',
					priceClient: 70,
					priceUwu: 60,
				},
				{
					name: 'Helado de Trozos de Chocolate',
					category: 'Helados',
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
					category: 'Postres',
					priceClient: 100,
					priceUwu: 60,
				},
				{
					name: 'Donut Caramelo',
					category: 'Postres',
					priceClient: 100,
					priceUwu: 60,
				},
				{
					name: 'Donut de Chocolate',
					category: 'Postres',
					priceClient: 100,
					priceUwu: 60,
				},
				{
					name: 'Galleta de Helado',
					category: 'Postres',
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
		const productIndex = order.value.findIndex(
			(product) => product.name === productToRemove.name
		);

		if (productIndex != -1) {
			order.value.splice(productIndex, 1);
		}
	}

	function categorySelectedItems(category) {
		return order.value.filter((product) => product.category === category).length;
	}

	return {
		products,
		order,
		totalOrder,
		addProduct,
		removeProduct,
		categorySelectedItems,
	};
});
