import React, { useEffect, useState } from 'react'
import { getMediaByKeyword } from './apifetcher'

const KeywordsMedia = (props) => {
    const { keywords, media } = props

    const [data, updateData] = useState([])
    useEffect(()=>{
        getMediaByKeyword(media, keywords, updateData)
    })
    return (
        <div className='kewwordsCon'>
            <h1>With Similar Keywords</h1>
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

export default KeywordsMedia