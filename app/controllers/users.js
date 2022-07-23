var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();
const {crear, comparar, actualizarScore} = require('../model/database.js')
const checkAuth = require ('../middelware/')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req,res,next){
  let user = req.body
  console.log(user)
  crear(user)
}) 

router.post('/login', function(req,res,next){
  let auth = comparar(req, res)
}) 

router.post('/score', function(req,res,next){
  actualizarScore(username)
}) 

module.exports = router;
