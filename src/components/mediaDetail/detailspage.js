import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetbyId, GetImage } from '../common/apifetcher';
import { Ctx1 } from '../common/contextProvider'
import KeywordsList from '../mediaDetail/keywordsList';
import RelatedVideos from '../mediaDetail/relatedVideos';
import GeneresMedia from './generesMedia';


const DetailsPage = () => {
    document.documentElement.scrollTop = 0;
    const [data, updateData] = useState(null)
    const { activeMovie } = useContext(Ctx1)
    const parm = useParams()
    let id = parm.id    

    useEffect(()=>{
        GetbyId(activeMovie.media_type, id, updateData)
    }, [activeMovie])

    if (data !== null) {        
        return (
            <>
                <div className='detailDiv'>
                    <div className='detailCardDiv'>
                        <div className='detailImgDiv'>
                            <img src={GetImage(data.poster_path)} alt={data.title} />
                        </div>
                        <div className='detailTextDiv'>
                            <h1>{(data.name === undefined) ? data.title : data.name}</h1>
                            <h3>Genres : </h3>
                            <div>
                                {
                                    data.genres.map((genVal) => {
                                        return <span key={genVal.id}>{genVal.name}</span>
                                    })
                                }
                            </div>
                            <h3>Release date : {data.release_date}</h3>
                            <p>{data.overview}</p>
                        </div>
                    </div>
                </div>
                <RelatedVideos />
                <KeywordsList/>
                <GeneresMedia/>
            </>
        )
    }
    return (
        <div className='detailDiv'>
            <div className='detailCardDiv'>
                <h1>Loading ... </h1>
            </div>
        </div>
    )
}
export default DetailsPage
