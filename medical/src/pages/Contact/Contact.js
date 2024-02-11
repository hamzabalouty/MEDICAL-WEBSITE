import React, { useEffect } from "react";
import "./Contact.css";
import ContactHeader from "./ContactHeader";
import ContactBody from "./ContactBody";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <ContactHeader />
      <ContactBody />
    </div>
  );
};

export default Contact;
