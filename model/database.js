const res = require('express/lib/response');
const { redirect } = require('express/lib/response');
const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session) //conecto la session con mongodb
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
 
const store = new MongoDBSession ({     //indico base de datos y coleccion donde se guardara
  uri: url,
  collection: "sessions", 
})

const usuariosSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    mail: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    score:{
      type: Number
    }
  });
  
  
const UsuariosModel = mongoose.model('usuarios', usuariosSchema)
  
module.exports = {UsuariosModel, store}; //exporto store a app