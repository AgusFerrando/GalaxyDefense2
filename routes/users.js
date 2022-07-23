var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();
const {crear, comparar} = require('../model/database.js')


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

module.exports = router;
