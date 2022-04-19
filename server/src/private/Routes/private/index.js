import express from "express";//importacion de express
import adminRoutes from './admin/admin.js';//importacion de las rutas de admin
import * as auth from "../../controllers/auth_Controller.js";//importacion de todos los controladores de auth

//creacion del objeto router
const router = express.Router();

router.route('/')

router.use('/admin' ,auth.verifyAdminRole, adminRoutes);



export default router;

