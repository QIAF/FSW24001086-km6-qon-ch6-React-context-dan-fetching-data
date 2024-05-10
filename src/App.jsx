import '../src/Pages/LandingPages/LandingPage.css'
import { Route, Routes } from 'react-router'
import LandingPage from './Pages/LandingPages/LandingPage'
import Search from './components/Search'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element {<LandingPage/>}/>
      <Route path='/search' element {<Search/>}/>
    </Routes>
    </>
  )
}
export default App
