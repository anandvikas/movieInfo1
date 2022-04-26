import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetbyId, GetImage } from './apifetcher';
import { Ctx1 } from './contextProvider'
import RelatedVideos from './relatedVideos';
import SimilarKeywordMedia from './similarKeyword';

const DetailsPage = () => {
    document.documentElement.scrollTop = 0;
    const [data, updateData] = useState(null)
    const { activeMovie } = useContext(Ctx1)
    const parm = useParams()
    let id = parm.id
    console.log('chikara')

    GetbyId(activeMovie.media_type, id, updateData)

    if (data !== null) {
        console.log('chikara')
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
                <SimilarKeywordMedia/>
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