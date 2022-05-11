import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import Movie_Basic from './movie_basic'
import Movie_Credits from './movie_credits'
import Movie_Images from './movie_images'
import Movie_Keywords from './movie_keywords'
import Movie_Videos from './movie_videos'
import Movie_similar from './movie_similar'

const MovieDetail = () => {
    //----------------------------------------------------------------------------------
    const navigate = useNavigate()    
    //----------------------------------------------------------------------------------
    const { search } = useLocation()
    const queriesInObject = queryString.parse(search)        
    const [query, updatequery] = useState({media : 'movie', id:queriesInObject.id})
    //----------------------------------------------------------------------------------
    useEffect(() => {
        if (!queriesInObject.id) {
            navigate('/')
        } else {
            updatequery({...query, id:queriesInObject.id})
        }        
    }, [queriesInObject.id])    
    //----------------------------------------------------------------------------------
    return (
        <>
            <Movie_Basic id={query.id} media={query.media}/>            
            <Movie_Credits id={query.id} media={query.media}/>
            <Movie_Images id={query.id} media={query.media}/>
            <Movie_Keywords id={query.id} media={query.media}/>
            <Movie_Videos id={query.id} media={query.media}/>
            <Movie_similar id={query.id} media={query.media}/>
        </>
    )
}

export default MovieDetail