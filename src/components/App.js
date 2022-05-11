import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './common/nav'
import NoRoutePage from './common/noRoutePage'
import MovieDetail from './detail/movieDetail'
import TvDetail from './detail/tvDetail'
import Discover from './discover/discover'
import DiscoverMovie from './discover/discoverMovie'
import DiscoverTv from './discover/discoverTv'
import Home from './home/home'
import SearchPage from './searchPage/searchPage'
import './detail/detail.css'
import DiscoverPerson from './discover/discoverPerson'
import PersonDetail from './detail/personDetail'
import CompanyDetails from './detail/companyDetails'
import ProviderDetail from './detail/providerDetails'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/discover' element={<Discover />} >
          <Route path='movie' element={<DiscoverMovie/>}/>
          <Route path='tv' element={<DiscoverTv/>}/>
          <Route path='person' element={<DiscoverPerson/>}/>
        </Route>
        <Route path='/detail_movie' element={<MovieDetail/>}/>
        <Route path='/detail_tv' element={<TvDetail/>}/>
        <Route path='/detail_person' element={<PersonDetail/>}/>
        <Route path='/detail_company' element={<CompanyDetails/>}/>
        <Route path='/detail_provider' element={<ProviderDetail/>}/>
        <Route path='*' element={<NoRoutePage />} />
      </Routes>
    </>
  )
}
export default App
