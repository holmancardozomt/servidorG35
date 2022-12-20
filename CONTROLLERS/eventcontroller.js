//ACÁ IMPORTAMOS MI MODELO EVENTOS
import {evento} from '../MODELS/evento.js';

//REGISTRAR UN EVENTO EN LA BASE DE DATOS
export const regevento = (req, res) => {
  const cevento = evento(req.body);
  cevento
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

//MOSTRAR UN EVENTO EN LA BASE DE DATOS
export const mostrareventos = (req,res) => {
  evento
  .find()
  .then((data) => res.json(data) )
  .catch((error) => res.json ({ message: error}))    
  }

//MOSTRAR UN EVENTO ESPECIFICO
  export const onlyevento =(req,res) => {
    const { id } = req.params;
    evento
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}))

  }

//ACTUALIZAR UN EVENTO EN LA BASE DE DATOS 
  export const upevento = (req,res) => {
    const {id} = req.params;
    const {fecha, equipo1, equipo2, marcador1,marcador2,tipoevento} = req.body
    evento
    .updateOne({ _id: id }, { $set: { fecha, equipo1, equipo2, marcador1, marcador2, tipoevento } })
    .then((data) => res.json(data) )
    .catch((error) => res.json({message: error}))
  }
  
//BORRAR UN EVENTO EN LA BASE DE DATOS
  export const delevento = (req,res) => {
    const {id} = req.params;
    evento
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
  }

  export default regevento;