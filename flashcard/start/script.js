(async () => {
	let curIndex = 0;
	let correctAnswers = 0;

	const search = location.search;

	// TODO: fetch the correct information as needed, and redirect if fetch is null
	// hint: check other script.js files

	const questionsList = flashcard.questions;
	const question = document.getElementById("question");
	// TODO: set question.innerHTML to the "q" property of the first element in questionsList

	// attach event listener
	document.getElementById("question-form").addEventListener("submit", handleSubmit);

	function handleSubmit(e) {
		// TODO: how do I stop the form submission from triggering a full page reload?
		const correctAnswer = questionsList[curIndex].a;
		const userAnswer = new FormData(e.target).get("answer");

		// user feedback
		// TODO: check if correctAnswer is the same as userAnswer. Tell the user if they are correct,
		// and tell the user the correct answer if they're wrong
		// hint: use alert() for user feedback

		// increment index, reset form and new question
		curIndex++;
		if (curIndex !== questionsList.length) {
			// TODO: set the #question to show the current question from questionsList
			document.getElementById("question-form").reset();
		} else {
			// TODO: show final result and redirect to home
			location.href = location.origin;
		}
	}
})();
