// attach handleSubmit
const form = document.getElementById("form")
form.addEventListener("submit", handleSubmit)

function slugify(str) {
    // todo: does this work with all names? hint: what about non-alphanumerics? or symbols?
    return str.trim().toLowerCase().replaceAll(' ', '-')
}

async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)

    // append slug
    const flashcardName = formData.get('name')
    const slug = slugify(flashcardName)
    formData.set('slug', slug)

    // convert data
    const data = new URLSearchParams(formData)

    // fetch to the server
    const res = await fetch('http://localhost:3000/add-new/', {
        method: 'POST',
        body: data
    })

    let flashCard = JSON.parse(await res.json())
    alert(flashCard.name + ' is added');

    // redirect to homeapge
    location.pathname = '/'
}

function handleClick() {
    const formQuestions = document.getElementById("form-questions")
    const question = document.createElement("label")
    const answer = document.createElement("label")
    question.innerHTML = `
					Question
					<input required type="text" name="questions" />
	`;
    answer.innerHTML = `
					Answer
					<input required type="text" name="answers" />
	`;
    formQuestions.append(question, answer)
}
