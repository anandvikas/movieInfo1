import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div className='navDiv'>
        <NavLink className='navLink' to='/'>Home</NavLink>
        <NavLink className='navLink' to='/discover'>Discover</NavLink>
        <NavLink className='navLink' to='/search'>Search</NavLink>
    </div>
  )
}

export default Nav