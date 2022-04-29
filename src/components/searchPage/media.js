import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SearchByName } from '../common/apifetcher'

const Media = (props) => {
    const [data, updateData] = useState([])
    const [searchData, updateSearchData] = useState('')    
    const parms = useParams()
    let {media} = parms
    const navigate = useNavigate()

    const performSearch = () => {
        let parsedArr = searchData.split(' ')

        let modifiedData = ''
        parsedArr.forEach(val => modifiedData += `+${val}`)
        modifiedData = modifiedData.slice(1, modifiedData.length)
        // console.log(modifiedData)

        if (parsedArr.length !== 0) {
            SearchByName(media, modifiedData, updateData)
        }
    }
    
    return (
        <div className='searchDiv'>
            <hr />
            <h1>Search {props.title}</h1>
            <div className='searchField'>
                <input name='search' type='text' placeholder='Search field' onChange={(e) => { updateSearchData(e.target.value) }} />
                <button onClick={performSearch}>Search</button>
            </div>
            <div className='mediaResult'>
                {
                    data.map((val) => {
                        return (
                            <div className='mediaCardsS' key={val.id}>
                                <div className='mediaImgS'>
                                    {
                                        media === 'person' ? <img src={`https://image.tmdb.org/t/p/w200${val.profile_path}`} alt={val.title} /> : <img src={`https://image.tmdb.org/t/p/w200${val.poster_path}`} alt={val.title} />
                                    }
                                </div>
                                <div className='mediaTextS'>
                                    <Link to={`/movieInfo1/${media}/${val.id}`}><h3 className='textSh3'>{(val.name === undefined) ? val.title : val.name}</h3></Link>                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}
export default Media