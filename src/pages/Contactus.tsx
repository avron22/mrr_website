

    import { MapPin, Mail } from "lucide-react";
    import "./ContactForm.css";
    
        

const Contactus: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Reach out to our team. Let’s make your modeling dreams a reality!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <MapPin className="icon" />
              <p>29 20th Ave, Cubao, Quezon City, 1110 Metro Manila</p>
            </div>
            <div className="contact-item">
              <Mail className="icon" />
              <div>
                <p>models@manilarunwayrepublic.com</p>
                <p>kathy@manilarunwayrepublic.com</p>
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

export default Contactus;