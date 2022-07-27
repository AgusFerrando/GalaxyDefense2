const {encrypt, compare} = require ('../controller/encrypt')
const { UsuariosModel } = require('../model/database')

  

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
    console.log(req.session)
    const passwordHash = await encrypt(req.body.password)
    const usuario = new UsuariosModel({
        name: req.body.name,
        username: req.body.username,
        mail: req.body.mail,
        password: passwordHash
        })
        await usuario.save()
        req.session.isAuth = true    // true cuando crea el usuario
        res.redirect('/game')
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
    
    if (!checkPassword) {
        res.send({
            error:'Invalid Password'
        })
        return false
    }
    req.session.isAuth = true  //true cuando se logra el login
    res.redirect('/game')
    }
    catch(err){
    console.log(err)
    }
};

const isAuth = (req, res, next) => {     //middelware para que si las condiciones anteriores son verdaderas
    if(req.session.isAuth){                //me redirija al juego, sino de nuevo al login
      next()  
    } else {
        res.redirect('/')
    }
}


module.exports = {crear, comparar, isAuth}