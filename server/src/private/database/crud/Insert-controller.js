import User from '../models/Users.js';
import jsonwebtoken from 'jsonwebtoken';


/**
 * inserta un nuevo usuario en la base de datos
 * @param {Object} user 
 * @returns 
 */
export async function insertUser(user) {
    //valida los campos del usuario
    let fields = ["name", "username", "password", "email", "phone"];
    let error = {};
    fields.forEach((value, index) => {
        if (value in user) {
            switch (user[value]) {
                case "" || null || undefined || 0:
                    error[value] = "required";
                default:
                    break;
            }
        }
    })

    if (Object.keys(error).length !== 0) {
        throw error;
        console.log(error);
    }

    //valida que el usuario no exista
    let auxUser = await User.findOne({
        $and: [
            { username: user.username },
            { email: user.email }
        ]
    });

    if (auxUser !== null) {

        throw { message: "el usuario ya existe" }
        console.log(auxUser);
    }

    
    
    //crea el usuario
    let usarSave = new User({
        ...user,
        create_at: new Date(),
        token: jsonwebtoken.sign({_id:user._id , username: user.username , iat: Date.now()} , process.env.SECRETKEY , {expiresIn: "1m"})
    })
    
    //encrypta la contraseña
    await usarSave.encryptPassword(usarSave);
    //guarda el usuario
    usarSave.save();
    

    //retorna el usuario
    return {
        _id: usarSave._id,
        username: usarSave.username,
        email: usarSave.email,
        token: usarSave.token
    }
}


