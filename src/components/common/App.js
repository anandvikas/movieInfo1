import { Routes, Route } from 'react-router-dom'
import FilterPage from '../filter/filterPage'
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
        <Route path='/' element={<Home />} />        
        <Route path='/:media' element={<Media />} />
        <Route path='/:media/:id' element={<DetailsPage />} />        
        <Route path='/person/:id' element={<PersonProfile />} />
        <Route path='/genrs/:genrMedia/:genrId' element={<GenrsResult/>}/>
        <Route path='/filter' element ={<FilterPage/>}/>
      </Routes>
      <Footer />
    </>
  )
}
export default App