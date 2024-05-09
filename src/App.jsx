import './App.css'
import Heroes from './components/Heroes'
import Navbar from './components/Navbar'
import OurService from './components/OurService'
import WhyUs from './components/WhyUs'
import Testimonial from './components/Testimonial'
import Banner from './components/Banner'
import Faq from './components/Faq'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <Navbar/>
      <Heroes/>
      <OurService/>
      <WhyUs/>
      <Testimonial/>
      <Banner/>
      <Faq/>
      <Footer/>
    </>
  )
}
export default App
