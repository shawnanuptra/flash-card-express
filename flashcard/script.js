(async () => {
	const search = location.search;

	const res = await fetch(`http://localhost:3000/flashcard/${search}`);

	// show error msg and redirect if 404
	if (res.status === 404) {
		alert("flashcard not found");
		location.href = location.origin;
	}

	let flashcard = await res.json();
	flashcard = JSON.parse(flashcard);

	// TODO: set #title value to the name of flashcard

	// get
	const questions = flashcard.questions;
	const questionsElArr = questions.map(
		(question) => `
		<div class="flashcard">
			<p>${question.q}</p>
			<p>${question.a}</p>
		</div>
		`,
	);
	document.getElementById("questions").innerHTML = questionsElArr.join("");

	// TODO: set #start-game href to be 'start/{search}'
})();
