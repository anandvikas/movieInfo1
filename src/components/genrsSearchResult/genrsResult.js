import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetMediaByGeneres } from '../common/apifetcher'
import SliderComp from '../home/sliderComp'
import LoadingSpinner from '../loader/loadingSpinner'

const GenrsResult = () => {
  const parms = useParams()
  let genrId = [parms.genrId]
  let genrMedia = parms.genrMedia
  const [data, updateData] = useState(null)
  useEffect(() => {
    GetMediaByGeneres(genrMedia, genrId, updateData)
  }, [])
  if (data !== null) {
    return (
      <SliderComp data={data} heading={'Media with similar genrs'} sliderid={'genrs_movies'} media={genrMedia} />
    )
  }
  return <h1 className='slideDivS'><LoadingSpinner/></h1>
}

export default GenrsResult