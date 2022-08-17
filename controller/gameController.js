const { UsuariosModel } = require('../model/database')

const actualizar = async (req, res) =>{
    const updateScore = await UsuariosModel.updateOne({username: req.session.username},
        {
            $set:{
                score : req.body.score
            }
        })
        console.log(updateScore)
        console.log(req.body.score)
        res.redirect('/ranking')
}

const mostrar = async (req, res) => {
    let data = await UsuariosModel.find({})
    data.sort((a,b) => b.score - a.score)
    res.render('ranking', {users: data});
}

module.exports = { actualizar, mostrar }