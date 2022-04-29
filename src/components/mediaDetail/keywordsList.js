import React, { useEffect, useState } from 'react'
import { GetKeywords } from '../common/apifetcher'
import { useParams } from 'react-router-dom'
import './keywordList.css'


const KeywordsList = () => {    
    const [keywords, updateKeywords] = useState([])
    const parms = useParams()
    let {id, media} = parms

    useEffect(() => {
        GetKeywords(media, id, updateKeywords)
      }, [])

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