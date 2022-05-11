import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import './pagination.css'

const Pagination = (props) => {

    const navigate = useNavigate()

    const { search } = useLocation()
    const queriesInObject = queryString.parse(search)
    // console.log(queriesInObject)


    const { numOfPages, activePage } = props
    let activePageToNum = parseInt(activePage)
    // console.log(activePageToNum)

    const getQueryStr = () => {
        let queriesInString = ''
        for (let properties in queriesInObject) {
            queriesInString += `&${properties}=${queriesInObject[properties]}`
        }
        queriesInString = queriesInString.slice(1, queriesInString.length)
        return queriesInString;
    }



    const setPrevPage = () => {

        if (queriesInObject.page !== '1') {
            console.log('clicked')
            queriesInObject.page = activePageToNum - 1
            let queryInString = getQueryStr()
            navigate(`${props.basePath}?${queryInString}`)
        }

    }
    const setNextPage = () => {
        if (queriesInObject.page !== numOfPages) {
            queriesInObject.page = activePageToNum + 1
            let queryInString = getQueryStr()
            navigate(`${props.basePath}?${queryInString}`)
        }
    }
    return (
        <div className='pgiDiv'>
        <h3>Total Pages : {numOfPages}</h3>
            <div className='setPageDiv'>
                <button onClick={setPrevPage}>Prev Page</button>
                <h2>{activePage}</h2>
                <button onClick={setNextPage}>Next Page</button>
            </div>
        </div>
    )
}
export default Pagination