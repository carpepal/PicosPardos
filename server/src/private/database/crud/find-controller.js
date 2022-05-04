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
          $unwind:{
            path:"$comments",
            preserveNullAndEmptyArrays:true
          }
        },
        {
          $lookup: {
            from: 'comments',
            localField: 'comments.id',
            foreignField: '_id',
            pipeline: [
              {
                $lookup: {
                  from: 'users',
                  localField: 'user_id',
                  foreignField: '_id',
                  pipeline:[
                    {
                      $project:{
                        name:1,
                        email:1
                      }
                    }
                  ],
                  as: 'user'
                }
              },
              {
              $project: {
                user:1,
                comment:1
                }
              }
            ],
            as: 'comments'
        }},
        {
          $project: {
            _id: 1,
            name: 1,
            image: 1,
            type:1,
            alergeno:1,
            rating:1,
            description: 1,
            price: 1,
            comments: 1
          }
        },
        { 
          "$group": {
            "_id": "$_id",
            "name": { "$first": "$name" },
            "image": { "$first": "$image" },
            "type": { "$first": "$type" },
            "alergeno": { "$first": "$alergeno" },
            "rating": { "$first": "$rating" },
            "description": { "$first": "$description" },
            "price": { "$first": "$price" },
            "comments": { "$push": { "$first": "$comments" } }
          }
        }
      ]).exec((err, productos) => {
          if(err){
                res.status(500).send({
                    message: "Error en la peticion"
                });
            }else{
                if(!productos){
                    res.status(404).send({
                        message: "No hay productos"
                    });
                }else{
                    res.status(200).send({
                        productos
                    });
                }
            }
      })
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

export async function getComments(req , res){
    let comments = await Comments.find();
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


