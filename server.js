import express from 'express';
import cors from 'cors'

const PORT = 3000;
const app = express();

// enable cors throughout the app
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
}))

app.get('/', (req, res) => {
    res.send(JSON.stringify('hello from express'));
})

app.listen(PORT, () => {
    console.log("App is listening at port: ", PORT)
})
