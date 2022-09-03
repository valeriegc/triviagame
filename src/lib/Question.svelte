<script>
	import { page } from '$app/stores';
</script>

<div class="question">Question:{$page.data.questions[0].question}</div>

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
