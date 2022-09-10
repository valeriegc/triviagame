<script>
	import Start from './Start.svelte';
	import Game from './Game.svelte';
	import End from './End.svelte';
	import { gameState } from '../lib/stores.js';
</script>

<div class="centralWrapper">
	<div class="info">
		{#if $gameState == 0}
			<Start />
		{:else if $gameState == 1}
			<Game />
		{:else}
			<End />
		{/if}
	</div>
</div>

<style>
	.centralWrapper {
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 0;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		text-align: center;
		background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #004d7a, #051937);
	}
	.info {
		padding: 20px;
		height: 460px;
		width: 600px;
		border-radius: 20px;
		box-shadow: rgba(0, 0, 0, 0.25) 1.95px 1.95px 2.6px;
		background-color: white;
		opacity: 0.7;
	}
</style>
