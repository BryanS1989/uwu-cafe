<script setup lang="ts">
import { useProductsStore } from '@/stores/ProductsStore.ts';
import { useRouter } from 'vue-router';
import { ref, watch, computed } from 'vue';
import ProductCategory from '../product/ProductCategory.vue';

const store = useProductsStore();
const router = useRouter();

const discount = ref(store.discount);

function newClient() {
	store.newOrder();
	router.push({ name: 'home' });
}

const storeDiscount = computed(() => store.discount);

const productsOrder = computed(() => store.order.filter((product) => product.category !== 'Packs'));
const packsOrder = computed(() => store.order.filter((product) => product.category === 'Packs'));

watch(storeDiscount, (newStoreDiscount) => {
	discount.value = newStoreDiscount;
});
</script>

<template>
	<div
		v-if="store.order.length"
		class="flex flex-col justify-center items-center gap-8"
	>
		<div class="flex flex-col justify-around items-center gap-4 w-full md:w-1/2">
			<section
				class="w-full flex justify-between items-center text-gray-200 bg-stone-800 rounded-lg border-2 p-1 px-4"
			>
				<p class="text-xl font-extrabold">Total</p>
				<p class="text-xl text-right pt-2 pb-1">
					<span class="font-extrabold">{{
						`${store.totalOrderWithDiscount.toLocaleString()} $`
					}}</span>
				</p>
			</section>

			<section
				class="w-full flex justify-between items-center bg-stone-800 rounded-lg border-2 border-pink-400 p-1 px-4"
			>
				<p class="text-xl font-extrabold">Beneficios</p>
				<p class="text-lg text-right pt-2 pb-1">
					<span>{{
						`${(store.totalOrderWithDiscount - store.totalUwu).toLocaleString()} $`
					}}</span>
				</p>
			</section>
			<section
				class="w-full flex justify-between items-center rounded-lg border-2 border-dashed border-pink-400 p-1 px-4"
			>
				<p class="text-xl font-extrabold">Descuento</p>
				<div>
					<input
						type="number"
						v-model.number="discount"
						placeholder="0"
						class="w-15 h-10"
						min="0"
						max="100"
						@input="store.setDiscount(discount)"
					/>
					<span> % </span>
				</div>
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
				<template v-for="(pack, packIndex) in packsOrder">
					<template
						v-for="(product, indexSubProduct) in pack.subProducts"
						:key="`${packIndex}-${indexSubProduct}`"
					>
						<tr class="text-center text-xs even:bg-stone-700">
							<td class="text-left">{{ product.name }}</td>
							<td>{{ `x ${product.quantity * pack.quantity}` }}</td>
							<td>{{ `${product.priceUwu} $` }}</td>
							<td>{{ `${product.priceClient} $` }}</td>
							<td>
								{{
									`${(
										product.priceClient *
										(product.quantity * pack.quantity)
									).toLocaleString()} $`
								}}
							</td>
							<td
								v-if="indexSubProduct === 0"
								:rowspan="pack.subProducts.length"
							>
								<button
									class="flex justify-center items-center w-full rounded-lg"
									@click="store.removeProduct(pack)"
								>
									<font-awesome-icon
										:icon="['fas', 'xmark']"
										size="lg"
										class="text-red-500"
									/>
								</button>
							</td>
						</tr>
					</template>
				</template>
				<tr
					class="text-center text-xs even:bg-stone-700"
					v-for="(product, index) in productsOrder"
					:key="index"
				>
					<td class="text-left">{{ product.name }}</td>
					<td>{{ `x ${product.quantity}` }}</td>
					<td>{{ `${product.priceUwu} $` }}</td>
					<td>{{ `${product.priceClient} $` }}</td>
					<td>
						{{ `${(product.priceClient * product.quantity).toLocaleString()} $` }}
					</td>
					<td>
						<button
							class="flex justify-center items-center w-full rounded-lg"
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
				<tr class="p-1 text-center bg-stone-800 text-pink-500 h-10">
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
