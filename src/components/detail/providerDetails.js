import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import Company_Basic from './company_basic'
import Provider_Basic from './provider_basic'


const ProviderDetail = () => {
    //-----------------------------------------------------------------------------------
    const { search } = useLocation()
    const queriesInObject = queryString.parse(search)
    const { id } = queriesInObject
    console.log(id)
    //----------------------------------------------------------------------------------
  return (
    <Provider_Basic id={id}/>
  )
}

export default ProviderDetail