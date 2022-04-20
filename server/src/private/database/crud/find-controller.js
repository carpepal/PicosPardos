import {parse} from "query-string";// import de metodo parse de query-string para desglosar las url con parametros
import Product from "../models/Products.js";


export function getProductos(req , res){
    Product.find({}).exec(function(err, productos){
        if(err){
            res.status(500).send({
                message: "Error al obtener los productos"
            });
        }else{
            res.status(200).send({
                productos
            });
        }
    });
}

export function getProductoById(req , res){
    
}

export function getCommentsByProductoId(req , res){
    
}
