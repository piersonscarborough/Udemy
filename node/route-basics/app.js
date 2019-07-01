const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`server is running on port ${port}!`)
});

app.get('/', (req, res) => {
    res.send('Hello Express!')
});


app.get('/movies/:genre/:year', (req, res) => {
    console.log(req.params.genre);
    console.log(req.params.year);
    res.send('Movies Route');
});

// //get function

app.get('/movies', (req, res) => {
    let movies = [
        {title: "Lord of the Rings", year: 2001},
        {title: "Spiderman", year: 2019},
        {title: "Avengers", year: 2019}
    ];
    // let movie = {title: "Lord of the Rings", year: 2001};
    // res.json(movie);
    res.json(movies);
});

// post function

app.post('/movies', (req, res) => {
    let title = req.body.title;
    let year = req.body.year;
    console.log(title);
    console.log(year);
    res.send("OK");
});

