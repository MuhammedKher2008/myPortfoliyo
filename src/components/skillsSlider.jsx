import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import mpi1 from "../assets/mpi1.svg";
import mpi2 from "../assets/mpi2.svg";
import mpi3 from "../assets/mpi3.svg";
import mpi4 from "../assets/mpi4.svg";
import mpi5 from "../assets/mpi5.svg";

import "swiper/css";

export default function SkillsSlider() {
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
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img src={mpi1} alt="react" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img src={mpi2} alt="react" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img src={mpi3} alt="react" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img src={mpi4} alt="react" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="icon-slide2">
        <div className="icon-card2">
          <img src={mpi5} alt="react" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
