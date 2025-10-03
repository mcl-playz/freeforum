<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title></title>
</svelte:head>

<div class="bg-brand-dark overflow-hidden mt-0 h-screen">
	<div class="box-rounded bg-brand-neutral flex items-center justify-between p-3">
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
	<div class="box-rounded bg-brand-neutral">
		{@render children?.()}
	</div>
</div>
