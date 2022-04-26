import React, { useContext, useEffect, useState } from 'react'
import { Ctx1 } from '../common/contextProvider'
import { GetKeywords } from '../common/apifetcher'
import './keywordList.css'

const KeywordsList = () => {
    const {activeMovie} = useContext(Ctx1)
    const [keywords, updateKeywords] = useState([])

    useEffect(() => {
        GetKeywords(activeMovie.media_type, activeMovie.id, updateKeywords)
      }, [activeMovie])
    return (
        <div className='kewwordsCon'>
            <h1>Keywords</h1>
            <div className='keyWordsDiv'>
                {
                    keywords.map((val) => {
                        return (
                            <span key={val.id}>{val.name}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default KeywordsList