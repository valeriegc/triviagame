<script>
	let questionNum;
	let minutes;
	let seconds;
	let totalQuestions = 32;
</script>

<div class="wrap">
	<div class="timer" />
	<p>Time:{({ minutes }, { seconds })}</p>
	<div class="questionCounter">
		<p>Current question: {questionNum}/{totalQuestions}</p>
	</div>
</div>

<style>
	.wrap {
		height: 100px;
		width: 300px;
		border: solid black 1px;
		background-color: beige;
	}
</style>
