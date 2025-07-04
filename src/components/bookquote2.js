import React from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Bookquote2 = () => {
  const imgurl = "https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1380.jpg?uid=R203151179&ga=GA1.1.627833558.1747904160&semt=ais_hybrid&w=740"
  return (
    <>
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
          <a className="nav-link dropdown-toggle" href="#" id="quoteDropdown" role="button" data-bs-toggle="dropdown">
            Book Quote
          </a>
          <ul className="dropdown-menu" aria-labelledby="quoteDropdown">
            <li><Link className="dropdown-item" to="/Bookquote">Quote 1</Link></li>
            <li><Link className="dropdown-item" to="/Bookquote2">Quote 2</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">
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

    <section class="quote-section">
  <div class="container">
    <div class="row g-0">
      <div class="col-lg-6 quote-bg"></div>
      <div class="col-lg-6">
        <div class="quote-form">
          <h5 class="text-primary mb-3 text-center">Get a Quote</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo veritatis nisi et, quas, nulla dolor</p>
          <form>
            <div class="row">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="City of Departure" required />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Delivery City" required />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Total Weight (kg)" required />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Dimensions (cm)" required />
              </div>
            </div>
            <h6 class="mt-4 mb-3">Your Personal Details</h6>
            <input type="text" class="form-control" placeholder="Name" required />
            <input type="email" class="form-control" placeholder="Email" required />
            <input type="tel" class="form-control" placeholder="Phone" required />
            <textarea class="form-control" rows="4" placeholder="Message"></textarea>
           <div class="text-center">
  <button type="submit" class="btn btn-primary mt-3">Get a quote</button>
</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer/>
    </>
  );
};

export default Bookquote2;
