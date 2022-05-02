import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navbar'>
            <NavLink className='navLink' to='/'>Home</NavLink>
            <NavLink className='navLink' to='/movie'>Movies</NavLink>
            <NavLink className='navLink' to='/tv'>Series</NavLink>
            <NavLink className='navLink' to='/person'>Persons</NavLink>
            <NavLink className='navLink' to='/filter'>Filter</NavLink>
        </div>
    )
}

export default Nav