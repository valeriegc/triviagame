<script>
	import { questionNumber, correctAtFirst } from './stores.js';
	import { page } from '$app/stores';
	import { gameState } from './stores.js';
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
		<button id={questions[i]} on:click={() => check(i)}>
			<div class="text">{$page.data.questions[$questionNumber].choices[question]}</div>
		</button>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		height: 300px;
		width: 600px;
		grid-template-columns: 1fr 1fr;
		gap: 5px;
	}
	button {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		cursor: pointer;
		background-color: #3cb2bc;
		border-radius: 20px;
		border: 0;
		outline: 0;
		padding: 50px;
	}
	.text {
		transition: all 0.2s ease-in-out;
	}
	button:hover .text {
		transform: scale(1.4);
	}
	:global(.falseAnswer) {
		background-color: rgb(215, 121, 121) !important;
	}
	:global(.trueAnswer) {
		background-color: lightgreen !important;
	}
</style>
