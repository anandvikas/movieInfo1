import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SearchByName } from '../common/apifetcher'
import { Ctx1 } from '../common/contextProvider'

const Media = (props) => {
    const [data, updateData] = useState([])
    const [searchData, updateSearchData] = useState('')
    const { updateActiveMovie, updateActivePerson } = useContext(Ctx1)
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
    const setActive = (e) => {
        if (e.target.className === 'textSh3') {
            // console.log(e.target.id)            
            if (media === 'person') {
                updateActivePerson(() => {
                    // console.log(data)
                    let activePerson = data.find((val) => {
                        return val.id == e.target.id
                    })
                    // console.log(activePerson)
                    return activePerson
                })
                navigate(`/movieInfo1/${media}/${e.target.id}`)
            } else {
                updateActiveMovie(() => {
                    // console.log(data)
                    let activeMovie = data.find((val) => {
                        return val.id == e.target.id
                    })
                    // console.log(activeMovie)
                    return { ...activeMovie, media_type: props.type }
                })
                navigate(`/movieInfo1/${media}/${e.target.id}`)
            }
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
            <div className='mediaResult' onClick={setActive}>
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
                                    <h3 id={val.id} className='textSh3'>{(val.name === undefined) ? val.title : val.name}</h3>
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