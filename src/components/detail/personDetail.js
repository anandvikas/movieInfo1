import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import Person_Basic from './person_basic'
import Person_Images from './person_images'
import './personDetails.css'
import Person_Credits from './person_credits'

const PersonDetail = () => {
    //-----------------------------------------------------------------------------------
    const {search} = useLocation()
    const queriesInObject = queryString.parse(search)
    const {id} = queriesInObject
    // console.log(id)
    //----------------------------------------------------------------------------------
    
  return (
    <>
        <Person_Basic id={id}/>
        <Person_Images id={id}/>
        <Person_Credits id={id} media = 'movie'/>
        <Person_Credits id={id} media = 'tv'/>
    </>
  )
}

export default PersonDetail