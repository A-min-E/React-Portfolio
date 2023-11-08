import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkden.com" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="blank">
        <BsGithub />
      </a>
      <a href="https://dribble.com" target="blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
