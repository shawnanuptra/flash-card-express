// async top-level because fetch is async
(async () => {

	// const flashCards = document.getElementById("FlashCards");
	const res = await fetch('http://localhost:3000/')
	let cards = await res.json();

	cards = cards.map(card => card.name)
	const flashCards = cards.map(card => `<a href='/flashcard/?name=` + card + `' class='flashcard'>` + card + `</a>`)

	document.getElementById("FlashCards").innerHTML = flashCards;
})()
