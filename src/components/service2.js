import react from "react";
import Footer from "./footer";

const Service2 = () =>{
      const imgurl = "https://demo.bytelabx.com/laravel/quriar/assets/img/hero/hero-bg-2.jpg"

   return (
    <>
    <style>{
        `
           .service-box {
      background-color: #f9f9fb;
      padding: 30px;
      border-radius: 8px;
      height: 100%;
      position: relative;
      transition: all 0.3s ease;
    }
    .service-box:hover {
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      transform: translateY(-5px);
    }
    .service-icon {
      font-size: 30px;
      background: #e3e7fb;
      padding: 15px;
      border-radius: 50%;
      display: inline-block;
      margin-bottom: 15px;
    }
    .service-icon img {
      width: 30px;
      height: 30px;
    }
    .service-number {
      position: absolute;
      top: 20px;
      right: 20px;
      font-weight: bold;
      font-size: 30px;
      color: #d0cfcf;
    }
    .service-title {
      font-weight: 600;
      margin-bottom: 10px;
    }
    .service-desc {
      font-size: 14px;
      color: #555;
    }
    .read-more {
      margin-top: 15px;
      display: inline-block;
      font-weight: 500;
      color: #000;
      text-decoration: none;
    }
    .read-more:hover {
     color:#007bff;
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
          <a class="nav-link dropdown-toggle active" href="" id="serviceDropdown" role="button" data-bs-toggle="dropdown">
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
      <h1>Service</h1>
    </div>
  </section>

    <div class="container py-5">
  <div class="row g-4">
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="service-box">
        <div class="service-icon">
          <img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.1.svg" class="img-fluid" />
        </div>
        <div class="service-number">01</div>
        <h5 class="service-title">Express Delivery Services</h5>
        <p class="service-desc">We provide a comprehensive suite logistics services designed to streamline your supply chain & meet your unique business needs.</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

 <div class="col-12 col-sm-6 col-lg-4">
      <div class="service-box">
        <div class="service-icon"><img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.5.svg" class="img-fluid" /></div>
        <div class="service-number">02</div>
        <h5 class="service-title">International Shipping</h5>
        <p class="service-desc">Additionally, our supply chain management services optimize every step your logistics process, and our e-commerce fulfillment</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

      <div class="col-12 col-sm-6 col-lg-4">
      <div class="service-box">
        <div class="service-icon"><img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.7.svg" class="img-fluid" /></div>
        <div class="service-number">03</div>
        <h5 class="service-title">Inventory Management</h5>
        <p class="service-desc">Finally, our Reliable Last-Mile Delivery and Freight Consolidation Services ensure your</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

       <div class="col-12 col-sm-6 col-lg-4">
      <div class="service-box">
        <div class="service-icon"><img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.6.svg" class="img-fluid" /></div>
        <div class="service-number">04</div>
        <h5 class="service-title">Cold Chain Logistics</h5>
        <p class="service-desc">Whether it’s handling project cargo with specialized requirements or maintaining the integrity of temperature-sensitive</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-lg-4">
      <div class="service-box">
        <div class="service-icon">
          <img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.2.svg" class="img-fluid" /></div>
        <div class="service-number">05</div>
        <h5 class="service-title">Supply Chain Management</h5>
        <p class="service-desc">We offer state-of-the-art warehousing solutions, ensuring your inventory is managed with precision and care.</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-lg-4">
      <div class="service-box">
        <div class="service-icon"><img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.3.svg" class="img-fluid" /></div>
        <div class="service-number">06</div>
        <h5 class="service-title">Project Cargo Handling</h5>
        <p class="service-desc">Our freight forwarding services ensure smooth and efficient transportation of goods across borders, while our customs</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-lg-4">
      <div class="service-box">
        <div class="service-icon"><img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.4.svg" class="img-fluid" /></div>
        <div class="service-number">07</div>
        <h5 class="service-title">Warehousing Solutions</h5>
        <p class="service-desc">Our domestic transport services guarantee timely reliable deliveries within the country, while our international shipping solutions</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-lg-4">
      <div class="service-box">
        <div class="service-icon"><img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.8.svg" class="img-fluid" /></div>
        <div class="service-number">08</div>
        <h5 class="service-title">Cold Chain Logistics</h5>
        <p class="service-desc">Trust our Professional Logistics Consulting <br />to enhance your logistics strategy, &amp; rely on <br />our Efficient Reverse Logistics for seamless</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-lg-4">
      <div class="service-box">
        <div class="service-icon"><img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.9.svg" class="img-fluid" /></div>
        <div class="service-number">09</div>
        <h5 class="service-title">Domestic Transport</h5>
        <p class="service-desc">With Specialized Project Cargo Handling &amp;<br /> Cold Chain Logistics Services, we cater to<br /> specialized and temperature-sensitive</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

  </div>
</div>
    <Footer/>
    </>
   )
}

export default Service2
