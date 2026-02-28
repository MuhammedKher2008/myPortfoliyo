import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import icon1 from "../assets/icon-1.svg";
import icon2 from "../assets/icon-2.svg";
import icon3 from "../assets/icon-3.svg";
import icon4 from "../assets/icon-4.svg";
import icon5 from "../assets/icon-5.svg";
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
          <img src={icon1} alt="icon1" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide">
        <div className="icon-card">
          <img src={icon2} alt="icon1" />{" "}
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide">
        <div className="icon-card">
          <img src={icon3} alt="icon1" />{" "}
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide">
        <div className="icon-card">
          <img src={icon4} alt="icon1" />{" "}
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide">
        <div className="icon-card">
          <img src={icon5} alt="icon1" />{" "}
        </div>
       
      </SwiperSlide>
    </Swiper>
  );
}
