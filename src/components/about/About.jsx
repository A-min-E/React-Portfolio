import React from "react";
import ME from "../../assets/Mee.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="about">
      <h5>{t("know")}</h5>
      <h2>{t("me")}</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t("exp")}</h5>
              <small>{t("expNbr")}</small>
            </article>
            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>{t("cln")}</h5>
              <small>{t("clnNbr")}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{t("proj")}</h5>
              <small>{t("projNbr")}</small>
            </article>
          </div>
          <p>{t("textAbout")}</p>
          <a href="#contact" className="btn btn-primary">
            {t("tk")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
