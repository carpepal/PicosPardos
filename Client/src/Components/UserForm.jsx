import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Field , reduxForm} from 'redux-form'
import CustomInput from './CustomInput'
import { onChangeLoginForm , RegisterFetch} from '../Services/reducers/LoginSlice'

const UserForm = () => {

  const dispatch = useDispatch();
  const {name , username, password , email , phone} = useSelector(state => state.Forms.loginForm);

  const handleChange = ({target:{name , value}}) => {
    const sendData = {};
    sendData[name] = value
    dispatch(onChangeLoginForm(sendData));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = validate({name , username, password , email , phone});
    if(Object.keys(error).length !== 0){
      console.log(error);
      return;
    }else{
      dispatch(RegisterFetch({name , username, password , email , phone}));
      console.log('Enviado');
    }


  }

  return (
    <form name='Login' onSubmit={handleSubmit}>
            <CustomInput name="name" type="text" label="Name" placeholder="Nombre" value={name} handleInputChange={handleChange}/>    
            <CustomInput name='username' type='text' label='Usuario' placeholder="Usuario" handleInputChange={handleChange} value={username}/>
            <CustomInput name='password' type='password' label='Contraseña' placeholder="Contrase;a" handleInputChange={handleChange} value={password}/>
            <CustomInput name='email' type='email' label='Email' placeholder="Email" handleInputChange={handleChange} value={email}/>
            <CustomInput name='phone' type='text' label='Telefono' placeholder="Telefono" handleInputChange={handleChange} value={phone}/>
            <button type='submit'>Enviar</button>
    </form>
  )
}

const validate  = values => {
  const errors = {}
  console.log(values);
  if (!values.username) {
    errors.username = 'Required'
  }
  return errors
}

export default UserForm;