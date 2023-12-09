import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useProductsStore = defineStore('products', () => {
	// ref()s become state properties
	const products = ref([
		{
			name: 'Pizza + Cocacola',
			category: 'Packs',
			priceClient: 2800,
			priceUwu: 1060,
			subProducts: [
				{
					name: 'Pizza a elegir',
					category: 'Comida',
					quantity: 10,
					priceClient: 60,
					priceUwu: 6,
				},
				{
					name: 'CocaCola',
					category: 'Bebidas',
					quantity: 10,
					priceClient: 220,
					priceUwu: 100,
				},
			],
		},
		{
			name: 'Pizza + Agua',
			category: 'Packs',
			priceClient: 2600,
			priceUwu: 560,
			subProducts: [
				{
					name: 'Pizza a elegir',
					category: 'Comida',
					quantity: 10,
					priceClient: 60,
					priceUwu: 6,
				},
				{
					name: 'Agua',
					category: 'Bebidas',
					quantity: 10,
					priceClient: 200,
					priceUwu: 50,
				},
			],
		},
		{
			name: 'Pizza Champiñones',
			category: 'Comida',
			priceClient: 60,
			priceUwu: 6,
		},
		{
			name: 'Pizza Peperonni',
			category: 'Comida',
			priceClient: 60,
			priceUwu: 6,
		},
		{
			name: 'Pizza Doble Pepperoni',
			category: 'Comida',
			priceClient: 60,
			priceUwu: 6,
		},
		{
			name: 'Pizza Pesto',
			category: 'Comida',
			priceClient: 60,
			priceUwu: 6,
		},
		{
			name: 'Yatekomo',
			category: 'Comida',
			priceClient: 60,
			priceUwu: 15,
		},
		{
			name: 'Agua',
			category: 'Bebidas',
			priceClient: 200,
			priceUwu: 50,
		},
		{
			name: 'Café',
			category: 'Bebidas',
			priceClient: 70,
			priceUwu: 5,
		},
		{
			name: 'CocaCola',
			category: 'Bebidas',
			priceClient: 220,
			priceUwu: 100,
		},
		{
			name: 'Estrella',
			category: 'Bebidas',
			priceClient: 250,
			priceUwu: 100,
		},
		{
			name: 'Voll-Damm',
			category: 'Bebidas',
			priceClient: 300,
			priceUwu: 100,
		},
		{
			name: 'Litrona',
			category: 'Bebidas',
			priceClient: 600,
			priceUwu: 300,
		},
		{
			name: 'Cóctel',
			category: 'Bebidas',
			priceClient: 250,
			priceUwu: 100,
		},
		{
			name: 'Caipiriña',
			category: 'Bebidas',
			priceClient: 250,
			priceUwu: 100,
		},
		{
			name: 'Cubata de Ron',
			category: 'Bebidas',
			priceClient: 250,
			priceUwu: 100,
		},
		{
			name: 'Cubata de Tequila',
			category: 'Bebidas',
			priceClient: 250,
			priceUwu: 100,
		},
		{
			name: 'Cubata de Vodka',
			category: 'Bebidas',
			priceClient: 250,
			priceUwu: 100,
		},
		{
			name: 'Cubata de Whisky',
			category: 'Bebidas',
			priceClient: 250,
			priceUwu: 100,
		},
		{
			name: 'Mojito',
			category: 'Bebidas',
			priceClient: 250,
			priceUwu: 80,
		},
		{
			name: 'Batido de Café',
			category: 'Batidos',
			priceClient: 200,
			priceUwu: 100,
		},
		{
			name: 'Batido de Cereza',
			category: 'Batidos',
			priceClient: 200,
			priceUwu: 100,
		},
		{
			name: 'Batido de Chicle',
			category: 'Batidos',
			priceClient: 200,
			priceUwu: 100,
		},
		{
			name: 'Batido de Chocolate',
			category: 'Batidos',
			priceClient: 200,
			priceUwu: 100,
		},
		{
			name: 'Batido Extra de Chocolate',
			category: 'Batidos',
			priceClient: 200,
			priceUwu: 100,
		},
		{
			name: 'Batido de Frambuesa',
			category: 'Batidos',
			priceClient: 200,
			priceUwu: 100,
		},
		{
			name: 'Batido de Fresa',
			category: 'Batidos',
			priceClient: 200,
			priceUwu: 100,
		},
		{
			name: 'Batido de Limón',
			category: 'Batidos',
			priceClient: 200,
			priceUwu: 100,
		},
		{
			name: 'Batido de Menta',
			category: 'Batidos',
			priceClient: 200,
			priceUwu: 100,
		},
		{
			name: 'Batido de Vainilla',
			category: 'Batidos',
			priceClient: 200,
			priceUwu: 100,
		},
		{
			name: 'Batido Frapé',
			category: 'Batidos',
			priceClient: 200,
			priceUwu: 100,
		},
		{
			name: 'Batido Salado',
			category: 'Batidos',
			priceClient: 200,
			priceUwu: 100,
		},
		{
			name: 'Helado de Amor',
			category: 'Helados',
			priceClient: 70,
			priceUwu: 15,
		},
		{
			name: 'Helado de Cereza',
			category: 'Helados',
			priceClient: 70,
			priceUwu: 15,
		},
		{
			name: 'Helado de Chocolate',
			category: 'Helados',
			priceClient: 70,
			priceUwu: 15,
		},
		{
			name: 'Helado de Frambuesa',
			category: 'Helados',
			priceClient: 70,
			priceUwu: 15,
		},
		{
			name: 'Helado de Fresa',
			category: 'Helados',
			priceClient: 70,
			priceUwu: 15,
		},
		{
			name: 'Helado de Limón',
			category: 'Helados',
			priceClient: 70,
			priceUwu: 15,
		},
		{
			name: 'Helado de Nuez',
			category: 'Helados',
			priceClient: 70,
			priceUwu: 15,
		},
		{
			name: 'Helado de Pistacho',
			category: 'Helados',
			priceClient: 70,
			priceUwu: 15,
		},
		{
			name: 'Helado de Trozos de Chocolate',
			category: 'Helados',
			priceClient: 70,
			priceUwu: 15,
		},
		{
			name: 'Donut',
			category: 'Postres',
			priceClient: 100,
			priceUwu: 50,
		},
		{
			name: 'Donut Caramelo',
			category: 'Postres',
			priceClient: 100,
			priceUwu: 50,
		},
		{
			name: 'Donut de Chocolate',
			category: 'Postres',
			priceClient: 100,
			priceUwu: 50,
		},
		{
			name: 'Galleta de Helado',
			category: 'Postres',
			priceClient: 100,
			priceUwu: 15,
		},
		{
			name: 'Piruleta Amarilla y Blanca',
			category: 'Piruletas',
			priceClient: 10,
			priceUwu: 1,
		},
		{
			name: 'Piruleta Amarilla y Rosa',
			category: 'Piruletas',
			priceClient: 10,
			priceUwu: 1,
		},
		{
			name: 'Piruleta Amarilla y Verde',
			category: 'Piruletas',
			priceClient: 10,
			priceUwu: 1,
		},
		{
			name: 'Piruleta Roja y Blanca',
			category: 'Piruletas',
			priceClient: 10,
			priceUwu: 1,
		},
		{
			name: 'Piruleta Rosa y Blanca',
			category: 'Piruletas',
			priceClient: 10,
			priceUwu: 1,
		},
		{
			name: 'Piruleta Espiral Amarilla',
			category: 'Piruletas',
			priceClient: 20,
			priceUwu: 1,
		},
		{
			name: 'Piruleta Espiral Azul',
			category: 'Piruletas',
			priceClient: 20,
			priceUwu: 1,
		},
		{
			name: 'Piruleta Espiral Púrpura',
			category: 'Piruletas',
			priceClient: 20,
			priceUwu: 1,
		},
		{
			name: 'Piruleta Espiral Roja',
			category: 'Piruletas',
			priceClient: 20,
			priceUwu: 1,
		},
		{
			name: 'Piruleta Espiral Rosa',
			category: 'Piruletas',
			priceClient: 20,
			priceUwu: 1,
		},
		{
			name: 'Piruleta Espiral Verde',
			category: 'Piruletas',
			priceClient: 20,
			priceUwu: 1,
		},
		{
			name: 'Mechero',
			category: 'Otros',
			priceClient: 80,
			priceUwu: 1,
		},
	]);
	const categories = ref([...new Set(products.value.map((product) => product.category))]);
	const order = ref(new Array());
	const discount = ref(null);

	// computed()s become getters
	const totalOrder = computed(() => {
		return order.value.length
			? order.value
					.map((product) => product.priceClient * product.quantity)
					.reduce((accumulator, price) => (accumulator += price))
			: 0;
	});

	const totalOrderWithDiscount = computed(() => {
		return discount.value
			? totalOrder.value - totalOrder.value * (discount.value / 100)
			: totalOrder.value;
	});

	const totalUwu = computed(() => {
		return order.value.length
			? order.value
					.map((product) => product.priceUwu * product.quantity)
					.reduce((accumulator, price) => (accumulator += price))
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

		if (!order.value.length) {
			discount.value = null;
		}
	}

	function categorySelectedItems(category) {
		return order.value.filter((product) => product.category === category).length;
	}

	function productsByCategory(category) {
		return products.value.filter((product) => product.category === category);
	}

	function getOrderProduct(productToFind) {
		return order.value.find((product) => product.name === productToFind.name);
	}

	function isProductInOrder(productToFind) {
		return order.value.some((product) => product.name === productToFind.name);
	}

	function newOrder() {
		order.value = [];
		discount.value = null;
	}

	function setDiscount(discountToApply) {
		if (!discountToApply) {
			discount.value = null;
			return;
		}

		if (discountToApply >= 0 && discountToApply <= 100) {
			discount.value = discountToApply;
			return;
		}

		discount.value = null;
	}

	return {
		products,
		categories,
		order,
		discount,
		totalOrder,
		totalOrderWithDiscount,
		totalUwu,
		addProduct,
		removeProduct,
		categorySelectedItems,
		productsByCategory,
		getOrderProduct,
		isProductInOrder,
		newOrder,
		setDiscount,
	};
});
