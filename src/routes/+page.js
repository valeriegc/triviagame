export const load = async ({ fetch }) => {
	const response = await fetch('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json');
	const questions = await response.json();
	return {
		questions
	};
};
