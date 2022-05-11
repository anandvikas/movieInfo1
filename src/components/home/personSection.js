import React from 'react'
import SectionCard from './sectionCard'
import TrendingSlideShow from './trendingSlideShow'

const PersonSection = () => {
    const media = 'person';
    return (
        <div className='section'>
            <h1>Persons</h1>
            <TrendingSlideShow media={media} />
            <div className='sectionCards'>                
                <SectionCard query='' media={media} path='discover' text='See Popular' />
            </div>
        </div>
    )
}
export default PersonSection