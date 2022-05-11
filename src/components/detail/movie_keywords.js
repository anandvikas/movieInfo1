import React, { useEffect, useState } from 'react'
import { fetchMediaKeywors } from '../common/apiFetcher'

const Movie_Keywords = ({ media, id }) => {
    const [data, updateData] = useState({ status_message: 'xyz' })
    useEffect(() => {
        fetchMediaKeywors(media, id, updateData)
    }, [id, media])
    //---------------------------------------------------------------------------------------------
    const [toggleState, setToggleState] = useState('contracted')
    const toggle = () => {
        // if(!data.id){
        //     fetchMediaKeywors(media, id, updateData)
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
            <div className='expander' onClick={() => { toggle() }}>Keywords</div>
            <div className={toggleState}>
                {
                    (data.id)
                        ? <>
                            <div className='keyWordsDiv'>
                                {
                                    (!data.keywords ? data.results : data.keywords).map((val) => {
                                        return (
                                            <span key={val.id}>{val.name}</span>
                                        )
                                    })
                                }
                            </div>
                        </>
                        : <h1>Data not available</h1>
                }
            </div>
        </div>
    )
}

export default Movie_Keywords