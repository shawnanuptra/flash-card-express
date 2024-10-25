import express from 'express';
import cors from 'cors'

const PORT = 3000;
const app = express();

// enable cors throughout the app
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
}))

// all the flashcards
const flashcards = [];

app.get('/', (req, res) => {
    // homepage. show all flash cards
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

app.get('/flashcard/:name', (req, res) => {
    // to get information for the flashcard page
})

app.get('/flashcard/:name/start', (req, res) => {
    // start game
})

app.listen(PORT, () => {
    console.log("App is listening at port: ", PORT)
})
