// Dependencies

const express = require("express");
const app = express();
const path = require("path");
const url = require('url');

// Config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(__dirname + "/static"));

app.listen(8080, () => console.log("Listening to port 8080..."));

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/projects', (req, res) => {
    res.render('pages/projects');
});

app.get('/games/thatshot', (req, res) => {
    res.render('pages/games/thatshot');
});

app.get('/404', (req, res, next) => {
    next();
});

app.use((req, res, next) => {
    res.status(404);
    
    res.render('pages/404');
});
