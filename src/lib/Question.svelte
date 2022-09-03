<script>
	import { page } from '$app/stores';
	import { questionNumber } from '$lib/stores.js';
</script>

<div class="question">Question: {$page.data.questions[$questionNumber].question}</div>

<style>
	.question {
		height: 160px;
		width: 600px;
		color: black;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		font-size: large;
		background-color: beige;
		border: black solid 2px;
		border-bottom: transparent;
	}
</style>
