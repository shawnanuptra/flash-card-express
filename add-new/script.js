// attach handleSubmit
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function slugify(str) {
	// * EXTEND: does this work with all names? hint: what about non-alphanumerics? or symbols?
	return str.trim().toLowerCase().replaceAll(" ", "-");
}

async function handleSubmit(e) {
	// TODO: prevent full page reload

	const formData = new FormData(e.target);

	// append slug
	// TODO: set slug as a slugified name. e.g. if name = 'Hello World!', slug = 'hello-world'
	formData.set("slug", slug);

	// convert data
	const data = new URLSearchParams(formData);

	// fetch to the server
	// TODO: send `data` as POST request to '/add-new' endpoint

	// TODO: alert user that the new Flashcard has been added

	// redirect to homeapge
	location.pathname = "/";
}

function handleClick() {
	const formQuestions = document.getElementById("form-questions");
	const question = document.createElement("label");
	const answer = document.createElement("label");
	// TODO: set question and answer innerHTML into the label value and the correct input
	question.innerHTML = ``;
	answer.innerHTML = ``;

	// TODO: add question and answer into formQuestions
}
