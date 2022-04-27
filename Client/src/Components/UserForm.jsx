import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Field , reduxForm} from 'redux-form'
import CustomInput from './CustomInput'
import { setRegisterData, RegisterFetch , setRegisterError} from '../Services/reducers/LoginSlice'

const UserForm = () => {
  const dispatch = useDispatch();
  const {name , username, password , email , phone , error} = useSelector(state => state.Forms.registerData);
  

  const handleChange = ({target:{name , value}}) => {
    dispatch(setRegisterData({[name]:value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = validate({name , username, password , email , phone});
    if(Object.keys(error).length !== 0){
      console.log('error' , error);
      dispatch(setRegisterError(error));
      return;
    }else{
      dispatch(setRegisterError(error));
      dispatch(RegisterFetch({name , username, password , email , phone})).then(res => console.log(res));
      console.log('Enviado');
    }


  }

  return (
    <form name='Login' onSubmit={handleSubmit}>
            <CustomInput name="name" type="text" label="Name" placeholder="Nombre" value={name}
                         handleInputChange={handleChange} error={error['name']}/>    
            <CustomInput name='username' type='text' label='Usuario' placeholder="Usuario" 
                        handleInputChange={handleChange} value={username} error={error['username']}/>
            <CustomInput name='password' type='password' label='Contraseña' placeholder="Contrase;a" 
                        handleInputChange={handleChange} value={password} error={error['password']}/>
            <CustomInput name='email' type='email' label='Email' placeholder="Email" 
                        handleInputChange={handleChange} value={email} error={error['email']}/>
            <CustomInput name='phone' type='text' label='Telefono' placeholder="Telefono" 
                        handleInputChange={handleChange} value={phone} error={error['phone']}/>
            <button type='submit'>Enviar</button>
    </form>
  )
}

const validate  = values => {
  const errors = {}
  console.log(values);
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 16 || values.username.length < 3) {
    errors.username = 'Must be 3 to 16 characters'
  }
  if(!values.password){
    errors.password = 'Required'
  }else if(values.password.length < 6 || values.password.length > 16 ){
    errors.password = 'Must be 6 to 16 characters'
  }
  if(!values.name){
    errors.name = 'Required'
  }else if(values.name.length < 3 || values.name.length > 16){
    errors.name = 'Must be 3 to 16 characters'
  }
  if(!values.email){
    errors.email = 'Required'
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = 'Invalid email address'
  }
  if(!values.phone){
    errors.phone = 'Required'
  }else if(!/^[0-9]{10}$/.test(values.phone)){
    errors.phone = 'Invalid phone number'
  }
  return errors
}

export default UserForm;