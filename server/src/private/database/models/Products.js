import mongoose from "mongoose"; //import mongoose libreria de base de datos

//creacion de esquema de productos
const product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: Array,
        required: true
    },
    alergeno: {
        type: Array,
        required: false
    }
});

export default mongoose.model("product", product);