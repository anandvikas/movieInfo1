import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllGeneres } from '../common/apifetcher'
import './searchByGeneres.css'

const SearchByGeneres = () => {
  const navigate = useNavigate()
  const [mediaType, updateMediaType] = useState('movie')
  const [data, updateData] = useState([])
  useEffect(() => {
    getAllGeneres(mediaType, updateData)
  }, [mediaType])

  const selectGenrs = (e) => {
    if(e.target.className === 'genrsWord'){
      console.log(e.target.id)
      navigate(`/movieInfo1/genrs/${mediaType}/${e.target.id}`)
    }
  }
  return (
    <div className='generesCon'>
      <h1>Search Media by Genres</h1>
      <div className='genrsMediaSelect'>
        Select Media Type :
        <select onChange={(e) => { console.log(updateMediaType(e.target.value)) }}>
          <option value='movie'>Movie</option>
          <option value='tv'>Series</option>
        </select>
      </div>
      <div className='generesDiv' onClick={selectGenrs}>
        {
          data.map((val) => {
            return (
              <span key={val.id} className='genrsWord' id={val.id}>{val.name}</span>
            )
          })
        }
      </div>
    </div>
  )
}

export default SearchByGeneres