const { response } = require('express');
var express = require('express');
const session = require('express-session');
var router = express.Router();
const { isAuth } = require('../controller/authController')
const { mostrar } = require('../controller/gameController')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "SOBRE NOSOTROS" });
});


/* GET game page. */
router.get('/game', (req, res, next) => isAuth(req, res, next), (req, res) => {  //midelware para que solo jueguen los registrados
  res.render('game', { title: "INICIO", userName: req.session.username });
});


router.get('/ranking',  (req, res) => mostrar(req,res));


module.exports = router;
