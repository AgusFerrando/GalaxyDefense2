const mongoose = require('mongoose');
const {encrypt, compare} = require ('../controller/authController')
const tokenSession = require ('./generateToken')


const url = 'mongodb://localhost/galaxyDefense'


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
  })
  .then( ()=> console.log('Conected to mongo'))
  .catch( (e)=> console.log('error' + e))
  
const usuariosSchema = mongoose.Schema({
    name: String,
    username: String,
    mail: String,
    password: String,
    score: Number
  })
  
const UsuariosModel = mongoose.model('usuarios', usuariosSchema)
  
  
var crear = async (user)=>{
      const passwordHash = await encrypt(user.password)
      const usuario = new UsuariosModel({
          name: user.name,
          username: user.username,
          mail: user.mail,
          password: passwordHash
        })
        const resultado = await usuario.save()
        console.log(resultado)
}



var comparar = async (req,res)=>{
  try{
    const username = req.body.username
    const password = req.body.password
    const user = await UsuariosModel.findOne({username})
    console.log(user)
    if (!user){
      res.status(404)
      res.send({ error: 'User not found'})
    }
    const checkPassword = await compare (password, user.password)
    const tokenSession = await tokenSign(user)
    if (checkPassword){
      res.send({
        data: user
      })
      return true
    }
    if (!checkPassword) {
      res.send({
        error:'Invalid Password'
      })
      return false
    }
  }catch(e){
    console.log(e)
  }
};

var actualizarScore = async (username) => {
  const usuario = await UsuariosModel.updateOne({__username:username},
  {
    $set:{
      score: data
    }
  })
}
  
    
 
module.exports = {crear, comparar, actualizarScore}