const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


// Middleware  serve the static web pages
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));

// *********** BODY-PARSER ***********
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// *********** MIDDLEWARE ***********
app.set('view engine', 'ejs');

// routes to navigate between the pages
app.get('/', (req, res, next) => {
    res.render('index.ejs', { title: 'Home Page' });
})
app.get('/home', (req, res, next) => {
    res.render('index.ejs', { title: 'Home Page' });
})

app.get('/apis/home', (req, res, next) => {
    res.render('index.ejs', { title: 'Home Page' });
})

app.get('/authentication', (req, res, next) => {
    res.render('authentication.ejs', {title : 'Authentication Page', error: ''});
})

app.get('/apis/authentication', (req, res, next) => {
    res.render('authentication.ejs', { title: 'Authentication Page', error: '' });
})

app.get('/apis/citation', (req, res, next) => {
    res.render('addCitation.ejs', { title: 'Add New Citation', success: '' });
})

app.get('/apis/author', (req, res, next) => {
    res.render('addAuthor.ejs', { title: 'Add New Author', success: '' });
})

app.get('/apis/lists/all', (req, res, next) => {
    res.render('lists.ejs', { title: 'All in One'});
})

app.use('/apis', require('./core/route/route.js'));




const port = 3003;
app.listen(port, () => {
    console.log(`the server is running on the port: ${port}`);
    
})