import React, { useEffect } from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Home2 = () => {
  const imgurl = "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
  
    useEffect(() => {
    function animateValue(id, start, end, duration) {
      const obj = document.getElementById(id);
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        if (obj) obj.innerHTML = value;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValue("stat1", 0, 75, 2000);
          animateValue("stat2", 0, 12500, 2500);
          animateValue("stat3", 0, 850, 1800);
        }
      },
      { threshold: 0.5 }
    );

    const heroElement = document.querySelector(".hero");
    if (heroElement) observer.observe(heroElement);

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const hero = document.querySelector(".hero");
      const heroBg = document.querySelector(".hero-bg");
      const content = document.querySelector(".hero-content");

      if (hero && heroBg) {
        heroBg.style.transform = `translateZ(-10px) scale(2.1) translateY(${
          scrollPosition * 0.5
        }px)`;
      }

      if (content && hero) {
        const scrollPercent = scrollPosition / (hero.offsetHeight * 0.5);
        content.style.opacity = 1 - scrollPercent;
      }
    };

    window.addEventListener("scroll", handleScroll);

    const smoothScrollAnchors = document.querySelectorAll('a[href^="#"]');
    smoothScrollAnchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    return () => {
      // Cleanup
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      smoothScrollAnchors.forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

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

  const imgurl2 = "https://html.themexriver.com/fastrans/assets/img/about/ab2.jpg";
  return (
    <>
    <style>{`
     body{
        color: #fff;
      }
      .hero {
            position: relative;
            height:100vh;
            width: 100%;
            overflow: hidden;
            perspective: 100px;
        }
        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            z-index: -2;
            transform: translateZ(-10px) scale(2.1);
        }
        
.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   background-color: rgba(0,0,0,0.7);
    z-index: -1;
}
        .hero-content {
            position: relative;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 0 10%;
            z-index: 1;
        }
        

        .hero-title {
            font-size: 4.5rem;
            font-weight: 900;
            margin-bottom: 1.5rem;
            line-height: 1.2;
            text-transform: uppercase;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1s 0.3s forwards;
            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .hero-subtitle {
            font-size: 1.5rem;
            font-weight: 400;
            margin-bottom: 2.5rem;
            max-width: 700px;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1s 0.6s forwards;
        }
        
        .stats-bar {
            display: flex;
            gap: 2rem;
            margin-bottom: 3rem;
            opacity: 0;
            animation: fadeIn 1s 0.9s forwards;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: #007bff;
            margin-bottom: 0.5rem;
            position: relative;
        }
        
        .stat-number::after {
            content: '+';
            position: absolute;
            right: -15px;
        }
        
        .stat-label {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .cta-buttons {
            display: flex;
            gap: 1.5rem;
            opacity: 0;
            animation: fadeIn 1s 1.2s forwards;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 15px 35px;
            border-radius: 4px;
            font-weight: 600;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
        }
        
        .btn-primary {
            background: #007bff;
            color: #fff;
        }
        
        .btn-primary:hover {
            transform: translateY(-3px);
            color: #007bff;
            background-color: #fff;
            border: 1px solid #007bff;
        }
        
        .btn-secondary {
            background: transparent;
            color: #fff;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-3px);
        }
        
        .floating-elements {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 0;
        }
        
        .floating-icon {
            position: absolute;
            opacity: 0.1;
            animation: float 15s infinite linear;
        }
        
        .floating-icon:nth-child(1) {
            top: 20%;
            left: 10%;
            font-size: 3rem;
            animation-delay: 0s;
            animation-duration: 20s;
        }
        
        .floating-icon:nth-child(2) {
            top: 60%;
            left: 80%;
            font-size: 2.5rem;
            animation-delay: 2s;
            animation-duration: 25s;
        }
        
        .floating-icon:nth-child(3) {
            top: 30%;
            left: 85%;
            font-size: 4rem;
            animation-delay: 4s;
            animation-duration: 18s;
        }
        
        .floating-icon:nth-child(4) {
            top: 75%;
            left: 15%;
            font-size: 3rem;
            animation-delay: 1s;
            animation-duration: 22s;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-50px) rotate(180deg);
            }
            100% {
                transform: translateY(0) rotate(360deg);
            }
        }
        
        @keyframes scrollDown {
            0% {
                opacity: 1;
                transform: translateY(0) translateX(-50%);
            }
            100% {
                opacity: 0;
                transform: translateY(15px) translateX(-50%);
            }
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
            .hero-title {
                font-size: 3.5rem;
            }
            
            .hero-subtitle {
                font-size: 1.2rem;
            }
        }
        
        @media (max-width: 768px) {
            .hero-content {
                padding: 0 5%;
                align-items: center;
                text-align: center;
            }
            
            .hero-title {
                font-size: 2.5rem;
            }
            
            .hero-subtitle {
                font-size: 1rem;
            }
            
            .stats-bar {
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .cta-buttons {
                flex-direction: column;
                width: 100%;
            }
            
            .btn {
                width: 100%;
            }
        }
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
    }

    .image-col img {
      max-width: 100%;
      border-radius: 8px;
      display: block;
    }


    @media (max-width: 992px) {
      .about-section {
        flex-direction: column;
        text-align: center;
      }
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
    .hidden {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 2s ease, transform 2s ease;
}

.show {
  opacity: 1;
  transform: translateY(0);
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
     .section-titl {
      text-align: center;
      margin-top: 100px;
    }
    .section-titl .subheading {
      color: #007bff;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 10px;
      display: inline-block;
    }
    .section-titl .heading {
      font-size: 32px;
      font-weight: 800;
      color: #002b36;
      line-height: 1.4;
    }
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
         .service-headings {
            padding: 40px;
        }
        
        .service-headings h1 {
    text-align: center;
  font-size: 2em;
  color: #002b36; /* Dark text color */
  font-weight: 700;
  margin: 0;
}

.service-headings span {
   font-size: 1.0em;
  color: #007bff;
  font-weight: 700;
  margin-bottom: 10px;
}
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
      color: #007bff;
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
      .hidden {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 2s ease, transform 2s ease;
}

.show {
  opacity: 1;
  transform: translateY(0);
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

   <section className="hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url("${imgurl}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>

        <div className="hero-overlay"></div>

        <div className="floating-elements">
          <i className="fas fa-ship floating-icon"></i>
          <i className="fas fa-plane floating-icon"></i>
          <i className="fas fa-boxes floating-icon"></i>
          <i className="fas fa-globe-americas floating-icon"></i>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Import-Export Solutions</h1>
          <p className="hero-subtitle">
            We bridge international markets with seamless import/export services,
            customs clearance, and logistics solutions tailored to your business
            needs.
          </p>

          <div className="stats-bar">
            <div className="stat-item">
              <div className="stat-number" id="stat1">0</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" id="stat2">0</div>
              <div className="stat-label">Successful Shipments</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" id="stat3">0</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
          </div>

          <div className="cta-buttons">
            <a href="/Service" className="btn btn-primary">
              <i className="fas fa-chart-line" style={{ marginRight: "10px" }}></i> Our Services
            </a>
            <a href="/Bookquote" className="btn btn-secondary">
              <i className="fas fa-headset" style={{ marginRight: "10px" }}></i> Get a Quote
            </a>
          </div>
        </div>
      </section>

          <section class="slide-up-element about-section">
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

      <a href="/about" class="explore-btn">Explore More</a>
    </div>

    <div class="image-col">
      <img src="https://html.vikinglab.agency/cargon/assets/img/about/ca-choose-ing1.1.png" alt="Worker" class="img-fluid" />
    </div>
  </section>

       <section class="service-headings slide-up-element">
  <h1>Your Goods.<span>Our Global Network.</span> </h1>
    <div class="container py-5 ">
  <div class="row g-4">
    <div class="col-12 col-sm-6 col-lg-4 slide-up-element">
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

 <div class="col-12 col-sm-6 col-lg-4 slide-up-element">
      <div class="service-box">
        <div class="service-icon"><img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.5.svg" class="img-fluid" /></div>
        <div class="service-number">02</div>
        <h5 class="service-title">International Shipping</h5>
        <p class="service-desc">Additionally, our supply chain management services optimize every step your logistics process, and our e-commerce fulfillment</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

      <div class="col-12 col-sm-6 col-lg-4 slide-up-element">
      <div class="service-box">
        <div class="service-icon"><img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.7.svg" class="img-fluid" /></div>
        <div class="service-number">03</div>
        <h5 class="service-title">Inventory Management</h5>
        <p class="service-desc">Finally, our Reliable Last-Mile Delivery and Freight Consolidation Services ensure your</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

       <div class="col-12 col-sm-6 col-lg-4 slide-up-element">
      <div class="service-box">
        <div class="service-icon"><img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.6.svg" class="img-fluid" /></div>
        <div class="service-number">04</div>
        <h5 class="service-title">Cold Chain Logistics</h5>
        <p class="service-desc">Whether it’s handling project cargo with specialized requirements or maintaining the integrity of temperature-sensitive</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-lg-4 slide-up-element">
      <div class="service-box">
        <div class="service-icon">
          <img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.2.svg" class="img-fluid" />
        </div>
        <div class="service-number">05</div>
        <h5 class="service-title">Supply Chain Management</h5>
        <p class="service-desc">We offer state-of-the-art warehousing solutions, ensuring your inventory is managed with precision and care.</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-lg-4 slide-up-element">
      <div class="service-box">
        <div class="service-icon"><img src="https://html.vikinglab.agency/cargon/assets/img/icon/ca-iner-ser1.3.svg" class="img-fluid" /></div>
        <div class="service-number">06</div>
        <h5 class="service-title">Project Cargo Handling</h5>
        <p class="service-desc">Our freight forwarding services ensure smooth and efficient transportation of goods across borders, while our customs</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

  </div>
</div>
  </section>

    <section id="Project">
    <div class="container slide-up-element">
    <div class="section-titl">
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

      <div class="col-md-4 slide-up-element">
        <div class="project-card">
          <img src="https://html.themexriver.com/fastrans/assets/img/project/port3.jpg" alt="Project Image" />
          <div class="overla">
            <h5>Service & Aftermarket Logistics</h5>
            <p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus facilisis.</p>
            <button class="read-more-btn">Read More →</button>
          </div>
        </div>
      </div>

      <div class="col-md-4 slide-up-element">
        <div class="project-card">
          <img src="https://html.themexriver.com/fastrans/assets/img/project/port2.jpg" alt="Transport Project" />
           <div class="overla">
            <h5>Service & Aftermarket Logistics</h5>
            <p>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus facilisis.</p>
            <button class="read-more-btn">Read More →</button>
          </div>
        </div>
      </div>

      <div class="col-md-4 slide-up-element">
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
  <div class="text-center mt-5 mb-5 slide-up-element">
    <button class="load-more-btn "> <a href="/Project" style={{ textDecoration: 'none', color: '#fff' }}>Load More <i class="fas fa-arrow-right ms-2"></i></a></button>
  </div>
</section>

  <section id="About ">
      <section class="container py-5 slide-up-element">
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
      <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/about/who-we-are-image.jpg" alt="Import Export Team" class="img-fluid rounded animate-left scroll-animate" />
      <div class="exp-box">
        <h1>8+</h1>
        <p>Years Of<br />Experience</p>
      </div>
    </div>
  </div>
</section>

    </section>

        <section class="quote-section slide-up-element">
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

export default Home2;
