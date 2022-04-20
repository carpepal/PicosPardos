import express from 'express';//importacion de express
import * as findCont from '../../database/crud/find-controller.js';//importacion de find-controller

//creacion del router 
const router = new express.Router();

router.route('/productos')
    .all(findCont.getProductos);

export default router;
