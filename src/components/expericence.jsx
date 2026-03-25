import alaaeldinalhallaklogo from "../assets/alaaeldinalhallaklogo.png";

import { useContext } from "react";
import { LangContext } from "../contexts/LangContexts";
export default function Experience({ExperienceRef}) {
  const { lang, translations } = useContext(LangContext);
  return (
    <div className="row mt-5" ref={ExperienceRef}>
      <div className="col-md-12">
        <div className="row p-4 shadow-lg" style={{ border: "1px solid #2a3245", borderRadius: "16px", background: "#191f2b" }}> {/* Added Bootstrap padding, shadow, and custom premium borders for consistency */}
          <div className="col-lg-6">
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
                {translations[lang].Experience}{" "}
              </span>
            </div>
            <h3 style={{ fontSize: "35px" }} className="ms-5">
              {" "}
              +1{" "}
              <span style={{ color: "#8f8f92" }}>
                {translations[lang].yo}
              </span>{" "}
              {translations[lang].passion}{" "}
              <span style={{ color: "#8f8f92" }}>{translations[lang].fpt}</span>
            </h3>
          </div>
          <div className="row mt-4 ">
            <div className="col-md-5">
              <div
                className="card ms-5 mb-4 ecard "
                style={{
                  maxWidth: "420px",
                  background: "#191f2b",
                  border: "2px solid #202736ff",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              >
                <div
                  className="card-body d-flex align-items-center"
                  style={{ gap: "12px" }}
                >
                  {/* Logo */}
                  <img
                    src={alaaeldinalhallaklogo}
                    alt="Alaa Eldin Al Hallak"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />

                  {/* Text */}
                  <div>
                    <h6 style={{ marginBottom: "4px", fontWeight: "600" }}>
                      Alaa Eldin AlHallak
                    </h6>
                    <span style={{ fontSize: "14px", color: "#9aa4b2" }}>
                      febuary – {translations[lang].present}
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-md-5">
              <h6
                style={{
                  background: "linear-gradient(-90deg,#659932,#9fdd5b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                }}
              >
                {translations[lang].sse}
              </h6>
              <ul>
                <li className="mt-3" style={{ wordSpacing: "15px" }}>
                  {translations[lang].list1}
                </li>
                <li className="mt-3" style={{ wordSpacing: "15px" }}>
                  {translations[lang].list2}
                </li>
                <li className="mt-3" style={{ wordSpacing: "15px" }}>
                  {translations[lang].list3}
                </li>
              </ul>
              <div className=" my-4">
                <span
                  className="p-2 text-capitalize  me-2 "
                  style={{ color: "#8f8f92", border: "1px solid #8f8f92" }}
                >
                  JavaScript
                </span>
                <span
                  className="p-2 text-capitalize  me-2 "
                  style={{ color: "#8f8f92", border: "1px solid #8f8f92" }}
                >
                  Laravel
                </span>
                <span
                  className="p-2 text-capitalize  me-2 "
                  style={{ color: "#8f8f92", border: "1px solid #8f8f92" }}
                >
                  React
                </span>
                <span
                  className="p-2 text-capitalize  me-2 "
                  style={{ color: "#8f8f92", border: "1px solid #8f8f92" }}
                >
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
