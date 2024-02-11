import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-box">
            <h3>About us</h3>
            <div className="about-details">
              <p>
                I am text block. Click edit button to
                <br /> change this text. Lorem ipsum dolor sit
                <br /> amet, consectetur. I am text block. Click
                <br /> edit button to change this text. Lorem <br />
                ipsum dolor sit amet, consectetur.
              </p>
              <br />
              <p>
                We are the champions! We are the most
                <br /> amazing theme of all time, yeah.
              </p>
            </div>
          </div>
          <div className="footer-top-box">
            <h3>Latest News</h3>
            <div className="status-date">
              <h4>Simple Post</h4>
              <h4>Apr 20,2023</h4>
            </div>
            <hr />
            <div className="status-date">
              <h4>Happy Patients</h4>
              <h4>Apr 20,2023</h4>
            </div>
            <hr />
            <div className="status-date">
              <h4>Gallery Post</h4>
              <h4>Apr 20,2023</h4>
            </div>
            <hr />
          </div>
          <div className="footer-top-box">
            <h3>Opening Hours</h3>
            <div className="list-date">
              <ul>
                <li>Monday 10AM - 9PM</li>
                <hr />
                <li>Tuesday 10AM - 9PM</li>
                <hr />
                <li>Wednesday 10AM - 9PM</li>
                <hr />
                <li>Thursday 10AM - 9PM</li>
                <hr />
                <li>Friday 10AM - 9PM</li>
                <hr />
                <li>Weekends 10AM - 9PM</li>
              </ul>
            </div>
          </div>
          <div className="footer-top-box">
            <h3>Contact Details</h3>
            <div className="contact-details">
              <p>
                Manchester Road 123-78B, <br />
                Silictown 7854MD, Great Country
              </p>
              <hr />
              <h4>+ 123 456 789</h4>
              <hr />
              <h6 className="email">hello@sitename.com</h6>
              <hr />
              <h6 className="website">http://www.sitename.com/li></h6>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright 2023. All rights reserved.</p>
          <div className="footer-bottom-social">
            <FaFacebookF className="footer-social-icon" />
            <FaTwitter className="footer-social-icon" />
            <FaInstagram className="footer-social-icon" />
            <FaLinkedin className="footer-social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
