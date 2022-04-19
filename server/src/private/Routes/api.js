import express from "express";//importacion de express
import * as auth from '../controllers/auth_Controller.js';//importacion de todos los controladores de auth

//creacion del objeto router
const router = express.Router();

//ruta de login
router.route('/login')
    .post(auth.singin);

//ruta de registro
router.route('/register')
    .post(auth.singup);

//prueba de ruta privada
router.route('/private')
    .post(auth.verifyToken ,auth.verifyAdminRole, (req , res)=>{
        res.status(200).json({message:"has entrado en una zona privada"});
    })

export default router;