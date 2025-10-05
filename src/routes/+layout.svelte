<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>FreeForum</title>
</svelte:head>

<div class="bg-brand-dark pt-4 h-screen">
	<div class="mt-0 box-rounded flex items-center justify-between p-3 relative">
		<div class="flex items-center space-x-4 ml-3">
			<a class="hover:underline" href="/">Home</a>
			<a class="hover:underline" href="/test">Test</a>
		</div>
		<h1 class="absolute left-1/2 transform -translate-x-1/2 font-bold">FreeForum</h1>
		<div class="flex items-center space-x-2">
			<button class="muted" onclick={() => {document.location.href="/signin"}}>Login</button>
			<button class="muted" onclick={() => {document.location.href="/signup"}}>Sign Up</button>
		</div>
	</div>
	<div>
		{@render children?.()}
	</div>
</div>
