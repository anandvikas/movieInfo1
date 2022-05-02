import React, { useEffect, useState } from 'react'
import { fetchDiscover, getAllGeneres } from '../common/apifetcher'
import { Link } from 'react-router-dom'
import './filterPage.css'
const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]

const FilterPage = () => {
    const [queries, setQueries] = useState({ media: 'movie', yearQuery: 'year', yearQueryNum: '2022', with_genres: '', sort_by: 'popularity.desc' })
    const [data, updateData] = useState([])
    const [availableGenrs, setAvailableGenrs] = useState([])
    const updateQueries = (e) => {
        const { name, value } = e.target
        setQueries((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const applyFilter = () => {
        fetchDiscover(queries, updateData)
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
                    Media :
                    <select className='mediaType' name='media' onChange={updateQueries}>
                        <option value='movie'>Movie</option>
                        <option value='tv'>TV</option>
                    </select>
                </div>
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
            <hr />
            <div className='mediaResult'>
                {
                    data.map((val) => {
                        return (
                            <div className='mediaCardsS' key={val.id}>
                                <div className='mediaImgS'><Link to={`/${queries.media}/${val.id}`}>
                                    {
                                        queries.media === 'person' ? <img src={`https://image.tmdb.org/t/p/w200${val.profile_path}`} alt={val.title} /> : <img src={`https://image.tmdb.org/t/p/w200${val.poster_path}`} alt={val.title} />
                                    }</Link>
                                </div>

                                <div className='mediaTextS'>
                                    <Link to={`/${queries.media}/${val.id}`}><h3 className='textSh3'>{(val.name === undefined) ? val.title : val.name}</h3></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default FilterPage
