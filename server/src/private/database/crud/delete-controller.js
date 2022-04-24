import Products from "../models/Products.js";
import User from "../models/Users.js";


export async function deleteUser(req , res){
    let body = req.body;
    let user = await User.findById(res.locals.decode._id);
    if(user.role !== "admin" || user.username !== body.username){
        req.status(403).json({
            err:"auth error",
            message:"invalid user"
        })
    }

    User.findByIdAndDelete(body._id).exec((err , user) => {
        if(err){
            res.status(500).json({
                ok: false,
                err
            })
        }
        if(user ===null){
            res.status(400).json({
                ok: false,
                err: {
                    message: "user not found"
                }
            })
        }
        if(user){
            res.status(200).json({
                ok: true,
                user
            })
        }
    })
}

export async function deleteProduct(req , res){
    let body = req.body;
    Products.findByIdAndDelete(body._id).exec((err , product) => {
        if(err){
            res.status(500).json({
                ok: false,
                err
            })
        }
        if(product ===null){
            res.status(400).json({
                ok: false,
                err: {
                    message: "product not found"
                }
            })
        }
        if(product){
            res.status(200).json({
                ok: true,
                product
            })
        }
    })
}

export async function deleteOrder(req , res){
    let body = req.body;
    Products.findByIdAndDelete(body._id).exec((err , order) => {
        if(err){
            res.status(500).json({
                ok: false,
                err
            })
        }
        if(order ===null){
            res.status(400).json({
                ok: false,
                err: {
                    message: "order not found"
                }
            })
        }
        if(order){
            res.status(200).json({
                ok: true,
                order
            })
        }
    })
}