//Importamos router de express
import { Router } from 'express';
//Importamos el controlador
import { usuariosGet,
         usuariosPut, 
         usuariosPost, 
         usuariosPatch, 
         usuariosDelete } from '../controllers/usuarios.js';



const router = Router();

 //Endpoint para la página principal. Petición GET
router.get('/', usuariosGet); 

//Endpoint para la página principal. Petición POST
router.put('/:id', usuariosPut); 

//Endpoint para la página principal. Petición PUT
router.post('/', usuariosPost);

router.patch('/', usuariosPatch);

//Endpoint para la página principal. Petición DELETE
router.delete('/', usuariosDelete);






export default router;