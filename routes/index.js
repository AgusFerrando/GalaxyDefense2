var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "SOBRE NOSOTROS" });
});


/* GET game page. */
router.get('/game', function(req, res, next) {
  res.render('game', { title: "INICIO"});
});

router.get('/ranking', function(req, res, next) {
  res.render('ranking');
});


module.exports = router;
