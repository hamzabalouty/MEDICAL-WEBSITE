import React from "react";
import { MdArrowRight } from "react-icons/md";

const ContactBody = () => {
  return (
    <div className="contact-body">
      <div className="contact-container">
        <div className="contact-container-left">
          <h3>Contact Form</h3>
          <div className="name-email-input">
            <div className="name-email-input-rel">
              <input placeholder="Name" className="name-input" />
            </div>
            <div className="name-email-input-rel">
              <input placeholder="Email" className="email-input" />
            </div>
          </div>
          <div className="name-email-subject-rel">
            <input placeholder="Subject" className="subject-input" />
          </div>
          <textarea placeholder="Message" className="textarea"></textarea>
          <button className="contact-btn">Send</button>
        </div>
        <div className="contact-container-right">
          <h3>Contact Information</h3>
          <p>
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet,
            <br />
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar
            <br />
            dapibus leo.
          </p>
          <h4>Our contact details:</h4>
          <ul>
            <li>
              <MdArrowRight className="right-contact-icon" />
              <p>Manchester St 123-78B, Random 7854MD, UK</p>
            </li>
            <li>
              <MdArrowRight className="right-contact-icon" />
              <p>+123 456 789</p>
            </li>
            <li>
              <MdArrowRight className="right-contact-icon" />
              <p>+37 431 456 789</p>
            </li>
            <li>
              <MdArrowRight className="right-contact-icon" />
              <p>hello@sitename.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
