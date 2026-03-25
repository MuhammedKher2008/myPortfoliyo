import mylogo from "../assets/mylogo.png";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContexts";
export default function Footer() {
  const { lang, translations } = useContext(LangContext);
  const linkStyle = {
    color: "#fcfdfe",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 0",
  };
  return (
    <div className="row my-5">
      <div className="col-md-12 text-center">
        <img loading="lazy"width={100} src={mylogo} alt="" />
      </div>
      <div className="col-md-12 text-center mt-4 mb-4 ">
        <div className="d-none d-md-flex align-items-center justify-content-center gap-3">
          <a className="text-white text-decoration-none" href="#">
            <i className="ri-facebook-circle-fill  fs-4 icons"></i>
          </a>
          <a className="text-white" href="#">
            <i className="fa-brands fa-github fs-4 icons"></i>
          </a>
          <a className="text-white" href="#">
            <i className="fa-brands fa-linkedin fs-4 icons"></i>
          </a>
        </div>
      </div>
      <div className="col-md-12 mb-3 text-center">
        <ul className="menu flex-grow-1 d-none d-md-flex justify-content-center gap-3 list-unstyled m-0 p-0">
          <li>
            <a href="#" className="active" style={linkStyle}>
              {translations[lang].aboutMe}
            </a>
          </li>

          <li>
            <a href="#" style={linkStyle}>
              {translations[lang].services}
            </a>
          </li>

          <li>
            <a href="#" style={linkStyle}>
              {translations[lang].Experience}
            </a>
          </li>

        

          <li>
            <a href="#" style={linkStyle}>
              {translations[lang].projects}
            </a>
          </li>

          <li>
            <a href="#" style={linkStyle}>
              {translations[lang].blog}
            </a>
          </li>

          <li>
            <a href="#" style={linkStyle}>
              {translations[lang].contact}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
