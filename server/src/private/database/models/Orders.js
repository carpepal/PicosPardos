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
            _id: {
                type: mongoose.Types.ObjectId,
                required: true,
                ref: 'products'
            },
            cantidad: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ],
    status: {
        type: String,
        required: true,
        default:'pending',
        enum: ['pending', 'delivered', 'canceled'],
    },
    total_price: {
        type: Number,
        required: true
    },
    date_at: {
        type: Date,
        required: true,
        default: new Date()
    }
})

export default new mongoose.model("orders", orders);