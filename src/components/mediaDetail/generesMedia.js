import React, { useEffect, useState } from 'react'
import SliderComp from '../home/sliderComp'
import './generesMedia.css'
import { GetGenrsbyId, GetMediaByGeneres } from '../common/apifetcher'

import { useParams } from 'react-router-dom'

const GeneresMedia = () => {  
  const parms = useParams()
  const [data, updateData] = useState(null)
  const [genrs, updateGenrs] = useState(null)
  let { id, media } = parms
  // console.log(id, media)

  useEffect(() => {
    GetGenrsbyId(media, id, updateGenrs)
  }, [])

  useEffect(() => {
    console.log(genrs)
    if (genrs !== null) {
      GetMediaByGeneres(media, genrs, updateData)
    }
    console.log(data)
  }, [genrs])

  if (data !== null) {
    return (
      <div className='gmCon'>
        <SliderComp data={data} heading={'Media with similar generes'} sliderid={'similar_generes_movies'} media={media} />
        <h1>sucess</h1>
      </div>
    )
  }
  return (<div className='gmCon'>data not found</div>)
}

export default GeneresMedia