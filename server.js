import express, { json } from 'express';
import cors from 'cors'

const PORT = 3000;
const app = express();

// enable cors throughout the app
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
}))

// all the flashcards
const flashcards = [{
    name: 'first-one',
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
    // form submission to add new flashcard
    const flashcard = {
        name: '',
        questions: [
            {
                q: '',
                a: '',
            },
            {
                q: '',
                a: '',
            }]
    }
})

app.get('/flashcard', (req, res) => {
    // query name 
    // if req.query === empty, redirect to home
    // to get information for the flashcard page
    res.json(JSON.stringify(req.query))
})

// todo: change this to /flashcard/start/?name=
app.get('/flashcard/start', (req, res) => {
    // start game
    const name = req.query.name
    res.json(JSON.stringify(name))
})

app.listen(PORT, () => {
    console.log("App is listening at port: ", PORT)
})
