import express from "express";//enrutado
// import expressCpsHeader , {INLINE , NONE , SELF} from "express-cps-header";//enrutado
import morgan from "morgan";//registro de peticiones
import cors from "cors";//error cors
import helmet from "helmet";//seguridad de cabeceras
import path  from "path";//rutas del project
import rfs from 'rotating-file-stream'//registro de peticiones en fichero
import api from './private/Routes/api.js'//rutas del api
import './config.js';//configuracion de la aplicacion
import './private/database/index.js'//conexion a la base de datos

//creacion de la aplicacion
const app = express();
const PORT = process.env.PORT || 3000;

//registro de peticiones en fichero
let stream = rfs.createStream('access.log' , {
    interval: "1d",
    path: path.join(process.cwd(), 'log')
})

//middlewares
app.use(morgan('combined' , {stream:stream}));//registro de peticiones
// app.use(expressCpsHeader({
//     directives:{
//         'default-src':[NONE],
//         'script-src':[SELF , INLINE , 'http://localhost:3000'],

//     }
// }))
app.use(cors());//solucion de error cors
app.use(helmet())//seguridad de cabeceras
app.use(express.json());//entrada de datos en formato json
app.use(express.urlencoded({extended:true}));//entrada de datos en formato urlencoded
app.use(express.static(process.cwd()+"/Client/build"));//servicio de archivos estaticos
app.use('/api' , api);//rutas del api

//ruta general del servidor
app.get('/*' , (req , res)=>{
    console.log();
    res.sendFile(process.cwd()+"/Client/build/index.html");
})

//inicio del servidor
app.listen(PORT ,()=>{
    console.log('server on start');
} )
