import User from '../models/Users.js';
import Product from '../models/Products.js';
import Order from '../models/Orders.js';
import Comment from '../models/Comments.js';
import jsonwebtoken from 'jsonwebtoken';


/**
 * inserta un nuevo usuario en la base de datos
 * @param {Object} user 
 * @returns 
 */
export async function insertUser(user) {
    //valida los campos del usuario
    let fields = ["name", "username", "password", "email", "phone"];
    let error = {};
    fields.forEach((value, index) => {
        if (value in user) {
            switch (user[value]) {
                case "" || null || undefined || 0:
                    error[value] = "required";
                default:
                    break;
            }
        }else{
            error[value] = "required";
        }
    })
    if (Object.keys(error).length !== 0) {
        throw error;
        console.log(error);
    }

    //valida que el usuario no exista
    let auxUser = await User.findOne({
        $and: [
            { username: user.username },
            { email: user.email }
        ]
    });
    if (auxUser !== null) {
        throw { message: "el usuario ya existe" }
        console.log(auxUser);
    }
    
    //crea el usuario
    let usarSave = new User({
        ...user,
        create_at: new Date(),
        token: jsonwebtoken.sign({id:user._id , username: user.username , iat: Date.now()} , process.env.SECRETKEY , {expiresIn: "1m"})
    })
    
    //encrypta la contraseña
    await usarSave.encryptPassword(usarSave);

    //guarda el usuario
    usarSave.save();
    
    //retorna el usuario
    return {
        _id: usarSave._id,
        username: usarSave.username,
        email: usarSave.email,
        token: usarSave.token
    }
}

export async function insertProduct(product){
    //valida los campos del producto
    let fields = ["name", "price", "description", "type", "stock"];
    let error = {};
    fields.forEach((value, index) => {
        if (value in product) {
            switch (product[value]) {
                case "" || null || undefined || 0:
                    error[value] = "required";
                default:
                    break;
            }
        }else{
            error[value] = "required";
        }
    })
    if (Object.keys(error).length !== 0) {
        throw error;
    }

    //valida que el producto no exista
    let auxProduct = await Product.findOne({
        $and: [
            { name: product.name },
            { price: product.price }
        ]
    });
    if (auxProduct !== null) {
        throw { message: "el producto ya existe" }
    }

    //crea el producto
    let productSave = new Product({
        ...product,
        create_at: new Date()
    })

    //guarda el producto
    productSave.save();
    
    //retorna el producto
    return {
        _id: productSave._id,
        name: productSave.name,
        price: productSave.price,
        description: productSave.description,
        category: productSave.category,
        stock: productSave.stock
    }
}

export async function insertComment(comment){
    //valida los campos del comentario
    let fields = ["comment", "user_id" , "product_id"];
    let error = {};
    fields.forEach((value, index) => {
        if (value in comment) {
            switch (comment[value]) {
                case "" || null || undefined || 0:
                    error[value] = "required";
                default:
                    break;
            }
        }else{
            error[value] = "required";
        }
    })
    if (Object.keys(error).length !== 0) {
        throw error;
    }

    //crea el comentario
    let commentSave = new Comment({
        ...comment,
        create_at: new Date()
    })

    //guarda el comentario
    commentSave.save();
    
    //retorna el comentario
    return {
        _id: commentSave._id,
        comment: commentSave.comment,
        user: commentSave.user_id,
        product: commentSave.product_id,
    }
}

export async function insertOrder(req , res){
    let body = req.body;
    //valida los campos del pedido
    let fields = ["user_id" , "products" , "total_price"];
    // let error = {};
    // order.user_id = res.locals.decode._id
    // fields.forEach((value, index) => {
    //     if (value in order) {
    //         switch (order[value]) {
    //             case "" || null || undefined || 0:
    //                 error[value] = "required";
    //             default:
    //                 break;
    //         }
    //     }else{
    //         error[value] = "required";
    //     }
    // })
    // if (Object.keys(error).length !== 0) {
    //     throw error;
    // }
    if(body.product.length === 0){
        res.status(400).json({message: "no hay productos"});
    }
    let productos = [];
    let total = 0;
    body.product.forEach(producto => {
         productos.push({_id: producto._id , cantidad: producto.cantidad});
         total += producto.cantidad * producto.price;
    });
    

    let order = {
        ...productos,
        user_id: res.locals.decode._id,
        total_price: total,
        date_at: new Date(),
        status: "pendiente"
    }

    //crea el pedido
    let orderSave = new Order({
        ...order,
        create_at: new Date()
    })

    //guarda el pedido
    orderSave.save();
    
    //retorna el pedido
    return {
        _id: orderSave._id,
        user: orderSave.user_id,
        products: orderSave.products,
        status: orderSave.status,
        total_price: orderSave.total_price
    }
}




