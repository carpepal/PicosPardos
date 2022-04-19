import mongoose from "mongoose";//import mongoose libreria de base de datos

//conexion a la base de datos
mongoose.connect(process.env.MONGOURI ||"mongodb://localhost:27017/pruebas");
//evento de conexion abierta
mongoose.connection.on('open' , ()=>{
    console.log('conectado');
});

