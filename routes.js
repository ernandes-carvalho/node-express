const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    //next(new Error('Custom error'))
    res.render('index', {
        message: 'Hello world from express by son'
    });
    /*res.json({
        message: 'Hello world'
    });*/
});


router.get('/params/:name', function(req, res) {
    res.json({
        params: req.params,
        host: req.params,
        headers: req.headers,
        port: req.port
    });
});

router.post('/body', function(req, res) {
    res.json(req.body);
});

router.get('/res', function(req, res) {
    res.render('index', {

    });
    /*res.status(202).json({
        name: 'Ernandes',
        lastname: 'carvalho'
    });*/
});


module.exports = router;
