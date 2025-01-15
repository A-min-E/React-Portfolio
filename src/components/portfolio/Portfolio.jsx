import React from "react";
import img1 from "../../assets/Diplom.jpg";
import img2 from "../../assets/MicrosoftOffice.jpg";
import img3 from "../../assets/Networking.jpg";
import img4 from "../../assets/ComputerHardware.jpg";
import img5 from "../../assets/Python.jpg";
import img6 from "../../assets/Kali.jpg";
import img7 from "../../assets/SslAndTls.png";
import img8 from "../../assets/SQL.jpg";
import img9 from "../../assets/ReactJs.jpg";
import img10 from "../../assets/HtmlCssJs.jpg";
import img11 from "../../assets/WServer.png";
import "./portfolio.css";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const data = [
    {
      id: 1,
      image: img1,
      title: "Diplom",
      github: "https://github.com/A-min-E",
      // demo: "https://nike-shop.rf.gd/?i=1",
    },
    {
      id: 2,
      image: img2,
      title: "Microsoft Office",
      github: "https://github.com/A-min-E",
      // demo: "https://maw-fitness-club.000webhostapp.com",
    },
    {
      id: 3,
      image: img3,
      title: "Networking",
      github: "https://github.com/A-min-E",
      // demo: "https://wissar.free.nf",
    },
    {
      id: 4,
      image: img4,
      title: "Computer Hardware",
      github: "https://github.com/A-min-E",
      // demo: "https://aminestoremaroc.000webhostapp.com",
    },
    {
      id: 5,
      image: img5,
      title: "Python",
      github: "https://github.com/A-min-E",
      // demo: "https://maw-fitness.free.nf",
    },
    {
      id: 6,
      image: img6,
      title: "Kali Linux",
      github: "https://github.com/A-min-E",
      // demo: "https://maw-restaurant.free.nf/",
    },
    {
      id: 7,
      image: img7,
      title: "SSL and TLS HTTP to HTTPS",
      github: "https://github.com/A-min-E",
      // demo: "https://maw-restaurant.free.nf/",
    },
    {
      id: 8,
      image: img8,
      title: "SQL Server",
      github: "https://github.com/A-min-E",
      // demo: "https://maw-restaurant.free.nf/",
    },
    {
      id: 9,
      image: img9,
      title: "React Js",
      github: "https://github.com/A-min-E",
      // demo: "https://maw-restaurant.free.nf/",
    },
    {
      id: 10,
      image: img10,
      title: "HTML CSS JS",
      github: "https://github.com/A-min-E",
      // demo: "https://maw-restaurant.free.nf/",
    },
    {
      id: 11,
      image: img11,
      title: "Windows Server",
      github: "https://github.com/A-min-E",
      // demo: "https://maw-restaurant.free.nf/",
    },
  ];
  return (
    <section id="portfolio">
      {/* <h5>{t("wrkres")}</h5> */}
      <h2>{t("certs")}</h2>
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
                {/* <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
