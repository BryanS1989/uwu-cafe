<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header
		class="flex flex-col justify-around items-center gap-4 pb-4 border-b border-dashed border-pink-400"
	>
		<img
			alt="UwU Cafe logo"
			class="logo"
			src="@/assets/img/logo.png"
			width="400"
			height="400"
		/>

		<nav class="flex justify-around items-center gap-16">
			<RouterLink to="/products">
				<a class="flex justify-around items-center gap-2">
					<font-awesome-icon
						:icon="['fas', 'utensils']"
						size="lg"
					/>
					Products
				</a>
			</RouterLink>
			<RouterLink to="/order">
				<a class="flex justify-around items-center gap-2">
					<font-awesome-icon
						:icon="['fas', 'file-signature']"
						size="lg"
					/>
					Order
				</a>
			</RouterLink>
		</nav>
	</header>

	<RouterView />
</template>
