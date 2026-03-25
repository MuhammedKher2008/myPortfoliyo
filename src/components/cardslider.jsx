import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import icon1 from "../assets/html.svg";
import icon2 from "../assets/bootstrap.svg";
import icon3 from "../assets/javascript.svg";
import icon4 from "../assets/react.svg";
import icon5 from "../assets/mysql.svg";
// Swiper stilleri (ŞART)
import "swiper/css";

export default function CardSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide className="icon-slide">
        <div className="icon-card">
          <img loading="lazy"loading="lazy" src={icon1} alt="html icon" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide">
        <div className="icon-card">
          <img loading="lazy"loading="lazy" src={icon2} alt="bootstrap icon" />{" "}
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide">
        <div className="icon-card">
          <img loading="lazy"loading="lazy" src={icon3} alt="javascript icon" />{" "}
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide">
        <div className="icon-card">
          <img loading="lazy"loading="lazy" src={icon4} alt="react icon" />{" "}
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide">
        <div className="icon-card">
          <img loading="lazy"loading="lazy" src={icon5} alt="mysql icon" />{" "}
        </div>
       
      </SwiperSlide>
    </Swiper>
  );
}
