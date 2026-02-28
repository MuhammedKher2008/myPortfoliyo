
import { useContext } from "react";
import { LangContext } from "../contexts/LangContexts";

export default function Education({EducationRef}) {
  const { lang, translations } = useContext(LangContext);
  const data = [
    {
      year: "2020 – 2024",
      school: "MIT",
      desc: "Bachelor’s Degree in Computer Science",
      active: true,
    },
    {
      year: "2018 – 2019",
      school: "Harvard University",
      desc: "Certification in React and Redux, Node.js Developer Course",
    },
    {
      year: "2015 – 2016",
      school: "Stanford University",
      desc: "Certification in Full Stack Web Development",
    },
    {
      year: "2013 – 2015",
      school: "University of Washington",
      desc: "Certification in React and Redux, Node.js Developer Course",
      faded: true,
    },
  ];

  return (
    <div className="row mt-4" ref={EducationRef}>
     
      <div className="row mt-5">
        <div className="col-md-12">
          <div
            style={{
              background: "#191f2b",
              border: "1px solid #202736ff",
              borderRadius: "12px",
              padding: "30px",
              color: "#c9d1d9",
            }}
          >
            {/* TITLE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7CFF7A",
                  fontWeight: "bold",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                >
                  <path
                    className="fill-primary-2"
                    d="M0 22.667V4.66699C0 2.45786 1.79087 0.666992 4 0.666992H22.6667C23.4031 0.666992 24 1.26395 24 2.00033V26.0003C24 26.7367 23.4031 27.3337 22.6667 27.3337H4.66667C2.08933 27.3337 0 25.2443 0 22.667ZM21.3333 24.667V20.667H4.66667C3.56209 20.667 2.66667 21.5625 2.66667 22.667C2.66667 23.7715 3.56209 24.667 4.66667 24.667H21.3333ZM9.33333 3.33366H4C3.26363 3.33366 2.66667 3.93062 2.66667 4.66699V18.4494C3.27284 18.1614 3.95093 18.0003 4.66667 18.0003H21.3333V3.33366H18.6667V14.0003L14 11.3337L9.33333 14.0003V3.33366Z"
                    fill="#9fdd5b"
                  ></path>
                </svg>
              </div>
              <h3 style={{ margin: 0, fontWeight: "700", color: "#fff" }}>
                Education
              </h3>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div style={{ position: "relative", paddingLeft: "50px" }}>
                  {/* line */}
                  <div
                    style={{
                      position: "absolute",
                      left: "22px",
                      top: 0,
                      bottom: 0,
                      width: "2px",
                      background: "rgba(255,255,255,0.15)",
                    }}
                  />

                  {data.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        marginBottom: "28px",
                        opacity: item.faded ? 0.45 : 1,
                      }}
                    >
                      {/* dot */}
                      <span
                        style={{
                          position: "absolute",
                          left: "-38px",
                          top: "6px",
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#6c757d",
                        }}
                      />

                      {/* content */}
                      <div>
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#8b949e",
                          }}
                        >
                          {item.year}:{" "}
                          <span
                            style={{
                              color: "#7CFF7A",
                              fontWeight: "600",
                            }}
                          >
                            {item.school}
                          </span>
                        </span>

                        <div
                          style={{
                            marginTop: "6px",
                            fontSize: "14px",
                            lineHeight: "1.6",
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6">
                {" "}
                <div style={{ position: "relative", paddingLeft: "50px" }}>
                  {/* line */}
                  <div
                    style={{
                      position: "absolute",
                      left: "22px",
                      top: 0,
                      bottom: 0,
                      width: "2px",
                      background: "rgba(255,255,255,0.15)",
                    }}
                  />

                  {data.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        marginBottom: "28px",
                        opacity: item.faded ? 0.45 : 1,
                      }}
                    >
                      {/* dot */}
                      <span
                        style={{
                          position: "absolute",
                          left: "-38px",
                          top: "6px",
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#6c757d",
                        }}
                      />

                      {/* content */}
                      <div>
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#8b949e",
                          }}
                        >
                          {item.year}:{" "}
                          <span
                            style={{
                              color: "#7CFF7A",
                              fontWeight: "600",
                            }}
                          >
                            {item.school}
                          </span>
                        </span>

                        <div
                          style={{
                            marginTop: "6px",
                            fontSize: "14px",
                            lineHeight: "1.6",
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
