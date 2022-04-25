import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Field , reduxForm} from 'redux-form'

const UserForm = () => {

  return (
    <form name='Login'>
        <label htmlFor="username">
            <Field name="username" component="input" type="text" placeholder="Username"/>
        </label>
    </form>
  )
}

const validate  = values => {
    
}
export default reduxForm({
    form: "login",
    validate
})(UserForm)