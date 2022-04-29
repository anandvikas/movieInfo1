import React, { useEffect, useState } from 'react'
import { GetGenrsbyId, GetMediaByGeneres } from '../common/apifetcher'
import { useParams } from 'react-router-dom'
import './generesMedia.css'

import LoadingSpinner from '../loader/loadingSpinner';
import SliderComp from '../home/sliderComp'

const GeneresMedia = () => {
  const parms = useParams()
  const [data, updateData] = useState(null)
  const [genrs, updateGenrs] = useState(null)
  let { id, media } = parms


  useEffect(() => {
    GetGenrsbyId(media, id, updateGenrs)
  }, [])

  useEffect(() => {
    console.log(genrs)
    if (genrs !== null) {
      GetMediaByGeneres(media, genrs, updateData)
    }
    // console.log(data)
  }, [genrs])

  return (
    (data !== null) ?
      <div className='gmCon'>
        <SliderComp data={data} heading={'Media with similar generes'} sliderid={'similar_generes_movies'} media={media} />
        <h1>sucess</h1>
      </div>
      :
      <div className='gmCon'><LoadingSpinner /></div>
  )  
}

export default GeneresMedia