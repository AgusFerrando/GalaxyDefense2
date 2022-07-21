const mongoose = require('mongoose');


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
    password: String
  })
  
  const UsuariosModel = mongoose.model('usuarios', usuariosSchema)
  
  
  var crear = async (user)=>{
      const usuario = new UsuariosModel({
          name: user.name,
          username: user.username,
          mail: user.mail,
          password: user.password
        })
        const resultado = await usuario.save()
        console.log(resultado)
    }
    
var comparar = async (username, password)=>{
      const usuarios = await UsuariosModel.find(user.username, user.password)
      console.log(usuarios)

}
    
    // mostrar()
  module.exports = crear

  