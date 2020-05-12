const express = require('express');
const path = require('path');
//const http = require('http');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');



app.use(function(req, res, next) {
    console.log('I am a custom middleware');
    next();
});

app.get('/', function(req, res) {
    res.send('Hello world from express by son');
});

app.get('/world', function(req, res) {
    res.send('World from express by son');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function(err, req, res, next){
    res.status(500)
    .json({
        message: 'Something wrong happens'
    });
});

app.use('/hello', routes);
app.use('/public', express.static(path.join(__dirname, 'public')));

/*http.createServer(app).listen(3000, function(req, res){
    console.log('Hello world from express by son');
});
*/

app.listen(3000, function() {
    console.log('Express started');
});
