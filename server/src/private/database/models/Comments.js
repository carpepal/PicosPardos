import mongoose from "mongoose";

const comments = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    date_at:{
        type: Date,
        default: new Date(),
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    rating:{
        rate:{
            type: Number,
            required: true,
            default: 0
        },
        votes:{
            type: Number,
            required: true,
            default: 0
        }
    }
});

export default mongoose.model("comments", comments);