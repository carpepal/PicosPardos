import express from "express";//importacion de express
import adminRoutes from './admin/admin.js';//importacion de las rutas de admin
import * as auth from "../../controllers/auth_Controller.js";//importacion de todos los controladores de auth
import * as find from "../../database/crud/find-controller.js";//importacion de todos los controladores de find
import Users from "../../database/models/Users.js";

//creacion del objeto router
const router = express.Router();

//rutas de admin
router.use('/admin' ,auth.verifyAdminRole, adminRoutes);

//rutas de gestion de usuario
router.route('/user')
    .get(find.getUserbyJwt);

//rutas de gestion de pedidos
router.route('/pedidos')
    .get(find.getPedidosByJwt);

//rutas de gestion de comentarios
router.route('/comments')
    .get(find.getComments);

export default router;

 