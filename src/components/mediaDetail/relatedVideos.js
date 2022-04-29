import React, { useEffect, useState } from 'react'
import { GetVideos } from '../common/apifetcher'
import { useParams } from 'react-router-dom'
import './relatedVideos.css'

const RelatedVideos = () => {
  const [data, updateData] = useState(null)
  const [currentVid, updateCurrentVid] = useState(null)
  const parms = useParams()
  let {id, media} = parms
  
  useEffect(() => {    
    GetVideos(media, id, updateData)
  }, [media, id])  

  // this will change the video in iframe 
  const changeVid = (e) => {
    if (e.target.className === 'vTitle') {
      updateCurrentVid(e.target.id)
    }
  }

  return (
    (data !== null && data.length > 0) ?
    <>
        <h1 className='vHead'>Related Videos</h1>
        <div className='vDiv'>
          <div className='vPlay'>
            <iframe src={`https://www.youtube.com/embed/${currentVid === null ? data[0].key : currentVid}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='vList' onClick={changeVid}>
            {
              data.map((val) => {
                return (
                  <h3 key={val.id} id={val.key} className='vTitle'>{val.name}</h3>
                )
              })
            }
          </div>
        </div>
      </>
      :
      <>
      <h1 className='vHead'>Related Videos</h1>
      <div className='vDivErr'>
        No video available
      </div>
    </>
  )  
}

export default RelatedVideos