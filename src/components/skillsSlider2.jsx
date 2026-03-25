import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import mpi6 from "../assets/mysql.svg";
import mpi7 from "../assets/php.svg";
import mpi8 from "../assets/mpi8.svg";
import mpi9 from "../assets/git.svg";
import mpi10 from "../assets/github.svg";

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
          <img loading="lazy" src={mpi6} alt="react" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img loading="lazy" src={mpi7} alt="react" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img loading="lazy" src={mpi8} alt="react" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img loading="lazy" src={mpi9} alt="react" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img loading="lazy" src={mpi10} alt="react" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
