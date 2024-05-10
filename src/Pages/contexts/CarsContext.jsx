import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CarsContext = createContext();
const CarsProvider = (props) => {
    const [data, setData] = useState([]);

    const fetchCars = async () => {
        try{
            const response = await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
            const cars = response.data;
            setData(cars);
            console.log("masukk")

        }catch(err){
            console.err('Error cars data');
        }
    };
    useEffect(() => {
        fetchCars();
    }, []);

    return<CarsContext.Provider value={{data}}>{props.children}</CarsContext.Provider>

}
export default CarsProvider
