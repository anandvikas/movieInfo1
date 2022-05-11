import React, { useEffect, useState } from 'react'
import { fetchRelatedVideos } from '../common/apiFetcher'

const Movie_Videos = ({ id, media }) => {
    const [data, updateData] = useState({ status_message: 'xyz' })
    const [currentVid, updateCurrentVid] = useState(null)
    useEffect(() => {
        fetchRelatedVideos(media, id, updateData)
    }, [id, media])
    //--------------------------------------------------------------------------------------------
    const changeVid = (e) => {
        if (e.target.className === 'vTitle') {
            updateCurrentVid(e.target.id)
        }
    }
    //--------------------------------------------------------------------------------------------
    useEffect(() => {
        if (data.results !== undefined) {
            if (data.results.length !== 0) {
                updateCurrentVid(data.results[0].key)
            }
        }
    }, [data])
    //---------------------------------------------------------------------------------------------
    const [toggleState, setToggleState] = useState('contracted')
    const toggle = () => {
        if (toggleState === 'contracted') {
            setToggleState('expanded')
        } else {
            setToggleState('contracted')
        }
    }
    //---------------------------------------------------------------------------------------------

    return (
        <div className='otrDetails'>
            <div className='expander' onClick={() => { toggle() }}>Related Videos</div>
            <div className={toggleState}>
                {
                    (data.results)
                        ? <>
                            <div className='vDiv'>
                                <div className='vPlay'>
                                    <iframe src={`https://www.youtube.com/embed/${currentVid}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className='vList' onClick={changeVid}>
                                    {
                                        data.results.map((val) => {
                                            return (
                                                <h3 key={val.id} id={val.key} className='vTitle'>{val.name}</h3>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                        : <h1>Fail</h1>
                }
            </div>
        </div>
    )
}
export default Movie_Videos