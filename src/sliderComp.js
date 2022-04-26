import React, { useContext, useEffect, useState } from 'react'
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import { Ctx1 } from './contextProvider';
import { GetImage } from './apifetcher';

const SliderComp = (props) => {
    // console.log(props.data)
    const navigate = useNavigate()
    const { updateActiveMovie, updateActivePerson } = useContext(Ctx1)
    const [data, updateData] = useState(props.data)

    useEffect(() => {
        updateData(props.data)
    }, [props.data])

    const scrollDiv = () => {
        document.getElementById(`${props.sliderid}`).scrollLeft += 380;
    }

    const setActive = (e) => {
        if (e.target.className === 'textSh3') {
            // console.log(e.target.id)            
            if(props.sliderid === 'person'){
                updateActivePerson(() => {
                    // console.log(data)
                    let activePerson = data.find((val) => {
                        return val.id == e.target.id
                    })
                    // console.log(activePerson)
                    return activePerson
                })
                navigate(`./person/${e.target.id}`)                
            } else {
                updateActiveMovie(() => {
                    // console.log(data)
                    let activeMovie = data.find((val) => {
                        return val.id == e.target.id
                    })
                    // console.log(activeMovie)
                    return activeMovie
                })
                navigate(`./media/${e.target.id}`)                
            }            
        }
    }
    return (
        <div className='mainS'>
            <hr />
            <h1>{props.heading}</h1>
            <div className='slideDivS' id={props.sliderid} onClick={setActive}>
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
                                    <h3 id={val.id} className='textSh3'>{(val.name === undefined) ? val.title : val.name}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='sliderBtn' onClick={scrollDiv}>more</div>
            {/* <NavigateNextIcon id='NavigateNextIcon' /> */}
        </div>
    )
}

export default SliderComp