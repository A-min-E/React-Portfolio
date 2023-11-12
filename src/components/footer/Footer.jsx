import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import "./footer.css";

const footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Maw
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://instagram" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Mohamed Amine WISSAR Website. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
