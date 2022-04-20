import express from 'express';//importacion de express
import * as findCont from '../../database/crud/find-controller.js';//importacion de find-controller

//creacion del router 
const router = new express.Router();

router.route('/')
    .all((req , res)=>{
        res.status(200).json({message:"has entrado en una zona publica"});
    });

router.route('/productos')
    .all(findCont.getProductos);

// router.route('/productos/:id')
//     .all(getProductoById);

// router.route('/productos/:id/comments')
//     .all(getCommentsByProductoId);



export default router;
