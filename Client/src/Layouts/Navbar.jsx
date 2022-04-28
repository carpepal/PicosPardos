import React from 'react'
import { NavLink } from 'react-router-dom'
import CustomInput from '../Components/CustomInput'
import {useForm} from '../Services/hooks/useForm.js'

const Navbar = () => {

    const { values, handleInputChange, reset } = useForm({});
    
    const handleChange = (e) => {
        
            
    }

    return (
        <nav>
            <div className="navbar_container">
                <div className="navbar_buttons">
                    <div className="navbar_button">
                        <NavLink to="/carta">Carta</NavLink>
                    </div>
                    <div className="navbar_button">
                        <NavLink to="/eventos">Eventos</NavLink>
                    </div>
                </div>
                <div className="navbar_logo"></div>
                <div className="navbar_buttons">
                    <div className="navbar_button">
                        <NavLink to="/carrito">Carrito</NavLink>
                    </div>
                    <div className='navbar_button'>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar