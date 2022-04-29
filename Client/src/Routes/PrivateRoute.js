import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { success , error} = useSelector(state => state.User);

    if(success){
        return children;
    }else{
        return <Navigate to="/login"/>
    }

   
}

export default PrivateRoute