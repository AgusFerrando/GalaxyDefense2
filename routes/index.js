var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* router.post('/signup', function(req,res,next){
  let user = req.body
  let usersMap = new Map([`${user.name}`],[user])
  res.json({userRegistered: usersMap[user.name]})
}) */

/* GET game page. */
router.get('/game', function(req, res, next) {
  res.render('game');
});

router.get('/ranking', function(req, res, next) {
  res.render('ranking');
});


module.exports = router;
