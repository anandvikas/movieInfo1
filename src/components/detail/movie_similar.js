import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchSimilarMedia, GetImageSrc } from '../common/apiFetcher'

const Movie_similar = ({ id, media }) => {
    const [data, updateData] = useState({ status_message: 'xyz' })
    useEffect(() => {
        fetchSimilarMedia(media, id, updateData)
    }, [id, media])
    //---------------------------------------------------------------------------------------------
    const [toggleState, setToggleState] = useState('expanded')
    const toggle = () => {
        // if (!data.results) {
        //     fetchSimilarMedia(media, id, updateData)
        // };
        if (toggleState === 'contracted') {
            setToggleState('expanded')

        } else {
            setToggleState('contracted')
        };
    }
    //---------------------------------------------------------------------------------------------
    return (
        <div className='otrDetails'>
            <div className='expander' onClick={() => { toggle() }}>Similar</div>
            <div className={toggleState}>
                {
                    (data.results)
                        ? <>
                            <div className='tssMain'>
                                {
                                    data.results.map((val) => {
                                        return (
                                            <div key={val.id} className='tssCards'>
                                                <Link to={`/detail_${media}?id=${val.id}`} className='tssCardsLink'>
                                                    <img src={GetImageSrc(!val.poster_path ? val.profile_path : val.poster_path)} className='tssImg'/>
                                                    <h2 className='tssName'>{!val.title ? val.name : val.title}</h2>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                        : <h1>Fail</h1>
                }
            </div>
        </div>
    )
}

export default Movie_similar