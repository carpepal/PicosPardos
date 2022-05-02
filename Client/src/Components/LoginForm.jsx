import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate , } from 'react-router-dom';
import { LoginFetch, setRegisterData, setRegisterError } from '../Services/reducers/FormSlice.js';
import CustomInput from './CustomInput'
import Form from './Form.jsx';


const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username, password, error } = useSelector(state => state.Forms.loginData);

    const handleChange = ({ target: { name, value } }) => {
        dispatch(setRegisterData({ name: "loginData", data: { [name]: value } }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let error = validate({ username, password });
        dispatch(setRegisterError({ name: "loginData", data: error }));
        if (Object.keys(error).length === 0) {
            console.log("Login");
            dispatch(LoginFetch({ username, password }));
        }
        navigate('/' , { replace: true });
    }

    return (
        <Form name='login' handleSubmit={handleSubmit} >
            <h1 className="font-bold text-3xl">Login</h1>
            <div className="w-full flex flex-col justify-center items-center p-4 w-full">
                <CustomInput name="username" type="text" label="Usuario" placeholder="Usuario"
                    handleInputChange={handleChange} value={username} error={error['username']} />
                <CustomInput name="password" type="password" label="Contraseña" placeholder="Contraseña"
                    handleInputChange={handleChange} value={password} error={error['password']} />
            </div>
            <div className="my-5">
                <p>no te has registrado ya? <Link to="/register" className="text-blue-500 hover:text-blue-600">Registrate Aqui</Link></p>
            </div>
            <button type='submit' className='p-3 mt-2 bg-gray-600 text-white rounded-md'>Enviar</button>
        </Form>
    )
}

function validate(data) {
    let error = {};
    if (!data.username) error.username = "Usuario requerido";
    if (data.username.length < 3 || data.username.length > 16) error.username = "Usuario debe tener entre 3 y 16 caracteres";
    if (!data.password) error.password = "Contraseña requerida";
    if (data.password.length < 3 || data.password.length > 16) error.password = "Contraseña debe tener entre 3 y 16 caracteres";
    return error;
}

export default LoginForm