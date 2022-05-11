import './trendingSlideShow.css'
import React, { useEffect, useState } from 'react'
import { FetechTrending, GetImageSrc } from '../common/apiFetcher'
import { Link, NavLink } from 'react-router-dom'

const TrendingSlideShow = (props) => {
  const { media } = props

  // this stores the array of trending media 
  const [arrayOfTrending, setArrayOfTrending] = useState([])

  // run after component mount 
  useEffect(() => {
    FetechTrending(media, 'day', setArrayOfTrending)
    // console.log(arrayOfTrending)
  }, [])

  // component 
  return (
    <div className='tssMain'>
      {
        arrayOfTrending.map((val) => {
          return (
            <div key={val.id} className='tssCards'>
              <Link to={`/detail_${media}?id=${val.id}`} className='tssCardsLink'>
                <img src={GetImageSrc(!val.poster_path ? val.profile_path : val.poster_path)} className='tssImg'/>
                <h2 className='tssName'>{!val.title ? val.name : val.title}</h2>
              </Link>

            </div>
          )
        })
      }
    </div>
  )
}
export default TrendingSlideShow