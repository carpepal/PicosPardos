import mongoose from "mongoose";
import Orders from "../models/Orders.js";
import User from "../models/Users.js";

export async function updateUser(req , res){
    let body = req.body;
    if(res.locals.decode.username !== body.username){
        req.status(403).json({
            err:"auth error",
            message:"invalid user"
        })
    }

    
    User.findByIdAndUpdate(body._id , body, {new: true}).exec((err , user) => {
     if(err){
            res.status(500).json({
                ok: false,
                err
            })
     } 
     if(user === null){
            res.status(404).json({
                ok: false,
                err: {
                    message: "No existe el usuario"
                }
            })
     }else{
         console.log(user);
            res.status(200).json({
                ok: true,
                user
            })
     }   
     
    });    
    
} 

export async function updateOrder(req , res){
    let body = req.body;
    let user = await User.findById(body.user_id);
    if(user.username !== res.locals.decode.username){
        req.status(403).json({
            err:"auth error",
            message:"invalid user"
        })
    }

    Orders.findByIdAndUpdate(body._id , body, {new: true}).exec((err , order) => {
        if(err){
            res.status(500).json({
                ok: false,
                err
            })
        }
        if(order === null){
            res.status(404).json({
                ok: false,
                err: {
                    message: "No existe el pedido"
                }
            })
        }else{
            res.status(200).json({
                ok: true,
                order
            })
        }
    });
}

export async function updateProduct(req , res){
    let body = req.body;

    Products.findByIdAndUpdate(body._id , body, {new: true}).exec((err , product) => {
        if(err){
            res.status(500).json({
                ok: false,
                err
            })
        }
        if(product === null){
            res.status(404).json({
                ok: false,
                err: {
                    message: "No existe el producto"
                }
            })
        }else{
            res.status(200).json({
                ok: true,
                product
            })
        }
    });
}