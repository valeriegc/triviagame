<script>
	import { questionNumber, correctAtFirst } from '$lib/stores.js';
	import { page } from '$app/stores';
	import { gameState } from '$lib/stores.js';
	$: choices = $page.data.questions[$questionNumber].choices;
	$: questions = Object.keys(choices);

	function finishGame() {
		$gameState += 1;
	}
	function check(i) {
		let element = document.getElementById(questions[i]);
		let correct = document.getElementsByClassName('trueAnswer');
		let failed = document.getElementsByClassName('falseAnswer');

		if (questions[i] == $page.data.questions[$questionNumber].answer) {
			element.classList.add('trueAnswer');
			if (failed.length == 0) {
				$correctAtFirst += 1;
			}
			if ($page.data.questions.length - 1 == $questionNumber) {
				finishGame();
			}
			setTimeout(() => {
				[...correct].forEach((e) => e.classList.remove('trueAnswer'));
				[...failed].forEach((e) => e.classList.remove('falseAnswer'));
				$questionNumber += 1;
			}, 1000);
		} else {
			element.classList.add('falseAnswer');
		}
	}
</script>

<div class="grid">
	{#each questions as question, i}
		<button class="questionBox" id={questions[i]} on:click={() => check(i)}>
			<div class="text">{$page.data.questions[$questionNumber].choices[question]}</div>
		</button>
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
		cursor: pointer;
		background-color: white;
	}
	.text {
		transition: all 0.2s ease-in-out;
	}
	button:hover .text {
		transform: scale(1.4);
	}
	.questionBox {
		border: black solid 1px;
	}
	:global(.falseAnswer) {
		background-color: red !important;
	}
	:global(.trueAnswer) {
		background-color: lightgreen !important;
	}
</style>
