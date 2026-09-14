import "dotenv/config";

export const env = {
  port: Number(process.env.PORT ?? 3000),

  mongodb_uri:
    process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/mini-tienda",

  clientURL: process.env.CLIENT_URL ?? "http://localhost:5173",
};