import express from "express";//importacion de express
import adminRoutes from './admin/admin.js';//importacion de las rutas de admin
import * as auth from "../../controllers/auth_Controller.js";//importacion de todos los controladores de auth
import * as find from "../../database/crud/find-controller.js";//importacion de todos los controladores de find
import * as update from "../../database/crud/update-contoller.js";//importacion de todos los controladores de update
import * as insert from "../../database/crud/insert-controller.js";//importacion de todos los controladores de insert
import * as deleted from "../../database/crud/delete-controller.js"
import Users from "../../database/models/Users.js";

//creacion del objeto router
const router = express.Router();

//rutas de admin
router.use('/admin', auth.verifyAdminRole, adminRoutes);

//rutas de gestion de usuario
router.route('/user')
    .get(find.getUserbyJwt)
    .put(update.updateUser)
    .delete(deleted.deleteUser);

//rutas de gestion de pedidos
router.route('/pedidos')
    .get(find.getPedidosByJwt)
    .post(insert.insertOrder)
    .put(update.updateOrder);

//rutas de gestion de comentarios
router.route('/comments')
    .get(find.getComments)
    .post(insert.insertComment);

export default router;

