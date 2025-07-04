import React, { useEffect } from "react";
import Footer from "./footer";

const About = () => {
   const imgurl = "https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1380.jpg?uid=R203151179&ga=GA1.1.627833558.1747904160&semt=ais_hybrid&w=740"
  
 useEffect(() => {
  const elements = document.querySelectorAll('.slide-up-element');

  // Reset classes on reload
  elements.forEach(el => {
    el.classList.remove('show');
    el.classList.add('hidden');
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hidden');
        // Don't unobserve — so animation happens again on reload
      }
    });
  }, {
    threshold: 0.2,
  });

  elements.forEach(el => {
    observer.observe(el);
  });

  return () => {
    elements.forEach(el => observer.unobserve(el));
  };
}, []);
   return (
    <>
    <style>{`
       .section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  padding: 60px 20px;
}

.images {
  flex: 1 1 45%;
  display: flex;
  justify-content: center;
}

.img-group {
  position: relative;
  display: flex;
  flex-direction: column;
}

.img-first, .img-second {
  width: 230px;
  height: 310px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.img-second {
  margin-left: 250px;
  margin-top: -150px;
}

.info-box {
  position: absolute;
  left: 120px;
  top: 200px;
  background: #007bff;
  color: #fff;
  padding: 18px 24px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  border: 4px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);  
}

.info-box p {
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
  color:#fff
}

.text {
  flex: 1 1 45%;
  max-width: 550px;
}

.label {
  font-size: 13px;
  font-weight: 600;
  background: #f0f4ff;
  color: #007bff;
  display: inline-block;
  padding: 5px 12px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.heading {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
}

.description {
  font-size: 15px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 15px 30px;
  margin-bottom: 20px;
}

.features span::before {
  content: "✔";
  margin-right: 8px;
  color: rgb(35, 184, 35);
  font-weight: bold;
}

.features span {
  font-size: 14px;
  font-weight: 500;
}

.note {
  background: #f5f5f5;
  font-size: 14px;
  padding: 14px;
  border-radius: 6px;
  color: #444;
  margin-bottom: 20px;
}

.btn {
  display: inline-flex;
  align-items: center;
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #1283fc;
  color: #fff;
}

.btn::after {
  content: "➝";
  margin-left: 10px;
  font-weight: 700;
}

/* Tablet */
@media (max-width: 991px) {
  .img-second {
    margin-left: 60px;
  }

  .info-box {
    left: 90px;
    top: 160px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .section {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  .images {
    order: 1;
  }

  .text {
    order: 2;
    max-width: 100%;
  }

  .img-group {
    align-items: center;
  }

  .img-second {
    margin-left: 0;
    margin-top: 20px;
  }

  .info-box {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

/* Extra small */
@media (max-width: 480px) {
  .img-first, .img-second {
    width: 180px;
    height: 240px;
  }

  .heading {
    font-size: 24px;
  }

  .description, .features span, .note {
    font-size: 13px;
  }

  .btn {
    font-size: 13px;
    padding: 8px 18px;
  }

  .info-box {
    font-size: 16px;
    padding: 12px 16px;
  }

  .info-box p {
    font-size: 11px;
  }
}
.info2 {
  background-color: #F8F9FA;
}

.sectio {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px;
  max-width: 1100px;
  margin: auto;
  margin-top: 5%;
}

.left-content {
  max-width: 550px;
  flex: 1 1 48%;
}

.left-content .label {
  background-color: #e6efff;
  color: #007bff;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  display: inline-block;
  margin-bottom: 10px;
}

.left-content .heading {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
}

.left-content .description {
  font-size: 15px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 30px;
}

.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 2px transparent;
  flex: 1 1 100%;
}

.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.card h4 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
}

.card p {
  font-size: 13px;
  color: #666;
  line-height: 1.4;
}

.btn {
  display: inline-flex;
  align-items: center;
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #1283fc;
}

.btn::after {
  content: "➝";
  margin-left: 10px;
  font-weight: 700;
}

.right-image {
  position: relative;
  flex: 1 1 48%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-image .main-img {
  width: 100%;
  max-width: 380px;
  border-radius: 12px;
  z-index: 1;
}

.right-image .overlay-img {
  position: absolute;
  bottom: -25px;
  right: -25px;
  width: 140px;
  border-radius: 12px;
  border: 4px solid #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

/* Tablet */
@media (max-width: 992px) {
  .sectio {
    flex-direction: column-reverse;
    text-align: center;
    padding: 40px 20px;
  }

  .right-image {
    margin-bottom: 40px;
  }

  .cards {
    justify-content: center;
  }

  .right-image .overlay-img {
    bottom: -20px;
    right: 50%;
    transform: translateX(50%);
  }
}

/* Mobile */
@media (max-width: 576px) {
  .left-content .heading {
    font-size: 24px;
  }

  .card {
    padding: 16px;
  }

  .btn {
    font-size: 13px;
    padding: 8px 18px;
  }

  .right-image .main-img {
    max-width: 90%;
  }

  .right-image .overlay-img {
    width: 110px;
    bottom: -18px;
  }
}

    .secti {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 50px;
      padding: 60px 40px;
      max-width: 1300px;
      margin: auto;
      margin-top: 5%;
    }

    .image-side img {
      width: 400px;
      border-radius: 12px;
    }

    .text-side {
      max-width: 600px;
    }

    .label {
      background: #e7f0ff;
      color: #007bff;
      font-size: 13px;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 12px;
      display: inline-block;
      margin-bottom: 10px;
    }

    .heading {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 15px;
    }

    .description {
      font-size: 15px;
      color: #555;
      line-height: 1.5;
      margin-bottom: 30px;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 30px;
    }

    .stat-card {
      background: #fff;
      padding: 25px 20px;
      border-radius: 10px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
    }

    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.08);
    }

    .stat-card h3 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 5px;
      color: #000;
    }

    .stat-card p {
      font-size: 13px;
      color: #666;
      margin: 0;
    }

    @media (max-width: 992px) {
      .secti {
        flex-direction: column;
        text-align: center;
      }

      .image-side img {
        width: 100%;
        max-width: 400px;
      }

      .stats {
        grid-template-columns: 1fr;
      }
    }
     .hidden {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 2s ease, transform 2s ease;
}

.show {
  opacity: 1;
  transform: translateY(0);
}
  .slide-up-element {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 2s ease, transform 2s ease;
}

.slide-up-element.show {
  opacity: 1;
  transform: translateY(0);
}
    `}</style>
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

<section className="slide-up-element page-banner"  style={{background: `url("${imgurl}") no-repeat center center/cover`}}>
    <div class="overlay"></div>
    <div class="container text-center banner-content">
      <h1>About</h1>
    </div>
  </section>

    <section className="slide-up-element section">
      <div class="images">
        <div class="img-group">
          <img src="https://html.vikinglab.agency/cargon/assets/img/about/ca-about1.1.png" alt="Worker 1" class="img-first" />
          <img src="https://html.vikinglab.agency/cargon/assets/img/about/ca-about1.2.png" alt="Worker 2" class="img-second" />
          <div class="info-box">
            25K+<br />
            <p>Clients Positive Reviews</p>
          </div>
        </div>
      </div>

      <div class="text">
        <div class="label">Why We Are</div>
        <div class="heading">Our Commitment: Reliable<br />And Efficient Logistics</div>
        <div class="description">
          With years of industry experience and a commitment to innovation, we have become leaders in providing comprehensive, reliable, and efficient logistics solutions. Our dedicated team of experts works tirelessly to ensure.
        </div>

        <div class="features">
          <span>Experts in Logistics Management</span>
          <span>Leaders in Global Logistics</span>
          <span>Transforming Transport & Logistics</span>
          <span>Driving Logistics Success</span>
        </div>

        <div class="note">
          We are driving success and creating opportunities for growth. Discover difference with a logistics partner that is truly invested in your success.
        </div>

        <a href="#" class="btn">Transpires</a>
      </div>
    </section>

    <section className="slide-up-element info2">
  <div class="sectio">
    <div class="left-content">
      <div class="label">Why Choose Us</div>
      <div class="heading">Meet The Team: Experts In<br />Logistics Management</div>
      <div class="description">
        We pride ourselves on our global reach and local expertise, allowing us to offer tailored services that meet the unique needs of each client. At Cargon, we are not just moving goods; we are driving success and creating opportunities.
      </div>

      <div class="cards">
        <div class="card">
          <h4>Supply Chain Management</h4>
          <p>With years of industry experience and a commitment to innovation, we have become leaders</p>
        </div>
        <div class="card">
          <h4>Supply Chain Management</h4>
          <p>With years of industry experience and a commitment to innovation, we have become leaders</p>
        </div>
      </div>

      <a href="#" class="btn">Learn More</a>
    </div>

    <div class="right-image">
      <img src="https://html.vikinglab.agency/cargon/assets/img/about/ca-choose-ing1.1.png" class="main-img" alt="Team Leader" />
      <img src="https://html.vikinglab.agency/cargon/assets/img/about/ca-ch-2.png" class="overlay-img" alt="Overlay Ship" />
    </div>
  </div>
</section>
 
  <section className="secti slide-up-element">
    <div class="image-side">
      <img src="https://html.vikinglab.agency/cargon/assets/img/about/ca-value1.1.png" alt="Logistics Team" />
    </div>

    <div class="text-side">
      <div class="label">Our Values</div>
      <div class="heading">Mission Vision & Values Of Your<br />Transport & Logistics</div>
      <div class="description">
        Our dedicated team of experts works tirelessly to ensure that your goods are transported safely and on time, no matter the destination.
      </div>

      <div class="stats">
        <div class="stat-card">
          <h3>2.4K+</h3>
          <p>Successfully Delivery</p>
        </div>
        <div class="stat-card">
          <h3>1800+</h3>
          <p>Supply Engineers</p>
        </div>
        <div class="stat-card">
          <h3>199+</h3>
          <p>5 Star Reviews</p>
        </div>
        <div class="stat-card">
          <h3>125+</h3>
          <p>Countries Covered</p>
        </div>
      </div>

      <a href="#" class="btn">Learn More</a>
    </div>
  </section>

      <Footer/>
    </>
  );
};

export default About;
