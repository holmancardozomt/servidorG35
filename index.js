import express from 'express'

const app = express()

app.get('/',  (req, res) => {
  res.send('🤖🛸Primer Mensaje de la clase 🤑🤖 Deployment  en Vercel Desarrollo de Aplicaciones Web🛸🤖')
})

app.listen(8000, () => {
    console.log("El Servidor esta corriendo en http://localhost:8000")
})