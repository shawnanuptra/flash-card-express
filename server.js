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
// TODO: change/remove this default flashcard 
const flashcards = [{
	name: 'Default',
	slug: 'default',
	questions: [
		{
			q: 'This is an example of question 1. Say yes.',
			a: 'yes',
		},
		{
			q: 'Uh oh, the answer is I don\'t know!',
			a: 'I don\'t know',
		}]
}];

app.get('/', (req, res) => {
	// homepage. show all flash cards
	res.json(flashcards);
})

app.post('/add-new', (req, res) => {
	const name = req.body.name
	// TODO: get all other form fields

	// TODO: change questions into an array of {q: string, a: string}

	const flashcard = {
		name: name,
		// TODO: add slug and questions into the flashcard object
	}

	// add to state
	flashcards.push(flashcard)

	res.json(JSON.stringify(flashcard))
})

app.get('/flashcard', (req, res) => {
	// get slug
	const slug = req.query.slug

	// TODO: find the corresponding flashcard, and assign it to 'const flashcard =' 

	// if flashcard is empty
	if (!flashcard) {
		res.send(404);
	}

	res.json(JSON.stringify(flashcard))
})

app.listen(PORT, () => {
	console.log("App is listening at port: ", PORT)
})
