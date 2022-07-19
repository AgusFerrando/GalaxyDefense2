var express = require('express');
var router = express.Router();
let usersMap = new Map()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req,res,next){
  let user = req.body
  console.log(user)
  usersMap.set(`${user.mail}`,user)
  res.json({userRegistered: usersMap.get(`${user.name}`),
            mapSize: usersMap.size })
}) 

module.exports = router;
