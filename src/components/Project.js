import React, { useEffect } from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Project = () => {
  const imgurl = "https://demo.bytelabx.com/laravel/quriar/assets/img/hero/hero-bg-2.jpg";

    useEffect(() => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        cards.forEach((card) => {
          card.classList.remove('slide-up');

          void card.offsetWidth;

          card.classList.add('slide-up');
        });
      });
    });

    return () => {
      filterButtons.forEach((button) =>
        button.removeEventListener('click', () => {})
      );
    };
  }, []);
  return (
    <>
    <style>{`
          .section-title {
      text-align: center;
      margin: 50px 0 30px;
    }
    .section-title h2{
      font-size: 35px;
    }

    .filter-btns {
      text-align: center;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }

    .filter-btns .btn {
      margin: 5px;
      border-radius: 20px;
      padding: 6px 20px;
    }

    .filter-btns .btn.active {
      background-color: #007bff;
      color: #fff;
      border-color: #007bff;
    }

    .project-card {
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      margin-bottom: 30px;
      cursor: pointer;
      animation: none;
    }

    .project-card img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    @media (max-width: 768px) {
      .project-card img {
        height: 250px;
      }
    }

    @media (max-width: 576px) {
      .project-card img {
        height: 250px;
      }
    }

    .project-info {
      position: absolute;
      bottom: -100%;
      left: 0;
      width: 100%;
      background: linear-gradient(to top, rgba(4, 2, 2, 0.8), transparent);
      color: #fff;
      padding: 20px;
      transition: bottom 0.4s ease;
    }

    .project-card:hover .project-info {
      bottom: 0;
    }

    .project-title {
      font-size: 25px;
      font-weight: bold;
    }

    .project-desc {
      font-size: 0.9rem;
      margin-top: 5px;
    }

    .slide-up {
      animation: slideUp 1s ease;
    }

    @keyframes slideUp {
      0% {
        transform: translateY(50px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .read-more {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #fff;
  text-decoration: underline;
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
}

.read-more span {
  margin-left: 5px;
  transition: margin-left 0.3s ease;
}

.project-card:hover .read-more span {
  margin-left: 10px;
}
.arrow-btn {
  /* background: #fff; */
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  padding: 8px 20px;
  display: inline-block;
  margin-bottom: 20px;
  transform: translateY(20px);
}
.arrow-btn:hover{
  color: #007bff;
}
.arrow-btn i {
  display: inline-block;
  transform: rotate(-40deg); /* Default rotated */
  transition: transform 0.3s ease;
}

.arrow-btn:hover i {
  transform: rotate(0deg); /* On hover, reset to 0 degrees */
}
@media(max-width:325px){
  .project-card{
    height: 350px;
  }
  .project-card img{
    height: 350px;
  }
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

   <div class="container">
    <div class="section-title">
      <h2>Explore Our Latest Project</h2>
    </div>

    <div class="d-flex justify-content-center filter-btns">
      <button class="btn btn-outline-secondary active filter-btn">Show All</button>
      <button class="btn btn-outline-secondary filter-btn">Logistics</button>
      <button class="btn btn-outline-secondary filter-btn">Transportation</button>
      <button class="btn btn-outline-secondary filter-btn">Tair Freight</button>
      <button class="btn btn-outline-secondary filter-btn">Road</button>
      <button class="btn btn-outline-secondary filter-btn">Cargo</button>
    </div>

    <div class="row text-center" id="card-container">
      <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-10.jpg" alt="Cargo Shipping"/>
          <div class="project-info">
            <div class="project-title">Cargo Shipping</div>
            <div class="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut similique reprehenderit ratione corporis sit harum est molestias commodi beatae, quaerat blanditiis culpa ipsa ipsam iste iusto aperiam soluta repellendus!</div>
     <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-11.jpg" alt="Road Transportation"/>
          <div class="project-info">
            <div class="project-title">Road Transportation</div>
            <div class="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi accusamus porro a dolore atque sit quod aperiam labore iusto. Unde libero corporis eius optio atque earum dolore fuga porro.</div>
               <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-12.jpg" alt="Air Freight"/>
          <div class="project-info">
            <div class="project-title">Air Freight</div>
            <div class="project-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus debitis eius est quod expedita minima! Repudiandae accusamus nemo reprehenderit sequi optio iure, ut, perspiciatis quos ipsam assumenda aspernatur excepturi?</div>
              <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

        <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-13.jpg" alt="Rail Transportation"/>
          <div class="project-info">
            <div class="project-title">Rail Transportation</div>
            <div class="project-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus debitis eius est quod expedita minima! Repudiandae accusamus nemo reprehenderit sequi optio iure, ut, perspiciatis quos ipsam assumenda aspernatur excepturi?</div>
            <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

        <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-5.jpg" alt="Shipping Transportation"/>
          <div class="project-info">
            <div class="project-title">Shipping Transportation</div>
            <div class="project-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus debitis eius est quod expedita minima! Repudiandae accusamus nemo reprehenderit sequi optio iure, ut, perspiciatis quos ipsam assumenda aspernatur excepturi?</div>
            <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

        <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-6.jpg" alt="Air Freight"/>
          <div class="project-info">
            <div class="project-title">Air Freight</div>
            <div class="project-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus debitis eius est quod expedita minima! Repudiandae accusamus nemo reprehenderit sequi optio iure, ut, perspiciatis quos ipsam assumenda aspernatur excepturi?</div>
              <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

        <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-8.jpg" alt="Transport Logistics"/>
          <div class="project-info">
            <div class="project-title">Transport Logistics</div>
            <div class="project-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus debitis eius est quod expedita minima! Repudiandae accusamus nemo reprehenderit sequi optio iure, ut, perspiciatis quos ipsam assumenda aspernatur excepturi?</div>
              <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

        <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-9.jpg" alt="Ship Transportation"/>
          <div class="project-info">
            <div class="project-title">Ship Transportation</div>
            <div class="project-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus debitis eius est quod expedita minima! Repudiandae accusamus nemo reprehenderit sequi optio iure, ut, perspiciatis quos ipsam assumenda aspernatur excepturi?</div>
              <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

        <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-7.jpg" alt="Door to door transport" />
          <div class="project-info">
            <div class="project-title">Door to door transport</div>
            <div class="project-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus debitis eius est quod expedita minima! Repudiandae accusamus nemo reprehenderit sequi optio iure, ut, perspiciatis quos ipsam assumenda aspernatur excepturi?</div>
              <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <Footer />
    </>
  );
};

export default Project;
