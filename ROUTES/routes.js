import express from 'express';
import { regusuario, mostrarusuarios, onlyuser, upusuario, delusuario } from '../CONTROLLERS/usercontroller.js'
import { regevento, mostrareventos, onlyevento, upevento, delevento } from '../CONTROLLERS/eventcontroller.js'
import {login} from '../CONTROLLERS/logincontroller.js'
export const router = express.Router();
import { db } from '../mongodb.js'


              //RUTAS PARA USUARIOS

router.post('/regusuario', regusuario);
router.get('/shuser', mostrarusuarios);
router.get('/shuser/:id', onlyuser);
router.put('/upuser/:id', upusuario);
router.delete('/delete/:id', delusuario);



             //RUTAS PARA EVENTOS

//REGISTRA UN EVENTO

router.post('/regevento', regevento);

//MOSTRAR TODOS LOS EVENTOS DEPORTIVOS

router.get('/mostrareventos', mostrareventos);

//MOSTRAR UN SOLO EVENTO

router.get('/mostrareventos/:id', onlyevento);

//ACTUALIZAR UN EVENTO DEPORTIVO

router.put('/mostrareventos/:id', upevento);

//ELIMINAR UN EVENTO DEPORTIVO

router.delete('/mostrareventos/:id', delevento);

//EJEMPLO CLASE ANTERIOR
router.get('/', function (req, res) {
  res.send('Hola desde la raiz😁')
})
router.get('/user', (req, res) => {
  res.send('😎Obteniendo información de los usuarios😍')
})
router.post('/login', (req, res) => {
  res.send('Loguiandome desde Login 😎')
})
router.put('/update', (req, res) => {
  res.send('Actualizando los usuarios😉')
})
router.delete('/delete', (req, res) => {
  res.send('Eliminando un usuario😮')
})

export default router;