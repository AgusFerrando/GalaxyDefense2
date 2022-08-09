const {encrypt, compare} = require ('../controller/encrypt')
const { UsuariosModel } = require('../model/database')

   

var crear = async (req, res)=>{
    const passwordHash = await encrypt(req.body.password)
    const usuario = new UsuariosModel({
        name: req.body.name,
        username: req.body.username,
        mail: req.body.mail,
        password: passwordHash,
        score: 0,
        })
        await usuario.save()
        req.session.isAuth = true    // true cuando crea el usuario
        req.session.username = usuario.username 
        res.redirect('/game')
    }



var comparar = async (req,res)=>{
    try{
    const username = req.body.username
    const password = req.body.password
    const user = await UsuariosModel.findOne({username})
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
    req.session.isAuth = true //true cuando se logra el login
    req.session.username = user.username  
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