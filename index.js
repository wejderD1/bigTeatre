const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const config = require('config');
const mainRouter = require('./routes/main.router');
const path = require('path');

const PORT = process.env.PORT || config.get('PORT');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(mainRouter);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();