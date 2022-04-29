import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GetImage } from '../common/apifetcher';

const SliderComp = (props) => {    
    const [data, updateData] = useState(props.data)

    useEffect(() => {
        updateData(props.data)
    }, [props.data])

    const scrollDiv = () => {
        document.getElementById(`${props.sliderid}`).scrollLeft += 380;
    }
    
    return (
        <div className='mainS'>            
            <h1>{props.heading}</h1>
            <div className='slideDivS' id={props.sliderid} >
                {
                    data.map((val) => {
                        return (
                            <div className='cardsS' key={val.id}>
                                <div className='imgS'>
                                    {
                                        props.sliderid === 'person' ? <img src={GetImage(val.profile_path)} alt={val.title} className='roundImg'/> : <img src={GetImage(val.poster_path)} alt={val.title} />
                                    }                                    
                                </div>
                                <div className='textS'>
                                    <Link to={`/movieInfo1/${props.media}/${val.id}`}><h3 className='textSh3'>{(val.name === undefined) ? val.title : val.name}</h3></Link>                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='sliderBtn' onClick={scrollDiv}>more</div>            
        </div>
    )
}

export default SliderComp