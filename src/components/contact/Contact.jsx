import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import { useTranslation } from "react-i18next";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ywch7yf",
        "template_pwnh2fn",
        form.current,
        "HGJalzMW6f67pMxdI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>{t("gettch")}</h5>
      <h2>{"ctncme"}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>wissarmohamedamine@gmail.com</h5>
            <a href="mailto:wissarmohamedamine@gmail.com" target="_blank">
              {t("sndmsg")}
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messaenger</h4>
            <h5>Amine_Wiss</h5>
            <a href="https://m.me/100089973845934" target="_blank">
              {t("sndmsg")}
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+212639475201</h5>
            <a href="https://wa.me/+212639475201" target="_blank">
              {t("sndmsg")}
            </a>
          </article>
        </div>
        {/* END OF CONATCT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder={t("yrnme")} required />
          <input type="email" name="email" placeholder={t("yrmail")} required />
          <textarea
            name="message"
            rows="7"
            placeholder={t("yrmsg")}
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            {t("sndmsg")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
