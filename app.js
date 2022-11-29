//Importamos el puerto del archivo .env
import dotenv from 'dotenv';
//Importamos la clase Server
import Server from './models/server.js';
//Configuramos el puerto
dotenv.config();

const server = new Server();

server.listen();

