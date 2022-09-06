<script>
	import { questionNumber } from '$lib/stores.js';
	let minutes;
	let seconds;
	let totalQuestions = 32;
</script>

<div class="wrap">
	<div class="timer" />
	<p>Time:{({ minutes }, { seconds })}</p>
	<div class="questionCounter">
		<p>Current question: {$questionNumber}/{totalQuestions}</p>
	</div>
</div>

<style>
	.wrap {
		height: 100px;
		width: 300px;
		border: solid black 1px;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
</style>
