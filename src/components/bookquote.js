import React, { useEffect, useRef } from 'react' ;
import Footer from "./footer";
import { Link } from "react-router-dom";


const Bookquote = () => {
  const imgurl = "https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1380.jpg?uid=R203151179&ga=GA1.1.627833558.1747904160&semt=ais_hybrid&w=740"
  
    const sectionRef = useRef(null);

  useEffect (() => {
    const checkVisibility = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight - 100) {
        sectionRef.current.classList.add('visible');
        window.removeEventListener('scroll', checkVisibility);
      }
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('load', checkVisibility);
    };
  }, []);
  return (
    <>
    <style>{`
        .contact-section {
      padding: 60px 20px;
      opacity: 0;
  transform: translateY(50px);
  transition: all 2s ease-in-out;
    }

       .contact-section.visible {
  opacity: 1;
  transform: translateY(0);
}
  .info-box {
  background-color: #f8f8f8;
  padding: 20px;
  margin-top: 3%;
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  border-left: 4px solid #007bff;
  transition: transform 0.3s ease;
}

.info-box:hover {
  transform: translateX(10px);
}
      `}
    </style>
    <nav id="navigation" className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><span>Import-Export</span></Link>

    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav align-items-center">

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown">
            Home
          </a>
          <ul className="dropdown-menu" aria-labelledby="homeDropdown">
            <li><Link className="dropdown-item" to="/">Home 1</Link></li>
            <li><Link className="dropdown-item" to="/home">Home 2</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="projectDropdown" role="button" data-bs-toggle="dropdown">
            Project
          </a>
          <ul className="dropdown-menu" aria-labelledby="projectDropdown">
            <li><Link className="dropdown-item" to="/Project">Project 1</Link></li>
            <li><Link className="dropdown-item" to="/Project2">Project 2</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="serviceDropdown" role="button" data-bs-toggle="dropdown">
            Service
          </a>
          <ul className="dropdown-menu" aria-labelledby="serviceDropdown">
            <li><Link className="dropdown-item" to="/Service">Service 1</Link></li>
            <li><Link className="dropdown-item" to="/Service2">Service 2</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="#" id="quoteDropdown" role="button" data-bs-toggle="dropdown">
            Book Quote
          </a>
          <ul className="dropdown-menu" aria-labelledby="quoteDropdown">
            <li><Link className="dropdown-item" to="/Bookquote">Quote 1</Link></li>
            <li><Link className="dropdown-item" to="/Bookquote2">Quote 2</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle " href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">
            About
          </a>
          <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
            <li><Link className="dropdown-item" to="/about">About 1</Link></li>
            <li><Link className="dropdown-item" to="/about2">About 2</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="contactDropdown" role="button" data-bs-toggle="dropdown">
            Contact
          </a>
          <ul className="dropdown-menu" aria-labelledby="contactDropdown">
            <li><Link className="dropdown-item" to="/Contact">Contact 1</Link></li>
            <li><Link className="dropdown-item" to="/Contact2">Contact 2</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/Bookquote" className="phone-btn">
            Book quote <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

<section class="page-banner"  style={{background: `url("${imgurl}") no-repeat center center/cover`}}>
    <div class="overlay"></div>
    <div class="container text-center banner-content">
      <h1>Book a Quote</h1>
    </div>
  </section>

<section className="contact-section" ref={sectionRef}>
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-6 contact-left">
        <h6>Get a Quote</h6>
        <h2>Get in Touch And We’ll Help Your Business</h2>

        <div class="info-box">
          <i class="fas fa-map-marker-alt"></i>
          <div>
            <h5>Office address</h5>
            <p> 123 Import-Export Street,<br />Anand, Gujarat 388001</p>
          </div>
        </div>

        <div class="info-box">
            <i class="fas fa-phone"></i>
          <div>
            <h5>Telephone number</h5>
            <p>+91 91234 56789<br />+91 98765 43210</p>
          </div>
        </div>

        <div class="info-box">
            <i class="fas fa-envelope"></i>
          <div>
            <h5>Mail address</h5>
            <p>support@importexport.com<br />info@importexport.com</p>
          </div>
        </div>

        <div class="info-box">
         <i class="fas fa-globe"></i>
          <div>
            <h5>Website</h5>
            <p> www.importexport.com</p>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <form class="contact-form">
          <h4 class="text-center">Get a Quote  </h4>
          <div class="row g-3">
            <div class="col-md-12">
              <input type="text" class="form-control" placeholder="Your Name" />
            </div>
            <div class="col-md-12">
              <input type="email" class="form-control" placeholder="Your Email" />
            </div>
            <div class="col-md-12">
              <input type="text" class="form-control" placeholder="Phone Number" />
            </div>
            <div class="col-md-12">
            <input type="text" class="form-control" placeholder="Affiliation" />
            </div>
            <div class="col-md-12">
            <input type="date" class="form-control" />
            </div>
            <div class="col-md-12">
              <input type="text" class="form-control" placeholder="Inquiry Department" />
            </div>
            <div class="col-12">
              <textarea class="form-control" rows="3" placeholder="Your Message"></textarea>
            </div>
          </div>
          <button class="btn-red">Book Quote</button>
        </form>
      </div>
    </div>
  </div>
</section>
      <Footer/>
    </>
  );
};

export default Bookquote;
