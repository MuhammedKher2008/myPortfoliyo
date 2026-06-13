import { useEffect, useState } from "react";
import CardSlider from "./cardslider";
import { LangContext } from "../contexts/LangContexts";
import { useContext } from "react";
import altigenLogo from "../assets/altigenLogo.png";
export default function AboutMe() {
  const { lang, translations } = useContext(LangContext);
  const text3 = "{Full Stack}";
  const text = translations[lang].hi;

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cycle, setCycle] = useState(0); // kaç tur döndü (0,1,2)

  useEffect(() => {
    let timeout;

    // 1️⃣ Yazma
    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
    }

    // 2️⃣ Silme
    else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, 60);
    }

    // Yazı tamamen yazıldı
    else if (index === text.length && !isDeleting) {
      // sadece ilk turda sil
      if (cycle === 0) {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
    }

    // Yazı tamamen silindi
    else if (index === 0 && isDeleting) {
      setIsDeleting(false);
      setCycle(1);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, cycle, text]);
  useEffect(() => {
    setDisplayText("");
    setIndex(0);
    setIsDeleting(false);
    setCycle(0);
  }, [lang]);

  const text1 = "<span>";
  const text2 = "</span>";

  const text4 = "<p>";
  const text5 = "</p>";
  return (
    <div
      className="row mt-5 p-4 shadow-lg aaaa" /* Added p-4 and shadow-lg for better spacing and depth */
      style={{
        background: "#191f2b",
        border: "1px solid #2a3245" /* Softened border */,
        borderRadius: "16px" /* Increased border radius */,
      }}
    >
      <div className="col-lg-5 d-flex align-items-center justify-content-center p-5">
        <img
          loading="lazy"
          className="img-fluid my-5"
          src={altigenLogo}
          alt=""
        />
      </div>
      <div className="col-lg-6 mt-5">
        <span className="spans" style={{ color: "#26ade1" }}>
          {text1}
        </span>
        <span>{displayText}</span>
        <span className="spans" style={{ color: "#26ade1" }}>
          {text2}
        </span>
        <div className="row">
          <div className="col-lg-8">
            <h1 className="text-capitalize" style={{ fontSize: "50px" }}>
              {translations[lang].junior}{" "}
              <span style={{ color: "#9fdd5b" }}>{text3}</span>{" "}
              {translations[lang].wad}
            </h1>
          </div>
        </div>
        <p style={{ fontSize: "18px" }} className="mt-3">
          <span style={{ color: "#26ade1" }}> {text4}</span>
          {translations[lang].techlonogies}{" "}
          <span style={{ color: "#26ade1" }}>
            {" "}
            javascript, React, mySql, and Laravel...{" "}
          </span>{" "}
          {translations[lang].techlonogies2}{" "}
          <span style={{ color: "#26ade1" }}> {text5}</span>{" "}
        </p>
        <div className="row">
          <div className="col-md-6">
            <CardSlider />
          </div>
          <div
            style={{ color: "#8f8f92" }}
            className=" ms-2 col-md-5 d-flex align-items-end"
          >
            ...{translations[lang].am}
          </div>
        </div>
        <a
          href="../public/muhammed_kher_tammo_cv.pdf"
          download
          className="btn mt-4 px-4 py-2 custom-btn shadow-sm" /* Added custom-btn and padding for premium feel */
        >
          <span
            style={{
              color: "#8f8f92",
              fontWeight: "500",
              letterSpacing: "0.5px",
            }}
          >
            {" "}
            <i className="ri-download-line" style={{ color: "#9fdd5b" }}></i> [
            {translations[lang].downloadmycv}]
          </span>
        </a>
      </div>
    </div>
  );
}
