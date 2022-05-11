import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { fetchPopularPerson } from '../common/apiFetcher'
import Pagination from '../pagination/pagination'
import Results from '../results/results'

const DiscoverPerson = () => {
    //-------------------------------------------------------------------------------------
    const { search } = useLocation()
    const queriesInObject = queryString.parse(search)
    console.log(queriesInObject)
    const { page } = queriesInObject
    // console.log(page)
    const media = 'person'
    //-------------------------------------------------------------------------------------
    const [data, updateData] = useState({ results: [] })
    useEffect(() => {
        fetchPopularPerson(page, updateData)
    }, [page])
    //-------------------------------------------------------------------------------------

    return (
        <>
            <div>
                {
                    (data.results.length !== 0)
                        ? <Results data={data.results} media={media} />
                        : <h1>Loading</h1>
                }
            </div>
            <Pagination numOfPages={data.total_pages} activePage={page} basePath='/discover/person' />
        </>
    )
}

export default DiscoverPerson