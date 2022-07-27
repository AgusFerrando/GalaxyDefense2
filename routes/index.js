var express = require('express');
var router = express.Router();
const { isAuth } = require('../controller/authController')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "SOBRE NOSOTROS" });
});


/* GET game page. */
router.get('/game', (req, res, next) => isAuth(req, res, next), (req, res) => {  //midelware para que solo jueguen los registrados
  res.render('game', { title: "SALIR"});
});


router.get('/ranking', function(req, res, next) {
  res.render('ranking');
});


module.exports = router;
