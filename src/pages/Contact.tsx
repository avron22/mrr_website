
import "./Contactus.css";

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="contact-banner">
        <img src="/src/assets/contact-us.png" alt="Contact Banner" />
      </div>
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Reach out to our team. Let’s make your modeling dreams a reality!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <img src="/src/assets/pin.svg" alt="Location" className="icon" />
              <p className="address">29 20th Ave, Cubao, Quezon City, 1110 Metro Manila</p>
            </div>
            <div className="contact-item">
              <img src="/src/assets/email.svg" alt="Email" className="icon" />
              <div className="email-list">
            <p className="email">models@manilarunwayrepublic.com</p>
            <p className="email">kathy@manilarunwayrepublic.com</p>
          </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <textarea
            placeholder="Message"
            rows={5}
            className="form-textarea"
          />
          <button type="submit" className="form-button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
