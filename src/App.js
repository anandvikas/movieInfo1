import { Routes, Route } from 'react-router-dom'
// import MovieDetails from './components/trending/moviedetail'
import DetailsPage from './detailspage'
import Footer from './footer'
// import Header from './header'
import Home from './home'
import Media from './media'
import Nav from './nav'
import PersonProfile from './personProfile'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/movieInfo1' element={<Home />} />
        <Route path='/movieInfo1/movies' element={<Media type={'movie'} title={'Movies'} />} />
        <Route path='/movieInfo1/series' element={<Media type={'tv'} title={'Series'} />} />
        <Route path='/movieInfo1/person' element={<Media type={'person'} title={'Person'} />} />
        <Route path='/movieInfo1/media/:id' element={<DetailsPage />} />
        <Route path='/movieInfo1/person/:id' element={<PersonProfile />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App