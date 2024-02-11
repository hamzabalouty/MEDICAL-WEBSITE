import React from "react";
import "./About.css";
import { BiSolidLike } from "react-icons/bi";
import { FaHome, FaLightbulb, FaComment } from "react-icons/fa";
import CountUp, { useCountUp } from "react-countup";
import { Odometer } from "odometer_countup";

const AboutCounter = () => {
  useCountUp({
    ref: "counter1",
    end: 1430,
    enableScrollSpy: true,
    scrollSpyDelay: 200,
    plugin: Odometer,
  });
  useCountUp({
    ref: "counter2",
    end: 64,
    enableScrollSpy: true,
    scrollSpyDelay: 200,
    plugin: Odometer,
  });
  useCountUp({
    ref: "counter3",
    end: 960,
    enableScrollSpy: true,
    scrollSpyDelay: 200,
    plugin: Odometer,
  });
  useCountUp({
    ref: "counter4",
    end: 420,
    enableScrollSpy: true,
    scrollSpyDelay: 200,
    plugin: Odometer,
  });
  return (
    <div className="counter about-counter">
      <div className="counter-container">
        <div className="about-counter-details">
          <BiSolidLike className="counter-icon" />
          <h2 id="counter1"></h2>
          <p>Page Likes</p>
        </div>
        <div className="about-counter-details">
          <FaHome className="counter-icon" />
          <h2 id="counter2"></h2>
          <p>Locations</p>
        </div>
        <div className="about-counter-details">
          <FaLightbulb className="counter-icon" />
          <h2 id="counter3"></h2>
          <p>Great Ideas</p>
        </div>
        <div className="about-counter-details">
          <FaComment className="counter-icon" />
          <h2 id="counter4"></h2>
          <p>Comments</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCounter;
