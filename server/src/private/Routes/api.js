import express from "express";//importacion de express
import * as auth from '../controllers/auth_Controller.js';//importacion de todos los controladores de auth
import Products from "../database/models/Products.js";
import Users from "../database/models/Users.js";
import privateRoutes from './private/index.js';//importacion de todas las rutas privadas
import publicRoutes from './public/public.js';//importacion de todas las rutas publicas

//creacion del objeto router
const router = express.Router();

//ruta de login
router.route('/login')
    .post(auth.singin)
    .all((req, res) => { res.redirect('/login') });

//ruta de registro
router.route('/register')
    .post(auth.singup)
    .all((req, res) => { res.redirect('/register') });

//ruta de verificacion de token privadas
router.use('/private', auth.verifyToken, privateRoutes);
//rutas publicas
router.use('/public', publicRoutes);

//prueba 
router.route('/prueba')
    .post((req, res) => {
        try {
            Products.aggregate([
                {
                    $facet: {
                        countCategory: [{ $group: { _id: "$category" , count: { $sum: 1 } } }],
                        mensCloth: [{ $match: { category: "men's clothing" } }],
                        jewerly: [{ $match: { category: "jewelery" } }],

                    }
                }
            ]).then((data) => {
                console.log(data);
                res.json(data)
            }
            );
        } catch (err) {
            console.log(err);
        }
    })



export default router;