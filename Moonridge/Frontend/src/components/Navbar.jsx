import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone, FaEnvelope } from "react-icons/fa";
function Navbar() {
  return (
    <>
      {/* Top Contact Bar */}
<div className="top-bar">
  <div className="top-bar-content">

    <div className="contact-group">
      
      <a href="tel:+1234567890">
        <FaPhone /> +1 234 567 890
      </a>
      
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp /> WhatsApp
      </a>
      
      <a href="mailto:info@moonridge.com">
        <FaEnvelope /> Email
      </a>

    </div>

  </div>
</div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
           <img src={logo} className="logo-img" />
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Packages">Packages</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;