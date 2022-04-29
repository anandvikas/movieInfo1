import { Routes, Route } from 'react-router-dom'
import GenrsResult from '../genrsSearchResult/genrsResult'
import Home from '../home/home'
import DetailsPage from '../mediaDetail/detailspage'
import PersonProfile from '../personDetail/personProfile'
import Media from '../searchPage/media'
import Footer from './footer'
import Nav from './nav'


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/movieInfo1' element={<Home />} />        
        <Route path='/movieInfo1/:media' element={<Media />} />
        <Route path='/movieInfo1/:media/:id' element={<DetailsPage />} />        
        <Route path='/movieInfo1/person/:id' element={<PersonProfile />} />
        <Route path='/movieInfo1/genrs/:genrMedia/:genrId' element={<GenrsResult/>}/>
      </Routes>
      <Footer />
    </>
  )
}
export default App