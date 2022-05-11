import React from 'react'
import MovieSection from './movieSection'
// import PersonSection from './home children/personSection'
import TvSection from './tvSection'
import './home.css'
import PersonSection from './personSection'
import WatchProviderSection from './watchProvierSection'

const Home = () => {
  return (
    <>
      <MovieSection/>
      <TvSection/>    
      <PersonSection/>  
      <WatchProviderSection media={'movie'}/>
    </>
  )
}

export default Home