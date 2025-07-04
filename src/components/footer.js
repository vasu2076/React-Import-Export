import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
    return(
        <>
         <footer>
    <div class="footer-container">
      
      <div class="footer-column">
        <h5>Import-Export</h5>
        <p>
          A trusted import-export partner connecting businesses globally with reliable shipping, logistics, and documentation services.
        </p>
      </div>

      <div class="footer-column fo">
        <h5>Quick Links</h5>
        <p><a href="/">Home</a></p>
        <p><a href="/Service">Services</a></p>
        <p><a href="/about">About Us</a></p>
        <p><a href="/Contact">Contact</a></p>
      </div>

      <div class="footer-column fo">
        <h5>Our Services</h5>
        <p><a href="#">Ocean Freight Shipping</a></p>
        <p><a href="#">Air Freight Shipping</a></p>
        <p><a href="#">Car Shipping</a></p>
        <p><a href="#">Warehouse Solutions</a></p>
      </div>

      <div class="footer-column fo">
         <h5>Contact Us</h5>
        <p><i class="fas fa-map-marker-alt"></i> 123 Import-Export Street,<br />Anand, Gujarat 388001</p>
        <p><i class="fas fa-envelope"></i> info@importexport.com</p>
        <p><i class="fas fa-phone"></i>+91 91234 56789</p>
        <p><i class="fas fa-globe"></i> www.importexport.com</p>
      </div>

    </div>

        <div class="footer-container" style={{ justifyContent: "space-between", alignItems: "center" }}>
     <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>

    <div class="footer-bottom">
      &copy; 2025 Import-Export. All rights reserved.
    </div>
  </footer>

        </>
    )
};

export default Footer;
