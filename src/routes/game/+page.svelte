<script>
	import Grid from '$lib/Grid.svelte';
	import Question from '$lib/Question.svelte';
</script>

<div class="centralWrapper">
	<Question />
	<Grid />
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
	}
</style>
