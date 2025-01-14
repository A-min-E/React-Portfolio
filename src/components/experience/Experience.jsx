import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="experience">
      <h5>{t("skl")}</h5>
      <h2>{t("mexp")}</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t("frntdev")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">{t("exper")}</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>CSS</h4>
                {/* <small className="text-light">{t("inter")}</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">{t("exper")}</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>React</h4>
                {/* <small className="text-light">{t("exper")}</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* end of frontend */}
        <div className="experience__backend">
          <h3>{t("networking")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>SSL & TLS </h4>
                {/* <small className="text-light">{t("exper")}</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Networking</h4>
                {/* <small className="text-light">{t("inter")}</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Khali Linux  </h4>
                {/* <small className="text-light">{t("exper")}</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Windows Server</h4>
                {/* <small className="text-light">{t("exper")}</small> */}
              </div>
            </article>
            
          </div>
        </div>
        {/* end of networking */}
        <div className="experience__backend">
          <h3>{t("programming")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Python</h4>
                {/* <small className="text-light">{t("exper")}</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>SQL Server</h4>
                {/* <small className="text-light">{t("inter")}</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>PHP</h4>
                {/* <small className="text-light">{t("exper")}</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>MySQL</h4>
                {/* <small className="text-light">{t("exper")}</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* end of programming */}
      </div>
    </section>
  );
};

export default Experience;
