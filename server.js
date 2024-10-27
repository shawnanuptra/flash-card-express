import express from 'express';
import cors from 'cors'

const PORT = 3000;
const app = express();

// enable cors throughout the app
app.use(cors({
	origin: '*',
	methods: ['GET', 'POST'],
}))

app.use(express.json())
app.use(express.urlencoded())

// all the flashcards
const flashcards = [{
	name: 'First One',
	slug: 'first-one',
	questions: [
		{
			q: 'q1',
			a: 'a1',
		},
		{
			q: 'q2',
			a: 'a2',
		}]
}];

app.get('/', (req, res) => {
	// homepage. show all flash cards
	res.json(flashcards);
})

app.post('/add-new', (req, res) => {
	const name = req.body.name
	const slug = req.body.slug
	let questions = req.body.questions
	const answers = req.body.answers

	// make questions into {q: string, a: string}[]
	questions = questions.map((question, i) => ({ q: question, a: answers[i] }))

	const flashcard = {
		name: name,
		slug: slug,
		questions: questions
	}

	// add to state
	flashcards.push(flashcard)

	res.json(JSON.stringify(flashcard))
})

app.get('/flashcard', (req, res) => {
	// get name
	const slug = req.query.slug

	// find the corresponding item
	const flashcard = flashcards.find(flashcard => flashcard.slug === slug)

	// if flashcard is empty
	if (!flashcard) {
		res.send(404);
	}

	res.json(JSON.stringify(flashcard))
})

app.get('/flashcard/start', (req, res) => {
	// start game
	const name = req.query.name
	res.json(JSON.stringify(name))
})

app.listen(PORT, () => {
	console.log("App is listening at port: ", PORT)
})
