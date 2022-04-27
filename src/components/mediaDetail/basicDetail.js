import React from 'react'
import { GetImage } from '../common/apifetcher';

const Basicetails = (props) => {
    let { data } = props
    return (
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

                </div>
            </div>
            <p className='overVievPara'>{data.overview}</p>
            <table>
                <tbody>
                    <tr>
                        <td>Budget</td>
                        <td>{data.budget}</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>{data.homepage}</td>
                    </tr>
                    <tr>
                        <td>Popularity</td>
                        <td>{data.popularity}</td>
                    </tr>
                    <tr>
                        <td>Popularity</td>
                        <td>{data.popularity}</td>
                    </tr>
                    <tr>
                        <td>Production Companies</td>
                        <td>
                            {
                                data.production_companies !== undefined ?
                                data.production_companies.map((val)=>{
                                    return (<><span key={val.id}>-{val.name}</span><br/></>)
                                })
                                : 'undefined'
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Production Countries</td>
                        <td>
                            {
                                data.production_countries !== undefined ?
                                data.production_countries.map((val)=>{
                                    return (<><span key={val.id}>-{val.name}</span><br/></>)
                                })
                                : 'undefined'
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Revenue</td>
                        <td>{data.revenue}</td>
                    </tr>
                    <tr>
                        <td>Run time</td>
                        <td>{data.runtime}</td>
                    </tr>
                    <tr>
                        <td>Spoken Languages</td>
                        <td>
                            {
                                data.spoken_languages !== undefined ?
                                data.spoken_languages.map((val)=>{
                                    return (<><span key={val.id}>-{val.name}</span><br/></>)
                                })
                                : 'undefined'
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Release Status</td>
                        <td>{data.status}</td>
                    </tr>
                    <tr>
                        <td>Tagline</td>
                        <td>{data.tagline}</td>
                    </tr>
                    <tr>
                        <td>Vote</td>
                        <td>{data.vote_average}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Basicetails