import React, { useEffect } from "react";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Service = () => {
   const imgurl = "https://demo.bytelabx.com/laravel/quriar/assets/img/hero/hero-bg-2.jpg"

   useEffect(() => {
    const items = document.querySelectorAll(".accordion-item");

    function handleClick(e) {
      const isOpen = e.currentTarget.classList.contains("open");
      items.forEach(i => i.classList.remove("open"));
      if (!isOpen) e.currentTarget.classList.add("open");
    }

    items.forEach(item => {
      item.addEventListener("click", handleClick);
    });

    return () => {
      items.forEach(item => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <>
          <style>{`
      .title {
        text-align: center;
        margin-top: 50px;
      }

      .title span {
        color: #007bff;
        font-weight: bold;
        display: block;
      }

      .title h2 {
        color: #002c3e;
        font-size: 35px;
        font-weight: bold;
      }

      .title h2 .highlight {
        color: #007bff;
      }

      .card-custom {
        background-color: #01303f;
        color: #fff;
        border-radius: 12px;
        position: relative;
        overflow: hidden;
        transition: 0.3s ease-in-out;
      }

      .card-custom:hover {
        transform: translateY(-8px);
        background-color: #007bff;
      }

      .card-img-wrapper {
        padding: 12px; 
      }

      .card-img-wrapper img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 12px;
      }

      .card-body {
        padding: 20px;
      }

      .freight-title {
        font-weight: 600;
        font-size: 20px;
      }

      .card-icon {
        position: absolute;
        top: 60%;
        right: 10px;
        background: #fff;
        padding: 6px 10px;
        border-radius: 6px;
        color: #007bff;
        font-size: 18px;
        transition: 0.5s ease-in-out; 
      }

      .card-custom:hover .card-icon {
        transform: translateY(-50%) rotate(360deg);
        background-color: #111;
        color: #fff;
      }

      .arrow-btn {
        background: #fff;
        color: #01303f;
        font-weight: 600;
        font-size: 15px;
        padding: 8px 20px;
        border-radius: 30px;
        display: inline-block;
        margin-top: 20px;
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.4s ease;
      }

      .card-custom:hover .arrow-btn {
        transform: translateY(0);
        opacity: 1;
      }

      .card-number {
        position: absolute;
        bottom: 15px;
        right: 15px;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
      }

      .section-container {
        display: flex;
        justify-content: center;
        gap: 50px;
        padding: 60px 20px;
        flex-wrap: wrap;
      }
         .faq, .choose-us {
      flex: 1;
      min-width: 300px;
      max-width: 500px;
    }

    .faq-title {
      color: #007bff;
      font-weight: 600;
      font-size: 14px;
    }
        .choose-title {
      color: #007bff;
      font-weight: 600;
      font-size: 14px;
    }
        
    h2 {
      font-size: 32px;
      margin-bottom: 30px;
      color: #002033;
    }

    .accordion {
      border: 1px solid #eee;
      margin-bottom: 15px;
      border-radius: 5px;
      overflow: hidden;
    }

    .accordion-item {
      cursor: pointer;
      padding: 20px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .accordion-item.open {
      color: #007bff;
    }

    .accordion-content {
      padding: 0 20px 20px;
      font-weight: normal;
      font-size: 14px;
      color: #555;
      display: none;
    }

    .accordion-item.open + .accordion-content {
      display: block;
    }

    .choose-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .choose-card {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
      padding: 25px;
      transition: transform 0.3s ease;
    }

    .choose-card:hover {
      transform: translateY(-5px);
    }

    .choose-card i {
      font-size: 24px;
      color: #007bff;
      margin-bottom: 10px;
    }

    .choose-card h4 {
      font-size: 16px;
      font-weight: bold;
      margin: 10px 0;
    }

    .choose-card p {
      font-size: 14px;
      color: #666;
      margin: 0;
    }
      `}</style>

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
      <h1>Service</h1>
    </div>
  </section>
  
    <section class="container py-5">
   <div class="title">
    <span>Featured</span>
    <h2>We are optimists who Love to <br /><span class="highlight">work together.</span></h2>
  </div>
               <div className="row justify-content-center g-4 mt-4">
          {[
            {
              img: "https://html.themexriver.com/fastrans/assets/img/service/ser4.2.jpg",
              icon: "fas fa-truck",
              title: "Road Freight",
              number: 1,
            },
            {
              img: "https://html.themexriver.com/fastrans/assets/img/service/ser4.3.jpg",
              icon: "fa-solid fa-ship",
              title: "Ocean Freight",
              number: 2,
            },
            {
              img: "https://html.themexriver.com/fastrans/assets/img/service/ser4.4.jpg",
              icon: "fa-solid fa-plane",
              title: "Air Freight",
              number: 3,
            },
            {
              img: "https://html.themexriver.com/fastrans/assets/img/service/ser4.2.jpg",
              icon: "fa-solid fa-train-subway",
              title: "Third Party Logistics",
              number: 4,
            },
          ].map((card) => (
            <div key={card.number} className="col-12 col-sm-6 col-md-3">
              <div className="card-custom">
                <div className="card-img-wrapper">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="card-icon">
                  <i className={card.icon}></i>
                </div>
                <div className="card-body">
                  <div className="freight-title">{card.title}</div>
                  <div className="arrow-btn">
                    Read More <i className="fas fa-arrow-right ms-2"></i>
                  </div>
                </div>
                <div className="card-number">{card.number}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center g-4 mt-4">
          {[
            {
              img: "https://html.themexriver.com/fastrans/assets/img/service/ser4.3.jpg",
              icon: "fa-solid fa-motorcycle",
              title: "Smart Warehousing",
              number: 5,
            },
            {
              img: "https://html.themexriver.com/fastrans/assets/img/service/ser4.jpg",
              icon: "fa-solid fa-plane",
              title: "Industry Solutions",
              number: 6,
            },
            {
              img: "https://html.themexriver.com/fastrans/assets/img/service/ser4.2.jpg",
              icon: "fa-solid fa-ship",
              title: "Custom Solutions",
              number: 7,
            },
            {
              img: "https://html.themexriver.com/fastrans/assets/img/service/ser4.3.jpg",
              icon: "fas fa-truck",
              title: "Road Freight",
              number: 8,
            },
          ].map((card) => (
            <div key={card.number} className="col-12 col-sm-6 col-md-3">
              <div className="card-custom">
                <div className="card-img-wrapper">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="card-icon">
                  <i className={card.icon}></i>
                </div>
                <div className="card-body">
                  <div className="freight-title">{card.title}</div>
                  <div className="arrow-btn">
                    Read More <i className="fas fa-arrow-right ms-2"></i>
                  </div>
                </div>
                <div className="card-number">{card.number}</div>
              </div>
            </div>
          ))}
        </div>
  </section>

        <section class="section-container">
    <div class="faq">
      <div class="faq-title">Frequently Asked Question</div>
      <h2>Have an Any Question?</h2>

      <div class="accordion">
        <div class="accordion-item open">
          Can i specify a delivery date when ordering?
          <span><i class="fas fa-minus" ></i></span>
        </div>
        <div class="accordion-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus commodo viverra.
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-item">
          What payment methods are supported?
          <span><i class="fas fa-plus" ></i></span>
        </div>
        <div class="accordion-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus commodo viverra.
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-item">
          What is Federation of International Trade Association?
          <span><i class="fas fa-plus" ></i></span>
        </div>
        <div class="accordion-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus commodo viverra.
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-item">
          How can I Track My Shipments?
          <span><i class="fas fa-plus"></i></span>
        </div>
        <div class="accordion-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus commodo viverra.
        </div>
      </div>
    </div>

    <div class="choose-us">
      <div class="choose-title" style={{color:'#007bff'}}>Why Choose Us</div>
      <h2>Why You Like Import-export?</h2>

      <div class="choose-grid">
        <div class="choose-card">
          <i class="fas fa-box-open"></i>
          <h4>Safe Packing</h4>
          <p>Do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
        </div>
        <div class="choose-card">
          <i class="fas fa-truck"></i>
          <h4>Right Time Delivery</h4>
          <p>Do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
        </div>
        <div class="choose-card">
          <i class="fas fa-ship"></i>
          <h4>Ship everywhere</h4>
          <p>Do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
        </div>
        <div class="choose-card">
          <i class="fas fa-shipping-fast"></i>
          <h4>Fastest Shipping</h4>
          <p>Do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
        </div>
      </div>
    </div>
  </section>
      <Footer />  
    </>
  );
};

export default Service;
