import React from "react";

import "./services.css";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="services">
    </section>
    
  );
      // <h5>{t("ofr")}</h5>
      // <h2>{t("sers")}</h2>
      // <div className="container services__container"> 
      //   <article className="service">
      //     <div className="service__head">
      //       <h3>{t("udesg")}</h3>
      //     </div>
      //     <ul className="service__list">
      //       <li>
      //         <BiCheck className="sevice__list-icon" />
      //         <p>{t("udesgtxt1")}</p>
      //       </li>
      //       <li>
      //         <BiCheck className="sevice__list-icon" />
      //         <p>{t("udesgtxt2")}</p>
      //       </li>
      //       <li>
      //         <BiCheck className="sevice__list-icon" />
      //         <p>{t("udesgtxt3")}</p>
      //       </li>
      //       <li>
      //         <BiCheck className="sevice__list-icon" />
      //         <p>{t("udesgtxt4")}</p>
      //       </li>
      //       <li>
      //         <BiCheck className="sevice__list-icon" />
      //         <p>{t("udesgtxt5")}</p>
      //       </li>
      //     </ul>
      //   </article>
      //   {/* END OF UI/UX */}
      //   <article className="service">
      //     <div className="service__head">
      //       <h3>{t("webd")}</h3>
      //     </div>
      //     <ul className="service__list">
      //       <li>
      //         <BiCheck className="sevice__list-icon" />
      //         <p>{t("webdtxt1")}</p>
      //       </li>
      //       <li>
      //         <BiCheck className="sevice__list-icon" />
      //         <p>{t("webdtxt2")}</p>
      //       </li>
      //       <li>
      //         <BiCheck className="sevice__list-icon" />
      //         <p>{t("webdtxt3")}</p>
      //       </li>
      //       <li>
      //         <BiCheck className="sevice__list-icon" />
      //         <p>{t("webdtxt4")}</p>
      //       </li>
      //       <li>
      //         <BiCheck className="sevice__list-icon" />
      //         <p>{t("webdtxt5")}</p>
      //       </li>
      //     </ul>
      //   </article>
      //   {/* END OF WEB DEVELOPMENT */}
      // </div>
};

export default Services;
