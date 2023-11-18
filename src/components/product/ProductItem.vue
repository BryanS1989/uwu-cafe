<script setup lang="ts">
import { ref } from 'vue';
import { useProductsStore } from '@/stores/ProductsStore.ts';

const store = useProductsStore();

// props
const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
});

const quantity = ref(null);
const isAdded = ref(false);

function manageProduct() {
	console.log(quantity.value);
	if (quantity.value) {
		if (!isAdded.value) {
			store.addProduct({ ...props.product, quantity: quantity.value });
			setIsAdded(true);
		} else {
			store.removeProduct(props.product);
			quantity.value = 0;
			setIsAdded(false);
		}
	}
}

function updateProduct(newQuantity) {
	if (isAdded.value) {
		store.addProduct({ ...props.product, quantity: quantity.value });
	}
}

function setIsAdded(isAddedNewValue) {
	isAdded.value = isAddedNewValue;
}
</script>

<template>
	<div
		class="flex justify-end items-center gap-2 px-4 py-2 hover:bg-stone-700 hover:rounded-lg"
		:class="[{ 'bg-stone-800 rounded-lg': isAdded }]"
	>
		<div class="flex-1 truncate whitespace-nowrap">{{ props.product?.name }}</div>
		<div class="w-15 whitespace-nowrap">{{ props.product?.priceClient }} $</div>
		<input
			type="number"
			v-model.number="quantity"
			placeholder="0"
			class="w-15 h-10"
			min="0"
			max="999"
			@input="updateProduct"
		/>
		<button
			class="flex justify-center items-center w-10 rounded-lg p-2 disabled:opacity-20"
			:disabled="!quantity"
			@click="manageProduct"
		>
			<font-awesome-icon
				:icon="['fas', !isAdded ? 'cart-plus' : 'xmark']"
				size="xl"
			/>
		</button>
	</div>
</template>
