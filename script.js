// async top-level because fetch is async
(async () => {

	// const flashCards = document.getElementById("FlashCards");
	const res = await fetch('http://localhost:3000/')
	let cards = await res.json();

	const flashCards = cards.map(card => `<a href='/flashcard/?slug=` + card.slug + `' class='flashcard'>` + card.name + `</a>`)

	document.getElementById("FlashCards").innerHTML = flashCards;
})()
