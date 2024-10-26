(async () => {
    const search = location.search
    const res = await fetch(`http://localhost:3000/flashcard/${search}`)
    let flashcard = await res.json()

    flashcard = JSON.parse(flashcard)

    // set title
    document.getElementById("title").innerHTML = flashcard.name

    // get
    const questions = flashcard.questions
    const questionsElArr = questions.map(question => `
        <div class="flashcard">
            <p>${question.q}</p>
            <p>${question.a}</p>
        </div>
        `)
    console.log(questionsElArr)
    document.getElementById("questions").innerHTML = questionsElArr.join('');

    document.getElementById("start-game").setAttribute('href', 'start/' + search)

})()