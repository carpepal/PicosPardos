import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
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
                    <div className="navbar_search-box">
                        <div className='input'>
                            <input type="text" name='search' placeholder='Search....'/>
                            <div className="icon">
                               <i className='material-icons'>search</i>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar