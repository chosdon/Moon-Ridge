import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-section">

      <h2 className="section-title">Contact Us</h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Have questions or want to plan your trip? Reach out to us.</p>

          <p><strong>📍 Location:</strong> Guwahati, India</p>
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>📧 Email:</strong> travel@example.com</p>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;