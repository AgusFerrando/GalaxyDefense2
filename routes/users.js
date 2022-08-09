const { res, req, response } = require('express');
var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();
const {crear, comparar} = require('../controller/authController')
const authController = require('../controller/authController')
const actualizar = require ('../controller/gameController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/signup', (req, res) => authController.crear(req, res));


router.post('/login',(req, res)=> authController.comparar(req, res));

router.post('/logout', (req, res) =>{
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect('/');
  })
})

router.post('/updatescore', (req,res) => actualizar(req, res));


module.exports = router;
