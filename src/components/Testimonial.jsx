function Testimonial(){
    return(
        <section id="testimonial-home">
        <div className="caption-testimonial text-center">
            <h2>Testimonial</h2>
            <p />
            Berikut Testimonial Kami
            <p />
        </div>
        <div
            id="carouselExample"
            className="testimonial-home carousel slide rounded mx-auto w-50 p-3"
        >
            <div className="carousel-inner text-center">
            <div className="carousel-item active">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                <img
                    src="https://assets-global.website-files.com/6100d0111a4ed76bc1b9fd54/643cfa4ba488895eb7e83431_Binar%20Impact%20icons%20black-07.svg"
                    alt=""
                />
                </div>
                <h3 className="fs-2 text-body-emphasis">1100+</h3>
                <p>total partner yang merekrut alumni BINAR</p>
            </div>
            <div className="carousel-item">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                <img
                    src="https://assets-global.website-files.com/6100d0111a4ed76bc1b9fd54/643cfa4ba488895eb7e83431_Binar%20Impact%20icons%20black-07.svg"
                    alt=""
                />
                </div>
                <h3 className="fs-2 text-body-emphasis">1100+</h3>
                <p>total partner yang merekrut alumni BINAR</p>
            </div>
            <div className="carousel-item">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                <img
                    src="https://assets-global.website-files.com/6100d0111a4ed76bc1b9fd54/643cfa4ba488895eb7e83431_Binar%20Impact%20icons%20black-07.svg"
                    alt=""
                />
                </div>
                <h3 className="fs-2 text-body-emphasis">1100+</h3>
                <p>total partner yang merekrut alumni BINAR</p>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <svg
                width={23}
                height={42}
                viewBox="0 0 23 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M18.4836 38L4.29016 21L18.4836 4"
                    stroke="black"
                    strokeWidth={8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <svg
                width={23}
                height={42}
                viewBox="0 0 23 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M4.51636 38L18.7098 21L4.51636 4"
                    stroke="black"
                    strokeWidth={8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </button>
            </div>
        </div>
        </section>
    )
}

export default Testimonial