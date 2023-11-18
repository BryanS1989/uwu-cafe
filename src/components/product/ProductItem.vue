<script setup lang="ts">
import { ref } from 'vue';

// props
const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
});

const quantity = ref(null);
const added = ref(false);

const emit = defineEmits(['add', 'substract']);

function addProduct() {
	console.log(quantity.value);
	if (quantity.value) {
		if (!added.value) {
			emit('add', { ...props.product, quantity: quantity.value });
		} else {
			emit('substract', { ...props.product, quantity: quantity.value });
		}
		toogleAdded();
	}
}

function toogleAdded() {
	added.value = !added.value;
}
</script>

<template>
	<div
		class="flex justify-end items-center gap-2 px-4 py-2 hover:bg-stone-700 hover:rounded-lg"
		:class="[{ 'bg-stone-800 rounded-lg': added }]"
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
		/>
		<button
			class="flex justify-center items-center w-10 rounded-lg p-2 disabled:opacity-20"
			:disabled="!quantity"
			@click="addProduct"
		>
			<font-awesome-icon
				:icon="['fas', !added ? 'cart-plus' : 'xmark']"
				size="xl"
			/>
		</button>
	</div>
</template>
