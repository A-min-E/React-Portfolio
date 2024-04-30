import React from "react";
import IMG1 from "../../assets/Portfolio1.png";
import IMG2 from "../../assets/Portfolio2.png";
import IMG3 from "../../assets/Portfolio3.png";
import IMG4 from "../../assets/Portfolio4.png";
import IMG5 from "../../assets/Portfolio5.png";
import IMG6 from "../../assets/Portfolio6.png";
import "./portfolio.css";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const data = [
    {
      id: 1,
      image: IMG1,
      title: t("nike-shop"),
      github: "https://github.com/A-min-E",
      demo: "https://nike-shop.rf.gd/?i=1",
    },
    {
      id: 2,
      image: IMG2,
      title: t("fitness-club"),
      github: "https://github.com/A-min-E",
      demo: "https://maw-fitness-club.000webhostapp.com",
    },
    {
      id: 3,
      image: IMG3,
      title: t("coffe-shop"),
      github: "https://github.com/A-min-E",
      demo: "https://maw-coffe-shop.000webhostapp.com",
    },
    {
      id: 4,
      image: IMG4,
      title: t("store-maroc"),
      github: "https://github.com/A-min-E",
      demo: "https://aminestoremaroc.000webhostapp.com",
    },
    {
      id: 5,
      image: IMG5,
      title: t("E-shop"),
      github: "https://github.com/A-min-E",
      demo: "https://maw-fitness.free.nf",
    },
    {
      id: 6,
      image: IMG6,
      title: t("restaurant"),
      github: "https://github.com/A-min-E",
      demo: "https://maw-restaurant.free.nf/",
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
