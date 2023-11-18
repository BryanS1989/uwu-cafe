<script setup lang="ts">
import { useProductsStore } from '@/stores/ProductsStore.ts';
import { useRouter } from 'vue-router';

const store = useProductsStore();
const router = useRouter();

function newClient() {
	store.newOrder();
	router.push({ name: 'home' });
}
</script>

<template>
	<div
		v-if="store.order.length"
		class="flex flex-col justify-center items-center gap-8"
	>
		<div class="flex justify-around items-center gap-4 w-full">
			<section
				class="w-2/3 flex flex-col justify-end items-center text-pink-400 bg-stone-800 rounded-lg border-2 border-pink-400 p-1 px-4"
			>
				<p class="text-xl font-extrabold">Total</p>
				<p class="text-lg text-right pt-2 pb-1">
					<span>{{ `${store.totalOrder.toLocaleString()} $` }}</span>
				</p>
			</section>

			<section
				class="w-1/3 flex flex-col justify-end items-center bg-stone-800 rounded-lg border-2 border-dashed border-pink-400 p-1 px-4"
			>
				<p class="text-xl font-extrabold">Beneficios</p>
				<p class="text-lg text-right pt-2 pb-1">
					<span>{{ `${(store.totalOrder - store.totalUwu).toLocaleString()} $` }}</span>
				</p>
			</section>
		</div>

		<table class="flex-1 border-separate border-spacing-0 table-auto w-full text-sm">
			<thead>
				<tr class="font-extrabold bg-stone-800 text-pink-400 text-center h-10">
					<th class="text-left">Producto</th>
					<th>Cantidad</th>
					<th>UwU</th>
					<th>Precio</th>
					<th>Total</th>
					<th></th>
				</tr>
			</thead>

			<tbody>
				<tr
					class="text-center text-xs"
					v-for="(product, index) in store.order"
					:key="index"
				>
					<td class="text-left">{{ product.name }}</td>
					<td>{{ `x ${product.quantity}` }}</td>
					<td>{{ `${product.priceUwu} $` }}</td>
					<td>{{ `${product.priceClient} $` }}</td>
					<td>{{ `${(product.priceClient * product.quantity).toLocaleString()} $` }}</td>
					<td>
						<button
							class="flex justify-center items-center w-5 rounded-lg"
							@click="store.removeProduct(product)"
						>
							<font-awesome-icon
								:icon="['fas', 'xmark']"
								size="lg"
								class="text-red-500"
							/>
						</button>
					</td>
				</tr>
			</tbody>

			<tfoot>
				<tr class="p-1 text-center bg-stone-700 text-pink-500 h-10">
					<td
						colspan="2"
						class="text-left text-lg font-extrabold"
					>
						Total
					</td>
					<td>{{ `${store.totalUwu.toLocaleString()} $` }}</td>
					<td></td>
					<td class="font-bold">{{ `${store.totalOrder.toLocaleString()} $` }}</td>
					<td></td>
				</tr>
			</tfoot>
		</table>

		<button
			class="flex flex-col justify-end items-center text-pink-400 bg-stone-800 rounded-full border-2 border-pink-400 py-4 px-8 hover:text-pink-200 hover:border-pink-200 hover:bg-stone-700"
			@click="newClient"
		>
			<p class="text-xl font-extrabold">Nuevo cliente</p>
		</button>
	</div>

	<div
		v-else
		class="w-full h-60 flex justify-around items-center"
	>
		<h3 class="text-center">Aún no has añadido ningún producto</h3>
	</div>
</template>

<style scoped>
thead th:first-child {
	@apply rounded-tl-xl pl-2;
}

thead th {
	@apply font-bold py-1;
}

thead th:last-child {
	@apply rounded-tr-xl;
}

tbody td {
	@apply font-thin italic py-2;
}

tfoot td:first-child {
	@apply rounded-bl-xl pl-2;
}

tfoot td {
	@apply border-t-2 border-dashed border-pink-400 py-1;
}

tfoot td:last-child {
	@apply rounded-br-xl;
}
</style>
