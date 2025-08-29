//importar dependecias

import mongoose from "mongoose";

// Crear coneccion con funcion de conexion

export const conexionMongo = async()=>{

try {
    await mongoose.connect(process.env.BD_URL,{dbName:"Comercio"});
    console.log ("Conexíon exitosa con la base de datos")
    
} catch (error) {
    console.error ("Error de conexion", error)
    
}
}