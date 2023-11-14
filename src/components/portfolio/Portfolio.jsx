import React from "react";
import IMG1 from "../../assets/Portfolio1.png";
import IMG2 from "../../assets/Portfolio2.png";
import IMG3 from "../../assets/Portfolio3.png";
import IMG4 from "../../assets/Portfolio4.jpg";
import IMG5 from "../../assets/Portfolio5.png";
import IMG6 from "../../assets/Portfolio6.jpg";
import "./portfolio.css";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const data = [
    {
      id: 1,
      image: IMG1,
      title: t("title1"),
      github: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      id: 2,
      image: IMG2,
      title: t("title2"),
      github: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      id: 3,
      image: IMG3,
      title: t("title3"),
      github: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      id: 4,
      image: IMG4,
      title: t("title4"),
      github: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      id: 5,
      image: IMG5,
      title: t("title5"),
      github: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      id: 6,
      image: IMG6,
      title: t("title6"),
      github: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
  ];
  return (
    <section id="portfolio">
      <h5>{t("wrkres")}</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
