import { useContext } from "react";
import { LangContext } from "../contexts/LangContexts";
import mylogo from "../assets/mylogo.png";

export default function Navbar({
  onProjectsClick,
  onServicesClick,
  onExperienceClick,
  onEducationClick,
  onMySkillsClick,
  onBlogClick,
  onContactClick,
}) {
  const { lang, setLang, translations } = useContext(LangContext);

  const linkStyle = {
    color: "#fcfdfe",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 0",
  };

  return (
    <>
      <div
        className="row mt-5"
        style={{ border: "3px solid #202736ff", borderRadius: "10px" }}
      >
        {/* LANGUAGE */}
        <div
          className="col-md-1 py-3 d-flex align-items-center justify-content-center"
          style={{ background: "#202736ff" }}
        >
          {/* LANGUAGE DROPDOWN */}
          <div
            className="col-md-1 py-3 d-flex align-items-center justify-content-center"
            style={{ background: "#202736ff" }}
          >
            <div className="dropdown">
              <button
                className="btn text-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ background: "none", border: "none" }}
              >
                {lang.toUpperCase()}
              </button>

              <ul
                className="dropdown-menu dropdown-menu-dark text-center"
                style={{ minWidth: "70px" }}
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setLang("en")}
                  >
                    EN
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setLang("ar")}
                  >
                    AR
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setLang("kr")}
                  >
                    KR
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <div
          className="col-md-10 py-3 d-flex align-items-center"
          style={{ background: "#191f2b" }}
        >
          <img width={50} src={mylogo} alt="logo" />

          {/* DESKTOP MENU */}
          <ul className="menu flex-grow-1 d-none d-md-flex justify-content-center gap-3 list-unstyled m-0 p-0">
            <li>
              <a href="#" className="active" style={linkStyle}>
                {translations[lang].aboutMe}
              </a>
            </li>

            <li>
              <a href="#" style={linkStyle} onClick={onServicesClick}>
                {translations[lang].services}
              </a>
            </li>

            <li>
              <a href="#" style={linkStyle} onClick={onExperienceClick}>
                {translations[lang].Experience}
              </a>
            </li>

            <li>
              <a href="#" style={linkStyle} onClick={onEducationClick}>
                {translations[lang].Education}
              </a>
            </li>

            <li>
              <a href="#" style={linkStyle} onClick={onProjectsClick}>
                {translations[lang].projects}
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle} onClick={onMySkillsClick}>
                {translations[lang].MySkillsr}
              </a>
            </li>

            <li>
              <a href="#" style={linkStyle} onClick={onBlogClick}>
                {translations[lang].blog}
              </a>
            </li>

            <li>
              <a href="#" style={linkStyle} onClick={onContactClick}>
                {translations[lang].contact}
              </a>
            </li>
          </ul>

          {/* DESKTOP SOCIAL */}
          <div className="d-none d-md-flex align-items-center gap-3">
            <a className="text-white" href="#">
              <i className="fa-brands fa-github fs-4 icons"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fa-brands fa-linkedin fs-4 icons"></i>
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="btn text-white d-md-none ms-auto"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <i className="fa-solid fa-bars fs-4"></i>
          </button>
        </div>

        {/* THEME */}
        <div
          className="col-md-1 py-3 d-flex align-items-center justify-content-center"
          style={{ background: "#202736ff" }}
        ></div>
      </div>

      {/* ================= OFFCANVAS ================= */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
        style={{ background: "#191f2b", color: "#fcfdfe" }}
      >
        <div className="offcanvas-header">
          <img width={40} src={mylogo} alt="logo" />
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column align-items-center gap-2">
          <a href="#" style={linkStyle} data-bs-dismiss="offcanvas">
            {translations[lang].aboutMe}
          </a>
          <a href="#" style={linkStyle} data-bs-dismiss="offcanvas">
            {translations[lang].resume}
          </a>
          <a href="#" style={linkStyle} data-bs-dismiss="offcanvas">
            {translations[lang].services}
          </a>
          <a href="#" style={linkStyle} data-bs-dismiss="offcanvas">
            {translations[lang].portfolio}
          </a>
          <a href="#" style={linkStyle} data-bs-dismiss="offcanvas">
            {translations[lang].blog}
          </a>
          <a href="#" style={linkStyle} data-bs-dismiss="offcanvas">
            {translations[lang].contact}
          </a>

          <div
            style={{
              width: "60%",
              height: "1px",
              background: "#9fdd5b",
              margin: "15px 0",
            }}
          />

          <div className="d-flex gap-4">
            <a className="text-white" href="#">
              <i className="fa-brands fa-github fs-4 icons"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fa-brands fa-linkedin fs-4 icons"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
