import Tarea from "../models/tarea.js";

export async function listaTareas(res, req) {
  try {
    const tareas = await Tarea.find().sort({ createdAt: -1 }); 
      res.json(tareas);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al listar las tareas",
      error: error.message,
    });
  }
}

export async function crearTarea(req, res) {
  try {
    const { titulo } = req.body;
    if (!titulo || titulo.trim() === "") {
      return res.status(400).json({
        mensaje: "El título es obligatorio",
      });
    }

    const tarea = await Tarea.create({
      titulo: titulo.trim(),
    });
    res.status(201).json(tarea);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear la tarea",
      error: error.message,
    });
  }
}