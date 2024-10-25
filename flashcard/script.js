(async () => {
    console.log(location.href)
    const res = await fetch(`http://localhost:3000/flashcard/?name=something`)
    const yay = await res.json()

    const parsed = JSON.parse(yay)
    // set title
    document.getElementById("title").innerHTML = parsed.name

    document.getElementById("start-game").setAttribute('href', '/flashcard/start/?name=something')

})()