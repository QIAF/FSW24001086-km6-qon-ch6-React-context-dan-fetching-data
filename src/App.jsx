import '../src/Pages/LandingPages/LandingPage.css'
import { Route, Routes } from 'react-router'
import LandingPage from './Pages/LandingPages/LandingPage'
import SearchPage from './Pages/Search/SearchPage'
import CarsProvider from './Pages/contexts/CarsContext'

function App() {

  

  return (
    <>
    <CarsProvider>
      <Routes>
        <Route path='/' element = {<LandingPage/>}/>
        <Route path='/search' element = {<SearchPage/>}/>
      </Routes>
    </CarsProvider>
    </>
  )
}
export default App
