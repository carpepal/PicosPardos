import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { verifyAdminRole } from '../Services/reducers/UserSlice';

const AdminRoute = ({children}) => {

    const dispatch = useDispatch();
    dispatch(verifyAdminRole());

    const {isAdmin} = useSelector(state => state.User);
    

    if(isAdmin){
        return children;
    }else{
        <Navigate to="/login" />
    }

    
}

export default AdminRoute