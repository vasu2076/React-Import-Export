import React, { useEffect } from "react";
import Footer from "./footer";

const About2 = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          } else {
            entry.target.classList.remove("animate-show"); // reset on exit
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

 const imgurl = "https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1380.jpg?uid=R203151179&ga=GA1.1.627833558.1747904160&semt=ais_hybrid&w=740"
 
  return (
    <>
    <style>{`
           .section-subtitle {
      color: #007bff;
      font-weight: 600;
      font-size: 14px;
    }
    .section-title {
      color: #002d3e;
      font-weight: 700;
      font-size: 36px;
    }
    .section-text p {
      color: #4a6670;
      font-size: 15px;
      margin-bottom: 10px;
    }
  .exp-box {
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: #007bff;
  color: white;
  padding: 25px 15px;
  text-align: center;
  border-radius: 10px;
  animation: floatUpDown 3s ease-in-out infinite;
}

@keyframes floatUpDown {
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
}

    .exp-box h1 {
      font-size: 48px;
      margin: 0;
      font-weight: bold;
    }
    .exp-box p {
      margin: 0;
      font-size: 14px;
    }
    .img-wrapper {
      position: relative;
    }
    .img-wrapper img {
      border-radius: 12px;
      max-width: 100%;
    }
    @media (max-width: 768px) {
      .section-title {
        font-size: 28px;
      }
      .exp-box {
       /* position: static;*/
        margin-top: 20px;
        display: inline-block;
      }
    }
    .feature-box {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 30px;
    }
    .feature-box i {
      font-size: 24px;
      color: #007bff;
    }
    .feature-text h6 {
      font-weight: 600;
      margin: 0;
      color: #0b2c3d;
    }
    .feature-text p {
      font-size: 13px;
      margin: 5px 0 0;
      color: #4a6670;
    }
    .img-wrapper img {
      max-width: 100%;
      border-radius: 8px;
    }
    @media (max-width: 767px) {
      .section-title {
        font-size: 26px;
      }
    }
    .about-section {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 60px 40px;
      gap: 50px;
      max-width: 1300px;
      margin: auto;
    }

    .text-col {
      max-width: 600px;
    }

    .text-col h4 {
      color: #007bff;
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 700;
    }

    .text-col h2 {
      font-size: 36px;
      font-weight: 700;
      color: #0a1f44;
      line-height: 1.3;
      margin-bottom: 0;
    }

    .text-col p {
      color: #555;
      margin: 20px 0;
      font-size: 15px;
    }

    .feature-boxes {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }

    .feature {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
      display: flex;
      align-items: center;
      gap: 15px;
      flex: 1 1 240px;
    }

    .feature i {
      font-size: 22px;
      color: #007bff;
    }

    .feature h5 {
      margin: 0;
      font-size: 16px;
      font-weight: 700;
      color: #0a1f44;
    }

    .feature p {
      margin: 0;
      font-size: 14px;
      color: #666;
    }

    .explore-btn {
      background-color: #007bff;
      color: white;
      padding: 14px 26px;
      border-radius: 30px;
      font-weight: 600;
      font-size: 15px;
      text-decoration: none;
      display: inline-block;
      transition: 0.3s ease;
    }

    .explore-btn:hover {
      background-color: #459cf8;
    }

    .explore-btn::after {
      content: " ➝";
      font-weight: bold;
    }

    .image-col {
      position: relative;
      animation: slideInLeft 2s ease-out forwards;
      opacity: 0;
    }

    .image-col img {
      max-width: 100%;
      border-radius: 8px;
      display: block;
    }

    @keyframes slideInLeft {
      0% {
        transform: translateX(-100px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @media (max-width: 992px) {
      .about-section {
        flex-direction: column;
        text-align: center;
      }
    }
      .animate-left, .animate-right {
      opacity: 0;
      transform: translateX(100px);
      transition: all 3s ease;
    }

    .animate-left {
      transform: translateX(-100px);
    }

    .animate-show {
      transform: translateX(0);
      opacity: 1;
    }
       @media (max-width: 767px) {
  #About .about-responsive-layout {
    flex-direction: column-reverse !important;
  }

  #About .col-md-6 {
    width: 100%;
    text-align: center;
  }

  #About .img-wrapper {
    margin-bottom: 20px;
  }
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
          <a class="nav-link dropdown-toggle active" href="" id="aboutDropdown" role="button" data-bs-toggle="dropdown">
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
      <h1>About</h1>
    </div>
  </section>

  <section class="about-section">
    <div class="text-col">
      <h4>About Company</h4>
      <h2>We Provide a <br />Reliable Services<br /></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

      <div class="feature-boxes">
        <div class="feature">
          <i class="fas fa-bullseye"></i>
          <div>
            <h5>Our Mission</h5>
            <p>Lorem ipsum dolor sit amet sed do eiusmod facilisis.</p>
          </div>
        </div>
        <div class="feature">
          <i class="fas fa-bullseye"></i>
          <div>
            <h5>Our Vision</h5>
            <p>Lorem ipsum dolor sit amet sed do eiusmod facilisis.</p>
          </div>
        </div>
      </div>

      <a href="#" class="explore-btn">Explore More</a>
    </div>

    <div class="image-col">
      <img src="https://html.themexriver.com/fastrans/assets/img/about/ab2.jpg" alt="Worker" className="img-fluid rounded scroll-animate animate-left " />
    </div>
  </section>

     <section id="About">
     <section id="About" class="container py-5">
  <div class="row about-responsive-layout d-flex align-items-center flex-md-row flex-column-reverse">
    <div class="col-md-6 text-center img-wrapper">
      <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/choose-us/03.jpg" alt="Import Export Worker" className="img-fluid rounded scroll-animate animate-right " />
    </div>

    <div class="col-md-6">
      <p class="section-subtitle mb-1">• Why Choose Us</p>
      <h2 class="section-title mb-4">
        Committed To Seamless, Global,<br />
        And Hassle-Free Trade Operations
      </h2>

      <div class="feature-box">
        <i class="bi bi-truck"></i>
        <div class="feature-text">
          <h6>Global Shipping Expertise</h6>
          <p>We specialize in cross-border logistics and timely export-import operations worldwide.</p>
        </div>
      </div>

      <div class="feature-box">
        <i class="bi bi-shield-check"></i>
        <div class="feature-text">
          <h6>Customs & Compliance Support</h6>
          <p>We handle customs clearance and ensure adherence to international trade regulations.</p>
        </div>
      </div>

      <div class="feature-box">
        <i class="bi bi-bar-chart-line"></i>
        <div class="feature-text">
          <h6>Cost-Optimized Solutions</h6>
          <p>We provide scalable and efficient shipping plans customized to your trade goals.</p>
        </div>
      </div>

      <div class="feature-box">
        <i class="bi bi-globe2"></i>
        <div class="feature-text">
          <h6>24/7 Global Tracking</h6>
          <p>Real-time shipment tracking and support available across time zones.</p>
        </div>
      </div>
    </div>
  </div>
</section>

        <section class="container py-5">
  <div class="row align-items-center">
    <div class="col-md-6 mb-4 mb-md-0">
      <span class="section-subtitle">• Who We Are</span>
      <h2 class="section-title mt-2 mb-3">Driven By Excellence,<br />Powered By Global Trade</h2>
      <div class="section-text">
        <p>We specialize in delivering seamless, reliable, and efficient import-export solutions tailored to meet the dynamic needs of international businesses.</p>
        <p>With a strong global network, advanced technology, and unwavering commitment to compliance and logistics excellence, we simplify cross-border operations.</p>
        <p>Our services ensure hassle-free documentation, customs clearance, and timely shipment delivery worldwide.</p>
      </div>
    </div>

    <div class="col-md-6 text-center img-wrapper">
      <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/about/who-we-are-image.jpg" alt="Import Export Team" className="img-fluid rounded scroll-animate animate-left " />
      <div class="exp-box">
        <h1>8+</h1>
        <p>Years Of<br />Experience</p>
      </div>
    </div>
  </div>
</section>

    </section>  
      <Footer/>
    </>
  );
};

export default About2;
