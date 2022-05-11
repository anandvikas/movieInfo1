import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './discover.css'
import './controls.css'

const Discover = () => {
  return (
    <>
      <h1 className='pageTitle'>Discover</h1>
      <div className='dNavDiv'>
        <NavLink className='navLink' to='./movie?page=1'>Movie</NavLink>
        <NavLink className='navLink' to='./tv?page=1'>Tv</NavLink>
        <NavLink className='navLink' to='./person?page=1'>Person</NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}
export default Discover
