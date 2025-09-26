import React from "react";
import "./GRWMRR.css";

import grwmrr1 from "../assets/grwmrr1.png";
import grwmrr2 from "../assets/grwmrr2.png";
import grwmrr3 from "../assets/grwmrr3.png";
import grwmrr4 from "../assets/grwmrr4.png";
import rising1 from "../assets/rising1.png";
import rising2 from "../assets/rising2.png";
import rising3 from "../assets/rising3.png";
import rising4 from "../assets/rising4.png";
import rising5 from "../assets/rising5.png";
import rising6 from "../assets/rising6.png";
import rising7 from "../assets/rising7.png";
import rising8 from "../assets/rising8.png";

const GRWMRR: React.FC = () => {
  const images = [grwmrr1, grwmrr2, grwmrr3, grwmrr4];

  return (
    <div>
      {/* ----------------- */}
      {/* First Section     */}
      {/* ----------------- */}

      <div className="mrr-wrapper">
    <div className="mrr">
      <img src="/src/assets/mrr.png" alt="mrr" />
    </div>
  </div>
  
      <div className="grwmrr-container first-section">
        <h2 className="grwmrr-subtitle">Rehearsals & Coaching Sessions</h2>

        <div className="grwmrr-grid">
          {images.map((img, index) => (
            <div className="grwmrr-item" key={index}>
              <img src={img} alt={`grwmrr-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* ----------------- */}
      {/* Second Section    */}
      {/* ----------------- */}
      <div className="extra-section second-section">
        <div className="extra-content">
          <h1 className="extra-title">Rising Stars</h1>
          <h2 className="extra-subtitle">
            Shaping the Future of Fashion from a Young Age
          </h2>

          {/* Group 1 */}
          <div className="extra-group">
            <div className="extra-caption">Young Designers in Action</div>
            <div className="extra-images">
              <div className="extra-item">
                <img src={rising1} alt="rising-1" />
              </div>
              <div className="extra-item">
                <img src={rising2} alt="rising-2" />
              </div>
            </div>
          </div>

          {/* Group 2 */}
          <div className="extra-group">
            <div className="extra-caption">Future Runway Models</div>
            <div className="extra-images">
              <div className="extra-item">
                <img src={rising3} alt="rising-3" />
              </div>
              <div className="extra-item">
                <img src={rising4} alt="rising-4" />
              </div>
            </div>
          </div>

          {/* Group 3 */}
          <div className="extra-group">
            <div className="extra-caption">Creative Stylists</div>
            <div className="extra-images">
              <div className="extra-item">
                <img src={rising5} alt="rising-5" />
              </div>
              <div className="extra-item">
                <img src={rising6} alt="rising-6" />
              </div>
            </div>
          </div>

          {/* Group 4 */}
          <div className="extra-group">
            <div className="extra-caption">Rising Icons</div>
            <div className="extra-images">
              <div className="extra-item">
                <img src={rising7} alt="rising-7" />
              </div>
              <div className="extra-item">
                <img src={rising8} alt="rising-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="hero-section">
  <p className="hero-text">
    Manila Runway Republic is where your journey begins.
  </p>
  <p className="hero-text">
    Join us as we celebrate youth, talent, and fashion.
  </p>

  {/* First button */}
  <button className="hero-btn dark-btn">Contact Us </button>

  
</section>
    </div>
    
  );
};

export default GRWMRR;
