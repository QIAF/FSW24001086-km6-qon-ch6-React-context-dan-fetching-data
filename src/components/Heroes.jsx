import { useNavigate } from 'react-router'
import ImgCar from '../assets/img_car.png'

function Heroes () {

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/search")
    }
    return(
        <section id="heroes">
        <div className="car-heroes mb-5">
            <div className="container-xxl mt-4">
            <div className="row-car row flex-lg-row-reverse align-items-center g-5">
                <div className="col-10 col-sm-8 col-lg-6">
                <img
                    src={ImgCar}
                    className="d-block mx-lg-auto img-fluid"
                    alt="Bootstrap Themes"
                    width={700}
                    height={500}
                    loading="lazy"
                />
                </div>
                <div className="caption-rental col-lg-5 mx-lg-5">
                <h1 className="fw-bold lh-1 mb-3 ">
                    Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="font-hero">
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                    terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                    untuk sewa mobil selama 24 jam.
                </p>
                <button type="button" className="btn-landing-page" onClick={handleClick}>
                    Mulai Sewa Mobil
                </button>
                </div>
            </div>
            </div>
        </div>
        </section>

    )
}
export default Heroes