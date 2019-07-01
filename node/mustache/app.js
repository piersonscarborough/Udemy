const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const path = require('path');
const userRoutes = require('./routes/users');
const session = require('express-session');
const VIEWS_PATH = path.join(__dirname, '/views');


app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use('/', userRoutes);

app.use(express.static("css"));

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set('views', VIEWS_PATH);
app.set('view engine', 'mustache');



app.listen(port, () => {
    console.log(`server is running on port ${port}!`)
});

