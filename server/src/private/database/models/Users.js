import mongoose from "mongoose";//import mongoose libreria de base de datos
import bcryptjs from "bcryptjs";//importacion de bcryptjs libreria de encriptacion

//definicion de esquema de usuario
const user = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    username:{
        type:String,
        required: true,
        unique:true,
    },
    create_at:{
        type: Date,
        required:true,
    },
    password:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    phone:{
        type:String,
        required:true,
    },
    lastIp:{
        type:String,
        required: false,
    },
    preferences:[
        {
            type: mongoose.Types.ObjectId , 
            ref:'product'
        }
    ],
    token:{
        type:String,
        required:false
    },
    role:{
        type:String,
        required: true,
        enum:['admin','user'],
        default: 'user'
    }
});

//definicion de funciones de usuario
user.method({
    //funcion para encriptar contraseña
    encryptPassword: async (user)=>{
        console.log("user" , user);
        let salt = await bcryptjs.genSalt(10);
        user.password =  await bcryptjs.hash(user.password , salt);
        return user;
    },
    //funcion para comparar contraseña
    matchPassword: async function (password){
        return await bcryptjs.compare(password , this.password);
    }   
})

export default mongoose.model("users" , user);