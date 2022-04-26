import React from 'react'
import { GetTrending } from '../common/apifetcher'
import SearchByGeneres from './searchByGeneres'
import SliderComp from './sliderComp'
import SlideShow from './slideShow'

const Home = () => {
  return (
    <>
      <SlideShow data={GetTrending('all', 'day')} heading={'Trending Today'} sliderid={'trending_today'}/>      
      <hr/>
      <SliderComp data={GetTrending('movie', 'day')} heading={'Movies'} sliderid={'movies'} media={'movie'}/>
      <hr/>
      <SliderComp data={GetTrending('tv', 'day')} heading={'Web Series'} sliderid={'web_series'} media={'tv'}/>
      <hr/>
      <SearchByGeneres/>
      <hr/>
      <SliderComp data={GetTrending('person', 'day')} heading={'Person'} sliderid={'person'} media={'person'}/>
    </>
  )
}

export default Home