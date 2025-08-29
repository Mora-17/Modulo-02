// El archivo de ejecucion de nuestra aplicacion
// configurar nuestro servidor y gestionar la logica de negocio
// 1. Importar las dependecias necesarias
import express from "express";
import  dotenv from "dotenv";
import { conexionMongo } from "./src/config/db.js";


// se importa colocando () para invocar en el const de aki
//2. configurar o invocar las dependecias necesarias
const app = express ();
dotenv.config();
const port = process.env.PORT;
conexionMongo();

//funciones que necesite agregar
app.get("/", (req,res) =>{
res.send ("Server Works")

});
//levantar un servidor
app.listen(port, () => {

  console.log ( `El servidor anda melo en http://localhost:${port}`)
});