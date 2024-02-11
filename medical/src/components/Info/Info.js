import React from "react";
import "./Info.css";
import { GiCottonFlower, GiTwirlyFlower } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Info = () => {
  return (
    <div className="info">
      <div className="left">
        <img
          src="https://medical-site-web.netlify.app/images/medic-8-768x1166.jpg"
          alt="img"
        />
      </div>
      <div className="right">
        <h2>Who we are?</h2>
        <p className="info-text">
          We have been operating for over 30 years and are Members of The
          Federation of Master Builders. We work on projects big and small from
          small residential extensions to full house. We are so happy with this
          theme. Everyday it make our lives better.
        </p>
        <ul>
          <li>
            <div className="right-icons">
              <GiCottonFlower className="right-icons-item" />
            </div>
            <p>We care about environment.</p>
          </li>
          <li>
            <div className="right-icons">
              <MdGroups2 className="right-icons-item" />
            </div>
            <p>We're trusted by hundreds of clients.</p>
          </li>
          <li>
            <div className="right-icons">
              <CiHeart className="right-icons-item" />
            </div>
            <p>Social media loves us!</p>
          </li>
          <li>
            <div className="right-icons">
              <GiTwirlyFlower className="right-icons-item" />
            </div>
            <p>This list is super easy to create.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
