import express from "express";
import {
    listaTareas,
    crearTarea,
} from "../controllers/tareas.controller.js";

const router = express.Router();
router.get(
    "/tareas", 
    listaTareas)
router.post(
    "/tareas", 
    crearTarea
)
export default router;
