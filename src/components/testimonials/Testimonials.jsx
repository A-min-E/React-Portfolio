import React from "react";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.png";
import AVTR3 from "../../assets/avatar3.png";
import AVTR4 from "../../assets/avatar4.png";
import "./testimonials.css";
import { useTranslation } from "react-i18next";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  // const data = [
  //   {
  //     avatar: AVTR1,
  //     name: "Lara Smith",
  //     review: t("revw1"),
  //   },
  //   {
  //     avatar: AVTR2,
  //     name: "Tom Thum",
  //     review: t("revw2"),
  //   },
  //   {
  //     avatar: AVTR3,
  //     name: "Maria Olipo",
  //     review: t("revw3"),
  //   },
  //   {
  //     avatar: AVTR4,
  //     name: "Kathren Fridg",
  //     review: t("revw4"),
  //   },
  // ];
  // return (
  //   <section id="testimonials">
  //     <h5>{t("clnrev")}</h5>
  //     <h2>{t("testim")}</h2>
  //     <Swiper
  //       className="testimonial__container"
  //       // install Swiper modules
  //       modules={[Pagination]}
  //       spaceBetween={40}
  //       slidesPerView={1}
  //       pagination={{ clickable: true }}
  //     >
  //       {data.map(({ avatar, name, review }, index) => {
  //         return (
  //           <SwiperSlide key={index} className="testimonial">
  //             <div className="client__avatar">
  //               <img src={avatar} />
  //             </div>
  //             <h5 className="client__name">{name}</h5>
  //             <small className="client__review">{review}</small>
  //           </SwiperSlide>
  //         );
  //       })}
  //     </Swiper>
  //   </section>
  // );
};

export default Testimonials;
