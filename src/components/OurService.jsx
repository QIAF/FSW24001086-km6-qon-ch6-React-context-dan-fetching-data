import IconService from '../assets/img_service.png'
import CeklistIcon from '../assets/icon-ceklist.png'

function OurService(){
    return(
        <section id="our-service">
        <div className="our-service-lp mb-5">
            <div
            className="row g-0 position-relative m-auto"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
            <div className="col-md-6 mb-md-0 p-md-4">
                <img
                src={IconService}
                className="d-block mx-lg-auto img-fluid"
                alt="..."
                />
            </div>
            <div className="col-md-6 p-4 ps-md-0">
                <ul
                className="lis"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                <h2 className="mt-0">
                    <b>Best Car Rental for any kind of trip in (Lokasimu)!</b>
                </h2>
                <p>
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                    lebih murah dibandingkan yang lain, kondisi mobil baru serta
                    kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                    meeting, dll.
                </p>
                <li className="list-group-item">
                    <img src={CeklistIcon} style={{ padding: 10 }} />
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                </li>
                <li className="list-group-item">
                    <img src={CeklistIcon} style={{ padding: 10 }} />
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                </li>
                <li className="list-group-item">
                    <img src={CeklistIcon} style={{ padding: 10 }} />
                    Sewa Mobil Jangka Panjang Bulanan
                </li>
                <li className="list-group-item">
                    <img src={CeklistIcon} style={{ padding: 10 }} />
                    Gratis Antar - Jemput Mobil di Bandara
                </li>
                <li className="list-group-item">
                    <img src={CeklistIcon} style={{ padding: 10 }} />
                    Layanan Airport Transfer / Drop In Out
                </li>
                </ul>
            </div>
            </div>
        </div>
        </section>
    )
}
export default OurService