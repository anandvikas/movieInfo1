import React, { useState, useEffect} from 'react'
import Results from '../results/results'
import DmControls from './dmControls'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { fetchDiscover } from '../common/apiFetcher'
import Pagination from '../pagination/pagination'

const DiscoverMovie = () => {  
  // -------------------------------------------------------------
  const {search} = useLocation()    
  const queriesInObject = queryString.parse(search)
  // console.log(queriesInObject)
  // -----------------------------------------------------------
  let queriesInString = ''
  for(let properties in queriesInObject){        
      queriesInString += `&${properties}=${queriesInObject[properties]}`
  }    
  // console.log(queriesInString)
  let activePage = queriesInObject.page
  // -----------------------------------------------------------
  const media = 'movie'
  const [data, updateData] = useState({results : []})
  useEffect(()=>{
    fetchDiscover(media, queriesInString, updateData)
  },[queriesInString])

  return (
    <>
      <DmControls/>
      <div>
        {
          (data.results.length !== 0)
          ? <Results data={data.results} media={media}/>
          : <h1>Loading</h1>
        }
      </div>
      <Pagination numOfPages = {data.total_pages} activePage = {activePage} basePath = '/discover/movie'/>
    </>
  )
}
export default DiscoverMovie