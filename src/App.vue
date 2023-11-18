<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header class="flex flex-col justify-around items-center gap-4 pb-4 border-b">
		<img
			alt="UwU Cafe logo"
			class="logo"
			src="@/assets/img/logo.png"
			width="400"
			height="400"
		/>

		<nav class="flex justify-around items-center gap-8">
			<RouterLink to="/products">Products</RouterLink>
			<RouterLink to="/order">Order</RouterLink>
		</nav>
	</header>

	<RouterView />
</template>
