const res = require('express/lib/response');
const { redirect } = require('express/lib/response');
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
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    mail: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  });
  
  
const UsuariosModel = mongoose.model('usuarios', usuariosSchema)
  
module.exports = UsuariosModel;