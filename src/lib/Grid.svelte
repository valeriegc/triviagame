<script>
	let questions = ['a', 'b', 'c', 'd'];
	import { questionNumber } from '$lib/stores.js';
	import { page } from '$app/stores';

	function check(i) {
		console.log($page.data.questions[$questionNumber].answer);
		console.log(questions[i]);
		if (questions[i] == $page.data.questions[$questionNumber].answer) {
			$questionNumber += 1;
		} else {
		}
	}
</script>

<div class="grid">
	{#each questions as question, i}
		<button class="questionBox" on:click={() => check(i)}
			>{$page.data.questions[$questionNumber].choices[question]}</button
		>
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
	button {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	.questionBox {
		border: black solid 1px;
	}
</style>
