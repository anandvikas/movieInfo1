import React from 'react'
import { useParams } from 'react-router-dom'

const GenrsResult = () => {
    const parms = useParams()    
    let genrId = parms.genrId
    let genrMedia = parms.genrMedia
  return (
    <div>{genrId}{genrMedia}</div>
  )
}

export default GenrsResult