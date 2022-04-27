import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navbar'>
            <NavLink className='navLink' to='/movieInfo1/'>Home</NavLink>
            <NavLink className='navLink' to='/movieInfo1/movie'>Movies</NavLink>
            <NavLink className='navLink' to='/movieInfo1/tv'>Series</NavLink>
            <NavLink className='navLink' to='/movieInfo1/person'>Persons</NavLink>
        </div>
    )
}

export default Nav