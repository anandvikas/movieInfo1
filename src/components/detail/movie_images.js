import React, { useEffect, useState } from 'react'
import { fetchMediaImages, GetImageSrc } from '../common/apiFetcher'

const Movie_Images = ({ media, id }) => {
    const [data, updateData] = useState({ status_message: 'xyz' })
    useEffect(() => {
        fetchMediaImages(media, id, updateData)
    }, [id, media])
    //---------------------------------------------------------------------------------------------
    const [toggleState, setToggleState] = useState('contracted')
    const toggle = () => {
        // if(!data.id){
        //     fetchMediaImages(media, id, updateData)
        // }              
        if (toggleState === 'contracted') {
            setToggleState('expanded')
        } else {
            setToggleState('contracted')
        }
    }
    //---------------------------------------------------------------------------------------------
    return (
        <div className='otrDetails'>
            <div className='expander' onClick={() => { toggle() }}>Images</div>
            <div className={toggleState}>
                {
                    (data.id)
                        ? <>
                            <div className='imgContainer'>
                                {
                                    data.backdrops.map((val, index) => {
                                        return (
                                            <div key={index}>
                                                <img src={GetImageSrc(val.file_path, '400')} alt='poster' />
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
export default Movie_Images