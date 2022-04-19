import mongoose from "mongoose"; //import mongoose libreria de base de datos

//creacion de esquema de productos
const product = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    // price: {
    //     type: Number,
    //     required: true
    // },
    // type: {
    //     type: Array,
    //     required: true
    // },
    // alergeno: {
    //     type: Array,
    //     required: false
    // }
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
            rate: {
                type: Number,
                required: true,
                default: 0,
            },
            count:{
                type: Number,
                required: true,
                default: 0,
            }
        },
    title:{
        type: String,
        required: true,
        unique:true
    }
});

export default mongoose.model("product", product);

