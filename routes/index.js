var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET game page. */
router.get('/game', function(req, res, next) {
  res.render('game');
});

router.get('/ranking', function(req, res, next) {
  res.send('Aqui ira el ranking');
});


module.exports = router;
