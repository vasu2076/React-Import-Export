import React, { useState ,useEffect, useRef } from "react";
import Footer from "./footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Gallen Maxwell",
    role: "CEO & Founder",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore eligendi et beatae...",
    image:
      "https://html.themexriver.com/fastrans/assets/img/testimonial/test2.1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut neque minus rerum earum...",
    image:
      "https://demo.bytelabx.com/laravel/quriar/assets/img/testimonial/client-3.png",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Operations Manager",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illum eaque repellat sapiente...",
    image:
      "https://demo.bytelabx.com/laravel/quriar/assets/img/testimonial/client-2.png",
  },
];

const Home = () => {
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

      const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = useRef(null);
  const slideCount = testimonials.length;

   const goToSlide = (index) => {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    setCurrentIndex(index);
    resetAutoSlide();
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, 3000);
  };

  const resetAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideInterval.current);
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

  return (
    <>
    <style>{`
    .mySwiper {
  height: 80vh;
}

.slide-bg {
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.slide-content {
  position: relative;
  z-index: 2;
  text-align: center;
  justify-content: center;
  color: #fff;
  animation: fadeInUp 1.5s ease-in-out;
  padding: 20px;
  margin-top: -10%;
}

.slide-content h1 {
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.slide-content p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
}

.slide-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
   margin-top: 10px;
}

  .slide-buttons a {
      text-decoration: none;
      color: #fff;
      padding: 12px 30px;
      border: 2px solid #fff;
      border-radius: 30px;
      font-weight: bold;
      transition: all 0.3s ease;
    }

.slide-buttons a:first-child {
  background-color: #007bff;
  border-color: #007bff;
}

.slide-buttons a:hover {
  background-color: #fff;
  color: #000;
  border: none;
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

.swiper-button-next,
.swiper-button-prev {
  color: #fff;
}

@media (max-width: 768px) {
  .slide-content h1 {
    font-size: 2rem;
  }

  .slide-content p {
    font-size: 1rem;
  }

  .slide-buttons a {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
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
   .contact-section {
      padding: 60px 20px;
  transform: translateY(50px);
  transition: all 2s ease-in-out;
    }
    .contact-left h2 {
      font-size: 36px;
      font-weight: 700;
      color: #003b4a;
      margin-bottom: 25px;
    }

 .info-boxs {
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

.info-boxs:hover {
  transform: translateX(10px);
}
    .info-boxs i {
      font-size: 24px;
      color: #007bff;
      padding: 12px;
      border-radius: 10px;
    }

    .info-boxs h5 {
      margin: 0;
      font-weight: 700;
      font-size: 16px;
      color: #003b4a;
    }

    .info-boxs p {
      margin: 4px 0 0;
      font-size: 14px;
      color: #333;
    }

    .contact-form {
      background-color: #f5f5f5;
      padding: 30px;
      border-radius: 5px;
    }

    .contact-form h4 {
      font-weight: 700;
      color: #003b4a;
      margin-bottom: 25px;
      text-align: center;
    }

    .form-control {
      border-radius: 4px;
      margin-bottom: 15px;
      height: 50px;
    }

    .form-control::placeholder {
      font-size: 17px;
    }

    .btn-red {
      background-color: #007bff;
      color: #fff;
      font-weight: 600;
      padding: 10px 25px;
      border: none;
      border-radius: 5px;
      width: 100%;
      margin-top: 10px;
    }

    @media (max-width: 768px) {
      .contact-section {
        padding: 40px 15px;
      }

      .contact-left h2 {
        font-size: 28px;
      }
    }
         .service-headings {
  text-align: center;
  padding: 40px;
}

.service-headings h1 {
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
      /* text-align: center; */
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
  /* transform: translateY(-50%); */
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
.arrow-bt {
  /* background: #fff; */
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  padding: 8px 20px;
  display: inline-block;
  margin-bottom: 20px;
  transform: translateY(20px);
}
.arrow-bt:hover{
  color: #007bff;
}
.arrow-bt i {
  display: inline-block;
  transform: rotate(-40deg); /* Default rotated */
  transition: transform 0.3s ease;
}

.arrow-bt:hover i {
  transform: rotate(0deg);
}
@media(max-width:325px){
  .project-card{
    height: 350px;
  }
  .project-card img{
    height: 350px;
  }
}
.projects-section {
  text-align: center;
  padding: 60px 20px;
}
.projects-section .label {
  display: inline-block;
  padding: 4px 12px;
  font-size: 0.85em;
  color: #3b82f6;
  background-color: #e0f0ff;
  border-radius: 12px;
  margin-bottom: 20px;
}
.projects-section h2 {
  font-size: 2em;
  font-weight: 700;
  color: #111;
  margin: 0 0 15px 0;
}
.projects-section p {
  max-width: 600px;
  margin: 0 auto;
  color: #555;
  font-size: 0.95em;
}
   .testimonial-badge {
      display: inline-block;
      background-color: #e7f0fa;
      color: #3b82f6;
      font-size: 14px;
      font-weight: 500;
      padding: 6px 14px;
      border-radius: 20px;
      margin-bottom: 20px;
      margin-left: 35%;
      text-decoration: none;
    }

    .testimonial-title {
      font-size: clamp(24px, 5vw, 28px);
      font-weight: 700;
      margin-bottom: 15px;
      color: #111827;
      text-align: center;
    }

    .testimonial-description {
      font-size: 15px;
      color: #555;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto 30px;
      text-align: center;
      padding: 0 15px;
    }

    .testimonial-section {
      max-width: 600px;
      width: 100%;
      overflow: hidden;
      position: relative;
      margin: 0 auto;
      padding: 0 15px;
    }

    .slider-wrapper {
      display: flex;
      transition: transform 0.5s ease;
    }

    .testimonial-card {
      min-width: 100%;
      box-sizing: border-box;
      background: #ffffff;
      padding: 30px 25px;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      text-align: center;
      margin: 0 5px;
    }

    .testimonial-photo {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      margin: 0 auto 15px;
      display: block;
      border: 3px solid #e7f0fa;
    }

    .testimonial-name {
      font-size: 18px;
      font-weight: 600;
      color: #2f3640;
      margin: 0;
    }

    .testimonial-role {
      font-size: 14px;
      color: #0984e3;
      margin: 5px 0 15px;
    }

    .testimonial-text {
      font-size: 15px;
      color: #555;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .testimonial-stars {
      font-size: 18px;
      color: #f1c40f;
      margin-bottom: 10px;
    }

    .slider-nav {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      gap: 15px;
    }

    .slider-nav button {
      background: #0984e3;
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      transition: all 0.3s;
    }

    .slider-nav button:hover {
      background: #0768b2;
    }

    @media (max-width: 768px) {
      .testimonial-card {
        padding: 25px 20px;
      }

      .testimonial-photo {
        width: 70px;
        height: 70px;
      }

      .testimonial-text {
        font-size: 14px;
      }
    }

    @media (max-width: 480px) {
      .testimonial-badge {
        font-size: 13px;
      }

      .testimonial-title {
        font-size: 22px;
      }

      .testimonial-description {
        font-size: 14px;
      }

      .testimonial-card {
        padding: 20px 15px;
      }
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
      <nav id="navigation" className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><span>Import-Export</span></Link>

    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav align-items-center">

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown">
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
          <a className="nav-link dropdown-toggle " href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">
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

  <section id="Home">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="slide-bg"
            style={{
              backgroundImage:
                "url('https://demo.bytelabx.com/laravel/quriar/assets/img/hero/hero-bg-1.jpg')",
            }}
          >
            <div className="overlay"></div>
            <div className="slide-content">
              <h1>Import Global Products</h1>
              <p>
                Reliable sourcing from international partners to fuel your
                business growth.
              </p>
              <div className="slide-buttons">
                <a href="/Service2">Explore Services</a>
                <a href="/Bookquote2">Get a Quote</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide-bg"
            style={{
              backgroundImage:
                "url('https://demo.bytelabx.com/laravel/quriar/assets/img/hero/hero-bg-2.jpg')",
            }}
          >
            <div className="overlay"></div>
            <div className="slide-content">
              <h1>Export With Confidence</h1>
              <p>
                Delivering your products globally with speed and safety.
              </p>
              <div className="slide-buttons">
                <a href="/Service2">Explore Services</a>
                <a href="/Bookquote2">Get a Quote</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
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

        <section class="section-container slide-up-element">
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

  <section className="testimonial-section slide-up-element">
      <a href="#" className="testimonial-badge">
        Our Testimonial
      </a>
      <h2 className="testimonial-title">Trusted By Industry Leaders</h2>
      <p className="testimonial-description">
        Their testimonials highlight our commitment to overcoming logistical
        challenges and delivering on our promises. Read on to discover.
      </p>

      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <img
              src={item.image}
              alt={item.name}
              className="testimonial-photo"
            />
            <h3 className="testimonial-name">{item.name}</h3>
            <p className="testimonial-role">{item.role}</p>
            <p className="testimonial-text">"{item.text}"</p>
            <div className="testimonial-stars">★★★★★</div>
          </div>
        ))}
      </div>

      <div className="slider-nav">
        <button className="prev-btn" onClick={prevSlide} aria-label="Previous testimonial">
          &#10094;
        </button>
        <button className="next-btn" onClick={nextSlide} aria-label="Next testimonial">
          &#10095;
        </button>
      </div>
    </section>

    <section class="service-headings slide-up-element">
  <h1>End-to-End Import-Export <br /><span>Services to Your Needs</span> </h1>
   <section class="container py-3">
    <div class="row justify-content-center g-4 mt-4">

      <div class="col-12 col-sm-6 col-md-3">
        <div class="card-custom">
  <div class="card-img-wrapper">
    <img src="https://html.themexriver.com/fastrans/assets/img/service/ser4.2.jpg" alt="Road Freight" />
  </div>
  <div class="card-icon"><i class="fas fa-truck"></i></div>
  <div class="card-body">
    <div class="freight-title">Road Freight</div>
 <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
  </div>
  <div class="card-number">1</div>
</div>
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <div class="card-custom">
  <div class="card-img-wrapper">
    <img src="https://html.themexriver.com/fastrans/assets/img/service/ser4.3.jpg" alt="Road Freight" />
  </div>
  <div class="card-icon"><i class="fa-solid fa-ship"></i></div>
  <div class="card-body">
    <div class="freight-title">Ocean Freight</div>
    <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
  </div>
  <div class="card-number">2</div>
</div>
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <div class="card-custom">
  <div class="card-img-wrapper">
    <img src="https://html.themexriver.com/fastrans/assets/img/service/ser4.4.jpg" alt="Road Freight" />
  </div>
  <div class="card-icon"><i class="fa-solid fa-plane"></i></div>
  <div class="card-body">
    <div class="freight-title">Air Freight</div>
  <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
  </div>
  <div class="card-number">3</div>
</div>
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <div class="card-custom">
  <div class="card-img-wrapper">
    <img src="https://html.themexriver.com/fastrans/assets/img/service/ser4.2.jpg" alt="Road Freight" />
  </div>
  <div class="card-icon"><i class="fa-solid fa-train-subway"></i></div>
  <div class="card-body">
    <div class="freight-title">Third Party Logistics</div>
    <div class="arrow-btn">Read More <i class="fas fa-arrow-right ms-2"></i></div>
  </div>
  <div class="card-number">4</div>
</div>
      </div>
    </div>
  </section>
</section>

   <section class="projects-section slide-up-element">
  <div class="label">Our Projects</div>
  <h2>Showcasing Our Expertise</h2>
  <p>
    From complex international shipments to efficient domestic transport,<br />
    our success stories highlight our commitment to reliability.
  </p>

    <div class="container mt-5">
    <div class="row" id="card-container">
      <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-10.jpg" alt="Cargo Shipping" />
          <div class="project-info">
            <div class="project-title">Cargo Shipping</div>
            <div class="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut similique reprehenderit ratione corporis sit harum est molestias commodi beatae, quaerat blanditiis culpa ipsa ipsam iste iusto aperiam soluta repellendus!</div>
     <div class="arrow-bt">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-11.jpg" alt="Road Transportation" />
          <div class="project-info">
            <div class="project-title">Road Transportation</div>
            <div class="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi accusamus porro a dolore atque sit quod aperiam labore iusto. Unde libero corporis eius optio atque earum dolore fuga porro.</div>
               <div class="arrow-bt">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-12.jpg" alt="Air Freight" />
          <div class="project-info">
            <div class="project-title">Air Freight</div>
            <div class="project-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus debitis eius est quod expedita minima! Repudiandae accusamus nemo reprehenderit sequi optio iure, ut, perspiciatis quos ipsam assumenda aspernatur excepturi?</div>
              <div class="arrow-bt">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

        <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-13.jpg" alt="Rail Transportation" />
          <div class="project-info">
            <div class="project-title">Rail Transportation</div>
            <div class="project-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus debitis eius est quod expedita minima! Repudiandae accusamus nemo reprehenderit sequi optio iure, ut, perspiciatis quos ipsam assumenda aspernatur excepturi?</div>
            <div class="arrow-bt">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

        <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-5.jpg" alt="Shipping Transportation" />
          <div class="project-info">
            <div class="project-title">Shipping Transportation</div>
            <div class="project-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus debitis eius est quod expedita minima! Repudiandae accusamus nemo reprehenderit sequi optio iure, ut, perspiciatis quos ipsam assumenda aspernatur excepturi?</div>
            <div class="arrow-bt">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>

        <div class="col-md-4">
        <div class="project-card">
          <img src="https://demo.bytelabx.com/laravel/quriar/assets/img/project/project-6.jpg" alt="Air Freight" />
          <div class="project-info">
            <div class="project-title">Air Freight</div>
            <div class="project-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus debitis eius est quod expedita minima! Repudiandae accusamus nemo reprehenderit sequi optio iure, ut, perspiciatis quos ipsam assumenda aspernatur excepturi?</div>
              <div class="arrow-bt">Read More <i class="fas fa-arrow-right ms-2"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>

<section class="contact-section slide-up-element">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-6 contact-left">
        <h2>Get in Touch And We’ll Help Your Business</h2>

        <div class="info-boxs">
          <i class="fas fa-map-marker-alt"></i>
          <div>
            <h5>Office address</h5>
            <p> 123 Import-Export Street,<br />Anand, Gujarat 388001</p>
          </div>
        </div>

        <div class="info-boxs">
          <i class="fas fa-phone"></i>
          <div>
            <h5>Telephone number</h5>
            <p>+91 91234 56789<br />+91 98765 43210</p>
          </div>
        </div>

        <div class="info-boxs">
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
            <div class="col-md-12">
              <input type="text" class="form-control" placeholder="Your Name" />
            </div>
            <div class="col-md-12">
              <input type="email" class="form-control" placeholder="Your Email" />
            </div>
            <div class="col-md-12">
              <input type="text" class="form-control" placeholder="Phone Number" />
            </div>
            <div class="col-md-12">
              <input type="text" class="form-control" placeholder="Inquiry Department" />
            </div>
            <div class="col-12">
              <textarea class="form-control" rows="3" placeholder="Your Message"></textarea>
            </div>
          </div>
          <button class="btn-red">Submit Now</button>
        </form>
      </div>
    </div>
  </div>
</section>
      <Footer/>
    </>
  );
};

export default Home;
