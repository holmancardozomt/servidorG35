import {usuario} from '../MODELS/usuario.js'

//REGISTRAR UN USUARIO EN LA BASE DE DATOS
export const regusuario = (req,res) => {
    const user = usuario(req.body)
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
    }

//MOSTRAR TODOS LOS USUARIOS DE LA BASE DE DATOS DE LA COLECCIÓN USERS
export const mostrarusuarios = (req,res) => {
usuario
.find()
.then((data) => res.json(data))
.catch((error) => res.json({message: error}))

}

//MOSTRAR UN USUARIO ESPECIFICO
export const onlyuser = (req,res) => {
    const { id }  = req.params;
    usuario
    .findById( id )
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))

}

//ACTUALIZAR EL USUARIO ESPECIFICO
export const upusuario = (req,res) => {
    const { id } = req.params;
    const {nomuser, password, correo}= req.body
    const user = this
const salt = bcrypt.genSaltSync(12);
const hash = bcrypt.hashSync(password, salt);
password = hash;
    usuario
    .updateOne({ _id: id }, { $set: { nomuser, password, correo } })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))

}

//ELIMINAR UN USUARIO ESPECIFICO
export const delusuario = (req, res) => {
    const {id} = req.params;
    usuario
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
} 

export default regusuario;