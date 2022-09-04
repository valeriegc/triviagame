<script>
	let questions = ['a', 'b', 'c', 'd'];
	import { questionNumber, correctAtFirst } from '$lib/stores.js';
	import { page } from '$app/stores';

	function check(i) {
		let element = document.getElementById(questions[i]);
		let correct = document.getElementsByClassName('trueAnswer');
		let failed = document.getElementsByClassName('falseAnswer');
		if (questions[i] == $page.data.questions[$questionNumber].answer) {
			element.classList.add('trueAnswer');
			setTimeout(() => {
				if (failed.length == 0) {
					$correctAtFirst += 1;
				}
				[...correct].forEach((e) => e.classList.remove('trueAnswer'));
				[...failed].forEach((e) => e.classList.remove('falseAnswer'));
				$questionNumber += 1;
				console.log($correctAtFirst);
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
		background-color: red;
	}
	:global(.trueAnswer) {
		background-color: lightgreen;
	}
</style>
