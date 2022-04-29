import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetbyId } from '../common/apifetcher';
import './detailspage.css'

import KeywordsList from '../mediaDetail/keywordsList';
import RelatedVideos from '../mediaDetail/relatedVideos';
import GeneresMedia from './generesMedia';
import Basicetails from './basicDetail';
import LoadingSpinner from '../loader/loadingSpinner';


const DetailsPage = () => {
    document.documentElement.scrollTop = 0;
    const [data, updateData] = useState(null)
    const parm = useParams()
    let { id, media } = parm

    useEffect(() => {
        GetbyId(media, id, updateData)
    }, [media, id])

    return ((data !== null) ?
        <>
            <Basicetails data={data} />
            <RelatedVideos />
            <KeywordsList />
            <GeneresMedia />
        </>
        :
        <div className='detailDiv'>
            <div className='detailCardDiv'>
                <LoadingSpinner />
            </div>
        </div>
    )
    
}
export default DetailsPage
