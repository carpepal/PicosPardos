import express from "express";//enrutado
import morgan from "morgan";//registro de peticiones
import cors from "cors";//seguridad y error cors
import helmet from "helmet";
import path  from "path";//rutas del project
import rfs from 'rotating-file-stream'
import api from './private/Routes/api.js'
import './private/database/index.js'
import './config.js';


const app = express();
const PORT = process.env.PORT || 3000;

let stream = rfs.createStream('access.log' , {
    interval: "1d",
    path: path.join(process.cwd(), 'log')
})

app.use(morgan('combined' , {stream:stream}));
app.use(cors());
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(process.cwd()+"/Client/build"));
app.use('/api' , api);

app.get('/*' , (req , res)=>{
    console.log();
    res.sendFile(process.cwd()+"/Client/build/index.html");
})


app.listen(PORT ,()=>{
    console.log('server on start');
} )