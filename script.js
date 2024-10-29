// async top-level because fetch is async
(async () => {

	const res = await fetch('http://localhost:3000/')
	let flashcards = await res.json();

	const flashcardLinks = flashcards.map(card => `<a href='/flashcard/?slug=` + card.slug + `' class='flashcard'>` + card.name + `</a>`)

	// TODO: set #flashcards.innerHTML to flashcardLinks
})()
