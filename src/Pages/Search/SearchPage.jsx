import Navbar from "../../components/Navbar";
import Heroes from "../../components/Heroes";
import Search from "./Search";
import Footer from "../../components/Footer";
import InputCars from "../../components/InputCars";


function SearchPage (){
    return(
        <>
        <Navbar/>
        <Heroes/>
        <Search/>
        <InputCars/>
        <Footer/>
        </>

    )

}
export default SearchPage