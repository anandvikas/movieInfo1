import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchMediaDetails, GetImageSrc } from '../common/apiFetcher'
import LoadingSpinner from '../loader/loadingSpinner'


const Movie_Basic = ({ id, media }) => {
  const [data, updateData] = useState({ status_message: 'xyz' })
  useEffect(() => {
    fetchMediaDetails(media, id, updateData)
  }, [id, media])
  return (
    (data.id)
      ? <>
        <div className='deCard'>
          <div className='side1'><img src={GetImageSrc(!data.poster_path ? data.profile_path : data.poster_path)} /></div>
          <div className='side2'>
            <h1>{!data.title ? data.name : data.title}</h1>
            <p className='overVievPara'>{data.overview}</p>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <td>Release date</td>
              <td>{data.release_date}</td>
            </tr>
            <tr>
              <td>Genrs</td>
              <td >
                {
                  data.genres.map((genVal) => {
                    return <span key={genVal.id} className='genrsWord'><Link to={`/discover/${media}?sort_by=popularity.desc&with_genres=${genVal.id}&page=1`} className='genrsLink'>{genVal.name}</Link></span>
                  })
                }
              </td>
            </tr>
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
              <td>Production Companies</td>
              <td>
                {
                  data.production_companies !== undefined ?
                    data.production_companies.map((val) => {
                      return (<><span key={val.id}>-{val.name}</span><br /></>)
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
                    data.production_countries.map((val) => {
                      return (<><span key={val.id}>-{val.name}</span><br /></>)
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
                    data.spoken_languages.map((val) => {
                      return (<><span key={val.id}>-{val.name}</span><br /></>)
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
      </>
      : <LoadingSpinner/>
  )
}
export default Movie_Basic