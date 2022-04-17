import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const navLinkStyle = ({ isActive }) => {

        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'blue' : '#000',
        }
    }

  return (
    <nav>
        <NavLink style={navLinkStyle} to="/">Home</NavLink>
        <NavLink style={navLinkStyle} to="/about">About</NavLink>
    </nav>
  )
}

export default NavBar