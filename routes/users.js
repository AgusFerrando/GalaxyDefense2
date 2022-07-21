var express = require('express');
var router = express.Router();
const crear= require('../model/database.js')
let usersMap = new Map()

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
  let user = req.body
  console.log(user)
  comparar(user)
}) 

module.exports = router;
