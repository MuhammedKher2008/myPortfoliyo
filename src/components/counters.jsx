import { LangContext } from "../contexts/LangContexts";
import { useContext, useEffect, useState } from "react";
export default function Counters() {
  const { lang, translations } = useContext(LangContext);

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const target1 = 1;
  const target2 = 15;
  const target3 = 7;

  useEffect(() => {
    if (counter1 < target1) {
      const timer = setTimeout(() => {
        setCounter1(counter1 + 1);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [counter1]);

  useEffect(() => {
    if (counter2 < target2) {
      const timer = setTimeout(() => {
        setCounter2(counter2 + 1);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [counter2]);

  useEffect(() => {
    if (counter3 < target3) {
      const timer = setTimeout(() => {
        setCounter3(counter3 + 1);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [counter3]);

  return (
    <div
      className="row mt-5 counters d-flex justify-content-center p-4"
      style={{
        border: "2px solid #202736ff",
        borderRadius: "10px",
      }}
    >
      <div className="col-6 col-md-3 ">
        <div className="ms-4">
          <i
            style={{ color: "#9fdd5b", fontSize: "25px" }}
            className="ri-shape-line  "
          ></i>
          <h2 style={{ fontSize: "50px" }}>
            {counter1} <span style={{ color: "#8f8f92" }}>+</span>
          </h2>
          <h4>{translations[lang].ye}</h4>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="ms-4">
          <i
            style={{ color: "#9fdd5b", fontSize: "25px" }}
            className="ri-computer-line "
          ></i>
          <h2 style={{ fontSize: "50px" }}>
            {counter2} <span style={{ color: "#8f8f92" }}>+</span>
          </h2>
          <h4>{translations[lang].pc}</h4>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="ms-4">
          <i
            style={{ color: "#9fdd5b", fontSize: "25px" }}
            className="ri-service-line    "
          ></i>
          <h2 style={{ fontSize: "50px" }}>
            {counter3} <span style={{ color: "#8f8f92" }}>+</span>
          </h2>
          <h4>{translations[lang].hc}</h4>
        </div>
      </div>
    </div>
  );
}
