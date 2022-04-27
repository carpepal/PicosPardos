import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setRegisterData , setRegisterError } from '../Services/reducers/LoginSlice';
import CustomInput from './CustomInput'


const LoginForm = () => {

    const dispatch = useDispatch();
    const {username , password , error} = useSelector(state => state.Forms.loginData);

    const handleChange = ({target:{name , value}}) => {
        dispatch(setRegisterData({name:"loginData" ,data:{[name]:value}}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let error = validate({username , password});
        dispatch(setRegisterError({name:"loginData" , data:error}));
        if(Object.keys(error).length === 0){
            console.log("Login");
            dispatch()
        }
      }

  return (
    <form name='login' onSubmit={handleSubmit}>
        <CustomInput name="username" type="text" label="Usuario" placeholder="Usuario"
                      handleInputChange={handleChange} value={username} error={error.username} />
        <CustomInput name="password" type="password" label="Contraseña" placeholder="Contraseña"
                      handleInputChange={handleChange} value={password} error={error.password} />
        <button type='submit'>Enviar</button>
    </form>
  )
}

function validate(data){
    let error = {};
    if(!data.username) error.username = "Usuario requerido";
    if(data.username < 3 || data.username > 16) error.username = "Usuario debe tener entre 3 y 16 caracteres";
    if(!data.password) error.password = "Contraseña requerida";
    if(data.password < 3 || data.password > 16) error.password = "Contraseña debe tener entre 3 y 16 caracteres";
    return error;
}

export default LoginForm