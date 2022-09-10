<script>
	import { gameState } from '$lib/stores.js';

	function launch() {
		$gameState += 1;
	}
</script>

<div class="centralWrapper">
	<div class="info">
		<h1>Programming Trivia Game</h1>
		<p>In this programming trivia game, you will be presented with 32 multiple choice questions.</p>
		Once you press "start the game" below, the game will automatically start. In the end of the game
		you will be given both your score.
		<p>
			Should you answer a question wrong, the question will turn red. After each wrong answer, you
			have the ability to pick a new alternative. You will not be punished for wrong answers, but
			you only gain points for the answers that you get correct on the first try. In order to
			proceed in the game, you need to find the correct answer, after of which, the next question
			will show.
		</p>
		<p>Click the button below to start the game.</p>
		<button on:click={() => launch()}>Start</button>
	</div>
</div>

<style>
	p {
		padding: 2.5%;
	}
	button {
		width: 150px;
		height: 40px;
		font-weight: bold;
		font-size: 14px;
		padding: 10px;
		border: none;
		outline: none;
		cursor: pointer;
		text-transform: uppercase;
		border-radius: 5px;
		background: #3daaac;
		color: #fff;
	}
	button:hover {
		background: hsl(181, 48%, 56%);
	}
</style>
