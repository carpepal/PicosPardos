import mongoose from "mongoose"; //import mongoose libreria de base de datos

//creacion de esquema de productos
const product = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true
    },
    type:[{ 
            type: String,
            required: true,
        }],
    alergeno:[ {
        type: String,
        required: false
    }],
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
        default: 0,
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
    create_at:{
        type: Date,
        required:true,
        default: new Date()
    },
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comments",
            required: false,
        }
    ]
});

export default mongoose.model("product", product);

