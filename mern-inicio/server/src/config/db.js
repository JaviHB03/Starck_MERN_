import mongoose from "mongoose";

export async function conectarDB(uri){
    
    const conexion = await mongoose.connect(uri);
   
  
    console.log(`Se ha conectado exitosamente a la BD ${conexion.connection.name}`);
}