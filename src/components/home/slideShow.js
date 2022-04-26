import React, { useEffect, useState } from 'react'
import './slideShow.css'
import { GetImage } from '../common/apifetcher';

const SlideShow = (props) => {
    const [data, updateData] = useState(props.data)
    const [showArr, updateshowArr] = useState([0, 1, 2, 3])
    useEffect(() => {
        updateData(props.data)
    }, [props.data])

    
    setTimeout(() => {        
        let xyz = []
        if (showArr[3] === 19) {
            updateshowArr([0, 1, 2, 3])
        } else {
            for (let i = 1; i < 5; i++) {
                xyz.push(showArr[i - 1] + 4)
            }
            updateshowArr(xyz)
        }
        
    }, 5000)
    
    if (data.length !== 0) {
        return (
            <div className='ssDiv'>
            <h1>{props.heading}</h1>
                <div className='ssCon'>
                    {
                        showArr.map((val) => {
                            return (
                                <div className='ssCard anim' key={val}>
                                    <img src={GetImage(data[val].poster_path)} alt={data[val].title} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    return <h1>loading</h1>

}


export default SlideShow