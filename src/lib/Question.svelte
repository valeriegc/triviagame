<script>
	import { page } from '$app/stores';
	import { questionNumber } from '$lib/stores.js';
</script>

<div class="question">
	<h1>Question {$questionNumber + 1}:</h1>
	{$page.data.questions[$questionNumber].question}
</div>

<style>
	.question {
		height: 120px;
		width: 600px;
		color: black;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		font-size: large;
		background-color: white;
		padding-top: 20px;
	}
	h1 {
		font-size: large;
	}
</style>
