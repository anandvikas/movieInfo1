import React from 'react'
import SectionCard from './sectionCard'
import TrendingSlideShow from './trendingSlideShow'

const MovieSection = () => {
  const media = 'movie';

  return (
    <div className='section'>
    <h1>Movies</h1>
      <TrendingSlideShow media={media} />
      <div className='sectionCards'>
        <SectionCard query='sort_by=release_date.desc' media={media} path='discover' text='New Movies'/>
        <SectionCard query='sort_by=popularity.desc' media={media} path='discover' text='Popular Movies'/>
        <SectionCard query='' media={media} path='discover' text='Discover Movies'/>
      </div>
    </div>
  )
}
export default MovieSection