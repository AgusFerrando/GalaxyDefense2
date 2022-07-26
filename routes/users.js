var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();
const {crear, comparar} = require('../controller/authController')
const authController = require('../controller/authController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/signup', function(req,res,next){
//   crear(req, res)
// }) 

router.post('/signup', authController.crear);


// router.post('/login', function(req,res,next){
//   let auth = comparar(req, res)
// }) 

router.post('/login', authController.comparar);


module.exports = router;
