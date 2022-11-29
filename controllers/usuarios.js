//Importamos response de express
import { response } from 'express';


const usuariosGet = (req, res) => {//El método get es un middleware que se encarga de recibir las peticiones get

    //Obtenemos el query de la petición
    const {query, nombre = 'No name', apikey, page = 1, limit} = req.query;//Si no se envía el query, se asigna el valor por defecto. Si se envía el query, se asigna el valor enviado.

    res.json({
        msg : 'get API - Controlador',
        query,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res) => {//El método get es un middleware que se encarga de recibir las peticiones get

    //Obtenemos el id de la petición
    const {id} = req.params;

    res.json({
        msg : 'put API - Controlador'
    });
}

const usuariosPost = (req, res) => {//El método get es un middleware que se encarga de recibir las peticiones get

    //Obtenemos el body de la petición
    const {nombre, edad} = req.body;

    res.json({
        msg : 'post API - Controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {//El método get es un middleware que se encarga de recibir las peticiones get
    res.json({
        msg : 'delete API - Controlador'
    });
}

const usuariosPatch = (req, res) => {//El método get es un middleware que se encarga de recibir las peticiones get
    res.json({
        msg : 'patch API - Controlador'
    });
}


export {usuariosGet , usuariosPut , usuariosPost , usuariosDelete , usuariosPatch};