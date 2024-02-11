import React, { useEffect } from "react";
import "./About.css";
import AboutHeader from "./AboutHeader";
import AboutStory from "./AboutStory";
import AboutServices from "./AboutServices";
import AboutCounter from "./AboutCounter";

const About = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <AboutHeader />
      <AboutStory />
      <AboutServices />
      <AboutCounter />
    </div>
  );
};

export default About;
