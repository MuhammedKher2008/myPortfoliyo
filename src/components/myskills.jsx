import { useContext } from "react";
import { LangContext } from "../contexts/LangContexts";
import SkillsSlider from "./skillsSlider";
import SkillsSlider2 from "./skillsSlider2";
export default function MySkills({MySkillsRef}) {
  const { lang, translations } = useContext(LangContext);
  return (
    <div ref={MySkillsRef} className="row mt-5 p-4 shadow-lg" style={{ border: "1px solid #2a3245", borderRadius: "16px", background: "#191f2b" }}> {/* Added Bootstrap padding, shadow, and custom premium borders for consistency */}
      <div className="row">
        <div className="col-md-12 mt-5">
          <div className="d-flex mt-4 align-items-center justify-content-center">
            <svg
              className="text-primary-2 me-2"
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
              {translations[lang].MySkillsr}{" "}
            </span>
          </div>
          <div className="col-md-8 mx-auto  mt-3">
            <h3 className="text-center" style={{ fontSize: "35px" }}>
              {translations[lang].MySkillsr}
            </h3>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-6 d-flex justify-content-center  align-items-center">
          <div className="w-100">
            <div className="row justify-content-center mt-4">
              <div className="col-md-9 align-items-center">
                <SkillsSlider />
                <div className="row justify-content-center mt-4 mb-4">
                  <div className="col-md-10">
                    <SkillsSlider2 />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="col-12 col-md-6">
          <ul>
            <li className="my-3">
              <div className="d-flex">
                <p className="text-capitalize">front-end : </p>
                <span className="ms-2" style={{ color: "#8f8f92" }}>
                  {" "}
                  HTML , CSS , JAVASCRIPT , TYPESCRIPT , REACT , BOOTSTRAP
                </span>
              </div>
            </li>
            <li className="my-3">
              <div className="d-flex">
                <p className="text-capitalize">Back-End : </p>
                <span className="ms-2" style={{ color: "#8f8f92" }}>
                  {" "}
                  PHP  , LARAVEL
                </span>
              </div>
            </li>
            <li className="my-3">
              <div className="d-flex">
                <p className="text-capitalize">Databases : </p>
                <span className="ms-2" style={{ color: "#8f8f92" }}>
                  {" "}
                  MySQL 
                </span>
              </div>
            </li>
            <li className="my-3">
              <div className="d-flex">
                <p className="text-capitalize">Tools & Platforms : </p>
                <span className="ms-2" style={{ color: "#8f8f92" }}>
                  {" "}
                  git , github{" "}
                </span>
              </div>
            </li>
            <li className="my-3">
              <div className="d-flex">
                <p className="text-capitalize">Others : </p>
                <span className="ms-2" style={{ color: "#8f8f92" }}>
                  {" "}
                  RESTful APIs 
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
