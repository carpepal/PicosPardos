import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const [isLogged, setIsLogged] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch('http://localhost:3000/api/private/isLogged', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
        }).then(res => res.json()).then(data => {
            setIsLogged(data.isLogged);
            setIsLoading(false);
        })


    }, [])

    if(isLoading){
        return (<div>Loading....</div>);
    }else{
        if(isLogged){
            return children;
        }
        else{
            return <Navigate to="/login" />
        }
    }



}

export default PrivateRoute