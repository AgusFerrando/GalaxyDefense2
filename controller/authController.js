const res = require('express/lib/response')
const {encrypt, compare} = require ('../controller/encrypt')
const UsuariosModel = require('../model/database')
  

// var crear = async (user)=>{
//     const passwordHash = await encrypt(user.password)
//     const usuario = new UsuariosModel({
//         name: user.name,
//         username: user.username,
//         mail: user.mail,
//         password: passwordHash
//       })
//       const resultado = await usuario.save()
//       console.log(resultado)
//     
// }

var crear = async (req, res)=>{
    const passwordHash = await encrypt(req.body.password)
    const usuario = new UsuariosModel({
        name: req.body.name,
        username: req.body.username,
        mail: req.body.mail,
        password: passwordHash
        })
        usuario.save()
        .then(result => {
            res.redirect('/game')
        })
        .catch(err => {
            console.log(err)
        })
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
    //const tokenSession = await tokenSign(user)
    if (checkPassword){
        res.redirect('/game')
        return true
    }
    if (!checkPassword) {
        res.send({
        error:'Invalid Password'
        })
        return false
    }
    }
    catch(err){
    console.log(err)
    }
};


module.exports = {crear, comparar}