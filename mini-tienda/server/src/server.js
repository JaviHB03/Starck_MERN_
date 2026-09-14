import app from "./app.js";
import { conectarDB } from "./config/db.js";
import { env } from "./config/env.js";

async function iniciarServidor() {
  try {
    await conectarDB(env.mongodb_uri);

    app.listen(env.port, () => {
      console.log(`Servidor escuchando en el puerto ${env.port}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
}

iniciarServidor();