import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomInput from './CustomInput'
import { setRegisterData, RegisterFetch, setRegisterError } from '../Services/reducers/FormSlice.js'
import {Link , useNavigate} from 'react-router-dom'
import Form from './Form'


//componente de formulario de registro
const UserForm = () => {

  //dispatch para enviar los datos del formulario
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //selector del estado global de redux
  const { name, username, password, email, phone, error } = useSelector(state => state.Forms.registerData);

  //function para cambiar los datos del estado global
  const handleChange = ({ target: { name, value } }) => {
    dispatch(setRegisterData({ name: "registerData", data: { [name]: value } }));
  }

  //function para enviar los datos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    let error = validate({ name, username, password, email, phone });
    if (Object.keys(error).length !== 0) {
      console.log('error', error);
      dispatch(setRegisterError({ name: "registerData", data: error }));
      return;
    } else {
      dispatch(setRegisterError({ name: "registerData", data: { error } }));
      dispatch(RegisterFetch({ name, username, password, email, phone })).then(res => console.log(res));
      console.log('Enviado');
      navigate('/' , { replace: true });
      
    }


  }

  //function para renderizar el formulario
  return (
    <Form name='register' handleSubmit={handleSubmit}>
      <h1 className='font-bold text-3xl'>Register</h1>
      <div className="w-full flex flex-col justify-center items-center p-4">
        <CustomInput name="name" type="text" label="Name" placeholder="Nombre" value={name}
          handleInputChange={handleChange} error={error['name']} />
        <CustomInput name='username' type='text' label='Usuario' placeholder="Usuario"
          handleInputChange={handleChange} value={username} error={error['username']} />
        <CustomInput name='password' type='password' label='Contrase??a' placeholder="Contrase;a"
          handleInputChange={handleChange} value={password} error={error['password']} />
        <CustomInput name='email' type='email' label='Email' placeholder="Email"
          handleInputChange={handleChange} value={email} error={error['email']} />
        <CustomInput name='phone' type='text' label='Telefono' placeholder="Telefono"
          handleInputChange={handleChange} value={phone} error={error['phone']} />
      </div>
      <div className="my-5">
                <p>Ya te has registrado? <Link to="/login" className="text-blue-500 hover:text-blue-600">Logeate</Link></p>
            </div>
      <button type='submit'  className='p-3 mt-2 bg-gray-600 text-white rounded-md'>Enviar</button>
    </Form>
  )
}

//validacion del formulario
const validate = values => {
  const errors = {}
  console.log(values);
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 16 || values.username.length < 3) {
    errors.username = 'Debe de tener entre 3 y 16 caracteres'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6 || values.password.length > 16) {
    errors.password = 'Debe de tener entre 3 y 16 caracteres'
  }
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 3 || values.name.length > 16) {
    errors.name = 'Debe de tener entre 3 y 16 caracteres'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  } else if (!/^[0-9]{9}$/.test(values.phone)) {
    errors.phone = 'Invalid phone number'
  }
  return errors
}

export default UserForm;