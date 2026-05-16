import "../styles/Footer.css";

import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaYoutube  } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}
        <div className="footer-col">
            <img src={logo} alt="logo" className="footer-logo" />
        </div>

        {/* Important Sites */}
        <div className="footer-col">
          <h3>Important Sites</h3>
          <p>Home</p>
          <p>About</p>
          <p>Packages</p>
          <p>Contact</p>
        </div>

        {/* Get in Touch */}
        <div className="footer-col">
          <h3>Get in Touch</h3>
          <p>📞 +91 9876543210</p>
          <p>✉️ info@travel.com</p>
          <p>📍 Assam, India</p>
        </div>


        
        {/* Follow Us */}
        <div className="footer-col">
  <h3>Follow Us</h3>

  <div className="social-icons">
    <FaFacebook />
    <FaInstagram />
    <FaYoutube  />
  </div>

</div>

      </div>

    </footer>
  );
}

export default Footer;