<script>
	import Start from './Start.svelte';
	import Game from './Game.svelte';
	import End from './End.svelte';
	import { gameState } from '$lib/stores.js';
</script>

{#if $gameState == 0}
	<Start />
{:else if $gameState == 1}
	<Game />
{:else}
	<End />
{/if}
