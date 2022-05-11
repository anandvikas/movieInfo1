import React, { useState, useEffect } from 'react'
import { getAllGeneres, fetchDiscover } from '../common/apiFetcher'
import { useNavigate } from 'react-router-dom'


const years = []
for (let i = 1980; i <= 2022; i++) {
    years.push(i)
}
const DmControls = () => {
    const [queries, setQueries] = useState({ media: 'movie', yearQuery: 'year', yearQueryNum: '2022', with_genres: '', sort_by: 'popularity.desc', page : 1 })
    const [availableGenrs, setAvailableGenrs] = useState([])
    const navigate = useNavigate()

    const updateQueries = (e) => {
        const { name, value } = e.target
        setQueries((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const applyFilter = () => {
        // fetchDiscover(queries, updateData)
        let queryString = `?sort_by=${queries.sort_by}&${queries.yearQuery}=${queries.yearQueryNum}&with_genres=${queries.with_genres}&page=${queries.page}`
        navigate(`/discover/${queries.media}${queryString}`)
    }

    useEffect(() => {
        getAllGeneres(queries.media, setAvailableGenrs)
    }, [queries.media])

    useEffect(() => {
        if (availableGenrs.length !== 0) {
            setQueries((prev) => {
                return { ...prev, with_genres: availableGenrs[0].id }
            })
        }
    }, [availableGenrs])
    return (
        <>
            <div className='filterOptions'>
                <div className='fs'>
                    Release :
                    <select className='releaseYear' name='yearQuery' onChange={updateQueries}>
                        <option value='year'>Year</option>
                        <option value='release_date.lte'>Before</option>
                        <option value='release_date.gte'>After</option>
                    </select>
                    <select className='releaseYearNum' name='yearQueryNum' onChange={updateQueries}>
                        {
                            years.map((val) => {
                                return <option key={val} value={val}>{val}</option>
                            })
                        }
                    </select>
                </div>
                <div className='fs'>
                    Genrs :
                    <select className='genrs' name='with_genres' onChange={updateQueries} >
                        {
                            availableGenrs.map((val) => {
                                return (
                                    <option key={val.id} value={val.id}>{val.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='fs'>
                    Sort by :
                    <select className='sort' name='sort_by' onChange={updateQueries}>
                        <option value='popularity.desc'>Popularity Desc.</option>
                        <option value='popularity.asc'>Popularity Asc.</option>
                        <option value='release_date.desc'>Release Date Desc.</option>
                        <option value='release_date.asc'>Release Date Asc.</option>
                        <option value='revenue.desc'>Revenue Desc.</option>
                        <option value='revenue.asc'>Revenue Asc.</option>
                        <option value='vote_count.desc'>Vote count Desc.</option>
                        <option value='vote_count.asc'>Vote count Asc.</option>
                    </select>
                </div>
            </div>
            <div className='appBtn'><button onClick={applyFilter}>Apply filter</button></div>
        </>
    )
}
export default DmControls