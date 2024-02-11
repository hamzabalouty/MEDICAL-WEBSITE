import React from "react";
import "./Props.css";
import { IoOptions, IoDocumentText, IoDiamondOutline } from "react-icons/io5";
import { FaPen, FaImage, FaStar, FaComment } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { HiComputerDesktop } from "react-icons/hi2";

const Props = () => {
  return (
    <div className="props">
      <div className="props-header">
        <h2>Why choose us?</h2>
        <p>Learn why we're the best Medical Center in town.</p>
      </div>
      <div className="props-container">
        <div className="props-details">
          <div className="box">
            <IoOptions className="props-icon" />
            <h3>Powerful Options</h3>
            <p>
              Take a full control over all aspects of your theme with our truly
              extensive Options Panel.
            </p>
          </div>
          <div className="box">
            <HiComputerDesktop className="props-icon" />
            <h3>Responsive Design</h3>
            <p>
              Engage is a fully responsive and retina ready theme that scales
              well to all mobile devices.
            </p>
          </div>
          <div className="box">
            <FaPen className="props-icon" />
            <h3>Satisfied Clients</h3>
            <p>
              Build any layout you can think of with the most powerful page
              builder Visual Composer.
            </p>
          </div>
          <div className="box">
            <AiFillSound className="props-icon" />
            <h3>Demo Content</h3>
            <p>
              All of presented layouts and theme demo pages are available with a
              single mouse click.
            </p>
          </div>
          <div className="box">
            <FaComment className="props-icon" />
            <h3>Free Support</h3>
            <p>
              Our top-notch support team will be more than happy to answer any
              of your questions.
            </p>
          </div>
          <div className="box">
            <IoDocumentText className="props-icon" />
            <h3>Documentation</h3>
            <p>
              Everything you need to know about the theme is located in the
              extensive documentation.
            </p>
          </div>
          <div className="box">
            <FaStar className="props-icon" />
            <h3>Google Fonts</h3>
            <p>
              All of presented layouts and theme demo pages are available with a
              single mouse click.
            </p>
          </div>
          <div className="box">
            <FaImage className="props-icon" />
            <h3>Premium Sliders</h3>
            <p>
              Engage comes with two most powerful sliders out there: Revolution
              Slider and Layer Slider.
            </p>
          </div>
          <div className="box">
            <IoDiamondOutline className="props-icon" />
            <h3>Styling Options</h3>
            <p>
              Adjust the looks of your theme with the extensive Styling panel.
              Possibilities are endless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Props;
