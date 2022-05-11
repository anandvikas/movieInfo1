import React from 'react'
import { useLocation } from 'react-router-dom'

const MovieSearch = () => {
    const location = useLocation()
    console.log(location)
    
  return (
    <>
        <div>MovieSearch</div>
        <div>Search result</div>
    </>
  )
}
export default MovieSearch