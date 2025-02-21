const express = require('express');

const app = express();
const path = require('path');

const port = 3000;

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/digitallibrary', (req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    res.send('digitalLibrary');
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});