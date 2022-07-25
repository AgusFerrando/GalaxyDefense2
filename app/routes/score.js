import Router from 'express';
const { actualizarScore } = require('../controlles/users')
var router = Router();



router.post('/score', function(req,res,next){
  let username = req.body
  actualizarScore(username)
}) 

export default router;
