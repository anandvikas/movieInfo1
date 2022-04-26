import React, { useContext, useEffect, useState } from 'react'
import { GetKeywords } from './apifetcher'
import { Ctx1 } from './contextProvider'
import KeywordsList from './keywordsList'
import KeywordsMedia from './keywordsMedia'
import './similarKeywords.css'


const SimilarKeywordMedia = () => {
  const [keywords, updateKeywords] = useState([])

  const { activeMovie } = useContext(Ctx1)
  useEffect(() => {
    GetKeywords(activeMovie.media_type, activeMovie.id, updateKeywords)
  }, [])

  return (
    <>
      {/* <KeywordsList keywords={keywords}/> */}
      <KeywordsList/>
      {/* <KeywordsMedia keywords={keywords} media={activeMovie.media_type}/> */}
    </>
  )
}

export default SimilarKeywordMedia