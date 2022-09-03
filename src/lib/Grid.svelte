<script>
	let questions = [1, 2, 3, 4];
</script>

<div class="grid">
	{#each questions as question}
		<div class="questionBox">Question</div>
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
