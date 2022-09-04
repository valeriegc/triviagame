<script>
	import GameNav from '../lib/GameNav.svelte';
	import Grid from '../lib/Grid.svelte';
	import Page from './game/+page.svelte';
</script>

<div class="centralWrapper">
	<div class="info">
		<h1>Programming Trivia Game</h1>
		<p>In this programming trivia game, you will be presented with 32 multiple choice questions.</p>
		Once you press "begin" below, the game and a timer will automatically start. In the end of the game
		you will be given both your score and the respective time.
		<p>
			Should you answer a question wrong, the question will turn red. After each wrong answer, you
			have the ability to pick a new alternative. You will not be punished for wrong answers, but
			you only gain points for the answers that you get correct on the first try. In order to
			proceed in the game, you need to find the correct answer, after of which, the next question
			will show.
		</p>
		<p>Click on the button below to start the game.</p>
		<a href="/game"><button>Start the game</button></a>
	</div>
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
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		text-align: center;
	}
	.info {
		height: 460px;
		width: 600px;
		border: black solid 1px;
	}

	p {
		padding: 2.5%;
	}
	button {
		cursor: pointer;
	}
</style>
