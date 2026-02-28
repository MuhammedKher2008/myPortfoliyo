import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import img1 from "../assets/img-1.png";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContexts";
import proje1 from "../assets/proje1.png"
import proje2 from "../assets/proje2.png"
import proje3 from "../assets/proje3.png"
import "swiper/css";
import "swiper/css/navigation";

export default function Projects({ProjectsRef}) {
  const { lang, translations } = useContext(LangContext);

  const projects = [
    {
      title: translations[lang].project1t,
      desc: translations[lang].project1d,
      client: translations[lang].project1c,
      time: translations[lang].project1time,
      tech: "React, Vite, JavaScript, CSS",
      image: proje3,
    },
    {
      title: translations[lang].project2t,
      desc: translations[lang].project2d,
      client: translations[lang].project2c,
      time: translations[lang].project2time,
      tech: "React, Node.js, Vite, JavaScript, CSS",
      image: proje2,
    },
    {
      title: translations[lang].project3t,
      desc: translations[lang].project3d,
      client: translations[lang].project3c,
      time: translations[lang].project3time,
      tech: "React, Node.js, Vite, JavaScript, CSS",
      image: proje1,
    },
  ];
  return (
    <div ref={ProjectsRef} className="row mt-5"  style={{ border: "2px solid #202736ff" }}>
        <div className="row">
            <div className="col-md-12">
                 <div className="d-flex mt-4 align-items-center ms-5 mb-3 ">
              <svg
                className=" me-2"
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#9fdd5b"></circle>
              </svg>
              <span
                style={{
                  background: "linear-gradient(-90deg,#659932,#9fdd5b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                }}
                className="text-linear-4 d-flex align-items-center"
              >
                {" "}
                {translations[lang].projects}{" "}
              </span>
            </div>
            <h3 style={{ fontSize: "35px" }} className="ms-5">
              {" "}
              {translations[lang].mrw}
            </h3>
            </div>
        </div>
      <div className="col-md-12">
        <div className="carousel-wrapper">
          <Swiper
            loop
            spaceBetween={40}
            slidesPerView={1}
            speed={500} // kayma hissi
            grabCursor
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="carousel-card">
                  <div className="row align-items-center">
                    {/* IMAGE */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{width:"500px" , height:"500px"}}
                        className="img-fluid rounded"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="col-lg-6 text-light">
                      <h2 className="title">{project.title}</h2>
                      <p className="desc">{project.desc}</p>

                      <h6 className="section-title">Project Info</h6>

                      <div className="info">
                        <span>Client</span>
                        <span>{project.client}</span>
                      </div>

                      <div className="info">
                        <span>Completion Time</span>
                        <span>{project.time}</span>
                      </div>

                      <div className="info">
                        <span>Technologies</span>
                        <span>{project.tech}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
