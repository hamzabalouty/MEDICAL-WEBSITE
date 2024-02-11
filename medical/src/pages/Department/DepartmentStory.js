import React from "react";

const DepartmentStory = () => {
  return (
    <div className="about-story">
      <div className="story-container">
        <div className="story-image">
          <img
            src="https://medical-site-web.netlify.app/images/medic-1.jpg"
            alt="image"
          />
        </div>
        <div className="story-text">
          <h2>Family Doctor</h2>
          <p>
            We have been operating for over 30 years and are Members of The{" "}
            <br />
            Federation of Master Builders. We work on projects big and small{" "}
            <br />
            from small residential extensions to full house and commercial
            <br /> builds and we are registered NHBC house builders.
          </p>
          <br />
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentStory;
