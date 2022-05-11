import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { fetchMediaDetails } from '../common/apiFetcher'
import Movie_Basic from './movie_basic'
import Movie_Credits from './movie_credits'
import Movie_Images from './movie_images'
import Movie_Keywords from './movie_keywords'
import Movie_Videos from './movie_videos'
import Movie_similar from './movie_similar'

const TvDetail = () => {
  //----------------------------------------------------------------------------------
  const navigate = useNavigate()
  //----------------------------------------------------------------------------------
  const { search } = useLocation()
  const queriesInObject = queryString.parse(search)
  const media = 'tv'
  //----------------------------------------------------------------------------------
  useEffect(() => {
    if (!queriesInObject.id) {
      navigate('/')
    }
  }, [])
  //----------------------------------------------------------------------------------
  return (
    <>
      <Movie_Basic id={queriesInObject.id} media={media} />
      <Movie_Credits id={queriesInObject.id} media={media} />
      <Movie_Images id={queriesInObject.id} media={media} />
      <Movie_Keywords id={queriesInObject.id} media={media} />
      <Movie_Videos id={queriesInObject.id} media={media} />
      <Movie_similar id={queriesInObject.id} media={media} />
    </>
  )
}

export default TvDetail