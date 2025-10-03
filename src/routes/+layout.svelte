<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title></title>
</svelte:head>

<div class="bg-brand-dark pt-4 h-screen">
	<div class="mt-0 box-rounded flex items-center justify-between p-3">
		<div class="flex items-center space-x-4 ml-3">
			<a class="hover:underline" href="/">Home</a>
			<a class="hover:underline" href="/test">Test</a>
		</div>
		<h1 class="text-center flex-1 font-bold">FreeForum</h1>
		<div class="flex items-center space-x-2">
			<button class="btn" onclick={() => {document.location.href="/signin"}}>Login</button>
			<button class="btn" onclick={() => {document.location.href="/signup"}}>Sign Up</button>
		</div>
	</div>
	<div>
		{@render children?.()}
	</div>
</div>
