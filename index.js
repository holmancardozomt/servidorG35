import express from 'express'
const router = express.Router()

const app = express()

app.use(router)

router.get('/',function (req, res) {
  res.send('Hola desde la raiz😁')
})

router.get('/user', (req, res) => {
  res.send('Obteniendo Informacion😀')
})

router.post('/login', (req, res) => {
  res.send('Logiandome desde Login😎')
})

router.put ('/update', (req, res) => {
  res.send('Actualizando los usuarios🤗')
})

router.delete('/delete', (req, res) => {
  res.send('Eliminando un usuario😮')
})

app.get('/mensaje',  (req, res) => {
  res.send('🤖🛸Primer Mensaje de la clase 🤑🚀🤖 Deployment  en Vercel Desarrollo de Aplicaciones Web🛸🤖')
})

const puerto = 5000;
app.listen(puerto, () => {
    console.log(`El Servidor esta corriendo en http://localhost:${puerto}`)
})