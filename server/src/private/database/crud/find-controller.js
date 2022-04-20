import Product from "../models/Products.js";
import Users from "../models/Users.js";
import Orders from "../models/Orders.js";
import Comments from "../models/Comments.js";


export function getProductos(req , res){
    let buscador = {};
    if(Object.keys(req.query).length !== 0){
        console.log(req.query);
        buscador = req.query;
    }
    Product.aggregate([
        {
            $lookup:{
                from: "users",
            }
        }
    ])
    // Product.find(buscador).exec(function(err, productos){
    //     if(err){
    //         res.status(500).send({
    //             message: "Error al obtener los productos"
    //         });
    //     }else{
    //         res.status(200).send({
    //             productos
    //         });
    //     }
    // });
}

export async function getUserbyJwt(req , res){
    let {payload} = res.locals.decode;
    let user = await Users.findOne({_id: payload.id})
    if(Object.keys(user).length !== 0){
        res.status(200).json({
            user
        });
    }else{
        res.status(404).json({
            error:true,
            message: "No se encontro el usuario"
        })
    }
}

export async function getPedidosByJwt(req , res){
    let {payload} = res.locals.decode;
    let pedidos = await Orders.find({user_id: payload.id})
    if(Object.keys(pedidos).length !== 0){
        res.status(200).json({
            pedidos
        });
    }else{
        res.status(404).json({
            error:true,
            message: "No se encontro pedidos"
        })
    }
}

export async function getCommentsById(req , res){
    let {id} = req.params;
    let comments = await comments.find({product_id: id});
    if(Object.keys(comments).length !== 0){
        res.status(200).json({
            comments
        });
    }else{
        res.status(404).json({
            error:true,
            message: "No se encontro el producto"
        })
    }
}


