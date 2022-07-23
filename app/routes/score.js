import Router from 'express';
import actualizarScore from '../controlles/users.js'
var router = Router();



router.post('/score', function(req,res,next){
  let username = req.body
  actualizarScore(username)
}) 

export default router;
