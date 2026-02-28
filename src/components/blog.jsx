import React from "react";
import blog1 from "../assets/blog1.png"
import { useContext } from "react";
import { LangContext } from "../contexts/LangContexts";
export default function Blog({BlogRef}) {
    const {lang , translations} = useContext(LangContext);
  return (
      <div ref={BlogRef} className="row mt-5 justify-content-center justify-content-around">
        <div className="row">
                <div className="col-md-12 my-4">
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
             Latest Posts
            </span>
          </div>
          <div className="col-md-8 mx-auto  mt-3">
            <h3 className="text-center" style={{ fontSize: "35px" }}>
            from  blog
            </h3>
          </div>
        </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div
            className="card text-white p-3"
            style={{
              background: "#191f2b",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #202736ff",
            }}
          >
            {/* IMAGE */}
            <img
              src={blog1}
              alt="card"
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
              }}
            />

            {/* CEO TAG */}
            <span
              style={{
                position: "absolute",
                top: "190px",
                left: "20px",
                backgroundColor: "#263c27",
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                border: "1px solid #fff",
              }}
            >
              CEO
            </span>

            {/* BODY */}
            <div className="card-body pt-4">
              <p
                style={{
                  fontSize: "14px",
                  color: "#8f8f92",
                  marginBottom: "10px",
                }}
              >
                March 28, 2023 · 3 min read
              </p>

              <h4
                style={{
                  fontWeight: "700",
                  fontSize: "22px",
                  marginBottom: "14px",
                }}
              >
                Optimize Your Web Application for Speed
              </h4>

              <p
                style={{
                  fontSize: "15px",
                  color: "#a1a5ad",
                  lineHeight: "1.6",
                }}
              >
                Stay ahead of the curve with these emerging trends in UI/UX
                design.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div
            className="card text-white p-3"
            style={{
              background: "#191f2b",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #202736ff",
            }}
          >
            {/* IMAGE */}
            <img
              src={blog1}
              alt="card"
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
              }}
            />

            {/* CEO TAG */}
            <span
              style={{
                position: "absolute",
                top: "190px",
                left: "20px",
                backgroundColor: "#263c27",
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                border: "1px solid #fff",
              }}
            >
              CEO
            </span>

            {/* BODY */}
            <div className="card-body pt-4">
              <p
                style={{
                  fontSize: "14px",
                  color: "#8f8f92",
                  marginBottom: "10px",
                }}
              >
                March 28, 2023 · 3 min read
              </p>

              <h4
                style={{
                  fontWeight: "700",
                  fontSize: "22px",
                  marginBottom: "14px",
                }}
              >
                Optimize Your Web Application for Speed
              </h4>

              <p
                style={{
                  fontSize: "15px",
                  color: "#a1a5ad",
                  lineHeight: "1.6",
                }}
              >
                Stay ahead of the curve with these emerging trends in UI/UX
                design.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div
            className="card text-white p-3"
            style={{
              background: "#191f2b",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #202736ff",
            }}
          >
            {/* IMAGE */}
            <img
              src={blog1}
              alt="card"
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
              }}
            />

            {/* CEO TAG */}
            <span
              style={{
                position: "absolute",
                top: "190px",
                left: "20px",
                backgroundColor: "#263c27",
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                border: "1px solid #fff",
              }}
            >
              CEO
            </span>

            {/* BODY */}
            <div className="card-body pt-4">
              <p
                style={{
                  fontSize: "14px",
                  color: "#8f8f92",
                  marginBottom: "10px",
                }}
              >
                March 28, 2023 · 3 min read
              </p>

              <h4
                style={{
                  fontWeight: "700",
                  fontSize: "22px",
                  marginBottom: "14px",
                }}
              >
                Optimize Your Web Application for Speed
              </h4>

              <p
                style={{
                  fontSize: "15px",
                  color: "#a1a5ad",
                  lineHeight: "1.6",
                }}
              >
                Stay ahead of the curve with these emerging trends in UI/UX
                design.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}
