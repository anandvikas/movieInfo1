import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navbar'>
            <NavLink className='navLink' to='/movieInfo1/'>Home</NavLink>
            <NavLink className='navLink' to='/movieInfo1/movies'>Movies</NavLink>
            <NavLink className='navLink' to='/movieInfo1/series'>Series</NavLink>
            <NavLink className='navLink' to='/movieInfo1/person'>Person</NavLink>
        </div>
    )
}

export default Nav