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

        <div className='container-search'>
            {data.map((cars) =>(
                <div key={cars.id} className='container'>
                    <div className='row-flex items-center'>
                        <div className="card px-2 py-4" style={{ width: "18rem" }}>
                            <img src={`src/assets/carsImg/${cars.image}`} className="card-img-top mt-4" alt="Car" />
                            <div className="card-body">
                                <h5 className="card-title fs-6">{cars.manufacture}/ {cars.model}</h5>
                                <h5 className="card-title fs-5">{cars.rentPerDay} / hari</h5>
                                <p className="card-text">{cars.description}</p>
                            <div className="row mt-2">
                                <div className="col-1">
                                <img src="src/assets/fi_calendar.png" width="20px" alt="" srcSet="" />
                                </div>
                                <div className="col-10 ms-lg-2">Orang {cars.capacity}</div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-1">
                                <img src="src/assets/fi_settings.png" width="20px" alt="" srcSet="" /></div>
                                <div className="col-10 ms-lg-2">{cars.transmission}</div>
                            </div>
                            <div className="row mt-2 mb-3">
                                <div className="col-1">
                                <img src="src/assets/fi_calendar.png" width="20px" alt="" srcSet="" />
                                </div>
                                <div className="col-10 ms-lg-2">Tahun {cars.year}</div>
                            </div>
                            <button type="button" className="btn-search"> Pilih Mobil</button>

                            </div>
                        </div>

                    </div>

                </div>

            ))}


        </div>



    )
}
export default InputCars