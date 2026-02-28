import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import mpi6 from "../assets/mpi6.svg";
import mpi7 from "../assets/mpi7.svg";
import mpi8 from "../assets/mpi8.svg";
import mpi9 from "../assets/mpi9.svg";
import "swiper/css";

export default function SkillsSlider2() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      speed={3500}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
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
      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img src={mpi6} alt="react" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img src={mpi7} alt="react" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img src={mpi8} alt="react" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img src={mpi9} alt="react" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
