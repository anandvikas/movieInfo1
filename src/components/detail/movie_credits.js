import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchMediaCredits, GetImageSrc } from '../common/apiFetcher'

const Movie_Credits = ({ id, media }) => {
    //---------------------------------------------------------------------------------------------
    const [data, updateData] = useState({ status_message: 'xyz' })
    useEffect(() => {
        fetchMediaCredits(media, id, updateData)
    }, [id, media])
    //---------------------------------------------------------------------------------------------
    const [toggleState, setToggleState] = useState('contracted')
    const toggle = () => {   
        // if(!data.id){
        //     fetchMediaCredits(media, id, updateData)
        // }     
        if(toggleState === 'contracted'){
            setToggleState('expanded')
        } else {
            setToggleState('contracted')
        }
    }
    //---------------------------------------------------------------------------------------------
    return (
        <div className='otrDetails'>
            <div className='expander' onClick={()=>{toggle()}}>Credits</div>
            <div className={toggleState}>
                {
                    (data.id)
                        ? <>
                            <div>
                                <h3>Cast</h3>
                                <div className='keyWordsDiv'>
                                    {
                                        data.cast.map((val) => {
                                            return (
                                                <span key={val.id}>{val.name}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <h3>Crew</h3>
                                <div className='keyWordsDiv'>
                                    {
                                        data.crew.map((val) => {
                                            return (
                                                <>
                                                    {/* <img src={GetImageSrc(val.profile_path)} /> */}
                                                    {/* <Link to={`/detail_person?id=${val.id}`}><span>{val.name}</span></Link>                             */}
                                                    <span key={val.id}>{val.name}</span>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                        : <h1>No Data Available</h1>
                }
            </div>
        </div>
    )
}

export default Movie_Credits