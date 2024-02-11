import React, { useState } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import Modal from "react-modal";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img
            src="https://medical-site-web.netlify.app/images/medical-dark.png"
            alt="Logo"
          />
        </Link>

        <div className="header-nav">
          <CiMenuBurger
            onClick={() => setModalIsOpen(true)}
            className="header-menu-icon"
          />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className="header-modal"
          >
            <div className="header-modal-list">
              <nav className="modal-nav-link">
                <li>
                  <NavLink className="navlink-item" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink-item" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink-item" to="/department">
                    Departments
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink-item" to="/pricing">
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink-item" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navlink-item" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </nav>
            </div>
          </Modal>
          <nav className="header-nav-items">
            <li>
              <NavLink className="navlink-item" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink-item" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink-item" to="/department">
                Departments
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink-item" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink-item" to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink-item" to="/contact">
                Contact
              </NavLink>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
