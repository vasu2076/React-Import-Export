import React from "react";
import Footer from "./footer";

const Bookquote2 = () => {
  const imgurl = "https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1380.jpg?uid=R203151179&ga=GA1.1.627833558.1747904160&semt=ais_hybrid&w=740"
  return (
    <>
           <nav id="navigation" class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span>Import-Export</span></a>
    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav align-items-center">

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " href="" id="homeDropdown" role="button" data-bs-toggle="dropdown">
            Home
          </a>
          <ul class="dropdown-menu" aria-labelledby="homeDropdown">
            <li><a class="dropdown-item" href="/">Home 1</a></li>
            <li><a class="dropdown-item" href="/home">Home 2</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" id="projectDropdown" role="button" data-bs-toggle="dropdown">
            Project
          </a>
          <ul class="dropdown-menu" aria-labelledby="projectDropdown">
            <li><a class="dropdown-item" href="/Project">Project 1</a></li>
            <li><a class="dropdown-item" href="/Project2">Project 2</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" id="serviceDropdown" role="button" data-bs-toggle="dropdown">
            Service
          </a>
          <ul class="dropdown-menu" aria-labelledby="serviceDropdown">
            <li><a class="dropdown-item" href="/Service">Service 1</a></li>
            <li><a class="dropdown-item" href="/Service2">Service 2</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="" id="quoteDropdown" role="button" data-bs-toggle="dropdown">
            Book Quote
          </a>
          <ul class="dropdown-menu" aria-labelledby="quoteDropdown">
            <li><a class="dropdown-item" href="/Bookquote">Quote 1</a></li>
            <li><a class="dropdown-item" href="/Bookquote2">Quote 2</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " href="" id="aboutDropdown" role="button" data-bs-toggle="dropdown">
            About
          </a>
          <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
            <li><a class="dropdown-item" href="/about">About 1</a></li>
            <li><a class="dropdown-item" href="/about2">About 2</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" id="contactDropdown" role="button" data-bs-toggle="dropdown">
            Contact
          </a>
          <ul class="dropdown-menu" aria-labelledby="contactDropdown">
            <li><a class="dropdown-item" href="/Contact">Contact 1</a></li>
            <li><a class="dropdown-item" href="/Contact2">Contact 2</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a href="/Bookquote" class="phone-btn">
            Book quote <i class="fa-solid fa-chevron-right"></i>
          </a>
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
