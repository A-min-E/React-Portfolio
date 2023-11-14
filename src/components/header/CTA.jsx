import React from "react";
import CV from "../../assets/cvMohamedAmineWISSAR.pdf";
import { useTranslation } from "react-i18next";
const CTA = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="cta">
      <a className="btn" href={CV} download>
        {t("cv")}
      </a>
      <a className="btn btn-primary" href="#contact">
        {t("tk")}
      </a>
    </div>
  );
};

export default CTA;
