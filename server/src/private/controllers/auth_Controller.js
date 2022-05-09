import Users from '../database/models/Users.js'//import esquema de usuario
import jsonwebtoken from 'jsonwebtoken';//import jsonwebtoken libreria para generar token
import { insertUser } from '../database/crud/insert-controller.js';//import insertar usuarios


/**
 * funcion para logear un usuario
 * @param {Reuest} req 
 * @param {Response} res 
 * @returns 
 */
export async function singin(req, res) {
    try {
        //recoge los campos de login de la peticion
        const { username, password } = req.body;
        //busca el usuario
        const user = await Users.findOne({ username: username });
        //valida que el usuario exista
        if (user === null || user === undefined) {
            res.status(404).json({
                Error: true,
                message: "no se encontro el usuario"
            })
            return;
        }
        //valida que la contraseña sea correcta
        if (await user.matchPassword(password)) {
            //genera el token
            let token = jsonwebtoken.sign({ id: user._id, username: user.username, iat: Date.now() }, process.env.SECRETKEY, { expiresIn: "1h" })
            //modifica el usuario para que tenga el token
            await Users.updateOne({username:user.username} , {$set:{token:token}});
            //retorna el token
            res.status(200).json({
                Error: false,
                message: "login correcto",
                token: token
            })
            return;
        } else {
            //si la contraseña no es correcta retorna un error
            res.status(403).json({
                Error: true,
                message: "usuario o contraseña invalida"
            })
            return;
        }
    } catch (error) {
        //si ocurre un error envia el error
        console.error(error);
        res.status(400).json({
            Error: true,
            message: error
        })
    }
}

/**
 * función para registrar un nuevo usuario
 * @param {Request} req 
 * @param {Response} res 
 */
export async function singup(req , res){
    try{
        //recoge los campos de registro de la peticion
        const body = req.body;
        //inserta el usuario
        let user = await insertUser(body);
        //responde con el usuario
        res.status(200).json(user);
    }catch(error){
        //responde con el error
        res.status(400).json({
            Error: true,
            message: error
        })
    }
}

/**
 * verifica el token del usuario
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export async function verifyToken(req , res , next){
    //recoge el token de la peticion
    const token = req.headers.authorization || req.headers.authentication;
    //valida que el token exista y sea correcto
    let data = jsonwebtoken.verify(token , process.env.SECRETKEY , {complete: true} , async (err , decode)=>{
        //si hay un error
        if(err) {
            res.status(403).json(err);
            return;
        }
        //si el token es correcto recoge el usuario
        let user = Users.findById(decode.id);
        //si el usuario no existe
        if(user !== null && user.username === decode.username){
            //guarda el usuario en la peticion
            res.locals.decode = decode;
            //continua con la peticion
            next();
        }else{
            //si el usuario no existe responde con un error
            res.status(403).json({
                err:"auth error",
                message:"invalid user"
            })
        }
    });

}


/**
 * verifica que el usuario sea administrador
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export async function verifyAdminRole(req , res , next){
    //recoge el usuario del estado de la peticion
    const decode = res.locals.decode;
    //recoge el usuario de la base de datos
    let user = await Users.findById(decode.payload._id)
    //si el usuario no existe
    if(user === null)res.status(403).json({
        err: "auth error",
        message: "invalid user"
    });
    //si el usuario es administrador
    if(user.role === "admin"){
        //continua con la peticion
        next();
    }else{
        //si no es administrador responde con error
        res.status(401).json({
            err:"Unauthorized",
            message:"you don't have permission",
        })
    }
}

export async function isLogged(req , res){
    let {payload} = res.locals.decode;
    let user = await Users.findOne({_id: payload.id})
    if(Object.keys(user).length !== 0){
        res.status(200).json({
            isLogged: true
        });
    }else{
        res.status(404).json({
            error:true,
            message: "No se encontro el usuario"
        })
    }

}

export async function isAdmin(req , res){
    let {payload} = res.locals.decode;
    let user = await Users.findOne({_id: payload.id})
    if(Object.keys(user).length !== 0){
        if(user.role === "admin"){
            res.status(200).json({
                isAdmin: true
            });
        }else{
            res.status(200).json({
                isAdmin: false
            });
        }
    }else{
        res.status(404).json({
            error:true,
            message: "No se encontro el usuario"
        })
    }
}




