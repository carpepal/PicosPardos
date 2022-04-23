import mongoose from "mongoose";//import mongoose libreria de base de datos

//creacion de esquema de productos
const orders = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'products'
        }
    ],
    total_price: {
        type: Number,
        required: true
    },
    date_at: {
        type: Date,
        required: true , 
        default: new Date()
    }
})

export default new mongoose.model("orders", orders);