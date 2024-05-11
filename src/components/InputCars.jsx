import React, { useEffect, useState } from 'react'
import '../Pages/LandingPages/LandingPage.css'
import axios from 'axios'


function InputCars() {
    const [data,setData]=useState([])

     const fetchCars = async () => {
        try{
            const response = await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
            console.log(response.data)
            setData(response.data);

        }catch(err){
            console.err('Error cars data',err);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);
    return(

        <div>
            <img src="" className="card-img-top" alt="Car" />
            {data.map((cars) =>(
                <div key={cars.id}>

                    <div className="card" style={{ width: "18rem" }}>
                        <img src={`src/assets/cars/${cars.image}`} className="card-img-top" alt="Car" />
                        <div className="card-body">
                            <h5 className="card-title">{cars.plate}</h5>
                            <p className="card-text">{cars.description}</p>
                            <div className="col-10 ms-lg-2">orang</div>
                            <div className="row mt-2">
                            <div className="col-1">
                            <img src="src/images/fi_settings.png" width="20px" alt="" srcSet="" />
                            </div>
                            <div className="col-10 ms-lg-2"></div>
                        </div>
                        <div className="row mt-2 mb-4">
                            <div className="col-1">
                            <img src="/assets/fi_calendar.svg" width="20px" alt="" srcSet="" />
                            </div>
                            <div className="col-10 ms-lg-2">Tahun</div>
                        </div>
                            <a href="#" className="btn btn-primary">
                            Go somewhere
                            </a>
                        </div>
                        </div>

                </div>

            ))}


        </div>



    )
}
export default InputCars