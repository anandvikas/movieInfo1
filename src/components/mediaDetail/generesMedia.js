import React, { useContext } from 'react'
import SliderComp from '../home/sliderComp'
import './generesMedia.css'
import { GetMediaByGeneres } from '../common/apifetcher'
import { Ctx1 } from '../common/contextProvider'

const GeneresMedia = () => {
  const {activeMovie} = useContext(Ctx1)
  const {media_type, genre_ids} = activeMovie
  
  return (
    <div className='gmCon'>      
      <SliderComp data={GetMediaByGeneres(media_type, genre_ids)} heading={'Media with similar generes'} sliderid={'similar_generes_movies'} media={media_type}/>
      {/* <SliderComp data={GetMediaByGeneres('tv', genre_ids)} heading={'Series with similar generes'} sliderid={'similar_generes_tv'} media={'tv'}/> */}
    </div>
  )
}

export default GeneresMedia