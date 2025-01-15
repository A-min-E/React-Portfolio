import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import "./footer.css";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation();
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
          <a href="#about">{t("me")}</a>
        </li>
        <li>
          <a href="#experience">{t("exp")}</a>
        </li>
        {/* <li>
          <a href="#services">{t("sers")}</a>
        </li> */}
        <li>
          <a href="#portfolio">{t("certs")}</a>
        </li>
        {/* <li>
          <a href="#testimonials">{t("testim")}</a>
        </li> */}
        <li>
          <a href="#contact">{t("contc")}</a>
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
        <small>&copy;{t("quoat")}</small>
      </div>
    </footer>
  );
};

export default Footer;
