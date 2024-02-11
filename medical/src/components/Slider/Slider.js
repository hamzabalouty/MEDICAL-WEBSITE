import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <section className="Home-1 mb-5">
      <div id="carouselExampleCaptions" className="carousel slide home-caru">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://raw.githubusercontent.com/AbdelrahmanGoud/Medical/main/images/medic-1.jpg"
              className="d-block wow slideInRight"
              data-wow-duration="2s"
              alt="..."
            />
            <div
              className="carousel-caption wow slideInLeft"
              data-wow-duration="2s"
            >
              <h2 className="mb-4 text-dark">Medical Center</h2>
              <p className="mb-4 text-dark">
                We're the biggest, best equipped and most advanced medical
                center in Denver.
              </p>
              <button className="btn btn-dark p-3">
                Explore Now <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
