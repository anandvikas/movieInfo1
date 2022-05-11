import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSearch } from '../common/apiFetcher'
import Results from '../results/results'
import SearchControls from './searchControls'
import queryString from 'query-string'
import './search.css'
import Pagination from '../pagination/pagination'

const SearchPage = () => {
    //-------------------------------------------------------------------------------------
    const [data, updateData] = useState({ results: [] })
    //-------------------------------------------------------------------------------------
    const { search } = useLocation()
    const queriesInObject = queryString.parse(search)
    const { media, query, page } = queriesInObject
    //-------------------------------------------------------------------------------------
    useEffect(() => {
        if (search) {
            fetchSearch(query, media, page, updateData)
        }
        // console.log('xyz')
    }, [media, query, page])
    //------------------------------------------------------------------------------------- 
    return (
        <>
            <SearchControls />
            <div>
                {
                    (data.results.length !== 0)
                        ? <>
                            <Results data={data.results} media={media} />
                            <Pagination numOfPages={data.total_pages} activePage={page} basePath='/search' />
                        </>
                        : null
                }
            </div>

        </>
    )
}
export default SearchPage