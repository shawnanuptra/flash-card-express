(async () => {
    let curIndex = 0;
    let correctAnswers = 0;

    const search = location.search

    // get the flashcard information
    const res = await fetch(`http://localhost:3000/flashcard/${search}`)

    // show error msg and redirect if 404
    if (res.status === 404) {
        alert('flashcard not found')
        location.href = location.origin
    }

    // make json into js object with JSON.parse
    let flashcard = JSON.parse(await res.json())

    const questionsList = flashcard.questions
    const question = document.getElementById("question")
    question.innerHTML = questionsList[0].q

    // attach event listener
    document.getElementById("question-form").addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
        e.preventDefault();
        const correctAnswer = questionsList[curIndex].a
        const userAnswer = new FormData(e.target).get('answer')

        // user feedback
        if (correctAnswer === userAnswer) {
            correctAnswers++;
            alert('Correct!')
        } else {
            alert('Wrong! The correct answer is ' + correctAnswer)
        }

        // increment index, reset form and new question 
        curIndex++
        if (curIndex !== questionsList.length) {
            question.innerHTML = questionsList[curIndex].q
            document.getElementById('question-form').reset()
        } else {
            // show final result and redirect to home
            alert(`Finished playing!\nYour score: ${correctAnswers}/${questionsList.length}`)
            location.href = location.origin
        }
    }
})()