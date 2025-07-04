import React, { useEffect } from "react";
import Footer from "./footer";

const Project2 = () => {
    const imgurl = "https://demo.bytelabx.com/laravel/quriar/assets/img/hero/hero-bg-2.jpg";

  useEffect(() => {
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const cards = document.querySelectorAll(".project-card");

  const reAnimateCards = () => {
    cards.forEach((card) => {
      card.classList.remove("animate");
    });

    setTimeout(() => {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("animate");
        }, index * 300);
      });
    }, 50);
  };

  reAnimateCards();

  filterButtons.forEach((btn) => {
    const handleClick = () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      reAnimateCards();
    };
    btn.addEventListener("click", handleClick);

    return () => {
      btn.removeEventListener("click", handleClick);
    };
  });
}, []);
  return (
    <>
    <style>{`
      .load-more-btn {
      background-color: #007bff; /* dark teal */
      color: white;
      font-weight: 700;
      border: none;
      border-radius: 50px;
      padding: 12px 40px;
      font-size: 16px;
      transition: all 0.3s ease;
    }
    .load-more-btn:hover {
      background-color: #4292e8;
    }
      .project-card {
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      height: 300px;
      cursor: pointer;
     opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease;
    }

    .project-card.animate {
     opacity: 1;
  transform: translateY(0);
    }

    .project-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .overla {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 44, 64, 0.85);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 25px;
      transition: all 0.5s ease-in-out;
    }

    .project-card:hover .overla {
      left: 0;
    }

    .overla h5 {
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 18px;
    }

    .overla p {
      font-size: 14px;
      margin-bottom: 20px;
    }

    .read-more-btn {
      background-color: #007bff;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 25px;
      font-weight: bold;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    .read-more-btn:hover {
      background-color: #1d8aff;
    }
      .filter-buttons {
      text-align: center;
      margin-bottom: 30px;
    }

    .filter-buttons button {
      border: none;
      background: none;
      font-weight: 600;
      padding: 10px 15px;
      color: #002b3f;
      transition: 0.3s ease;
    }

    .filter-buttons .active {
      background-color: #007bff;
      color: #fff;
      border-radius: 20px;
    }
     .section-title {
      text-align: center;
      margin-top: 100px;
    }
    .section-title .subheading {
      color: #007bff;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 10px;
      display: inline-block;
    }
    .section-title .heading {
      font-size: 32px;
      font-weight: 800;
      color: #002b36;
      line-height: 1.4;
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
      <h1>Project</h1>
    </div>
  </section>

  <section id="Project">
    <div class="container">
    <div class="section-title">
      <div class="subheading">Project</div>
      <div class="heading">Let's Checkout our All Top<br />Ratted Latest Project</div>
    </div>
  </div>
  <div class="filter-buttons mt-3">
    <button class="active">All</button>
    <button>Ocean Freight</button>
    <button>Air Freight</button>
    <button>Car Shipping</button>
    <button>Warehouse Solutions</button>
  </div>
  <div class="container  mb-5">
    <div class="row g-4 project-row">

      <div class="col-md-4">
        <div class="project-card">
          <img src="https://html.themexriver.com/fastrans/assets/img/project/port3.jpg" alt="Project Image" />
          <div class="overla">
            <h5>Service & Aftermarket Logistics</h5>
            <p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus facilisis.</p>
            <button class="read-more-btn">Read More →</button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="project-card">
          <img src="https://html.themexriver.com/fastrans/assets/img/project/port2.jpg" alt="Transport Project" />
           <div class="overla">
            <h5>Service & Aftermarket Logistics</h5>
            <p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus facilisis.</p>
            <button class="read-more-btn">Read More →</button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="project-card">
          <img src="https://html.themexriver.com/fastrans/assets/img/project/port4.jpg" alt="Ship Project" />
           <div class="overla">
            <h5>Service & Aftermarket Logistics</h5>
            <p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus facilisis.</p>
            <button class="read-more-btn">Read More →</button>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="container mt-5 mb-5">
    <div class="row g-4 project-row">

      <div class="col-md-4">
        <div class="project-card">
          <img src="https://html.themexriver.com/fastrans/assets/img/service/ser6.jpg" alt="Project Image" />
          <div class="overla">
            <h5>Service & Aftermarket Logistics</h5>
            <p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus facilisis.</p>
            <button class="read-more-btn">Read More →</button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="project-card">
          <img src="https://html.themexriver.com/fastrans/assets/img/service/ser7.jpg" alt="Transport Project" />
           <div class="overla">
            <h5>Service & Aftermarket Logistics</h5>
            <p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus facilisis.</p>
            <button class="read-more-btn">Read More →</button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="project-card">
          <img src="https://html.themexriver.com/fastrans/assets/img/blog/blg3.5.jpg" alt="Ship Project" />
           <div class="overla">
            <h5>Service & Aftermarket Logistics</h5>
            <p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus facilisis.</p>
            <button class="read-more-btn">Read More →</button>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="text-center mt-5 mb-5">
    <button class="load-more-btn">Load More <i class="fas fa-arrow-right ms-2"></i></button>
  </div>

</section>
      <Footer />
    </>
  );
};

export default Project2;
