import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export const db = mongoose.connect(process.env.KEYMONGODB).then(()=> {
console.log("😎 LA CONEXIÓN FUE REALIZADA 🚀 CON ÉXITO A LA BASE DE DATOS:🛸")
}).catch((error) => console.error("PROBLEMAS AL CONECTAR A LA BASE DE DATOS MONGODB 🥵", error));

export default db;  