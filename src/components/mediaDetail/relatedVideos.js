import React, { useContext, useEffect, useState } from 'react'
import './relatedVideos.css'
import { GetVideos } from '../common/apifetcher'
import { Ctx1 } from '../common/contextProvider'
import { useParams } from 'react-router-dom'

const RelatedVideos = () => {
  const [data, updateData] = useState(null)
  const [currentVid, updateCurrentVid] = useState(null)
  const parms = useParams()
  let {id, media} = parms

  const { activeMovie } = useContext(Ctx1)
  useEffect(() => {
    // console.log('active media from related videos')
    // console.log(activeMovie)
    GetVideos(media, id, updateData)
  }, [activeMovie])
  // console.log(data)

  const changeVid = (e) => {
    if (e.target.className === 'vTitle') {
      updateCurrentVid(e.target.id)
    }
  }

  if (data !== null && data.length > 0) {
    return (
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
    )
  }
  return (
    <>
      <h1 className='vHead'>Related Videos</h1>
      <div className='vDivErr'>
        No video available
      </div>
    </>
  )
}

export default RelatedVideos