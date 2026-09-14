import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import ProductoRouter from "./routes/producto.routes.js";

const app = express();

app.use(
  cors({
    origin: env.clientURL,
  }),
);

app.use(express.json());

// Ruta raíz GET /
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// Ruta de salud GET /salud
app.get("/salud", (req, res) => {
  res.json({
    estado: "ok",
  });
});

app.use("/productos", ProductoRouter);

export default app;