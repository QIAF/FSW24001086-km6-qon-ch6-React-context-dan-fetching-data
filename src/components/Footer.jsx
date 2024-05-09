import Instagram from '../assets/icon_instagram.png'
import Email from '../assets/icon_mail.png'
import Facebook from '../assets/icon_facebook.png'
import Twitter from '../assets/icon_twitter.png'
import Twich from '../assets/icon_twitch.png'


function Footer(){
    return(
        <section id="footer-home">
        <div className="container">
            <hr />
            <footer className="py-3">
            <div className="row">
                <div className="adress col-6 col-md-3 mb-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        binarcarrental@gmail.com
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        081-233-334-808
                    </a>
                    </li>
                </ul>
                </div>
                <div className="navigation col-6 col-md-3 mb-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        Our services
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        Why Us
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        Testimonial
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        FAQ
                    </a>
                    </li>
                </ul>
                </div>
                <div className="sosmed col-6 col-md-3 mb-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-body-secondary">
                        Connect Us
                    </a>
                    </li>
                    <li className="nav-item">
                    <img src={Instagram} alt="ig" />
                    <img src={Twitter} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Email} alt="" />
                    <img src={Twich} alt="" />
                    </li>
                </ul>
                </div>
                <div className="col-6 col-md-3 mb-3">
                <p>Copyright Binar 2022</p>
                <img
                    src="https://assets-global.website-files.com/62fdaf934899cf5b43a00e1a/63044fb2037ff41cbd6efdcc_logo_binar_purple.svg"
                    loading="lazy"
                    alt=""
                    className="menu-image-logo-desktop-v2"
                />
                </div>
            </div>
            </footer>
        </div>
        </section>

    )
}
export default Footer