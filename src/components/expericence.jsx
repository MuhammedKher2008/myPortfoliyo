import google1 from "../assets/google1.svg";
import twitter1 from "../assets/twitter1.svg";
import amazon1 from "../assets/amazon1.svg";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContexts";
export default function Experience({ExperienceRef}) {
  const { lang, translations } = useContext(LangContext);
  return (
    <div className="row mt-5" ref={ExperienceRef}>
      <div className="col-md-12">
        <div className="row" style={{ border: "2px solid #202736ff" }}>
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
              +12{" "}
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
                    src={google1}
                    alt="Google"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />

                  {/* Text */}
                  <div>
                    <h6 style={{ marginBottom: "4px", fontWeight: "600" }}>
                      Google
                    </h6>
                    <span style={{ fontSize: "14px", color: "#9aa4b2" }}>
                      2018 – {translations[lang].present}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="card ms-5 ecard mb-4  "
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
                    src={twitter1}
                    alt="twitter"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />

                  {/* Text */}
                  <div>
                    <h6 style={{ marginBottom: "4px", fontWeight: "600" }}>
                      Twitter(X)
                    </h6>
                    <span style={{ fontSize: "14px", color: "#9aa4b2" }}>
                      2015 – 2018
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="card ms-5 ecard  mb-4 "
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
                    src={amazon1}
                    alt="Amazon"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />

                  {/* Text */}
                  <div>
                    <h6 style={{ marginBottom: "4px", fontWeight: "600" }}>
                      Amazon
                    </h6>
                    <span style={{ fontSize: "14px", color: "#9aa4b2" }}>
                      2010 – 2015
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
                  className="p-2  me-2 "
                  style={{ color: "#8f8f92", border: "1px solid #8f8f92" }}
                >
                  python
                </span>
                <span
                  className="p-2  me-2 "
                  style={{ color: "#8f8f92", border: "1px solid #8f8f92" }}
                >
                  angular
                </span>
                <span
                  className="p-2  me-2 "
                  style={{ color: "#8f8f92", border: "1px solid #8f8f92" }}
                >
                  react
                </span>
                <span
                  className="p-2  me-2 "
                  style={{ color: "#8f8f92", border: "1px solid #8f8f92" }}
                >
                  javascript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
