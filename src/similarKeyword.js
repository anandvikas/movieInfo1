import React, { useContext } from 'react'
import { GetKeywords } from './apifetcher'
import { Ctx1 } from './contextProvider'

const SimilarKeywordMedia = () => {
    const {activeMovie} = useContext(Ctx1)
    GetKeywords(activeMovie.media_type, activeMovie.id)

  return (
    <div>SimilarKeywordMedia</div>
  )
}

export default SimilarKeywordMedia