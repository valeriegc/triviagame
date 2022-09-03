<script>
	let questions = ['a', 'b', 'c', 'd'];

	import { page } from '$app/stores';
</script>

<div class="grid">
	{#each questions as question}
		<button class="questionBox">{$page.data.questions[0].choices[question]}</button>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		height: 300px;
		width: 600px;
		border: black solid 2px;
		grid-template-columns: 1fr 1fr;
	}

	.questionBox {
		border: black solid 1px;
	}
</style>
