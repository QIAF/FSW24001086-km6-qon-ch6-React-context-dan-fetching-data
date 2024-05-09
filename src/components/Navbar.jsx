function Navbar(){
    return(
        <section id="navbar">
  <nav className="navbar navbar-expand-lg fixed-top " id="mainnav">
    <div className="container">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" style={{ paddingRight: 10 }}>
            <a
              className="nav-link active"
              aria-current="page"
              href="#our-service"
            >
              Our Services
            </a>
          </li>
          <li className="nav-item" style={{ paddingRight: 10 }}>
            <a className="nav-link active" href="#why-us">
              Why Us
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              href="#testimonial-home"
              style={{ paddingRight: 10 }}
            >
              Testimonial
            </a>
          </li>
          <li className="nav-item">
            <a className="btn btn-success" type="buton" href="login.html">
              {" "}
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</section>

    )
}
export default Navbar