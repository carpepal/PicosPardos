import express from "express";//importacion de express
import * as auth from '../controllers/auth_Controller.js';//importacion de todos los controladores de auth
import privateRoutes from './private/index.js';//importacion de todas las rutas privadas
import publicRoutes from './public/public.js';//importacion de todas las rutas publicas

//creacion del objeto router
const router = express.Router();

//ruta de login
router.route('/login')
    .post(auth.singin)
    .all((req , res)=>{res.redirect('/login')});

//ruta de registro
router.route('/register')
    .post(auth.singup)
    .all((req , res)=>{res.redirect('/register')});

//ruta de verificacion de token privadas
router.use('/private' ,auth.verifyToken , privateRoutes);
//rutas publicas
router.use('/' , publicRoutes);

//prueba de ruta privada
router.route('/private')
    .post(auth.verifyToken ,auth.verifyAdminRole, (req , res)=>{
        res.status(200).json({message:"has entrado en una zona privada"});
    })

    

export default router;