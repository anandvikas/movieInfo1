import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetbyId, GetImage } from '../common/apifetcher';
import { Ctx1 } from '../common/contextProvider'
import KeywordsList from '../mediaDetail/keywordsList';
import RelatedVideos from '../mediaDetail/relatedVideos';
import GeneresMedia from './generesMedia';
import './detailspage.css'
import Basicetails from './basicDetail';


const DetailsPage = () => {
    document.documentElement.scrollTop = 0;
    const [data, updateData] = useState(null)
    const { activeMovie } = useContext(Ctx1)
    const parm = useParams()
    let {id, media} = parm   

    useEffect(()=>{
        GetbyId(media, id, updateData)
    }, [activeMovie])

    if (data !== null) {        
        return (
            <>                
                <Basicetails data={data}/>
                <RelatedVideos />
                <KeywordsList/>
                {/* <GeneresMedia/> */}
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
