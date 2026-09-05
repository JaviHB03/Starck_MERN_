import "dotenv/config";
export const env ={
    port:NUMBER(
        process.env.PORT??5000
    ),
    mongodb_uri:
    process.env.MONGODB_URI??"mongodb://127.0.0.1:27017/mern_inicio"
    };