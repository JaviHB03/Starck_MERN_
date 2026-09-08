import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import tareasRoutes from "./routes/tareas.routes.js";

const app = express();

app.use(
  cors({
    origin: env.clientURL,
  })
);
app.use(express.json());
app.get("/salud", (req, res) => {
  res.json({
    estado: "ok",
    mensaje: "Servidor corriendo correctamente",
    fecha: new Date().toISOString(),
  });
});
app.use("/tareas", tareasRoutes);

export default app;