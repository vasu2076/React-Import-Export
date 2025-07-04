import react from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";


const Contact2 = () =>{
     const imgurl = "https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1380.jpg?uid=R203151179&ga=GA1.1.627833558.1747904160&semt=ais_hybrid&w=740" ;

    return(
        <>
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
          <a className="nav-link dropdown-toggle " href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">
            About
          </a>
          <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
            <li><Link className="dropdown-item" to="/about">About 1</Link></li>
            <li><Link className="dropdown-item" to="/about2">About 2</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="#" id="contactDropdown" role="button" data-bs-toggle="dropdown">
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
      <h1>Contact</h1>
    </div>
  </section>
  
        <div className="contact-boxes">
        <div className="contact-card">
             <i class="fas fa-map-marker-alt"></i>
          <div>
            <h5>Our Address</h5>
            <p>
              123 Import-Export Street,<br />Anand, Gujarat 388001
            </p>
          </div>
        </div>
        <div className="contact-card">
          <i class="fas fa-phone-alt"></i>
          <div>
            <h5>Contact Us</h5>
            <p>
              +91 91234 56789<br />+91 98765 43210
            </p>
          </div>
        </div>
        <div className="contact-card">
          <i class="fas fa-envelope"></i>
          <div>
            <h5>Email Us</h5>
            <p>
              support@importexport.com<br />info@importexport.com
            </p>
          </div>
        </div>
      </div>

      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.845274913789!2d72.83106027465373!3d22.585388932305045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5a2ad4f6f6d7%3A0x57a7f6a83a2f4b9b!2sAnand%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718869363920!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

      <div className="contact-form-container">
        <h2>Send Us Message</h2>
        <small>
          Your email address will not be published. Required fields are marked *
        </small>
        <form className="contact2">
          <div className="form-group half">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group half">
            <input type="email" placeholder="Email" required />
            <select required>
              <option value="">Service Type</option>
              <option>Logistics</option>
              <option>Freight</option>
              <option>Warehousing</option>
            </select>
          </div>
          <div className="form-group">
            <textarea rows="4" placeholder="Message" required></textarea>
          </div>
          <div className="form-check">
            <input type="checkbox" id="saveInfo" />
            <label htmlFor="saveInfo">
                Save the information’s in this browser for next time use
            </label>
          </div>
          <button className="submit-btn" type="submit">Submit Now</button>
        </form>
      </div>
        <Footer/>
        </>
    )
}

export default Contact2