import React from "react";
import "./About.css";

const AboutStory = () => {
  return (
    <div className="about-story">
      <div className="story-container">
        <div className="story-image">
          <img
            src="https://medical-site-web.netlify.app/images/medic-6-800x700.jpg"
            alt="image"
          />
        </div>
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            We have been operating for over 30 years and are Members of The{" "}
            <br />
            Federation of Master Builders. We work on projects big and small{" "}
            <br />
            from small residential extensions to full house and commercial
            <br /> builds and we are registered NHBC house builders.
          </p>
          <br />
          <p>
            I am text block. Click edit button to change this text. Lorem ipsum{" "}
            <br />
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec <br />
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
