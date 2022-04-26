import React from 'react'
import { GetTrending } from './apifetcher'
import SliderComp from './sliderComp'
import SlideShow from './slideShow'

const Home = () => {
  return (
    <>
      <SlideShow data={GetTrending('all', 'day')} heading={'Trending Today'} sliderid={'trending_today'}/>
      {/* <SliderComp data={GetTrending('all', 'day')} heading={'Trending Today'} sliderid={'trending_today'} /> */}
      <SliderComp data={GetTrending('movie', 'day')} heading={'Movies'} sliderid={'movies'} />
      <SliderComp data={GetTrending('tv', 'day')} heading={'Web Series'} sliderid={'web_series'} />
      <SliderComp data={GetTrending('person', 'day')} heading={'Person'} sliderid={'person'} />
    </>
  )
}

export default Home