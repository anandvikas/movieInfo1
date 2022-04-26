import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navbar'>
            <NavLink className='navLink' to='/'>Home</NavLink>
            <NavLink className='navLink' to='/movies'>Movies</NavLink>
            <NavLink className='navLink' to='/series'>Series</NavLink>
            <NavLink className='navLink' to='/person'>Person</NavLink>
        </div>
    )
}

export default Nav