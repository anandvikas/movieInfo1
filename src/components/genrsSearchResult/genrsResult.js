import React from 'react'
import { useParams } from 'react-router-dom'
import { GetMediaByGeneres } from '../common/apifetcher'
import SliderComp from '../home/sliderComp'

const GenrsResult = () => {
    const parms = useParams()    
    let genrId = [parms.genrId]
    let genrMedia = parms.genrMedia
  return (
    <SliderComp data={GetMediaByGeneres(genrMedia, genrId)} heading={'Media with similar genrs'} sliderid={'genrs_movies'} media={genrMedia}/>
  )
}

export default GenrsResult