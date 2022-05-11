import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import Company_Basic from './company_basic'

const CompanyDetails = () => {
    //-----------------------------------------------------------------------------------
    const { search } = useLocation()
    const queriesInObject = queryString.parse(search)
    const { id } = queriesInObject
    console.log(id)
    //----------------------------------------------------------------------------------
    return (
        <>
            <Company_Basic id={id}/>
        </>
    )
}

export default CompanyDetails