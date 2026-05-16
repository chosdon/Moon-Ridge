// src/pages/PackageDetails.jsx
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { PACKAGES } from "../data/packages";
import "../styles/packageDetails.css";

function PackageDetails() {
  const { id } = useParams();

  // 1️⃣ Find the package by ID
  const pkg = PACKAGES.find((p) => String(p.id) === id);

  if (!pkg) {
    return (
      <div className="details-page">
        <h2>Package not found</h2>
      </div>
    );
  }

  // 2️⃣ Refs for scrolling tabs
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const itineraryRef = useRef(null);
  const reviewsRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="details-page">

      {/* --- Header / Title --- */}
      <header className="details-header">
        <h1>{pkg.title}</h1>
        <p className="category">{pkg.category.toUpperCase()}</p>
      </header>

      {/* --- Main Image Section --- */}
      <div className="image-grid">
  <div className="left-img">
    <img src={pkg.images[0]} alt="Main" />
  </div>

  <div className="right-img">
    <img src={pkg.images[1]} alt="Second" />
    <img src={pkg.images[2]} alt="Third" />
  </div>
</div>

      {/* --- MAIN CONTENT WITH SIDEBAR --- */}
<div className="content-layout">

  {/* LEFT SIDE (70%) */}
  <div className="left-content">

    {/* Tabs */}
    <div className="tabs">
      <button onClick={() => scrollTo(featuresRef)}>Features</button>
      <button onClick={() => scrollTo(aboutRef)}>About</button>
      <button onClick={() => scrollTo(itineraryRef)}>Itinerary</button>
      <button onClick={() => scrollTo(reviewsRef)}>Reviews</button>
    </div>

    {/* Features */}
    <div ref={featuresRef} className="pricing-section">
      <div className="plan-card">
        <h3>Regular</h3>
        <h2>₹14,999</h2>
        <ul>
          <li>✔ Hotel Stay (3★)</li>
          <li>✔ Breakfast</li>
          <li>✔ Sightseeing</li>
          <li>✔ Transport</li>
        </ul>
      </div>

      <div className="plan-card pro">
        <h3>Pro</h3>
        <h2>₹21,999</h2>
        <ul>
          <li>✔ Hotel Stay (5★)</li>
          <li>✔ All Meals</li>
          <li>✔ Private Cab</li>
          <li>✔ Guide</li>
          <li>✔ Activities</li>
        </ul>
      </div>
    </div>

    {/* About */}
    <section ref={aboutRef} className="section about-section">
      <h2>About this Package</h2>
      <p>{pkg.about || "No description available."}</p>
    </section>

    {/* Itinerary */}
    <section ref={itineraryRef} className="section itinerary-section">
      <h2>Itinerary</h2>
      {pkg.itinerary?.map((day, index) => (
        <div key={index} className="day-box">
          <strong>Day {index + 1}</strong>
          <p>{day}</p>
        </div>
      ))}
    </section>

    {/* Reviews */}
    <section ref={reviewsRef} className="section reviews-section">
      <h2>Reviews</h2>
      <div className="review-box">
        <p>⭐ 5</p>
        <p>Amazing experience!</p>
      </div>
    </section>

  </div>

  {/* RIGHT SIDE (30%) */}
  <div className="right-sidebar">

    <div className="booking-box">
      <h3>₹{pkg.price}</h3>
      <p>per person</p>

      <button className="primary-btn">Book Now</button>

      <div className="divider"></div>

      <h4>Message Us</h4>
      <button
        className="whatsapp-btn"
        onClick={() => window.open("https://wa.me/919999999999")}
      >
        WhatsApp
      </button>

      <div className="qr">
        <img src="/qr.png" alt="qr" />
        <p>Scan Me</p>
      </div>
    </div>

  </div>

</div>
</div>


  );
}

export default PackageDetails;