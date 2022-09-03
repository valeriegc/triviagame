<script>
	import Grid from '$lib/Grid.svelte';
	import Question from '$lib/Question.svelte';
	import GameNav from '../lib/GameNav.svelte';
</script>

<div class="topWrapper">
	<h1>Programming trivia game</h1>
	<GameNav />
</div>
<div class="centralWrapper">
	<Question />
	<Grid />
</div>

<style>
	.topWrapper {
		display: flex;
		justify-content: flex-end;
		gap: 20%;
		margin-bottom: 0;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	.centralWrapper {
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 0;
	}
</style>
