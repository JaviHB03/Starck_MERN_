import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema(
    {
        //Campos del documento
        titulo:{
            //Deberá ser texto
            type: String,
            //Debe ser obligatorio
            required: true,
            //Limpieza de espacios al inicio y final
            trim: true,
            //Longitud mínima de 3 caracteres
            minLength: 3,
            //Longitud máxima de 50 caracteres
            maxLength: 50
        },
        completada:{
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const Tarea = mongoose.model(
    "Tarea",
    tareaSchema
);

export default Tarea;