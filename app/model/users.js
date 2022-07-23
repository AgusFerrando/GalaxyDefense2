import { Schema, model } from 'mongoose'

const usuariosSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },

    password: {
        type: String
    },
    role: {
        type: String,
        default: 'user'
    }
},
    {
        timestamps: true,
        versionKey: false
    })

export default model('users', usuariosSchema)