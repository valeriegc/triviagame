<script>
	import { correctAtFirst } from '../lib/stores.js';
</script>

<div id="container">
	<h1>Congratulations! You finished the game</h1>
	<div id="innerContainer">
		<h2>You're score was:</h2>
		<div class="score">{$correctAtFirst}/39</div>
	</div>
</div>

<style>
	.score {
		font-size: 40px;
		font-weight: bolder;
	}
	#container {
		display: flex;
		flex-direction: column;
	}
	#innerContainer {
		padding-top: 10%;
		align-self: center;
		justify-self: center;
	}
</style>
