//Importamos la libreria express
import express from 'express';
//Importamos la libreria cors
import cors from 'cors';
//Importamos los usuarios 
import users from '../routes/usuarios.js';


class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();

    }

    //Método para los middlewares
    middlewares () {
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio público
        this.app.use(express.static('public'));//Usamos el método use para indicar que es un middleware. El método static es un middleware que se encarga de servir los archivos estáticos


    }

    //Método para las rutas
    routes () {
        //Importamos la ruta de user
        this.app.use(this.usuariosPath, users);//Corregir error de importación

    }

    //Método listen para iniciar el servidor
    listen () {
        //Iniciamos el servidor
        this.app.listen(this.port , () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }



}


export default Server;