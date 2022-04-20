import express from "express";//importacion de express
import adminRoutes from './admin/admin.js';//importacion de las rutas de admin
import * as auth from "../../controllers/auth_Controller.js";//importacion de todos los controladores de auth
import * as find from "../../database/crud/find-controller.js";//importacion de todos los controladores de find
import Users from "../../database/models/Users.js";

//creacion del objeto router
const router = express.Router();

router.use('/admin' ,auth.verifyAdminRole, adminRoutes);

router.route('/user')
    .all(find.getUserbyJwt);

router.route('/pedidos')
    .all(find.getPedidosByJwt);

export default router;

 