import express from 'express'
import router from './ROUTES/routes.js'

//LIBRERÍA QUE NOS PERMITE TRABAJAR CON LOS MÉTODOS POST PUT DELETE

import cors from 'cors'

const app = express();

//USANDO CORS CON EXPRESS

app.use(cors());

//UTILIZAMOS EL FORMATO JSON DESDE EXPRESS

app.use(express.json());

//ACÁ DEFINIMOS NUESTRA RUTA PRINCIPAL

app.use('/', router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`El Servidor esta corriendo en http://localhost:${PORT}`)
})
