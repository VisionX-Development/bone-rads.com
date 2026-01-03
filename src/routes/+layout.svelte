<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { client } from '$lib/appwrite';

	let { children } = $props();

	onMount(() => {
		client.ping();
	});
</script>

<div class="app-wrapper">
	<Header />
	<main class="main-content">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.app-wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.main-content {
		flex: 1;
	}
</style>
