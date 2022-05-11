import React from 'react'
import SectionCard from './sectionCard'
import TrendingSlideShow from './trendingSlideShow'

const TvSection = () => {
  const media = 'tv'
  return (
    <div className='section'>
    <h1>TV Series</h1>
      <TrendingSlideShow media={media} />
      <div className='sectionCards'>
        <SectionCard query='sort_by=release_date.desc' media={media} path='discover' text='New Series'/>
        <SectionCard query='sort_by=popularity.desc' media={media} path='discover' text='Popular Series'/>
        <SectionCard query='' media={media} path='discover' text='Discover Series'/>
      </div>
    </div>
  )
}

export default TvSection