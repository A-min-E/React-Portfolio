import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me1.png";
import HeaderSocials from "./HeaderSocials";
import SUN from "../../assets/sun.png";
import MOON from "../../assets/moon.png";
import DE from "../../assets/de.png";
import EN from "../../assets/en.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const languageChange = (event) => {
    if (event.target.checked) {
      // console.log("✅ Checkbox is checked");
      i18n.changeLanguage("de");
    } else {
      // console.log("⛔️ Checkbox is NOT checked");
      i18n.changeLanguage("en");
    }
  };

  return (
    <header>
      <div className="lng_mode">
        <input
          className="lng_mode_input"
          type="checkbox"
          id="lng_mode-toggle"
          onChange={languageChange}
        />
        <label className="lng_mode_label" for="lng_mode-toggle">
          <img src={EN} alt="" className="lng_mode_label-pic en-pic" />
          <img src={DE} alt="" className="lng_mode_label-pic de-pic" />
        </label>
      </div>
      {/* end of the language */}
      <div className="container header__container">
        <h5>{t("hello")}</h5>
        <h1>Mohamed Amine WISSAR</h1>
        <h5 className="text-light">{t("job")}</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          {t("godown")}
        </a>
      </div>
    </header>
  );
};

export default Header;
