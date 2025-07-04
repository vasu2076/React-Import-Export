import React, { useEffect, useRef } from "react";
import Footer from "./footer";

const Contact = () => {
  const imgurl = "https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1380.jpg?uid=R203151179&ga=GA1.1.627833558.1747904160&semt=ais_hybrid&w=740" ;
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

           <nav id="navigation" class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span>Import-Export</span></a>
    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav align-items-center">

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" id="homeDropdown" role="button" data-bs-toggle="dropdown">
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
          <a class="nav-link dropdown-toggle" href="" id="quoteDropdown" role="button" data-bs-toggle="dropdown">
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
          <a class="nav-link dropdown-toggle active" href="" id="contactDropdown" role="button" data-bs-toggle="dropdown">
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
      <h1>Contact</h1>
    </div>
  </section>

<section className="contact-section" ref={sectionRef}>
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-6 contact-left">
        <h6>Contact Us</h6>
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
      </div>

      <div class="col-lg-6">
        <form class="contact-form">
          <h4>Send Us Message</h4>
          <div class="row g-3">
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="col-md-12">
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Phone Number" />
          </div>
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Inquiry Department" />
          </div>
           <div className="col-12">
              <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
            </div>
          </div>
          <button class="btn-red">Submit Now</button>
        </form>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
};


export default Contact;
